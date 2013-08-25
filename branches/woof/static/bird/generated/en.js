// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">a visual programming environment</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">See generated JavaScript code.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Run Program</span><span id="resetProgram">Reset</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Procedures</span><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof birdpage == 'undefined') { var birdpage = {}; }


birdpage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_moveForward">move forward</span><span id="Bird_turnLeft">turn left</span><span id="Bird_turnRight">turn right</span><span id="Bird_doCode">do</span><span id="Bird_elseCode">else</span><span id="Bird_pathAhead">if path ahead</span><span id="Bird_pathLeft">if path to the left</span><span id="Bird_pathRight">if path to the right</span><span id="Bird_repeatUntil">repeat until</span><span id="Bird_moveForwardTooltip">Moves the player forward one space.</span><span id="Bird_turnTooltip">Turns the player left or right by 90 degrees.</span><span id="Bird_ifTooltip">If there is a path in the specified direction, then do some actions.</span><span id="Bird_ifelseTooltip">If there is a path in the specified direction, then do the first block of actions.  Otherwise, do the second block of actions.</span><span id="Bird_whileTooltip">Repeat the enclosed actions until finish point is reached.</span><span id="Bird_nextLevel">Congratulations! Are you ready to proceed to level %1?</span><span id="Bird_finalLevel">Congratulations! You have solved the final level.</span></div>';
};


birdpage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = birdpage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Bird</span> &nbsp; ';
  for (var i149 = 1; i149 < 11; i149++) {
    output += ' ' + ((i149 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i149) + '</span>' : (i149 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i149) + '">' + soy.$$escapeHtml(i149) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i149) + '">' + soy.$$escapeHtml(i149) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select></td></tr></table><div id="visualization"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Stack a couple of \'move forward\' blocks together to help me reach the goal.';
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
      output += 'Breaking a problem into two pieces can make things easier.';
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
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="450px"></svg></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button class="notext" title="See generated JavaScript code." onclick="BlocklyApps.showCode(this);"><img src="../media/1x1.gif" class="code icon21"></button><button id="linkButton" class="notext" title="Save and link to blocks." onclick="BlocklyStorage.link();"><img src="../media/1x1.gif" class="link icon21"></button></td><td><button id="runButton" class="primary" onclick="Bird.runButtonClick();" title="Makes the player do what the blocks say."><img src="../media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" onclick="Bird.resetButtonClick();" style="display: none" title="Put the player back at the start of the level."><img src="../media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript" src="../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + birdpage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData) + '<div id="dialogDone" class="dialogHiddenContent"><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"></div></div>';
  return output;
};


birdpage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


birdpage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return birdpage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>';
};
