// Global Variable
  var gameNs = {};

/**
 * main is the entry point for Javascript programs.
 *
 */
function main()
{
  initCanvas();
  const game = new Game();
  gameNs.game = game;
  game.init();
  game.update();
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

  window.addEventListener("keydown", function(e) {
    // Space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
}
