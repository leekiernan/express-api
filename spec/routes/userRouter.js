var request = require('supertest')

describe('loading express', () => {
  var server

  beforeEach(() => server = require('../server'))
  afterEach(() => server.close())


  // it('responds to /users', async (done) => {
  //   request(server).get('/users')
  //   .expect(200, done)
  // })

  // it('responds to /users/:id if user exists', async (done) => {
  //   request(server).get('/users')
  //   .expect(200, done)
  // })

  // it('responds with error for /users/:id if user doesn\'t exist', async (done) => {
  //   request(server).get('/users')
  //   .expect(200, done)
  // })

  // it('responds to /users', async (done) => {
  //   request(server).get('/users')
  //   .expect(200, done)
  // })

  // it('responds to /users', async (done) => {
  //   request(server).get('/users')
  //   .expect(200, done)
  // })

  // it('responds to /users', async (done) => {
  //   request(server).get('/users')
  //   .expect(200, done)
  // })

  // it('responds to /users', async (done) => {
  //   request(server).get('/users')
  //   .expect(200, done)
  // })

  // it('responds to /users', async (done) => {
  //   request(server).get('/users')
  //   .expect(200, done)
  // })

})
