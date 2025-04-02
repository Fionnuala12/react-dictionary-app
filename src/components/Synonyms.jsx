import React from "react";
import './Synonyms.css';


function Synonyms (props) {
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
                {props.synonyms.map((synonyms, index) => (
                    <li key={index}>
                        {synonyms}
                    </li>
                )
                )}
            </ul>
        )
    } else {
        return null;
    }

}

export default Synonyms;
