const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const { extname } = require('path');

const router = require('./routers/index');

// Create App
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'publish')));

// Template engine

app.engine(
    'hbs',
    engine({
        extname: 'hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Router init
router(app);

app.listen(port, () => {
    console.log(`App Learning English at http://localhost:${port}`);
});
