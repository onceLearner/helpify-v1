import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Disponibilte from './components/dashboardHelper/disponibilite'
import Navbar from './components/navbar2'

const DashboardHelper = () => {


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
        <div style={{ fontFamily: "Montserrat" }}>

            <Navbar isHelper={true} userInfo={userInfo} />

            <div className="w-full flex flex-col  p-3 ">
                <p>Votre diponibilite:</p>

                <button className="absolute right-10 p-2 border border-gray-600 w-80"> Modifier ma disponibilite </button>

                <Disponibilte />

            </div>




        </div>
    )
}

export default DashboardHelper
