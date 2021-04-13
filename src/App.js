import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DisplaySimpson from "./components/DisplaySimpson"; 



function App() {
  const [simpson , setSimpson] = useState([]);
useEffect(()=> {
 axios
  .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
  .then((response) => response.data.quote)
  .then((data) => {
  setSimpson(data.result.quote);
});     
}, [])

  return (
   <div className='App'>
      <DisplaySimpson />
      <button type="button" onClick={}>Simpsons Quote</button>
   </div>
    
  );
}

export default App;
