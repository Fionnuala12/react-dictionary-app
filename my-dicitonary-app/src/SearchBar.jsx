import React, { useState } from "react";

function SearchBar({onSearch}) {
    const [inputWord, setInputWord] = useState(""); 

    function handleSearch(event) {
        const newWord = event.target.value; 
        console.log(newWord);
        setInputWord(newWord);
    }

    function handleSubmit() {
        if(inputWord.trim() !== "") {
            onSearch(inputWord);
        }
    }

    return (
        <div className="form"> 
        <input onChange={handleSearch} type="text" placeholder="Enter a word.." value={inputWord}></input>
        <button onClick={handleSubmit}> Search </button>
        </div>
    )
}

export default SearchBar;