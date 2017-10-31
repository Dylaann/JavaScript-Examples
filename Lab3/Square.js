/**
 * function to create a square object given the co-ordinates, size and colour
 * @param {Integer} x x position.
 * @param {Integer} y y position.
 * @param {Integer} width width of the square.
 * @param {Integer} height height of the square.
 * @param {Array} colour Array of three values for the colour of the square.
 */
function Square(x, y, width, height, colour)
{
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = width;
  this.colour = rgb(colour[0], colour[1], colour[2]);

}

/**
 * Draw function for the square class.
 */
Square.prototype.Draw = function()
{
  var canvas = document.getElementById('mycanvas');
  var square = canvas.getContext('2d');
  square.fillStyle = this.colour;
  square.fillRect(this.x, this.y, this.width, this.height);
}
