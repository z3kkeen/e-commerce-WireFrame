import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterBox() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const router = useNavigate();

  async function handleSubmit(e:React.FormEvent) {
    e.preventDefault();
    const res = await fetch('http://10.111.3.78:3001/api/register', {
      method: 'Post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({email, password, age, name})
    });

    const data = await res.json()
    console.log(data);
    
    if(data.msg === 'Users created') {
      router('/login', {replace: true});
    } else {
      setError(data.detail)
    }
  }
  return (
    <div className="box">
        <div className="boxHeader">
            <h1 className="firstTime"><i>FIRST TIME SHOPPING <br/>WITH US?</i>  </h1>
            <h1 className="regHere">REGISTER HERE:</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="inputs">
              <input placeholder="Email, Phone..." className="email" type="email" onChange={(e) => setEmail(e.target.value)} />
              <input placeholder="Create password..." className="password" type="password" onChange={(e) => setPassword(e.target.value)} />
              <input placeholder="Age..." className="age" type="number" onChange={(e) => setAge(parseInt(e.target.value))} />
              <input placeholder="Your name..." className="name" type="name" onChange={(e) => setName(e.target.value)} />
              <button className="subButton" type="submit">Sign Up</button>
              {error && <span style={{color: 'red'}}>{error}</span>}
          </div>
        </form>

        <a href="/login" className="skipReg">
            <p><u>Login page</u></p>
        </a>
    </div>
  )
}
