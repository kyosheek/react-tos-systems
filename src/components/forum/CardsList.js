import React, { Component } from 'react';

import '../../styles/cards-list.blocks/master.css';

import { ForumContext } from '../../context/ForumContext';

import { forumMessages } from '../../data/forum';

import Card from './Card';

class CardsList extends Component {
  isIncludes = (cardData, ss) => (cardData.theme.toLowerCase().includes(ss) || cardData.who.toLowerCase().includes(ss));

  render() {
    const ss = this.props.searchContext.searchString;
    const sti = Number(this.props.forumContext.selectedTagId);

    let cardsList = [];
    for (let i = 0; i < 11; i++) {
      for (let key in forumMessages) {
        let cardData = JSON.parse(JSON.stringify(forumMessages[key]));
        if ((sti === 0) || (Number(cardData.tag) === sti)) {
          if ((ss.length === 0) || this.isIncludes(cardData, ss)) {
            cardsList.push(<Card key={ i } cardData={ cardData } />);
          }
        }
      }
    }

    return(
      <div className="cards-list">
          {cardsList}
      </div> /* cards-list */
    )
  }
}

export default CardsList;
