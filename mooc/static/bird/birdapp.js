goog.require('BirdGame');

goog.provide('BirdApp');

/** Build an instance of a Bird object. */
BirdApp.init = function() {
  var skin = new BirdGame.Skin();
  var wall1 = new BirdGame.Wall({x: 50, y: 20}, {x: 50, y: 70});
  var walls = [wall1];
  var level = new BirdGame.Level(100, 100, {x: 2, y: 2}, {x: 80, y: 80},
      {x: 20, y: 20}, walls);
  var bird = new BirdGame([skin], [level]);
};

window.addEventListener('load', BirdApp.init);
