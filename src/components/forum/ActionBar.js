import React, { Component } from 'react';

import '../../styles/actionbar.blocks/master.css';

import TagsList from './TagsList';

class ActionBar extends Component {
  render() {
    return(
      <div className="action-bar">
        <button
          className="button action-bar__new-thread"
          onClick={() => {
            this.props.newThreadClick(true);
          }}>
          Новая ветка
        </button>
        <TagsList />
      </div> /* action-bar */
    )
  }
}

export default ActionBar;
