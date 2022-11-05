const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express()
const port = 3000

let libros = [
    {
        "isbn":"9781593279509",
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
    }
]// Aquí ubicaremos los datos de libros

app.use(cors());
app.get('/', function  (req, res) {
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

    res.send('El libro ha sido agregado ');
});


app.get('/libros', (req, res) => {
    res.json(libros);
});




let books = [{
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "author": "Marijn Haverbeke",
    "publish_date": "2014-12-14",
    "publisher": "No Starch Press",
    "numOfPages": 472,
},
{
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "publish_date": "2012-07-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 254,
},
{
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "author": "Axel Rauschmayer",
    "publish_date": "2014-02-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 460,
}];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    // output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.get('/book', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;

    // searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.delete('/book/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;

    // remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }

        return false;
    });

    // sending 404 when not found something is a good practice
    res.send('Book is deleted');
});

app.post('/book/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]

        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    // sending 404 when not found something is a good practice
    res.send('Book is edited');
});

app.listen(port, () => console.log(`App Libro esta en el puerto  ${port}!`));


