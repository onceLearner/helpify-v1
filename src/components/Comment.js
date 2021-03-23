import React from 'react'
import Img1 from "../register.jpg"
import Img2 from "../marjane.jpg"

const Comment = () => {
    return (
        <div className="w-full py-10 mb-10 px-6 mt-10">
            <h1 className="text-5xl text-hamid text-center " style={{ fontWeight: "600" }}>
                Comment ca marche?
            </h1>

            <div className="text-lg  text-gray-700 p-8 ">
                Choisir un type d'activite:
            </div>


            <div className="flex flex-wrap  space-x-12  w-full    px-2 justify-center">

                <div className="flex flex-col">
                    <img src={Img1} className="w-80 h-60 object-cover" />
                    <p className="bg-gray-400   text-gray-50 text-center p-2"> Jargenage</p>
                </div>
                <div className="flex flex-col">
                    <img src={Img2} className="w-80 h-60 object-cover" />
                    <p className="bg-gray-400   text-gray-50 text-center p-2"> faire les courses</p>
                </div>

                <div className="flex flex-col">
                    <img src={Img1} className="w-80 h-60" />
                    <p className="bg-gray-400   text-gray-50 text-center p-2"> Jargenage</p>
                </div>





            </div>





        </div>
    )
}

export default Comment
