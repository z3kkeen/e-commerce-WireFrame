import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginBox() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useNavigate();
  
    async function handleSubmit(e:React.FormEvent){
        e.preventDefault()
        const res = await fetch('http://10.111.3.78:3001/api/login', {
            method: 'Post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const data = await res.json()
        
        console.log(data)

        if(data.msg === 'you are logged in') {
          router('/', {replace: true})
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
            <input placeholder="Email, Phone..." className="email" type="email" onChange={(e)=>setEmail(e.target.value)} />
            <input placeholder="Password..." className="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
            <button className="subButton" type="submit">Sign Up</button>
          </div>
        </form>
        
        <a href="/register" className="skipReg">
            <p><u>Sign up instead?</u></p>
        </a>
    </div>
  )
}
