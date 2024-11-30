const userModel=require('../module/user');


exports.registerUser=async(req,res)=>{
    const {username,email,password}=req.body;
    try {
        const user=await userModel.create({username,email,password});
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.deleteUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const user=await userModel.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(201).json({message:'user delete successfully',user}); 
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.getUsers=async(req,res)=>{
    try {
        const users=await userModel.find();
        if(!users){
            return res.status(404).json({message:"User not found"});
        }
        res.status(201).json({users});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.getUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const user = await userModel.findById(id);  
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(201).json({user});
    }
    catch (error) {
        res.status(500).json({message:error.message});
    }
}

exports.updateUser=async(req,res)=>{
    const {id}=req.params;
    const {username,email,password}=req.body;
    try {
        const user=await userModel.findByIdAndUpdate(id,{username,email,password},{new:true});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(201).json({message:"user updated successfully",user});
    }
    catch (error) {
        res.status(500).json({message:error.message});
    }
}   


