const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const express = require();
const port = 3000;

let libros = [{"isbn":"9781593279509",
"titulo":"Eloquent JavaScript, Third Edition",
"subtitulo":"A Modern Introduction to Programming",
"autor":"Marijn Haverbeke",
"publicacion":"2018-12-04T00:00:00.000Z",
"editorial":"No Starch Press",
"paginas":472,
"descripcion":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
"website":"http://eloquentjavascript.net/"
},
{
"isbn":"9781491943533",
"titulo":"Practical Modern JavaScript",
"subtitulo":"Dive into ES6 and the Future of JavaScript",
"autor":"Nicolás Bevacqua",
"publicacion":"2017-07-16T00:00:00.000Z",
"editorial":"O'Reilly Media",
"pagpaginases":334,
"descripcion":"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
"website":"https://github.com/mjavascript/practical-modern-javascript"
}]// Aquí ubicaremos los datos de libros

app.use(cors());
app.get('/', function(req, res) {// desplegamos el index
res.sendFile(path.join(__dirname, '/index.html'));
});
// Configuración del middleware body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/libros', (req, res) => {
    const libro = req.body;

    // salida del libro por consola
    console.log(libro);
    libros.push(libro);
    res.sendFile(path.join(__dirname, '/lista-libros.html'));//enviar a libros
    //res.send('El libro ha sido agregado ');
// });app.post('/libros', (req, res) => {
//     const libro = req.body;

//     // salida del libro por consola
//     console.log(libro);
//     libros.push(libro);
//     res.sendFile(path.join(__dirname, '/lista-libros.html'));//enviar a libros
//     //res.send('El libro ha sido agregado ');
// });
app.listen(port, () => console.log(`App Libro esta en el puerto ${port}!`));