const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Selamat datang !')
})

app.get('/api-product', function (req, res) {
    res.send('Ini adalah API Produk')
})

app.get('/api-product/001', function (req, res) {
    res.send('Ini adalah API Detail Produk')
})


app.listen(8080, () => {
    console.log('Server running in port : 8080');
});

module.exports = app;