import React, { Component } from 'react';

import '../styles/navbar.blocks/master.css';

import magnifier_glass from '../assets/magnifier_glass.png';

import { sectionsDict } from '../context/SectionContext';

class Navbar extends Component {
  render() {
      const sectionName = sectionsDict[this.props.sectionContext.selectedSectionId];
    const { searchString, handleSearch } = this.props.searchContext;

    return(
      <div className="navbar">
        <h1 className="h1 navbar__location">
          {sectionName}
        </h1> {/* navbar__location */}
        <div className="navbar__input-div">
          <img
            className="img navbar__img"
            src={magnifier_glass}
            alt="Q"/>
          <input
            className="input navbar__input"
            placeholder="Поиск по разделу"
            name="searchString"
            value={ searchString || ""}
            onChange={(e) => {
              e.preventDefault();
              handleSearch(e);
            }}
            />
        </div> {/* navbar__input-div */}
      </div> //navbar
    )
  }
}

export default Navbar;
