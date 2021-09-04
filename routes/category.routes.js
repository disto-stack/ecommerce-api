const controller = require('../controller/logic/category.controller');

module.exports = (app) => {
    app.post('/category', (req, res, next) => {
        controller.createCategory(req, res, next);
    });

    app.get('/category', (req, res, next) => {
        controller.getCategories(req, res, next);
    });

    app.get('/category/:id', (req, res, next) => {
        controller.getCategoryById(req, res, next);
    });

    app.put('/category', (req, res, next) => {
        controller.updateCategory(req, res, next);
    });

    app.delete('/category/:id', (req, res, next) => {
        controller.deleteCategory(req, res, next);
    });
}