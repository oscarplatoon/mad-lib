import React, { Component } from 'react'
import './WordForm.css'

class WordForm extends Component {
  onInputChange(key, index, event) {
    this.props.onInputChange(key, event.currentTarget.value, index)
  }
  
  inputForm = () => {
    let output = []
    for(let i = 0; i < this.props.words.length; i++){
      let word = this.props.words[i]
      output.push(<div><input key={word.label} type='text' onChange= {event => this.props.onInputChange(word.label, event.currentTarget.value, i)} placeholder={word.label}></input></div>)
    }
    return output
  }

  gameList= () => {
    let gameOption = []
    for(let i = 0; i< madlibs.length; i++){
      gameOption.push(<select><option value={madlibs[i].title}></option></select>)

    }
    return gameOption
  }

  render() {
    return (
      <div>
        {this.inputForm()}
        {this.gameList()}
      </div>
    )
  }
}

export default WordForm
