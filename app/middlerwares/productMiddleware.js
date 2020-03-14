const productModel = require("../models/product");

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;

    console.log("error")
    productModel.find(query).then(products => {


        if (!products.length) return next()


        req.body.products = products;
        return next();


    }).catch(err => {
        req.body.error = err;
        return next();
    })

}

module.exports = { find };