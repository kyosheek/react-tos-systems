import React, { Component } from 'react';

import '../../styles/message-form.blocks/master.css';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      name: ''
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    value = value.replace(/(\r\n|\n|\r)/gm, "");
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  render() {
    const text = this.props.values;
    const data = Object.assign({}, this.state);
    return(
      <div className="message-form">
        <textarea
          className="input message-form__input-msg"
          placeholder={ text.placeholder }
          maxLength={ text.maxlength }
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
          onClick={ () => {
            this.props.sendMessage(data) ;
            if (this.props.doForceUpdate()) {
              this.props.doForceUpdate();
            }
            this.setState({
              ...this.state,
              message: ''
            })
          }}>
          Отправить
        </button>
      </div>
    )
  }
}

export default MessageForm;
