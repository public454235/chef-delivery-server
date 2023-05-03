const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedNews = categories.find(n => n._id === id)
    res.send(selectedNews)
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})