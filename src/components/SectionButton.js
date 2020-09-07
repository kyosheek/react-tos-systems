import React, { Component } from 'react';

import { SectionContext } from '../context/SectionContext';

class SectionButton extends Component {
  render() {
    const { sectionId, sectionName } = this.props;
    const { selectedSectionId, changeSection } = this.context;
    const style = "button header__section-button" + (Number(sectionId) === Number(selectedSectionId) ? " header__section-button_selected" : "");
    return(
      <button
        className={style}
        onClick={() => changeSection(sectionId)}>
        {sectionName}
      </button>
    )
  }
}

SectionButton.contextType = SectionContext;

export default SectionButton;
