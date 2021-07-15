import React, { Component } from 'react'
import './WordForm.css'

class WordForm extends Component {
    onInputChange(key, index, event) {
        this.props.onInputChange(key, event.target.value, index)

        let words = this.props.words;
        let allInputFieldsHaveValue = words.every(word => word.value)  // check if every 'word' has a value (that's been inputted by the user)
        if (allInputFieldsHaveValue) {
            this.props.setAsComplete();
        } else {
            this.props.setAsIncomplete();
        }
    }
    render() {
        let words = this.props.words;

        let textInputs = words.map((wordObject, index) => {
            return <input type='text' placeholder={wordObject.label} onChange={(event) => this.onInputChange(wordObject.key, index, event)} key={index} />
        })

        return (
            <div>
                {textInputs}
            </div>
        )
    }
}

export default WordForm
