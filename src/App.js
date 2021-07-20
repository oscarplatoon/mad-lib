import React, { Component } from 'react'
import './App.css'
import WordForm from './components/madlib-wordform/WordForm.js'
import Story from './components/madlib-story/Story.js'
import MadLibs from './madlibs/MadLibs.js'

class App extends Component {
  state = {
    madlibs: MadLibs,
    // This should be random
    selectedMadLib: MadLibs[0],
  }

  checkComplete() {
    for(let i = 0; i<this.state.selectedMadLib.words.length; i++) {
      let word=this.state.selectedMadLib.words[i]
      if(!word.hasOwnProperty('value')) {
        return false
      }
    }
    return true
  }

  // Select List Builder:
    selectMadLib = () => {
      return this.state.madlibs.map((madLib, i) => {
      return (<option key={i} value={i}>{madLib['title']}</option>)
    })
  }
    dropDownChange=(event) => {
      this.setState({
        selectedMadLib: MadLibs[event.target.value]
      })
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

  render() {
    return (
      <div className="App">
        <div>
          THIS SHOULD BE THE SELECT LIST
          <select onChange={this.dropDownChange}>{ this.selectMadLib() }
          </select>
          <h1>MADLIBS!</h1>
          <WordForm words={this.state.selectedMadLib.words} onInputChange={this.onWordInputChange} />
        </div>
        <div>
          { this.checkComplete() &&
            <Story text={this.state.selectedMadLib.getText()} />}
        </div>
      </div>
    )
  }
}

export default App
