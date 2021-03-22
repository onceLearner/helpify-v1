import React, { useState } from 'react'
import { FaHandsHelping } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { BsLock } from "react-icons/bs"
import { ImSpinner } from "react-icons/im"
import { GiCheckMark, GiSwordSpin } from "react-icons/gi"

import axios from "axios"

import RegisterImg from "../register.jpg"
import RegisterImgPsd from "../registerPsd.png"




  
class Login extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["email"] = "";
        input["password"] = "";
        this.setState({input:input});
  
        alert('Login succesfully');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
    
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (

        
      <div>

<div className=" flex flex-wrap h-screen " style={{ fontFamily: "Montserrat" }} >
        <div className="md:w-1/2 w-full border flex flex-col items-center space-y-4  py-12 gap-3  ">
            <div className="flex flex-wrap  items-center ">
                <p className="text-4xl " style={{ color: "#6F4BFF" }}>
                    Helpify
             </p>
                <FaHandsHelping className="text-blue-400" style={{ color: "#31E7EE" }} size="50px" />
            </div>
    <form onSubmit={this.handleSubmit}>
            <div className="flex flex-col gap-3">
                <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-80">
                    <FiUser className="text-gray-200 mr-3" />
                    <input   
                     type="text" 
                     className="focus:outline-none placeholder-gray-300 "
                     name="email" 
                     value={this.state.input.email}
                     onChange={this.handleChange}
                     class="form-control" 
                     placeholder="Enter email" 
                     id="email" />
                </div>
                <div className="text-danger">{this.state.errors.email}</div>
                <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-80">
                    <BsLock className="text-gray-200 mr-3" />
                    <input  type="password" className="focus:outline-none placeholder-gray-300 " 
                     name="password"
                     value={this.state.input.password} 
                     onChange={this.handleChange}
                     placeholder="Enter password"
                     class="form-control" 
                    
                    
                    />
                </div>


      <div className="text-danger">{this.state.errors.password}</div>
  </div>

  

            <div className="flex items-center text-gray-300 text-sm gap-2">
                <input type="checkbox" />
                <div>  Remember me </div>
            </div>
            <button type="submit" value="Submit" class="btn btn-success" className="p-3 text-white w-80 font-semibold text-lg   bg-gradient-to-r from-blue-400 to-purple-500  md:w-80  rounded-3xl">
                Login
              </button>
      

            <div className="text-sm text-gray-400">
                Not a user yet ? <span className="cursor-pointer" style={{ color: "#6F4BFF" }}> Register Here</span>
            </div>
            <div>
            </div>
            </form>
        </div>
      

        <div className="md:w-1/2   bg-blue-200 overflow-hidden " style={{}} >
            <img src={RegisterImgPsd} className="h-full w-full object-cover" />
            <p className="transform text-gray-300 text-3xl  text-center translate-x-6 -translate-y-96">" When we give cheerfully and accept gratefully, everyone is blessed "</p>

        </div>
       

    </div >
       
      </div>
    );
  }
}
  
export default Login;



















