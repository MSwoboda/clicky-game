import React, { Component } from "react";
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    title: "Click image to begin!",
    currentScore: 0,
    topScore: 0,
    isClicked: false,
    isClickedId: [],
    elements: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] //..some array
  };

  shuffleImages = () => {
    let shuffled = this.state.elements.sort(() => Math.random() - 0.5);
    this.setState({ elements: shuffled })
    console.log(this.state.elements);

  };

  clickedCard = id => {

    console.log(id);
    console.log(this.state.isClickedId);


    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
      this.setState({ isClickedId: id });

      console.log(this.state.isClicked);
      this.setState({ title: "Click different card to score" })

      console.log("new game");


    } else if ((this.state.isClicked) && !(this.state.isClickedId.includes(id))) {

      this.setState({ currentScore: ++this.state.currentScore, isClicked: this.state.isClickedId.push(id) })
      this.shuffleImages();
      console.log("added point");
      this.setState({ title: "Great! Click card you haven't before" })


    } else {
      this.setState({ title: "You lost! Click card to begin!" })

      if (this.state.currentScore > this.state.topScore) {
        this.setState({ topScore: this.state.currentScore });
      }
      this.setState({ currentScore: 0 })
      this.setState({ isClicked: false })
      this.setState({ isClickedId: -1 })
      this.shuffleImages();

      console.log("lost");


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
          <Image onClick={() => this.clickedCard(e)} key={e} className="align-self-center" src={window.location.origin + '/assets/images/' + e + '.png'} className="m-2 image-card" width={170} height={170} thumbnail />
        )}

      </main>

    </div>
    );
  }
}

export default App;