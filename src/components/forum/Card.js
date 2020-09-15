import React, { Component } from 'react';

import '../../styles/card.blocks/master.css';

import MessageForm from '../common/MessageForm';
import Message from '../common/Message';

import { tagsDict } from '../../context/ForumContext';

import * as u from '../../Utility';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  sendMessage = (data) => {
    const { message, name } = data;
    const { cid } = this.props;

    if (message.length !== 0 && name.length !== 0) {
      let lsmsgs = JSON.parse(localStorage.getItem("forumMessages"));

      let threadCopy = Object.assign({}, lsmsgs[Number(this.props.cid)]);
      let repliesCopy = Object.assign({}, threadCopy.replies);
      const keys = Object.keys(repliesCopy);
      let lkey = Number(keys[keys.length - 1]);
      lkey += 1;

      let now = new Date();
      const o = { [lkey]: {
        text: message,
        who: name,
        when: now.getTime()
      }};

      Object.assign(repliesCopy, o);
      Object.assign(threadCopy, {replies: repliesCopy});
      Object.assign(lsmsgs, {[cid]: threadCopy});
      localStorage.setItem("forumMessages", JSON.stringify(lsmsgs));
    }
  }

  renderExpanded = () => {
    const { replies } = this.props.cardData;

    let messagesList = [];

    for (let key in replies) {
      let messageData = Object.assign({}, replies[key]);
      messagesList.unshift(<Message key={ key } messageData={ messageData } />);
    }

    const values = {
      placeholder: "Оставьте комментарий!",
      maxlength: "-1"
    }

    return (
      <React.Fragment>
        <MessageForm
          doForceUpdate={ this.props.doForceUpdate }
          sendMessage={ this.sendMessage }
          values={ values } />
        { messagesList }
      </React.Fragment>
    )
  }

  render() {
    const { theme, tag, who, when, text, replies } = this.props.cardData;

    const dateString = u.ParseWhen(when);
    const tagName = tagsDict[tag];

    const repliesLength = String(Object.keys(replies).length);
    let repliesWord = "ответов";
    const lastNumber = Number(repliesLength[repliesLength.length - 1]);
    if (Number(repliesLength) > 21 || Number(repliesLength) < 4) {
      if (lastNumber > 1 && lastNumber < 5) {
        repliesWord = "ответа";
      } else if (lastNumber === 1) {
        repliesWord = "ответ";
      }
    }

    const isExpanded = this.state.expanded;

    const textStyle = "p card__text" + (isExpanded ? " card__text_visible" : "");
    const cardStyle = "button card" + (isExpanded ? " card_expanded" : "");

    return(
      <React.Fragment>
        <button
          className={ cardStyle }
          onClick={() => {
            this.setState({
              expanded: !this.state.expanded
            })
          }}>
            <p className="p card__info">{`Создал ${who} ${dateString}`}</p>
            <h3 className="h3 card__theme">{ theme }</h3>
            { this.state.expanded && <p className={ textStyle }>{ text }</p> }
            <p className="p card__tag">{ tagName }</p>
            <p className="p card__replies">{`${repliesLength} ${repliesWord}`}</p>
        </button> {/* card */}
        { this.state.expanded && this.renderExpanded() }
        {/* <Replies /> */}
      </React.Fragment>
    )
  }
}

export default Card;
