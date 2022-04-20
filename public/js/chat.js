const displayMessages = document.querySelector('#display-messages')
const socket = io()

socket.on('message', (message) => {
    const newMessage = document.createElement('span')
    newMessage.textContent = message  
    displayMessages.insertBefore(newMessage, displayMessages.firstChild)
})

document.getElementById('send-btn').addEventListener('click', () => {
    const message = document.getElementById('text-field').value
    socket.emit('message', message)  
})

document.getElementById('text-field').addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("send-btn").click();
    }
});