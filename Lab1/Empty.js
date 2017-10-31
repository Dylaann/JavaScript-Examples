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

function rbg(r, b, g) {
    return 'rgb(' + clamp(Math.round(r), 0, 255) + ',' + clamp(Math.round(g), 0, 255) + ',' + clamp(Math.round(b), 0, 255) + ')';
}

function draw() {

  for(i = 0; i < 200; i++)
  {
    var r = Math.floor((Math.random() * 255) + 0);
    var g = Math.floor((Math.random() * 255) + 0);
    var b = Math.floor((Math.random() * 255) + 0);

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = rbg(r, b, g);
    console.log(rbg(r, b, g));
    ctx.fillRect(Math.floor((Math.random() * innerWidth) + 0), Math.floor((Math.random() * innerHeight) + 0), 200, 200);
  }

}
