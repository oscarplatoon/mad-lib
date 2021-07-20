import React, { Component } from 'react'
import './App.css'
import WordForm from './components/madlib-wordform/WordForm.js'
import Story from './components/madlib-story/Story.js'
import MadLibs from './madlibs/MadLibs.js'

class App extends Component {
  state = {
    madlibs: MadLibs,
    selectedMadLib: MadLibs[0]
  }
  allWordValue = () => {
    let word = this.state.selectedMadLib.words;
    for (let i = 0; i < word.length; i++) {
      if (!word[i].hasOwnProperty("value")) {
        return false;
      }
    }
    return true;
  }
  onWordInputChange = (key, value, index) => {
    const newState = {
      ...this.state
    }
    newState.selectedMadLib.words[index] = {
      ...newState.selectedMadLib.words[index],
      value: value
    }
    this.setState(newState)
  }
  selectMadLib = (event) => {
    const newState = {
      ...this.state
    }
    newState.selectedMadLib = {
      ...newState.selectedMadLib =this.state.madlibs[event.currentTarget.value]
    }
    this.setState(newState)
  }
  displayDropDown = () => {
    return this.state.madlibs.map((data, index)=> {
      return (<option key={index} value= {index}> {data['title']}</option>)
    })
  }
  render() {
    return (
      <div className="App">
        <h1>MADLIBS!</h1>
        <select onChange={this.selectMadLib}>{this.displayDropDown()}</select>
        <WordForm words={this.state.selectedMadLib.words} onInputChange={this.onWordInputChange} />
        {this.allWordValue() && <Story text={this.state.selectedMadLib.getText()} />}
      </div>
    )
  }
}

export default App
