import React, { useState, useEffect } from 'react'
import { dataActivity, dataDays, dataHours, dataMobility } from '../../data/dataModalAjouter';
import { IconCloseModal } from '../svg/mainIcons';

import Flatpickr from "react-flatpickr";
import Select from "react-select"


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";






const ModalAjouter = ({ openModalHook, setListOffres }) => {

    const [openModal, setOpenModal] = openModalHook

    // date
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // heure
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

    const [choosedData, setChoosedData] = useState({
        typeActivity: 1,
        timeFrame: {
            days: {
                start: 1,
                end: 2,
            },

            hours: {
                start: 1,
                end: 2
            }
        },
        mobilite: [],

        perimetre: 20,

    })
    const [etape, SetEtape] = useState(1);

    useEffect(() => {

        console.log({ choosedData })
    },
        [choosedData])



    // just for TRANSITION 
    const [ModalScale, setModalScale] = useState(50);
    // just transitino 
    useEffect(() => {
        const tm = setTimeout(() => setModalScale(105), 10)

        return () => {
            clearTimeout(tm)


        }
    }, [])

    return (
        <div >
            <div className="fixed  z-20 bg-black opacity-70 top-0 right-0 left-0 bottom-0 " style={{ fontFamily: "Montserrat" }}></div>
            <div className={`absolute z-30 top-20 md:right-20 md:left-20 left-10 right-10 bg-white flex flex-col p-3  transform scale-${ModalScale}  transition-transform ease-in rounded-xl`} style={{ transitionDuration: "200ms" }}>
                <button className="absolute right-3 top-2 hover:text-red-400  " onClick={() => setOpenModal(false)}><IconCloseModal /></button>

                <div className=" flex flex-col   " style={{ minHeight: "500px" }}>

                    {etape == 1 &&
                        <div className="TypeActivite">
                            <h2 className="text-gray-700 text-center p-2 ">Etape 1 : choisir type d'activite</h2>

                            <div className="flex flex-wrap    gap-4">
                                {
                                    dataActivity.map(item => (
                                        <button className={`md:w-60 w-full border-2  rounded-lg  hover:border-blue-500    `} onClick={() => setChoosedData({ ...dataActivity, typeActivity: item.id })} key={item.id}>
                                            <img className="md:w-60 w-full h-60  object-cover" src={item.imgUrl} />
                                            <h4 className="py-2 text-lg text-gray-500">{item.title}</h4>


                                        </button>

                                    ))

                                }
                            </div>




                        </div>
                    }


                    {etape == 2 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 ">
                            <h2 className="text-gray-700 ">Etape 2 : choisir votre moyen de deplacement disponible AKA mobilite</h2>

                            {
                                dataMobility.map(item => (
                                    <div onClick={() => setChoosedData({ ...choosedData, mobilite: [item.title] })} key={item.id} className={`flex flex-col items-center space-x-2 text-gray-600 bg-gray-200 rounded-md p-2 w-40 hover:bg-gray-300 hover:text-blue-600  cursor-pointer  capitalize text-xl ${choosedData.mobilite ? choosedData.mobilite.includes(item.title) && 'border-2 border-blue-500' : ''}`} >
                                        {item.Icon}
                                        <p>{item.title}</p>



                                    </div>


                                ))
                            }







                        </div>
                    }



                    {etape == 3 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-700 ">Etape 3 : choisir votre perimetre  possible:</h2>

                            <input type="range" onChange={(e) => setChoosedData({ ...choosedData, perimetre: e.target.value })} />

                            <h4 className="text-4xl text-blue-600  " style={{ fontWeight: "800" }}>{choosedData.perimetre} </h4>
                            <p>km</p>





                        </div>
                    }


                    {etape == 4 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-700 ">Etape 4 : choisir votre cadre temporel:</h2>

                            <p>choisir la date </p>


                            <div className="flex space-x-4 items-center">
                                du
                                <Select
                                    className="w-40"
                                    options={dataDays}
                                    value={1}
                                    onChange={selected => console.log(selected)}


                                />

                               a :
                             <Select
                                    className="w-40"
                                    options={dataDays}
                                    value={1}
                                    onChange={selected => console.log(selected)}


                                />
                            </div>


                            <p>choisir l'heure:</p>
                            <div className="flex space-x-4 items-center">
                                du
                                <Select
                                    className="w-40"
                                    options={dataHours}
                                    value={1}
                                    onChange={selected => console.log(selected)}


                                />

                               a :
                             <Select
                                    className="w-40"
                                    options={dataHours}
                                    value={1}
                                    onChange={selected => console.log(selected)}


                                />
                            </div>



                        </div>
                    }





                    <div className=" flex flex-wrap justify-center  scla space-x-4 p-2 mt-4 ">
                        <button onClick={() => SetEtape(etape + 1)} className={`p-2 bg-blue-600  ${etape == 4 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`}>Continuer</button>

                        <button className={`p-2  bg-blue-600   ${etape != 4 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`} onClick={() => setOpenModal(false)}>Confirmer</button>
                        <button onClick={() => SetEtape(etape > 1 ? etape - 1 : 1)} className={`p-2   w-40 bg-gray-200 hover:opacity-50 text-gray-600 rounded-3xl`}>precedent</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ModalAjouter