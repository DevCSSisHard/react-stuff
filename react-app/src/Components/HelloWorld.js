import React from 'react'

//Class to use props.
class HelloWorld extends React.Component{

  render(){
    return (
      <h1> Hello prop named {this.props.name}      </h1>
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
