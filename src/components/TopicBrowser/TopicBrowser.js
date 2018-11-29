import React, { Component } from "react";
//these are my topics
import EvenAndOdd from "../Topics/EvenAndOdd";
import Sum from "../Topics/Sum";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";

export default class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    );
  }
}
