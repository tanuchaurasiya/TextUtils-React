import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
// import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      {/* <TextForm heading="Enter text"></TextForm> */}
      <About></About>
    </>
  );
}

export default App;
