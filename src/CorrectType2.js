import React from 'react';
import Capitalize from './Capitalize';

export function CorrectType2({targetType, chosenType}) {
    if (targetType == null && chosenType == null) {
        return (
            <div className = "tableCell field correct"> None </div>
        )
    }
    else if (targetType == chosenType) {
        return (
            <div className = "tableCell field correct"> <Capitalize string = {chosenType}/> </div>
        )
    }
    else if (targetType == null && chosenType != null) {
        return (
            <div className = "tableCell field wrong"> <Capitalize string = {chosenType}/> </div>
        )
    }
    else if (targetType != null && chosenType == null) {
        return (
            <div className = "tableCell field wrong"> None </div>
        )
    }
    else {
        return (
            <div className = "tableCell field wrong"> <Capitalize string = {chosenType}/> </div>
        )
    }
}

export default CorrectType2;
