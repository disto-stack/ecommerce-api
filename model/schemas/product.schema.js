const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    price: {
        type: "Number",
        required: true
    },
    stocks: {
        type: "Number",
        required: true,
        min: 0
    },
    calification: {
        type: "String",
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "collection_category",
        required: true
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "collection_brand",
        required: true
    },
    discount: {
        type: "Number",
        min: 0
    }
});

module.exports = productSchema;