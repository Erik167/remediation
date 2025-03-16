const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("image_upload", (data) => {
        const { fileType, buffer } = data;
        const fileExtension = fileType.split("/")[1]; // Extract file extension (e.g., "png")
        const fileName = `received_image.${fileExtension}`;

        fs.writeFile(fileName, Buffer.from(buffer), (err) => {
            if (err) console.error("Error saving image:", err);
            else console.log(`Image received and saved as ${fileName}`);
        });
    });

    socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(3000, () => {
    console.log("Socket.IO server running on http://localhost:3000");
});
