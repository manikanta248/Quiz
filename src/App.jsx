import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import Navbar from './Components/Navbar';
import './App.css'
import Quiz from './Screens/Quiz';
import AdminScreen from './Screens/AdminScreen';


function App() {

  return (
    <>
    
    
    <Router>
    <div>
    <Navbar/>
    <div style={{height:"70px"}}></div>
    </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='/admin' element={<AdminScreen/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
