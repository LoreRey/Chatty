import React, {Component} from 'react';

class Message extends Component {
  render() {
    if (this.props.type === 'incomingMessage') {
    return (
      <li className="message">
        <span className="message-username">{this.props.username} </span>
        <span className="message-content">{this.props.content} </span>
      </li>
    );
    } else if (this.props.type === 'incomingNotification') {
    return (
      <li className="message system">
        <span className="message-content">{this.props.content} </span>
      </li>
    );
    }
  }
}

export default Message;