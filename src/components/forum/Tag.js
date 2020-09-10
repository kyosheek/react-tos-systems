import React, { Component } from 'react';

import '../../styles/tag.blocks/master.css';

import { ForumContext } from '../../context/ForumContext';

class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: undefined
    }
  }

  // Lifecycle methods ----------------------------------------------------------------

  static getDerivedStateFromProps = (props, state) => {
    const newState = {
      id: props.tagId
    }
    return newState;
  }

  render() {
    const { selectedTagId } = this.context;
    const { tagId, text } = this.props;
    const tagClass = "button tag-button" +
      (Number(selectedTagId) === Number(tagId) ? " tag-button_selected" : "");

    return(
      <ForumContext.Consumer>
      {({selectedTagId, changeTag}) => (
        <div className="tag-wrap">
          <button
            className={tagClass}
            onClick={() => changeTag(tagId)}>
            { text }
          </button>
        </div>
      )}
      </ForumContext.Consumer>
    )
  }
}

Tag.contextType = ForumContext;

export default Tag;
