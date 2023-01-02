import React from 'react';

export function Result({targetName, chosenName, counter}) {
    if (targetName == chosenName) {
        if (counter != 1) {
            return (
                <p id="result">Congrats. Guessed in {counter} Tries</p>
                )
        }
        else {
            return (
                <p id="result">You looked at Console &gt;:&#40;</p>
                ) 
        }
    }
    else {
        let wrong = ["Really?", "No.", "Are you kidding Me?", "Not even Close", "Are you even Trying?", "WRONG", "What?"]
        let num = Math.floor(Math.random() * 7);
        return (
            <p id="result">Nope</p>
        )
    }
}

export default Result;