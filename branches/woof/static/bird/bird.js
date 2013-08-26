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

Bird.map = [
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
  square.setAttribute('width', Bird.MAZE_WIDTH);
  square.setAttribute('height', Bird.MAZE_HEIGHT);
  square.setAttribute('fill', '#F1EEE7');
  square.setAttribute('stroke-width', 1);
  square.setAttribute('stroke', '#CCB');
  svg.appendChild(square);

  if (Bird.SKIN.background) {
    var tile = document.createElementNS(Blockly.SVG_NS, 'image');
    tile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
        Bird.SKIN.background);
    tile.setAttribute('height', Bird.MAZE_HEIGHT);
    tile.setAttribute('width', Bird.MAZE_WIDTH);
    tile.setAttribute('x', 0);
    tile.setAttribute('y', 0);
    svg.appendChild(tile);
  }

  if (Bird.SKIN.graph) {
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
  image.setAttribute('height', 100);
  image.setAttribute('width', 100);
  svg.appendChild(image);

  // Add worm.
  var image = document.createElementNS(Blockly.SVG_NS, 'image');
  image.setAttribute('id', 'worm');
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      'worm.png');
  image.setAttribute('height', 100);
  image.setAttribute('width', 100);
  svg.appendChild(image);

  // Add bird.
  var image = document.createElementNS(Blockly.SVG_NS, 'image');
  image.setAttribute('id', 'bird');
  image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
      'bird.jpg');
  image.setAttribute('height', 100);
  image.setAttribute('width', 100);
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

  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  BlocklyApps.checkTimeout(%1);\n';
//  Bird.drawMap();

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

//  Bird.reset(true);

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
  Bird.pegmanX = Bird.start_.x;
  Bird.pegmanY = Bird.start_.y;

  if (first) {
    Bird.pegmanD = Bird.startDirection + 1;
    Bird.scheduleFinish(false);
    Bird.pidList.push(window.setTimeout(function() {
      Bird.stepSpeed = 100;
      Bird.schedule([Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4],
                    [Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4 - 4]);
      Bird.pegmanD++;
    }, Bird.stepSpeed * 5));
  } else {
    Bird.pegmanD = Bird.startDirection;
    Bird.displayPegman(Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4);
  }

  // Move the finish icon into position.
  var finishIcon = document.getElementById('finish');
  finishIcon.setAttribute('x', Bird.SQUARE_SIZE * (Bird.finish_.x + 0.5) -
      finishIcon.getAttribute('width') / 2);
  finishIcon.setAttribute('y', Bird.SQUARE_SIZE * (Bird.finish_.y + 0.6) -
      finishIcon.getAttribute('height'));
};

/**
 * Click the run button.  Start the program.
 */
Bird.runButtonClick = function() {
  // Only allow a single top block on levels 1 and 2.
  if (Bird.LEVEL <= 2 && Blockly.mainWorkspace.getTopBlocks().length > 1) {
    Bird.showOneTopBlock();
    return;
  }
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

  // Fast animation if execution is successful.  Slow otherwise.
  Bird.stepSpeed = (result == Bird.ResultType.SUCCESS) ? 100 : 150;

  // BlocklyApps.log now contains a transcript of all the user's actions.
  // Reset the maze and animate the transcript.
  Bird.reset(false);
  Bird.pidList.push(window.setTimeout(Bird.animate, 100));
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

  switch (action[0]) {
    case 'north':
      Bird.schedule([Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4],
                    [Bird.pegmanX, Bird.pegmanY - 1, Bird.pegmanD * 4]);
      Bird.pegmanY--;
      break;
    case 'east':
      Bird.schedule([Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4],
                    [Bird.pegmanX + 1, Bird.pegmanY, Bird.pegmanD * 4]);
      Bird.pegmanX++;
      break;
    case 'south':
      Bird.schedule([Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4],
                    [Bird.pegmanX, Bird.pegmanY + 1, Bird.pegmanD * 4]);
      Bird.pegmanY++;
      break;
    case 'west':
      Bird.schedule([Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4],
                    [Bird.pegmanX - 1, Bird.pegmanY, Bird.pegmanD * 4]);
      Bird.pegmanX--;
      break;
    case 'look_north':
      Bird.scheduleLook(Bird.DirectionType.NORTH);
      break;
    case 'look_east':
      Bird.scheduleLook(Bird.DirectionType.EAST);
      break;
    case 'look_south':
      Bird.scheduleLook(Bird.DirectionType.SOUTH);
      break;
    case 'look_west':
      Bird.scheduleLook(Bird.DirectionType.WEST);
      break;
    case 'fail_forward':
      Bird.scheduleFail(true);
      break;
    case 'fail_backward':
      Bird.scheduleFail(false);
      break;
    case 'left':
      Bird.schedule([Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4],
                    [Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4 - 4]);
      Bird.pegmanD = Bird.constrainDirection4(Bird.pegmanD - 1);
      break;
    case 'right':
      Bird.schedule([Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4],
                    [Bird.pegmanX, Bird.pegmanY, Bird.pegmanD * 4 + 4]);
      Bird.pegmanD = Bird.constrainDirection4(Bird.pegmanD + 1);
      break;
    case 'finish':
      Bird.scheduleFinish(true);
      window.setTimeout(Bird.congratulations, 1000);
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
      '?lang=' + BlocklyApps.LANG + '&level=' + (Bird.LEVEL + 1) +
      '&skin=' + Bird.SKIN_ID;
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
 * Display Pegman at a the specified location, facing the specified direction.
 * @param {number} x Horizontal grid (or fraction thereof).
 * @param {number} y Vertical grid (or fraction thereof).
 * @param {number} d Direction (0 - 15) or dance (16 - 17).
 */
Bird.displayPegman = function(x, y, d) {
  var pegmanIcon = document.getElementById('pegman');
  pegmanIcon.setAttribute('x',
      x * Bird.SQUARE_SIZE - d * Bird.PEGMAN_WIDTH + 1);
  pegmanIcon.setAttribute('y',
      Bird.SQUARE_SIZE * (y + 0.5) - Bird.PEGMAN_HEIGHT / 2 - 8);

  var clipRect = document.getElementById('clipRect');
  clipRect.setAttribute('x', x * Bird.SQUARE_SIZE + 1);
  clipRect.setAttribute('y', pegmanIcon.getAttribute('y'));
};

// API

/**
 * Attempt to move pegman forward or backward.
 * @param {number} direction Direction to move (0 = forward, 2 = backward).
 * @param {string} id ID of block that triggered this action.
 * @throws {true} If the end of the maze is reached.
 * @throws {false} If Pegman collides with a wall.
 */
Bird.move = function(direction, id) {
  if (!Bird.isPath(direction, null)) {
    BlocklyApps.log.push(['fail_' + (direction ? 'backward' : 'forward'), id]);
    throw false;
  }
  // If moving backward, flip the effective direction.
  var effectiveDirection = Bird.pegmanD + direction;
  var command;
  switch (Bird.constrainDirection4(effectiveDirection)) {
    case Bird.DirectionType.NORTH:
      Bird.pegmanY--;
      command = 'north';
      break;
    case Bird.DirectionType.EAST:
      Bird.pegmanX++;
      command = 'east';
      break;
    case Bird.DirectionType.SOUTH:
      Bird.pegmanY++;
      command = 'south';
      break;
    case Bird.DirectionType.WEST:
      Bird.pegmanX--;
      command = 'west';
      break;
  }
  BlocklyApps.log.push([command, id]);
  if (Bird.pegmanX == Bird.finish_.x && Bird.pegmanY == Bird.finish_.y) {
    // Finished.  Terminate the user's program.
    BlocklyApps.log.push(['finish', null]);
    throw true;
  }
};

/**
 * Turn pegman left or right.
 * @param {number} direction Direction to turn (0 = left, 1 = right).
 * @param {string} id ID of block that triggered this action.
 */
Bird.turn = function(direction, id) {
  if (direction) {
    // Right turn (clockwise).
    Bird.pegmanD++;
    BlocklyApps.log.push(['right', id]);
  } else {
    // Left turn (counterclockwise).
    Bird.pegmanD--;
    BlocklyApps.log.push(['left', id]);
  }
  Bird.pegmanD = Bird.constrainDirection4(Bird.pegmanD);
};

/**
 * Is there a path next to pegman?
 * @param {number} direction Direction to look
 *     (0 = forward, 1 = right, 2 = backward, 3 = left).
 * @param {?string} id ID of block that triggered this action.
 *     Null if called as a helper function in Bird.move().
 * @return {boolean} True if there is a path.
 */
Bird.isPath = function(direction, id) {
  var effectiveDirection = Bird.pegmanD + direction;
  var square;
  var command;
  switch (Bird.constrainDirection4(effectiveDirection)) {
    case Bird.DirectionType.NORTH:
      square = Bird.map[Bird.pegmanY - 1] &&
          Bird.map[Bird.pegmanY - 1][Bird.pegmanX];
      command = 'look_north';
      break;
    case Bird.DirectionType.EAST:
      square = Bird.map[Bird.pegmanY][Bird.pegmanX + 1];
      command = 'look_east';
      break;
    case Bird.DirectionType.SOUTH:
      square = Bird.map[Bird.pegmanY + 1] &&
          Bird.map[Bird.pegmanY + 1][Bird.pegmanX];
      command = 'look_south';
      break;
    case Bird.DirectionType.WEST:
      square = Bird.map[Bird.pegmanY][Bird.pegmanX - 1];
      command = 'look_west';
      break;
  }
  if (id) {
    BlocklyApps.log.push([command, id]);
  }
  return square !== Bird.SquareType.WALL && square !== undefined;
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
