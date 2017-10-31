/**
 * main is the entry point for Javascript programs.
 *
 */
function main()
{
    initCanvas();
    console.log("Hello world");
    draw();
}

function initCanvas() {
    var canvas = document.createElement("canvas");
    canvas.id = 'mycanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
}

function clamp(value, min, max) {
    if (max < min) {
        var temp = min;
        min = max;
        max = temp;
    }
    return Math.max(min, Math.min(value, max));
}

function rgb(r, g, b) {
    return 'rgb(' + clamp(Math.round(r), 0, 255) + ', ' + clamp(Math.round(g), 0, 255) + ', ' + clamp(Math.round(b), 0, 255) + ')';
}

function draw() {

var squares = [];

  for(i = 0; i < 200; i++)
  {
    var r = Math.floor((Math.random() * 255) + 110);
    var g = Math.floor((Math.random() * 255) + 110);
    var b = Math.floor((Math.random() * 255) + 110);

    var col = [r, g, b];

    var x = Math.floor((Math.random() * window.innerWidth - 100) + 1);
    var y = Math.floor((Math.random() * window.innerHeight - 100) + 1);
    var width = Math.floor((Math.random() * 100) + 50);
    var height = Math.floor((Math.random() * 100) + 50);

    squares.push(new Square(x, y, width, height, col));

    squares[i].draw();
  }

}
