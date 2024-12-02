    import React, { useState } from 'react';

    const ToggleButton = () => {
    const [isTrue, setIsTrue] = useState(true); 
    const [count, setCount] = useState(0); 

    
    const handleClick = () => {
        setIsTrue(!isTrue); 
        setCount(count + 1); 
    };

    const buttonStyle = {
        backgroundColor: isTrue ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div>
        <p>Current State: {isTrue ? 'True' : 'False'} </p>
        <button style={buttonStyle} onClick={handleClick}>
            Count: {count}
        </button>
        </div>
    );
    };

    export default ToggleButton;