import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadMeme = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState();
  const [loader, setLoader] = useState(false);
  const [postUrl, setPostUrl] = useState();
  const [user ,setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("info")));
  }, []);
  if(setLoader){
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "ph3rhj89")
    data.append("cloud_name","dujbzodhr")
    fetch("  https://api.cloudinary.com/v1_1/dujbzodhr/auto/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
      // console.log(data.url);
      setPostUrl(data.url);
      setLoader(false);
    })
    .catch(err => console.log(err))
  }

  const submitHandler = async()=>{
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/upload/post",
        {
          user : user._id,
          post : postUrl,
          
        },
       
      );
      console.log(data);
      navigate("/")
     
    } catch (error) {
      console.log(error.message);
    }
    
  }
  return (
    <div className='container mt-2'>
        <div className="card mb-3">
        <nav className="navbar navbar-light border rounded text-center bg-light ">
                        {/* <button type="button " className=" btn btn-primary m-2">Upload MEME</button> */}
                        <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Upload MEME
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Upload Your MEME</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                              <div class="mb-3">
                                <label for="formFile" class="form-label">select file <span style={{color: "red"}}>*(less then 5 MB)</span></label>
                                <input class="form-control" type="file" id="formFile" onChange={(e)=>{setImage(e.target.files[0]); setLoader(true); }} />
                              </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={submitHandler} data-bs-dismiss="modal">
                                {loader ? <div class="spinner-border float-end" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                    </div> : "Upload"
                                }
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <form className="d-flex m-2">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                </nav>
        </div>
      
        
    </div>
  )
}

export default UploadMeme
