
import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js';
import Textform from './component/Textform.js';
import About from './component/Aboutus';
import Alert from "./component/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
        document.title = "Light Mode";
      }else{
        setBtnText('Enable Light Mode');
        setMyStyle({
          color: 'white',
          backgroundColor : 'black'
      });
        setThemeMode('dark');
        showAlert('Dark mode enabled', 'success');
        document.title = "Dark Mode";
      }
  }

  const changeTheme =  (color) =>{
    setMyStyle({
      color: 'white',
      backgroundColor : color
    });
  }
  
  const handleColor = (event) => {
    
    document.body.style.backgroundColor = '#1b7898';
    setMyStyle({
      color: 'white',
      backgroundColor : event.target.value
    });
 
  }

  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={ThemeMode} myStyle={myStyle} toggleTheme={toggleTheme} btnText={btnText} handleColor={handleColor} changeTheme={changeTheme} />
      <Alert alert={alert}/>

      <Routes>
          <Route exact path="/About"  element={<About myStyle={myStyle}/>} >
          </Route>
          <Route path="/" element={<Textform heading="Enter you text here"  showAlert={showAlert}/>} />
      </Routes>


      </Router>
    </>
  );
}

export default App;
