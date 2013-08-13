// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="MSG" style="display: none"><span id="moveForward">move forward</span><span id="putDownBall">fill in earth</span><span id="putDown5">put down 5</span><span id="pickUpBall">dig up earth</span><span id="while">while</span><span id="ballsPresent">dirt mound is present</span><span id="noBallsPresent">hole is present</span><span id="turnLeft">turn left</span><span id="turnRight">turn right</span><span id="doCode">do</span><span id="elseCode">else</span><span id="pathAhead">path ahead</span><span id="pathLeft">path to the left</span><span id="pathRight">path to the right</span><span id="noPathAhead">path is blocked</span><span id="noPathLeft">no path to the left</span><span id="noPathRight">no path to the right</span><span id="repeatUntil">repeat until path is blocked</span><span id="moveForwardTooltip">Move me forward one space.</span><span id="q4wrong">No - Try tracking my direction while following the program.</span><span id="q4right">That\'s right! Good job.</span><span id="q5wrong">No - Try tracking my direction while following the program.</span><span id="q5right">You got it right!</span><span id="q10wrong">No - Try tracking my direction while following the program.</span><span id="q10right">That\'s right!</span><span id="turnTooltip">Turns me left or right by 90 degrees.</span><span id="ifTooltip">If there is a path in the specified direction, then do some actions.</span><span id="ifelseTooltip">If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions.</span><span id="whileTooltip">Repeat the enclosed actions until finish point is reached.</span><span id="capacity0">You have<span id=\'capacityNumber\'>0</span> blocks left.</span><span id="capacity1">You have <span id=\'capacityNumber\'>1</span> block left.</span><span id="capacity2">You have <span id=\'capacityNumber\'>%1</span> blocks left.</span><span id="nextLevel">Congratulations! You have completed this level.</span><span id="finalLevel">Congratulations! You have solved the final level.</span><span id="oneTopBlock">On this level, you need to stack together all of the blocks in the white workspace.</span><span id="putdownTower">put down tower</span><span id="pickupTower">pickup tower</span></div><div id="COMMON_MSG" style="display: none"><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved Blockly file.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span></div><table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Maze</span> &nbsp; ';
  for (var i169 = 1; i169 < 17; i169++) {
    output += ' ' + ((i169 == opt_ijData.level) ? (i169 > 9) ? '<span class="selected doubleDigit tab">' + soy.$$escapeHtml(i169) + '</span>' : '<span class="selected singleDigit tab">' + soy.$$escapeHtml(i169) + '</span>' : (i169 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i169) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i169) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i169) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i169) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select> &nbsp; <button id="pegmanButton" onmousedown="Maze.showPegmanMenu();"><img src="../media/1x1.gif"><span>&#x25BE;</span></button></td></tr></table><div id="levelFeedback"><div style="padding-bottom: 0.7ex;"><br><textarea id="levelFeedbackText" rows=2 cols=40 style="resize: none; border: 0; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;">';
  switch (opt_ijData.level) {
    case 1:
    case 2:
    case 4:
      output += 'Use only the blocks you need to get to complete the level.';
      break;
    case 3:
      output += 'Try using the repeat block so you can complete the level with only 2 blocks.';
      break;
    case 5:
    case 6:
    case 7:
    case 8:
      output += 'Try using the repeat block.';
      break;
    case 9:
    case 10:
      output += 'Use two \'if\' statements so I can move left and right when needed.';
      break;
    case 11:
      output += 'This level requires only four blocks if you use an if-else block.';
      break;
  }
  output += '</textarea><div id="interstitial" style="display: none;">' + ((opt_ijData.level == 2) ? '<img style="margin-left: 110px;" src="repeat_block.png">' : '') + '<br><div id="reinfbubble"><span id="reinfMsg">';
  switch (opt_ijData.level) {
    case 2:
      output += 'A repeat block repeats the blocks inside it until I reach the red marker.';
      break;
    case 3:
      output += 'You have just written some programs. Good job!';
      break;
    case 4:
      output += 'Which direction am I facing after this program ends?';
      break;
    case 5:
      output += 'Here is an if block: I will turn left if there is a path to the left.';
      break;
    case 6:
      output += 'We can place \'if\' blocks inside \'repeat\' blocks. Where am I when this program ends? Click on the correct picture below.';
      break;
    case 7:
      output += 'Repeat blocks allow me to do an action multiple times without additional blocks. \'if\' blocks allow me to do an action based on my surroundings.';
      break;
    case 9:
      output += 'Here is an \'if-else\' block: I move forward if there is a path ahead, but I turn left if not.';
      break;
    case 10:
      output += 'Will the blocks below move me to the red marker?';
      break;
  }
  output += '</span></div><img id="pegman_bubble" height=42 width=55 src="pegman_bubble.png">' + ((opt_ijData.level == 4) ? '<p><img border=2 src="dirs.png">&nbsp;<img src="dirs2.png"><br>' : '') + ((opt_ijData.level == 5) ? '<p><img style="margin-left: 110px;" src="ifblock.png"><br>' : '') + ((opt_ijData.level == 6) ? '<img style="margin-top: 10px;" border=2 src="repeat_block2.png"><br>' : '') + ((opt_ijData.level == 9) ? '<p><img style="margin-left: 60px; height: 150px; width: 260px;" src="if-else2.png"><br><br>' : '') + ((opt_ijData.level == 10) ? '<p><img style="margin-left: 10px; height: 350px; width: 490px;" src="ifelse.png"><br>' : '') + ((opt_ijData.level == 4) ? '<p><input type="radio" name="q4" id="q41" onclick="Maze.showReinfHelp(\'q4w\')"><span style="font-weight: bold"> N</span><br><input type="radio" name="q4" id="q42" onclick="Maze.showReinfHelp(\'q4w\')"><span style="font-weight: bold"> E</span><br><input type="radio" name="q4" id="q43" onclick="Maze.showReinfHelp(\'q4w\')"><span style="font-weight: bold"> S</span><br><input type="radio" name="q4" id="q44" onclick="Maze.showReinfHelp(\'q4r\')"><span style="font-weight: bold"> W</span><br><br></p><div id="shadow"></div><div id="reinfDone"><div style="padding-bottom: 0.7ex;"><div style="text-align: center;" id="reinfFeedbackImage"></div><br><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div><div style="text-align: center; padding-top: 1ex; padding-right: 3ex"><button id="okButton" class="launch" onclick="Maze.hideReinfHelp()&nbsp"><span>OK</span></button></div></div>' : '') + ((opt_ijData.level == 6) ? '<p><img style="margin-left: 30px;" src="repeat_blocka1.png" onclick="Maze.showReinfHelp(\'q5w\')"><img style="margin-left: 20px;" src="repeat_blocka2.png" onclick="Maze.showReinfHelp(\'q5r\')"><img style="margin-left: 20px;" src="repeat_blocka3.png" onclick="Maze.showReinfHelp(\'q5w\')"></p><div id="shadow"></div><div id="reinfDone"><div style="padding-bottom: 0.7ex"><div style="text-align: center;" id="reinfFeedbackImage"></div><br><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div><div style="text-align: center; padding-top: 1ex; padding-right: 3ex;"><button id="okButton" class="launch" onclick="Maze.hideReinfHelp()"><span>OK</span></button></div></div>' : '') + ((opt_ijData.level == 10) ? '<p><input type="radio" name="q8" id="q81" onClick="Maze.showReinfHelp(\'q10r\')"><span style="font-weight: bold"> Yes</span><br><input type="radio" name="q8" id="q82" onClick="Maze.showReinfHelp(\'q10w\')"><span style="font-weight: bold"> No</span><br><br></p><div id="shadow"></div><div id="reinfDone"><div style="padding-bottom: 0.7ex;"><div style="text-align:center;" id="reinfFeedbackImage"></div><br><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div><div style="text-align: center; padding-top: 1ex; padding-right: 3ex;"><button id="okButton" class="launch" onclick="Maze.hideReinfHelp()"><span>OK</span></button></div></div>' : '') + '</div><br><br><div style="text-align: center"><button id="tryLevelAgainButton" class="launch" style="display: none" onclick="Maze.closeDialogButtonClick(false);">Try again</button><button id="nextLevelButton" class="launch" style="display: none" onclick="Maze.closeDialogButtonClick(true);">Continue</button></div></div></div><div id="visualization"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Write a program to have Karel go to the tennis ball and pick it up.';
      break;
    case 2:
      output += 'Write a program to have karel create a short stack of tennis balls. Karel should move one spot, put down two tennis balls, and then move again.';
      break;
    case 3:
      output += 'Follow the yellow ball road and pick up balls on the road! Simple. While Karel is on top of a ball, Karel should pick up the ball and move once. At the end of the program, Karel will have reached the end of the road and stop.';
      break;
    case 4:
      output += 'Lay down a row of tennis balls using a while loop.';
      break;
    case 5:
      output += 'Pick up the row of tennis balls using a while loop.';
      break;
    case 6:
      output += 'There is a stack of 10 tennis balls in front of karel. Have karel move to the stack, take all of the tennis balls, and then move one more time. Use a for loop!';
      break;
    case 7:
      output += 'Lay down a row of tennis balls using a while loop. At each position, put down a stack of 5 balls.';
      break;
    case 8:
      output += 'Try to lay down a square of tennis balls using a for loop.';
      break;
    case 9:
      output += 'Let Karel move to the end of the path, and pick up balls on the road. If there is a ball in the first spot, pick up the ball, and move once. Otherwise, simply move once.';
      break;
    case 10:
      output += 'You are given a new block that lets Karel put down 5 balls. It is definition is shown in the workspace. Don\'t delete it! Try using the new block to let Karel put down 5 balls, and move to the destination.';
      break;
    case 11:
      output += 'Lay down a row of tennis balls using a while loop. At each position, put down a stack of 5 balls by calling the new block.';
      break;
    case 12:
      output += 'Let\'s try defining your own function of putting down 7 balls. Lay down a sequence of 7 balls in diagonol.';
      break;
    case 13:
      output += 'Karel needs to pick up a stack of balls on the 2nd, 4th, and 6th columns. Each stack of balls should have three balls. Create a new block called "pick up three balls" to help karel solve this problem.';
      break;
    case 14:
      output += 'You are given two new blocks, "pick up the ball tower" and "put down the ball tower" . Try using them to solve this problem!';
      break;
    case 15:
      output += 'Write a program to have karel jump over each of the hurdles, pick up the balls in the dip, and end up up at the other end of the world. You must use for loops and define the new block "jump hurdle" in this program.';
      break;
    case 16:
      output += 'Write a program that has Karel run to the other side of world, jumping over all of the hurdles, and collecting balls along its ways. However, the hurdles can be in random locations. Try defining the "jump hurdle" block to help Karel to solve the problem.';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button title="See generated JavaScript code." onclick="BlocklyApps.showCode();"><img src=\'../media/1x1.gif\' class="code icon21"></button><button id="linkButton" title="Save and link to blocks." onclick="BlocklyStorage.link();"><img src=\'../media/1x1.gif\' class="link icon21"></button></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();"><img src="../media/1x1.gif" class="run icon21">  Run Program</button></button><button id="resetButton" class="launch" onclick="Maze.resetButtonClick();" style="display: none"><img src="../media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript" src="../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div><div id="shadow"></div>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block><block type="maze_pickUpBall"></block>' + ((opt_ijData.level > 1) ? '<block type="maze_putDownBall"></block>' + ((opt_ijData.level > 2) ? '<block type="maze_untilBlocked"></block>' + ((opt_ijData.level > 5) ? '<block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block>' + ((opt_ijData.level > 8) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 9) ? '<block type="maze_putDown5"></block>' + ((opt_ijData.level == 14) ? '<block type="maze_pickupTower"></block><block type="maze_putdownTower"></block>' : '') + ((opt_ijData.level > 14) ? '<block type="procedures_defnoreturn"></block><block type="procedures_callnoreturn"></block>' : '') : '') : '') : '') : '') : '') + '</xml>';
};
