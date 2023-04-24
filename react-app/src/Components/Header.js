import React from 'react'
import Navigation from "./Navigation";

function Header(){
  return (
    <header className={"border-b p-3 flex justify-between items-center dark:text-white"}>
      <span className = "font-bold dark:text-white">
        Weary Emoji but a website
      </span>
      <Navigation/>
    </header>
  )
}

export default Header
