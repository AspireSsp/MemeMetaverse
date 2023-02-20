import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Profilepage = () => {

    const [post, setPosts] = useState([]);
    const user = JSON.parse(localStorage.getItem("Info"))   
    // console.log(user._id); 
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [about, setAbout] = useState(user.about);
    // console.log(JSON.parse(localStorage.getItem("info")))
    
    // console.log(user)
    const getallpost = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/v1/myallposts/${user._id}`);
          console.log(response.data);
          var posts = response.data
          posts.reverse()
          setPosts(posts);
        } catch (error) {
          console.log(error.message);
        }
       
      }
      useEffect(() => {
        getallpost();
      }, []);

      const updateUser = async()=>{
        axios.put(`http://localhost:5000/api/v1/update/${user._id}`, {name , email, about})
            .then(response =>  localStorage.setItem("Info", JSON.stringify(response.data[0])));   
      }
        // console.log(user.name)
  return (
    <div className='container'>
        <section class="h-100 gradient-custom-2">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-lg-9 col-xl-7">
                    <div class="card">
                    <div class="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#000", height:"200px"}}>
                        <div class="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
                        <img src={user.pic}
                            alt="Generic placeholder " class="img-fluid img-thumbnail mt-4 mb-2" 
                            style={{width:"150px",zIndex:"1"}}/>
                        <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            style={{zIndex: "1"}}>
                            Edit profile
                        </button>
                        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Update Info
                        </button> */}
{/* $2a$10$2Iu0quxHdBNfZ2vmGs5Zz.4c/J1hX/t4k0CjJSFW1ndJCg5SLeGxq */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel" style={{color:"black"}}>Update Your Info</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" style={{color:"black"}}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">About You</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"  value={about} onChange={(e)=>setAbout(e.target.value)}/>
                            </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={updateUser}>Update</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        

                        </div>
                        <div class="ms-3" style={{marginTop:"130px"}}>
                        <h5>{user.name}</h5>
                        <p>{user.email}</p>
                        </div>
                    </div>
                    <div class="p-4 text-black" style={{backgroundColor : "#f8f9fa"}}>
                        <div class="d-flex justify-content-end text-center py-1">
                        <div>
                            <p class="mb-1 h5">253</p>
                            <p class="small text-muted mb-0">Photos</p>
                        </div>
                        <div class="px-3">
                            <p class="mb-1 h5">1026</p>
                            <p class="small text-muted mb-0">Followers</p>
                        </div>
                        <div>
                            <p class="mb-1 h5">478</p>
                            <p class="small text-muted mb-0">Following</p>
                        </div>
                        </div>
                    </div>
                    <div class="card-body p-4 text-black">
                        <div class="mb-5">
                        <p class="lead fw-normal mb-1">About</p>
                        <div class="p-4" style={{backgroundColor : "#f8f9fa"}}>
                            <p class="font-italic mb-1">{user.about? user.about : "click to update button and info"}</p>
                            {/* <p class="font-italic mb-1">Lives in Indore</p>
                            <p class="font-italic mb-0">Photographer</p> */}
                        </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-4">
                        <p class="lead fw-normal mb-0">Recent photos</p>
                        <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
                        </div>
                        <div class="row">
                            {
                                post.map(ele=>{
                                    return(
                                        <div class="col-6 mb-2">
                                            <img src={ele.post}
                                            alt="i" class="w-100 rounded-3"/>
                                        </div>
                                    )
                                })
                            }
                            {/* <div class="col mb-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                alt="i" class="w-100 rounded-3"/>
                            </div>
                            <div class="col mb-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                alt="i" class="w-100 rounded-3"/>
                            </div> */}
                            {/* </div>
                            <div class="row g-2">
                            <div class="col">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                alt="i" class="w-100 rounded-3"/>
                            </div>
                            <div class="col">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                alt="i" class="w-100 rounded-3"/>
                            </div> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
    </div>
  )
}

export default Profilepage
