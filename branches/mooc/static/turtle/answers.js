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
 * @fileoverview Sample answers for Turtle levels. Used for prompts and marking.
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
  // Helper functions.
  function setRandomColour() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    Turtle.penColour('#' + ('00000' + num.toString(16)).substr(-6));
  }
  function drawSquare(length) {
    for (var count = 0; count < 4; count++) {
      Turtle.moveForward(length);
      Turtle.turnRight(90);
    }
  }
  function drawTriangle(length) {
    for (var count = 0; count < 3; count++) {
      Turtle.moveForward(length);
      Turtle.turnRight(120);
    }
  }
  function drawRectangle(height, width) {
    for (var count = 0; count < 2; count++) {
      Turtle.moveForward(height);
      Turtle.turnRight(90);
      Turtle.moveForward(width);
      Turtle.turnRight(90);
    }
  }
  function drawNgon(length, sides) {
    for (var count = 0; count < sides; count++) {
      Turtle.moveForward(length);
      Turtle.turnRight(360 / sides);
    }
  }
  if (Turtle.PAGE == 1) {
    switch (Turtle.LEVEL) {
      case 1:
        // El.
        Turtle.moveForward(100);
        Turtle.turnRight(90);
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
        drawSquare(100);
        break;
      case 4:
        // Coloured square.
        Turtle.penColour('#00ff00');  // green
        drawSquare(100);
        break;
      case 5:
        // Equilateral triangle.
        drawTriangle(100);
        break;
      case 6:
        // Non-overlapping square and triangle.
        drawTriangle(100);
        Turtle.turnRight(180);
        drawSquare(100);
        break;
      case 7:
        // Sideways envelope.
        Turtle.penColour('#ff0000');  // red
        drawSquare(100);
        drawTriangle(100);
        break;
      case 8:
        // Envelope.
        Turtle.penColour('#ff0000');  // red
        drawSquare(100);
        Turtle.moveForward(100);
        Turtle.turnRight(90);
          drawTriangle(100);
        break;
      case 9:
        // Dashed line.
        Turtle.moveForward(50);
        Turtle.penUp();
        Turtle.moveForward(25);
        Turtle.penDown();
        Turtle.moveForward(50);
        break;
      case 10:
        // Separated squares.
        drawSquare(100);
        Turtle.penUp();
        Turtle.moveBackward(150);
        Turtle.penDown();
        drawSquare(100);
        break;
      case 11:
      case 12:
        // Spiky.
        for (var count = 0; count < 8; count++) {
          setRandomColour();
          Turtle.moveForward(100);
          Turtle.moveBackward(100);
          Turtle.turnRight(45);
        }
        break;
    }
  } else if (Turtle.PAGE == 2) {
    switch (Turtle.LEVEL) {
      case 1:
        // Review of using repeat to draw a square.  (Fall through to next case.)
      case 2:
        // Call the new "draw a square" block.
        drawSquare(100);
        break;
      case 3:
        // Three squares.
        for (var count = 0; count < 3; count++) {
          setRandomColour();
          drawSquare(100);
          Turtle.turnRight(120);
        }
        break;
      case 4:
        // Pinwheel.
        for (var count2 = 0; count2 < 36; count2++) {
          setRandomColour();
          drawSquare(100);
          Turtle.turnRight(10);
        }
        break;
      case 5:
        // Create and call "draw triangle".
        drawTriangle(100);
        break;
      case 6:
        // Draw a house.  (Fall through to next case.)
      case 7:
        // Create and call "draw house".
        drawSquare(100);
        Turtle.moveForward(100);
        Turtle.turnRight(30);
        drawTriangle(100);
        break;
      case 8:
        // Call parameterized "draw square" three times.
        drawSquare(50);
        drawSquare(100);
        drawSquare(150);
        break;
      case 9:
        // Parameterize "draw triangle" and call it twice.
        drawTriangle(50);
        drawTriangle(100);
        break;
      case 10:
        // Parameterize "draw house" and draw one with sides of 50.
        drawSquare(50);
        Turtle.moveForward(50);
        Turtle.turnRight(30);
        drawTriangle(50);
        break;
    }
  } else if (Turtle.PAGE == 3) {
    switch (Turtle.LEVEL) {
      case 1:  // Draw without using for-loop.  (Fall through to next case.)
      case 2:  // Given code, add random colours.  (Fall through to next case.)
      case 4:  // Re-create with for-loops from scratch.
        // Squares with sides of 50, 60, 70, 80, 90, and 100 pixels.
        for (var len = 50; len <= 100; len += 10) {
          drawSquare(len);
        }
        break;
      case 3:
        // Squares with sides of 10, 20, 30, 40, 50, 60, 70, 80, 90, and 100
        // pixels.
        for (var len = 10; len <= 100; len += 10) {
          drawSquare(len);
        }
        break;
      case 5:
        // Squares with sides of 10, 20, 30, 40, 50, 60, 70, 80, 90, and 100
        // pixels, with 36 degree turns between each.
        for (var len = 10; len <= 100; len += 10) {
          drawSquare(len);
          Turtle.turnRight(36);
        }
        break;
      case 6:
        // Mini-spiral.
        for (var len = 25; len <= 60; len += 5) {
          Turtle.moveForward(len);
          Turtle.turnRight(90);
        }
        break;
      case 7:
        // Hexagons.
        drawNgon(50, 6);
        drawNgon(75, 6);
        break;
      case 8:
        // Red octagon (stop sign).
        Turtle.penColour('#ff0000');  // red
        drawNgon(80, 8);
        break;
    }
  }
};

/**
 * Validate whether the user's answer is correct.
 * @param {number} pixelErrors Number of pixels that are wrong.
 * @return {boolean} True if the level is solved, false otherwise.
 */
Turtle.isCorrect = function(pixelErrors) {
  console.log('Pixel errors: ' + pixelErrors);
  return Turtle.LEVEL < Turtle.MAX_LEVEL && pixelErrors < 100;
};
