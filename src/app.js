const socket = new WebSocket("wss://remediation-1.onrender.com");

// Event: WebSocket opens
socket.onopen = () => {
    console.log("Connected to WebSocket");
};

// Function to send image as raw binary data
async function sendImage(imageFile) {
    const arrayBuffer = await imageFile.arrayBuffer(); // Convert image to raw bytes
    socket.send(arrayBuffer);
}

// Example: Select an image from an `<input type="file">`
document.querySelector("#imageInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        sendImage(file);
    }
});
