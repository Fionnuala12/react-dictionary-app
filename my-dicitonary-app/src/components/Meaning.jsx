import React from "react";
import Synonyms from "./Synonyms";
import './Meanings.css';

function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.portOfSpeech}</h3>
            <ol>
                {props.meaning.definitions.map((definition, index) => (
                    <div key={index}>
                        <li>
                            {definition.definition}
                        <br />
                        <div className="example"> 
                            {definition.example}
                            </div>
                            <Synonyms synonyms={definition.synonyms} />
                            </li>
                        </div>
                ))}
            </ol>
        </div>
    )

}

export default Meaning;