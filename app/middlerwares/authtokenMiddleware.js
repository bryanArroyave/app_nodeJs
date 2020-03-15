const jwt = require("jsonwebtoken");
const config = require("../config/config");


module.exports = function (req, res, next) {
    console.log(req.path);


    if (req.path !== '/auth/login') {
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(" ")[1];


            jwt.verify(token, config.SECRET_TOKEN, function (err, decoded) {
                if (err) res.status(403).send({ message: "Incorrect Token", err });
                console.log(req.method);

                if (req.method != "GET") {
                    if (decoded.role === 'admin') {
                        next();
                    }
                    else res.status(403).send({ message: "you don't have authorization ", err });

                }
                else
                    next();

            })
        }
        else { res.status(403).send({ message: "you don't have authorization" }) };
    } else next();
}

