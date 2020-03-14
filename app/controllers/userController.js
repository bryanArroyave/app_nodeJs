const userModel = require("../models/user");

function getAll(req, res) {
    userModel.find({})
        .then(users => {
            if (users.length) return res.status(200).send({ users })
            return res.status(204).send({ message: "NO CONTENT" })
        }).catch(err => res.status(500).send({ err }));
}
function get(req, res) {
    if (req.body.error) return req.status(500).send({ error });
    console.log(req.body);

    if (!req.body.users) return res.status(404).send({ message: "NOT FOUND" })
    let users = req.body.users;
    return res.status(200).send({ users });

}
function post(req, res) {
    new userModel(req.body).save().then(user =>
        res.status(201).send({ user }))
        .catch(err => res.status(500).send({ err }));
}
function put(req, res) {
    if (req.body.error) return req.status(500).send({ error });
    if (!req.body.users) return res.status(404).send({ message: "NOT FOUND" })
    let user = req.body.users[0];

    user = Object.assign(user, req.body);
    user.save()
        .then(user => {
            res.status(200).send({ message: "UPDATED", user })
        }).catch(err => res.status(500).send({ err }));
}
function remove(req, res) {
  
    if (req.body.error) return req.status(500).send({ error });
    if (!req.body.users) return res.status(404).send({ message: "NOT FOUND" })
    let user = req.body.users[0].remove()
        .then(users => {
            res.status(200).send({ message: "REMOVED", users })
        })
        .catch(err => res.status(500).send({ err }));


}

module.exports = {
    getAll, get, post, put, remove
}