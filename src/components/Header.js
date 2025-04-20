import React, {useState} from 'react'

const Header = ({ isDarkMode, onDarkModeClick }) => {

  return (
      <header className={"App " + (isDarkMode ? "dark" : "light")}>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
  )
}

export default Header