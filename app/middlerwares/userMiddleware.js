const userModel = require("../models/user");

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;

    console.log("error")
    userModel.find(query).then(users => {


        if (!users.length) return next()


        req.body.users = users;
        return next();


    }).catch(err => {
        req.body.error = err;
        return next();
    })

}


module.exports = { find };