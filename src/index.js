//Conectamos nuestro servidor
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const libroRoutes = require("./routes/libro.routes")

const app = express();
const port = process.env.PORT || 9000; 

//middleware
app.use(express.json());
app.use('/', libroRoutes);


//Routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

//Conexion mongodb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("Servidor esta escuchando", port));