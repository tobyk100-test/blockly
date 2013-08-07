goog.require('Bird');

BirdGame = {};

/** Build an instance of a Bird object. */
BirdGame.init = function() {
  var bird = new Bird();
  bird.addSkin();  // Add the deault skin to bird.
  // Create Level 1
  // Create walls
  var wall1 = new Bird.Wall({x: 50, y: 20}, {x: 50, y: 70});
  var walls = [wall1];
  bird.addLevel(100, 100, {x: 2, y: 2}, {x: 80, y: 80}, {x: 20, y: 20}, walls);
  bird.startGame();
};

window.addEventListener('load', BirdGame.init);
