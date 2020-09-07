import React, { Component } from 'react';

import '../../styles/cards-list.blocks/master.css';

import Card from './Card';

class CardsList extends Component {
  render() {
    let cardsList = [];
    let cardData1 = {
      username: "Вася Пупкин",
      time: "13:11",
      theme: "Очень интересная тема для обсуждения",
      tag: 5,
      replies: 13
    };
    let cardData2 = {
      username: "Дмитрий Пучков",
      time: "14:88",
      theme: "Как Гоблин стал Голумном",
      tag: 1,
      replies: 99
    };
    let cardData3 = {
      username: "Николай Лукашенко",
      time: "07:13",
      theme: "Как пользоваться автоматом в условиях революции",
      tag: 4,
      replies: 1337
    };
    cardsList.push(<Card key="0" cardData={cardData1} />);
    cardsList.push(<Card key="1" cardData={cardData2} />);
    cardsList.push(<Card key="2" cardData={cardData3} />);
    cardsList.push(<Card key="3" cardData={cardData1} />);
    cardsList.push(<Card key="4" cardData={cardData1} />);
    cardsList.push(<Card key="5" cardData={cardData1} />);
    cardsList.push(<Card key="6" cardData={cardData1} />);
    cardsList.push(<Card key="7" cardData={cardData1} />);
    cardsList.push(<Card key="8" cardData={cardData1} />);


    return(
      <div className="cards-list">
          {cardsList}
      </div> /* cards-list */
    )
  }
}

export default CardsList;
