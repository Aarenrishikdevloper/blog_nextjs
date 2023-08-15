import mongoose, { connect } from "mongoose";   

const connectMono = async()=> {
    try{
        mongoose.connect("mongodb+srv://blog:F3DKZzCIoskpUdkm@cluster0.zaist3r.mongodb.net/?retryWrites=true&w=majority");   
        console.log("Sucessfully");
        
    }catch{
        console.error("Error connecting to MongoDB:", error.message);
    }
}

export default connectMono;