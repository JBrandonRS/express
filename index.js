const express = require('express');
const app = express();
var array = [1,2,3];
var personas = {Nombre: "", Edad: 0 };

//Handle requests to http://127.0.0.1:3000
app.get("/:id", (req, res) => {
    console.log(req.params.id);
    res.send();
});

app.get("/:Nombre"+"/:Edad", (req, res) => {
    personas.Nombre = req.params.Nombre;
    personas.Edad = req.params.Edad;
    console.log(personas);
});

//Run Server
app.listen(3000, () => {
    console.log("Server is running...");
});