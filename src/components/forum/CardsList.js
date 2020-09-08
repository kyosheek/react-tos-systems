import React, { Component } from 'react';

import '../../styles/cards-list.blocks/master.css';
import { forumMessages } from '../../data/forum';

import Card from './Card';

class CardsList extends Component {
  render() {
    let cardsList = [];
    for (let key in forumMessages) {
      let cardData = JSON.parse(JSON.stringify(forumMessages[key]));
      cardsList.push(<Card key={ key } cardData={ cardData } />);
    }

    return(
      <div className="cards-list">
          {cardsList}
      </div> /* cards-list */
    )
  }
}

export default CardsList;
