import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    }
});
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    socket.on('sendGraphic', (graphic) => {
        console.log('📡 received graphic: ', graphic);
        io.emit("printGraphic", graphic);
    });
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
});
