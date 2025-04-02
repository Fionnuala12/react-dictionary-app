import React from 'react';
import Dictionary from './components/Dictionary';
import './App.css'

function App() {

  return (
    <div className="dictionary-app-wrapper"> 
    <div className="App">
      <div className="container">
        <header className='App-header'>
     <h1>My Dicitonary App</h1> 
     </header>
    <main>
      <Dictionary defaultKeyWord = "sunset"/>
    </main>
    <footer>
      <a href="https://github.com/Fionnuala12/react-dictionary-app">Open-source code</a> by Fionnuala Wilson
    </footer>
    </div>
    </div>
    </div>
  );
}

export default App
