import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}
export default App;
