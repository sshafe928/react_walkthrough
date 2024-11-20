// this is an exapmple of why we need to use useState ans not variables\


import React, { useState } from 'react';

const ErrorExample = () =>{
    let title='the giver'

const handleClick = () =>{
    title = 'the outsiders'
    console.log(title) 
}

return(
    <>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change title</button>
    </>
)
}

export default ErrorExample

//without a useState method the title only changes in the console.log but not rerendering the page
// this will also fail becasue we do not have a way of preserving variables between renders

//now that you can see why you would error and the usecase for useSatae
//lets make it work