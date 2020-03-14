const database = require("./app/config/db")
const config = require("./app/config/config")
const app = require("./app/app")

database.connect();

app.listen(config.PORT, (err) => {
    if (err) return console.log(err);
    console.log("server is runnig in ", config.PORT);


})