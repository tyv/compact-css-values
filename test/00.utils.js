/* eslint-env mocha */
import {expect} from 'chai'
import {fourPairedValues, joinDimensionPairs} from '../src/utils'

describe('utils', () => {
  describe('joinDimensionPairs', () => {
    it('should compact same value to one', () => {
      joinDimensionPairs(['0', '0', '0', '0']).should.eql('0')
    })
    it('should compact pair values', () => {
      joinDimensionPairs(['10', '20', '10', '20']).should.eql('10 20')
    })
    it('should compact one pair values', () => {
      joinDimensionPairs(['10', '20', '15', '20']).should.eql('10 20 15')
    })
    it('should throw if given array isn\'t 4 items length', () => {
      expect(() => {
        joinDimensionPairs(['0', '0', '0'])
      }).to.throw('`values.length` should have 4 items length and contains only non-empty strings')
    })
    it('should throw if there is non- or empty- string values', () => {
      expect(() => {
        joinDimensionPairs(['0', '0', '0', 0])
      }).to.throw('`values.length` should have 4 items length and contains only non-empty strings')
      expect(() => {
        joinDimensionPairs(['0', '0', '0', undefined])
      }).to.throw('`values.length` should have 4 items length and contains only non-empty strings')
      expect(() => {
        joinDimensionPairs(['0', '0', '0', ''])
      }).to.throw('`values.length` should have 4 items length and contains only non-empty strings')
    })
  })

  describe('fourPairedValues', () => {
    it('should compact same value to one', () => {
      fourPairedValues({
        'prop-left': '0',
        'prop-top': '0',
        'prop-right': '0',
        'prop-bottom': '0'
      }).should.eql('0')
    })
    it('should use default value if omitted', () => {
      fourPairedValues({
        'prop-right': '15px',
        'prop-bottom': '20px',
        'prop-left': '10px'
      }, '0').should.eql('0 15px 20px 10px')
    })
    it('should join equal pairs', () => {
      fourPairedValues({
        'prop-top': '15px',
        'prop-right': '10px',
        'prop-bottom': '15px',
        'prop-left': '10px'
      }).should.eql('15px 10px')
    })
    it('should join one equal pair', () => {
      fourPairedValues({
        'prop-top': '15px',
        'prop-right': '10px',
        'prop-bottom': '20px',
        'prop-left': '10px'
      }).should.eql('15px 10px 20px')
    })
  })
})
