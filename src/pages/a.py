import keras
from keras.applications.inception_v3 import InceptionV3
from keras.models import Model
from keras.layers import Flatten, Dense, Input, MaxPooling2D, AveragePooling2D, GlobalMaxPooling2D, GlobalAveragePooling2D
from keras import backend as K
import tensorflow as tf
import numpy as np
import cv2
import pandas as pd
import os

cwd = os.getcwd()

def softlabel(label,num_class):
    softlabel=np.zeros((len(label),num_class))
    ratio = 1.0/50
    for i in range(len(label)):
        for j in range(num_class):
            softlabel[i,j]=1.0 - ratio*np.abs(j-label[i])
    softlabel = np.maximum(softlabel,0)
    return softlabel
	
def SaveImg(filename,filepath,heatmap):
    img = cv2.imread(filepath)
    heatmap = cv2.resize(heatmap,(img.shape[1],img.shape[0]))
    AttentionImg =0.5* heatmap + img
    cv2.imwrite(cwd+'/Dheatmap/'+filename,heatmap)
    cv2.imwrite(cwd+'/Dattention/'+filename,AttentionImg)
	
	
def load_image(path):
    img = cv2.imread(path)
    img = cv2.resize(img,(300,300))
    x = np.asarray(img, dtype=np.float32)
   # img = image.load_img(path, target_size=(448, 448))
   # print (img.shape)
    # x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    return x

def GAPAttention(model,weights,image_path):
    file_list = os.listdir(image_path)
    file_list.sort()
    for filename in file_list:
        filepath=image_path+filename
        print(filepath)
        image=load_image(filepath)
        image = image/255.0
        gender=1.0
        gender= np.asarray(gender)
        gender= np.expand_dims(gender,axis=0)
        layer= K.function([model.layers[0].input, model.layers[3].input],[model.layers[1].get_output_at(-1),model.layers[-1].output])
        print(image.shape, gender.shape, gender)
        print([image,gender])
        GAP,prediction=layer([image,gender])
        GAP=np.squeeze(GAP,axis=0)
        print(GAP.shape)
        index = np.argmax(prediction)
        print(index)
        weight = np.mean(weights[:,index-5:index+5],axis=1)
        heatmap = np.zeros((GAP.shape[0],GAP.shape[1]))
        for k in range(GAP.shape[2]):
            heatmap = heatmap + weight[k]*GAP[:,:,k]
        heatmap = heatmap/np.max(heatmap)
        heatmap = np.uint8(255*heatmap)
        print (heatmap.shape)
        heatmap = cv2.applyColorMap(heatmap,cv2.COLORMAP_JET)
        SaveImg(filename,filepath,heatmap)
    print ('********** Done ***********')

train = pd.read_csv(cwd+"/rsna-bone-age/boneage-training-dataset.csv")
test = pd.read_csv(cwd+"/rsna-bone-age/boneage-test-dataset.csv")

train['id'] = train['id'].astype(str)

train['id'] = train['id']+'.png'
train['male'].replace({False : 0, True : 1}, inplace=True)

train_images = []
train_target = []
train_gender = []

val_images = []
val_target = []
val_gender = []

test_images = []
test_target = []
test_gender = []

l = len(train['id'])

for i in range(0, l-1000):
    img = tf.keras.utils.load_img(cwd+'/rsna-bone-age/boneage-training-dataset/boneage-training-dataset/'+train['id'][i], grayscale=False, target_size=(300,300,3))
    train_images.append(np.asarray(img) /255.)
    train_target.append(train['boneage'][i])
    train_gender.append(train['male'][i])
    if(i % 1250 == 0):
        print(i, 'Image Train Loaded')
print('Train Image Loaded !!')


for i in range(l-1000, l-500):
    img = tf.keras.utils.load_img(cwd+'/rsna-bone-age/boneage-training-dataset/boneage-training-dataset/'+train['id'][i], grayscale=False, target_size=(300,300,3))
    val_images.append(np.asarray(img) /255.)
    val_target.append(train['boneage'][i])
    val_gender.append(train['male'][i])

print('\nValidation Image Loaded !!')

for i in range(l-500,l):
    img = tf.keras.utils.load_img(cwd+'/rsna-bone-age/boneage-training-dataset/boneage-training-dataset/' +
                                  train['id'][i], grayscale=False, target_size=(300, 300, 3))
    test_images.append(np.asarray(img) / 255.)
    test_target.append(train['boneage'][i])
    test_gender.append(train['male'][i])

print('test Image Loaded !!')

train_images = np.asarray(train_images)
train_target = np.asarray(train_target)
train_gender = np.asarray(train_gender)

val_images = np.asarray(val_images)
val_target = np.asarray(val_target)
val_gender = np.asarray(val_gender)

test_images = np.asarray(test_images)
test_target = np.asarray(test_target)
test_gender = np.asarray(test_gender)

train_target = softlabel(train_target,240)
val_target = softlabel(val_target,240)
test_target = softlabel(test_target,240)

base = InceptionV3(weights=cwd+'/inception_v3_weights_tf_dim_ordering_tf_kernels_notop.h5', include_top=False)
input = Input(shape=(300,300,3), name='in1')
input_gender = Input(shape=(1,), dtype='float32', name='in2')
gender_emb = Dense(16)(input_gender)


x = base(input)
x = GlobalAveragePooling2D(pool_size=(8,8))(x)
x = Flatten()(x)
final = keras.layers.Concatenate(axis=1)([x,gender_emb])
predictions = Dense(240)(final)

model = Model(inputs=[input,input_gender], outputs=predictions)


Adam = keras.optimizers.adam_v2.Adam(lr=0.0003,beta_1=0.9,beta_2=0.999)
model.compile(optimizer=Adam, loss='mean_absolute_error', metrics=['MAE'])

checkpoint = keras.callbacks.ModelCheckpoint(filepath=cwd+'/weights/weights-classification.{epoch:02d}-{val_loss:.2f}.hdf5', save_weights_only=True, period=15)

history = model.fit([train_images, train_gender], train_target, batch_size=32, epochs=50,
                    verbose=1, callbacks=[checkpoint], validation_data=([val_images, val_gender], val_target))
history = model.fit([train_images,train_gender],train_target,batch_size=32,epochs=20,verbose=1, callbacks = [checkpoint], validation_split=0.1)
score = model.evaluate([val_images,val_gender],val_target, batch_size=2)

model.load_weights(cwd+'/weights/weights-classification.30-0.07.hdf5')

#Adam=keras.optimizers.adam_v2.Adam(lr=0.00001,beta_1=0.9,beta_2=0.999)
#model.compile(optimizer=Adam, loss='mean_absolute_error', metrics=['MAE'])

#history = model.fit([train_images,train_gender],train_target,batch_size= 32,epochs=31,verbose=1, callbacks = [checkpoint], validation_split=0.1)
#score = model.evaluate([val_images,val_gender],val_target, batch_size=32)

weights=model.layers[-1].get_weights()[0]

GAPAttention(model, weights, cwd+'/R1masked/')