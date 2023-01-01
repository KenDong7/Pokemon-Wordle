import React from 'react';

export function CorrectWeight({targetWeight, chosenWeight}) {
    if (targetWeight == chosenWeight) {
        return (
            <div className = "tableCell field correct"> {chosenWeight} lbs </div>
        )
    }
    else if (targetWeight < chosenWeight) {
        return (
            <div className = "tableCell field high"> {chosenWeight} lbs </div>
        )
    }
    else {
        return (
            <div className = "tableCell field low"> {chosenWeight} lbs </div>
        )
    }
    
}

export default CorrectWeight;
