const chai = require('chai').assert
const { charsInString, Position, stringsInString } = require('../src/index')

describe('🧪 Chars in Str tests 🧪', () => {
  describe('charsInString()', () => {
    it('should return false', () => {
      chai.isFalse(charsInString([], ''))
    })

    it('should return false', () => {
      chai.isFalse(charsInString([], 'test'))
    })

    it('should return false', () => {
      chai.isFalse(charsInString([':', ','], ''))
    })

    it('should return true', () => {
      chai.isTrue(charsInString([':', ','], 'hello:world'))
    })

    it('should return true', () => {
      chai.isTrue(charsInString([':', ',', '^'], 'helloworld^'))
    })

    it('should return true', () => {
      chai.isTrue(charsInString([':', ',', '^', '*'], 'helloworld*', Position.End))
    })

    it('should return true', () => {
      chai.isTrue(charsInString([':', ',', '^'], '^helloworld', Position.Start))
    })

    it('should return false', () => {
      chai.isFalse(charsInString([':', ',', '^'], 'helloworld'))
    })

    it('should return true', () => {
      chai.isTrue(charsInString(['heowm'], 'helloworld'))
    })

    it('should return true', () => {
      chai.isTrue(charsInString([':', ',', '^'], ':helloworld', Position.Start))
    })

    it('should return false', () => {
      chai.isFalse(charsInString([':', ',', '^'], 'hell:oworld', Position.Start))
    })

    it('should return true', () => {
      chai.isTrue(charsInString([':', ',', '^'], 'helloworld^', Position.End))
    })

    it('should return false', () => {
      chai.isFalse(charsInString([':', ',', '^'], 'helloworld^a', Position.End))
    })

    it('should return false', () => {
      chai.isFalse(charsInString(['a', 'b', 'c'], 'helloworld'))
    })

    it('should return true', () => {
      chai.isTrue(charsInString(['a', 'b', 'o'], 'helloworld'))
    })

    it('should return false', () => {
      chai.isFalse(charsInString(['a', 'H', 'O'], 'helloworld'))
    })

    it('should return true', () => {
      chai.isTrue(charsInString(['a', 'H', 'o'], 'helloworld', Position.Any, false))
    })
  })

  describe('stringsInString()', () => {
    it('should return false', () => {
      chai.isFalse(stringsInString(['abc', 'owom', 'wqp'], 'helloworld'))
    })

    it('should return true', () => {
      chai.isTrue(stringsInString(['abc', 'owom', 'wqp', 'world'], 'helloworld'))
    })

    it('should return true', () => {
      chai.isTrue(stringsInString(['abc', 'owom', 'wqp', 'world', 'hel'], 'helloworld', Position.Start))
    })

    it('should return true', () => {
      chai.isTrue(stringsInString(['abc', 'owom', 'wqp', 'world', 'HEL'], 'helloworld', Position.Start, false))
    })

    it('should return false', () => {
      chai.isFalse(stringsInString(['abc', 'owom', 'wqp', 'world'], 'helloworld', Position.Start))
    })

    it('should return false', () => {
      chai.isFalse(stringsInString(['abc', 'owom', 'wqp', 'world', 'amk'], 'helloworld akm', Position.End))
    })

    it('should return true', () => {
      chai.isTrue(stringsInString(['abc', 'owom', 'wqp', 'world', 'wio'], 'helloworld wio', Position.End))
    })
  })
})
