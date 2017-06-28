/* eslint-env mocha */
import borderColor from '../src/border-color'

describe('compact', () => {
  describe('border-color', () => {
    it('should compact all values', () => {
      borderColor({
        'border-top-color': 'red',
        'border-right-color': 'green',
        'border-bottom-color': 'blue',
        'border-left-color': 'yellow'
      }).should.eql({
        'border-color': 'red green blue yellow'
      })
    })
    it('should filter not relevant props', () => {
      borderColor({
        'border-top-color': 'red',
        'border-right-color': 'green',
        'border-bottom-color': 'blue',
        'border-left-color': 'yellow',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        'border-color': 'red green blue yellow'
      })
    })
    it('should pair paired value and set default', () => {
      borderColor({
        'border-top-color': 'red',
        'border-right-color': 'rgba(255,255,255,0.1)',
        'border-left-color': 'rgba(255,255,255,0.1)'
      }).should.eql({
        'border-color': 'red rgba(255,255,255,0.1) currentcolor'
      })
    })
  })
})
