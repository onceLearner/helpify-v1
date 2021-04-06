import React, { useState, useEffect, useRef } from 'react'

import { Link } from "@reach/router"
import Navbar from './components/navbar2'






const Dashboard = () => {


    return (
        
        <div className="flex flex-col  w-full" style={{ fontFamily: "Montserrat" }}>
            
           
            <div className="w-full h-82   absolute top-0 right-0 left-0 z-50  flex flex-col " style={{ height: "800px" }}>
                <Navbar />
                
                <button type="submit" value="Submit"  className=" absolute top-40 right-20  p-3 text-white w-80 font-semibold text-lg   bg-gradient-to-r from-blue-400 to-purple-500  md:w-80  rounded-3xl  " >
                        New help request
                </button>
              
        
                
            </div>

         
            

           
        </div>
        
    )
}

export default Dashboard
