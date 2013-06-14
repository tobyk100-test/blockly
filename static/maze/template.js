// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<table width="100%" height="100%"><tr height="88"><td colspan=2><h1>' + soy.$$escapeHtml(opt_ijData.MSG.title) + ' &nbsp;';
  for (var i6 = 1; i6 < 11; i6++) {
    output += (i6 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i6) + '</span>' : (i6 < opt_ijData.level) ? '<a class="tab previous" href="?level=' + soy.$$escapeHtml(i6) + '">' + soy.$$escapeHtml(i6) + '</a>' : '<a class="tab" href="?level=' + soy.$$escapeHtml(i6) + '">' + soy.$$escapeHtml(i6) + '</a>';
  }
  output += '</h1></td></tr><tr><td width="410" valign="top"><div style="position: relative"><div id="hintBubble"><div id="hint">' + soy.$$escapeHtml(opt_ijData.MSG.hints[opt_ijData.level]) + '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="100%"><tr><td style="width: 190px; text-align: center"><button title="' + soy.$$escapeHtml(opt_ijData.MSG.codeTooltip) + '" onclick="BlocklyApps.showCode();"><img src=\'../media/1x1.gif\' class="code"></button><button id="linkButton" title="' + soy.$$escapeHtml(opt_ijData.MSG.linkTooltip) + '" onclick="BlocklyStorage.link();"><img src=\'../media/1x1.gif\' class="link"></button><button id="randomizeButton" title="$ij.MSG.randomizeMarkerTooltip" onclick="Maze.randomizeMarkers();" style="display: none"><img src=\'../media/1x1.gif\' class="random"></button></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();">' + soy.$$escapeHtml(opt_ijData.MSG.runProgram) + '</button><button id="resetButton" class="launch" onclick="Maze.resetButtonClick();" style="display: none">' + soy.$$escapeHtml(opt_ijData.MSG.resetProgram) + '</button></td></tr></table></td><td valign="top"><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript" src="../common.js"><\/script><script type="text/javascript">BlocklyApps.loadLanguageScripts(languageSrc);<\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div></td></tr></table>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
