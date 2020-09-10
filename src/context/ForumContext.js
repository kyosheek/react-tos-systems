import React from 'react';

export const tagsDict = {
  0: "Всё",
  1: "Брендинг",
  2: "Графический дизайн",
  3: "UI Дизайн",
  4: "UX Дизайн",
  5: "Front-end",
  6: "Back-end",
  7: "Базы данных"
};

export const ForumContext = React.createContext({
  creatingThread: false,
  selectedTagId: 0,
  changeTag: () => {}
});
