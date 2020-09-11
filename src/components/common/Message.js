import React, { Component } from 'react';

import '../../styles/message.blocks/master.css';

import * as u from '../../Utility';

class Message extends Component {
  render() {
    const { who, text, when } = this.props.messageData;

    const dateString = u.ParseWhen(when);

    return (
      <div className="message">
        <p className="p message__info">
          { `Отправил ${who} ${dateString}` }
        </p>
        <div className="message__msg-wrap">
          <p className="p message__msg-wrap_msg">
            { text }
          </p>
        </div>
      </div> // message
    );
  }
}

export default Message;
