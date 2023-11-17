import React, { useState } from 'react'
import '../../App.scss'
import { Button, Divider, Form, Input, Typography, message } from 'antd'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { jwtDecode } from "jwt-decode";

const { Title } = Typography

const formDataInitialState = { email: "", password: ""}

export default function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState(formDataInitialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = e => setFormData(s => ({ ...s, [e.target.name]: e.target.value }))

        const handleLogin = () => {
            axios
                .post("http://localhost:8000/auth/login", formData)
                .then((res) => {
                    console.log("res.data : ", res.data);
                    console.log("User Successfuly Loggedin!!");
                    setFormData(formDataInitialState);
                    navigate('/dashboard')
                    console.log("Token Payload : ", jwtDecode(res.data.token));
                })
                .catch((error) => {
                    console.log("Error In Login Function : ", error.message);
                });
        };

    return (
        <>
            <div className='backgroundColorLogin' style={{ height: "709px", marginTop: "-50px", width: "100%" }}>

                <div className="container mt-5 mb-5 bg-light boxShadow" style={{ height: "600px", position: "relative", top: "60px", marginTop: "40px", width: "700px" }}>
                    <div className="row">
                        <div className="col">
                            <h1 className='text-center mt-4'>Login</h1>
                            <p className='mt-4 text-center'>Enter Forgot-Password details to get access</p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col px-5 py-3">
                            <label className='fw-bold mb-3'>Username Or Email Address</label><br />
                            <input type="text" className='form-control w-100 border-1' placeholder='Username / Email Address' name='email' onChange={handleChange} style={{ borderRadius: "0px", height: "50px" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col px-5 py-3">
                            <label className='fw-bold mb-3'>Password</label><br />
                            <input type="password" className='form-control w-100 border-1' placeholder='Enter Password' name='password' onChange={handleChange} style={{ borderRadius: "0px", height: "50px" }} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-9 px-5">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ width: "23px", height: "23px", borderRadius: "6px" }} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    <p className='ms-2 d-flex align-items-center' style={{ fontSize: "18px" }}>Keep Me Logged In</p>
                                </label>
                            </div>
                        </div>

                    </div>


                    <div className="row mt-5">
                        <div className="col-9 px-5 d-flex align-items-center">
                            <p>Don’t have an account? <Link to='/auth/signUp' style={{ color: "red", textDecoration: "none" }}>Sign Up</Link> here</p>
                        </div>


                        <div className="col-3">
                            <button className='btn btn-danger' style={{ borderRadius: "0px", height: "60px", width: "110px" }} loading={isProcessing} onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
