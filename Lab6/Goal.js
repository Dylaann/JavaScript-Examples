/**
 * Goal class
 * @class
 * @classdesc This class is for the goal square.
 */
class Goal{

  /**
   * Goal Default Constructor function
   * @constructor Goal
   */
  constructor()
  {
  this.x = 800;
  this.y = 800;
  this.width = 100;
  this.height = 100;
  this.colour = "White";
  this.alive = true;
  }

  /**
   * Goal Update function
   * @function update
   */
  update()
  {
    if(this.alive)
    {
    console.log("Updating Goal");
    }
  }

  /**
   * Goal Draw function
   * @function update
   */
  draw()
  {
    if(this.alive)
    {
    console.log("Drawing Goal");
    var canvas = document.getElementById('mycanvas');
    var square = canvas.getContext('2d');
    square.strokeStyle = this.colour;
    square.strokeRect(this.x, this.y, this.width, this.height);
    }
  }

}
