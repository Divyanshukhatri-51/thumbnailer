import mongoose from "mongoose"
const connectDB = async () => {
    try{
        mongoose.connection.on('connected', ()=>console.log("mongoDB connected")
        )
        await mongoose.connect(process.env.MONGODB_URI)
    }
    catch(err){
        console.error(err);
    }
}

export default connectDB;