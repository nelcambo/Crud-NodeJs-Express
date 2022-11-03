const express = require("express");
const app = express("express");
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hola mundo, desde express');
});

app.listen(port, () => console.log(`La app hello world esta en el puerto ${port}!`))
