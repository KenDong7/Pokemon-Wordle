import React from 'react';
import Capitalize from './Capitalize';

export function CorrectWeight({targetWeight, chosenWeight}) {
    if (targetWeight == chosenWeight) {
        
        return (
            
            <div className = "tableCell field correct" id = "type1" > <Capitalize string = {chosenWeight}/> </div>
        )
    }
    else {
        return (
            <div className = "tableCell field wrong" id = "type1" > wrong </div>
        )
    }
    
}

export default CorrectWeight;
