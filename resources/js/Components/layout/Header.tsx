import logo from "../../../imgs/logo.png"
import React from 'react'

function Header() {
  return (
   <div className="rowContainer header" id="header">
      <h1>SoundStorm</h1>
        <img src={logo} alt="logo" className="logo" />
   </div>
  )
}

export default Header