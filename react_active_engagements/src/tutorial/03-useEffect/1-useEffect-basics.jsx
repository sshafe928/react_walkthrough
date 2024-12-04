import {useState, useEffect} from 'react'

//by default useeffect runs after every rerender


const UseEffectBasics= () => {
    const [value, setValue] = useState(0)
    useEffect(()=>{
        console.log('useEffect triggered')
        if(value > 0){
            document.title=`New Messages: (${value})`
        }
    })
    console.log('Rendering Component')

return (
    <>
    <h1>{value}</h1>
    <button className="btn" onClick={()=>{setValue(value + 1)}}>Add</button>
    </>

)


}
export default UseEffectBasics
