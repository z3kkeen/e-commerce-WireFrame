import React from 'react'

export default function Header() {
  return (
  
    <header>
      <div className="headerContent">
        <p className="new">*NEW</p>
        <div className="line"></div>
        <img className="headerImg" src="public\icon home.png" alt="home button" />
        <div className="line"></div>
        <a href="/register">
          <div className="profile"></div>
        </a>

        <a href="/" className="goHome">
          <div className="siteName">
            <p>SITE</p>
            <h1>NAME</h1>
          </div>
        </a>
        

        <a className="checkoutA" href="/checkout">
          <div className="checkout"></div>
        </a>
        <div className="line"></div>
        <img className="headerImg" src="public\icon menu.png" alt="options" />
      </div>
        
    </header>
  )
}
