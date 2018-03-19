import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <li className="message">
        <span className="message-username">Anonymous1</span>
        <span className="message-content">I won't be impressed with technology until I can download food.</span>
      </li>
        //<span className="message system">Anonymous1 changed their name to nomnom.</span>
    );
  }
}

export default Message;