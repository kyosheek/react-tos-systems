import React, { Component } from 'react';

import '../App.css';
import '../styles/common.blocks/master.css';

import MessageForm from './community/MessageForm';
import { ChatConsumed } from '../context/ConsumedElements';

import { SearchContext } from '../context/SearchContext';

class Community extends Component {
  render() {
    return (
      <div className="community">
        <div className="community__content-wrap">
          <MessageForm />
          <ChatConsumed />
        </div>
      </div> // forum
    );
  }
}

Community.context = SearchContext;

export default Community;
