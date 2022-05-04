import React from 'react';

const CheckBox = ( {text} ) => {
    const inputStyle = {
        height: '20px',
        width: '20px',
        justifyContent: 'center',
        float: 'right'
    }
    
    return (
        <div>
            <p><input type="checkbox" id="answer.text" style={inputStyle}/> { text } </p>
        </div>
    );
};

export default CheckBox;