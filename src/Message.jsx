import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <li className="message">
        <span className="message-username">{this.props.username}</span>
        <span className="message-content">{this.props.content}</span>
      </li>
        //<span className="message system">Anonymous1 changed their name to nomnom.</span>
    );
  }
}

export default Message;