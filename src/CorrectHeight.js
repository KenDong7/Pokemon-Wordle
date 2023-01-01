import React from 'react';

export function CorrectHeight({targetHeight, chosenHeight}) {
    if (targetHeight == chosenHeight) {
        return (
            <div className = "tableCell field correct"> {chosenHeight} " </div>
        )
    }
    else if (targetHeight < chosenHeight) {
        return (
            <div className = "tableCell field high"> {chosenHeight} " </div>
        )
    }
    else {
        return (
            <div className = "tableCell field low"> {chosenHeight} " </div>
        )
    }
}

export default CorrectHeight;
