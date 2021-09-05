const controller = require('../controller/logic/product.controller');

module.exports = (app) => {
    app.post('/product', (req, res, next) => {
        controller.createProduct(req, res, next);
    });

    app.get('/product', (req, res, next) => {
        controller.getProducts(req, res, next);
    });

    app.get('/product/:id', (req, res, next) => {
        controller.getProductById(req, res, next);
    });

    app.put('/product', (req, res, next) => {
        controller.updateProduct(req, res, next);
    });

    app.delete('/product/:id', (req, res, next) => {
        controller.deleteProduct(req, res, next);
    });
}