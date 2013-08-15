// This file was automatically generated from templateLevel2.soy.
// Please don't edit this file by hand.

if (typeof page2 == 'undefined') { var page2 = {}; }


page2.hints = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  switch (opt_ijData.level) {
    case 1:
      output += 'Use the function block to fill in a row of holes, each needs five shovelfuls of dirt.';
      break;
    case 2:
      output += 'Define a new function to fill in holes which need 7 shovelfuls, then use it to beat the level.';
      break;
    case 3:
      output += 'Create a new function to dig up three shovelfuls of dirt.';
      break;
    case 4:
      output += 'Use the new \'dig up row\' and \'make row\' blocks to complete the level.';
      break;
    case 5:
      output += 'Create a new function which jumps the hurdles to get to the next mound.';
      break;
    case 6:
      output += 'Use the jump hurdle function to help the Miner dig up the mounds.';
      break;
  }
  return output;
};


page2.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<category name="Actions"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block><block type="maze_pickUpBall"></block><block type="maze_putDownBall"></block></category><category name="Control"><block type="maze_untilBlocked"></block><block type="maze_if"></block>' + mazepage.controlsFor(null, null, opt_ijData) + '</category>' + page2.addProcedures(null, null, opt_ijData);
};


page2.addProcedures = function(opt_data, opt_ignored, opt_ijData) {
  return (opt_ijData.level > 2) ? '<category name="Functions" custom="PROCEDURE"></category>' : '<category name="Functions"><block type="procedures_callnoreturn"><mutation name="Fill 5 shovelfuls"></mutation></block></category>';
};

;
// This file was automatically generated from templateLevel1.soy.
// Please don't edit this file by hand.

if (typeof page1 == 'undefined') { var page1 = {}; }


page1.hints = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  switch (opt_ijData.level) {
    case 1:
      output += 'Move the miner to the mound and make him dig it up.';
      break;
    case 2:
      output += 'Move the miner to hole and make him put in two shovels full of dirt.';
      break;
    case 3:
      output += 'Make the miner repeatedly pick up dirt and move forward, using as few blocks as possible.';
      break;
    case 4:
      output += 'Make the miner fill in the row of holes, using as few blocks as possible.';
      break;
    case 5:
      output += 'Make the miner dig up the row of piles.';
      break;
    case 6:
      output += 'Make the miner dig up 10 shovelfuls of dirt.';
      break;
    case 7:
      output += 'Fill in the row of holes, each hole needs five shovelfuls of dirt.';
      break;
    case 8:
      output += 'Dig up the square of mounds.';
      break;
    case 9:
      output += 'Make the miner dig up the mounds.';
      break;
    case 10:
      output += 'Use the function block to make the miner place 5 balls.';
      break;
  }
  return output;
};


page1.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block><block type="maze_pickUpBall"></block>' + ((opt_ijData.level > 1) ? '<block type="maze_putDownBall"></block>' + ((opt_ijData.level > 2) ? '<block type="maze_untilBlocked"></block>' + ((opt_ijData.level > 5) ? mazepage.controlsFor(null, null, opt_ijData) + ((opt_ijData.level > 8) ? '<block type="maze_if"></block>' : '') : '') : '') : '');
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="start_blocks" style="display:none">' + mazepage.startBlocks(null, null, opt_ijData) + '</div><div id="MSG" style="display: none"><span id="moveForward">move forward</span><span id="putDownBall">add 1</span><span id="putDown5">put down 5</span><span id="pickUpBall">remove 1</span><span id="while">while</span><span id="ballsPresent">if number is greater than 0</span><span id="noBallsPresent">number is less than 0</span><span id="turnLeft">turn left</span><span id="turnRight">turn right</span><span id="doCode">do</span><span id="elseCode">else</span><span id="pathAhead">path ahead</span><span id="pathLeft">path to the left</span><span id="pathRight">path to the right</span><span id="noPathAhead">path is blocked</span><span id="noPathLeft">no path to the left</span><span id="noPathRight">no path to the right</span><span id="repeatUntilBlocked">repeat until path is blocked</span><span id="repeatUntilFinish">repeat until finish</span><span id="repeatWhileBallPresents">repeat while current number is not zero</span><span id="moveForwardTooltip">Move me forward one space.</span><span id="q4wrong">No - Try tracking my direction while following the program.</span><span id="q4right">That\'s right! Good job.</span><span id="q5wrong">No - Try tracking my direction while following the program.</span><span id="q5right">You got it right!</span><span id="q10wrong">No - Try tracking my direction while following the program.</span><span id="q10right">That\'s right!</span><span id="turnTooltip">Turns me left or right by 90 degrees.</span><span id="ifTooltip">If there is a path in the specified direction, then do some actions.</span><span id="ifelseTooltip">If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions.</span><span id="whileTooltip">Repeat the enclosed actions until finish point is reached.</span><span id="capacity0">You have<span id=\'capacityNumber\'>0</span> blocks left.</span><span id="capacity1">You have <span id=\'capacityNumber\'>1</span> block left.</span><span id="capacity2">You have <span id=\'capacityNumber\'>%1</span> blocks left.</span><span id="nextLevel">Congratulations! You have completed this level.</span><span id="finalLevel">Congratulations! You have solved the final level.</span><span id="oneTopBlock">On this level, you need to stack together all of the blocks in the white workspace.</span><span id="putdownTower">put down tower</span><span id="pickupTower">pickup tower</span></div><div id="COMMON_MSG" style="display: none"><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved Blockly file.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span></div><table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Maze</span> &nbsp; ';
  var iLimit268 = opt_ijData.maxLevel + 1;
  for (var i268 = 1; i268 < iLimit268; i268++) {
    output += ' ' + ((i268 == opt_ijData.level) ? (i268 > 9) ? '<span class="selected doubleDigit tab">' + soy.$$escapeHtml(i268) + '</span>' : '<span class="selected singleDigit tab">' + soy.$$escapeHtml(i268) + '</span>' : (i268 < opt_ijData.level) ? '<a class="tab previous" href="?page=' + soy.$$escapeHtml(opt_ijData.page) + '&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i268) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i268) + '</a>' : '<a class="tab" href="?page=' + soy.$$escapeHtml(opt_ijData.page) + '&lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i268) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i268) + '</a>');
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
  }
  output += '</span></div><img id="pegman_bubble" height=42 width=55 src="pegman_bubble.png">' + ((opt_ijData.level == 4) ? '<p><img border=2 src="dirs.png">&nbsp;<img src="dirs2.png"><br>' : '') + ((opt_ijData.level == 5) ? '<p><img style="margin-left: 110px;" src="ifblock.png"><br>' : '') + ((opt_ijData.level == 6) ? '<img style="margin-top: 10px;" border=2 src="repeat_block2.png"><br>' : '') + ((opt_ijData.level == 9) ? '<p><img style="margin-left: 60px; height: 150px; width: 260px;" src="if-else2.png"><br><br>' : '') + ((opt_ijData.level == 10) ? '<p><img style="margin-left: 10px; height: 350px; width: 490px;" src="ifelse.png"><br>' : '') + ((opt_ijData.level == 4) ? '<p><input type="radio" name="q4" id="q41" onclick="Maze.showReinfHelp(\'q4w\')"><span style="font-weight: bold"> N</span><br><input type="radio" name="q4" id="q42" onclick="Maze.showReinfHelp(\'q4w\')"><span style="font-weight: bold"> E</span><br><input type="radio" name="q4" id="q43" onclick="Maze.showReinfHelp(\'q4w\')"><span style="font-weight: bold"> S</span><br><input type="radio" name="q4" id="q44" onclick="Maze.showReinfHelp(\'q4r\')"><span style="font-weight: bold"> W</span><br><br></p><div id="shadow"></div><div id="reinfDone"><div style="padding-bottom: 0.7ex;"><div style="text-align: center;" id="reinfFeedbackImage"></div><br><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div><div style="text-align: center; padding-top: 1ex; padding-right: 3ex"><button id="okButton" class="launch" onclick="Maze.hideReinfHelp()&nbsp"><span>OK</span></button></div></div>' : '') + ((opt_ijData.level == 6) ? '<p><img style="margin-left: 30px;" src="repeat_blocka1.png" onclick="Maze.showReinfHelp(\'q5w\')"><img style="margin-left: 20px;" src="repeat_blocka2.png" onclick="Maze.showReinfHelp(\'q5r\')"><img style="margin-left: 20px;" src="repeat_blocka3.png" onclick="Maze.showReinfHelp(\'q5w\')"></p><div id="shadow"></div><div id="reinfDone"><div style="padding-bottom: 0.7ex"><div style="text-align: center;" id="reinfFeedbackImage"></div><br><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div><div style="text-align: center; padding-top: 1ex; padding-right: 3ex;"><button id="okButton" class="launch" onclick="Maze.hideReinfHelp()"><span>OK</span></button></div></div>' : '') + ((opt_ijData.level == 10) ? '<p><input type="radio" name="q8" id="q81" onClick="Maze.showReinfHelp(\'q10r\')"><span style="font-weight: bold"> Yes</span><br><input type="radio" name="q8" id="q82" onClick="Maze.showReinfHelp(\'q10w\')"><span style="font-weight: bold"> No</span><br><br></p><div id="shadow"></div><div id="reinfDone"><div style="padding-bottom: 0.7ex;"><div style="text-align:center;" id="reinfFeedbackImage"></div><br><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div><div style="text-align: center; padding-top: 1ex; padding-right: 3ex;"><button id="okButton" class="launch" onclick="Maze.hideReinfHelp()"><span>OK</span></button></div></div>' : '') + '</div><br><br><div style="text-align: center"><button id="tryLevelAgainButton" class="launch" style="display: none" onclick="Maze.closeDialogButtonClick(false);">Try again</button><button id="nextLevelButton" class="launch" style="display: none" onclick="Maze.closeDialogButtonClick(true);">Continue</button></div></div></div><div id="visualization"><div id="hintBubble"><div id="hint">' + ((opt_ijData.page == 1) ? page1.hints(null, null, opt_ijData) : page2.hints(null, null, opt_ijData)) + '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button title="See generated JavaScript code." onclick="BlocklyApps.showCode();"><img src=\'../media/1x1.gif\' class="code icon21"></button><button id="linkButton" title="Save and link to blocks." onclick="BlocklyStorage.link();"><img src=\'../media/1x1.gif\' class="link icon21"></button></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();"><img src="../media/1x1.gif" class="run icon21">  Run Program</button></button><button id="resetButton" class="launch" onclick="Maze.resetButtonClick();" style="display: none"><img src="../media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript" src="../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div><div id="shadow"></div>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;">' + ((opt_ijData.page == 1) ? page1.toolbox(null, null, opt_ijData) : page2.toolbox(null, null, opt_ijData)) + '</xml>';
};


mazepage.startBlocks = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  if (opt_ijData.page == 1) {
    switch (opt_ijData.level) {
      case 1:
        output += '<block type="maze_moveForward" x="70" y="70"></block>';
        break;
      case 2:
        output += '<block type="maze_moveForward" x="70" y="70"></block>';
        break;
      case 3:
        output += '<block type="maze_pickUpBall" x="70" y="70"></block>';
        break;
      case 4:
        output += '<block type="maze_moveForward" x="70" y="70"></block>';
        break;
      case 5:
        output += '<block type="maze_moveForward" x="70" y="70"></block>';
        break;
      case 6:
        output += '<block type="maze_moveForward" x="70" y="70"></block>';
        break;
      case 7:
        output += '<block type="maze_untilBlocked" x="70" y="70"></block>';
        break;
      case 8:
        output += '<block type="maze_moveForward" x="70" y="70"></block>';
        break;
      case 9:
        output += '<block type="maze_untilBlocked" x="70" y="70"></block>';
        break;
    }
  } else {
    switch (opt_ijData.level) {
      case 1:
        output += mazepage.fillShovelfuls({shovelfuls: 5}, null, opt_ijData);
        break;
      case 2:
        output += mazepage.fillShovelfuls({shovelfuls: 5}, null, opt_ijData);
        break;
      case 3:
        output += mazepage.fillShovelfuls({shovelfuls: 5}, null, opt_ijData) + '<block type="procedures_defnoreturn" x="400" y="200"><mutation></mutation><title name="NAME">fill 7 shovefuls</title></block>';
        break;
      case 4:
        break;
      case 5:
        output += '<block type="procedures_defnoreturn" x="20" y="200"><mutation></mutation><title name="NAME">dig up tower</title><statement name="STACK"><block type="maze_turn"><title name="DIR">turnLeft</title><next><block type="controls_for" inline="true"><title name="VAR">i</title><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">3</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value><statement name="DO"><block type="maze_pickUpBall"><next><block type="maze_moveForward"></block></next></block></statement><next><block type="maze_turn"><title name="DIR">turnRight</title><next><block type="maze_turn"><title name="DIR">turnRight</title><next><block type="controls_for" inline="true"><title name="VAR">j</title><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">3</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value><statement name="DO"><block type="maze_moveForward"></block></statement><next><block type="maze_turn"><title name="DIR">turnLeft</title></block></next></block></next></block></next></block></next></block></next></block></statement></block></statement></block><block type="procedures_defnoreturn" x="400" y="200"><mutation></mutation><title name="NAME">fill in tower</title><statement name="STACK"><block type="maze_turn"><title name="DIR">turnLeft</title><next><block type="controls_for" inline="true"><title name="VAR">i</title><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">3</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value><statement name="DO"><block type="maze_putDownBall"><next><block type="maze_moveForward"></block></next></block></statement><next><block type="maze_turn"><title name="DIR">turnRight</title><next><block type="maze_turn"><title name="DIR">turnRight</title><next><block type="controls_for" inline="true"><title name="VAR">j</title><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">3</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value><statement name="DO"><block type="maze_moveForward"></block></statement><next><block type="maze_turn"><title name="DIR">turnLeft</title></block></next></block></next></block></next></block></next></block></next></block></statement></block></statement></block>';
        break;
      case 6:
        break;
      case 7:
        break;
    }
  }
  return output;
};


mazepage.fillShovelfuls = function(opt_data, opt_ignored, opt_ijData) {
  return '<block type="procedures_defnoreturn" x="20" y="200"><title name="NAME">Fill ' + soy.$$escapeHtml(opt_data.shovelfuls) + ' shovelfuls</title><statement name="STACK">' + mazepage.controlsFor({upperLimit: opt_data.shovelfuls, doStatement: '<block type="maze_putDownBall"></block>'}, null, opt_ijData) + '</statement></block>';
};


mazepage.controlsFor = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return '<block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">' + (opt_data.upperLimit ? opt_data.upperLimit : 10) + '</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value>' + ((opt_data.doStatement) ? '<statement name="DO">' + opt_data.doStatement + '</statement>' : '') + '</block>';
};
