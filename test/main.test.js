const chai = require('chai').assert
const { charsInString } = require('../main')

describe('🧪 Chars in Str tests 🧪', () => {
  it('should return false', () => {
    chai.isFalse(charsInString([], ''))
  })

  it('should return true', () => {
    chai.isTrue(charsInString([], 'test'))
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

  it('should return false', () => {
    chai.isFalse(charsInString([':', ',', '^'], 'helloworld'))
  })
})
