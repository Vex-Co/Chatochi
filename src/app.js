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
let count = 0
// IO
io.on('connection', (socket) => {
    console.log('New WebSocket connection')
    socket.broadcast.emit('message', "A new user joined!")

    socket.on('message', (message) => {
        if (message)
            io.emit('message', message)
    })
    socket.on('sendLocation', ({lon, lat}) => {
        io.emit('message', `Location: ${lat}, ${lon}`)
    })
    socket.on('disconnect', () => {
        io.emit('message', 'A User left')
    })

})

module.exports = httpServer