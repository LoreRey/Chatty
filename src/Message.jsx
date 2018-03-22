import React, {Component} from 'react';

class Message extends Component {

  message = (type) => {
    switch(type) {
      case 'incomingMessage':
        return (<li className="message">
          <span className="message-username" style={{color:this.props.usercolor}}> {this.props.username} </span>
          <span className="message-content">{this.props.content} </span>
        </li>);
      case 'incomingNotification':
      case 'userCount':
        return (<li className="message system">
          <span className="message-content">{this.props.content} </span>
        </li>);
      default:
        console.log("type not defined")
    };
  }

  render() {
    return this.message(this.props.type)
  }
}

export default Message;