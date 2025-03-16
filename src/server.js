const WebSocket = require("ws");
const fs = require("fs");

const wss = new WebSocket.Server({ port: 8765 });

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (message) => {
        // Save received image as a PNG file
        fs.writeFile("received_image.png", message, (err) => {
            if (err) console.error("Error saving image:", err);
            else console.log("Image received and saved as received_image.png");
        });
    });

    ws.on("close", () => console.log("Client disconnected"));
});

console.log("WebSocket server running on ws://localhost:8765");
