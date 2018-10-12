const expect = require('chai').expect
const should = require('chai').should
const UserModel = require('../../api/models/userModel')

describe('User', () => {
  it('test', (done) => {
    let sum = 2+2
    expect(sum).to.equal(4)
    done()
  })

  it('should be invalid if no email', (done) => {
    let usr = new UserModel({
      familyName: 'Kiernan',
      givenName: 'Lee'
    })
    usr.validate( err => {
      expect(err.errors.email.kind).to.equal('required')
      done()
    })
  })

  it('should be invalid if email not valid', (done) => {
    let usr = new UserModel({ email: 'lee@starlordco' })
    usr.validate( err => {
      expect(err.errors.email.name).to.equal('ValidatorError')
      expect(err.errors.email.message).to.equal('Please fill a valid email address')
      done()
    })
  })

  it('should be invalid if email exists')

  it('should force email to lowercase', (done) => {
    let usr = new UserModel({ email: 'LEE@STARLORD.CO' })
    expect(usr.email).to.equal('lee@starlord.co')
    done()
  })

  it('should be invalid if no givenName', (done) => {
    let usr = new UserModel({})
    usr.validate( err => {
      expect(err.errors.givenName.kind).to.equal('required')
      done()
    })
  })

  it('should be invalid if no familyName', (done) => {
    let usr = new UserModel({})
    usr.validate( err => {
      expect(err.errors.familyName.kind).to.equal('required')
      done()
    })
  })

  it('should be valid correct data given', (done) => {
    let usr = new UserModel({
      email: 'lee@starlord.co',
      givenName: 'Lee',
      familyName: 'Kiernan'
    })

    usr.validate( err => {
      // console.log(err)
      expect(err).to.be.null
      done()
    })
  })

  it('should be automatically set a created date')

})
