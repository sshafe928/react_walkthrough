import {useState, useEffect} from 'react'

const url = 'https://api.github.com/users/sshafe928'

const MultipleReturns = () => {
    //webpage state changes: you can use these to setup your own loading screens, progress bars,,, ect as well as a custom error compenet for wrong pages or permsisions
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default-user')

    useEffect(()=>{
        fetch(url)
            .then((resp)=>{
                if(resp.status >= 200 && resp.status <= 299) {
                    return resp.json()
                }
                else{
                    setIsError(true)
                    setIsLoading(false)
                    throw new Error(resp.statusText)
                }
            })

            .then((user)=>{
                const {login} = user
                setUser(login)
                setIsLoading(false)
            })

            .catch((error)=>{
                console.error('Error:', error)
                setIsError(true)
                setIsLoading(false)
            })


        })

        if(isLoading){
            return(
                <div>
                    <h1>Loading....</h1>
                </div>
            )
        }
        if(isError){
            return(
                <div>
                    <h1>Error....</h1>
                </div>
            )
        }



  return (
    <>
    <h1>{user}</h1>
    </>
  )
}

export default MultipleReturns
