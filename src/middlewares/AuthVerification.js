const { DecodeToken } = require("../utility/TokenHelper")

module.exports=(req,res,next)=>{

 let token=req.headers['token']
  if(!token){
    token=req.cookies['token']
  }
  let decoded=DecodeToken(token)

}