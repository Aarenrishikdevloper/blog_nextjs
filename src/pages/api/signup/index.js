// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMono  from "@/utils/connect"; 
import user from '@/model/user'; 
import bycrtpt from "bcryptjs"
connectMono();
export default async function  handle(req,res){
   
      
    
        if(req.method === 'POST'){
            const{username, password, email} =  req.body;     
            
           const userfound = await user.findOne({username}); 
           if(userfound){
            res.status(400).json({message:"User alreay exist"});
           }
           else{
            try{
            const salt = await bycrtpt.genSalt(10); 
            const hassedpassword = await bycrtpt.hash(password, salt); 
            const userdoc = new user({
                username, 
                email, 
                password:hassedpassword,
            });  
            const saved = await userdoc.save();
           
            res.status(200).json({ name:  saved })
          }catch{
            res.status(500).json({ name:  "Something went wrong"});
          }
        }  
    } 
     
    
}
