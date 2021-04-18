import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DisplaySimpson from "./components/DisplaySimpson"; 



function App() {
  const [simpson , setSimpson] = useState([]);

const getSimpson = () => {
axios
  .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
  .then((response) => response.data)
  .then((data) => setSimpson(data[0]));
}; 

useEffect (()=>{
getSimpson();}, 
[]);

  return (
   <div className='App'>
    <h1>The Simpson API</h1>
    <DisplaySimpson simpson={simpson}/>
    <button type="button" onClick={getSimpson}>Click</button>
   </div>
  );
}

export default App;
