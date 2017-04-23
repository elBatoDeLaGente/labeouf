const express = require('express');
const app = express();

// Seguridad - Bloquea envias informacion del server en el header
app.disable('x-powered-by');

app.use(express.static(__dirname + '/build'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) { res.render('index') });

app.listen(3000, function() {
    console.log('App listening on port 3000!')
});