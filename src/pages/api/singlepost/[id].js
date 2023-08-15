
import post from "@/model/post";
import user from "@/model/user";
import connectMono from "@/utils/connect"; 
connectMono()
export default  async function handle(req,res){
 
  
  const  { id }  = req.query;
  console.log(id)
  if(req.method === "GET"){ 
    if(id !== "undefined"){
      try{
      const postdoc = await post.findOne({_id:id}).populate('uid',['username', 'profilepic']); 
    res.status(200).json(postdoc); 
      }catch{
        res.status(500).json("Something went wrong");
      }
    }
   
}

}