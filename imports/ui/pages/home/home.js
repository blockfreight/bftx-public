import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  render() {
    return (
      <div className="home-page-container container">
        <h1>Welcome to the Blockfreight home Page</h1>
        <img src="/images/blockfreight_illustration.svg"width="100%"/>
      </div>
    );
  }
}

export default HomePage;
