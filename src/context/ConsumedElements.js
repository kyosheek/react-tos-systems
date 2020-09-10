import React from 'react';

import CardsList from '../components/forum/CardsList';
import Navbar from '../components/Navbar';

import { ForumContext } from './ForumContext';
import { SearchContext } from './SearchContext';
import { SectionContext } from './SectionContext';

export const NavbarConsumed = () => {
  return (
    <SectionContext.Consumer>
      {(sectionContext) => (
        <SearchContext.Consumer>
          {(searchContext) => (
            <Navbar sectionContext={ sectionContext } searchContext={ searchContext } />
          )}
        </SearchContext.Consumer>
      )}
    </SectionContext.Consumer>
  );
};

export const CardsListConsumed = () => {
  return (
    <SearchContext.Consumer>
      {(searchContext) => (
        <ForumContext.Consumer>
          {(forumContext) => (
            <CardsList searchContext={ searchContext } forumContext={ forumContext } />
          )}
        </ForumContext.Consumer>
      )}
    </SearchContext.Consumer>
  );
};
