import "./main.css";
import Card from "../../card";
import {BsTrash} from 'react-icons/bs'
import React, { Component } from 'react'

export default class Main extends Component {
  state= {
    cards:[],
    counter:0,
   }
   newCard = ()=>{
    this.setState({counter : this.state.counter+1})
    this.setState({cards:[...this.state.cards,{
          ID : this.state.counter ,
          comp:<Card ID={this.state.counter}/>}]})
   }
  render() {
    return (
      <main>

<div className="main__container">

<button type="submit" value="Submit"  onClick={this.newCard} className=" absolute top-20 right-20  p-3 text-white w-80 font-semibold text-lg   bg-gradient-to-r from-blue-400 to-purple-500  md:w-80  rounded-3xl  " >
                        +New help request
</button> 

{/* <!-- MAIN CARDS STARTS HERE --> */}
<div className="main__cards">
{this.state.cards.map(Element=>{
  
  return Element.comp
})}
  

</div>
{/* <!-- MAIN CARDS ENDS HERE --> */}

</div>

</main>
  );
  }
}
