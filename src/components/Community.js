import React, { Component } from 'react';

import '../App.css';
import '../styles/common.blocks/master.css';

import MessageForm from './community/MessageForm';

class Community extends Component {
  render() {
    return (
      <div className="community">
        <MessageForm />
      </div> // forum
    );
  }
}

export default Community;
