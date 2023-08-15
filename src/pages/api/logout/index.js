import { serialize } from 'cookie';
export default async function handle(req,res){
    try{
    if(req.method === 'POST'){ 
      
        res.setHeader("Set-Cookie", serialize("token", "", {path:"/", maxAge:0})); 
        res.status(200).json("User logged out sucessfully");
        
     }
   }catch{
     res.status(500).json("Something went wrong");
   }

}