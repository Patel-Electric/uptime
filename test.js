var expect = require('chai').expect;
var msg = require('./app.js');

 
// async function result (){
    
//     console.log(value);
// }

// result();


describe('Alive', function() {

  context('results', function() {
    it('should return alive', async function() {
        var value = await msg('www.shubhamworks.com');
      expect(value).to.have.string('host www.shubhamworks.com is dead')
      
    })
  })
 
})