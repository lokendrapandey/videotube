import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser =  asyncHandler( async (req,res) => {
    // get user details form forntend
    // validation not empty 
    // check if user already exists : username, email
    // check images , check avatar
    // upload them to cloudinary
       // upload them to cloudinary, avatar
        // create user object - create entry in db
        // remove password and refresh token field from response
        // check for user creation
        // return res

        const {fullName, email, username, password } = req.body
        console.log("email: ", email);   

})

 

export {
    registerUser
}