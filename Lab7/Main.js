/**
 * main is the entry point for Javascript programs.
 *
 */
function main()
{
  initCanvas();
  console.log(is_touch_device());
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

   canvas.addEventListener("touchstart", onTouchStart, false);
   canvas.addEventListener("touchmove", onTouchMove, false);
   canvas.addEventListener("touchend", onTouchEnd, false);
}
