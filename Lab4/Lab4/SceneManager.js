/**
 * SceneManager class
 * @class
 * @classdesc This sceneManager class will have a reference to the current scene.
 */
class SceneManager{
  /**
   * Default Constructor function
   * @constructor Default Constructor, doesnt take in any parameters.
   */
  constructor()
  {
    this.currentScene = null;
    this.index = -1;
    this.scenes = {};
    this.titles = [];
  }


/**
* This function adds a scene to the list.
* @function addScene
* @param {Scene} scene object for a scene to be added to the list.
*/
  addScene(scene)
  {
    this.scenes[scene.getTitle()] = scene;
    this.titles.push(scene.getTitle());
  }

  /**
  * This function goes to a specific scene
  * @function goToScene
  * @param {String} title Takes in the string that corresponds to a scene,
  * Stops the current scene, switches to the new scene and plays.
  */
  goToScene(title)
  {
    if(this.currentScene != null)
    {
    this.stopCurrentScene();
    }
    this.currentScene = this.scenes[title];

    for(var i = 0; i < this.titles.length; i++)
    {
      if(title === this.titles[i])
      {
        this.index = i;
      }
    }

    this.currentScene.start();

  }

  /**
  * This function goes to a specific scene
  * @function goToNextScene
  * Goes to the next scene in the list.
  */
  goToNextScene()
  {
    if(this.scenes[this.titles[this.index + 1]] != null)
    {
      this.stopCurrentScene();
      this.currentScene = this.scenes[this.titles[this.index + 1]];
      this.index += 1;
      this.currentScene.start();
    }
    else
    {
     this.stopCurrentScene();
     this.currentScene = this.scenes[this.titles[0]];
     this.index = 0;
     this.currentScene.start();
    }
  }

  /**
  * This function stops the current scene from playing
  * @function stopCurrentScene
  * If the current scene is null nothing happens.
  */
  stopCurrentScene()
  {
    if(this.currentScene != null)
    {
      this.currentScene.stop();
    }
  }

  /**
  * This function renders the scene
  * @function render
  * If the current scene is null nothing will be rendered.
  */
  render()
  {
    if(this.currentScene != null)
    {
    this.currentScene.render();
    }
  }

}
