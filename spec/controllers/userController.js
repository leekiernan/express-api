const expect = require('chai').expect
const should = require('chai').should
const usrController = require('../../api/controllers/userController')

describe('User Controller', () => {
  it('should respond to REST endpoints', (done) => {
    let mockRes = { send: () => null, json: () => null }

    expect(usrController.list(null, mockRes)).to.exist
    expect(usrController.read(null, mockRes)).to.exist
    expect(usrController.update(null, mockRes)).to.exist
    expect(usrController.delete(null, mockRes)).to.exist
    expect(usrController.create(null, mockRes)).to.exist
    done()
  })


  describe('list', () => {
    it('should list all Users')
  })

  describe('read', () => {
    it('should read User if ID is valid')
    it('should return error if User ID is invalid')
  })

  describe('update', () => {
    it('should update matching User')
    it('should return error if User ID is invalid')
  })

  describe('delete', () => {
    it('should delete User')
    it('should return error if User ID is invalid')
  })

  describe('create', () => {
    it('should create User')
    it('should return error if User cannot be created')
  })

})
