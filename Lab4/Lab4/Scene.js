/**
 * Scene class
 * @class
 * @classdesc This scene class displays to the canvas.
 */
class Scene{
  /**
   * Constructor function
   * @constructor Constructor.
   * @param {string} title takes in the string which will be displayed as the title for the scene.
   * @param {integer} x value for the x co-ordinate of the title.
   * @param {integer} y value for the y co-ordinate of the title.
   * @param {String} colour String for a refernce to a colour.
   */
  constructor(title, x, y, colour)
  {
    this.title = title;
    this.x = x;
    this.y = y;
    this.colour = colour;
  }

  /**
   * function that is called when the scene is started.
   * @function start
   */
  start()
  {
    console.log("Scene Starts");
  }

  /**
   * function that is called when the scene has ended.
   * @function stop
   */
  stop()
  {
    console.log("Scene Ends")
  }

  /**
   * function that draws the scene on the canvas.
   * @function render
   */
  render()
  {
    var canvas = document.getElementById('mycanvas');
    var square = canvas.getContext('2d');
    square.clearRect(0,0, canvas.width, canvas.height);

    var ctx = document.getElementById("mycanvas").getContext("2d");
    this.changeBackground(this.colour);
    ctx.font = '48px serif';
    ctx.fillText(this.title, this.x, this.y);
    ctx.strokeText(this.title, this.x, this.y);
  }

  /**
   * function that draws the scene on the canvas.
   * @function getTitle
   * function to return the title
   */
  getTitle()
  {
    return this.title;
  }

  /**
   * function that changes the background Colour.
   * @function changeBackground
   * @param {String} color A string used as reference to a colour.
   */
  changeBackground(color) {
   document.body.style.background = color;
}
}

/**
 * Title Scene class
 * @class
 * @classdesc This class inherits from the scene class.
 */
class TitleScene extends Scene
{
  constructor()
  {
    super("Title Scene");
    this.title = "Title Scene";
    this.x = 400;
    this.y = 300;
    this.colour = "White";
  }

}

/**
 * Menu Scene class
 * @class
 * @classdesc This class inherits from the scene class.
 */
class MenuScene extends Scene
{
  constructor()
  {
    super("Menu Scene");
    this.title = "Menu Scene";
    this.play = "Play";
    this.quit = "Quit";
    this.x = 400;
    this.y = 300;
    this.colour = "Magenta";
  }

  /**
   * function that changes the background Colour.
   * @function render
   * Override function to render with a different colour and font.
   */
  render()
  {
    var canvas = document.getElementById('mycanvas');
    var square = canvas.getContext('2d');
    square.clearRect(0,0, canvas.width, canvas.height);

    var ctx = document.getElementById("mycanvas").getContext("2d");
    this.changeBackground(this.colour);
    ctx.font = '60px Arial';
    ctx.fillText(this.title, this.x, this.y);
    ctx.strokeText(this.title, this.x, this.y);
    ctx.fillText(this.play, this.x, this.y + 100);
    ctx.strokeText(this.play, this.x, this.y + 100);
    ctx.fillText(this.quit, this.x, this.y + 200);
    ctx.strokeText(this.quit, this.x, this.y + 200);
  }
}
