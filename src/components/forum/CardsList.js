import React, { Component } from 'react';

import '../../styles/cards-list.blocks/master.css';

import { ForumContext } from '../../context/ForumContext';

import { forumMessages } from '../../data/forum';

import Card from './Card';

class CardsList extends Component {
  isIncludes = (cardData, ss) => (cardData.theme.toLowerCase().includes(ss) || cardData.who.toLowerCase().includes(ss) || cardData.text.toLowerCase().includes(ss));

  render() {
    const { searchString } = this.props.searchContext;
    const { selectedTagId } = this.props.forumContext;

    const ss = searchString, sti = selectedTagId;

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

CardsList.context = ForumContext;

export default CardsList;
