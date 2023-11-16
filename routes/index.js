const express = require('express'),
router = express.Router(),
userRoutes = require('./User.router'),
productRoutes = require('./Product.router')

router.use('/user', userRoutes)
router.use('/product', productRoutes)

module.exports = router;