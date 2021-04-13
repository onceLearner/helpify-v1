import React from 'react'
import { AiFillDelete } from "react-icons/ai"

const Card = ({ id, setCards, cards }) => {
    return (
        <div className="w-60 h-20 shadow-xl rounded-xl p-4  bg-gradient-to-br from-pink-200 to-purple-300 " style={{ fontFamily: "Montserrat", fontWeight: "600" }}>

            <p className="text-gray-700 text-xl">card {id}</p>


            <AiFillDelete onClick={() => setCards(cards.filter(e => e.id !== id))} className="text-red-400 hover:text-red-600 cursor-pointer" />


        </div>
    )
}

export default Card
