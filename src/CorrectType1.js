import React from 'react';
import Capitalize from './Capitalize';

export function CorrectType1({targetType, chosenType}) {
    if (targetType == chosenType) {
        return (
            <div className = "tableCell field correct"> <Capitalize string = {chosenType}/> </div>
        )
    }
    else {
        return (
            <div className = "tableCell field wrong"> <Capitalize string = {chosenType}/> </div>
        )
    }
    
}

export default CorrectType1;
