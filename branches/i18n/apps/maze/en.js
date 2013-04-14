// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<script>var MSG = {moveForward: "move forward", move: "move", forward: "forward", backward: "backward", turn: "turn", left: "left", right: "right", randomly: "randomly", path: "path", ifPath: "true path", do: "do", else: "else", ahead: "ahead", toTheLeft: "to the left", toTheRight: "to the right", behind: "behind", repeatUntilFinished: "repeat until finished", getX: "get X position", getY: "get Y position", getDirection: "get direction", moveForwardTooltip: "Moves Pegman forward one space.", moveTooltip: "Moves Pegman forward or backward one space.", turnTooltip: "Turns Pegman left or right by 90 degrees.", ifTooltip: "If there is a path in the specified direction, \\nthen do some actions.", ifelseTooltip: "If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions.", whileTooltip: "Repeat the enclosed actions until finish point is reached.", isPathTooltip: "Returns true if there is a path in the specified direction.", getXTooltip: "Returns Pegman\'s horizontal position. Left edge is 1, right edge is 8.", getYTooltip: "Returns Pegman\'s vertical position. Top edge is 1, bottom edge is 8.", getDirectionTooltip: "Retuns Pegman\'s direction.  North: 0, East: 1, South: 2, West: 3.", capacity0: "You have <span id=\'capacityNumber\'>0</span> blocks left.", capacity1: "You have <span id=\'capacityNumber\'>1</span> block left.", capacity2: "You have <span id=\'capacityNumber\'>%1</a> blocks left.", nextLevel: "Congratulations! Are you ready to proceed to level %1?", finalLevel: "Congratulations! You have solved the final level.", oneTopBlock: "On this level, you need to stack together all of the blocks in the white workspace."};<\/script><table width="100%" height="100%"><tr><td width="410" valign="top"><h1><a href="http://blockly.googlecode.com/">Blockly</a> &gt; <a href="../index.html">Apps</a> &gt; Maze</h1><p class="levelLine">  Level: &nbsp;';
  for (var i154 = 1; i154 < 11; i154++) {
    output += (i154 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i154) + '</span>' : '<a class="tab" href="?level=' + soy.$$escapeHtml(i154) + '">' + soy.$$escapeHtml(i154) + '</a>';
  }
  output += '</p><div id="bubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'A program is a sequence of blocks.  Stack a couple of \'move forward\' blocks together to help me reach the goal.';
      break;
    case 2:
      output += 'What is the sequence of steps to follow this path?';
      break;
    case 3:
      output += 'Computers have limited memory.  Reach the end of this path using only two blocks.  Use \'repeat\' to run a block more than once.';
      break;
    case 4:
      output += 'Reach the goal using only five blocks.';
      break;
    case 5:
      output += 'Pegman will have to turn left when he cannot go straight.';
      break;
    case 6:
      output += 'An \'if\' block will do something only if the condition is true.  Try turning left if there is a path to the left.';
      break;
    case 7:
      output += 'This maze looks more complicated than the previous one, but it is not.';
      break;
    case 8:
      output += 'You can use more than one \'if\' block.';
      break;
    case 9:
      output += 'If-else blocks will do one thing or the other.';
      break;
    case 10:
      output += 'Can you solve this complicated maze?  Try following the left-hand wall.  Advanced programmers only!';
      break;
  }
  output += '</div><div id="capacity"></div></div><img id="pegman_bubble" height=42 width=55 src="pegman_bubble.png"><div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"></div><table width="100%"><tr><td style="width: 190px; text-align: center"><button title="See generated JavaScript code." onclick="Blockly.Apps.showCode();"><img src=\'../../media/1x1.gif\' class="code"></button><button id="linkButton" title="Save and link to blocks." onclick="BlocklyStorage.link();"><img src=\'../../media/1x1.gif\' class="link"></button><button id="randomizeButton" title="Randomize start and finish markers. onclick="Maze.randomize();" style="display: none"><img src=\'../../media/1x1.gif\' class="random"></button></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();">Run Program</button><button id="resetButton" class="launch" onclick="Maze.resetButtonClick();" style="display: none">Reset</button></td></tr></table></td><td valign="top"><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../generators/javascript.js"><\/script><script type="text/javascript" src="../common.js"><\/script><script type="text/javascript">Blockly.Apps.loadLanguageScripts(languageSrc);<\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div></td></tr></table>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<!-- Fix on sync.  --><xml id="toolbox" style="display: none"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level > 4) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 7) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
