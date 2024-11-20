import React, { useState } from 'react';

export const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "John Doe",
        age: 30,
        message: 'Peter Cottontail is DYING'
    });

    const changeMessage = () => {
        if (person.message === "Peter Cottontail is DYING") {
            setPerson({ ...person, message: 'Peter Cottontail is ALIVE' });
        } else {
            setPerson({ ...person, message: 'Peter Cottontail is DYING' });
        }
    };

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <button onClick={changeMessage} className="btn">CHANGE THE MESSAGE</button>
        </>
    );
};

export default UseStateObject;