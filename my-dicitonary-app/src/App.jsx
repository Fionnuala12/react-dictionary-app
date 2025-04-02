import { useState } from 'react'
import SearchBar from './SearchBar.jsx';
import WordDetails from './WordDetails.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import './App.css'

function App() {

  const [wordData, setWordData] = useState(null); // Store API response
  const [error, setError] = useState(null); // Store error message

  // Function to get meaning of the word
  async function fetchWord(word) {
    setError(null);
    setWordData(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error ("Word not found");
      } 
      const data = await response.json();
      setWordData(data[0]);
    } catch (err) {
      setError(err.message);
    }
  }


  return (
    <div> 
     <h1>My Dicitonary App</h1> 
     <SearchBar onSearch={fetchWord}/>
     {error && <ErrorMessage message={error} />}
     {wordData && <WordDetails data={wordData} />}
    </div>
  );
}

export default App
