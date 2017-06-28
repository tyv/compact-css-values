/* eslint-env mocha */
import {
  borderTop,
  borderRight,
  borderBottom,
  borderLeft
} from '../src/border-side'

describe('compact', () => {
  describe('border-[top, right, bottom, left]', () => {
    it('should works with border-top', () => {
      borderTop({
        'border-top-width': '15px',
        'border-top-style': 'solid',
        'border-top-color': 'red',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        'border-top': '15px solid red'
      })
    })
    it('should works with border-right', () => {
      borderRight({
        'border-right-width': '15px',
        'border-right-style': 'solid',
        'border-right-color': 'red',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        'border-right': '15px solid red'
      })
    })
    it('should works with border-bottom', () => {
      borderBottom({
        'border-bottom-width': '15px',
        'border-bottom-style': 'solid',
        'border-bottom-color': 'red',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        'border-bottom': '15px solid red'
      })
    })
    it('should works with border-left', () => {
      borderLeft({
        'border-left-width': '15px',
        'border-left-style': 'solid',
        'border-left-color': 'red',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        'border-left': '15px solid red'
      })
    })
  })
})
