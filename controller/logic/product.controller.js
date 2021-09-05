const productDto = require('../../model/dto/product.dto');
const categoryDto = require('../../model/dto/category.dto');
const brandDto = require('../../model/dto/brand.dto');

exports.createProduct = (req, res, next) => {
    const { name, price, stocks, calification, discount, category_id, brand_id } = req.body;
    const product = { name, price, stocks, calification, discount, category_id, brand_id };

    categoryDto.findById(category_id, (error, categoryResponse) => {
        if (error) {
            return res.status(400).json({
                message: 'category not found',
                error
            });
        };
    });

    brandDto.findById(brand_id, (error, brandResponse) => {
        if (error) {
            return res.status(400).json({
                message: 'brand not found',
                error
            });
        };
    });
  
    productDto.create(product, (error, data) => {
        if (error) {
            console.log(error);
            return res.status(400).json({
                message: 'product save error',
                error
            });
        };

        res.status(201).json({
            info: data
        });
    });
}

exports.getProducts = (req, res, next) => {
    productDto.getAll({}, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error getting products'
            });
        };

        res.status(200).json({
            info: data
        });
    });
}

exports.getProductById = (req, res, next) => {
    const id = req.params.id;

    productDto.getById({ _id: id }, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error getting product'
            });
        };

        res.status(200).json({
            info: data
        });
    });
}

exports.updateProduct = (req, res, next) => {
    const { id, name, price, stocks, calification, discount, category_id, brand_id } = req.body;
    const updatedProduct = { name, price, stocks, calification, discount, category_id, brand_id };

    categoryDto.findById(category_id, (error, categoryResponse) => {
        if (error) {
            return res.status(400).json({
                message: 'category not found',
                error
            });
        };
    });

    brandDto.findById(brand_id, (error, brandResponse) => {
        if (error) {
            return res.status(400).json({
                message: 'brand not found',
                error
            });
        };
    });

    productDto.updateOne({ _id: id }, updatedProduct, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error updating product'
            });
        };

        res.status(201).json({
            message: 'product successfully updated'
        });
    });
}

exports.deleteProduct = (req, res, next) => {
    const id = req.params.id;

    productDto.delete({ _id: id }, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error deleting product'
            });
        };

        res.status(204).json();
    })
}