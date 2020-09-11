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
    let { name, value } = e.target;
    value = value.replace(/(\r\n|\n|\r)/gm, "");
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  sendMessage = () => {
    const { message, name } = this.state;

    if (message.length !== 0 && name.length !== 0) {
      let lsmsgs = JSON.parse(localStorage.getItem("communityMessages"));

      const keys = Object.keys(lsmsgs);
      let lkey = Number(keys[keys.length - 1]);
      lkey += 1;

      let now = new Date();

      const o = { [lkey]: {
        text: message,
        who: name,
        when: now.getTime()
      }};
      lsmsgs = {...lsmsgs, ...o};
      localStorage.setItem("communityMessages", JSON.stringify(lsmsgs));
      this.props.doForceUpdate();
    }
  }

  render() {
    return(
      <div className="message-form">
        <textarea
          className="input message-form__input-msg"
          placeholder="Поделитесь интересным!"
          maxLength="255"
          name="message"
          onChange={ this.handleChange }
          value={ this.state.message || ""}/>
        <input
          className="input message-form__input-name"
          placeholder="Ваше имя"
          maxLength="23"
          name="name"
          onChange={ this.handleChange }
          value={ this.state.name || "" }/>
        <button
          className="button message-form__send"
          onClick={ this.sendMessage }>
          Отправить
        </button>
      </div>
    )
  }
}

export default MessageForm;
