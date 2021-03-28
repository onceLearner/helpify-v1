import React, { useState, useEffect, useRef } from 'react'
import Img from "./moroccan1.jpg"
import Img2 from "./home9.jpg"

import { Link } from "@reach/router"
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Comment from './components/Comment'
import Community from './components/Community'
import Contact from './components/Contact'





const Home = () => {

    const HomeRef = useRef()
    const CommentREf = useRef()
    const CommunityRef = useRef()
    const ContactRef = useRef()


    const arrRef = [{ refName: HomeRef, tabName: "Accueil" }, { refName: CommentREf, tabName: "processus" }, { refName: CommunityRef, tabName: "Community" }, { refName: ContactRef, tabName: "Contact" }]





    return (
        <div className="flex flex-col  w-full" style={{ fontFamily: "Montserrat" }}>
            <div className=" relative" style={{ height: "800px" }}>

                <img className="w-full h-full object-cover z-0   " src={Img2} style={{ backgroundPosition: "bottom right" }} />

            </div>
            <div ref={HomeRef} className=" absolute top-0 right-0 left-0  bottom-0 bg-gradient-to-b from-gray-700 to-indigo-800 opacity-70  text-white " style={{ height: "800px" }}  >
            </div>

            <div className="w-full h-82  absolute top-0 right-0 left-0 z-50  flex flex-col " style={{ height: "800px" }}>
                <Navbar refs={arrRef} />
                <div className="flex flex-col  space-y-10 mt-40 ml-20 ">
                    <h1 className="text-4xl w-2/3 text-gray-100 " style={{ fontWeight: "600" }}>
                        Fugiat est tempor mollit duis voluptate consectetur velit magna commodo occaecat cupidatat veniam tempor.
                    </h1>
                    <h2 className="text-gray-300 text-sm  pb-10 ">
                        Nisi irure quis consequat pariatur aliquip laboris non ad. <br />
                        Elit ea aliqua irure amet non in qui esse.
                    </h2>
                    <Link to="/register" >
                        <a className=" p-3 px-6 text-white text-xl   bg-hamid rounded-3xl " style={{ fontWeight: "500" }}>Inscrivez vous Maintenant </a>
                    </Link>
                </div>
            </div>


            <div className=" flex-1 flex flex-col ">
                <div ref={CommentREf} >
                    <Comment />
                </div>

                <div ref={CommunityRef}>
                    <Community />
                </div>
                <div ref={ContactRef}>
                    <Contact />
                </div>

            </div>


            <footer >
                <Footer />
            </footer>

        </div>
    )
}

export default Home
