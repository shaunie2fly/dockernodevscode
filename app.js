const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hey World, Im running in a Docker Container!!!  This is awesome 8)');
})

app.listen(3000);