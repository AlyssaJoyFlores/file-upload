const path = require('path');
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')

const uploadProductImageLocal = async(req, res) => {
    // check if file exists
    if(!req.files){
        throw new CustomError.BadRequestError('No files uploaded')
    }

    const productImage = req.files.image;

    // check format
    if(!productImage.mimetype.startsWith('image')){
        throw new CustomError.BadRequestError('Please provide an image file')
    }

    // check size
    maxSize = 1024 * 1024;
    if(productImage.size > maxSize) {
        throw new CustomError.BadRequestError('Please upload image smaller than 1MB');
    }


    const imagePath = path.join(__dirname, '../uploads/' + `${productImage.name}`)
    await productImage.mv(imagePath)

    return res.status(StatusCodes.OK).json({image: {src: `/uploads/${productImage.name}`}})
}

module.exports = {uploadProductImageLocal};