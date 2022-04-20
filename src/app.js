const express = require('express')
const path = require('path')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static('public'))

app.get('', (req, res) => {
    res.render('home')
})

// IO
io.on('connection', () => {
    console.log('New WebSocket connection')
})

module.exports = httpServer