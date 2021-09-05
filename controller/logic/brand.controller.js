const brandDto = require('../../model/dto/brand.dto');

exports.createBrand = (req, res, next) => {
    const { name } = req.body;
    const brand = { name };
  
    brandDto.create(brand, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'brand save error'
            });
        };

        res.status(201).json({
            info: data
        });
    })
}

exports.getBrands = (req, res, next) => {
    brandDto.getAll({}, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error getting brands'
            });
        };

        res.status(200).json({
            info: data
        });
    });
}

exports.getBrandById = (req, res, next) => {
    const id = req.params.id;

    brandDto.getById({ _id: id }, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error getting brand'
            });
        };

        res.status(200).json({
            info: data
        });
    });
}

exports.updateBrand = (req, res, next) => {
    const { name, id } = req.body;
    const updatedBrand = { name };

    brandDto.updateOne({ _id: id }, updatedBrand, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error updating brand'
            });
        };

        res.status(201).json({
            message: 'brand successfully updated'
        });
    });
}

exports.deleteBrand = (req, res, next) => {
    const id = req.params.id;

    brandDto.delete({ _id: id }, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error deleting brand'
            });
        };

        res.status(204).json();
    })
}