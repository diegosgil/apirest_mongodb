//Conectamos nuestro servidor
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const libroRoutes = require("./routes/libro.routes")
const facturaRoutes = require("./routes/factura.routes")

const app = express();
const port = process.env.PORT || 9000; 

//middleware
app.use(express.json());
app.use('/apilibro', libroRoutes);
app.use('/apifactura', facturaRoutes);


//Routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

//Conexion mongodb
mongoose
    .connect(process.env.MONGODB_URI_LIBRO)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("Servidor esta escuchando", port));