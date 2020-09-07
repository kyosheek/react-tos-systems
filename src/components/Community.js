import React, { Component } from 'react';

import '../App.css';
import '../styles/common.blocks/master.css';

import Message from './community/Message';

class Community extends Component {
  render() {
    return (
      <div className="community">
        <Message />
      </div> // forum
    );
  }
}

export default Community;
