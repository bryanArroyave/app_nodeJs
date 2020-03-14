const productModel = require("../models/product");

function getAll(req, res) {
    productModel.find({})
        .then(products => {
            if (products.length) return res.status(200).send({ products })
            return res.status(204).send({ message: "NO CONTENT" })
        }).catch(err => res.status(500).send({ err }));
}
function get(req, res) {
    if (req.body.error) return req.status(500).send({ error });
    console.log(req.body);

    if (!req.body.products) return res.status(404).send({ message: "NOT FOUND" })
    let products = req.body.products;
    return res.status(200).send({ products });

}
function post(req, res) {
    new productModel(req.body).save().then(product =>
        res.status(201).send({ product }))
        .catch(err => res.status(500).send({ err }));
}
function put(req, res) {
    if (req.body.error) return req.status(500).send({ error });
    if (!req.body.products) return res.status(404).send({ message: "NOT FOUND" })
    let product = req.body.products[0];

    product = Object.assign(product, req.body);
    product.save()
        .then(product => {
            res.status(200).send({ message: "UPDATED", product })
        }).catch(err => res.status(500).send({ err }));
}
function remove(req, res) {
  
    if (req.body.error) return req.status(500).send({ error });
    if (!req.body.products) return res.status(404).send({ message: "NOT FOUND" })
    let product = req.body.products[0].remove()
        .then(products => {
            res.status(200).send({ message: "REMOVED", products })
        })
        .catch(err => res.status(500).send({ err }));


}

module.exports = {
    getAll, get, post, put, remove
}