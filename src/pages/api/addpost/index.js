import connectMono from "@/utils/connect";
import { headers } from "next/dist/client/components/headers";

import  secret  from "../login";
import post from "@/model/post";
connectMono()
export default  async function handle(req,res){
    if(req.method === "POST"){
       const{title, desc, image, uid, cat} = req.body; 
       
        const postdoc = post.create({
            
            title, 
            
            desc, 
            cat,
            img:image, 
            uid,
            
        })
        res.status(200).json('Post created  sucessfully');
    }
}