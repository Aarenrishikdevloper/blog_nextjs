import post from "@/model/post";
import user from "@/model/user";
import connectMono from "@/utils/connect";
connectMono()
export default async function handle(req, res){
    try{
    if(req.method === "GET"){
        const postdoc = await post.find().sort({createdAt: -1}).populate('uid',['username']) 
        res.status(200).json(postdoc);
    } 
  }catch{
     res.status(500).json("Something went wrong");
  }
}