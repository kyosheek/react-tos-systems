import React, { Component } from 'react';

import '../App.css';
import '../styles/common.blocks/master.css';
import '../styles/forum.blocks/master.css';

import ActionBar from './forum/ActionBar';
import { CardsListConsumed } from '../context/ConsumedElements';
import NewThreadForm from './new_thread/NewThreadForm';

import { ForumContext } from '../context/ForumContext';

class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creatingThread: false,
      forumContext: {
        expandedId: -1,
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

  newThreadClick = (boo) => {
    this.setState({
      ...this.state,
      creatingThread: boo
    });
  }

  createThread = () => {
    const placeholder = "Введите ваше сообщение!";
    if (this.state.creatingThread) return <NewThreadForm placeholder={ placeholder } />
    else return true;
  }

  render() {
    return (
      <ForumContext.Provider value={ Object.assign({}, this.state.forumContext) }>
        { (this.state.creatingThread && <NewThreadForm newThreadClick={ this.newThreadClick }/>) || (
            <div className="forum">
              <div className="forum__freespace"/>
              <CardsListConsumed />
              <ForumContext.Consumer>
                {(forumContext) => (
                  <ActionBar forumContext={ forumContext } newThreadClick={ this.newThreadClick }/>
                )}
              </ForumContext.Consumer>
            </div>
          )
        }
      </ForumContext.Provider>
    );
  }
}

Forum.contextType = ForumContext;

export default Forum;
