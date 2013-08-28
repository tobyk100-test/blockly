// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">a visual programming environment</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">See generated JavaScript code. </span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the \\nworkspace. </span><span id="runProgram">Run Program</span><span id="resetProgram">Reset</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Procedures</span><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\n\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
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

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="moveForward">move forward</span><span id="turnLeft">turn left</span><span id="turnRight">turn right</span><span id="doCode">do</span><span id="elseCode">else</span><span id="pathAhead">if path ahead</span><span id="pathLeft">if path to the left</span><span id="pathRight">if path to the right</span><span id="repeatUntil">repeat until</span><span id="moveForwardTooltip">Move me forward one space.</span><span id="q3wrong">No - Try tracking my direction while following the program.</span><span id="q3right">That\'s right! Good job.</span><span id="q5wrong">No - Try tracking my direction while following the program.</span><span id="q5right">That\'s right! Good job.</span><span id="q9wrong">No - Try tracking my direction while following the program.</span><span id="q9right">That\'s right! Good job.</span><span id="turnTooltip">Turns me left or right by 90 degrees.</span><span id="ifTooltip">If there is a path in the specified direction, \\nthen do some actions. </span><span id="ifelseTooltip">If there is a path in the specified direction, \\nthen do the first block of actions. \\nOtherwise, do the second block of actions. </span><span id="whileTooltip">Repeat the enclosed actions until finish point \\nis reached. </span><span id="capacity0">You have<span id=\'capacityNumber\'>0</span> blocks left.</span><span id="capacity1">You have <span id=\'capacityNumber\'>1</span> block left.</span><span id="capacity2">You have <span id=\'capacityNumber\'>%1</span> blocks left.</span><span id="nextLevel">Congratulations! You have completed this level.</span><span id="finalLevel">Congratulations! You have solved the final level.</span><span id="oneTopBlock">On this level, you need to stack together all of the blocks in the white workspace.</span><span id="numBlocksNeeded">This level can be solved with %1 blocks.</span></div>';
};


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = mazepage.messages(null, null, opt_ijData) + '<table width="100%" style="border-bottom: 1px solid #DBDBDB;"><tr><td><h1><span id="title"><a href="https://sites.google.com/site/computersciencefirst/">CS First</a> : Maze</span> &nbsp; ';
  for (var i217 = 1; i217 < 11; i217++) {
    output += ' ' + ((i217 == opt_ijData.level) ? (i217 > 9) ? '<span class="selected doubleDigit tab">' + soy.$$escapeHtml(i217) + '</span>' : '<span class="selected tab">' + soy.$$escapeHtml(i217) + '</span>' : (i217 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i217) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i217) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i217) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i217) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select> &nbsp; <button id="pegmanButton" onmousedown="Maze.showPegmanMenu();"><img src="../media/1x1.gif"><span>&#x25BE;</span></button></td></tr></table><div id="levelFeedback"><div style="padding-bottom: 0.7ex;"><br><img class="stars feedback" id="star1" src="../star1.png"><img class="stars feedback" id="star2" src="../star2.png"><img class="stars feedback" id="star3" src="../star3.png"><ul id="levelFeedbackText"><span id="hintTitle" class="feedback" style="display: none; margin-left: -30px">Hint:</span><li id="nextLevelMsg" style="display: none; margin-left: -40px;">Congratulations! You have completed this level.</li><li id="finalLevelMsg" style="display: none; margin-left: -40px;">Congratulations! You have solved the final level.</li><li id="emptyBlocksError" class="feedback" style="display: none">Remove unused empty blocks.</li><li id="tooManyBlocksError" class="feedback" style="display: none">This level can be solved with <span id="idealNumberMessage"></span> blocks.</li><li id="tooManyBlocksError" class="feedback" style="display: none"></li><li id="tooFewBlocksError" class="feedback" style="display: none">You are using all of the necessary types of blocks, but try using more of these types of blocks to complete this level.</li>';
  switch (opt_ijData.level) {
    case 1:
      output += '<li id="moveForwardError1" class="feedback" style="display: none">The \'move forward\' block moves one space forward.</li><li id="moveForwardError2" class="feedback" style="display: none">Drag a \'move forward\' block from the toolbox to the workspace.</li>';
      break;
    case 2:
      output += '<li id="moveForwardError1" class="feedback" style="display: none">The \'move forward\' block moves one space forward.</li><li id="moveForwardError2" class="feedback" style="display: none">Drag a \'move forward\' block from the toolbox to the workspace.</li><li id="turnLeftError1" class="feedback" style="display: none">Use the \'turn left\' block when I need to turn to the left.</li><li id="turnLeftError2" class="feedback" style="display: none">Drag and snap the \'turn left\' block under a \'move forward\' block when I need to turn to the left.</li><li id="turnRightError1" class="feedback" style="display: none">Use the \'turn right\' block when I need to turn to the right.</li><li id="turnRightError2" class="feedback" style="display: none">Drag and snap the \'turn right\' block under a \'move forward\' block when I need to turn to the right.</li>';
      break;
    case 3:
      output += '<li id="moveForwardError1" class="feedback" style="display: none">The \'move forward\' block moves one block forward.</li><li id="moveForwardError2" class="feedback" style="display: none">Drag a \'move forward\' block from the toolbox to the workspace.</li><li id="whileError1" class="feedback" style="display: none">Notice the repetition in the path? Try using the \'repeat\' block which repeats the sequence of blocks inside it until, the player reaches the finish.</li><li id="whileError2" class="feedback" style="display: none">Drag and snap the \'repeat\' block around the \'move forward\' block.</li>';
      break;
    case 4:
      output += '<li id="moveForwardError1" class="feedback" style="display: none">The \'move forward\' block moves one block forward.</li><li id="moveForwardError2" class="feedback" style="display: none">Drag and snap a \'move forward\' block below a \'turn\' block so I can move in the new direction.</li><li id="turnError1" class="feedback" style="display: none">Use both a \'turn left\' and a \'turn right\' block on this level.</li><li id="turnError2" class="feedback" style="display: none">Drag and snap a \'turn\' block under a \'move forward\' block when I need to change directions.</li><li id="whileError1" class="feedback" style="display: none">Notice the repetition in the path? Try using the \'repeat\' block which repeats the sequence of blocks inside it until, the player reaches the finish.</li><li id="whileError2" class="feedback" style="display: none">Drag and snap the \'repeat\' block around the other blocks.</li>';
      break;
    case 5:
    case 6:
      output += '<li id="moveForwardError1" class="feedback" style="display: none">The \'move forward\' block moves one block forward.</li><li id="moveForwardError2" class="feedback" style="display: none">Drag and snap a \'move forward\' block below a \'turn\' block so I can move in the new direction.</li><li id="turnLeftError1" class="feedback" style="display: none">Use the \'turn left\' block when I need to turn to the left.</li><li id="turnLeftError2" class="feedback" style="display: none">Drag and snap the \'turn left\' block inside an \'if\' block.</li><li id="whileError1" class="feedback" style="display: none">Notice the repetition in the path? Try using the \'repeat\' block which repeats the sequence of blocks inside it until, the player reaches the finish.</li><li id="whileError2" class="feedback" style="display: none">Drag and snap the \'repeat\' block around the other blocks.</li><li id="isPathLeftError1" class="feedback" style="display: none">Use the if block to turn left if there is a path to the left.</li><li id="isPathLeftError2" class="feedback" style="display: none">Place a turn left block inside the \'if\' block to turn left if there is a path to the left.</li>';
      break;
    case 7:
      output += '<li id="moveForwardError1" class="feedback" style="display: none">The \'move forward\' block moves one block forward.</li><li id="moveForwardError2" class="feedback" style="display: none">Drag and snap a \'move forward\' block below a turn block so I can move in the new direction.</li><li id="turnRightError1" class="feedback" style="display: none">Use the \'turn right\' block when I need to turn to the right.</li><li id="turnRightError2" class="feedback" style="display: none">Drag and snap the \'turn right\' block inside an \'if\' block.</li><li id="whileError1" class="feedback" style="display: none">Notice the repetition in the path? Try using the \'repeat\' block which repeats the sequence of blocks inside it until, the player reaches the finish.</li><li id="whileError2" class="feedback" style="display: none">Drag and snap the \'repeat\' block around the other blocks.</li>';
      break;
    case 8:
      output += '<li id="isPathLeftError1" class="feedback" style="display: none">Use the \'if\' block to turn left if there is a path to the left.</li><li id="isPathLeftError2" class="feedback" style="display: none">Place a \'turn left\' block inside the \'if\' block to turn left if there is a path to the left.</li><li id="isPathRightError1" class="feedback" style="display: none">Use the \'if\' block to turn right if there is a path to the right.</li><li id="isPathRightError2" class="feedback" style="display: none">Place a \'turn right\' block inside the \'if\' block to turn right if there is a path to the right.</li>';
      break;
    case 9:
      output += '<li id="turnLeftError1" class="feedback" style="display: none">Use the \'turn left\' block when I need to turn to the left.</li><li id="turnLeftError2" class="feedback" style="display: none">Drag and snap the \'turn left\' block inside the \'if-else\' block.</li><li id="ifElseError1" class="feedback" style="display: none">An \'if-else\' block will run the else statement when the if statement is not true."</li><li id="ifElseError2" class="feedback" style="display: none">An \'if-else\' block will run the else statement when the if statement is not true."</li><li id="isPathForwardError1" class="feedback" style="display: none">Use an \'if-else\' block to go straight if there is a path ahead and turn if there is no path ahead.</li><li id="isPathForwardError2" class="feedback" style="display: none">Use an \'if-else\' block to go straight if there is a path ahead and turn if there is no path ahead.</li><li id="whileError1" class="feedback" style="display: none">Notice the repetition in the path? Try using the \'repeat\' block which repeats the sequence of blocks inside it until, the player reaches the finish.</li><li id="whileError2" class="feedback" style="display: none">Drag and snap the \'repeat\' block around all of your blocks.</li>';
      break;
    case 10:
      output += '<li id="isPathForwardError1" class="feedback" style="display: none">Use an \'if-else\' block to go straight if there is a path ahead and turn if there is no path ahead.</li><li id="isPathForwardError2" class="feedback" style="display: none">Use an \'if-else\' block to go straight if there is a path ahead and turn if there is no path ahead.</li><li id="ifElseError1" class="feedback" style="display: none">An \'if-else\' block will run the else statement when the if statement is not true."</li><li id="ifElseError2" class="feedback" style="display: none">An \'if-else\' block will run the else statement when the \'if\' statement is not true.</li><li id="whileError1" class="feedback" style="display: none">Notice the repetition in the path? Try using the \'repeat\' block which repeats the sequence of blocks inside it until, the player reaches the finish.</li><li id="whileError2" class="feedback" style="display: none">Drag and snap the \'repeat\' block around all of your blocks.</li>';
      break;
  }
  output += '</ul><div id="interstitial" style="display: none;"><div id="reinfbubble"><span id="reinfMsg">';
  switch (opt_ijData.level) {
    case 2:
      output += 'A repeat block repeats the blocks inside it until I reach the red marker.';
      break;
    case 3:
      output += 'Which direction am I facing after this program ends?';
      break;
    case 4:
      output += 'Here is an if block: I will turn left if there is a path to the left.';
      break;
    case 5:
      output += 'We can place \'if\' blocks inside \'repeat\' blocks. Where am I when this program ends? Click on the correct picture below.';
      break;
    case 6:
      output += 'Repeat blocks allow me to do an action multiple times without additional blocks. \'if\' blocks allow me to do an action based on my surroundings.';
      break;
    case 8:
      output += 'Here is an \'if-else\' block: I move forward if there is a path ahead, but I turn left if not.';
      break;
    case 9:
      output += 'Will the blocks below move me to the red marker?';
      break;
  }
  output += '</span></div><img id="pegman_bubble" height=42 width=55 src="pegman_bubble.png">';
  switch (opt_ijData.level) {
    case 2:
      output += '<p><img style="margin-left: 110px;" src="repeat_block.png"><br><iframe src="" width="560" height="315"></iframe>';
      break;
    case 3:
      output += '<p><img border=2 src="dirs.png" style="margin-right: 10px;"><img src="dirs2.png"><br>';
      break;
    case 4:
      output += '<p><img style="margin-left: 110px;" src="ifblock.png"><br><iframe src="" width="560" height="315"></iframe>';
      break;
    case 5:
      output += '<p><img style="margin-top: 10px;" border=2 src="repeat_block2.png"><br>';
      break;
    case 8:
      output += '<p><img style="margin-left: 60px; height: 150px; width: 260px;" src="if-else2.png"><br>';
      break;
    case 9:
      output += '<p><img style="margin-left: 10px; height: 350px; width: 490px;" src="ifelse.png"><br>';
      break;
  }
  switch (opt_ijData.level) {
    case 3:
      output += '<p class="quiz"><input type="radio" name="q3" id="q31" onclick="BlocklyApps.showReinfHelp(' + soy.$$escapeHtml(opt_ijData.level) + ', \'q3w\')"><label for="q31" style="font-weight: bold">N</label><br><input type="radio" name="q3" id="q32" onclick="BlocklyApps.showReinfHelp(' + soy.$$escapeHtml(opt_ijData.level) + ', \'q3w\')"><label for="q32" style="font-weight: bold">E</label><br><input type="radio" name="q3" id="q33" onclick="BlocklyApps.showReinfHelp(' + soy.$$escapeHtml(opt_ijData.level) + ', \'q3w\')"><label for="q33" style="font-weight: bold">S</label><br><input type="radio" name="q3" id="q34" onclick="BlocklyApps.showReinfHelp(' + soy.$$escapeHtml(opt_ijData.level) + ', \'q3r\')"><label for="q34" style="font-weight: bold">W</label><br></p>';
      break;
    case 5:
      output += '<p class="quiz"><img style="margin-left: 50px;" src="repeat_blocka1.png" onclick="BlocklyApps.showReinfHelp(' + soy.$$escapeHtml(opt_ijData.level) + ', \'q5w\')"><img style="margin-left: 50px;" src="repeat_blocka2.png" onclick="BlocklyApps.showReinfHelp(' + soy.$$escapeHtml(opt_ijData.level) + ', \'q5r\')"><img style="margin-left: 50px;" src="repeat_blocka3.png" onclick="BlocklyApps.showReinfHelp(' + soy.$$escapeHtml(opt_ijData.level) + ', \'q5w\')"></p>';
      break;
    case 9:
      output += '<p class="quiz"><input type="radio" name="q9" id="q91" onClick="BlocklyApps.showReinfHelp(' + soy.$$escapeHtml(opt_ijData.level) + ', \'q9r\')"><label for="q91" style="font-weight: bold">Yes</label><br><input type="radio" name="q9" id="q92" onClick="BlocklyApps.showReinfHelp(' + soy.$$escapeHtml(opt_ijData.level) + ', \'q9w\')"><label for="q92" style="font-weight: bold">No</p>';
      break;
  }
  output += '<div id="reinfDone"><div style="padding-bottom: 0.7ex; text-align:center;"><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div></div></div><br><div style="text-align: center"><button id="tryAgainButton" class="launch" style="display: none" onclick="BlocklyApps.displayInterstitialOrCloseModalDialog(false, ' + soy.$$escapeHtml(opt_ijData.level) + ', ' + soy.$$escapeHtml(opt_ijData.skin) + ');">Try again</button><button id="continueButton" class="launch" style="display: none" onclick="BlocklyApps.displayInterstitialOrCloseModalDialog(true, ' + soy.$$escapeHtml(opt_ijData.level) + ', ' + soy.$$escapeHtml(opt_ijData.skin) + ');">Continue</button></div></div></div><div id="visualization"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'A program is a sequence of statements. Stack a couple of \'move forward\' blocks together to help me reach the goal.';
      break;
    case 2:
      output += 'What should I do to follow the path?';
      break;
    case 3:
      output += 'Computers have limited memory. Reach the end of this path using only two blocks.';
      break;
    case 4:
      output += 'Reach the goal using only five blocks.';
      break;
    case 5:
      output += 'I will have to turn left when I cannot go straight. Use an \'if\' block to see if their is a path in another direction.';
      break;
    case 6:
      output += 'An \'if\' condition will do something only if the condition is true.  Try turning left if there is a path to the left.';
      break;
    case 7:
      output += 'A small change to the blocks from the previous maze will solve this level.';
      break;
    case 8:
      output += 'You can use more than one \'if\' statement.';
      break;
    case 9:
      output += 'If-else blocks will do one thing or the other.';
      break;
    case 10:
      output += 'Use the \'if-else\' block to help me get out of the maze!';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400" style="padding-top: 10px;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button class="notext" title="See generated JavaScript code. " onclick="BlocklyApps.showCode();"><img src=\'../media/1x1.gif\' alt="code" class="code icon21"></button><button id="linkButton" class="notext" style="display: none;" title="Save and link to blocks." onclick="BlocklyStorage.link();"><img src=\'../media/1x1.gif\' alt="link" class="link icon21"></button></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();"><img src="../media/1x1.gif" class="run icon21">Run</button></button><button id="resetButton" class="launch" onclick="BlocklyApps.resetButtonClick();" style="display: none"><img src="../media/1x1.gif" class="stop icon21">Reset</button></td></tr></table><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript" src="../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div><div id="shadow"></div>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 5) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 5 && opt_ijData.level < 9) ? '<block type="maze_if"></block>' : '') + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') + '</xml>';
};
