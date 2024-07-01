import express from 'express';
import Admin from '../models/admin.js'; 

const router =express.Router();


router.post('/login',async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    try{
        const user= await Admin.findOne({
            email:email,
        });
        if(user.email === email && user.password === password)
            res.json({success: true});
        else
            res.json({success: false});
    }
    catch(error){
        res.json({message: error });
    }
    
})


router.post('/register',async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    try{
        const user= await Admin.create({
            email:email,
            password:password
    
        });
        res.json({success: true});
    }
    catch(error){
        res.json({message: error ,success: false});
    }
    
})


export default router;