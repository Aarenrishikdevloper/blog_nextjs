import post from "@/model/post";  
import connectMono from "@/utils/connect";
connectMono()

export default async function handler(req,res){
    const { id } = req.query  
    console.log(id)
    if(req.method === "PUT"){
        try{
       const{title, desc,image , cat} = req.body 

       const postdoc = await post.updateOne(
        {_id:id}, 
        {title, desc, img: image}
       )  
       res.status(200).json("Post updated sucessfully")
        }catch{
           res.status(500).json("Something went wrong");
        }
    } 
}