import React, {Component} from 'react';
import Message from './Message.jsx';
//import Blah from './Notification.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.messages;
    const messageList = messages.map((message, i) => {
     return(
     <Message
      key={i}
      username={message.username}
      usercolor={message.usercolor}
      content={message.content}
      type={message.type}
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