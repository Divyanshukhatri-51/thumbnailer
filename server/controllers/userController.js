import Thumbnail from "../models/Thumbnail.js";

export const getUsersThumbails = async (req, res) => {
    try{
        const {userId} = req.session;
        const thumbnail = await Thumbnail.find({userId}).sort({createdAt: -1})
        res.json({
            success: true,
            data: thumbnail
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: err.message})
    }
}

export const getSingleThumbail = async (req, res) => {
    try{
        const {userId} = req.session;
        const {id} = req.params;
        const thumbnail = await Thumbnail.findOne({userId, _id: id});
        res.json({
            success: true,
            data: thumbnail
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: err.message})
    }
}