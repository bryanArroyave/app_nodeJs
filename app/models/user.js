const mongooose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        default: "regular",
        enum: ["admin", "regular"]
    },
    password: {
        type: String,
        required: true,

    },
    sign_up_date: {
        type: Date,
        default: Date.now()
    },
    last_login_date: {
        type: Date,
        default: Date.now()
    }

});
//encrypt password
userSchema.pre('save', function (next) {

    bcrypt.genSalt(10)
        .then(salts => {

            bcrypt.hash(this.password, salts)
                .then(hash => {


                    this.password = hash;
                    next();
                }).catch(err => next(err))
        }).catch(err => {
            console.log("errrasd");
            next(err)
        });
});

const user = mongooose.model("user", userSchema);



module.exports = user;
