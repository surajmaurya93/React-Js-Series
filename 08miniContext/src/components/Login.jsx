import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import { use } from 'react'

function Login() {

    const [username, setUserame] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUserame(e.target.value)}
                placeholder='Username' />
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
