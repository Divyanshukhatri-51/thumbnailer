import bcrypt from "bcrypt"
import User from "../models/User.js";

export const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = User.create({
            name, email, password: hashedPassword
        })
        //setting user in session
        req.session.isLoggedIn = true;
        req.session.userId = newUser?._id;

        return res.json({
            success: true,
            user: newUser,
            message: "User registered successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}
export const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        const isCorrect = await bcrypt.compare(password, user.password);
        if(!isCorrect){
            return res.status(404).json({
                success: false,
                message: "Invalid password"
            })
        }

        //setting user in session
        req.session.isLoggedIn = true;
        req.session.userId = user._id;

        return res.json({
            success: true,
            user: {_id: user._id, name: user.name, email: user.email},
            message: "User registered successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

export const logoutUser = async (req, res) => {
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            return res.status(500).json({message: err.message})
        }
    })
    return res.json({message: "Logout successfully"})
}
export const verifyUser = async (req, res) => {
    try{
        const {userId} = req.session;
        const user = await User.findById(userId).select("-password");
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid User"
            })
        }
        
        return res.json({user})
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}