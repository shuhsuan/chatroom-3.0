import { API_KEY_GRAMMAR } from "../config";
import { useState } from "react";

const Grammar = ({message}) => {

    const[correction, setCorrection] = useState("");

    const url = 'https://grammarbot-neural.p.rapidapi.com/v1/check';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': API_KEY_GRAMMAR,
            'X-RapidAPI-Host': 'grammarbot-neural.p.rapidapi.com'
        },
        body: {
            text: {message},
            lang: 'en'
        }
    };

    const check = () => {

        //clear old search
        //setCorrection("");
        console.log(message)

        fetch(url, options)
        .then((response) => response.json())
        .then((data) => {

            console.log(data) //should be array of objects
            setCorrection(data.correction); //grammar correction in data
            console.log(data.correction) //should be a string
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return(
        <div>
        <button onClick={check}>Check Grammar</button>
        <p>{correction}</p>
        </div>
    )
}

export default Grammar;

//Not working, error 500