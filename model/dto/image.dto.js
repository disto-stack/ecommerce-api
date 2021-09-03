const mongoose = require('mongoose');
const schema = require('../schemas/image.schema');

schema.statics = {
    create: function (data, callback) {
        const document = new this(data);
        document.save(callback);
    },
    getAll: function (query, callback) {
        this.find(query, callback);
    },
    getById: function (query, callback) {
        this.find(query, callback);
    },
    update: function (query, data, callback) {
        this.findOneAndUpdate(query, { $set: data }, { useFindAndModify: true }, callback);
    },
    delete: function (query, callback) {
        this.findOneAndDelete(query, { useFindAndModify: true }, callback)
    }
}

module.exports = mongoose.model("collection_image", schema);