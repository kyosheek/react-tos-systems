import React, { Component } from 'react';

import '../../styles/message-form.blocks/master.css';

class MessageForm extends Component {
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
      <div className="message-form">
        <textarea
          className="input message-form__input-msg"
          placeholder="Поделитесь интересным!"
          maxLength="255"/>
        <input
          className="input message-form__input-name"
          placeholder="Ваше имя"/>
        <button
          className="button message-form__send">
          Отправить
        </button>
      </div>
    )
  }
}

export default MessageForm;
