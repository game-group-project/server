require('dotenv').config() 

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = process.env.PORT

io.on('connection', ()=> {
    console.log('User Connected')
})

http.listen(PORT, ()=> console.log(`listening on ${PORT}`))