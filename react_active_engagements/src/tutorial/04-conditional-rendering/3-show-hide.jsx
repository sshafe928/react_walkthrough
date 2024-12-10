import {useState, useEffect} from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(false)
    
  return (
    <>
    <button className="btn" onClick={()=>setShow(!show)}>Show/hide</button>
    {show && <Item/>}
    </>
  )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth, window.innerHeight)
    const checkSize=()=>{
        setSize([window.innerWidth, window.innerHeight])
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => window.removeEventListener('resize', checkSize)
    }, [])

    return (
        <div>
            <h1>Window Size:</h1>
            <p>{size} px</p>
        </div>
    )   
}

export default ShowHide