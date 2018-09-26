//Import dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import puppy from "./puppy.json";
import "./App.css";

//Sets state to 0 or empty
class App extends Component {
  state = {
    puppy,
    clickedPuppy: [],
    score: 0
  };

//When you click on a card ... the puppy is taken out of the array
  imageClick = event => {
    const currentPuppy = event.target.alt;
    const PuppyAlreadyClicked =
      this.state.clickedPuppy.indexOf(currentPuppy) > -1;

//If you click on a puppy that has already been selected, the game is reset and cards reordered
    if (PuppyAlreadyClicked) {
      this.setState({
        puppy: this.state.puppy.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPuppy: [],
        score: 0
      });
        alert("You lose. Play again?");

//If you click on an available puppy, your score is increased and cards reordered
    } else {
      this.setState(
        {
          puppy: this.state.puppy.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPuppy: this.state.clickedPuppy.concat(
            currentPuppy
          ),
          score: this.state.score + 1
        },
//If you get all 12 puppies correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              puppy: this.state.puppy.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPuppy: [],
              score: 0
            });
          }
        }
      );
    }
  };

//The order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.puppy.map(puppy => (
            <FriendCard
              imageClick={this.imageClick}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;