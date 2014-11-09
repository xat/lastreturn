var expect = require('expect.js');
var lastreturn = require('./lastreturn');

describe('lastreturn', function() {

  it('should pass in the last value', function() {
    var c = 0;
    var add = lastreturn(function(val, last) {
      if (val !== last) c++;
      return val;
    });
    add(1);
    expect(c).to.be.equal(1);
    add(1);
    expect(c).to.be.equal(1);
    add(2);
    expect(c).to.be.equal(2);
  });

  it('should respect the start value', function() {
    var c = 0;
    var add = lastreturn(function(val, last) {
      if (val !== last) c++;
      return val;
    }, 1);
    add(1);
    expect(c).to.be.equal(0);
  });

  it('should pass in some context', function() {
    var whatever = lastreturn(function(val, last) {
      expect(this.foo).to.be.equal('bar');
    }, 1, { foo: 'bar' });
    whatever();
  });

});
