import React, {Component} from 'react';

class ChatBar extends Component {

  onMessageEnter = e => {
    if (e.key === 'Enter') {
      this.props.newMessage(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser.name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.onMessageEnter} />
      </footer>
    );
  }

}


export default ChatBar;