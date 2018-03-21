const express = require('express');
const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  })
}

wss.on('connection', (ws) => {
  console.log('Client connected');

ws.on('message', (message) => {
  //console.log('received ', JSON.parse(message));
  const msgObj = JSON.parse(message);
  let newMsg = {
    id: uuidv1(),
    username: msgObj.username,
    content: msgObj.content
  };
  console.log(JSON.stringify(newMsg))
  wss.broadcast(JSON.stringify(newMsg));
});

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});