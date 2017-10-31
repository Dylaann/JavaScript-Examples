function Square(x, y, width, height, colour)
{
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = width;
  this.colour = rgb(colour[0], colour[1], colour[2]);

}

Square.prototype.draw = function()
{
  var canvas = document.getElementById('mycanvas');
  var square = canvas.getContext('2d');
  square.fillStyle = this.colour;
  square.fillRect(this.x, this.y, this.width, this.height);
}
