# Chatty

A real-time chat app that allows users to send and receive messages/notifications, change their username, and view the number of online users. Built using React, Node, Webpack and Babel.

## Screenshots

When users join the chat room, a notification is sent that a 'user has joined' and/or has changed their username. User count on nav bar dictates the number of users online. Also, username colours are generated for every user.

!["When users join the chat room, a notification is sent to all users that a 'user has joined' and/or has changed their username. User count on nav bar dictates the number of users online. Also, username colours are generated for every user."](https://github.com/LoreRey/Chatty/blob/master/docs/Chatty_1.png?raw=true)

When a user leaves the chat room, a notification stating 'user has left' is sent to all users. User count on nav bar gets updated as well.

!["When a user leaves the chat room, a notification stating 'user has left' is sent to all users. User count on nav bar gets updated as well."](https://github.com/LoreRey/Chatty/blob/master/docs/Chatty_2.png?raw=true)


### Dependencies

* "babel-core": "6.23.1",
* "babel-loader": "6.3.1",
* "babel-preset-es2015": "6.22.0",
* "babel-preset-react": "6.23.0",
* "css-loader": "0.26.1",
* "node-sass": "4.5.0",
* "sass-loader": "6.0.0",
* "sockjs-client": "^1.1.2",
* "style-loader": "0.13.1",
* "webpack": "2.2.1",
* "webpack-dev-server": "2.3.0",
* "react": "15.4.2",
* "react-dom": "15.4.2",

WebSockets Server
* "express": "4.16.3",
* "uuid": "^3.2.1",
* "ws": "5.1.0"

## Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```




