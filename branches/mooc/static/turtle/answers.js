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
  function setRandomVisibleColour() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    // Make sure at least one component is below 0x80 and the rest
    // below 0xA0, to prevent too light of colours.
    num &= 0x9f7f9f;
    var colour = '#' + ('00000' + num.toString(16)).substr(-6);
    Turtle.penColour(colour);
  }
  function drawSquare(length, random_colour) {
    for (var count = 0; count < 4; count++) {
      if (random_colour) {
        setRandomVisibleColour();
      }
      Turtle.moveForward(length);
      Turtle.turnRight(90);
    }
  }
  function drawTriangle(length, random_colour) {
    for (var count = 0; count < 3; count++) {
      if (random_colour) {
        setRandomVisibleColour();
      }
      Turtle.moveForward(length);
      Turtle.turnRight(120);
    }
  }
  function drawSnowman(height) {
    Turtle.turnLeft(90);
    var distances = [height * .5, height * .3, height * .2];
    for (var i = 0; i < 6; i++) {
      var distance = distances[i < 3 ? i : 5 - i] / 57.5;
      for (var d = 0; d < 180; d += 2) {
        Turtle.moveForward(distance);
        Turtle.turnRight(2);
      }
      if (i != 2) {
        Turtle.turnRight(180);
      }
    }
    Turtle.turnLeft(90);
  }
  function drawHouse(length) {
    drawSquare(length);
    Turtle.moveForward(length);
    Turtle.turnRight(30);
    drawTriangle(length);
    Turtle.turnRight(60);
    Turtle.moveForward(length);
    Turtle.turnLeft(90);
    Turtle.moveBackward(length);
  }

  if (BlocklyApps.PAGE == 1) {
    switch (BlocklyApps.LEVEL) {
      case 1:
        // El.
        Turtle.moveForward(100);
        Turtle.turnRight(90);
        Turtle.moveForward(100);
        break;
      case 2:
        // Square.
        drawSquare(100, true);
        break;
      case 3:
        // Use repeat to draw a square.
        drawSquare(100, false);
        break;
      case 4:
        // Equilateral triangle.
        drawTriangle(100, true);
        break;
      case 5:
        // Sideways envelope.
        drawSquare(100);
        drawTriangle(100);
        break;
      case 6:
        // Triangle and square.
        drawTriangle(100);
        Turtle.turnRight(180);
        drawSquare(100);
        break;
      case 7:
        // Glasses.
        Turtle.penColour('#00cc00');  // blue
        Turtle.turnRight(90);
        drawSquare(100);
        Turtle.moveBackward(150);
        drawSquare(100);
        break;
      case 8:
        // Spiky.
        for (var count = 0; count < 8; count++) {
          setRandomVisibleColour();
          Turtle.moveForward(100);
          Turtle.moveBackward(100);
          Turtle.turnRight(45);
        }
        break;
      case 9:
        // Circle.
        for (var count = 0; count < 360; count++) {
          Turtle.moveForward(1);
          Turtle.turnRight(1);
        }
        break;
    }
  } else if (BlocklyApps.PAGE == 2) {
    switch (BlocklyApps.LEVEL) {
      case 1:
        // Single square in some color.
        setRandomVisibleColour();
        drawSquare(100);
        break;
      case 2:
        // Single green square.
        Turtle.penColour('#00ff00');  // green
        drawSquare(50);
        break;
      case 3:
        // Three squares, 120 degrees apart, in random colors.
        for (var count = 0; count < 3; count++) {
          setRandomVisibleColour();
          drawSquare(100);
          Turtle.turnRight(120);
        }
        break;
      case 4:
        // 36 squares, 10 degrees apart, in random colors.
        for (var count = 0; count < 36; count++) {
          setRandomVisibleColour();
          drawSquare(100);
          Turtle.turnRight(10);
        }
        break;
      case 5:  // Draw without using for-loop.  (Fall through to next case.)
      case 6:
        // Squares with sides of 50, 60, 70, 80, and 90 pixels.
        for (var len = 50; len <= 90; len += 10) {
          drawSquare(len);
        }
        break;
      case 7:
        // Mini-spiral.
        for (var len = 25; len <= 60; len += 5) {
          Turtle.moveForward(len);
          Turtle.turnRight(90);
        }
        break;
      case 8:
        // Same-height snowmen.
        for (var i = 0; i < 3; i++) {
          setRandomVisibleColour();
          drawSnowman(150);
          Turtle.turnRight(90);
          Turtle.jumpForward(100);
          Turtle.turnLeft(90);
        }
        break;
      case 9:
        // Different height snowmen.
        for (var height = 110; height >= 70; height -= 10) {
          setRandomVisibleColour();
          drawSnowman(height);
          Turtle.turnRight(90);
          Turtle.jumpForward(60);
          Turtle.turnLeft(90);
        }
        break;
    }
  } else if (BlocklyApps.PAGE == 3) {
    switch (BlocklyApps.LEVEL) {
      case 1:
        // Draw a square.
        drawSquare(100);
        break;
      case 2:
        // Draw a triangle.
        drawTriangle(100);
        break;
      case 3:
        drawTriangle(100);
        Turtle.moveForward(100);
        drawSquare(100);
        Turtle.moveForward(100);
        drawTriangle(100);
        break;
      case 4:
        // Draw a house using "draw a square" and "draw a triangle".
        drawHouse(100);
        break;
      case 5:
        // Draw a house using a function.
        drawHouse(100);
        break;
      case 6:
        setRandomVisibleColour();
        drawTriangle(100);
        Turtle.moveForward(100);
        setRandomVisibleColour();
        drawTriangle(200);
        break;
      case 7:
        // Add a parameter to the "draw a house" procedure.
        drawHouse(150);
        break;
      case 8:
        drawHouse(100);
        drawHouse(150);
        drawHouse(100);
        break;
      case 9:
        for (var count = 50; count <= 150; count += 50) {
          setRandomVisibleColour();
          drawHouse(count);
        }
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
  return BlocklyApps.LEVEL < BlocklyApps.MAX_LEVEL && pixelErrors < 100;
};
