import React, { Component } from 'react';

import '../../styles/message.blocks/master.css';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      name: ''
    }
  }

  handleChange = (e) => {
  }

  render() {
    return(
      <div className="message">
        <textarea
          className="input message_input-msg"
          placeholder="Поделитесь интересным!"
          maxLength="255"/>
        <input
          className="input message_input-name"
          placeholder="Ваше имя"/>
        <button
          className="button message_send">
          Отправить
        </button>
      </div>
    )
  }
}

export default Message;
