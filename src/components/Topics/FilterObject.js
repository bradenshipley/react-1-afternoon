import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();
    //the given array by the project
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],

      userInput: "",
      filteredEmployees: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(prop) {
    //set up variables for method and create empty arr to push to
    var employees = this.state.employees;
    var filteredEmployees = [];
    //if our arr index has the prop we are searching for, push them to new arr
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }
    //set state of filteredEmployees using the arr we made
    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.employees, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterEmployees(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(
            this.state.filteredEmployees,
            null,
            10
          )}{" "}
        </span>
      </div>
    );
  }
}
