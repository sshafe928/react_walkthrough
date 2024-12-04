import {useState, useEffect} from 'react'

//clean up fucntions

import React from 'react'

const UseEffectCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () =>{
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        console.log('UseEffect')
        window.addEventListener('resize', checkSize)
        return ()=>{
            console.log('CleanUp')
            window.removeEventListener('resize', checkSize)
        }
    })
    console.log('render component')

  return (
    <>
        <h1>Window Size:</h1>
        <h2>{size}px</h2>
    </>
  )
}

export default UseEffectCleanUp