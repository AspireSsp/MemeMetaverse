import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "../App.css"
import "./MemePage.css"

const MemePage = (props) => {
    // console.log(props.posttype);
    const [Like, setLike] = useState(props.likeArr.length);
    const [Red, setRed] = useState(false);
    const updateRed = ()=>{
        if(props.user){
            console.log("not getting")
            setRed(props.likeArr.includes(props.user._id))
        }else{
            setRed(false);
        }

    }

    useEffect(() => {
        updateRed();
    }, []);
    const addLikePost = async()=>{
        axios.put(`http://localhost:5000/api/v1/addlike?postId=${props.id}&userId=${props.user._id}`)
            .then(response => setLike(response.data.isLiked.length) );
        
        // console.log(user._id)
        // console.log(props.id);
        console.log("Like added");
    }

    const removeLikePost = async()=>{
        axios.put(`http://localhost:5000/api/v1/removelike?postId=${props.id}&userId=${props.user._id}`)
            .then(response => setLike(response.data.isLiked.length) );
        console.log("remove like to post")
    }

  return (
    <div className='container '>
        <div class="card mb-3">
            <div className='d-flex flex-row my-2 ms-2'>
                <div className='rounded-circle' style={{width:"50px", height:"50px"}}>
                    <img src={props.picture} class="card-img-top w-100 rounded-circle" style={{width:"50px", height:"50px"}} alt="..."/>
                </div>
                <div className='ms-3'>
                    <p className='fs-5'>{props.name}</p>
                </div>
            </div>
            {
                (props.posttype === "mp4")?    
                <iframe
                    src="https://res.cloudinary.com/dujbzodhr/video/upload/v1666480928/meme-metaverse/jipmmikyd6e4nme58nu9.mp4"
                    width="100%"
                    height="400px"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowfullscreen
                    frameborder="0"
                ></iframe>
                 :  <img src={props.post} class="card-img-top" alt="..." />
            }
            {/* <img src={props.post} class="card-img-top" alt="..." /> */}
            <div class="card-body d-flex flex-row w-100 ">
                <div className=' w-50 fs-5 dv'>
                    {/* <h5 class="text-left card-title">Engineering Meme</h5> */}
                    <p onClick={()=>{Red ?setRed(false) : setRed(true) ; Red ? setLike(Like-1) : setLike(Like+1) ; Red ? removeLikePost()  : addLikePost()}} className="dowlike" > <span>Like  {Red ? <i class="bi bi-heart-fill text-danger"></i> : <i class="bi bi-heart"></i>} </span> {Like} </p>
                </div>
                <div className='d-flex  text-right w-50 fs-5 lv'>
                    <p className='dowlike'> 
                        <a href="" download={ props.post }>
                            <span className='ms-3 '>Download <i class="bi bi-arrow-down-circle"></i></span>
                        </a>
                    </p>
                </div>
                                
            </div>
        </div>
        
      
    </div>
  )
}

export default MemePage















/* <div class="card mb-3">
                <div className='d-flex flex-row my-2 ms-2'>
                <div className='rounded-circle' style={{width:"50px", height:"50px"}}>
                    <img src={meme} class="card-img-top w-100 rounded-circle" style={{width:"50px", height:"50px"}} alt="..."/>
                </div>
                <div className='ms-3'>
                    <p className='fs-5'>sanjay prajapat</p>
                </div>
            </div>
            <img src={meme1} class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-row w-100 ">
            <div className=' w-50 fs-5'>
                    <h5 class="text-left card-title">Engineering Meme</h5>
                    <p onClick={()=>{Like? setLike(Like+1):setLike(Like-1) ; Red ? setRed(false): setRed(true)}}> <span>Like  {Red ? <i class="bi bi-heart-fill text-danger"></i> : <i class="bi bi-heart"></i>} </span> {Like}</p>
                </div>
                <div className='d-flex  text-right w-50 fs-5'>
                    <p> <span className='ms-3'>Download <i class="bi bi-arrow-down-circle"></i></span></p>
                </div>
                                
            </div>
        </div>
        <div class="card mb-3">
            <div className='d-flex flex-row my-2 ms-2'>
                    <div className='rounded-circle' style={{width:"50px", height:"50px"}}>
                        <img src={meme} class="card-img-top w-100 rounded-circle" style={{width:"50px", height:"50px"}} alt="..."/>
                    </div>
                    <div className='ms-3'>
                        <p className='fs-5'>Madhav Prajapat</p>
                    </div>
            </div>
            <img src={meme2} class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-row w-100 ">
            <div className=' w-50 fs-5'>
                    <h5 class="text-left card-title">Engineering Meme</h5>
                    <p onClick={()=>{setLike(Like+1) ; setRed(true)}}> <span>Like  {Red ? <i class="bi bi-heart-fill text-danger"></i> : <i class="bi bi-heart"></i>} </span> {Like}</p>
                </div>
                <div className='d-flex  text-right w-50 fs-5'>
                    <p> <span className='ms-3'>Download <i class="bi bi-arrow-down-circle"></i></span></p>
                </div>
                                
            </div>
        </div>
        <div class="card mb-3">
            <div className='d-flex flex-row my-2 ms-2'>
                <div className='rounded-circle' style={{width:"50px", height:"50px"}}>
                    <img src={meme} class="card-img-top w-100 rounded-circle" style={{width:"50px", height:"50px"}} alt="..."/>
                </div>
                <div className='ms-3'>
                    <p className='fs-5'>Anushka Asati</p>
                </div>
            </div>
            <img src={meme3} class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-row w-100 ">
            <div className=' w-50 fs-5'>
                    <p onClick={()=>{setLike(Like+1) ; setRed(true)}}> <span>Like  {Red ? <i class="bi bi-heart-fill text-danger"></i> : <i class="bi bi-heart"></i>} </span> {Like}</p>
                </div>
                <div className='d-flex  text-right w-50 fs-5'>
                    <p> <span className='ms-3'>Download <i class="bi bi-arrow-down-circle"></i></span></p>
                </div>
                                
            </div>
        </div> */