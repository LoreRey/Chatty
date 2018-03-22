import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'},
      messages: [],
      userCount: 0
    };
  }

changeUserName = (inputName) => {
  const oldUser = this.state.currentUser.name;
  const newUser = {
    type: 'postNotification',
    content: `${oldUser} has changed their name to ${inputName}`
  }
  this.socket.send(JSON.stringify(newUser));

  const user = {name: inputName}
  this.setState({currentUser: user});
}


addNewMessage = (messageText) => {
  const newMessageObj = {
    type: 'postMessage',
    username: this.state.currentUser.name,
    content: messageText
  };
  this.socket.send(JSON.stringify(newMessageObj));
}

componentDidMount() {
  this.socket = new WebSocket('ws://localhost:3001');
  this.socket.onopen = (event) => {
  }

  this.socket.onmessage = (event) => {
    const newMessage = JSON.parse(event.data);
    this.setState({messages: this.state.messages.concat(newMessage)});
    if (newMessage.type === "userCount") {
      this.setState({userCount: newMessage.userCount})
    }
  }
}


  render() {
    return (
      <main>
        <NavBar userCount={this.state.userCount} />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} changeUserName={this.changeUserName} newMessage={this.addNewMessage} />
      </main>
    );
  }


}

export default App;