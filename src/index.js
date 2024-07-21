// require('dotenv').config()
import connectDB from './db/index.js'
import dotenv from 'dotenv'

 
dotenv.config({ 
    path:'./env'
 })

connectDB()
.then(()=> ( app.listen(process.env.PORT || 8000) , ()=>{
    console.log(`SERVER IS RUNNING AT PORT : ${process.env.PORT }`)
}))
.catch((err)=> console.log("MONGODB CONNECTION FAILED !!1",err));

// .then(()=>( app.listen(process.env.PORT || 8000) , () =>{
//     console.log(`server ie running at port : ${process.env.PORT}`)
// } ))
// .catch((err)=> console.log("mongo db connection failed !!!1", err));