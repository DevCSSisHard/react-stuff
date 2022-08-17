import React from 'react'

//Class to use props.
class HelloWorld extends React.Component{

  render(){
    return (
      <header>
        <h1>John Cena speaks Chinese, crazy.</h1>
        <h1> Prop test - Just Kidding i removed it lol</h1>
      </header>
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


export default HelloWorld

//Prop test for simple text.
/*

 */
