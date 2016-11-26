import 'babel-polyfill'
import chai from 'chai'
global.expect = chai.expect
global.log = (s) => {
    console.log('====')
    console.log(s)
    console.log('====')
}
chai.should()

