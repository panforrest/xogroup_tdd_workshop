import {capitalized} from './capitalized'

describe('capitalized', function(){
	it('should capitalized a string', function(){
		const result = capitalized('abc')
		expect(result).toBe('ABC')
	})
})