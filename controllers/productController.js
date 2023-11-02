const Product = require('../models/product')
const {StatusCodes} = require('http-status-codes')


const getAllProducts = async(req, res) => {
    const products = await Product.find()
    res.status(StatusCodes.OK).json({products})
}


const addProduct = async(req, res) => {
    const {name, price, image} = req.body
    const product = await Product.create({
        name,
        price,
        image
    })
    res.status(StatusCodes.CREATED).json({product})
}


module.exports = {
    getAllProducts,
    addProduct
}