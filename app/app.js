const express = require("express")
const bodyParse = require("body-parser")
const productRoutes = require("./routes/productRoute")
const userRoutes = require("./routes/userRoute")
const authRoutes = require("./routes/authRoutes")
const app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false })) // no viene  de un formulario directo
app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);



module.exports = app;