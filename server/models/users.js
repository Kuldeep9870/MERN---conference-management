import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     email:{
//         type :String,
//         require:true,
//         unique:true
//     },
//     password:{
//         type :String,
//         required:true,
//         unique:true
//     }
// });
const userSchema = new mongoose.Schema({
    email:{
        type :String,
        require:true,
        unique:true
    },
    password : String,
    view :[{name :{type:String},
            detail:{type:String}}]
});

const User=mongoose.model('User',userSchema);

export default User;