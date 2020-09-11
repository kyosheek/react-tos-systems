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

  render() {
    return (
      <div className="community">
        <div className="community__content-wrap">
          <MessageForm doForceUpdate={ this.doForceUpdate }/>
          <ChatConsumed />
        </div>
      </div> // forum
    );
  }
}

Community.context = SearchContext;

export default Community;
