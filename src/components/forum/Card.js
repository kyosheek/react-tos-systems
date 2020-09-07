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

  renderReplies = () => {
    const repliesBlock = [<Reply />];
    return (this.state.expanded
      ? null
      : repliesBlock);
  }

  render() {
    // const { theme, tag, who, when, text } = this.props.cardData;
    const { username, time, theme, tag, replies } = this.props.cardData;
    const tagName = tagsDict[tag];

    const isExpanded = this.state.expanded;

    const textStyle = "p card__text"
          + (isExpanded ? " card__text-visible" : "");
    const cardStyle = "button card"
          + (isExpanded ? " card-expanded" : "");

    return(
      <React.Fragment>
        <button className="button card">
            <p className="p card__info">{`Создал ${username} в ${time}`}</p>
            <h3 className="h3 card__theme">{ theme }</h3>
            <p className={ textStyle }></p>
            <p className="p card__tag">{ tagName }</p>
            <p className="p card__replies">{`${replies} ответов`}</p>
        </button> {/* card */}
        {/* <Reply /> */}
        {/* <Replies /> */}
      </React.Fragment>
    )
  }
}

export default Card;
