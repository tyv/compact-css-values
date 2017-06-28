/* eslint-env mocha */
import borderWidth from '../src/border-width'

describe('compact', () => {
  describe('border-width', () => {
    it('should compact all values', () => {
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
