/**
 * Blockly Demo: Turtle Graphics
 *
 * Copyright 2013 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Sample answers for Turtle levels.  Used for hints and marking.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Sample solutions for each level.
 * To create an answer, just solve the level in Blockly, then paste the
 * resulting JavaScript here, moving any functions to the beginning of
 * this function.
 */
Turtle.answer = function() {
  function colour_random() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
  }
  switch (Turtle.level) {
    case 1:
      // Line.
      Turtle.moveForward(100);
      break;
    case 2:
      // Square.
      Turtle.moveForward(100);
      Turtle.turnRight(90);
      Turtle.moveForward(100);
      Turtle.turnRight(90);
      Turtle.moveForward(100);
      Turtle.turnRight(90);
      Turtle.moveForward(100);
      break;
    case 3:
      // Use repeat to draw a square.
      for (var count = 0; count < 4; count++) {
        Turtle.moveForward(100);
        Turtle.turnRight(90);
      }
      break;
    case 4:
      // Red square.
      Turtle.penColour('ff0000');  // red
      for (var count = 0; count < 4; count++) {
        Turtle.moveForward(100);
        Turtle.turnRight(90);
      }
      break;
    case 5:
      // Blue square.
      // TODO: Allow a range of shades of blue.
      Turtle.penColour('0000ff');  // blue
      for (var count = 0; count < 4; count++) {
        Turtle.moveForward(100);
        Turtle.turnRight(90);
      }
      break;
    case 6:
      // Equilateral triangle.
      for (var count = 0; count < 3; count++) {
        Turtle.moveForward(100);
        Turtle.turnRight(120);
      }
      break;
    case 7:
      // Arrow.
      for (var count = 0; count < 3; count++) {
        Turtle.moveForward(100);
        Turtle.turnRight(120);
      }
      Turtle.moveForward(50);
      Turtle.turnLeft(90);
      Turtle.moveForward(100);
      break;
    case 8:
      // House.
      for (var count = 0; count < 4; count++) {
        Turtle.moveForward(75);
        Turtle.turnRight(90);
      }
      Turtle.moveForward(75);
      Turtle.turnRight(30);
      Turtle.moveForward(75);
      Turtle.turnRight(120);
      Turtle.moveForward(75);
      break;
    case 9:
      // Pinwheel.
      for (var count2 = 0; count2 < 36; count2++) {
        for (var count = 0; count < 4; count++) {
          Turtle.moveForward(100);
          Turtle.turnRight(90);
        }
        Turtle.turnRight(10);
      }
      break;
    case 10:
      // Colourful pinwheel.
      for (var count2 = 0; count2 < 36; count2++) {
        Turtle.penColour(colour_random());
        for (var count = 0; count < 4; count++) {
          Turtle.moveForward(100);
          Turtle.turnRight(90);
        }
        Turtle.turnRight(10);
      }
      break;
  }
};

/**
 * Validate whether the user's answer is correct.
 * @param {number} pixelErrors Number of pixels that are wrong.
 * @return {boolean} True if the level is solved, false otherwise.
 */
Turtle.isCorrect = function(pixelErrors) {
  console.log('Pixel errors: ' + pixelErrors);
  switch (Turtle.level) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return pixelErrors < 100;
    default:
      return false;
  }
};
