import React from 'react'
import { useState, useEffect } from 'react';

import "./App.css";
// comment
const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profession, setProfession] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password, profession);

        const body = {
            username,
            password,
            profession
        }

        const users = fetch('http://localhost:5000/user', {
            method: 'POST',
            body: JSON.stringify(body),
        })
        return users;
    }

   

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>username</span>
            <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <label>
            <span>password</span>
            <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <label>
            <span>profession</span>
            <input 
            type="text" 
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            />
        </label>
        <button>Register</button>
    </form>
  )
}

export default App