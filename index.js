//Import dependencies 
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

// Initialization
const app = express();

// Settings
//const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3050;

// Setting hbs
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/views/mainLayout'),
    extname: 'hbs',
}));

app.set('view engine', 'hbs');

// Middlewares
app.use("/public", express.static(path.join(__dirname, '/public')));
app.use('/bootCss', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootJs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(require("./routes/router"));

// Starting the server
app.listen(PORT, () => {
    console.log(`\nServer is running on port ${PORT}\nhttp://localhost:${PORT}/\n`);
});