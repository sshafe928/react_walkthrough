import {useState, useEffect} from 'react'
import React from 'react'
const url = 'http://api.github.com/users'

//second arguments




const UseEffectFetchData = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () =>{
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
        console.log(users)
    }

    useEffect(()=>{
        getUsers()
    }, [])

  return (
    <>
    <h3>Github Users:</h3>
    <ul className="users">
        {users.map((user)=>{
            const {id, login, avatar_url, html_url} = user
            return(
                <li key={id}>
                    <img src={avatar_url} alt={login} />
                    <div>
                        <h4>{login}</h4>
                        <a href={html_url}>Profile</a>
                    </div>
                </li>
            )

})}
    </ul>
    </>
  )
}

export default UseEffectFetchData