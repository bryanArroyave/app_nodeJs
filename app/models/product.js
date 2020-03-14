const mongooose = require("mongoose");


const productSchema = new mongooose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["niños", "hogar", "entretenimiento"]
    },
    stock: {
        type: Number,
        default: 10
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

const product = mongooose.model("product", productSchema);

module.exports = product;
