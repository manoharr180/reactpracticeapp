import MuiNavbar from './components/Skeleton/MuiNavbar'
import './components/Skeleton/main.css'
import React from 'react'


import './App.css';
import Routers from './Routes';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">  
    <MuiNavbar/>
      <Routers/>
      <Footer/>
      </div>
      
      
  );
}

export default App;
