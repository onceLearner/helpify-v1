import React from 'react'
import Img1 from "../../src/community1.jpg"
import Img2 from "../../src/community2.jpg"
import Img3 from "../../src/community3.jpg"


const Community = () => {
    return (
        <div className="flex py-16 flex-col items-center  bg-gradient-to-b from-purple-700 to-indigo-700 text-gray-50">
            <h1 className="text-5xl px-2  mb-6" style={{ fontWeight: "600" }}> Une communaute tres implique</h1>

            <div className="flex flex-wrap  md:space-x-8 mt-6 md:space-y-0 space-y-10 md:p-20 p-4  ">

                <div className="flex  flex-col items-center space-y-5 md:w-60 p-2 w-full ">
                    <img src={Img1} className="rounded-full w-40 h-40 object-cover " />
                    <h2 className="text-xl text-hamid " > Abdellah</h2>

                    <p >
                        "
                        Enim labore eu irure qui cillum reprehenderit aliquip deserunt irure deserunt amet in amet.
                        "
                </p>

                </div>

                <div className="flex  flex-col items-center space-y-5 md:w-60 p-2 w-full " >
                    <img src={Img2} className="rounded-full w-40 h-40 object-cover" />
                    <h2 className="text-xl text-hamid "> Abdellah</h2>

                    <p>
                        "
                        Enim labore eu irure qui cillum reprehenderit aliquip deserunt irure deserunt amet in amet.
                        "
                </p>

                </div>


                <div className="flex  flex-col items-center space-y-5 md:w-60 p-2 w-full">
                    <img src={Img3} className="rounded-full w-40 h-40 object-cover " />
                    <h2 className="text-xl text-hamid"> Abdellah</h2>

                    <p>
                        "
                        Enim labore eu irure qui cillum reprehenderit aliquip deserunt irure deserunt amet in amet.
                        "
                </p>

                </div>

                <div className="flex  flex-col items-center space-y-5 md:w-60 p-2 w-full " >
                    <img src={Img2} className="rounded-full w-40 h-40 object-cover" />
                    <h2 className="text-xl text-hamid"> Abdellah</h2>

                    <p>
                        "
                        Enim labore eu irure qui cillum reprehenderit aliquip deserunt irure deserunt amet in amet.
                        "
                </p>

                </div>




            </div>

        </div>
    )
}

export default Community
