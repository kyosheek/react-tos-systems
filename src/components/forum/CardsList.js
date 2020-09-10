import React, { Component } from 'react';

import '../../styles/cards-list.blocks/master.css';
import { forumMessages } from '../../data/forum';

import Card from './Card';

class CardsList extends Component {
  render() {
    let cardsList = [];
    for (let i = 0; i < 11; i++) {
      for (let key in forumMessages) {
        let cardData = JSON.parse(JSON.stringify(forumMessages[key]));
        cardsList.push(<Card key={ i } cardData={ cardData } />);
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
