import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  assignEvenAndOdds(userInput) {
    //breaking up the arr by ,'s
    let numbers = userInput.split(",");
    //creating empty arrs to hold our values
    let evens = [];
    let odds = [];
    //looping through arr, assigning based on modulus
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        //parseInt makes an arr[i] into a number in base 10 here
        evens.push(parseInt(numbers[i], 10));
      } else odds.push(parseInt(numbers[i], 10));
    }
    //setting state after looping through the arr and dividing up
    this.setState({ evenArray: evens, oddArray: odds });
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            return this.assignEvenAndOdds(this.state.userInput);
          }}
        >
          Do ittt
        </button>
        <span className="resultsBox">
          Even:{JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odd:{JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
