import React from 'react'
import { Link } from 'react-router-dom'

const NavBeforeLogin = () => {
  return (
    <div className='container bg-light'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            
            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
                
                <h2 className='fs-5' style={{fontFamily:"Permanent Marker"}}><span className='fs-3' >MeMe-Me</span>taverse</h2>
            </a>
            {/* <!-- Left links --> */}
            <ul class="navbar-nav me-auto fs-5 text-body mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/">Category</a>
                </li>
                
            </ul>
            {/* <!-- Left links --> */}
            </div>
            <div>
            <button className="btn btn-outline-primary" type="submit"><Link className='text-dark text-decoration-none' to="/login">Login</Link></button>
            
            </div>
        </div>
        </nav>
    </div>
  )
}

export default NavBeforeLogin
