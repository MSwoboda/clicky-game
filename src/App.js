import React, { Component } from "react";
import './App.css';
import HeaderBar from './components/HeaderBar';
import ImageList from './components/ImageCard';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    title: "Click image to begin!",
    currentScore: 0,
    topScore: 0,
    elements: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] //..some array
  };

shuffleImages = () => {

};

  clickedSlut = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  render() {
    return (<div>
      <HeaderBar title={this.state.title} currentScore={this.state.currentScore} topScore={this.state.topScore} />
      <ImageList elements={this.state.elements}/>



    </div>
    );
  }
}

export default App;