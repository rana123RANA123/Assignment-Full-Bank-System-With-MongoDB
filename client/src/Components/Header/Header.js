import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Header() {

  const navigate = useNavigate()

  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#0077b6"}}>
        <div class="container">
          <Link to='/' class="navbar-brand">BANK-APP </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <Link to='/auth/login' className='btn btn-light border-1'>login</Link>
          </div>
        </div>
      </nav>

    </>
  )
}
