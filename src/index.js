const server = require('./app')

server.listen(process.env.PORT, () => {
    console.log('Listening on port ', process.env.PORT)
})