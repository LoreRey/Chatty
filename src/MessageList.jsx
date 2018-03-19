import React, {Component} from 'react';
import Message from './Message.jsx';
//import Blah from './Notification.jsx';

class MessageList extends Component {
  render() {
    return (
      <ol className="messages">
        {
          // messagesGroup.map(
            // messageContent =>
            // <Message className={messageContent.type} />
          // )
        }
        <Message />
      </ol>
    );
  }
}

export default MessageList;