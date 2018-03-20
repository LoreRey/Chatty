import React, {Component} from 'react';
import Message from './Message.jsx';
//import Blah from './Notification.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.messages;
    const messageList = messages.map((message) => {
     return(
     <Message
      key={message.id}
      username={message.username}
      content={message.content}
     />
     );
    });

    return (
      <ol className="messages">
      {messageList}
      </ol>
    );
  }
}

export default MessageList;