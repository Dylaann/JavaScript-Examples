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
   */
  constructor(title, x, y)
  {
    this.title = title;
    this.x = x;
    this.y = y;
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
    var ctx = document.getElementById("mycanvas").getContext("2d");
    ctx.font = '48px serif';
    ctx.fillText(this.title, this.x, this.y);
    ctx.strokeText(this.title, this.x, this.y);
  }

  getTitle()
  {
    return this.title;
  }

}
