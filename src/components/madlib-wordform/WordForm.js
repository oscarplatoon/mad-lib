import React, { Component } from 'react'
import './WordForm.css'

class WordForm extends Component {
  onInputChange(key, index, event) {
    this.props.onInputChange(key, event.currentTarget.value, index)

  }
  render() {
    let createdTextInput = this.props.words.map((wordData, Index) => {
      return <input onChange = {(event)=> this.props.onInputChange(wordData.key, event.currentTarget.value, Index)} type="text" key={Index} placeholder= {wordData.label}></input>
    })


    return (
      <div>
        {createdTextInput}
      </div>
    )
  }
}

export default WordForm
