/* eslint-env mocha */
import background from '../src/background'

describe('compact', () => {
  describe('background common', () => {
    it('should compact one value', () => {
      background({
        'background-color': 'red'
      }).should.eql({
        background: 'red'
      })
    })

    it('should compact all values', () => {
      background({
        'background-image': 'linear-gradient(135deg, red, blue)',
        'background-position': '24px 50%',
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        'background-origin': 'content-box',
        'background-clip': 'padding-box',
        'background-attachment': 'fixed',
        'background-color': '#eee'
      }).should.eql({
        background: '#eee linear-gradient(135deg, red, blue) 24px 50% / contain content-box padding-box fixed no-repeat'
      })
    })
  })

  describe('background-clip and -origin', () => {
    it('should compact -origin and -clip', () => {
      background({
        'background-color': 'red',
        'background-origin': 'padding-box',
        'background-clip': 'content-box'
      }).should.eql({
        background: 'red padding-box content-box'
      })
    })

    it('should compact same -origin and -clip', () => {
      background({
        'background-color': 'red',
        'background-origin': 'padding-box',
        'background-clip': 'padding-box'
      }).should.eql({
        background: 'red padding-box'
      })
    })

    it('should set default -origin value when there is only -clip', () => {
      background({
        'background-color': 'red',
        'background-clip': 'content-box'
      }).should.eql({
        background: 'red padding-box content-box'
      })
    })

    it('should set default -clip value when there is only -origin', () => {
      background({
        'background-color': 'red',
        'background-origin': 'content-box'
      }).should.eql({
        background: 'red content-box border-box'
      })
    })
  })

  describe('background-size and -position', () => {
    it('should compact -size and -position', () => {
      background({
        'background-color': 'red',
        'background-position': 'top left',
        'background-size': '100px'
      }).should.eql({
        background: 'red top left / 100px'
      })
    })

    it('should set default -position value when there is only -size', () => {
      background({
        'background-color': 'red',
        'background-size': '100px'
      }).should.eql({
        background: 'red 0% 0% / 100px'
      })
    })
  })
})
