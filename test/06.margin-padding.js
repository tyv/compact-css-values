/* eslint-env mocha */
import {margin, padding} from '../src/margin-padding'

describe('compact', () => {
  describe('padding', () => {
    it('should compact and join pairs', () => {
      padding({
        'padding-top': '15px',
        'padding-right': '10px',
        'padding-bottom': '20px',
        'padding-left': '10px'
      }).should.eql({
        padding: '15px 10px 20px'
      })
    })
    it('should filter not relevant props', () => {
      padding({
        'padding-top': '1px',
        'padding-right': '2px',
        'padding-bottom': '3px',
        'padding-left': '4px',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        padding: '1px 2px 3px 4px'
      })
    })
  })
  describe('margin', () => {
    it('should compact and join pairs', () => {
      margin({
        'margin-top': '15px',
        'margin-right': '10px',
        'margin-bottom': '20px',
        'margin-left': '10px'
      }).should.eql({
        margin: '15px 10px 20px'
      })
    })
    it('should filter not relevant props', () => {
      margin({
        'margin-top': '1px',
        'margin-right': '2px',
        'margin-bottom': '3px',
        'margin-left': '4px',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        margin: '1px 2px 3px 4px'
      })
    })
  })
})
