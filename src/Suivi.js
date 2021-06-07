import axios from 'axios'
import React, { useEffect } from 'react'

const Suivi = () => {


    useEffect(() => {
        // axios.get("http://localhost:8081/findUser?email=a@gmail.com")
        axios.get("https://helpify-back.herokuapp.com/findUser?email=a@gmail.com")

            .then(res => {
                console.log({ data: res.data.demandes })
            })

    }, [])



    return (
        <div>

            {/* page de suivi */} ``

        </div>
    )
}

export default Suivi
