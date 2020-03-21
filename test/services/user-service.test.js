require('module-alias/register')
const chai = require('chai')
const expect = chai.expect
const userService = require('@services/user-service')()
describe('user service tests', async () => {
    describe('register', async () => {
      it('should register user', async () => {
        // ARRANGE
        const name = "Bryan"
        const email = "ssasa@automatedtests.com.br"
        const creditCard = 12345678
        const expectedUser = {
          name,
          email,
          creditCard
        }
        // ACT
        const newUser = userService.register(name, email, creditCard)
      
        // ASSERT
        expect(newUser).to.be.an('object')
        expect(newUser).to.be.deep.equals(expectedUser)
      })
    })
})