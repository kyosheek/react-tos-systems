import React from 'react';

export const sectionsDict = {
  0: "Форум",
  1: "Сообщество"
};

export const sections = [...Object.keys(sectionsDict)];

export const SectionContext = React.createContext({
  selectedSectionId: 0,
  changeSection: () => {}
});
