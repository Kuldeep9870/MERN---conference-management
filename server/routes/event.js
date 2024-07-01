import express from 'express';
import Data from '../models/data.js'; 

const router =express.Router();


router.get('/',async(req,res)=>{
    try{
        const data= await Data.find({});
        res.json(data);
    }
    catch(error){
        res.json({message: error });
    }
    
})


router.post('/add',async(req,res)=>{
    const name=req.body.name;
    const detail=req.body.detail;
    try{
        const user= await Data.create({
            name:name,
            detail:detail,
            registerCount:0,
    
        });
        res.json({success: true});
    }
    catch(error){
        res.json({message: error ,success: false});
    }

    
})
router.post('/update',async(req,res)=>{
    const name=req.body.name;
    const feedback=req.body.feedback;
    try{
        const user= await Data.findOneAndUpdate(
            {name:name},
            {
                $push:{
                    feedback: {
                        detail:feedback,
                    }
                },
            }
    
        );
        res.json({success: true});
    }
    catch(error){
        res.json({message: error ,success: false});
    }
    
    
})
router.post('/delete',async(req,res)=>{
    console.log(req.body);
    const id=req.body._id;
    try{
        const user= await Data.deleteOne({
            _id:id
    
        });
        res.json({success: true});
    }
    catch(error){
        res.json({message: error ,success: false});
    }
    
    
})

export default router;