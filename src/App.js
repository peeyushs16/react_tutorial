
import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js';
import Textform from './component/Textform.js';
import About from './component/Aboutus';
import Alert from "./component/Alert";

function App() {

  const [ThemeMode, setThemeMode] = useState('dark');
  const [btnText, setBtnText] = useState('Enable Light Mode');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const [myStyle, setMyStyle] = useState({
      color: 'white',
      backgroundColor : 'black'
  });

  const toggleTheme = () => {
      if(ThemeMode === 'dark'){
        setBtnText('Enable Dark Mode');
        setMyStyle({
          color: 'black',
          backgroundColor : 'white'
        });
        setThemeMode('light');
        showAlert('Light mode enabled', 'success');
      }else{
        setBtnText('Enable Light Mode');
        setMyStyle({
          color: 'white',
          backgroundColor : 'black'
      });
        setThemeMode('dark');
        showAlert('Dark mode enabled', 'success');
      }
  }

  const changeTheme =  () =>{

    // setMyStyle({
    //   color: 'white',
    //   backgroundColor : color
    // });
    console.log('props');
  }

  // const changeGreen =  () =>{
  //   setMyStyle({
  //     color: 'white',
  //     backgroundColor : 'green'
  //   });
  // }

  // const changeYellow =  () =>{
  //   setMyStyle({
  //     color: 'white',
  //     backgroundColor : 'yellow'
  //   });
  // }

  // const changeRed =  () =>{
  //   setMyStyle({
  //     color: 'white',
  //     backgroundColor : 'red'
  //   });
  // }

  
  const handleColor = (event) => {

    setMyStyle({
      color: 'white',
      backgroundColor : event.target.value
    });
 
  }

  return (
    <>
      <Navbar title="Textutils" mode={ThemeMode} myStyle={myStyle} toggleTheme={toggleTheme} btnText={btnText} handleColor={handleColor} changeTheme={changeTheme} />
      <Alert alert={alert}/>
      <div className="container">
          <Textform heading="Enter you text here"  showAlert={showAlert}/>
      </div>
      <div className="container">
        <About myStyle={myStyle}/>
      </div>
    </>
  );
}

export default App;
