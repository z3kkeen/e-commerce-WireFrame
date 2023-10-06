import React from 'react'

export default function Header() {
  return (
  
    <header>
      <div className="headerContent">
        <p className="new">*NEW</p>
        <div className="line"></div>
        <img className="headerImg" src="public\icon home.png" alt="home button" />
        <div className="line"></div>
        <img className="headerImg" src="public\icon profile.png" alt="profile" />

        <div className="siteName">
          <p>SITE</p>
          <h1>NAME</h1>
        </div>

        <img className="headerImg" src="public\icon shopping cart.png" alt="shopping cart" />
        <div className="line"></div>
        <img className="headerImg" src="public\icon menu.png" alt="options" />
      </div>
        
    </header>
  )
}
