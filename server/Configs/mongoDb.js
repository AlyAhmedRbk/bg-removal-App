import mongoose from "mongoose";

const connentDb = async () =>{
    
    mongoose.connect('mongodb://127.0.0.1:27017/bg-removal App')
    .then((res)=>{
        console.log("Database Connected")
    }).catch((err)=>{
        console.log("Database is not Connected")
    });
}

export default connentDb;