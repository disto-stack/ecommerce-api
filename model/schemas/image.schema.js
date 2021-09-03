const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "collection_product",
        required: true
    }
});

module.exports = imageSchema;