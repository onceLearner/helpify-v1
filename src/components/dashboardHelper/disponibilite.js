import React, { useState, useEffect } from 'react'
import { IconClock, IconClose, IconDateFilled, IconEdit, IconPause, IconTrash } from '../svg/mainIcons'
import { MdDirectionsBike, MdDirectionsWalk } from "react-icons/md"
import { BiMapPin } from "react-icons/bi"
import { FaHandsHelping } from "react-icons/fa"
import Modal from './Modal'



const Disponibilte = ({ id }) => {

    const [openModal, setOpenModal] = useState(false)
    const [dataForModal, setDataForModal] = useState({
        offre: "1",
        text: "",
        color: "bg-green-200"
    })

    return (
        <div className="  flex flex-col flex-auto space-y-1 p-8 ring-2 ring-gray-100  bg-gradient-to-l from-white to-white border-2 border-gray-50  rounded-xl shadow-xl" style={{ fontFamily: "Montserrat" }}>

            <div className="flex justify-center">
                <h1 className="md:text-2xl text-lg text-gray-500 bg-gray-200 p-2 px-4 rounded-full" style={{ fontWeight: "700" }}>Offre : {id}</h1>

            </div>

            <div className="Type Activite">

                <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Type activite</p>

                <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                    <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                        <FaHandsHelping className="w-6 h-6 text-blue-600" />
                        <div className="text-blue-600">
                            <p >faire les courses</p>
                            {/* <p >acitive divers</p> */}
                        </div>
                    </div>


                </div>

            </div>
            <div onClick="CadreTemporel">

                <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>cadre temporel</p>

                <div className=" flex  space-x-3 items-center p-2">

                    <IconDateFilled w="6" h="6" />
                    <div className="flex items-center space-x-2 text-gray-500 " >
                        <p>   du</p>
                        <span className="text-lg text-blue-600 " style={{ fontWeight: "700" }}>Lundi</span>

                        <p>a</p>
                        <span className="text-lg  text-blue-600 " style={{ fontWeight: "700" }}>Jeudi</span>


                    </div>



                </div>

                <div className="flex  space-x-3 items-center p-2">

                    <IconClock w="6" h="6" />
                    <div className="flex items-center space-x-2 text-gray-500" >
                        <p>  entre</p>
                        <span className="text-lg text-blue-600 " style={{ fontWeight: "700" }}>12:00h</span>

                        <p>et</p>
                        <span className="text-lg  text-blue-600" style={{ fontWeight: "700" }}>16:00h</span>


                    </div>



                </div>


            </div>

            <div className="Mobilite ">
                <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Mobilite</p>

                <div className="p-3 space-y-1" style={{ fontWeight: "700" }}>
                    <div className="flex items-center space-x-2 text-blue-600  capitalize text-lg" >
                        <MdDirectionsBike className="w-6 h-6" />
                        <p >velo</p>

                    </div>


                    <div className="flex items-center space-x-2 text-blue-600  capitalize text-lg" >
                        <MdDirectionsWalk className="w-6 h-6" />
                        <p>a pied</p>



                    </div>
                </div>
            </div>

            <div className="Perimetre">

                <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Perimetre</p>

                <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                    <div className="flex items-center space-x-2 text-blue-600  capitalize text-xl" >
                        <BiMapPin className="w-6 h-6" />
                        <p >20 km</p>

                    </div>


                </div>

            </div>

            <div className="Operations flex justify-around p-3 border border-gray-100 bg-gray-100 rounded-full ">
                <div >
                    <IconEdit w={5} h={5} />
                </div>
                <div
                    onClick={() => { setDataForModal({ offre: id, color: "bg-yellow-500", text: "voulez vous vraiment mettre en pause l'offre?" }); setOpenModal(true) }}
                >

                    <IconPause w={5} h={5}
                    />
                </div>
                <div
                    onClick={() => { setDataForModal({ offre: id, text: 'voulez vous vraiment supprimer cette offre?', color: 'bg-red-600' }); setOpenModal(true) }}>

                    <IconTrash w={5} h={5} />
                </div>

                {
                    openModal &&
                    <Modal data={dataForModal} openModalHook={[openModal, setOpenModal]} />
                }

            </div>


        </div>
    )
}

export default Disponibilte
