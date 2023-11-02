const path = require('path');
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')
const cloudinary = require('cloudinary').v2;
const fs = require('fs')



const uploadProductImageLocal = async(req, res) => {
    //console.log(req.files.image)
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename:true,
        folder:'file-upload'
    })

    fs.unlinkSync(req.files.image.tempFilePath)
    //console.log(result)
    return res.status(StatusCodes.OK).json({image:{src:result.secure_url}})
}

module.exports = {
    uploadProductImageLocal
};