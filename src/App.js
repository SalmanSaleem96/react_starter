import React from 'react';
import './App.css'
import Routine from './routine.js';

function App() {
  return (
    <div className="App">
      <h1>Izhan Daily routine shows through props</h1>
      <Routine education="School" time="7:15 am" />
      <br/>
      <hr/>
      <Routine education="Madressa" time="2:30 pm" />
      <br/>
      <hr/>
      <Routine education="Play" time="5 pm" />
    </div>
  )

}

export default App;
