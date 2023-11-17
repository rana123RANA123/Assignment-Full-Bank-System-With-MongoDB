import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    BsFacebook,
    BsGithub,
    BsWhatsapp,
    BsTwitter
} from "react-icons/bs";

// import { BsFacebook } from "react-icons/bs";

export default function Navbar() {

    const [time, setTime] = useState("")

    useEffect(() => {

        setInterval(() => {
            setTime(dayjs().format("DD/MM/YYYY, hh:mm:ss A"))
        })

    }, [])



    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark" style={{ height: "33px", backgroundColor:"#0077b6" }}>
                <div className="container">
                    <div className="row">
                        <div className="col text-light">
                            {time}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}





