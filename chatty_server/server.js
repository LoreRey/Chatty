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
  const countObjOn = {
    type: 'userCount',
    content: 'User has joined.',
    userCount: wss.clients.size,
  }
  wss.broadcast(JSON.stringify(countObjOn));


  ws.on('message', (message) => {
    const msgObj = JSON.parse(message);
    if (msgObj.type === 'postMessage') {
    let newMsg = {
      type: 'incomingMessage',
      id: uuidv1(),
      username: msgObj.username,
      content: msgObj.content
    };
    //console.log(JSON.stringify(newMsg))
    wss.broadcast(JSON.stringify(newMsg));
    } else if (msgObj.type === 'postNotification' || msgObj.type === 'userCount') {
    let notfObj = {
      type: 'incomingNotification',
      id: uuidv1(),
      content: msgObj.content
    };
    wss.broadcast(JSON.stringify(notfObj));
   }
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    const countObjOff = {
      type: 'userCount',
      content: 'User has left.',
      userCount: wss.clients.size,
    }
    wss.broadcast(JSON.stringify(countObjOff));
  });
});