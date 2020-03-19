require('dotenv').config() 

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = process.env.PORT

io.on('connection', ()=> {
    console.log('a User Connected')
    socket.on('disconnect', ()=> {
        console.log('a User Disconnected')
    })
})

http.listen(PORT, ()=> console.log(`listening on ${PORT}`))