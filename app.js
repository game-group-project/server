require('dotenv').config() 

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const PORT = process.env.PORT



http.listen(PORT, ()=> console.log(`listening on ${PORT}`))