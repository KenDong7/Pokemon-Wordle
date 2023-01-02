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
        let wrong = ["Really?", "No.", "Are you kidding me?", "Not even close...", "Are you even trying?", "WRONG!!", "What?"]
        let num = counter % 7
        return (
            <p id="result">{wrong[num]}</p>
        )
    }
}

export default Result;