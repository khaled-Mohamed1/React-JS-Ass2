import React, { useState } from "react";

const Ass1 = () => {
    const [text, setText] = useState('Hello World');

    const clickMe = () => {
        setText('Hello Palestine');
    }

    return(
        <div>
            <p>{text}</p>
            <button onClick ={clickMe}>Click to change the text</button>
        </div>
    )
}

const Ass3 = () =>{

    const[sentence, sentences] = useState([
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "sed do eiusmod tempor incididunt",
        "ut labore et dolore magna aliqua",
        "quis nostrud exercitation",
        "Excepteur sint occaecat cupidatat",
        "Duis aute irure dolor",
        "Ut enim ad minima veniam",
        "sed quia non numquam eius",
        "dolore magnam aliquam",
    ]);

    const [index, setIndex] = useState(0);

    var randomSentence = () => {
        let ranSent = Math.floor(Math.random() * 10);
        return setIndex(ranSent);
    }



    return(
        <div>
            <p>{sentence[index]}</p>
            <button onClick={()=>{randomSentence()}}>Click to change sentence</button>
        </div>
    )
}



export  {Ass1, Ass3};