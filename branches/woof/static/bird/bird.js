/**
 * Blockly Apps: Bird
 *
 * Copyright 2012 Google Inc.
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
 * @fileoverview JavaScript for Blockly's Bird application.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Bird = {};

// Supported languages.
BlocklyApps.LANGUAGES = {
  // Format: ['Language name', 'direction', 'XX_compressed.js']
  en: ['English', 'ltr', 'en_compressed.js']
};
BlocklyApps.LANG = BlocklyApps.getLang();

document.write('<script type="text/javascript" src="generated/' +
               BlocklyApps.LANG + '.js"></script>\n');

Bird.MAX_LEVEL = 10;
Bird.LEVEL = BlocklyApps.getNumberParamFromUrl('level', 1, Bird.MAX_LEVEL);

/**
 * Milliseconds between each animation frame.
 */
Bird.stepSpeed;

Bird.ICON_SIZE = 100;
Bird.MAP_SIZE = 400;

Bird.MAP = [
// Level 0.
 undefined,
// Level 1.
 {startX: 20,
  startY: 20,
  wormX: 50,
  wormY: 50,
  nestX: 80,
  nestY: 80,
  walls: [
    [100, 0, 60, 40],
    [0, 100, 40, 60]
  ]
  },
// Level 2.
// Level 3.
// Level 4.
// Level 5.
// Level 6.
// Level 7.
// Level 8.
// Level 9.
// Level 10.
][Bird.LEVEL];

/**
 * PIDs of animation tasks currently executing.
 */
Bird.pidList = [];

/**
 * Create and layout all the nodes for the path, scenery, Pegman, and goal.
 */
Bird.drawMap = function() {
  var svg = document.getElementById('svgBird');

  // Draw the outer square.
  var square = document.createElementNS(Blockly.SVG_NS, 'rect');
  square.setAttribute('width', Bird.MAP_SIZE);
  square.setAttribute('height', Bird.MAP_SIZE);
  square.setAttribute('fill', '#F1EEE7');
  square.setAttribute('stroke-width', 1);
  square.setAttribute('stroke', '#CCB');
  svg.appendChild(square);

  if (Bird.graph) {
    // Draw the grid lines.
    // The grid lines are offset so that the lines pass through the centre of
    // each square.  A half-pixel offset is also added to as standard SVG
    // practice to avoid blurriness.
    var offset = Bird.SQUARE_SIZE / 2 + 0.5;
    for (var k = 0; k < Bird.ROWS; k++) {
      var h_line = document.createElementNS(Blockly.SVG_NS, 'line');
      h_line.setAttribute('y1', k * Bird.SQUARE_SIZE + offset);
      h_line.setAttribute('x2', Bird.MAZE_WIDTH);
      h_line.setAttribute('y2', k * Bird.SQUARE_SIZE + offset);
      h_line.setAttribute('stroke', Bird.SKIN.graph);
      h_line.setAttribute('stroke-width', 1);
      svg.appendChild(h_line);
    }
    for (var k = 0; k < Bird.COLS; k++) {
      var v_line = document.createElementNS(Blockly.SVG_NS, 'line');
      v_line.setAttribute('x1', k * Bird.SQUARE_SIZE + offset);
      v_line.setAttribute('x2', k * Bird.SQUARE_SIZE + offset);
      v_line.setAttribute('y2', Bird.MAZE_HEIGHT);
      v_line.setAttribute('stroke', Bird.SKIN.graph);
      v_line.setAttribute('stroke-width', 1);
      svg.appendChild(v_line);
    }
  }

  // Add nest.
  var image = document.createElementNS(Blockly.SVG_NS, 'image');
  image.setAttribute('id', 'nest');
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      'nest.png');
  image.setAttribute('height', Bird.ICON_SIZE);
  image.setAttribute('width', Bird.ICON_SIZE);
  svg.appendChild(image);

  // Add worm.
  var image = document.createElementNS(Blockly.SVG_NS, 'image');
  image.setAttribute('id', 'worm');
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      'worm.png');
  image.setAttribute('height', Bird.ICON_SIZE);
  image.setAttribute('width', Bird.ICON_SIZE);
  svg.appendChild(image);

  // Add bird.
  var image = document.createElementNS(Blockly.SVG_NS, 'image');
  image.setAttribute('id', 'bird');
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      'bird.png');
  image.setAttribute('height', Bird.ICON_SIZE);
  image.setAttribute('width', Bird.ICON_SIZE);
  svg.appendChild(image);
};

/**
 * Initialize Blockly and the bird.  Called on page load.
 */
Bird.init = function() {
  BlocklyApps.init();

  var rtl = BlocklyApps.LANGUAGES[BlocklyApps.LANG][1] == 'rtl';
  var toolbox = document.getElementById('toolbox');
  Blockly.inject(document.getElementById('blockly'),
      {path: '../',
       rtl: rtl,
       toolbox: toolbox,
       trashcan: true});
  Blockly.loadAudio_(['apps/bird/win.mp3', 'apps/bird/win.ogg'], 'win');
  Blockly.loadAudio_(['apps/bird/whack.mp3', 'apps/bird/whack.ogg'], 'whack');

  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  BlocklyApps.checkTimeout();\n';
  Bird.drawMap();

  var blocklyDiv = document.getElementById('blockly');
  var visualization = document.getElementById('visualization');
  var onresize = function(e) {
    var top = visualization.offsetTop;
    blocklyDiv.style.top = Math.max(10, top - window.scrollY) + 'px';
    blocklyDiv.style.left = rtl ? '10px' : '420px';
    blocklyDiv.style.width = (window.innerWidth - 440) + 'px';
  };
  window.addEventListener('scroll', function() {
      onresize();
      Blockly.fireUiEvent(window, 'resize');
    });
  window.addEventListener('resize', onresize);
  onresize();
  Blockly.fireUiEvent(window, 'resize');

  var defaultXml = '';
  if (Bird.LEVEL == 1) {
    defaultXml =
      '<xml>' +
      '  <block type="bird_heading" x="70" y="70"></block>' +
      '</xml>';
  } else if (Bird.LEVEL <= 5) {
    defaultXml =
      '<xml>' +
      '  <block type="bird_ifElse" x="70" y="70"></block>' +
      '</xml>';
  } else {
    defaultXml =
      '<xml>' +
      '  <block type="controls_if" x="70" y="70"></block>' +
      '</xml>';
  }

  BlocklyApps.loadBlocks(defaultXml);

  Bird.reset(true);

  // Lazy-load the syntax-highlighting.
  window.setTimeout(BlocklyApps.importPrettify, 1);
};

if (window.location.pathname.match(/readonly.html$/)) {
  window.addEventListener('load', BlocklyApps.initReadonly);
} else {
  window.addEventListener('load', Bird.init);
}

/**
 * Reset the bird to the start position and kill any pending animation tasks.
 * @param {boolean} first True if an opening animation is to be played.
 */
Bird.reset = function(first) {
  // Kill all tasks.
  for (var x = 0; x < Bird.pidList.length; x++) {
    window.clearTimeout(Bird.pidList[x]);
  }
  Bird.pidList = [];

  // Move Pegman into position.
  Bird.X = Bird.MAP.startX;
  Bird.Y = Bird.MAP.startY;

//  Bird.pegmanD = Bird.startDirection;
  Bird.displayBird();

  // Move the worm into position.
  var image = document.getElementById('worm');
  image.setAttribute('x',
      Bird.MAP.wormX / 100 * Bird.MAP_SIZE - Bird.ICON_SIZE / 2);
  image.setAttribute('y',
      (1 - Bird.MAP.wormY / 100) * Bird.MAP_SIZE - Bird.ICON_SIZE / 2);
  image.style.visibility = 'visible';
  // Move the nest into position.
  var image = document.getElementById('nest');
  image.setAttribute('x',
      Bird.MAP.nestX / 100 * Bird.MAP_SIZE - Bird.ICON_SIZE / 2);
  image.setAttribute('y',
      (1 - Bird.MAP.nestY / 100) * Bird.MAP_SIZE - Bird.ICON_SIZE / 2);
};

/**
 * Click the run button.  Start the program.
 */
Bird.runButtonClick = function() {
  var runButton = document.getElementById('runButton');
  var resetButton = document.getElementById('resetButton');
  // Ensure that Reset button is at least as wide as Run button.
  if (!resetButton.style.minWidth) {
    resetButton.style.minWidth = runButton.offsetWidth + 'px';
  }
  runButton.style.display = 'none';
  resetButton.style.display = 'inline';
  Blockly.mainWorkspace.traceOn(true);
  Bird.reset(false);
  Bird.execute();
};

/**
 * Click the reset button.  Reset the bird.
 */
Bird.resetButtonClick = function() {
  document.getElementById('runButton').style.display = 'inline';
  document.getElementById('resetButton').style.display = 'none';
  Blockly.mainWorkspace.traceOn(false);
  Bird.reset(false);
};

/**
 * Outcomes of running the user program.
 */
Bird.ResultType = {
  UNSET: 0,
  SUCCESS: 1,
  FAILURE: -1,
  TIMEOUT: 2,
  ERROR: -2
};

/**
 * Execute the user's code.  Heaven help us...
 */
Bird.execute = function() {
  BlocklyApps.log = [];
  BlocklyApps.ticks = 10000;
  var code = Blockly.Generator.workspaceToCode('JavaScript');
  code = 'while(true) {\n' +
      Blockly.JavaScript.INFINITE_LOOP_TRAP +
      code +
      '}';
  var result = Bird.ResultType.UNSET;

  // Try running the user's code.  There are four possible outcomes:
  // 1. If pegman reaches the finish [SUCCESS], true is thrown.
  // 2. If the program is terminated due to running too long [TIMEOUT],
  //    false is thrown.
  // 3. If another error occurs [ERROR], that error is thrown.
  // 4. If the program ended normally but without solving the maze [FAILURE],
  //    no error or exception is thrown.
  try {
    eval(code);
    result = Bird.ResultType.FAILURE;
  } catch (e) {
    // A boolean is thrown for normal termination.
    // Abnormal termination is a user error.
    if (e === Infinity) {
      result = Bird.ResultType.TIMEOUT;
    } else if (e === true) {
      result = Bird.ResultType.SUCCESS;
    } else if (e === false) {
      result = Bird.ResultType.ERROR;
    } else {
      // Syntax error, can't happen.
      result = Bird.ResultType.ERROR;
      window.alert(e);
    }
  }
  console.log('Result:' + result);

  // Fast animation if execution is successful.  Slow otherwise.
  Bird.stepSpeed = (result == Bird.ResultType.SUCCESS) ? 10 : 20;

  // BlocklyApps.log now contains a transcript of all the user's actions.
  // Reset the maze and animate the transcript.
  Bird.reset(false);
  Bird.pidList.push(window.setTimeout(Bird.animate, 1));
};

/**
 * Iterate through the recorded path and animate pegman's actions.
 */
Bird.animate = function() {
  // All tasks should be complete now.  Clean up the PID list.
  Bird.pidList = [];

  var action = BlocklyApps.log.shift();
  if (!action) {
    BlocklyApps.highlight(null);
    return;
  }
  BlocklyApps.highlight(action[1]);

  if (typeof action[0] == 'number') {
    var angle = action[0];
    Bird.X += Math.cos(angle);
    Bird.Y += Math.sin(angle);
    Bird.displayBird();
  } else if (action[0] == 'worm') {
    var worm = document.getElementById('worm');
    worm.style.visibility = 'hidden';
  } else if (action[0] == 'finish') {
  }

  Bird.pidList.push(window.setTimeout(Bird.animate, Bird.stepSpeed * 5));
};

/**
 * Congratulates the user for completing the level and offers to
 * direct them to the next level, if available.
 */
Bird.congratulations = function() {
  var content = document.getElementById('dialogDone');
  var textDiv = document.getElementById('dialogDoneText');
  var buttonDiv = document.getElementById('dialogDoneButtons');
  textDiv.innerHTML = '';
  buttonDiv.innerHTML = '';
  var style = {
    width: '40%',
    left: '30%',
    top: '5em'
  };
  if (Bird.LEVEL < Bird.MAX_LEVEL) {
    var text = BlocklyApps.getMsg('Bird_nextLevel')
        .replace('%1', Bird.LEVEL + 1);
    var cancel = document.createElement('button');
    cancel.appendChild(
        document.createTextNode(BlocklyApps.getMsg('dialogCancel')));
    cancel.addEventListener('click', BlocklyApps.hideDialog, true);
    cancel.addEventListener('touchend', BlocklyApps.hideDialog, true);
    buttonDiv.appendChild(cancel);

    var ok = document.createElement('button');
    ok.className = 'secondary';
    ok.appendChild(document.createTextNode(BlocklyApps.getMsg('dialogOk')));
    ok.addEventListener('click', Bird.nextLevel, true);
    ok.addEventListener('touchend', Bird.nextLevel, true);
    buttonDiv.appendChild(ok);

    BlocklyApps.showDialog(content, null, false, true, style,
        function() {
          document.body.removeEventListener('keydown',
              BlocklyApps.congratulationsKeyDown_, true);
          });
    document.body.addEventListener('keydown',
        BlocklyApps.congratulationsKeyDown_, true);

  } else {
    var text = BlocklyApps.getMsg('Bird_finalLevel');
    var ok = document.createElement('button');
    ok.className = 'secondary';
    ok.addEventListener('click', BlocklyApps.hideDialog, true);
    ok.addEventListener('touchend', BlocklyApps.hideDialog, true);
    ok.appendChild(document.createTextNode(BlocklyApps.getMsg('dialogOk')));
    buttonDiv.appendChild(ok);
    BlocklyApps.showDialog(content, null, false, true, style,
        BlocklyApps.stopDialogKeyDown);
    BlocklyApps.startDialogKeyDown();
  }
  textDiv.appendChild(document.createTextNode(text));
};

/**
 * If the user preses enter, escape, or space, hide the dialog.
 * Enter and space move to the next level, escape does not.
 * @param {!Event} e Keyboard event.
 * @private
 */
BlocklyApps.congratulationsKeyDown_ = function(e) {
  if (e.keyCode == 13 ||
      e.keyCode == 27 ||
      e.keyCode == 32) {
    BlocklyApps.hideDialog(true);
    e.stopPropagation();
    e.preventDefault();
    if (e.keyCode != 27) {
      Bird.nextLevel();
    }
  }
};

/**
 * Go to the next level.
 */
Bird.nextLevel = function() {
  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname +
      '?lang=' + BlocklyApps.LANG + '&level=' + (Bird.LEVEL + 1);
};

/**
 * Schedule the animations for a move or turn.
 * @param {!Array.<number>} startPos X, Y and direction starting points.
 * @param {!Array.<number>} endPos X, Y and direction ending points.
 */
Bird.schedule = function(startPos, endPos) {
  var deltas = [(endPos[0] - startPos[0]) / 4,
                (endPos[1] - startPos[1]) / 4,
                (endPos[2] - startPos[2]) / 4];
  Bird.displayPegman(startPos[0] + deltas[0],
                     startPos[1] + deltas[1],
                     Bird.constrainDirection16(startPos[2] + deltas[2]));
  Bird.pidList.push(window.setTimeout(function() {
      Bird.displayPegman(startPos[0] + deltas[0] * 2,
          startPos[1] + deltas[1] * 2,
          Bird.constrainDirection16(startPos[2] + deltas[2] * 2));
    }, Bird.stepSpeed));
  Bird.pidList.push(window.setTimeout(function() {
      Bird.displayPegman(startPos[0] + deltas[0] * 3,
          startPos[1] + deltas[1] * 3,
          Bird.constrainDirection16(startPos[2] + deltas[2] * 3));
    }, Bird.stepSpeed * 2));
  Bird.pidList.push(window.setTimeout(function() {
      Bird.displayPegman(endPos[0], endPos[1],
          Bird.constrainDirection16(endPos[2]));
    }, Bird.stepSpeed * 3));
};

/**
 * Schedule the animations and sounds for a failed move.
 * @param {boolean} forward True if forward, false if backward.
 */
Bird.scheduleFail = function(forward) {
  var deltaX = 0;
  var deltaY = 0;
  switch (Bird.pegmanD) {
    case Bird.DirectionType.NORTH:
      deltaY = -0.25;
      break;
    case Bird.DirectionType.EAST:
      deltaX = 0.25;
      break;
    case Bird.DirectionType.SOUTH:
      deltaY = 0.25;
      break;
    case Bird.DirectionType.WEST:
      deltaX = -0.25;
      break;
  }
  if (!forward) {
    deltaX = -deltaX;
    deltaY = -deltaY;
  }
  var direction16 = Bird.constrainDirection16(Bird.pegmanD * 4);
  Bird.displayPegman(Bird.pegmanX + deltaX,
                     Bird.pegmanY + deltaY,
                     direction16);
  Blockly.playAudio('whack', .5);
  Bird.pidList.push(window.setTimeout(function() {
    Bird.displayPegman(Bird.pegmanX,
                       Bird.pegmanY,
                       direction16);
    }, Bird.stepSpeed));
  Bird.pidList.push(window.setTimeout(function() {
    Bird.displayPegman(Bird.pegmanX + deltaX,
                       Bird.pegmanY + deltaY,
                       direction16);
    Blockly.playAudio('whack', .5);
  }, Bird.stepSpeed * 2));
  Bird.pidList.push(window.setTimeout(function() {
      Bird.displayPegman(Bird.pegmanX, Bird.pegmanY, direction16);
    }, Bird.stepSpeed * 3));
};

/**
 * Schedule the animations and sound for a victory dance.
 * @param {boolean} sound Play the victory sound.
 */
Bird.scheduleFinish = function(sound) {
  var direction16 = Bird.constrainDirection16(Bird.pegmanD * 4);
  Bird.displayPegman(Bird.pegmanX, Bird.pegmanY, 16);
  if (sound) {
    Blockly.playAudio('win', .5);
  }
  Bird.stepSpeed = 150;  // Slow down victory animation a bit.
  Bird.pidList.push(window.setTimeout(function() {
    Bird.displayPegman(Bird.pegmanX, Bird.pegmanY, 18);
    }, Bird.stepSpeed));
  Bird.pidList.push(window.setTimeout(function() {
    Bird.displayPegman(Bird.pegmanX, Bird.pegmanY, 16);
    }, Bird.stepSpeed * 2));
  Bird.pidList.push(window.setTimeout(function() {
      Bird.displayPegman(Bird.pegmanX, Bird.pegmanY, direction16);
    }, Bird.stepSpeed * 3));
};

/**
 * Display Bird at the current location, facing the current angle.
 */
Bird.displayBird = function() {
  // Move the bird into position.
  var image = document.getElementById('bird');
  image.setAttribute('x',
      Bird.X / 100 * Bird.MAP_SIZE - Bird.ICON_SIZE / 2);
  image.setAttribute('y',
      (1 - Bird.Y / 100) * Bird.MAP_SIZE - Bird.ICON_SIZE / 2);
};

/**
 * Compute distance between two points (Pythagorean theorem).
 * @param {number} x1 X-coordinate of first point.
 * @param {number} y1 Y-coordinate of first point.
 * @param {number} x2 X-coordinate of second point.
 * @param {number} y2 Y-coordinate of second point.
 * @return {number} Distance.
 */
Bird.distance = function(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Compute distance between a point and a line segment.
 * @param {number} px X-coordinate of point.
 * @param {number} py Y-coordinate of point.
 * @param {number} x1 X-coordinate of line start point.
 * @param {number} y1 Y-coordinate of line start point.
 * @param {number} x2 X-coordinate of line end point.
 * @param {number} y2 Y-coordinate of line end point.
 * @return {number} Distance.
 */
Bird.distanceToSegment = function(px, py, x1, y1, x2, y2) {
  var lineLength = Bird.distance(x1, y1, x2, y2);
  if (lineLength == 0) {
    return Bird.distance(px, py, x1, y1);
  }
  var t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) /
      (lineLength * lineLength);
  if (t < 0) {
    return Bird.distance(px, py, x1, y1);
  } else if (t > 1) {
    return Bird.distance(px, py, x2, y2);
  }
  var tx = x1 + t * (x2 - x1);
  var ty = y1 + t * (y2 - y1);
  return Bird.distance(px, py, tx, ty);
};

/**
 * Has the bird intersected the nest?
 * @return {boolean} True if the bird found the nest, false otherwise.
 */
Bird.intersectNest = function() {
  var accuracy = 1.0 * Bird.ICON_SIZE / Bird.MAP_SIZE * 100;
  return Bird.distance(Bird.X, Bird.Y, Bird.MAP.nestX, Bird.MAP.nestY) <
      accuracy;
};

/**
 * Has the bird intersected the worm?
 * @return {boolean} True if the bird found the worm, false otherwise.
 */
Bird.intersectWorm = function() {
  var accuracy = 1.0 * Bird.ICON_SIZE / Bird.MAP_SIZE * 100;
  return Bird.distance(Bird.X, Bird.Y, Bird.MAP.wormX, Bird.MAP.wormY) <
      accuracy;
};

/**
 * Has the bird intersected a wall?
 * @return {boolean} True if the bird hit a wall, false otherwise.
 */
Bird.intersectWall = function() {
  var accuracy = 0.5 * Bird.ICON_SIZE / Bird.MAP_SIZE * 100;
  for (var i = 0, wall; wall = Bird.MAP.walls[i]; i++) {
    if (Bird.distanceToSegment(Bird.X, Bird.Y,
        wall[0], wall[1], wall[2], wall[3]) < accuracy) {
      return true;
    }
  }
  return false;
};

// API

/**
 * Attempt to move the bird in the specified direction.
 * @param {number} angle Direction to move (0 = east, 90 = north).
 * @param {string} id ID of block that triggered this action.
 * @throws {true} If the nest is reached.
 * @throws {false} If the bird collides with a wall.
 */
Bird.heading = function(angle, id) {
  // Convert degrees to radians.
  angle = angle / 180 * Math.PI;
  Bird.X += Math.cos(angle);
  Bird.Y += Math.sin(angle);
  BlocklyApps.log.push([angle, id]);
  if (Bird.intersectNest()) {
    // Finished.  Terminate the user's program.
    BlocklyApps.log.push(['finish', null]);
    throw true;
  }
  if (Bird.intersectWorm()) {
    BlocklyApps.log.push(['worm', null]);
  }
  if (Bird.intersectWall()) {
    throw false;
  }
};
