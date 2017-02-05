/* eslint-env mocha */
import common from '../src/common'

describe('compact', () => {
  describe('common rule', () => {
    it('should compact list of props with given name', () => {
      common('name', {
        propName1: 'value1',
        propName2: 'value2',
        propName3: 'value3'
      }).should.eql({
        name: 'value1 value2 value3'
      })
    })
  })
})
