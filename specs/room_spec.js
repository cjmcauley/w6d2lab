const assert = require('assert');
const Room = require('../room.js');

describe ('Room', function () {

let newroom;

beforeEach(function() {
  newroom = new Room(30);
});

it('should have an area', function() {
  const actual = newroom.area;
  assert.strictEqual(actual, 30);
});

it('should have the painted property', function() {
  const actual = newroom.painted;
  assert.strictEqual(actual, false);
});

});
