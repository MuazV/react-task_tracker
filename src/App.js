import React, { useState, useEffect } from 'react';
import Header from './components/Header.js'
import './App.css';

function App() {
  const [tasks, SetTasks] = useState([
    {
      id:1,
      text : "electricity bill",
      day : "Feb 17th at 01.00am"
    },
    {
      id:2,
      text : "Birthday",
      day : "Sept 15th 8.00pm"
    }
  ])
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
