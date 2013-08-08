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
    // Make sure at least one component is at least 0x60, to prevent
    // too light of colours.
    if (num & 0xff < 0x60 && num & 0xff00 < 0x6000
        && num & 0xff0000 < 0x600000) {
      num += 0x80;  // Arbitrarily add some blue.
    }
    Turtle.penColour('#' + ('00000' + num.toString(16)).substr(-6));
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
        // Envelope.
        Turtle.penColour('#ff0000');  // red
        drawSquare(100);
        Turtle.moveForward(100);
        Turtle.turnRight(90);
        drawTriangle(100);
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
  } else if (Turtle.PAGE == 2) {
    switch (Turtle.LEVEL) {
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
        // Squares with sides of 100, 90, ..., 10 pixels,
        // moving backward 10 pixels before each.
        for (var len = 100; len >= 10; len -= 10) {
          setRandomVisibleColour();
          Turtle.moveBackward(10);
          drawSquare(len);
        }
        break;
      case 8:
        // Mini-spiral.
        for (var len = 25; len <= 60; len += 5) {
          Turtle.moveForward(len);
          Turtle.turnRight(90);
        }
        break;
      case 9:
        // Snowman.
        for (var diameter = 70; diameter >= 30; diameter -= 20) {
          // This is a special version of circle drawing that puts the
          // circle in front of the turtle, leaving the turtle facing
          // its original direction on the far side of the circle.
          var step = diameter / 115.0;
          Turtle.turnLeft(90);
          for (var i = 0; i < 540; i++) {
            Turtle.moveForward(step);
            Turtle.turnRight(1);
          }
          Turtle.turnLeft(90);
        }
        break;
    }
  } else if (Turtle.PAGE == 3) {
    switch (Turtle.LEVEL) {
      case 1:
        // Draw a triangle.
        drawTriangle(100);
        break;
      case 2:
        // Draw a house using "draw a square" and "draw a triangle".
        // Fall through to next case...
      case 3:
        // Create a "draw a house" procedure.
        drawSquare(100);
        Turtle.moveForward(100);
        Turtle.turnRight(30);
        drawTriangle(100);
        break;
      case 4:
        // Call parameterized "draw a triangle" twice with different colours.
        setRandomVisibleColour();
        drawTriangle(50);
        setRandomVisibleColour();
        drawTriangle(100);
        break;
      case 5:
        // Add a parameter to the "draw a house" procedure.
        drawSquare(50);
        Turtle.moveForward(50);
        Turtle.turnRight(30);
        drawTriangle(50);
        break;
      case 6:
        // Hexagons.
        setRandomVisibleColour();
        drawNgon(50, 6);
        setRandomVisibleColour();
        drawNgon(75, 6);
        break;
      case 7:
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
