import React, {useState} from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css'

function Dictionary(props) {

    const [keyword, setKeyword] = useState(props.defaultKeyWord);
    const [result, setResults] = useState(null);
    const [photos, setPhotos] = useState(null); 
    const [loaded, setLoaded] = useState(false);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handlePexelResponse(response) {
        setPhotos(response.data.photos);
    }

    function load(){
        setLoaded(true); 
        search()
    }

    function search() {
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelApiKey = "563492ad6f91700001000001bcb21aadf95a4c2fa47af05c2bb6bd20";
        const pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        const headers = { Authorization: pexelApiKey};
        axios.get(pexelApiUrl, {headers}).then(handlePexelResponse).catch(error => {
            console.error("Pexels API Error:", error);
        });
    }

 
    if(loaded){
        return(
            <div className="Dictionary"> 
            <section>
            <h2>What would you like to look up? </h2>
            <form onSubmit={handleSubmit}> 
                <input type="search" placeholder="Enter a word..." className="search-bar" defaultValue={props.defaultKeyword} onChange={handleKeywordChange} />
            </form>
            </section>
            <Results results={result}/>
            <Photos photos={photos} />
            </div>
        )
    } else {
        load()
        return (
            <div className="loader">
            <Hourglass
              type="Hourglass"
              colors={['#306cce', '#72a1ed']}
              height={100}
              width={100}
              timeout={3000}
              ariaLabel="hourglass-loading" 
              style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              />
              </div>
        ) 
    }    
    }

export default Dictionary;