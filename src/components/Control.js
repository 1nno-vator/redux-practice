import React from 'react';

export default function Control({ onPlus, onSubstrat, onSetColor }) {
    return (
        <div>
            <button onClick={onPlus}>+</button>
            <button onClick={onSubstrat}>-</button>
            <button onClick={onSetColor}>Randomize Color</button>
        </div>
    )
}

function createWarning(funcName) {
    return () => console.log(funcName + ' is not defined');
}

Control.defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubstract: createWarning('onSubstract'),
    onSetColor: createWarning('onSetColor'),
}