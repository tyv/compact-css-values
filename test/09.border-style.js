/* eslint-env mocha */
import borderStyle from '../src/border-style'

describe('compact', () => {
  describe('border-style', () => {
    it('should compact all values', () => {
      borderStyle({
        'border-top-style': 'dashed',
        'border-right-style': 'dotted',
        'border-bottom-style': 'double',
        'border-left-style': 'groove'
      }).should.eql({
        'border-style': 'dashed dotted double groove'
      })
    })
    it('should filter not relevant props', () => {
      borderStyle({
        'border-top-style': 'dashed',
        'border-right-style': 'dotted',
        'border-bottom-style': 'double',
        'border-left-style': 'groove',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        'border-style': 'dashed dotted double groove'
      })
    })
    it('should pair paired value and set default', () => {
      borderStyle({
        'border-top-style': 'dashed',
        'border-right-style': 'dotted',
        'border-left-style': 'dotted'
      }).should.eql({
        'border-style': 'dashed dotted none'
      })
    })
  })
})
