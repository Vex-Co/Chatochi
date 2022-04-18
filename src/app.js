const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

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

module.exports = server