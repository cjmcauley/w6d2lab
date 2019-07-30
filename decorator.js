const Decorator = function() {
  this.stock=0;
};

Decorator.prototype.addStock = function(num) {
  this.stock += num;
};

Decorator.prototype.stockInLitres = function() {
  return this.stock * 5;
};

Decorator.prototype.enoughForRoom = function(room) {
  if (this.stockInLitres() >= room.area) {
    return true;
  }
  else {return false;
  };
};

Decorator.prototype.paintRoom = function(room) {
  if (this.enoughForRoom(room) === true) {
    room.painted = true;
  };
};


module.exports = Decorator;
