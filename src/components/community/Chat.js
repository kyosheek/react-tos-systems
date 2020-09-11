import React, { Component } from 'react';

import '../../styles/chat.blocks/master.css';

import Message from '../common/Message';

import { SearchContext } from '../../context/SearchContext';

import { communityMessages } from '../../data/community';

class Chat extends Component {


  render() {
    const ss = this.props.searchContext.searchString;

    let messagesList = [];

    for (let key in communityMessages) {
      let messageData = Object.assign({}, communityMessages[key]);
      messagesList.push(<Message key={ key } messageData={ messageData } />);
    }

    return (
      <div className="chat">
        {messagesList}
      </div> // forum
    );
  }
}

Chat.context = SearchContext;

export default Chat;
