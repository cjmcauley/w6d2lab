const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){
  let paint;

  beforeEach(function(){
    paint = new Paint(5);
  });
  it('should have content', function(){
    const actual = paint.litres;
    assert.strictEqual(actual, 5);
  });

  it('should have stockFull property', function(){
    const actual = paint.stockFull;
    assert.strictEqual(actual, true);
  });

  it('should be able to empty itself', function(){
    paint.emptyMe();
    const actual = paint.stockFull;
    assert.strictEqual(actual, false);
  });

});
