import React, { Component } from 'react';

import '../../styles/card.blocks/master.css';

import Reply from './Reply';

import { tagsDict } from '../../context/ForumContext';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
    const { theme, tag, who, when, text, replies } = this.props.cardData;
    let date = new Date(Number(when));
    const dateString = `${date.getDate()}.${
        (date.getMonth() + 1) < 10
        ? "0" + (date.getMonth() + 1)
        : (date.getMonth() + 1)}.${date.getFullYear()
      }
      в ${date.getHours()}:${date.getSeconds()}`;

    const tagName = tagsDict[tag];

    const repliesLength = String(Object.keys(replies).length);
    let repliesWord = "ответов";
    const lastNumber = Number(repliesLength[repliesLength.length - 1]);
    if (Number(repliesLength) > 21 || Number(repliesLength) < 4) {
      if (lastNumber > 1 && lastNumber < 5) {
        repliesWord = "ответа";
      } else if (lastNumber === 1) {
        repliesWord = "ответ";
      }
    }

    const isExpanded = this.state.expanded;

    const buttonStyle = "button card__hide" + (isExpanded ? " card__hide-visible" : "");
    const textStyle = "p card__text" + (isExpanded ? " card__text-visible" : "");
    const cardStyle = "button card" + (isExpanded ? " card-expanded" : "");

    return(
      <React.Fragment>
        <button
          className={ cardStyle }
          onClick={() => {
            this.setState({
              expanded: !this.state.expanded
            })
          }}>
            <p className="p card__info">{`Создал ${who} ${dateString}`}</p>
            {/* <button className="button card__hide">-</button> */}
            <h3 className="h3 card__theme">{ theme }</h3>
            { this.state.expanded && <p className={ textStyle }>{ text }</p> }
            <p className="p card__tag">{ tagName }</p>
            <p className="p card__replies">{`${repliesLength} ${repliesWord}`}</p>
        </button> {/* card */}
        { this.state.expanded && <Reply replies={ replies } /> }
        {/* <Replies /> */}
      </React.Fragment>
    )
  }
}

export default Card;
