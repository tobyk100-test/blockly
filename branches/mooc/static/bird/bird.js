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
goog.require('goog.math');

goog.provide('Bird');

/**
 * Creates a Bird character in this BirdGame.
 * @param {number} startX The bird's initial location.
 * @param {number} startY The bird's initial location.
 * @param {number} radius The bird's radius, used for calculating contact.
 * @param {!DOMElement} svg The svg element in which to place game elements.
 * @param {string} sprite Pathname of sprite image.
 * @param {number} spriteImages The number of evenly spaced images in sprite.
 * @constructor
 */
Bird = function(startX, startY, radius, svg, sprite, spriteImages) {
  this.x = startX;
  this.y = startY;
  this.radius = radius;
  this.svg = svg;
  //TODO(tobyk100) abstract out height, width, numIcons.
  this.icon = new Bird.Icon(svg, sprite, 49, 51, 21);
};

/**
 * Displays the Bird at the given coordinates faceing the given direction.
 * @param {number} x
 * @param {number} y
 * @param {number} direction The direction Bird is facing.
 */
Bird.prototype.display = function(x, y, direction) {
  var icon = this.icon;
  var spriteIndex = this.getSpriteIndex(direction);
  icon.display(x, y, spriteIndex);
};

/**
 * @param {number} direction The direction (in degrees) that Bird is facing.
 * @return {number} The index into the sprite which corresponds most closely
 *     to the direction.
 */
Bird.prototype.getSpriteIndex = function(direction) {
  return 3;
};

/**
 * Moves bird in the given direction by the given amount. This function does
 * not check the legality of the move. Bird faithfully updates its coordinates
 * and animates a move.
 * @param {number} direction The direction in degrees to move.
 * @param {number} length The length to move.
 * @return {{x: number, y: number}} Bird's new coordinates.
 */
Bird.prototype.move = function(direction, length) {
  // calculate new coordinates
  var directionRadians = goog.math.toRadians(direction);
  var oldX = this.x,
      oldY = this.y,
      deltaX = Math.cos(directionRadians) * length,
      deltaY = Math.sin(directionRadians) * length,
      newX = oldX + deltaX,
      newY = oldY + deltaY;
  this.x = newX;
  this.y = newY;
  this.animateMove({x: oldX, y: oldY}, {x: newX, y: newY}, 100);
  return {x: newX, y: newY};
};

/**
 * Animates a bird move from start to end.
 * @param {x: number, y: number} start The bird's start coordinates.
 * @param {x: number, y: number} end The bird's end coordinates.
 * @param {number} stepSpeed The speed at which to animate the move.
 */
Bird.prototype.animateMove = function(start, end, stepSpeed) {
  // Loop from start to end displaying the icon as we go.
  // Determine x and y step sizes
  // Move 1 unit along the line from start to end.
  //
  // Use similar triangles to find stepX and stepY, which are the legs of a
  // right triangle with hypotenuse 1.
  var dx = end.x - start.x,
      dy = end.y - start.y,
      dz = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)),
      stepX = dx / dz,
      stepY = dy / dz;
  // At this point stepX and stepY are absolute.
  if (dx < 0 ) {
    stepX = stepX * -1;
  }
  if (dy < 0) {
    stepY = stepY * -1;
  }
  var curX = start.x,
      curY = start.y;
  while (dx > 0 || dy > 0) {
    curX += stepX;
    curY += stepY;
    dx -= stepX;
    dy -= stepY;
  }

  this.display(end.x, end.y, 0);
};

/** Begin inner classes **/

/**
 * @param {!DOMElement} svg The svg element in which to place game objects.
 * @param {string} sprite Path to the Bird's sprite.
 * @param {number} iconWidth The width of a single image in the sprite.
 * @param {number} iconHeight The height of a single image in the sprite.
 * @param {number} numIcons The number of icons in the sprite.
 * @constructor
 */
Bird.Icon = function(svg, sprite, iconWidth, iconHeight, numIcons) {
  // Create dom element corresponding to sprite.
  var el = document.createElementNS(Blockly.SVG_NS, 'image');
  el.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', sprite);

  // Set up initial instance variables.
  this.el = el;
  this.iconWidth = iconWidth;
  this.numIcons = numIcons;

  el.setAttribute('height', iconHeight);
  el.setAttribute('width', iconWidth * numIcons);

  // Create icon (character sprite)
  var iconClip = document.createElementNS(Blockly.SVG_NS, 'clipPath');
  this.iconClip = iconClip;
  var iconClipId = 'iconClipPath';
  iconClip.setAttribute('id', iconClipId);

  // Create clip rectangle to display proper image from sprite.
  var clipRect = document.createElementNS(Blockly.SVG_NS, 'rect');
  this.clipRect = clipRect;
  clipRect.setAttribute('width', iconWidth);
  clipRect.setAttribute('height', iconHeight);
  iconClip.appendChild(clipRect);

  el.setAttribute('clip-path', 'url(#' + iconClipId + ')');
  svg.appendChild(iconClip);
  svg.appendChild(el);
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} index The index of the desired image in the sprite.
 * Display the image corresponding to the index into the sprite at coordinates
 * (x, y).
 */
Bird.Icon.prototype.display = function(x, y, index) {
  // Move this.clipRect to be centered on x, y.
  var clipRect = this.clipRect;
  var el = this.el;
  clipRect.setAttribute('x', x);
  clipRect.setAttribute('y', y);
  // Shift this.el to proper place.
  el.setAttribute('x', x - this.iconWidth * index);
  el.setAttribute('y', y);
};
/** End inner classes **/
