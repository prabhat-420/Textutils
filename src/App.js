// import logo from './logo.svg';
// let name = "Hritik"
// import './App.css';
// import About from "./components/About";
import React, { useState } from 'react'
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
function App() {
  const [mode, setMode] = useState('light')
  const [inpTxt, setInpTxt] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)
  const removeAllClass = () => {
    document.body.classList.remove()
  }
  const toggleMode = (cls) => {
    removeAllClass();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'dark') {
      setMode('light')
      setInpTxt('Enable Dark Mode')
      document.body.style.backgroundColor = '#3482ba'
      showAlert('Dark mode is enabled', 'success')

    }
    else {
      setMode('dark')
      setInpTxt('Enable Light Mode')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is enabled', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>
      {/* <Navbar title="React" aboutText="About" mode={mode} toggleMode={toggleMode} inpTxt={inpTxt} /> */}
      {/* <Alert alert={alert} /> */}
      <div className="container mb-3">
        <Router>
        <Navbar title="React" aboutText="About" mode={mode} toggleMode={toggleMode} inpTxt={inpTxt} />
        <Alert alert={alert} />
          <Routes>
            <Route path='/' element={<Textform heading="Enter the text to be analysed" mode={mode} showAlert={showAlert} />}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;