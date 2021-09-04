const controller = require('../controller/logic/brand.controller');

module.exports = (app) => {
    app.post('/brand', (req, res, next) => {
        controller.createBrand(req, res, next);
    });

    app.get('/brand', (req, res, next) => {
        controller.getBrands(req, res, next);
    });

    app.get('/brand/:id', (req, res, next) => {
        controller.getBrandById(req, res, next);
    });

    app.put('/brand', (req, res, next) => {
        controller.updateBrand(req, res, next);
    });

    app.delete('/brand/:id', (req, res, next) => {
        controller.deleteBrand(req, res, next);
    });
}