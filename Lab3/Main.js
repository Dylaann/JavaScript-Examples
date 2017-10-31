/**
 * main is the entry point for Javascript programs.
 *
 */

function main()
{
  initCanvas();
  draw();
}

/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 */
function initCanvas() {
  var canvas = document.createElement("canvas");
  canvas.id = 'mycanvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

///Doesnt move the browser window when arrows are pressed
  window.addEventListener("keydown", function(e) {
    // Space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

}

/**
 * Helper function that clamps value between min and max and returns value.
 * Example: clamp(10, 1, 3) will return 3
 * @param {Integer} value integer value to be clamped.
 * @param {Integer} min lower range value.
 * @param {Integer} max upper range value.
* @return {Integer} min if value is less than min, max if max is less than value, otherwise value.
 */
function clamp(value, min, max) {
    if (max < min) {
        var temp = min;
        min = max;
        max = temp;
    }
    return Math.max(min, Math.min(value, max));
}

/**
 * Helper function that returns a string of the form 'rgb(r,g,b)' where
 * r,g and b are numeric values.
 * @param {Number} r assumed numeric value for red.
 * @param {Number} g assumed numeric value for green.
 * @param {Number} b assumed numeric value for blue.
* @return {String} a string of the form 'rgb(r,g,b)' where r,g and b are integers clamped between 0 and 255.
 */
function rgb(r, g, b) {
    return 'rgb(' + clamp(Math.round(r), 100, 255) + ', ' + clamp(Math.round(g), 100, 255) + ', ' + clamp(Math.round(b), 100, 255) + ')';
}

/**
* Draws the player square on the canvas and waits for input.
* @param {Number} r assumed numeric value for red.
* @param {Number} g assumed numeric value for green.
* @param {Number} b assumed numeric value for blue.
* @param {Array} col holder for the three colour values.
* @param {Square} playerSquare creates a square object.
*/
function draw() {

  var r = 255;
  var g = 0;
  var b = 0;

  var col = [r, g, b];

  ///Creates a square object
  playerSquare = new Square(100, 800, 50, 50, col);

  playerSquare.Draw();

  //this listens for keydown events, activates in Square class when pressed
  document.addEventListener("keydown", keyDownHandler);

}

/**
* Handles input, clears the canvas, moves the square and re-draws it.
* @param {document} canvas gets the element by id.
* @param {canvas} square  used for clearing the canvas.
* @param {Square} playerSquare moves the squares corresponding to the input.
*/
function keyDownHandler (e)
{
  var canvas = document.getElementById('mycanvas');
  var square = canvas.getContext('2d');
  square.clearRect(0,0, canvas.width, canvas.height);

	//code triggered when UP arrow is pressed
  //moves the squares
	if(e.keyCode === 38)
  {
    playerSquare.y -= 10;
  }
  else if(e.keyCode === 40)
  {
    playerSquare.y += 10;
  }
  else if(e.keyCode === 37)
  {
    playerSquare.x -= 10;
  }
  else if(e.keyCode === 39)
  {
    playerSquare.x += 10;
  }

//re-draws the square
  playerSquare.Draw()
}
