import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <TextForm heading="Enter text" mode={mode} showAlert={showAlert}></TextForm>
      {/* <About></About> */}
    </>
  );
}

export default App;
