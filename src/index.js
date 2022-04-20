const httpServer = require('./app')

httpServer.listen(process.env.PORT, () => {
    console.log('Listening on port ', process.env.PORT)
})