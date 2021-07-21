import React, { Component } from "react";
import "./WordForm.css";

class WordForm extends Component {

  UserInput() {
    let output = []

    for (let i = 0; i < this.props.words.length; i++) {
      let word = this.props.words[i]
      output.push (
        <div><input onChange={event => this.props.onInputChange(word.key, event.target.value, i)} type='text' key={word.key} placeholder={word.label}></input></div>
      )
    }
    return output
  }

  render() {
    console.log(this.props.words);
    return (
      <div>
        { this.UserInput() }
      </div>
    );
  }
}

export default WordForm;
