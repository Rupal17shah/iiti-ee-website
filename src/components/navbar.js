import React from 'react';
import logo from '../images/img1.png';
import bg from '../images/bg1.png'



const mainPage = () => {

    let myStyle = {
        color : 'red',
        backgroundColor: 'rgba(4, 47, 82, 0.8)',
        borderColor: '#042F52',
        width: '1920px',
        height: '170px',
        left: '0px',
         top: '0px'

    }
  return (



    <nav className="navbar navbar-expand-sm navbar-dark bg-success" >
    <div className="container-fluid " style={myStyle}>
        <img src={logo} alt="" />
      <a className="navbar-brand  mx-3" href="#">Indian Institute of Technology , Indore</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About us</a>
          </li>			
          <li className="nav-item">
            <a className="nav-link" href="#">People</a>
          </li>			
          <li className="nav-item">
            <a className="nav-link" href="#">Reasearch</a>
          </li>			
          <li className="nav-item">
            <a className="nav-link" href="#">Academics</a>
          </li>			
        </ul>		  
      </div>
    </div>
    
  </nav>
   
   
   

        

   
    
  )
}

export default mainPage


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import logo from '../images/img1.png';
// import bg from '../images/bg1.png'


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
       
//         width: '1920px',
//         height: '170px'
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         color: 'black'
//     },
//     title: {
//         flexGrow: 1,
//         color: 'black'
//     },
//     appBarTransparent: {
//         backgroundColor: 'rgba(4, 47, 82,0.8)'
//     },
//     // rgba(4, 47, 82, 0.8);
//     appBarSolid: {
//         backgroundColor: 'rgba(67, 129, 168)'
//     },
//     logo: {
//      position: 'absolute',
//      width: '114px',
//      height: '123px',
//      left: '47px',
//      top: '24px'
//     },
//     bg:{
//         position: 'absolute',
//         width: '1920px',
//         height: '597px',
//         left: '0px',
//         top: '0px'
//     }
   

    
// }));

// export default function ButtonAppBar() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <AppBar position="fixed" className={classes.appBarTransparent}>
//                 <Toolbar>
//                     <div className={classes.logo}>
//                     <img src={logo} alt="" />

//                     </div>
                    
                    
//                 <Typography variant="h6" className={classes.title}>
//                     Indian Institute of Technology , Indore
//                </Typography>
//                     <Button color="black">Home</Button>
//                     <Button color="black">About us</Button>
//                     <Button color="black">People</Button>
//                     <Button color="black">Research</Button>
//                     <Button color="black"></Button>
//                 </Toolbar>
//             </AppBar>
//             <div className={bg}>
//             <img src={bg} alt="" />

//             <div className="container text-center">
//   <div className="row align-items-start">
//     <div className="col">
//       One of three columns
//     </div>
//     <div className="col">
//       One of three columns
//     </div>
//     <div className="col">
//       One of three columns
//     </div>
//   </div>
//   <div className="row align-items-center">
//     <div className="col">
//       One of three columns
//     </div>
//     <div className="col">
//       One of three columns
//     </div>
//     <div className="col">
//       One of three columns
//     </div>
//   </div>
//   <div className="row align-items-end">
//     <div className="col">
//       One of three columns
//     </div>
//     <div className="col">
//       One of three columns
//     </div>
//     <div className="col">
//       One of three columns
//     </div>
//   </div>
// </div>

//             </div>
            
//         </div>
        
//     );
// }

