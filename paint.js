const Paint = function(litres) {
  this.litres = litres;
  this.stockFull = true;
};

Paint.prototype.emptyMe = function() {
  this.stockFull = false;
};




module.exports = Paint;
