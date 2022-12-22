import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/index'
import Sidebar from './components/button/sidebar';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemsListContainer';
function App() {
  const [isOpen, setOpen]= useState(false);
 const onHandlerClick =()=>{
  setOpen(!isOpen);
 }
  return (

    
    <div className="App">
      <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
        <h2>Item list</h2>
      </Sidebar>
      <NavBar></NavBar>
      
      
      <header className="App-header">
      <ItemListContainer gretting = {'Burger'}></ItemListContainer>

        
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
       <Button text='Clickeame' onHandlerClick ={onHandlerClick}/>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;