const express = require('express'),
router = express.Router(),
{
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct

} = require('../controllers/Product.controller')

router.post('/', createProduct)
router.get('/', getProducts)
router.put('/', updateProduct)
router.delete('/', deleteProduct)


module.exports = router