import axios from 'axios';
import React, { useState, useEffect } from 'react'
import MemePage from './MemePage'
import UploadMeme from './UploadMeme'

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [user ,setUser] = useState();

    
  useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("Info")));
  }, []);
  const getallpost = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/allposts");
      console.log(response.data);
      var posts = response.data
      posts.reverse()
      setPosts(posts);
    } catch (error) {
      console.log(error.message);
    }
  }
console.log(posts);
  useEffect(() => {
    getallpost();
  }, []);

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-5'>
          <UploadMeme />
          {/* <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://res.cloudinary.com/dujbzodhr/video/upload/v1666480928/meme-metaverse/jipmmikyd6e4nme58nu9.mp4" allowfullscreen></iframe>
          </div> */}
          {
            posts.map((ele) => {
              const likeArr = ele.likeArr
              {/* console.log(ele.post); */}
              return (
                <MemePage
                  name={ele.userName}
                  picture={ele.userPic}
                  post={ele.post}
                  likeArr={likeArr}
                  id = {ele.id}
                  user = {user}
                  posttype = {ele.post.substring(ele.post.length-3, ele.post.length)}
                />

              )
            })

          }
        </div>
      </div>
    </div>
  )
}

export default Home
