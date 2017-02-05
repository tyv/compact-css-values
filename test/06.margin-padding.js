/* eslint-env mocha */
import {fourPairedValues, margin, padding} from '../src/margin-padding'

describe('compact', () => {
  describe('margin and padding', () => {
    it('should compact same value to one', () => {
      fourPairedValues({
        'margin-left': '0',
        'margin-top': '0',
        'margin-right': '0',
        'margin-bottom': '0'
      }).should.eql('0')
    })
    it('should use default value if omitted', () => {
      fourPairedValues({
        'padding-right': '15px',
        'padding-bottom': '20px',
        'padding-left': '10px'
      }).should.eql('0 15px 20px 10px')
    })
    it('should join equal pairs', () => {
      fourPairedValues({
        'padding-top': '15px',
        'padding-right': '10px',
        'padding-bottom': '15px',
        'padding-left': '10px'
      }).should.eql('15px 10px')
    })
    it('should join one equal pair', () => {
      fourPairedValues({
        'padding-top': '15px',
        'padding-right': '10px',
        'padding-bottom': '20px',
        'padding-left': '10px'
      }).should.eql('15px 10px 20px')
    })
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
