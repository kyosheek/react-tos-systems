import React, { Component } from 'react';

import './App.css';
import './styles/common.blocks/master.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Forum from './components/Forum';
import Community from './components/Community';

import { SectionContext } from './context/SectionContext';
import { SearchContext } from './context/SearchContext';

import { NavbarConsumed } from './context/ConsumedElements';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionContext: {
        selectedSectionId: 0,
        changeSection: this.changeSection
      },
      searchContext: {
        searchString: '',
        handleSearch: this.handleSearch
      }
    };
  }

  changeSection = (sectionId) => {
    let sectionContextCopy = Object.assign({}, this.state.sectionContext);
    sectionContextCopy.selectedSectionId = Number(sectionId);
    this.setState({
      ...this.state,
      sectionContext: sectionContextCopy
    });
  }

  handleSearch = (e) => {
    let { name, value } = e.target;
    value = value.replace(/(\r\n|\n|\r)/gm, "");
    let searchContextCopy = Object.assign({}, this.state.searchContext);
    searchContextCopy[name] = value;
    this.setState({
      ...this.state,
      searchContext: searchContextCopy
    })
  }

  renderSection = () => {
    switch(this.state.sectionContext.selectedSectionId) {
      case 0:
        return (<Forum />);
      case 1:
        return (<Community />);
      default:
        alert('Error in sectionId');
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <SectionContext.Provider value={ Object.assign({}, this.state.sectionContext) }>
          <Header />
          <SearchContext.Provider value={ Object.assign({}, this.state.searchContext) }>
            <NavbarConsumed />
            { this.renderSection() }
          </SearchContext.Provider>
        </SectionContext.Provider>
      </div> // app
    );
  }
}

export default App;
