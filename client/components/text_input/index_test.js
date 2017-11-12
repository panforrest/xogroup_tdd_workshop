import React from 'react';
import { shallow, mount } from 'enzyme';

import TextInput from './index';
// import { capitalized } from 'client/utils/capitalized'
import * as helpers from 'client/utils/capitalized' 
import * as api from 'client/utils/api' 

describe('<TextInput />', () => {
  beforeEach(function(){
  	this.render=function(placeholder){
      this.subject = mount(<TextInput myPlaceholder={placeholder} />)
    }
  })

  it('should render input element', function(){
    this.render()
  	expect(this.subject.find('input').length).toBe(1)
  })

  it('should render the placeholder text', function(){
  	this.render('abc')

    
  	expect(this.subject.find('input').prop('placeholder')).toBe('abc')
  })


  it('should render with a css class of red if more than 10 characters have been entered into it', function(){
  	this.render('12345678901')

  	expect(this.subject.find('input').prop('className')).toBe('red')
  })

  it('should not render with a css class of red if not more than 10 characters have been entered into it', function(){
  	this.render('123456789')
  	expect(this.subject.prop('className')).not.toBe('red')
  })

  it('should render a button', function(){
  	this.render()
  	expect(this.subject.find('button').length).toBe(1)
  })

  it('should render keyed in message when I click the button', function(){
  	this.render()
  	this.subject.find('input').simulate('change', {target:{value:'abc'}})
  	this.subject.find('button').simulate('click')
  	expect(this.subject.find('span').text()).toBe('ABC')
  })

  it('should call capitalized when we click the button', function(){
  	this.render()
  	spyOn(helpers, 'capitalized')
  	this.subject.find('button').simulate('click')
  	expect(helpers.capitalized).toHaveBeenCalled()
  })

  //test 1: make url is correct
  it('should hit the right url', function(){
  	spyOn(api, 'get').and.returnValue(Promise.resolve())
  	// window.api=api
  	// debugger

  	this.render()
  	expect(api.get).toHaveBeenCalledWith('https://swapi.co/api/people/')
  })


  //text 2: if url is correct, it should update the name of the first object  
  it('should render the name of the first object returned from the api', function(done){
  	spyOn(api, 'get').and.returnValue(Promise.resolve({
  		results: [{name: 'xyz'}]
  	}))
  	this.render();
    expect(this.subject.find('p').text()).toBe('xyz')
    done()
  })

});
