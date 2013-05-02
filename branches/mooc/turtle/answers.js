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
 * resulting JavaScript here.
 */
Turtle.answer = function() {
  switch (Turtle.level) {
    case 1:
      Turtle.moveForward(100);
      Turtle.turnRight(90);
      Turtle.moveForward(100);
      Turtle.turnRight(90);
      Turtle.moveForward(100);
      Turtle.turnRight(90);
      Turtle.moveForward(100);
      break;
    case 2:
      for (var count = 0; count < 4; count++) {
        Turtle.moveForward(100);
        Turtle.turnRight(90);
      }
      break;
    case 3:
      break;
  }
};
