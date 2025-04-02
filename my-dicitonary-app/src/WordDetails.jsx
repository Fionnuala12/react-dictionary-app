import React from "react"; 

function WordDetails( {data}) {

    return (
        <div>
            <h2>{data.word}</h2>
            <p><strong> Pronunction:</strong> {data.phonetics || "N/A"} </p>
            <h3> Meanings:</h3>
            <ul> 
                {data.meanings.map((meaning, index) => (
                    <li key={index}>
                        <strong>{meaning.portOfSpeech}: </strong> {meaning.definitions[0].definition}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WordDetails;