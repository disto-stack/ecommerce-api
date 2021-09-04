const categoryDto = require('../../model/dto/category.dto');

exports.createCategory = (req, res, next) => {
    const { name } = req.body;
    const category = { name };
  
    categoryDto.create(category, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'category save error'
            });
        };

        res.status(201).json({
            info: data
        });
    })
}

exports.getCategories = (req, res, next) => {
    categoryDto.getAll({}, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error getting categories'
            });
        };

        res.status(200).json({
            info: data
        });
    });
}

exports.getCategoryById = (req, res, next) => {
    const id = req.params.id;

    categoryDto.getById({ _id: id }, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error getting category'
            });
        };

        res.status(200).json({
            info: data
        });
    });
}

exports.updateCategory = (req, res, next) => {
    const { name, id } = req.body;
    const updatedCategory = { name };

    categoryDto.updateOne({ _id: id }, updatedCategory, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error updating category'
            });
        };

        res.status(201).json({
            message: 'category successfully updated'
        });
    });
}

exports.deleteCategory = (req, res, next) => {
    const id = req.params.id;

    categoryDto.delete({ _id: id }, (error, data) => {
        if (error) {
            return res.status(400).json({
                message: 'error deleting category'
            });
        };

        res.status(204).json();
    })
}