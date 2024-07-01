import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    name:String,
    eventId:String,
    detail:String,
    registerCount:Number,
    feedback :[{detail :{type:String}}]
});

const Data=mongoose.model('data',dataSchema);

export default Data;