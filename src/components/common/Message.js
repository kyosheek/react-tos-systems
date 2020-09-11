import React, { Component } from 'react';

import '../../styles/message.blocks/master.css';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <p className="p message__info">
          Who, When
        </p>
        <div className="message__msg-wrap">
          <p className="message__msg-wrap_msg">
            Text
          </p>
        </div>
      </div> // message
    );
  }
}

export default Message;
