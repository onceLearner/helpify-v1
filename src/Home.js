import React from 'react'
import { Link } from "@reach/router"

const Home = () => {
    return (
        <div className="p-10">

            <p>Welcome in Helpify , we are  building the future</p>

            <div className="flex items-center justify-center gap-10">
                <Link to="/register">
                    <p className="text-lg border p-2 text-purple-600 rounded-3xl">Register</p>
                </Link>

                <Link to="/login">
                    <p className="text-lg border p-2 text-purple-600 rounded-3xl">login</p>
                </Link>
            </div>

        </div>
    )
}

export default Home
