const express = require('express');
const { uploadPost, getAllPost, addLike, deletePost, removeLike, getMyAllPost } = require('../controller/post');
const router = express.Router();


router.route("/upload/post").post(uploadPost)
router.route("/delete/post/:id").delete(deletePost)
router.route("/allposts").get(getAllPost)
router.route("/addlike").put(addLike);
router.route("/removelike").put(removeLike);
router.route('/myallposts/:id').get(getMyAllPost)

 


module.exports = router; 