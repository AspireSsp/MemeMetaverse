import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
// ...


const Login = () => {
 
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const [showpass, setShowpass] = useState(false);
  const userlogin = async()=>{
    try {
     
      const data = await axios.post("http://localhost:5000/api/v1/login", {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      
      console.log(data.data.userLogin);
      const info = JSON.stringify(data.data.userLogin);
      localStorage.setItem("Info", info);
     
      navigate("/")
      window.location.reload(false);
     
    } catch (error) {
      setErr(true)
    }
  }
  return (
    <div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        {/* <div class="form-group">
        
          <label for="exampleInputPassword1">Password</label>
          <input type={showpass ? "text" : "password"} class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={()=>{showpass ? setShowpass(false):setShowpass(true)}}>{showpass? "hide":"show"}</button>
        </div> */}
        <div class="input-group mb-3">
          <input type={showpass ? "text" : "password"} class="form-control" placeholder="password" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e)=>{setPassword(e.target.value)}}/>
          <span class="input-group-text" id="basic-addon2" onClick={()=>{showpass ? setShowpass(false):setShowpass(true)}}>{showpass? "hide":"show"}</span>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div class="form-group form-check">
          <label class="form-check-label" for="exampleCheck1" style={{color: "red"}}>{err? "Invalid Login Details": ""}</label>
        </div>
        <button type="submit" class="btn btn-primary px-4 my-3" onClick={userlogin}>Submit</button>
    </div>
    
  )
}

export default Login
