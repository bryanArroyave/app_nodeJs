const bcrypt = require("bcrypt");
const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
//username y password

module.exports = function login(req, res) {
    let email = req.body.email;
    let password = req.body.password;


    userModel.findOne({ email })
        .then(user => {
            if (!user) return res.status(404).send({ message: "NOT FOUND" });

            bcrypt.compare(password, user.password)
                .then(match => {

                    if (match) {

                        let payload = {
                            email: user.email,
                            name: user.name
                        };

                        jwt.sign(payload, config.SECRET_TOKEN, function (err, token) {
                            if (err) res.status(500).send({ err });
                            res.status(200).send({ message: "ACCESS SUCCESFULLY", token });
                        })
                    }
                    else {
                        return res.status(200).send({ message: "incorrect password" });
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send({ err });
                })


        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ err });
        })


}