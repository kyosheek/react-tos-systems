import React, { Component } from 'react';

import '../App.css';
import '../styles/common.blocks/master.css';
import '../styles/forum.blocks/master.css';

import ActionBar from './forum/ActionBar';
import { CardsListConsumed } from '../context/ConsumedElements';

import { ForumContext } from '../context/ForumContext';

class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creatingThread: false,
      forumContext: {
        selectedTagId: 0,
        changeTag: this.changeTag
      }
    }
  }

  changeTag = (tagId) => {
    let forumContextCopy = Object.assign({}, this.state.forumContext);
    forumContextCopy.selectedTagId = Number(tagId);
    this.setState({
      ...this.state,
      forumContext: forumContextCopy
    })
  }

  createThread = () => {

  }

  render() {
    return (
      <ForumContext.Provider value={ Object.assign({}, this.state.forumContext) }>
        <div className="forum">
          <div className="forum__freespace"/>
          <CardsListConsumed />
          <ActionBar />
        </div> {/* forum */}
      </ForumContext.Provider>
    );
  }
}

Forum.contextType = ForumContext;

export default Forum;
