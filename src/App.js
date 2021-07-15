import React, { Component } from 'react'
import './App.css'
import WordForm from './components/madlib-wordform/WordForm.js'
import Story from './components/madlib-story/Story.js'
import MadLibs from './madlibs/MadLibs.js'

class App extends Component {
    state = {
        madlibs: MadLibs,
        selectedMadLib: MadLibs[0],
        completed: false,
    }

    setAsComplete() {
        this.setState({ completed: true })
    }

    setAsIncomplete() {
        this.setState({ completed: false })
    }

    onWordInputChange = (key, value, index) => {
        const newState = {
            ...this.state  // basically same as 'madlibs: currentMadLibs, selectedMadLib: currentMadlib'
        }
        newState.selectedMadLib.words[index] = {
            ...newState.selectedMadLib.words[index],
            value: value  // adds user inputted value to newState
        }
        this.setState(newState)
    }
    render() {
        return (
            <div className="App">
                <h1>MADLIBS!</h1>
                <WordForm words={this.state.selectedMadLib.words} onInputChange={this.onWordInputChange} setAsComplete={this.setAsComplete.bind(this)} setAsIncomplete={this.setAsIncomplete.bind(this)} />
                {this.state.completed ? <Story text={this.state.selectedMadLib.getText()} /> : null}
            </div>
        )
    }
}

export default App
