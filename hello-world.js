const express = require('express'); //importamos el marco de trabajo 
const app = express(); //se crea la instancia de la aplicación Express

const port = 3005; // Se configura el puesto 

app.get('/', (req, res) => {
    res.send('Hola mundo, desde express');
});

app.listen(port, () => console.log(`La app hello worl esta en el puerto ${port}!`))


