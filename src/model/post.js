import mongoose from "mongoose"; 

const postschema = new mongoose.Schema({ 
    title:{type:String, max:100},
    desc:{type:String}, 
    img:{type:String}, 
    uid:{type:mongoose.Schema.Types.ObjectId, required:true, ref:'user'}, 
    cat:{type:String}
    
},{timestamps:true}) 

export default mongoose.models.post || mongoose.model('post', postschema);