const socket = io("https://remediation-1.onrender.com"); // Connect to Socket.IO server

// Function to send image as binary data
async function sendImage(imageFile) {
    const arrayBuffer = await imageFile.arrayBuffer(); // Convert image to raw bytes
    const fileType = imageFile.type; // Get file type (e.g., "image/png")

    socket.emit("image_upload", { fileType, buffer: arrayBuffer });
}

// Example: Select an image from an `<input type="file">`
document.querySelector("#imageInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        sendImage(file);
    }
});