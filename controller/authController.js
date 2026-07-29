const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.registerUser= async (req,res)=>{
    try {
       const user = await User.create(req.body);
       res.status(201).json({
         success: true,
         message: 'User created successfully',
         data: user,
       });
     } catch (error) {
       res.status(400).json({ success: false, message: error.message });
     }
}

exports.loginUser= async (req,res)=>{
    try {
       const user = await User.findOne({email:req.body.email, role:"admin"});

        const payload={userId:user._id, role:user.role};

        const token= jwt.sign(payload,process.env.JWT_SECRET,{ expiresIn: '1h' });



       res.status(201).json({
         success: true,
         message: 'User created successfully',
         data: user,
         token
       });
     } catch (error) {
       res.status(400).json({ success: false, message: error.message });
     }
}