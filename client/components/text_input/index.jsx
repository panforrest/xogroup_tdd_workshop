import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  	  myValue: this.props.myPlaceholder,
  	  myText:''
  	}
  }

  updateText(event){
  	console.log('updateText: '+' == '+event.target.value)

  	this.setState({
  	  myValue: event.target.value
  	})


  }

  submitText(event){
    console.log('submitText: '+this.state.myValue)
    this.setState({
      myText: this.state.myValue 
    })
  }

  render() {
   

  	return(
      <div>
        <input onChange={this.updateText.bind(this)} 
           placeholder={this.props.myPlaceholder} 
           className={(this.state.myValue && this.state.myValue.length>10) ? "red" : ""} />
        <button onClick={this.submitText.bind(this)}> submit </button> <br />

        <span>
          {this.state.myText}
        </span>  
      </div>


  	)
  }
}

TextInput.propTypes = {
   myPlaceholder: PropTypes.string
}




