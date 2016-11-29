/* eslint-env mocha */
import borderRadius from '../src/border-radius'

describe('comapact', () => {
  describe('border-radius length', () => {
    it('should compact same values as one', () => {
      borderRadius({
        'border-top-left-radius': '100%',
        'border-top-right-radius': '100%',
        'border-bottom-right-radius': '100%',
        'border-bottom-left-radius': '100%'
      }).should.eql({
        'border-radius': '100%'
      })
    })

    it('should compact mirrored values', () => {
      borderRadius({
        'border-top-left-radius': '10px',
        'border-top-right-radius': '2em',
        'border-bottom-right-radius': '10px',
        'border-bottom-left-radius': '2em'
      }).should.eql({
        'border-radius': '10px 2em'
      })
      borderRadius({
        'border-top-left-radius': '10px',
        'border-top-right-radius': '2em',
        'border-bottom-right-radius': '15px',
        'border-bottom-left-radius': '2em'
      }).should.eql({
        'border-radius': '10px 2em 15px'
      })
    })

    it('should fill missed values', () => {
      borderRadius({
        'border-top-left-radius': '10px'
      }).should.eql({
        'border-radius': '10px 0 0'
      })
      borderRadius({
        'border-top-left-radius': '10px',
        'border-top-right-radius': '2em',
        'border-bottom-left-radius': '2em'
      }).should.eql({
        'border-radius': '10px 2em 0'
      })
      borderRadius({
        'border-top-right-radius': '2em',
        'border-bottom-right-radius': '2em'
      }).should.eql({
        'border-radius': '0 2em 2em 0'
      })
    })
  })

  describe('border-radius length and percentage', () => {
    it('should accept space and no-space in separator', () => {
      borderRadius({
        'border-top-left-radius': '100%/40px',
        'border-top-right-radius': '100% /40px',
        'border-bottom-right-radius': '100% / 40px',
        'border-bottom-left-radius': '100%/ 40px'
      }).should.eql({
        'border-radius': '100% / 40px'
      })
    })

    it('should compact same values as one', () => {
      borderRadius({
        'border-top-left-radius': '100% / 40px',
        'border-top-right-radius': '100% / 40px',
        'border-bottom-right-radius': '100% / 40px',
        'border-bottom-left-radius': '100% / 40px'
      }).should.eql({
        'border-radius': '100% / 40px'
      })
    })

    it('should compact mirrored values', () => {
      borderRadius({
        'border-top-left-radius': '1px/20px',
        'border-top-right-radius': '2px/10px',
        'border-bottom-right-radius': '3px/20px',
        'border-bottom-left-radius': '4px/10px'
      }).should.eql({
        'border-radius': '1px 2px 3px 4px / 20px 10px'
      })
      borderRadius({
        'border-top-left-radius': '1px/20px',
        'border-top-right-radius': '2px/10px',
        'border-bottom-right-radius': '3px/30px',
        'border-bottom-left-radius': '4px/10px'
      }).should.eql({
        'border-radius': '1px 2px 3px 4px / 20px 10px 30px'
      })
    })

    it('should fill missed values', () => {
      borderRadius({
        'border-top-left-radius': '1px/20px',
        'border-top-right-radius': '2px',
        'border-bottom-right-radius': '3px',
        'border-bottom-left-radius': '4px/10px'
      }).should.eql({
        'border-radius': '1px 2px 3px 4px / 20px 2px 3px 10px'
      })
    })
  })
})
