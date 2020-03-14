const mongooose = require("mongoose");


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

const user = mongooose.model("user", userSchema);

module.exports = user;
