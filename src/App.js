import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header'; 
import Featured from './components/featured';
import VenueNFO from './components/venueNFO';
import Highlight from './components/highlights';
import Pricing from './components/pricing';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1000px", background:'cornflowerblue'}}>
        <Header /> 
        <Featured />
        <VenueNFO />
        <Highlight />
        <Pricing />
      </div>
    );
  }
}

export default App;
