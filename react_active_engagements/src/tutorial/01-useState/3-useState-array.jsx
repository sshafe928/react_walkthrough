import React, {useState} from 'react'
import {data} from '../../data'


function UseStateArray() {
    const [people, setpeople] = useState(data)

    const removeItem = (id) =>{
        let newPeople = people.filter((person)=> person.id !== id)
        setpeople(newPeople)
    }
    return (
    <>
    {people.map((person) =>{
        const {id, name} = person
        return(
            <div className="item">
                <h4>{name}</h4>
                <button onClick={()=> removeItem(id)}>REMOVE</button>
            </div>
        )
    })}

    <button onClick={() => setpeople([])} className="btn">CLEAR ITEMS</button>
    </>
    )
}


export default UseStateArray