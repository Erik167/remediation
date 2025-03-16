// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");
// const fs = require("fs");

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server, { cors: { origin: "*" } });

// io.on("connection", (socket) => {
//     console.log("Client connected");

//     socket.on("image_upload", (data) => {
//         const { fileType, buffer } = data;
//         const fileExtension = fileType.split("/")[1]; // Extract file extension (e.g., "png")
//         const fileName = `received_image.${fileExtension}`;

//         fs.writeFile(fileName, Buffer.from(buffer), (err) => {
//             if (err) console.error("Error saving image:", err);
//             else console.log(`Image received and saved as ${fileName}`);
//         });
//     });

//     socket.on("disconnect", () => console.log("Client disconnected"));
// });

// server.listen(8080, () => {
//     console.log("Socket.IO server running on http://localhost:8080");
// });


// const express = require('express');
// const http = require('http');
// const {Server} = require('socket.io');
import express from 'express';
import http from 'http';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 1607;

app.use(express.static('public'));

io.on('connect', (socket) => {
  console.log('a user connected');

  socket.on('sendMessage', (data) => {
    console.log('sendMessage fired')  
    socket.broadcast.emit('answerMessage', {message: 'hi as well'});
  })
})

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
})