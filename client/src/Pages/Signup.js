
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [loader, setLoader] = useState(false);
  const [showpass, setShowpass] = useState(false);
  const [erMsg, seterMsg] = useState();

  // console.log(setLoader);
  if(setLoader){
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "ph3rhj89")
    data.append("cloud_name","dujbzodhr")
    fetch("  https://api.cloudinary.com/v1_1/dujbzodhr/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
      setImgUrl(data.url)
      setLoader(false);
    })
    .catch(err => console.log(err))
  }
  // console.log(imgUrl);
  const submitHandler = async()=>{
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/register",
        {
          name,
          email,
          password,
          pic : imgUrl,
        },
       
      );
      console.log(data);
      navigate("/")
     
    } catch (error) {
      seterMsg(error.response.data.Error);
      console.log(error.response.data.Error);
    }
    
  }

 
  
  return (
    <div>
      {/* <form> */}
        <div class="form-group">
          <label for="exampleInputEmail1">Name<span style={{color:"red"}}>*</span></label>
          <input type="text" class="form-control" placeholder="Enter name" aria-label="First name" onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address<span style={{color:"red"}}>*</span></label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password<span style={{color:"red"}}>*</span></label>
          {/* <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/> */}
          <div class="input-group mb-3">
          <input type={showpass ? "text" : "password"} class="form-control" placeholder="password" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e)=>{setPassword(e.target.value)}}/>
          <span class="input-group-text" id="basic-addon2" onClick={()=>{showpass ? setShowpass(false):setShowpass(true)}}>{showpass? "hide":"show"}</span>
        </div>
        </div>
        <div class="input-group my-2 d-flex flex-column">
          <label for="exampleInputPassword1">Image</label>
          <input type="file" class="form-control mt-2 w-100" id="inputGroupFile02" onChange={(e)=>{setImage(e.target.files[0]); setLoader(true); }} />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <p style={{color:"red"}}>{erMsg ? erMsg : ""}</p>
        <button type="submit" class="btn btn-primary px-4 my-3" onClick={submitHandler}>
          {loader ? <div class="spinner-border float-end" role="status">
              <span class="visually-hidden">Loading...</span>
              </div> : "Submit"
          }
        </button>
      {/* </form> */}
    </div>
  )
}

export default Signup
