import React, { useState, useEffect, useRef } from 'react'

import { Link } from "@reach/router"
import Navbar from './components/navbar2'
import Main from "./components/DashD/main/main";

const Dashboard = () => {
    return (
        <div className="flex flex-col  w-full" style={{ fontFamily: "Montserrat" }}>
           <Navbar />
           <div className="w-full flex flex-col "> 
                
                <Main />
           </div>   
        
        </div>

    )
}

export default Dashboard
