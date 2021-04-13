import React, { useState, useEffect, useRef } from 'react'

import { Link } from "@reach/router"
import Navbar from './components/navbar2'
import axios from 'axios';
import Card from './components/dashboardDemand/card';






const Dashboard = () => {

    const [cards, setCards] = useState([{ id: 1 }])


    const [userInfo, setUserInfo] = useState({ id: 1, name: "hamid" });

    useEffect(() => {


        const url = {
            remote: "https://helpify-back.herokuapp.com/findUser",
            local: "http://localhost:8081/findUser"
        }


        axios.get(url.remote + "?email=" + localStorage.getItem("email")).then(
            res => {

                setUserInfo(res.data)
            })



    }, [])




    return (

        <div className="flex flex-col  w-full space-y-5" style={{ fontFamily: "Montserrat" }}>


            <div className="Navbar w-full    " >
                <Navbar isHelper={false} userInfo={userInfo} />

            </div>


            <div className="Button flex flex-wrap justify-between md:mr-20 md:mt-4">
                <div className="hidden md:block">

                </div>
                <button onClick={() => setCards([...cards, { id: cards.length + 1 }])} type="submit" value="Submit" className="   p-3 text-white w-80 font-semibold text-lg   bg-gradient-to-r from-blue-400 to-purple-500  md:w-80  rounded-3xl  " >
                    New help request
                </button>

            </div>






            <div className="Cards   flex flex-wrap space-x-5">

                {
                    cards.map(item => (
                        <Card id={item.id} setCards={setCards} cards={cards} />
                    ))
                }
            </div>















        </div>

    )
}

export default Dashboard
