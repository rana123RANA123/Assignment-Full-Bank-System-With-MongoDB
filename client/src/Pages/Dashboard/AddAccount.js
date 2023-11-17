import React, { useState } from 'react'
import { AiOutlineUser, AiOutlineTransaction } from "react-icons/ai";
import { AiFillBank, AiFillIdcard } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { IoInformationCircle } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const formDataInitialState = { fullname: "", cnic: "", branchCode: "", accountNumber: "", accountType: "", initialDeposit: "", }

export default function AddAccount() {
    const [formData, setFormData] = useState(formDataInitialState);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleCreateAccount = (e) => {
        e.preventDefault();

        if(formData.cnic.length < 13){
            return console.log("Please Enter Your CNIC Number Correctly.")
        }
        else if(formData.branchCode > 99){
            return console.log("Please Enter Your Branch Code Correctly.")
        }
        else if(formData.accountNumber.length < 9){
            return console.log("Please Enter Your Account Number Correctly.")
        }
        else if(formData.initialDeposit < 500){
            return console.log("Please Enter Your Deposite (Rs) Correctly.")
        }

        axios
            .post("http://localhost:8000/addAccount", formData)
            .then((response) => {
                console.log("Your Account created successfully!!");
                console.log("response.data : ", response.data);
                setFormData(formDataInitialState);
                navigate('/dashboard/viewAccount')
            })
            .catch((error) => {
                console.log("Error : ", error);
            });


        axios
            .post("http://localhost:8000/addTransaction", formData)
            .then((response) => {
                console.log("Your Transaction created successfully!!");
                console.log("response.data : ", response.data);
                // setFormData(formDataInitialState);
                // navigate('/dashboard/viewAccount')
            })
            .catch((error) => {
                console.log("Error : ", error);
            });
    };


    return (
        <>

            <div className="container my-5 boxShadow" style={{ height: "430px", width: "100%" }}>
                <div className="row">
                    <div className="col">
                        <div className='my-2 py-1 text-light text-center' style={{ backgroundColor: "#0077b6" }}>
                            <h1 className='fw-bold'>Enter Account Details Below</h1>
                            <p className=''>All fields are required*</p>
                        </div>
                        <div className='row mt-3 d-flex'>
                            <div className="col-1">
                                <BiSolidUser style={{ fontSize: "56px" }} />
                            </div>
                            <div className="col-5">
                                <input type="text" style={{ height: "66px", borderRadius: "0px", borderBottom: "2px solid black" }} name='fullName' onChange={handleChange} value={FormData.fullName} placeholder='Full Name' className='form-control' />
                            </div>
                            <div className="col-1">
                                <AiFillIdcard style={{ fontSize: "56px" }} />
                            </div>
                            <div className="col-5">
                                <input type="text" style={{ height: "66px", borderRadius: "0px", borderBottom: "2px solid black" }} name='cnic' onChange={handleChange} value={FormData.cnic} placeholder='CNIC Number (lenght should be 13)' className='form-control' />
                            </div>
                        </div>

                        <div className='row mt-3 d-flex'>
                            <div className="col-1">
                                <AiFillBank style={{ fontSize: "56px" }} />
                            </div>
                            <div className="col-5">
                                <input type="text" style={{ height: "66px", borderRadius: "0px", borderBottom: "2px solid black" }} name='branchCode' onChange={handleChange} value={FormData.branchCode} placeholder='Branch Code (1 - 99)' className='form-control' />
                            </div>
                            <div className="col-1">
                                <BiSolidUser style={{ fontSize: "56px" }} />
                            </div>
                            <div className="col-5">
                                <input type="text" style={{ height: "66px", borderRadius: "0px", borderBottom: "2px solid black" }} name='accountNumber' onChange={handleChange} value={FormData.accountNumber} placeholder='Account Number (lenght should be 9)' className='form-control' />
                            </div>
                        </div>


                        <div className='row mt-3 d-flex'>
                            <div className="col-1">
                                <IoInformationCircle style={{ fontSize: "56px" }} />
                            </div>
                            <div className="col-5">
                                <select className="form-select" required style={{ height: "66px", borderRadius: "0px", borderBottom: "2px solid black" }} name='accountType' onChange={handleChange} value={FormData.accountType} >
                                    <option selected disabled hidden >Choose Account Type</option>
                                    <option >Saving</option>
                                    <option >Current</option>
                                </select>
                            </div>
                            <div className="col-1">
                                <FaRupeeSign style={{ fontSize: "56px" }} />
                            </div>
                            <div className="col-5">
                                <input type="text" style={{ height: "66px", borderRadius: "0px", borderBottom: "2px solid black" }} name='initialDeposit' onChange={handleChange} value={FormData.initialDeposit} placeholder='Initial Deposit(minimum 500 Rs.)' className='form-control' />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col mt-4 me-3 d-flex justify-content-end">
                                <button className='btn btn-success' onClick={handleCreateAccount}>Create Account</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
