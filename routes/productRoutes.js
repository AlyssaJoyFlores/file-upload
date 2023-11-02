const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    addProduct
} = require('../controllers/productController')

const {
    uploadProductImageLocal
} = require('../controllers/uploadController')

router.route('/').get(getAllProducts).post(addProduct)
router.route('/uploads').post(uploadProductImageLocal)

module.exports = router;