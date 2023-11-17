import axios from 'axios';
import { Link } from 'react-router-dom'
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import dayjs from 'dayjs';

export default function ViewAccount() {

  const [accountsData, setAccountsData] = useState([]);

  // const todayDate = dayjs().format("YYYY-MM-DD");

  const navigate = useNavigate()

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

  const handleDelete = (userId) => {
    axios
      .delete("http://localhost:8000/deleteAccount/" + userId)
      .then((response) => {
        console.log("response : ", response);
        const updateData = accountsData.filter((user) => user._id != userId);
        setAccountsData(updateData);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  };
  return (
    <>



      <div className="container my-5 boxShadow" style={{ minHeight: "270px", width: "100%" }}>
        <div className="row">
          <div className="col">
            <div className='py-1 text-dark'>
              <Link to='/dashboard' className='btn ms-2 btn-danger'> <span><AiOutlineArrowLeft className='mb-1' /></span> Dashboard</Link>
              <h2 className='text-center'> <span><BiSolidUser className='mb-2' style={{ fontSize: "36px" }} /></span> Accounts</h2>
              <hr />


              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th className='bg-success text-light' scope="col">Branch Code</th>
                    <th className='bg-success text-light' scope="col">Account #</th>
                    <th className='bg-success text-light' scope="col">Name</th>
                    <th className='bg-success text-light' scope="col">Registered</th>
                    <th className='bg-success text-light' scope="col">Type</th>
                    <th className='bg-success text-light' scope="col">Balance</th>
                  </tr>
                </thead>
                <tbody>
                {
                  accountsData.map((account, i) => {
                    return (
                      <tr key={i}>
                        <td className=''>{account.branchCode}</td>
                        <td className=' p-3'>{account.accountNumber}</td>
                        <td className=' p-3'>{account.fullName}</td>
                        <td className=' p-3'>{account.date}</td>
                        <td className=' p-3'>{account.accountType}</td>
                        <td className=' p-3'>{account.initialDeposit}</td>
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
    </div >






    </>
  )
}
