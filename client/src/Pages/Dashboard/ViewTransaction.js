import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import '../../App.scss'
import { AiFillIdcard } from "react-icons/ai";
import axios from 'axios';
import { Divider, Form, Input, Modal, message } from 'antd'

export default function ViewTransaction() {

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionData, setTransactionData] = useState([]);

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


  const handleTransactionModel = () => {
    navigate('/dashboard/transactionModal')
  }


  return (
    <>



      <div className="container my-5 boxShadow" style={{ minHeight: "270px", width: "100%" }}>
        <div className="row">
          <div className="col">
            <div className='py-1 text-dark'>
              <Link to='/dashboard' className='btn ms-2 btn-danger'> <span><AiOutlineArrowLeft className='mb-1' /></span> Dashboard</Link>
              <h2 className='text-center'> <span><AiFillIdcard className='mb-2' style={{ fontSize: "42px" }} /></span> Transactions</h2>
              <hr />


              <table class="table table-bordered table-responsive table-hover">
                <thead>
                  <tr>
                    <th className='tableSuccess bg-success text-light' scope="col">Transaction ID</th>
                    <th className='tableSuccess bg-success text-light' scope="col">Time</th>
                    <th className='tableSuccess bg-success text-light' scope="col">Date</th>
                    <th className='tableSuccess bg-success text-light' scope="col">Account ID</th>
                    <th className='tableSuccess bg-success text-light' scope="col">Type</th>
                    <th className='tableSuccess bg-success text-light' scope="col">Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    transactionData.map((transaction, i) => {
                      return (
                        <tr key={i}>
                          <td className='text-info' style={{ cursor: "pointer" }} onClick={handleTransactionModel}>{transaction._id}</td>
                          <td className=' p-3'>{transaction.transactionDate}</td>
                          <td className=' p-3'>{transaction.TransactionTime}</td>
                          <td className=' p-3'>{transaction.transactionRandomId}</td>
                          <td className=' p-3'>{transaction.accountType}</td>
                          <td className=' p-3'>{transaction.initialDeposit}</td>
                          {/* <td>
                          <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                          <button className="ms-1 btn btn-primary" onClick={() => { navigate(`./edit/${user._id}`) }}>Update</button>
                        </td> */}
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>


            </div>
          </div>
        </div>
      </div>


      <Modal title="Model" open={isModalOpen}>

        <div>
          <div className="loginPage my-5">
            <div className="container">
              <div className="row">
                Hero
              </div>
            </div>
          </div >

        </div>

      </Modal>

    </>
  )
}
