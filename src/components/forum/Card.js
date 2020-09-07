import React, { Component } from 'react';

import '../../styles/card.blocks/master.css';

import { tagsDict } from '../../context/ForumContext';

class Card extends Component {
  render() {
    const { username, time, theme, tag, replies } = this.props.cardData;
    const tagName = tagsDict[tag];

    return(
      <button className="button card">
          <p className="p card__info">{`Создал ${username} в ${time}`}</p>
          <h3 className="h3 card__theme">{theme}</h3>
          <p className="p card__tag">{tagName}</p>
          <p className="p card__replies">{`${replies} ответов`}</p>
      </button> /* card */
    )
  }
}

export default Card;
