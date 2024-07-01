import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email:{
        type :String,
        require:true,
        unique:true
    },
    password : String,
});

const Admin=mongoose.model('admin',adminSchema);

export default Admin;