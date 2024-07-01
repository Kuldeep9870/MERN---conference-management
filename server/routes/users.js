import express from 'express';
import User from '../models/users.js'; 

const router =express.Router();


router.post('/login',async(req,res)=>{
    console.log(req.body);
    const email=req.body.email;
    const password=req.body.password;
    try{
        const user= await User.findOne({
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
        const user= await User.create({
            email:email,
            password:password
    
        });
        res.json({success: true});
    }
    catch(error){
        res.json({message: error ,success: false});
    }
    
})
router.post('/update',async(req,res)=>{
    const name=req.body.name;
    const detail=req.body.detail;
    try{
        const user= await User.findOneAndUpdate(
            {name:name},
            {
                $push:{
                    view: {
                        name:name,
                        detail:detail
                    }
                },
            }
    
        );
        res.json({success: true});
        
    }
    catch(error){
        res.json({message: error ,success: false});
    }
});


export default router;