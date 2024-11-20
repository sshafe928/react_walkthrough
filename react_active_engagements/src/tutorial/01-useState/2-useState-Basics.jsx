import React, {useState} from 'react'

//remember the component name must be uppercase
// invoke inside the function not outside
//dont call hooks conditionally
function UseStateBasics() {
    const [text, setText] = useState("Dont click")

    //function to change text
    const handleClick = () => {
        if(text === "Dont click"){
            setText("Hey! don't click")
        }else if(text === "Hey! don't click"){
            setText("Meanie")
        }else if(text === "Meanie"){
            setText("STOP!")
        }else if(text === "STOP!"){
            setText("I mean it")
        }else if(text === "I mean it"){
            setText(":<")
        }else{
            setText("Dont click")
        }
    }
    return (
    <>
    <h1>{text}</h1>
    <button type='submit' className="btn" onClick={handleClick} >Change title</button>
    </>
    )
}

export default UseStateBasics