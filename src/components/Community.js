import React, { Component } from 'react';

import '../App.css';
import '../styles/common.blocks/master.css';
import '../styles/community.blocks/master.css';

import MessageForm from './common/MessageForm';
import { ChatConsumed } from '../context/ConsumedElements';

import { SearchContext } from '../context/SearchContext';

class Community extends Component {
  doForceUpdate = () => {
    this.forceUpdate();
  }

  sendMessage = (data) => {
    const { message, name } = data;

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
    }
  }

  render() {
    const values = {
      placeholder: "Поделитесь интересным!",
      maxlength: "255"
    };

    return (
      <div className="community">
        <div className="community__content-wrap">
          <MessageForm
            doForceUpdate={ this.doForceUpdate }
            sendMessage={ this.sendMessage }
            values={ values } />
          <ChatConsumed />
        </div>
      </div>
    );
  }
}

Community.context = SearchContext;

export default Community;
