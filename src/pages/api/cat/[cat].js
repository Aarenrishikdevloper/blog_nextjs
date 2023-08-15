import post from "@/model/post"; 
import connectMono from "@/utils/connect"; 

connectMono()
export default async function handler(req, res){
   try{
    const  cat  = req.query.cat;
    console.log(cat)
    if(req.method === "GET"){ 
    if(cat !== 'undefined' && cat !== ""){
        console.log(cat)

     console.log(cat);
      const postdoc = await post.find({cat:cat}).sort({createdAt: -1});
        res.status(200).json(postdoc)
     
    } 
 
  }
   }catch{
     res.status(500).json("Something went wrong")
   }
}