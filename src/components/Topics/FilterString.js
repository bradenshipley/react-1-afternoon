import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredNames: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  beginFilter(userInput) {
    let names = this.state.names;
    let filteredNames = [];
    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredNames.push(userInput);
      }
    }
    this.setState({ filteredNames: filteredNames });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Unfiltered String:{JSON.stringify(this.state.names, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={this.beginFilter(this.state.userInput)}
        >
          Submit
        </button>
        <span className="resultsBox filterString">
          Filtered String:{JSON.stringify(this.state.filteredNames, null, 10)}
        </span>
      </div>
    );
  }
}
