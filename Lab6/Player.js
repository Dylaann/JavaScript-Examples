/**
 * Player class
 * @class
 * @classdesc This is the class that will create the player.
 */
class Player{

  /**
   * Player Default Constructor function
   * @constructor Player
   */
  constructor()
  {
  this.x = 100;
  this.y = 500;
  this.width = 100;
  this.height = 100;
  this.colour = "Red";

  }

  /**
   * Player Update function
   * @function update
   */
  update()
  {
    console.log("Updating Player");
  }

  /**
   * Player Draw function
   * @function update
   */
  draw()
  {
    console.log("Drawing Player");
    var canvas = document.getElementById('mycanvas');
    var square = canvas.getContext('2d');
    square.fillStyle = this.colour;
    square.fillRect(this.x, this.y, this.width, this.height);
  }

  /**
  * Checks for collision detection
  * @function checkCollision
  */
  checkCollision(e)
  {
    var collides = false;

    if (this.x < e.x + e.width &&
     this.x + this.width > e.x &&
     this.y < e.y + e.height &&
     this.height + this.y > e.y)
     {
      collides = true;
      }
      else
      {
        collides = false;
      }

      return collides;
  }


}
