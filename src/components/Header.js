import React from 'react'
import { useState } from 'react'

const Header = ({click}) => {
   const [isDarkMode, setisDarkMode] = useState(false)
     function onDarkModeClick(){
       setisDarkMode(!isDarkMode)
       click(isDarkMode)
     }
  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
  )
}

export default Header