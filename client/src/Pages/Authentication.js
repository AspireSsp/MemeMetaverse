import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Authentication = () => {
  return (
    <div className='container p-4  '>
      <div className='row d-flex justify-content-center '>
        <div className='col-md-4 border rounded-3'>
          <div className='col-md-3 w-100'>
              <ul class="nav nav-pills my-3 w-100 col-4" id="pills-tab" role="tablist">
              <li class="nav-item w-50" role="presentation">
                <button class="nav-link active w-100" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
              </li>
              <li class="nav-item w-50" role="presentation">
                <button class="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SignUp</button>
              </li>
              
            </ul>
          </div>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> 
            <Login/>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <Signup />  </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication

