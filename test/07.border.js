/* eslint-env mocha */
import border from '../src/border'

describe('compact', () => {
  describe('border', () => {
    it('should compact all values', () => {
      border({
        'border-width': '1px',
        'border-style': 'solid',
        'border-color': 'red'
      }).should.eql({
        border: '1px solid red'
      })
    })
    it('should filter not relevant props', () => {
      border({
        'border-width': '1px',
        'border-style': 'solid',
        'border-color': 'red',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        border: '1px solid red'
      })
    })
    it('should compact with omitted values', () => {
      border({
        'border-style': 'solid',
        'border-color': 'red'
      }).should.eql({
        border: 'solid red'
      })
      border({
        'border-color': 'red'
      }).should.eql({
        border: 'red'
      })
    })
  })
})
