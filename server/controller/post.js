const Post = require("../models/post");
const User = require("../models/userModels");



exports.uploadPost = async(req,res)=>{
    // console.log(req.user);
    const { user, post, isLiked } = req.body;

    const postdata = await Post.create({
        user,post,isLiked
    })

    res.status(200).send(postdata);
}

exports.deletePost = async(req,res)=>{
    const id = req.params.id;

    const postdata = await Post.findOne({_id : id}).remove().exec();

    res.status(200).send(postdata);
}


exports.getAllPost = async(req,res)=>{
    try {
        const posts = await Post.find();
        var meme = [] ;
        for(var obj of posts){
            const info = await User.findOne({_id : obj.user})
            // console.log(info.pic);
            const newObj = {
                id : obj._id,
                userPic : info.pic,
                userName : info.name,
                post : obj.post,   
                likeArr : obj.isLiked,
                date : obj.time,
            }
            meme.push(newObj);
        }
       
        res.status(200).json(meme);
        
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

exports.addLike = async(req,res)=>{
    try {
        const {postId , userId} = req.query;
        
        var post = await Post.findOne({_id : postId});
        // console.log(post);
        post.isLiked.push(userId);
        const neww = await Post.findByIdAndUpdate(postId , post)
        const result = await Post.findOne({_id : postId});
        res.send(result);
        
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

exports.removeLike = async(req,res)=>{
    try {
        const {postId , userId} = req.query;
        
        var post = await Post.findOne({_id : postId});
        // console.log(userId);
        result = post.isLiked.filter(ele => ele !== userId)
           
        // console.log(result);
        const neww = await Post.findByIdAndUpdate(postId , {isLiked : result});
        var post = await Post.findOne({_id : postId});
        res.send(post);
        
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}   
exports.getMyAllPost = async(req,res)=>{
    try {
        const id = req.params.id;
        var post = await Post.find({user : id});
        res.send(post);
        
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}   















