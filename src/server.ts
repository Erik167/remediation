import dotenv from "dotenv"
dotenv.config()

import express from 'express'
import { Server } from 'socket.io'
import http from 'http'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*"
  },
  maxHttpBufferSize: 10e6
})

app.get('/', (req, res) => {
  res.send('Server')
})

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)

  socket.on('sendJob', (job) => {
    console.log('📡 received job: ', job)

    socket.broadcast.emit("printJob", job)
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`PORT: ${PORT}`)
})
