import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   <div className='contner'>
    <div>
    <p className="h3">MORE ABOUT ELECTRICAL DEPARTMENT</p>
    <div  className='row'>
    
    <img className='image col col-12 col-xl-4 col-sm-12 col-md-4 col-lg-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmO-x-d7QL5c0OsFAAQizEPlE66a8rg24_gw&usqp=CAU' alt='...' ></img>
    <p className="text col col-xl-7 col-md-8	col-lg-8">Welcome to the website of the Department of Electrical Engineering, IIT Indore.
The department offers B.Tech, M.S (Research), M.Tech and Ph.D. programs in Electrical Engineering. The department currently has 15 faculty
members with expertise in diverse areas including Power Systems and Power Electronics, Integration of Renewable Energy Sources, Smart Grid, Nanotechnology and Nanoelectronics, Communications and Networking, 
Signal Processing, Bio-photonics.
<br></br>
<button type="button" className="btn"><a href="learn.html" class="link">Learn More</a></button></p>
    
</div>
    
   
</div>
   </div>
   <div className='cnt'>

   </div>
   
   </>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
