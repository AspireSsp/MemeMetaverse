import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const NavAfterLog = (param) => {
    const navigate = useNavigate()
    // console.log(param.user)
  return (
    <div className='container bg-light' style={{borderRadius:"20px"}}>
            {/* <!-- Navbar --> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div class="container-fluid">
            {/* <!-- Toggle button --> */}
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

            {/* <!-- Collapsible wrapper --> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}

            <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <Link style={{textDecoration: 'none'}} to="/">
                
                <h2 className='fs-5' style={{fontFamily:"Permanent Marker"}}><span className='fs-3' >MeMe-Me</span>taverse</h2>
            </Link>
            </a>
            {/* <!-- Left links --> */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" href="#">Team</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
                </li>
            </ul>
            </div>

            <div class="d-flex align-items-center">
            <div className='mx-3 mt-2'>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {param.user.name}
                </button>
                <ul class="dropdown-menu">
                    <li><Link style={{textDecoration: 'none'}} to="/profile"><button class="dropdown-item" >Profile</button></Link></li>
                    <li><Link style={{textDecoration: 'none'}} to="/settings"><button class="dropdown-item" >settings</button></Link> </li>
                    <li><button class="dropdown-item" onClick={()=>{localStorage.removeItem("Info"); navigate("/"); window.location.reload(false); }} >Logout</button></li>
                </ul>
                </div>
            </div>
            {/* <!-- Avatar --> */}
            <div class="">
                <a
                class="d-flex align-items-center "
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                >
                <Link to="/profile">
                <img
                    src={param.user.pic}
                    class="rounded-circle"
                    height="40"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                />
                </Link>
                </a>
                
            </div>

            

            </div>
            {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
        </nav>
      
    </div>
  )
}

export default NavAfterLog
