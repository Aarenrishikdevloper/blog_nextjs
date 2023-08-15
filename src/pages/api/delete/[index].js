import post from "@/model/post"
import connectMono from "@/utils/connect";
connectMono()
export default async function handler(req, res){
    const  id  = req.query.index;
    console.log(id)
    if(req.method === "DELETE"){ 
         
         try{
            const postdoc =  await post.findOneAndDelete({_id:id});
            res.status(200).json("Post Sucessfully deleted"); 
         }catch{
           res.status(500).json("Something went wrong");
         }
        
    }
}