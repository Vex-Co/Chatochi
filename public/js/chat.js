const displayMessages = document.querySelector('#display-messages')
const socket = io()

socket.on('message', (message) => {
    const newMessage = document.createElement('span')
    newMessage.textContent = message  
    displayMessages.insertBefore(newMessage, displayMessages.firstChild)
})
//=========================
//    Send message btn
//=========================
document.getElementById('send-btn').addEventListener('click', () => {
    const message = document.getElementById('text-field').value
    socket.emit('message', message)  
})
//=========================
//    Send location btn
//=========================
document.getElementById('location-btn').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Your browser does not support geoloation.')
    }
    navigator.geolocation.getCurrentPosition(({coords: {longitude, latitude}}) => {
        const coords = {
            lon: longitude,
            lat: latitude,
        }
        console.log(coords)
        socket.emit('sendLocation', coords);
    })
})
document.getElementById('text-field').addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("send-btn").click();
    }
});