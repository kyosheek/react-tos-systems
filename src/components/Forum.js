import React, { Component } from 'react';

import '../App.css';
import '../styles/common.blocks/master.css';

import ActionBar from './forum/ActionBar';
import CardsList from './forum/CardsList';

import { ForumContext } from '../context/ForumContext';

class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTagId: 0,
      changeTag: this.changeTag
    }
  }

  changeTag = (tagId) => {
    this.setState({
      ...this.state,
      selectedTagId: tagId
    })
  }

  render() {
    return (
      <ForumContext.Provider value={ this.state }>
        <div className="forum">
          <ActionBar />
          <CardsList />
        </div> {/* forum */}
      </ForumContext.Provider>
    );
  }
}

Forum.contextType = ForumContext;

export default Forum;
