import React from 'react'
import Login from "../Components/Login";

function Home(){
  return (
    <div className>
      <header>
        <span className={"font-bold min-h-screen dark:text-white"}>Good morning sunshine, the earth says hello.</span>
      </header>

      <body className="dark:text-white "> div block, span inline for header. </body>
      <div className= "flex flex-wrap justify-center ">
        <img src="https://i.imgur.com/5nzid5I.png"
             className= "max-w-full h-auto"
             alt=""/>
        <div className="absolute translate-x-50 translate-y-50">
          Test
        </div>
      </div>

    </div>
  )
}

export default Home
