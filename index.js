const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('API 1')
})

app.get('/second', function (req, res) {
    res.send('API 2')
})

app.listen(8080, () => {
    console.log('Server running in port : 8080');
});

module.exports = app;