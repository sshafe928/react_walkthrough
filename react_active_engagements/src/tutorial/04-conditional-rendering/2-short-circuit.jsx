import {useState} from 'react'

//ternary works, if statments arent allowed in returns
//short circuit evaluation AKA ternary in returns
const ShortCircuit = () => {
    const [text, setText] = useState('Daniel')
    const [isError, setIsError] = useState(false)
    const firstValue = text || 'herro world'
    const secondValue = text && 'herro world'


  return (
    <>
        <h1>{firstValue}</h1>
        <h1>Value: {secondValue}</h1>
        {/* <h1>{text || 'Jhon Doe'}</h1> */}
        <button className="btn" onClick={()=>setIsError(!isError)}>Toggle error</button>
        {isError && <h1>Error....Brain lost</h1>}
        {isError ? (<p>There is an error Please help</p>) : (<div><h2>there is no error</h2></div>)}
        <button className='btn' onClick={()=>setText('')}>Change me</button>
    </>
  )
}

export default ShortCircuit