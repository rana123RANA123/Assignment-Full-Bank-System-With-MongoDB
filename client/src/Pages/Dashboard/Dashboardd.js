import React, { useEffect, useState } from 'react'
import { AiOutlineUser, AiOutlineTransaction } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { LuView } from "react-icons/lu";
import { BiSolidUser } from "react-icons/bi";
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Dashboardd() {

    const [accountsData, setAccountsData] = useState([]);
    const [transactionData, setTransactionData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/accounts")
            .then((response) => {
                console.log("response : ", response.data);
                setAccountsData(response.data);
                // accountsData.push(todayDate)

            })
            .catch((error) => {
                console.error("Error : ", error);
            });
    }, []);



    useEffect(() => {
        axios
            .get("http://localhost:8000/transactions")
            .then((response) => {
                console.log("response : ", response.data);
                setTransactionData(response.data);
                // accountsData.push(todayDate)

            })
            .catch((error) => {
                console.error("Error : ", error);
            });
    }, []);

    return (
        <>

            <div className="container mt-5 mb-5">
                <div className="row">

                    <div className="col-5 dashboardBox boxShadow">
                        <div className='d-flex mt-3 justify-content-center'>
                            <BiSolidUser className='mt-1 me-1' style={{ fontSize: "30px" }} />
                            <h2 className='text-center'>Accounts</h2>
                        </div>
                        <hr className='text-bold' />
                        <br />
                        <div className='d-flex justify-content-center'>
                            <Link to='/dashboard/addAccount' className='btn btn-success'> <span><BsPlusLg className='mb-1 me-1' /></span>Add New Account</Link>
                            <Link to='/dashboard/viewAccount' className='btn ms-3 btn-info'> <span><LuView className='mb-1 me-1' /></span>View All Accounts</Link>
                        </div>
                        <br />
                        <hr className='text-bold' />
                        <p className='text-center'>{accountsData.length}</p>
                    </div>



                    <div className="col-5 offset-2 dashboardBox boxShadow">
                        <div className='d-flex mt-3 justify-content-center'>
                            <AiOutlineTransaction className='mt-1 me-1' style={{ fontSize: "30px" }} />
                            <h2 className='text-center'>Transactions</h2>
                        </div>
                        <hr className='text-bold' />
                        <br />
                        <div className='d-flex justify-content-center'>
                            <Link to='/dashboard/viewTransaction' className='btn ms-3 btn-info'> <span><LuView className='mb-1 me-1' /></span>View All Transactions</Link>
                        </div>
                        <br />
                        <hr className='text-bold' />
                        <p className='text-center'>{transactionData.length}</p>
                    </div>

                </div>
            </div>

        </>
    )
}
