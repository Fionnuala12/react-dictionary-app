import React from "react";
import './Photos.css';

function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos"> 
            <div className="row">
                {props.photos.map((photo, index) => (
                    <div className="col-6 col-md-4" key={index}>
                        <a href={photo.src.original} target='_blanks'>
                            <img src={photo.src.landscape} alt="searchedWord" className="img-fluid" />
                        </a>
                        </div>
                ))}
            </div>
            </section>
        )
    } else {
        return null;
    }

}

export default Photos