/* eslint-env mocha */
import {margin, padding} from '../src/margin-padding'

describe('compact', () => {
  describe('margin and padding', () => {
    it('should works with padding', () => {
      padding({
        'padding-top': '15px',
        'padding-right': '10px',
        'padding-bottom': '20px',
        'padding-left': '10px'
      }).should.eql({
        padding: '15px 10px 20px'
      })
    })
    it('should works with margin', () => {
      margin({
        'margin-top': '15px',
        'margin-right': '20px',
        'margin-bottom': '30px',
        'margin-left': '40px'
      }).should.eql({
        margin: '15px 20px 30px 40px'
      })
    })
  })
})
