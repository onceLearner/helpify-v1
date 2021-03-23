import React from 'react'
import Img1 from "../../src/community1.jpg"
import Img2 from "../../src/community2.jpg"
import Img3 from "../../src/community3.jpg"


const Community = () => {
    return (
        <div className="flex py-16 flex-col items-center  bg-gradient-to-b from-purple-700 to-indigo-700 text-gray-50">
            <h1 className="text-5xl " style={{ fontWeight: "600" }}> Une communaute tres implique</h1>

            <div className="flex flex-wrap  space-x-8 p-20">
                <div className="flex  flex-col space-y-5 w-60 p-2">
                    <img src={Img1} className="rounded-full w-40 h-40 object-cover " />
                    <h2 className="text-xl text-hamid"> Abdellah</h2>

                    <p>
                        "
                        Enim labore eu irure qui cillum reprehenderit aliquip deserunt irure deserunt amet in amet.
                        "
                </p>

                </div>

                <div className="flex  flex-col space-y-5 w-60 p-2 " >
                    <img src={Img2} className="rounded-full w-40 h-40 object-cover" />
                    <h2 className="text-xl text-hamid"> Abdellah</h2>

                    <p>
                        "
                        Enim labore eu irure qui cillum reprehenderit aliquip deserunt irure deserunt amet in amet.
                        "
                </p>

                </div>


                <div className="flex  flex-col space-y-5 w-60 p-2">
                    <img src={Img3} className="rounded-full w-40 h-40 object-cover " />
                    <h2 className="text-xl text-hamid"> Abdellah</h2>

                    <p>
                        "
                        Enim labore eu irure qui cillum reprehenderit aliquip deserunt irure deserunt amet in amet.
                        "
                </p>

                </div>

                <div className="flex  flex-col space-y-5 w-60 p-2 " >
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
