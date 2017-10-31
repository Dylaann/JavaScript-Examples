/**
 * Game class
 * @class
 * @classdesc This game class initialises the game.
 */
class Game{

  /**
   * Game Default Constructor function
   * @constructor Default Constructor
   * doesnt take in any parameters.
   */
  constructor()
  {
    this.player = new Player();
    this.goal = new Goal();
    this.winColour = "Blue";
    this.winBool = false;
  }

  /**
   * Game Initialising function
   * @function init
   */
  init()
  {
    console.log("Initialising Game World");
    document.addEventListener("keydown", this.keyDownHandler);
  }

  /**
   * Game Update function
   * @function update
   */
  update()
  {
    gameNs.game.player.update();
    gameNs.game.draw();

    if(gameNs.game.player.checkCollision(gameNs.game.goal))
    {
      gameNs.game.collisionResponse();
    }
    console.log("Updating Game World");
    window.requestAnimationFrame(gameNs.game.update);
  }

  /**
   * Game Draw function
   * @function update
   */
  draw()
  {
    var canvas = document.getElementById('mycanvas');
    var square = canvas.getContext('2d');
    square.clearRect(0,0, canvas.width, canvas.height);

    console.log("Drawing Game World");
    this.player.draw();
    this.goal.draw();

    if(this.winBool)
    {
      this.winMessage();
    }
  }

  /**
* Handles key input.
* @function keyDownHandler
*/
  keyDownHandler(e)
	{
    var canvas = document.getElementById('mycanvas');

  if(e.keyCode === 38)
  {
    if(gameNs.game.player.y > 0)
    {
    gameNs.game.player.y -= 10;
    }
  }

  if(e.keyCode === 40)
  {
    if(gameNs.game.player.y < canvas.height - gameNs.game.player.height)
    {
    gameNs.game.player.y += 10;
    }
  }

  if(e.keyCode === 37)
  {
    if(gameNs.game.player.x > 0)
    {
    gameNs.game.player.x -= 10;
    }
  }

  if(e.keyCode === 39)
  {
    if(gameNs.game.player.x < canvas.width - gameNs.game.player.width)
    {
    gameNs.game.player.x += 10;
    }
  }
}

/**
* Outputs a message to the screen when game is complete.
* @function winMessage
*/
winMessage()
{
  var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');

  ctx.save();
  ctx.fillStyle = this.winColour;
  ctx.font = "bold 40pt Arial"
  ctx.textBaseLine = "top";
  ctx.fillText("You win!", 500, 100);
  ctx.restore();
}



/**
* Response if a collision takes place.
* @function collisionResponse
*/
collisionResponse()
{
  if(gameNs.game.goal.alive = true)
  {
    gameNs.game.goal.alive = false;
    this.winBool = true;
  }

}


}
