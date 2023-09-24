const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Structs', () => {

  describe('Example 1', () => {

    it('demonstrates read / write / update behavior of structs', async () => {
      const Contract = await ethers.getContractFactory('Structs1')
      let contract = await Contract.deploy()

      await contract.add1('A Tale of Two Cities', 'Charles Dickens')
      await contract.add2('Les Miserables', 'Victor Hugo')
      await contract.add3('The Hobbit', 'J.R.R. Tolkien')

      let result = await contract.get(0);
      expect(result[0]).to.equal('A Tale of Two Cities')
      expect(result[1]).to.equal('Charles Dickens')
      expect(result[2]).to.equal(false)

      result = await contract.get(1);
      expect(result[0]).to.equal('Les Miserables')
      expect(result[1]).to.equal('Victor Hugo')
      expect(result[2]).to.equal(false)

      result = await contract.get(2);
      expect(result[0]).to.equal('The Hobbit')
      expect(result[1]).to.equal('J.R.R. Tolkien')
      expect(result[2]).to.equal(false)

      // Complete a book
      await contract.complete(0)
      result = await contract.get(0);
      expect(result[2]).to.equal(true)
    })
  })

})
