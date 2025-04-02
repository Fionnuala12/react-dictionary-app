import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import './Phonetics.css'


function Phonetics(props) {
    return (
        <div className="Phonetics">
            <div className="text">
                {props.phonetic.text}
            </div>
            <ReactAudioPlayer 
            src={props.phonetic.audio}
            className="audio-player"
            onPlay
            controls
            />
        </div>
    );
}

export default Phonetics;