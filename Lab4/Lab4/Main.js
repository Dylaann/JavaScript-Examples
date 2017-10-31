/**
 * main is the entry point for Javascript programs.
 *
 */
function main()
{
  initCanvas();
  var game = new Game();
  game.init();
  var scenes = new SceneManager();
  var titleScene = new TitleScene();
  var menuScene = new MenuScene();
  scenes.addScene(titleScene);
  scenes.addScene(menuScene)
  scenes.addScene(new Scene("Play Screen", 400, 400, "Blue"));
  scenes.addScene(new Scene("Game Over Screen", 400, 400, "Pink"));
  scenes.goToScene("Title Scene");
  scenes.render();

  document.addEventListener("click", clickHandler.bind(null, scenes));
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

/**
 * Function to take in key input and react.
 * @param {SceneManger} scenes Reference to the games Scene Manager.
 */
function clickHandler (scenes, e)
{
     scenes.goToNextScene();
     scenes.render();
}
