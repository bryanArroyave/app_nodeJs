const mongoose = require("mongoose")
const config = require("./config")

module.exports = {
    connection: null,
    connect: () => {
        return this.connection ? this.connection : mongoose.connect(config.DB).then(
            connection => {
                this.connection = connection;
                console.log('conexion a base de datos exitosa');
            }
        ).catch(err => console.log("err"));
    }

}

