import  React, { Component } from 'react'
import './WordForm.css'


class WordForm extends Component {
  
    createAllInputs() {
    let outputArr = []

    for(let i=0; i<this.props.words.length; i++) {
      let word = this.props.words[i]
      outputArr.push(
        <div> 
          <input key={word.key} type='text' 
          onChange={(event) => this.props.onInputChange(word.key, event.currentTarget.value, i)} placeholder={word.label} />
          <br/>
        </div>
      )
    }
    return outputArr
  }
  
    render(){
      return (
        <div>
          {this.createAllInputs()}
        </div>
      )
    }
}

export default WordForm
