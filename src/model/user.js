import mongoose from "mongoose";

const userschema = new mongoose.Schema({  
    username:{type:String, required:true, unique:true}, 
    email:{type:String, required:true, unique:true}, 
    password:{type:String, required:true}, 
    profilepic:{type:String, default:"https://firebasestorage.googleapis.com/v0/b/blogapp-fd0ce.appspot.com/o/profile%2Fblank-profile-picture-973460_1280.webp?alt=media&token=726184a1-b23c-4cbb-acdc-a4fa1e4a6d4e"}



},{timestamps: true}); 
export default mongoose.models.user || mongoose.model('user', userschema);

