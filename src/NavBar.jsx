import React, {Component} from 'react';

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span className='usercount'> Users online: {this.props.userCount} </span>
      </nav>
    );
  }
}

export default NavBar;