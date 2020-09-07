import React, { Component } from 'react';

import '../../styles/card.blocks/master.css';

import { tagsDict } from '../../context/ForumContext';

class Reply extends Component {
  render() {
    return(
      <div className="reply">
        <textarea
          className="reply__text"
          placeholder="Обсудите тему!"
          required
          wrap="soft">
        </textarea>
        <input
          className="reply__name"
          name="reply__name"
        />
        <button>
          Отправить
        </button>
      </div>
    )
  }
}

export default Reply;
