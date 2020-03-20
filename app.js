require('dotenv').config() 

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = process.env.PORT || 3000

let players = []

io.on('connection', (socket)=> {
    // ! User Connect
    console.log('a User Connected')
    // ? score
    socket.on('send-score', data => {
      // ? broadcast-score
      socket.broadcast.emit('on-broadcast-score', data)
    })
    socket.on('join-game', player => {
      console.log('join-game', player)
      // ? player join
      players.push(player)
      io.sockets.emit('on-player-joined', players)
    })

    socket.on('start-game', _=> {
      console.log('game-start')
      socket.broadcast.emit('on-start-game')
    })
    socket.on('restart-game', _=> {
      console.log('game-restart')
      players = []
      socket.broadcast.emit('on-restart-game')
    })

    // ! User Disconnect
    socket.on('disconnect', ()=> {
      console.log('a User Disconnected')
      players = []
      socket.broadcast.emit('on-restart-game')
    })
})

http.listen(PORT, ()=> console.log(`listening on ${PORT}`))