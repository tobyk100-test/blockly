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

goog.provide('Bird');

goog.require('GridApp');

/**
 * @constructor
 */
Bird = function() {
  GridApp.call(this, 100, 100, 4);
  this.MAX_LEVEL = 10;
  this.LEVEL = BlocklyApps.getNumberParamFromUrl('level', 1, this.MAX_LEVEL);
  this.BIRD_WIDTH = 50;
  this.BIRD_HEIGHT = 50;

  /**
   * @type {Array.<Bird.Level>}
   * @private
   */
  this.levels_ = [];
  /**
   * @type {Array.<Bird.Skin>}
   * @private
   */
  this.skins_ = [];
};
goog.inherits(Bird, GridApp);

/**
 * Starts a Bird game. This method draws the map, places the characters,
 * and should leave the page in a state that the user can play with.
 */
Bird.prototype.startGame = function() {
  this.SKIN = this.skins_[0];
  this.drawLevel();
};


/**
 * An internal class representing a skin.
 * @param {Object} opt_skin @see {Bird.prototype.addSkin}
 * @private
 * @constructor
 */
Bird.Skin_ = function(opt_skin) {
    // Spring canopy, photo by Rupert Fleetingly, CC licensed for reuse.
    this.sprite = opt_skin.sprite || 'media/panda.png';
    this.tiles = opt_skin.tiles || 'media/tiles_panda.png';
    this.marker = opt_skin.marker || 'meadia/marker.png';
    this.food = opt_skin.food || 'media/marker.png';
    this.background = opt_skin.background || 'media/bg_panda.jpg';
    this.look = opt_skin.look || '#000';
};

/**
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
 */
Bird.prototype.addSkin = function(opt_skin) {
  var skin = new Bird.Skin_(opt_skin || {});
  this.skins_.push(skin);
};

/**
 * A static wall constructor. Walls must be vertical or horizontal, i.e. either
 * start.x - end.x and/or start.y - end.y must equal 0.
 * @param {!{x: number, y: number}} start The coordinates of the wall
 *     startpoint.
 * @param {!{x: number, y: number}} end The coordinates of the wall endpoint.
 * @constructor
 */
Bird.Wall = function(start, end) {
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
 * @param {Array.<Bird.Wall>} walls The walls for this level.
 * @private
 * @constructor
 */
Bird.Level_ = function(width, height, start, end, worm, walls) {
  this.width = width;
  this.height = height;
  this.start = start;
  this.end = end;
  this.worm = worm;
  this.walls = walls;
};

/**
 * Add a level to Bird.
 * @param {number} width The width of the maze, in spaces not pixels.
 * @param {number} height Like width.
 * @param {!{x: number, y: number}} start The bird's start position.
 * @param {!{x: number, y: number}} end The bird's end position.
 * @param {!{x: number, y: number}} worm The worm's position.
 * @param {Array.<Bird.Wall>} walls The walls for this level.
 */
Bird.prototype.addLevel = function(width, height, start, end, worm, walls) {
  var level = new Bird.Level_(width, height, start, end, worm, walls);
  this.levels_.push(level);
};

/**
 * Draw the current level.
 */
Bird.prototype.drawLevel = function() {
  // First place background.
  this.drawBackground();
  // Iterate through walls, drawing each wall.
  var level = this.levels_[this.LEVEL - 1];  // this.LEVEL is not 0-based.
  // Draw bird.
  // Draw worm.
};

/**
 * Reset the level to the start position and kill any pending animation tasks.
 * @param {boolean} first True if an opening animation is to be played.
 */
Bird.prototype.reset = function(first) {

};

/**
 * Click the run button. Start the program.
 */
Bird.prototype.runButtonClick = function() {

};

/**
 * Click the reset button. Reset the level.
 */
Bird.prototype.resetButtonClick = function() {

};

/**
 * Execute the user's code. Heaven help us...
 */
Bird.prototype.execute = function() {

};
