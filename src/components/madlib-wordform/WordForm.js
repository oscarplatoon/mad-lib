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

  render() {
    return (
      <div>
        {this.inputForm()}
      </div>
    )
  }
}

export default WordForm
