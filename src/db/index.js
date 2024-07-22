import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
    const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`mONGODB IS CONNECTED : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED ERROR", error);
        process.exit(1);
    }
}
export default connectDB;




// const mongoose = require('mongoose');

// function connectDB() {
//     const uri = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
    
//     mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(connectionInstance => {
//             console.log(`MongoDB connected on this host: ${connectionInstance.connection.host}`);
//         })
//         .catch(error => {
//             console.log("MONGODB CONNECTION FAILED ERROR", error);
//             process.exit(1);
//         });
// }

// module.exports = connectDB;
