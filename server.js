const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const initRoutes = require('./routes/web');
const PORT = process.env.PORT || 4000;

//assets
app.use(express.static('public'));

// configure template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs');

//routes
require('./routes/web')(app)

//listen port
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})