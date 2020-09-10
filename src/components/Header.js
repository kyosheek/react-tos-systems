import React, { Component } from 'react';

import '../styles/header.blocks/master.css';

import SectionButton from './SectionButton';

import { sectionsDict } from '../context/SectionContext';

class Header extends Component {
  render() {

    let sectionButtons = [];
    for (let key of Object.keys(sectionsDict)) {
      sectionButtons.push(<SectionButton
                          key={key}
                          sectionId={key}
                          sectionName={sectionsDict[key]}/>);
    }
    return(
      <div className="header">
        <h1 className="h1 header__logo">
          {`Corporate
            Communication
            Service`}
        </h1> {/* header__logo */}
        <div className="header__buttons_wrapper">
          {sectionButtons}
        </div>
        <div className="header__background" />
      </div>
    )
  }
}

export default Header;
