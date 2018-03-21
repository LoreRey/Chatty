import React, {Component} from 'react';

class ChatBar extends Component {

  onUserNameChange = e => {
    if (e.key === 'Enter') {
      this.props.changeUserName(e.target.value);
    }
  }

  onMessageEnter = e => {
    if (e.key === 'Enter') {
      this.props.newMessage(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.username} onKeyPress={this.onUserNameChange} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.onMessageEnter} />
      </footer>
    );
  }

}

export default ChatBar;

