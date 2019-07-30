const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');


describe('Decorator', function() {

  let newdec;

  beforeEach(function() {
    newdec = new Decorator;
  });


  it('should start with empty paint stock', function() {
    const actual = newdec.stock;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a can of paint to the paint stock', function(){
    newdec.addStock(5);
    const actual = newdec.stock;
    assert.strictEqual(actual, 5);
  });

it('should be able to calculate total paint in stock', function(){
  newdec.addStock(5);
  const actual = newdec.stockInLitres();
  assert.strictEqual(actual, 25);
});

it('should be able to calculate whethere there is enough paint for a room', function(){
  newdec.addStock(5);
  newroom = new Room(30);
  const actual = newdec.enoughForRoom(newroom);
  assert.strictEqual(actual, false);
});

it('should be able to calculate whethere there is enough paint for a room', function(){
  newdec.addStock(10);
  newroom = new Room(30);
  const actual = newdec.enoughForRoom(newroom);
  assert.strictEqual(actual, true);
});

it('should be able to paint the room if there is enough paint', function(){
  newdec.addStock(10);
  newroom = new Room(30);
  newdec.paintRoom(newroom);
  const actual = newroom.painted;
  assert.strictEqual(actual, true);
});


});
