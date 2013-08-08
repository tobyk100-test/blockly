/**
 * Blockly Apps: Bird
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Blockly's Bird application.
 * @author tobyk100@gmail.com (Tobias Kahan)
 */
'use strict';

goog.provide('BirdGame');

goog.require('Bird');
goog.require('GridApp');

/**
 * @param {!Array.<!BirdGame.Skin>} skins
 * @param {!Array.<!BirdGame.Level>} levels
 * @constructor
 */
BirdGame = function(skins, levels) {
  GridApp.call(this, 600, 600);
  this.BIRD_WIDTH = 50;
  this.BIRD_HEIGHT = 50;
  this.STEP_SPEED = 100;
  this.svg = document.getElementById('svgBird');

  this.skins = skins;
  this.levels = levels;
  this.skin = skins[0];
  this.level = levels[0];

  this.bird = new Bird(0, 0, 50, this.svg, this.skin.sprite, 21);
  this.drawLevel();
  this.execute();
};
goog.inherits(BirdGame, GridApp);


/**
 * Draw the current level.
 */
BirdGame.prototype.drawLevel = function() {
  // First place background.
  this.drawBackground();
  // draw walls
  var level = this.level;
  var walls = level.walls;
  for (var i = 0; i < walls.length; i++) {
    var wall = walls[i];
    BirdGame.prototype.drawWall(wall);
  }
};

/**
 * @param {!BirdGame.Wall} wall
 * Draw given wall onto board.
 */
BirdGame.prototype.drawWall = function(wall)  {
  console.log('Draw wall: ' + wall);
};

/**
 * Reset the level to the start position and kill any pending animation tasks.
 * @param {boolean} first True if an opening animation is to be played.
 */
BirdGame.prototype.reset = function(first) {

};

/**
 * Click the run button. Start the program.
 */
BirdGame.prototype.runButtonClick = function() {

};

/**
 * Click the reset button. Reset the level.
 */
BirdGame.prototype.resetButtonClick = function() {

};

/**
 * Execute the user's code. Heaven help us...
 */
BirdGame.prototype.execute = function() {
  this.bird.move(90, 100);
  this.bird.move(0, 50);
};

/**
 * @param {number} x The x coordinate of a point to test.
 * @param {number} y The y coordinate of a point to test.
 * @param {number} radius The radius from x, y to test.
 * @param {!BirdGame.Wall} wall The wall to test.
 * @return {boolean} Returns true if the wall intersects the circle defined by
 *     x, y, and radius, false otherwise.
 *
 */
BirdGame.prototype.touchesWall = function(x, y, radius, wall) {
  return false;
};


/** Begin inner classes **/
/**
 * An internal class representing a skin.
 * @param {{sprite: ?string, tiles: ?string, marker: ?string, food: ?string,
 *     background: ?string, look: ?string}=} opt_skin A set of options to
 *     pass to Skin function. Descriptions of each parameter:
 *     sprite: A 1029x51 set of 21 avatar images.
 *     tiles: A 250x200 set of 20 map images.
 *     marker: A 20x34 goal image.
 *     food: A 20x34 food image.
 *     background: An 400x450 background image, false if no background image
 *     is desired.
 *     look: Colour of sonar-like look icon.
 * @override
 * @constructor
 */
BirdGame.Skin = function(opt_skin) {
  var opt_skin = opt_skin || {};
  // Call superclass constructor with defaults.
  var defaults = {
    background: opt_skin.background || '../maze/bg_panda.jpg',
    look: opt_skin.look || '#000'
  };
  GridApp.Skin.call(this, defaults);

  // Spring canopy, photo by Rupert Fleetingly, CC licensed for reuse.
  this.sprite = opt_skin.sprite || '../maze/panda.png';
  this.tiles = opt_skin.tiles || '../maze/tiles_panda.png';
  this.marker = opt_skin.marker || '../maze/marker.png';
  this.food = opt_skin.food || '../maze/marker.png';
};
goog.inherits(BirdGame.Skin, GridApp.Skin);

/**
 * A static wall constructor. Walls must be vertical or horizontal, i.e. either
 * start.x - end.x and/or start.y - end.y must equal 0. Note: end point is
 * inclusive.
 * @param {!{x: number, y: number}} start The coordinates of the wall
 *     startpoint.
 * @param {!{x: number, y: number}} end The coordinates of the wall endpoint.
 * @constructor
 */
BirdGame.Wall = function(start, end) {
  this.start = start;
  this.end = end;
};

/**
 * A static level constructor.
 * @param {number} width The width of the maze, in spaces not pixels.
 * @param {number} height Like width.
 * @param {!{x: number, y: number}} start The bird's start position.
 * @param {!{x: number, y: number}} end The bird's end position.
 * @param {!{x: number, y: number}} worm The worm's position.
 * @param {!Array.<!BirdGame.Wall>} walls The walls for this level.
 * @constructor
 */
BirdGame.Level = function(width, height, start, end, worm, walls) {
  this.width = width;
  this.height = height;
  this.start = start;
  this.end = end;
  this.worm = worm;
  this.walls = walls;
};
/** End inner classes **/
