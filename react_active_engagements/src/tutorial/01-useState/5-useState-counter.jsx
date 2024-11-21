import React, {useState} from 'react'

const UseStateCounter = () => {

    const [value, setvalue] = useState(0)

    const reset =  () =>{
        setvalue(0)
    }

    const complexIncrease = () =>{
        setTimeout(()=>{
            // setvalue(value + 1)
            setvalue((prevState)=>{
                return prevState + 1
            })
        }, 2000)
    }
  return (
    <>
    <section style={{margin:'4rem 0 '}}>
        <h2>Regular Counter</h2>
        <p>{value}</p>
        <button className="btn" onClick={()=> setvalue(value - 1)}>Decrease</button>
        <button className="btn" onClick={reset}>Reset</button>
        <button className="btn" onClick={()=> setvalue(value + 1)}>Increase</button>
        
    </section>
    <section>
        <h2>Complex Counter</h2>
        <p>{value}</p>
        <button className="btn" onClick={complexIncrease}>Increase later</button>
    </section>
    </>
  )
}

export default UseStateCounter