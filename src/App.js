import React, { Component } from "react";
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

class App extends Component {
  state = {
    title: "Click image to begin!",
    currentScore: 0,
    topScore: 0,
    isClicked: false,
    isClickedId: [],
    elements: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] 
  };

  shuffleImages = () => this.setState({ elements: this.state.elements.sort(() => Math.random() - 0.5) });

  clickedCard = id => {

    let newClickedId = [...this.state.isClickedId];

    if (!this.state.isClicked) {
      newClickedId.push(id);
      this.setState({ isClicked: true, isClickedId: newClickedId, title: "Click different card to score" });

    } else if ((this.state.isClicked) && (!newClickedId.includes(id))) {
      newClickedId.push(id);
      this.setState({ isClickedId: newClickedId, currentScore: ++this.state.currentScore, title: "Great! Click a card you haven't before" })
      this.shuffleImages();

    } else {
      if (this.state.currentScore > this.state.topScore) { this.setState({ topScore: this.state.currentScore })}

      this.setState({ title: "You lost! Click card to begin!", isClickedId: [-2, -3], currentScore: 0, isClicked: false })
      this.shuffleImages();
    }
    return null;
  };


  render() {

    return (<div>

      <Navbar bg="primary" className="text-light">
        <Navbar.Brand href="#home" className="text-light"> <b>Clicky Game!</b> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-light">
            {this.state.title}
          </Navbar.Text>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-light">
            Score: {this.state.currentScore} | Top Score: {this.state.topScore}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <main className="row d-flex justify-content-center m-5">

        {this.state.elements.map(e =>
          <Image onClick={() => this.clickedCard(e)} key={e} className="align-self-center" src={'./assets/images/' + e + '.png'} className="m-2 image-card" width={170} height={170} thumbnail />
        )}

      </main>

    </div>
    );
  }
}

export default App;