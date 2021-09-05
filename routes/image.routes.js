const controller = require('../controller/logic/image.controller');

module.exports = (app) => {
    app.post('/image', (req, res, next) => {
        controller.createImage(req, res, next);
    });

    app.get('/image', (req, res, next) => {
        controller.getImages(req, res, next);
    });

    app.get('/image/:id', (req, res, next) => {
        controller.getImageById(req, res, next);
    });

    app.put('/image', (req, res, next) => {
        controller.updateImage(req, res, next);
    });

    app.delete('/image/:id', (req, res, next) => {
        controller.deleteImage(req, res, next);
    });
}