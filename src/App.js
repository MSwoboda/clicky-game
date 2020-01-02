import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
import Image from 'react-bootstrap/Image'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    title: "Click image to begin!",
    currentScore: 0,
    topScore: 0

  };

  render() {

    const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] //..some array
    const items = []

    for (const [index, value] of elements.entries()) {
      items.push(<Image src={window.location.origin + '/assets/images/' + index + '.png'} className="m-2 " width={170} height={170} thumbnail />)
    }

  

    return (<div>
      <HeaderBar title={this.state.title} currentScore={this.state.currentScore} topScore={this.state.topScore} />
      <br />

      <main className="container m-5 justify-content-between">
          {items}
      </main>
    </div>



    );
  }
}

export default App;