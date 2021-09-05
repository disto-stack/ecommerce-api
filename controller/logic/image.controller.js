const imageDto = require('../../model/dto/image.dto');
const productDto = require('../../model/dto/product.dto');

exports.createImage = (req, res, next) => {
    const { name, product_id } = req.body;
    const image = { name, product_id };

    productDto.findById(product_id, (error, categoryResponse) => {
        if (error) {
            return res.status(400).json({
                message: 'product not found',
                error
            });
        };
    });

    imageDto.create(image, (error, data) => {
        if (error) {
            console.log(error);
            return res.status(400).json({
                message: 'image save error',
                error
            });
        };

        res.status(201).json({
            info: data
        });
    });
}

exports.getImages = (req, res, next) => {
    imageDto.getAll({}, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error getting images'
            });
        };

        res.status(200).json({
            info: data
        });
    });
}

exports.getImageById = (req, res, next) => {
    const id = req.params.id;

    imageDto.getById({ _id: id }, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error getting image'
            });
        };

        res.status(200).json({
            info: data
        });
    });
}

exports.updateImage = (req, res, next) => {
    const { id, name, product_id } = req.body;
    const updatedImage = { name, product_id };

    productDto.findById(product_id, (error, categoryResponse) => {
        if (error) {
            return res.status(400).json({
                message: 'product not found',
                error
            });
        };
    });

    imageDto.updateOne({ _id: id }, updatedImage, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error updating image'
            });
        };

        res.status(201).json({
            message: 'image successfully updated'
        });
    });
}

exports.deleteImage = (req, res, next) => {
    const id = req.params.id;   q

    imageDto.delete({ _id: id }, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error deleting image'
            });
        };

        res.status(204).json();
    })
}