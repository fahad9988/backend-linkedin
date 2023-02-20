const express=require("express");
const {UserModel}=require("../model/user.model")
const userRouter=express.Router();
const jwt=require("jsonwebtoken");

userRouter.post("/register",async (req,res)=>{
const {name,email,gender,password,age,city}=req.body;

try {
 const exist_user=await UserModel.find({email,password});
 if(exist_user.length>0){
res.send("User already exist, please login")
 }else{
  const user=new UserModel({name,email,gender,password,age,city});
  await user.save()
  res.send("registered successfuly")
 }
 
} catch (error) {
 res.send({msg:error.message})
}
 
})

userRouter.post("/login",async (req,res)=>{
 const {email,password}=req.body;
 
 try {
 
  const exist_user=await UserModel.find({email,password});
  if(exist_user.length>0){
   var token = jwt.sign({ userID: exist_user[0]._id }, 'shhhhh');
 res.send({msg:"logged in successfully",token})
  }else{
   res.send("User does not exist, register first.")
  }
  
 } catch (error) {
  res.send({msg:error.message})
 }
  
 })

module.exports={
 userRouter
}