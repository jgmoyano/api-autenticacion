const Product = require('../models/Product.model')

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        const resp = await product.save()
        return res.json({
            message: 'Product was created successfully',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err.message
        })
    }
}

const getProducts = async (req, res) => {
    try {
        const resp = await Product.find()
        return res.json({
            message: 'Products',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err.message
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const newData = req.body

        const resp = await Product.findByIdAndUpdate(
            newData.productId,
            { $set: newData },
            { new: true })

        return res.json({
            message: 'Product updated successfully',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const resp = await Product.findByIdAndDelete(req.body.productId)

        return res.json({
            message: 'Product deleted successfully',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err
        })
    }
}

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}