import React, { Component } from 'react';

import '../../styles/cards-list.blocks/master.css';

import { forumMessages } from '../../data/forum';

import Card from './Card';

class CardsList extends Component {
  isIncludes = (cardData, ss) => (cardData.theme.toLowerCase().includes(ss) || cardData.who.toLowerCase().includes(ss));

  doForceUpdate = () => {
    this.forceUpdate();
  }

  render() {
    const ss = this.props.searchContext.searchString;
    const sti = Number(this.props.forumContext.selectedTagId);

    let fms = undefined;
    fms = localStorage.getItem("forumMessages");
    if (fms) {
      fms = JSON.parse(fms);
    } else {
      localStorage.setItem("forumMessages", JSON.stringify(forumMessages));
      fms = JSON.parse(localStorage.getItem("forumMessages"));
    }


    let cardsList = [];
    for (let key in fms) {
      let cardData = fms[key];
      if ((sti === 0) || (Number(cardData.tag) === sti)) {
        if ((ss.length === 0) || this.isIncludes(cardData, ss)) {
          cardsList.push(<Card
                          key={ key }
                          cid={ key }
                          cardData={ cardData }
                          doForceUpdate={ this.doForceUpdate } />);
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
