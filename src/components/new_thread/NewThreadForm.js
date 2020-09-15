import React, { Component } from 'react';

import { tagsDict } from '../../context/ForumContext';

import '../../styles/new-thread.blocks/master.css';

class NewThreadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: '',
      text: '',
      tag: 0,
      name: ''
    }
  }

  static defaultProps = {
    doForceUpdate: () => {}
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    if (name !== "text" && name !== "tag") {
      value = value.replace(/(\r\n|\n|\r)/gm, "");
    }
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  createOptions = () => {
    let options = [];

    options.push(<option key={-1} value="0" disabled hidden>Выберите ярлык</option>);
    for (let key of Object.keys(tagsDict)) {
      if (Number(key) === 0) continue;
      const text = tagsDict[key];
      options.push(<option key={key} value={key}>{text}</option>);
    }
    return options;
  }

  createThread = () => {
    const { theme, text, tag, name } = this.state;
    let now = new Date();

    if (theme.length > 0 && text.length > 0 && tag > 0 && name.length > 0) {
      const o = {
        theme: theme,
        tag: tag,
        who: name,
        when: now.getTime(),
        text: text,
        replies: {}
      };

      let lsmsgs = JSON.parse(localStorage.getItem("forumMessages"));
      const keys = Object.keys(lsmsgs);
      const lkey = Number(keys[keys.length - 1]) + 1;

      Object.assign(lsmsgs, {[lkey]: o});
      localStorage.setItem("forumMessages", JSON.stringify(lsmsgs));
    }
  }

  render() {
    const data = Object.assign({}, this.state);
    return(
      <div className="new-thread-form">
        <input
          className="input new-thread-form__input-theme"
          placeholder="Введите тему"
          name="theme"
          onChange={ this.handleChange }
          value={ this.state.theme || "" }/>
          <button
            className="button new-thread__close-button"
            onClick={() => {
              this.props.newThreadClick(false)
            }}>
            X
          </button>
        <textarea
          className="input new-thread-form__input-msg"
          placeholder="Введите сообщение"
          name="text"
          onChange={ this.handleChange }
          value={ this.state.text || ""}/>
        <input
          className="input new-thread-form__input-name"
          placeholder="Ваше имя"
          maxLength="23"
          name="name"
          onChange={ this.handleChange }
          value={ this.state.name || "" }/>
        <select
          className="select new-thread-form__select-tag"
          name="tag"
          onChange={ this.handleChange }
          value={ this.state.tag }
          required>
          {this.createOptions()}
        </select>
        <button
          className="button new-thread-form__send"
          onClick={ () => {
            this.createThread();
            this.props.newThreadClick(false);
            // if (this.props.doForceUpdate()) {
            //   this.props.doForceUpdate();
            // }
          }}>
          Создать
        </button>
      </div>
    )
  }
}

export default NewThreadForm;
