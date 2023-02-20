const express=require("express");
const {connection}=require("./db.js");
const {userRouter}=require("./routes/user.routes")
const {postRouter}=require("./routes/posts.routes")
const {authentication}=require("./middleware/authentication.middleware")

const app=express();
const cors=require("cors");

app.use(cors())

app.use(express.json());
app.use("/users",userRouter)
app.use(authentication)
app.use("/posts",postRouter)


app.listen(4500,async ()=>{
 try {
  await connection
  console.log("database connected")
 } catch (error) {
  console.log("database not connected")
 }
 console.log("server started at port 4500")
})