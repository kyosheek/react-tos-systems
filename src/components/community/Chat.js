import React, { Component } from 'react';

import '../../styles/chat.blocks/master.css';

import Message from '../common/Message';

import { SearchContext } from '../../context/SearchContext';

import { communityMessages } from '../../data/community';

class Chat extends Component {
  sortMessages = (msgs) => {
    let toSort = [];
    for (let key in communityMessages) {
      toSort.push([key, Number(communityMessages[key].when)]);
    }
    console.log("to sort", toSort); // my del
    toSort.sort((a, b) => (a[1] > b[1]));
    console.log("after sort", toSort); // my del
    return toSort;
  }

  isIncludes = (messageData, ss) => (messageData.who.includes(ss) || messageData.data.text.includes(ss));

  render() {
    const ss = this.props.searchContext.searchString;

    let msgsSorted = this.sortMessages(communityMessages);
    let messagesList = [];

    console.log(msgsSorted); // my del

    for (let pair in msgsSorted) {
      let messageData = Object.assign({}, communityMessages[pair[0]]);
      if ((ss.length === 0) || this.isIncludes(messageData, ss)) {
        messagesList.unshift(<Message key={ pair[0] } messageData={ messageData } />);
      }
    }

    return (
      <div className="chat">
        { messagesList }
      </div> // forum
    );
  }
}

Chat.context = SearchContext;

export default Chat;
