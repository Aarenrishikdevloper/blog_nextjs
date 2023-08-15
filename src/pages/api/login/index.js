import user from "@/model/user"
import connectMono from "@/utils/connect" 
import bycrypt from "bcryptjs" 
import jwt from 'jsonwebtoken';
import {serialize} from 'cookie'


connectMono();
export const secret = "iihfirhfrihfi999i5jf5ff"
export default async function handle(req, res){
   try{
    if(req.method === "POST"){
        const{username, password} = req.body 
         console.log(password);
         
           const finduser = await user.findOne({username}); 
         
           if(!finduser){
             console.log("User do not exist");
             res.status(400).json("user does not exist"); 
             return 
           } 
           const verifypassword = await bycrypt.compare(password, finduser.password); 
           if(verifypassword){
             const token = jwt.sign({username, id:finduser._id}, secret,{expiresIn:'30d'});   
             const maxage = 30 * 24 *60*60 
            res.setHeader("Set-Cookie", serialize("token", token, {path:"/", maxAge: maxage})); 
            res.status(200).json(finduser);
             
           }
        
           
        
    }
  } 
   catch{
     res.status(500).json("Something went wrong");
   }
}