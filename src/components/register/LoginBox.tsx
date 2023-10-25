import React from 'react'

export default function LoginBox() {
  return (
    <div className="box">
        <div className="boxHeader">
            <h1 className="firstTime"><i>FIRST TIME SHOPPING <br/>WITH US?</i>  </h1>
            <h1 className="regHere">REGISTER HERE:</h1>
        </div>


        <div className="inputs">
            <input placeholder="Email, Phone..." className="email" type="email" />
            <input placeholder="Create password..." className="password" type="password" />
            <button className="subButton" type="submit">Sign Up</button>
        </div>

        <a href="/">
            <p><u>no thanks, skip to store</u></p>
        </a>
    </div>
  )
}
