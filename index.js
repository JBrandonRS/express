const express = require('express');
const app = express();

//Handle requests to http://127.0.0.1:3000
app.get("/", (req, rest) => {
    rest.send("Hola muundo");
});

//Run Server
app.listen(3000, () => {
    console.log("Server is running...");
});