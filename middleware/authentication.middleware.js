const jwt=require("jsonwebtoken");

const authentication=(req,res,next)=>{
 const token = req.headers.authorization;
 jwt.verify(token, 'shhhhh', function(err, decoded) {
  if(decoded){
   console.log(decoded)
   const user_ID=decoded.userID;
  req.body.userID=user_ID
  console.log(req.body)
   next()
  }else{
   res.send("User not authorised")
  }
});
}

module.exports={
 authentication
}


/*{
 "title":"React",
 "body":"very good",
 "device":"Laptop",
 "no_if_comments":10
 
}*/