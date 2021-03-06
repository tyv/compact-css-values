/* eslint-env mocha */
import listStyle from '../src/list-style'

describe('compact', () => {
  describe('list style', () => {
    it('should compact one value', () => {
      listStyle({
        'list-style-type': 'square'
      }).should.eql({
        'list-style': 'square'
      })
    })
    it('should compact two values', () => {
      listStyle({
        'list-style-type': 'square',
        'list-style-position': 'inside'
      }).should.eql({
        'list-style': 'square inside'
      })
    })
    it('should compact all three values', () => {
      listStyle({
        'list-style-type': 'square',
        'list-style-position': 'inside',
        'list-style-url': 'url(\'//\')'
      }).should.eql({
        'list-style': 'square inside url(\'//\')'
      })
    })
    it('should filter not relevant props', () => {
      listStyle({
        'list-style-type': 'square',
        'list-style-position': 'inside',
        'list-style-url': 'url(\'//\')',
        'dummy-top-prop': 'dummy-value'
      }).should.eql({
        'list-style': 'square inside url(\'//\')'
      })
    })
  })
})
