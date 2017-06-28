/* eslint-env mocha */
import borderWidth from '../src/border-width'

describe('compact', () => {
  describe('border-width', () => {
    it('should compact all values', () => {
      borderWidth({
        'border-top-width': '1px',
        'border-right-width': '2px',
        'border-bottom-width': '3px',
        'border-left-width': '4px'
      }).should.eql({
        'border-width': '1px 2px 3px 4px'
      })
    })
    it('should filter not relevant props', () => {
      borderWidth({
        'border-top-width': '1px',
        'border-right-width': '2px',
        'border-bottom-width': '3px',
        'border-left-width': '4px',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        'border-width': '1px 2px 3px 4px'
      })
    })
    it('should pair paired value and set default', () => {
      borderWidth({
        'border-top-width': '1px',
        'border-right-width': '2px',
        'border-left-width': '2px'
      }).should.eql({
        'border-width': '1px 2px medium'
      })
    })
  })
})
