/**
 * Blockly Demo: Turtle Graphics
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
 * @fileoverview Demonstration of Blockly: Turtle Graphics.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Turtle = {};

BlocklyApps.LANG = BlocklyApps.getLang();

document.write('<script type="text/javascript" src="generated/' +
    BlocklyApps.LANG + '.js"></script>\n');

// Set constants with information extracted from the URL.
BlocklyApps.MAX_LEVEL = 10;
BlocklyApps.PAGE = BlocklyApps.getNumberParamFromUrl('page', 1, 3);
BlocklyApps.LEVEL =
    BlocklyApps.getNumberParamFromUrl('level', 1, BlocklyApps.MAX_LEVEL);
Turtle.REINF =
    BlocklyApps.getNumberParamFromUrl('reinf', 0, BlocklyApps.MAX_LEVEL);

// Create a limited colour palette to avoid overwhelming new users
// and to make colour checking easier.  These definitions cannot be
// moved to blocks.js, which is loaded later, since they are used in
// top-level definitions below.  Note that the hex digits a-f are
// lower-case.  This is assumed in comparisons below.
Turtle.Colours = {
  BLACK: '#000000',
  GREY: '#808080',
  KHAKI: '#c3b091',
  WHITE: '#ffffff',
  RED: '#ff0000',
  PINK: '#ff77ff',
  ORANGE: '#ffa000',
  YELLOW: '#ffff00',
  GREEN: '#228b22',
  BLUE: '#0000cd',
  AQUAMARINE: '#7fffd4',
  PLUM: '#843179'
};

/**
 * Colour requirements for this level, if any.  Values and their meanings are:
 * - 1: There must be at least one non-black colour.
 * - 2 or higher: There must be the specified number of colours (black okay).
 * - string: The entire picture must use the named colour.
 * @type{number|string}
 */
Turtle.REQUIRED_COLOURS = null;

/**
 * Template used to generate a regular expression string checking that
 * the procedure whose name replaces '%1' is called.
 * @private
 */
Turtle.PROCEDURE_CALL_TEMPLATE_ = 'procedures_callnoreturn[^e]*e="%1"'

// These functions are used within BlocklyApps.REQUIRED_BLOCKS.
// They must not be anonymous, since there names are used for
// generating html ids.
function repeat_(block) {
  return block.type == 'controls_repeat';
}
function callDrawASquare_(block) {
  return block.type == 'procedures_callnoreturn' &&
      block.getProcedureCall() == 'draw a square';
}
function callDrawATriangle_(block) {
  return block.type == 'procedures_callnoreturn' &&
      block.getProcedureCall() == 'draw a triangle';
}
function callDrawATriangleWithParameter_(block) {
  return callDrawATriangle_(block) &&
      block.arguments_ && block.arguments_.length == 1 &&
      block.getInputTargetBlock('ARG0') &&
      block.getInputTargetBlock('ARG0').type == 'math_number';
}
function callDrawAHouse_(block) {
  return block.type == 'procedures_callnoreturn' &&
      block.getProcedureCall() == 'draw a house';
}
function defineAnything_(block) {
  return block.type == 'procedures_defnoreturn';
}
function defineDrawATriangle_(block) {
  return block.type == 'procedures_defnoreturn' &&
      block.getProcedureDef() &&
      block.getProcedureDef()[0] == 'draw a triangle';
}
function defineDrawATriangleWithParameter_(block) {
  return defineDrawATriangle_(block) &&
      block.arguments_.length == 1;
}
function defineDrawATriangleWithLengthParameter_(block) {
  return defineDrawATriangleWithParameter_(block) &&
      block.arguments_[0] == 'length';
}
function defineDrawAHouse_(block) {
  return block.type == 'procedures_defnoreturn' &&
      block.getProcedureDef() &&
      block.getProcedureDef()[0] == 'draw a house';
}
function move_(block) {
  return block.type.indexOf('draw_move') == 0;
}
function moveByLength_(block) {
  return move_(block) &&
      block.getInputTargetBlock('VALUE') &&
      block.getInputTargetBlock('VALUE').type == 'variables_get_length';
}
function turn_(block) {
  return block.type.indexOf('draw_turn') == 0;
}

/**
 * Information about level-specific requirements.  Each entry consists of:
 * - the ideal number of blocks.
 * - an array of required blocks.
 * - required colours.
 */
Turtle.BLOCK_DATA = [
  // Page 0.
  undefined,
  // Page 1.
  [undefined,  // Level 0.
   // Level 1: El.
   [3, ['moveForward', 'turnRight']],
   // Level 2: Square (without repeat).
   [7, ['draw_colour', 'turn', 'move'], 4],
   // Level 3: Square (with repeat).
   [3, ['turn', 'move', repeat_]],
   // Level 4: Triangle.
   [3, ['turn', 'move'], 3],
   // Level 5: Envelope.
   [6, ['turn', 'move']],
   // Level 6: triangle and square.
   [6, ['turn', 'move']],
   // Level 7: glasses.
   [8, ['draw_colour', repeat_, 'turn', 'move'], Turtle.Colours.GREEN],
   // Level 8: spikes.
   [4, ['draw_colour', 'colour_random', 'move', 'turn'], 8],
   // Level 9: circle.
   [3, [repeat_, 'move', 'turn']]],
  // Page 2.
  [undefined,  // Level 0.
   // Level 1: Square.
   [5, ['draw_colour', 'while', 'turn', 'move'], 1],
   // Level 2: Small green square.
   [2, ['draw_colour', 'draw_a_square'], Turtle.Colours.GREEN],
   // Level 3: Three squares.
   [5, ['colour_random', repeat_, 'turn']],
   // Level 4: 36 squares.
   [5, ['colour_random']],
   // Level 5: Different size squares.
   [10, ['draw_a_square']],
   // Level 6: For-loop squares.
   [6, ['for', 'get_counter', 'draw_a_square']],
   // Level 7: Boxy spiral.
   [8, ['for', 'get_counter', 'move']],
   // Level 8: Three snowmen.
   [9, ['draw_a_snowman', 'turn', 'jump', 'move'], 3],
   // Level 9: Snowman family.
   [12, ['draw_a_snowman', 'for', 'jump', 'get_counter']]],

  // Page 3.
  // This page uses procedures instead of strings to check for required
  // blocks to avoid matching undeletable code in starting blocks.
  [undefined,  // Level 0.
   // Level 1: Call 'draw a square'.
   // The semicolon distinguishes the call from the definition.
   [1, [callDrawASquare_]],
   // Level 2: Create "draw a triangle".
   [7, [defineDrawATriangle_, move_, turn_, repeat_,
        callDrawATriangle_]],
   // Level 3: Fence the animals.
   [7, [callDrawATriangle_, move_, callDrawASquare_]],
   // Level 4: House the lion.
   [6, [callDrawASquare_, move_, turn_, callDrawATriangle_]],
   // Level 5: Create "draw a house".
   [8, [defineAnything_, defineDrawAHouse_, callDrawASquare_, move_, turn_,
        callDrawATriangle_, callDrawAHouse_]],
   // Level 6: Add parameter to "draw a triangle".
   [13,
    [defineDrawATriangle_,
     defineDrawATriangleWithParameter_,
     defineDrawATriangleWithLengthParameter_,
     moveByLength_,
     callDrawATriangle_,
     callDrawATriangleWithParameter_,
    'draw_colour'],
    2]
  // TODO: Add levels 7, 8, and 9.
  ]
];

BlocklyApps.CHECK_FOR_EMPTY_BLOCKS = false;
BlocklyApps.NUM_REQUIRED_BLOCKS_TO_FLAG = 1;

// TODO: Remove try/catch once hints written for all levels.
try {
  if (BlocklyApps.LEVEL != BlocklyApps.MAX_LEVEL &&
      Turtle.BLOCK_DATA[BlocklyApps.PAGE]) {
    BlocklyApps.IDEAL_BLOCK_NUM =
        Turtle.BLOCK_DATA[BlocklyApps.PAGE][BlocklyApps.LEVEL][0];
    BlocklyApps.REQUIRED_BLOCKS =
        Turtle.BLOCK_DATA[BlocklyApps.PAGE][BlocklyApps.LEVEL][1];
    Turtle.REQUIRED_COLOURS =
        Turtle.BLOCK_DATA[BlocklyApps.PAGE][BlocklyApps.LEVEL][2];
  }
} catch (e) {}

BlocklyApps.FREE_BLOCKS = 'colour';

Turtle.HEIGHT = 400;
Turtle.WIDTH = 400;

/**
 * PID of animation task currently executing.
 */
Turtle.pid = 0;

/**
 * Colours used in current animation, represented as hex strings
 * (e.g., "#a0b0c0").
 */
Turtle.coloursUsed = [];

/**
 * Should the turtle be drawn?
 */
Turtle.visible = true;

/**
 * Initialize Blockly and the turtle.  Called on page load.
 */
Turtle.init = function() {
  if (Turtle.REINF) {
    return;
  }
  BlocklyApps.init();
  // BlocklyApps.init() sets the page title but does not substitute
  // in the page number.  Do it now.
  document.title = document.getElementById('title').
      textContent.replace('%1', BlocklyApps.PAGE);

  var rtl = BlocklyApps.LANGUAGES[BlocklyApps.LANG][1] == 'rtl';
  var toolbox = document.getElementById('toolbox');
  Blockly.inject(document.getElementById('blockly'),
      {path: '../',
       rtl: rtl,
       toolbox: toolbox,
       trashcan: true});
  if (BlocklyApps.LEVEL == 1) {
    Blockly.SNAP_RADIUS *= 2;
  }

  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  BlocklyApps.checkTimeout(%1);\n';

  // Add to reserved word list: API, local variables in execution evironment
  // (execute) and the infinite loop detection function.
  Blockly.JavaScript.addReservedWords('Turtle,code');

  var blocklyDiv = document.getElementById('blockly');
  var visualization = document.getElementById('visualization');
  var onresize = function(e) {
    var top = bubble.offsetTop;
    blocklyDiv.style.top = Math.max(10, top - window.scrollY) + 'px';
    blocklyDiv.style.left = rtl ? '10px' : '420px';
    blocklyDiv.style.width = (window.innerWidth - 440) + 'px';
  };
  window.addEventListener('resize', onresize);
  onresize();
  Blockly.fireUiEvent(window, 'resize');

  if (!('BlocklyStorage' in window)) {
    document.getElementById('linkButton').className = 'disabled';
  }

  // Initialize the slider.
  var sliderSvg = document.getElementById('slider');
  Turtle.speedSlider = new Slider(10, 35, 130, sliderSvg);

  // Add the starting block(s).
  // An href with #key trigers an AJAX call to retrieve saved blocks.
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else {
    if (BlocklyApps.PAGE == 3 &&
        (BlocklyApps.LEVEL == 8 || BlocklyApps.LEVEL == 9)) {
      var xml = window.sessionStorage.turtle3Blocks;
      if (xml === undefined) {
        xml = '';
      }
    } else {
      var xml = document.getElementById('start_blocks').innerHTML;
      if (xml) {
        xml = '<xml>' + xml + '</xml>';
      }
    }
    if (xml) {
      var dom = Blockly.Xml.textToDom(xml);
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, dom);
    }
  }

  // Get the canvases and set their initial contents.
  Turtle.ctxDisplay = document.getElementById('display').getContext('2d');
  Turtle.ctxAnswer = document.getElementById('answer').getContext('2d');
  Turtle.ctxImages = document.getElementById('images').getContext('2d');
  Turtle.ctxScratch = document.getElementById('scratch').getContext('2d');
  Turtle.drawImages();
  Turtle.drawAnswer();
  BlocklyApps.reset();

  // Special case to increase speed on levels that have lots of steps.
  if ((BlocklyApps.PAGE == 1 && BlocklyApps.LEVEL == 9) ||
      (BlocklyApps.PAGE == 2 &&
          (BlocklyApps.LEVEL >= 8 && BlocklyApps.LEVEL <= 9))) {
    Turtle.speedSlider.setValue(.9);
  }

  // Add display of blocks used unless on final playground level.
  if (BlocklyApps.LEVEL != BlocklyApps.MAX_LEVEL) {
    Blockly.addChangeListener(function() {
      Turtle.updateBlockCount();
    });
  }
};

window.addEventListener('load', Turtle.init);

/**
 * Add count of blocks used, not counting colour blocks.
 */
Turtle.updateBlockCount = function() {
  BlocklyApps.setTextForElement(
      'blockCount',
      BlocklyApps.getMsg('blocksUsed').
          replace('%1', BlocklyApps.getNumBlocksUsed()));
};

/**
 * On startup draw the expected answer and save it to the answer canvas.
 */
Turtle.drawAnswer = function() {
  BlocklyApps.log = [];
  BlocklyApps.ticks = Infinity;
  Turtle.answer();
  BlocklyApps.reset();
  while (BlocklyApps.log.length) {
    var tuple = BlocklyApps.log.shift();
    Turtle.step(tuple[0], tuple.splice(1));
  }
  Turtle.ctxAnswer.globalCompositeOperation = 'copy';
  Turtle.ctxAnswer.drawImage(Turtle.ctxScratch.canvas, 0, 0);
  Turtle.ctxAnswer.globalCompositeOperation = 'source-over';
};

/**
 * Place an image at the specified coordinates.
 * Code from http://stackoverflow.com/questions/5495952. Thanks, Phrogz.
 * @param {string} filename Relative path to image.
 * @param {!Array} coordinates List of x-y pairs.
 */
Turtle.placeImage = function(filename, coordinates) {
  var img = new Image;
  img.onload = function() {
    for (var i = 0; i < coordinates.length; i++) {
      Turtle.ctxImages.drawImage(img, coordinates[i][0], coordinates[i][1]);
    }
    Turtle.display();
  };
  img.src = filename;
};

/**
 * Draw the images for this page and level onto Turtle.ctxImages.
 */
Turtle.drawImages = function() {
  if (BlocklyApps.PAGE == 3) {
    switch (BlocklyApps.LEVEL) {
      case 3:
        Turtle.placeImage('cat.svg', [[170, 247], [170, 47]]);
        Turtle.placeImage('cow.svg', [[182, 147]]);
        break;
      case 4:
        Turtle.placeImage('lion.svg', [[197, 97]]);
        break;
      case 5:
        Turtle.placeImage('cat.svg', [[170, 90], [222, 90]]);
        break;
      case 6:
        Turtle.placeImage('lion.svg', [[185, 100]]);
        Turtle.placeImage('cat.svg', [[175, 248]]);
        break;
      case 7:
        Turtle.placeImage('elephant.svg', [[205, 220]]);
        break;
      case 8:
        Turtle.placeImage('cat.svg', [[16, 170]]);
        Turtle.placeImage('lion.svg', [[15, 250]]);
        Turtle.placeImage('elephant.svg', [[127, 220]]);
        Turtle.placeImage('cow.svg', [[255, 250]]);
        break;
      case 9:
        Turtle.placeImage('cat.svg', [[-10, 270]]);
        Turtle.placeImage('cow.svg', [[53, 250]]);
        Turtle.placeImage('elephant.svg', [[175, 220]]);
        break;
    }

    Turtle.ctxImages.globalCompositeOperation = 'copy';
    Turtle.ctxImages.drawImage(Turtle.ctxScratch.canvas, 0, 0);
    Turtle.ctxImages.globalCompositeOperation = 'source-over';
  }
};


/**
 * Reset the turtle to the start position, clear the display, and kill any
 * pending tasks.
 * @param {boolean} ignore Required by the API but ignored by this
 *     implementation.
 */
BlocklyApps.reset = function(ignore) {
  // Starting location and heading of the turtle.
  Turtle.x = Turtle.HEIGHT / 2;
  Turtle.y = Turtle.WIDTH / 2;
  Turtle.heading = 0;
  Turtle.penDownValue = true;
  Turtle.visible = true;

  // Special cases.
  // TODO: Consider putting specification in template.soy.
  if (BlocklyApps.PAGE == 2 &&
      (BlocklyApps.LEVEL == 8 || BlocklyApps.LEVEL == 9)) {
    Turtle.x = 100;
  } else if (BlocklyApps.PAGE == 3) {
    switch (BlocklyApps.LEVEL) {
      case 3:
      case 6:
      case 7:
        Turtle.y = 350;
        break;
      case 8:
      case 9:
        Turtle.x = 20;
        Turtle.y = 350;
        break;
    }
  }
  // Clear the display.
  Turtle.ctxScratch.canvas.width = Turtle.ctxScratch.canvas.width;
  Turtle.ctxScratch.strokeStyle = '#000000';
  Turtle.ctxScratch.fillStyle = '#000000';
  Turtle.ctxScratch.lineWidth = 5;
  Turtle.ctxScratch.lineCap = 'round';
  Turtle.ctxScratch.font = 'normal 18pt Arial';
  Turtle.display();

  // Kill any task.
  if (Turtle.pid) {
    window.clearTimeout(Turtle.pid);
  }
  Turtle.pid = 0;
  Turtle.coloursUsed = [];
};

/**
 * Copy the scratch canvas to the display canvas. Add a turtle marker.
 */
Turtle.display = function() {
  Turtle.ctxDisplay.globalCompositeOperation = 'copy';
  // Draw the answer layer.
  Turtle.ctxDisplay.globalAlpha = 0.1;
  Turtle.ctxDisplay.drawImage(Turtle.ctxAnswer.canvas, 0, 0);
  Turtle.ctxDisplay.globalAlpha = 1;

  // Draw the images layer.
  Turtle.ctxDisplay.globalCompositeOperation = 'source-over';
  Turtle.ctxDisplay.drawImage(Turtle.ctxImages.canvas, 0, 0);

  // Draw the user layer.
  Turtle.ctxDisplay.globalCompositeOperation = 'source-over';
  Turtle.ctxDisplay.drawImage(Turtle.ctxScratch.canvas, 0, 0);

  // Draw the turtle.
  if (Turtle.visible) {
    // Make the turtle the colour of the pen.
    Turtle.ctxDisplay.strokeStyle = Turtle.ctxScratch.strokeStyle;
    Turtle.ctxDisplay.fillStyle = Turtle.ctxScratch.fillStyle;

    // Draw the turtle body.
    var radius = Turtle.ctxScratch.lineWidth / 2 + 10;
    Turtle.ctxDisplay.beginPath();
    Turtle.ctxDisplay.arc(Turtle.x, Turtle.y, radius, 0, 2 * Math.PI, false);
    Turtle.ctxDisplay.lineWidth = 3;
    Turtle.ctxDisplay.stroke();

    // Draw the turtle head.
    var WIDTH = 0.3;
    var HEAD_TIP = 10;
    var ARROW_TIP = 4;
    var BEND = 6;
    var radians = 2 * Math.PI * Turtle.heading / 360;
    var tipX = Turtle.x + (radius + HEAD_TIP) * Math.sin(radians);
    var tipY = Turtle.y - (radius + HEAD_TIP) * Math.cos(radians);
    radians -= WIDTH;
    var leftX = Turtle.x + (radius + ARROW_TIP) * Math.sin(radians);
    var leftY = Turtle.y - (radius + ARROW_TIP) * Math.cos(radians);
    radians += WIDTH / 2;
    var leftControlX = Turtle.x + (radius + BEND) * Math.sin(radians);
    var leftControlY = Turtle.y - (radius + BEND) * Math.cos(radians);
    radians += WIDTH;
    var rightControlX = Turtle.x + (radius + BEND) * Math.sin(radians);
    var rightControlY = Turtle.y - (radius + BEND) * Math.cos(radians);
    radians += WIDTH / 2;
    var rightX = Turtle.x + (radius + ARROW_TIP) * Math.sin(radians);
    var rightY = Turtle.y - (radius + ARROW_TIP) * Math.cos(radians);
    Turtle.ctxDisplay.beginPath();
    Turtle.ctxDisplay.moveTo(tipX, tipY);
    Turtle.ctxDisplay.lineTo(leftX, leftY);
    Turtle.ctxDisplay.bezierCurveTo(leftControlX, leftControlY,
        rightControlX, rightControlY, rightX, rightY);
    Turtle.ctxDisplay.closePath();
    Turtle.ctxDisplay.fill();
  }
};

/**
 * Click the run button.  Start the program.
 */
Turtle.runButtonClick = function() {
  document.getElementById('runButton').style.display = 'none';
  document.getElementById('resetButton').style.display = 'inline';
  document.getElementById('spinner').style.visibility = 'visible';
  Blockly.mainWorkspace.traceOn(true);
  Turtle.execute();
};

/**
 * Execute the user's code.  Heaven help us...
 */
Turtle.execute = function() {
  BlocklyApps.log = [];
  BlocklyApps.ticks = 1000000;

  Turtle.code = Blockly.Generator.workspaceToCode('JavaScript');
  try {
    eval(Turtle.code);
  } catch (e) {
    // Null is thrown for infinite loop.
    // Otherwise, abnormal termination is a user error.
    if (e !== null) {
      alert(e);
    }
  }

  // BlocklyApps.log now contains a transcript of all the user's actions.
  // Reset the graphic and animate the transcript.
  BlocklyApps.reset();
  Turtle.pid = window.setTimeout(Turtle.animate, 100);
};

/**
 * Iterate through the recorded path and animate the turtle's actions.
 */
Turtle.animate = function() {
  // All tasks should be complete now.  Clean up the PID list.
  Turtle.pid = 0;

  var tuple = BlocklyApps.log.shift();
  if (!tuple) {
    document.getElementById('spinner').style.visibility = 'hidden';
    Blockly.mainWorkspace.highlightBlock(null);
    Turtle.checkAnswer();
    return;
  }
  var command = tuple.shift();
  BlocklyApps.highlight(tuple.pop());
  Turtle.step(command, tuple);
  Turtle.display();

  // Scale the speed non-linearly, to give better precision at the fast end.
  var stepSpeed = 1000 * Math.pow(1 - Turtle.speedSlider.getValue(), 2);
  Turtle.pid = window.setTimeout(Turtle.animate, stepSpeed);
};

/**
 * Execute one step.
 * @param {string} command Logo-style command (e.g. 'FD' or 'RT').
 * @param {!Array} values List of arguments for the command.
 */
Turtle.step = function(command, values) {
  switch (command) {
    case 'FD':  // Forward
      if (Turtle.penDownValue) {
        Turtle.ctxScratch.beginPath();
        Turtle.ctxScratch.moveTo(Turtle.x, Turtle.y);
      }
      // Fall through...
    case 'JF':  // Jump forward
      var distance = values[0];
      if (distance) {
        Turtle.x += distance * Math.sin(2 * Math.PI * Turtle.heading / 360);
        Turtle.y -= distance * Math.cos(2 * Math.PI * Turtle.heading / 360);
        var bump = 0;
      } else {
        // WebKit (unlike Gecko) draws nothing for a zero-length line.
        var bump = 0.1;
      }
      if (command == 'FD' && Turtle.penDownValue) {
        Turtle.ctxScratch.lineTo(Turtle.x, Turtle.y + bump);
        Turtle.ctxScratch.stroke();
        if (distance) {
          var colour = Turtle.ctxScratch.strokeStyle.toLowerCase();
          if (Turtle.coloursUsed.indexOf(colour) == -1) {
            Turtle.coloursUsed.push(colour);
          }
        }
      }
      break;
    case 'RT':  // Right Turn
      Turtle.heading += values[0];
      Turtle.heading %= 360;
      if (Turtle.heading < 0) {
        Turtle.heading += 360;
      }
      break;
    case 'DP':  // Draw Print
      Turtle.ctxScratch.save();
      Turtle.ctxScratch.translate(Turtle.x, Turtle.y);
      Turtle.ctxScratch.rotate(2 * Math.PI * (Turtle.heading - 90) / 360);
      Turtle.ctxScratch.fillText(values[0], 0, 0);
      Turtle.ctxScratch.restore();
      break;
    case 'DF':  // Draw Font
      Turtle.ctxScratch.font = values[2] + ' ' + values[1] + 'pt ' + values[0];
      break;
    case 'PU':  // Pen Up
      Turtle.penDownValue = false;
      break;
    case 'PD':  // Pen Down
      Turtle.penDownValue = true;
      break;
    case 'PW':  // Pen Width
      Turtle.ctxScratch.lineWidth = values[0];
      break;
    case 'PC':  // Pen Colour
      Turtle.ctxScratch.strokeStyle = values[0];
      Turtle.ctxScratch.fillStyle = values[0];
      break;
    case 'HT':  // Hide Turtle
      Turtle.visible = false;
      break;
    case 'ST':  // Show Turtle
      Turtle.visible = true;
      break;
  }
};

/**
 * The range of outcomes for evaluating the colour used on the current level.
 * @type {number}
 */
Turtle.ColourResults = {
  OK: 0,
  NONE: 1,               // No colours were used.
  FORBIDDEN_DEFAULT: 2,  // Default colour (black) was used but not permitted.
  TOO_FEW: 3,            // Fewer distinct colours were used than required.
  EXTRA: 4               // All of the required colours and more were used.
  // There is no value for "wrong colour" because we use
  // the name of the colour (as a string) instead.
};

/**
 * Returns the name of the property key in Turtle.Colours whose value
 * is the given hex string.
 * @param {!string} hex The JavaScript representation of a hexadecimal
 *        value (such as "#0123ab").  The hex digits a-f must be lower-case.
 * @return {string} The name of the colour, or "UNKNOWN".  The latter
 *        should only be returned if the colour was not from Turtle.Colours.
 */
Turtle.hexStringToColourName = function(hex) {
  for (var name in Turtle.Colours) {
    if (Turtle.Colours[name] == hex) {
      return name.toLowerCase();
    }
  }
  return 'UNKNOWN';  //  This should not happen.
};

/**
 * Check whether any required colours are present.
 * This uses Turtle.REQUIRED_COLOURS and Turtle.coloursUsed.
 * @return {number|string} The appropriate value in Turtle.ColourResults or
 *     the name of a missing required colour.
 */
Turtle.checkRequiredColours = function() {
  if (!Turtle.REQUIRED_COLOURS) {
    return Turtle.ColourResults.OK;
  }
  if (Turtle.coloursUsed == 0) {
    return Turtle.ColourResults.NONE;
  } else if (typeof Turtle.REQUIRED_COLOURS == 'string') {
    for (var i = 0; i < Turtle.coloursUsed.length; i++) {
      if (Turtle.coloursUsed[i] == Turtle.REQUIRED_COLOURS) {
        return Turtle.coloursUsed.length == 1 ? Turtle.ColourResults.OK :
            Turtle.ColourResults.EXTRA;
      }
      return Turtle.hexStringToColourName(Turtle.REQUIRED_COLOURS);
    }
  } else if (Turtle.REQUIRED_COLOURS == 1) {
    // Any colour but black is acceptable.
    if (Turtle.coloursUsed.length == 1 &&
        Turtle.coloursUsed[0] == Turtle.Colours.BLACK) {
      return Turtle.ColourResults.FORBIDDEN_DEFAULT;
    } else {
      return Turtle.ColourResults.OK;
    }
  } else {
    // Turtle.REQUIRED_COLOURS must be a number greater than 1.
    var surplus = Turtle.coloursUsed.length - Turtle.REQUIRED_COLOURS;
    if (surplus > 0) {
      return Turtle.ColourResult.EXTRA;
    } else if (surplus == 0) {
      return Turtle.ColourResults.OK;
    } else {
      return Turtle.ColourResults.TOO_FEW;
    }
  }
};

/**
 * Verify if the answer is correct.
 * If so, move on to next level.
 */
Turtle.checkAnswer = function() {
  // Compare the Alpha (opacity) byte of each pixel in the user's image and
  // the sample answer image.
  var userImage =
      Turtle.ctxScratch.getImageData(0, 0, Turtle.WIDTH, Turtle.HEIGHT);
  var answerImage =
      Turtle.ctxAnswer.getImageData(0, 0, Turtle.WIDTH, Turtle.HEIGHT);
  var len = Math.min(userImage.data.length, answerImage.data.length);
  var delta = 0;
  // Pixels are in RGBA format.  Only check the Alpha bytes.
  for (var i = 3; i < len; i += 4) {
    // Check the Alpha byte.
    if ((userImage.data[i] == 0) != (answerImage.data[i] == 0)) {
      delta++;
    }
  }
  BlocklyApps.levelComplete = Turtle.isCorrect(delta);
  var feedbackType = BlocklyApps.getTestResults();
  BlocklyApps.setErrorFeedback(feedbackType);

  BlocklyApps.report('turtle', BlocklyApps.LEVEL_ID, BlocklyApps.LEVEL,
                     BlocklyApps.levelComplete,
                     BlocklyApps.stripCode(Turtle.code));
  if (BlocklyApps.levelComplete) {
    if (BlocklyApps.PAGE == 3 &&
        (BlocklyApps.LEVEL == 7 || BlocklyApps.LEVEL == 8)) {
      // Store the blocks for the next level.
      var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
      var text = Blockly.Xml.domToText(xml);
      window.sessionStorage.turtle3Blocks = text;
    }
  }

  // Only check and mention colour if there is no more serious problem.
  if (feedbackType == BlocklyApps.TestResults.TOO_MANY_BLOCKS_FAIL ||
      feedbackType == BlocklyApps.TestResults.ALL_PASS) {
    var colourResult = Turtle.checkRequiredColours();
    if (colourResult != Turtle.ColourResults.OK) {
      var message;
      if (colourResult == Turtle.ColourResults.EXTRA) {
        message = BlocklyApps.getMsg('extraColours');
      } else {
        feedbackType = BlocklyApps.TestResults.OTHER_1_STAR_FAIL;
        if (colourResult == Turtle.ColourResults.FORBIDDEN_DEFAULT) {
          message = BlocklyApps.getMsg('notBlackColour');
        } else if (colourResult == Turtle.ColourResults.TOO_FEW) {
          message = BlocklyApps.getMsg('tooFewColours');
          message = message.replace('%1', Turtle.REQUIRED_COLOURS);
          message = message.replace('%2', Turtle.coloursUsed.length);
        } else if (typeof colourResult == 'string') {
          message = BlocklyApps.getMsg('wrongColour').replace('%1', colourResult);
        }
      }
      BlocklyApps.setTextForElement('colourFeedback', message).style.display =
          'list-item';
    }
  }

  BlocklyApps.showDialogAndFeedback(feedbackType);
};

/**
 * Goes to the next level from an interstitial screen.
 */
Turtle.continueButtonClick = function() {
  document.getElementById('continueButton').style.display = 'none';
  window.location = window.location.protocol + '//' + window.location.host +
      window.location.pathname + '?page=' + BlocklyApps.PAGE + '&level=' +
      BlocklyApps.LEVEL;
};

// Turtle API.

Turtle.moveForward = function(distance, id) {
  BlocklyApps.log.push(['FD', distance, id]);
};

Turtle.moveBackward = function(distance, id) {
  BlocklyApps.log.push(['FD', -distance, id]);
};

Turtle.jumpForward = function(distance, id) {
  BlocklyApps.log.push(['JF', distance, id]);
};

Turtle.jumpBackward = function(distance, id) {
  BlocklyApps.log.push(['JF', -distance, id]);
};

Turtle.turnRight = function(angle, id) {
  BlocklyApps.log.push(['RT', angle, id]);
};

Turtle.turnLeft = function(angle, id) {
  BlocklyApps.log.push(['RT', -angle, id]);
};

Turtle.penUp = function(id) {
  BlocklyApps.log.push(['PU', id]);
};

Turtle.penDown = function(id) {
  BlocklyApps.log.push(['PD', id]);
};

Turtle.penWidth = function(width, id) {
  BlocklyApps.log.push(['PW', Math.max(width, 0), id]);
};

Turtle.penColour = function(colour, id) {
  BlocklyApps.log.push(['PC', colour, id]);
};

Turtle.hideTurtle = function(id) {
  BlocklyApps.log.push(['HT', id]);
};

Turtle.showTurtle = function(id) {
  BlocklyApps.log.push(['ST', id]);
};
