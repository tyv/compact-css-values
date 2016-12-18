/* eslint-env mocha */
import {expect} from 'chai'
import font from '../src/font'

describe('compact', () => {
  describe('font', () => {
    it('should compact all values', () => {
      font({
        'font-style': 'italic',
        'font-variant': 'small-caps',
        'font-weight': '400',
        'font-stretch': 'condensed',
        'font-size': '24px',
        'line-height': '1.2',
        'font-family': '"Times New Roman", sans-serif'
      }).should.eql({
        font: 'italic small-caps 400 condensed 24px/1.2 "Times New Roman", sans-serif'
      })
    })
    it('should compact minimum values', () => {
      font({
        'font-size': '24px',
        'font-family': '"Times New Roman", sans-serif'
      }).should.eql({
        font: '24px "Times New Roman", sans-serif'
      })
    })
    it('should set 100% font-size if omitted', () => {
      font({
        'font-family': '"Times New Roman", sans-serif'
      }).should.eql({
        font: '100% "Times New Roman", sans-serif'
      })
    })
    it('should throw if font-family is omitted', () => {
      expect(() => {
        font({
          'font-style': 'italic',
          'font-variant': 'small-caps',
          'font-weight': '400',
          'font-stretch': 'condensed',
          'font-size': '24px',
          'line-height': '1.2'
        })
      }).to.throw('`font-family` property shouldn\'t be omitted')
    })
  })
})
