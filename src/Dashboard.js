import React, { useState, useEffect, useRef } from 'react'
import { Link } from "@reach/router"
import Navbar from './components/navbar2'
import axios from 'axios';
import Card from './components/dashboardDemand/card';
import Img1 from "./photos/register.jpg"
import Img2 from "./photos/marjane.jpg"
import Img3 from "./photos/activity3.jpg"
import Img4 from "./photos/activity4.jpg"
import DateTimePicker from 'react-datetime-picker';

export const IconClose = () =>
    <svg className="w-7 h-7 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>

export const dataActivity = [
    {
        id: 1,
        title: "Gardenage",
        imgUrl: Img1
    },
    {
        id: 2,
        title: "faire les courses",
        imgUrl: Img2
    },
    {
        id: 3,
        title: "déménagement",
        imgUrl: Img3
    },
    {
        id: 4,
        title: "divers",
        imgUrl: Img4
    },
]

const Dashboard = () => {
    const [value, onChange] = useState(new Date());

    const [cards, setCards] = useState([{ id: 1}])
    const [choosedData, setChoosedData] = useState({
        typeActivity: {
            id: 1,
            title: ""
        }

        

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


    const [userInfo, setUserInfo] = useState({ id: 1, name: "hamid" });
    const [showModal, setShowModal] = React.useState(false);
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
           
                <button  type="button"className="   p-3 text-white w-80 font-semibold text-lg   bg-gradient-to-r from-blue-400 to-purple-500  md:w-80  rounded-3xl  "  
                 onClick={() => setShowModal(true)} >
                    New help request
                </button>
                {showModal ? (
    <>
        <div>
        
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none m-2    "
          >

<div className=" flex flex-col   " style={{ minHeight: "500px" }}>
{etape == 1 &&
    <div >
    {/*content*/}
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      {/*header*/}
      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        <h3 className="text-2xl font-semibold ">
        Sélectionnez le type de l'activité :
        </h3>
        <button
        className="absolute right-3 top-2 hover:text-red-400 text-black" onClick={() =>  setShowModal(false)}><IconClose /></button>
        
      </div>
      {/*body*/}
      <div className="flex flex-wrap    gap-4">
                      {
                          dataActivity.map(item => (
                              <button className={`md:w-60 w-full border-2  rounded-lg  hover:border-blue-500    `} onClick={() => setChoosedData(choosedData => ({ ...choosedData, typeActivity: { id: item.id, title: item.title } }))} key={item.id}>
                                  <img className="md:w-60 w-full h-60  object-cover" src={item.imgUrl} />
                                  <h4 className="py-2 text-lg text-gray-500">{item.title}</h4>


                              </button>

                          ))

                      }
                      
                  </div>
                  <div className=" flex flex-wrap justify-center  scla space-x-4 p-2 mt-4 ">
                        <button onClick={() => SetEtape(etape + 1)} className={`p-2 bg-blue-600  ${etape == 2 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`}>Continuer</button>
             
                       
                        </div>      
                  </div>
                  
                  </div>
}
                


{etape == 2 &&
    <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 ">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        <h3 className="text-2xl font-semibold ">
        Programmons ensemble votre demande :
        </h3>
        <button
        className="absolute right-3 top-2 hover:text-red-400 text-black" onClick={() =>  setShowModal(false)}><IconClose /></button>
        
      </div>
      <div>
      <textarea name="comments" id="comments" cols="80" rows="4" class="bg-gray-200  m-8"  placeholder="Description de la demande">
   </textarea>
   <div class="mx-4">
       <div >
       <label class="field-label md:ml-2 text-center font-bold " >Date: 
        </label>
      
        <DateTimePicker   onChange={onChange}
        value={value} required >
   
    
        </DateTimePicker>
   
</div>


<div class="mt-2">

<label class="field-label md:ml-2 text-center font-bold" >Ville: 
        </label>

<select class="mx-2" required>
<option>Séléctionnez une ville </option>
  <option>Marrakech</option>
  <option >Casablanca</option>
  <option >Tanger</option>
  <option > Rabat</option>
</select>
</div>

       <div><label class="field-label md:ml-2 text-center font-bold" >Adresse : 
        </label>
        <input type="text" required></input>
        </div>
        <div><label class="field-label md:ml-2 text-center font-bold" >Répétez : 
        </label>
       
   <div class="mx-8">
       
<div>
  <input type="radio" id="Chaque jour" name="drone" value="Chaque jour"
       ></input>
  <label for="Chaque jour">Chaque jour</label>
</div>

<div>
  <input type="radio" id="Chaque semaine" name="drone" value="dewey"></input>
  <label for="dewey">Chaque semaine</label>
</div>

<div>
  <input type="radio" id="Chaque semaine " name="drone" value="Chaque semaine "></input>
  <label for="Chaque semaine ">Chaque mois </label>
</div>

<div>
  <input type="radio" id="Non répétitive " name="drone" value="Non répétitive"></input>
  <label for="Non répétitive ">Non répétitive </label>
</div>

</div>
</div>
      
          
          </div>
</div>

<div className=" flex flex-wrap justify-center  scla space-x-4 p-2 mt-4 ">
                     
                        <button onClick={() => SetEtape(etape > 1 ? etape - 1 : 1)} className={`p-2  ${etape == 1 && 'hidden'}  w-40 bg-gray-200 hover:opacity-50 text-gray-600 rounded-3xl`}>precedent</button>
                        <button className={`p-2  bg-blue-600   ${etape != 2 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`} onClick={() => { setCards([...cards, { id: cards.length + 1 }]); setShowModal(false) }}>Confirmer</button>
             
                       
                        </div>   

</div>

   

    </div>
}





                          </div>           

</div>
</div>
<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}



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
