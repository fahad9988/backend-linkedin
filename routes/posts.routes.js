const express=require("express");
const {PostModel}=require("../model/posts.module")
const postRouter=express.Router();
const jwt=require("jsonwebtoken");



postRouter.get("/",async (req,res)=>{
 const {userID}=req.body;
 const query=req.query.device
try {
 const posts=await PostModel.find({userID});
 res.send(posts)
} catch (error) {
 res.send({msg:error.message})
}
})




postRouter.post("/create",async (req,res)=>{
const {title,body,device,no_if_comments,userID}=req.body;

try {
 const post=new PostModel({title,body,device,no_if_comments,userID});
 await post.save()
 res.send("post created")
} catch (error) {
 res.send({msg:error.message})
}
 
})

postRouter.get("/top",async (req,res)=>{
 const {userID}=req.body;
 
 try {
  const posts=await PostModel.find({userID}).sort({no_if_comments:-1});
 res.send(posts[0])
 
  
 } catch (error) {
  res.send({msg:error.message})
 }
  
 })

 postRouter.patch("/update/:id",async (req,res)=>{
  const id=req.params.id;
  console.log(id)
  const payload=req.body
  
  try {
  PostModel.findByIdAndUpdate({_id:id},payload)
   res.send("updated")
  } catch (error) {
   res.send({msg:error.message})
  }
   
  })



module.exports={
 postRouter
}