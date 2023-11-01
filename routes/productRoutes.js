const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    addProduct
} = require('../controllers/productController')

const {
    uploadProductImageLocal
} = require('../controllers/uploadController')

router.route('/getAllProducts').get(getAllProducts)
router.route('/addProduct').post(addProduct)
router.route('/uploads').post(uploadProductImageLocal)

module.exports = router;