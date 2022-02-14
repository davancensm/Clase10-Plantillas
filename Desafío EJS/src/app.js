const express = require('express');
const productosRouter = require('./routes/productos');

const app = express();
const server = app.listen(8080, () => console.log("Server Listening"))

server.on("error", error => console.log(`Error en servidor ${error}`));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('files'));
app.use(express.static('public'));

app.use('/productos',productosRouter);

