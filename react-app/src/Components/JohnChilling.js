import React from 'react'

//Class to use props.
class JohnChilling extends React.Component{

  render(){
    return (
      <div className="border-slate 100 border-b rounded-t-xl min-h-screen">
        <div className="justify-center dark:text-white" >John Cena speaks Chinese, crazy.</div>
        <h1 className="dark:text-white"> Prop test - Just Kidding i removed it lol</h1>
        <div class="flex flex-wrap justify-center">
          <img src="https://i.imgur.com/rLsBxXl.gif"
               class="max-w-full h-auto rounded-lg"
               alt=""
               />
        </div>
      </div>
    )
  }
}
//function to use props.
function HelloTheWorld(props){
  return (

    <header>
      <h1>Good morning sunshine, the earth says hello.</h1>
      <h1> Prop test - {props.name}</h1>
    </header>


  )
}


export default JohnChilling

//Prop test for simple text.
/*

 */
