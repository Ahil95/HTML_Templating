const express = require('express')
const app = express()

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.get('/rand', (req, res) => {


    const num = Math.floor(Math.random() * 10) + 1
    res.render('home', { num })
})

app.get('/cats', (req, res) => {
    const cats = ['Rock', 'Whale', 'Tim', 'Tonnie']

    res.render('cats', { cats })
})
app.listen(3000, (req, res) => {

    console.log('Listening on Port 3000')
})