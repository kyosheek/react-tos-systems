import React, { Component } from 'react';

import '../../styles/tags-list.blocks/master.css';

import Tag from './Tag';

import { ForumContext, tagsDict } from '../../context/ForumContext';

class TagsList extends Component {
  render() {
    let tags = [];

    for (let key of Object.keys(tagsDict)) {
      const text = tagsDict[key];
      tags.push(<Tag selectedTag="0" key={key} tagId={key} text={text} />);
    }

    return(
      <div className="tags-list">
        <h2 className="tags-list__header">
          Ярлыки
        </h2>
        {tags}
      </div> /* tags-list */
    )
  }
}

TagsList.contextType = ForumContext;

export default TagsList;
