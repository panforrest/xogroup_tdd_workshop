// window.fetch = undefined
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { capitalized } from 'client/utils/capitalized'
// import 'whatwg-fetch'
import { get } from 'client/utils/api'
 
export default class TextInput extends Component {
  

  constructor(props){
  	super(props)
  	this.state = {
  	  myValue: this.props.myPlaceholder,
  	  myText:'',
  	  myResult: ''
  	}
  }

  componentDidMount(){

	var url = 'https://swapi.co/api/people/';
	get(url)
	  .then(function(response) {
	  // console.log(response.json())
	  // debugger
      return response.json() 
	})
	  // .then((json) => {
	  // 	console.log(json)
	  // 	const myResult = json.results[0].name
	  // 	this.setState({
	  // 		myResult: myResult 
	  // 	})
	  // })
      .then(this.printName.bind(this))

  }

  printName(json){
  	console.log(json)
  	const myResult = json.results[0].name
  	this.setState({
  		myResult: myResult 
  	})  	

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
      myText: capitalized(this.state.myValue) 
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
        <p>
           {this.state.myResult}
        </p> 
      </div>


  	)
  }
}

TextInput.propTypes = {
   myPlaceholder: PropTypes.string
}




