// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof bird == 'undefined') { var bird = {}; }


bird.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="MSG" style="display: none"><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span></div><table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a>: Bird</span>';
  for (var i22 = 1; i22 < 11; i22++) {
    output += ' ' + ((i22 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i22) + '</span>' : (i22 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i22) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i22) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i22) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i22) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select> &nbsp; </td></tr></table><div id="visualization"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Instructions';
      break;
    case 2:
      output += 'instructions';
      break;
    case 3:
      output += 'instructions';
      break;
    case 4:
      output += 'instructions';
      break;
    case 5:
      output += 'instructions';
      break;
    case 6:
      output += 'instructions';
      break;
    case 7:
      output += 'instructions';
      break;
    case 8:
      output += 'instructions';
      break;
    case 9:
      output += 'instructions';
      break;
    case 10:
      output += 'instructions';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="600" height="600"></svg></div><table width="400"><tr><td><button id="runButton" class="launch" onclick="Bird.runButtonClick();" title="Makes the character do what the blocks say."><img src="../media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="launch" onclick="Bird.resetButtonClick();" style="display: " title=Put the character back at the start of the world.><img src="../media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript" src="../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + bird.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
  return output;
};


bird.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"></xml>';
};
