import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './index';

describe('<TextInput />', () => {
  beforeEach(function(){
  	this.render=function(placeholder){
      this.subject = shallow(<TextInput myPlaceholder={placeholder} />)
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
  	this.subject.simulate('change', {target:{value:'abc'}})
  	this.subject.find('button').simulate('click')
  	expect(this.subject.find('span').text()).toBe('abc')
  })
});
