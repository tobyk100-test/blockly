// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<script type="text/javascript" src="../slider.js"><\/script><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript">BlocklyApps.loadLanguageScripts(languageSrc);<\/script><script type="text/javascript" src="blocks.js"><\/script><script type="text/javascript" src="answers.js"><\/script><div id="start_blocks" style="display: none">';
  if (opt_ijData.page == 1) {
    switch (opt_ijData.level) {
      case 1:
      case 2:
      case 3:
        output += '<block type="draw_move_forward_inline" x="20" y="20"></block>';
        break;
      case 4:
        output += '<block type="draw_colour" x="20" y="20"><value name="COLOUR"><block type="colour_picker"></block></value></block>';
        break;
      case 5:
      case 6:
        output += '<block type="controls_repeat" x="20" y="20"><title name="TIMES">3</title></block>';
        break;
      case 7:
      case 8:
      case 10:
        output += '<block type="controls_repeat" x="20" y="20"><title name="TIMES">4</title></block>';
        break;
      case 9:
        output += '<block type="draw_move_inline" x="20" y="20"><title name="DIR">moveForward</title><title name="VALUE">50</title></block>';
        break;
      case 11:
        output += '<block type="draw_colour" x="20" y="20"><value name="COLOUR"><block type="colour_random"></block></value><next><block type="draw_move_inline"><title name="DIR">moveForward</title><title name="VALUE">100</title><next><block type="draw_move_inline"><title name="DIR">moveBackward</title><title name="VALUE">100</title><next><block type="draw_turn_inline"><title name="DIR">turnRight</title><title name="VALUE">45</title></block></next></block></next></block></next></block>';
        break;
      case 12:
      case 13:
        output += '<block type="draw_move_inline" x="20" y="20"><title name="DIR">moveForward</title><title name="VALUE">100</title></block>';
        break;
    }
  } else if (opt_ijData.page == 2 || opt_ijData.page == 3) {
    if (opt_ijData.page == 2 && opt_ijData.level >= 2 && opt_ijData.level != 9 || opt_ijData.page == 3 && opt_ijData.level != 7) {
      output += '<block type="procedures_defnoreturn" x="20" y="' + ((opt_ijData.level == 5) ? '100' : '20') + '" ' + ((opt_ijData.page == 2) ? 'collapsed="true"' : '') + ' deletable="false" movable="false"><mutation>' + ((opt_ijData.page == 2 || opt_ijData.page == 3 && opt_ijData.level >= 4) ? '<arg name="length"></arg>' : '') + '</mutation><title name="NAME">draw a square</title><statement name="STACK"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">4</title></block></value><statement name="DO"><block type="draw_move"><value name="VALUE">' + ((opt_ijData.page == 2 || opt_ijData.page == 3 && opt_ijData.level >= 4) ? '`                     <block type="variables_get_length"></block>' : '<block type="math_number"><title name="NUM">100</title></block>') + '</value><next><block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block></next></block></statement></block></statement></block>' + ((opt_ijData.page == 2 && opt_ijData.level <= 4) ? '<block type="procedures_callnoreturn" inline="false" x="20" y="170"><mutation name="draw a square"><arg name="length"></arg></mutation><value name="ARG0"><block type="math_number"><title name="NUM">' + ((opt_ijData.level < 4) ? '100' : '50') + '</title></block></value></block>' : (opt_ijData.page == 3 && opt_ijData.level >= 1) ? '<block type="procedures_defnoreturn" x="20" y="175"><mutation>' + ((opt_ijData.level >= 5) ? '<arg name="length"></arg>' : '') + '</mutation><title name="NAME">draw a triangle</title>' + ((opt_ijData.level >= 2) ? '<statement name="STACK"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">3</title></block></value><statement name="DO"><block type="draw_move" inline="false"><title name="DIR">moveForward</title><value name="VALUE">' + ((opt_ijData.level >= 5) ? '`                     <block type="variables_get_length"></block>' : '<block type="math_number"><title name="NUM">100</title></block>') + '</value><next><block type="draw_turn" inline="false"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">120</title></block></value></block></next></block></statement></block></statement>' : '') + '</block>' + ((opt_ijData.page == 3 && opt_ijData.level == 5) ? '<block type="procedures_defnoreturn" x="20" y="400"><mutation>' + ((opt_ijData.level == 11) ? '<arg name="length"></arg>' : '') + '</mutation><title name="NAME">draw a house</title><statement name="STACK"><block type="procedures_callnoreturn" inline="false"><mutation name="draw a square"><arg name="length"></mutation><value name="ARG0">' + ((opt_ijData.level == 5) ? '<block type="math_number"><title name="NUM">100</title></block>' : '<block type="variables_get_length"></block>') + '</value><next><block type="draw_move" inline="false"><title name="DIR">moveForward</title><value name="VALUE">' + ((opt_ijData.level == 5) ? '<block type="math_number"><title name="NUM">100</title></block>' : '<block type="variables_get_length"></block>') + '</value><next><block type="draw_turn" inline="false"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">30</title></block></value><next><block type="procedures_callnoreturn" inline="false"><mutation name="draw a triangle"><arg name="length"></arg></mutation><value name="ARG0">' + ((opt_ijData.level == 5) ? '<block type="math_number"><title name="NUM">100</title></block>' : '<block type="variables_get_length"></block>') + '</value></block></next></block></next></block></next></block></statement></block>' : '') : (opt_ijData.page == 2 && (opt_ijData.level == 5 || opt_ijData.level == 6 || opt_ijData.level == 8)) ? '<block type="controls_for" inline="true" x="20" y="170"><title name="VAR">counter</title><value name="FROM"><block type="math_number"><title name="NUM">' + ((opt_ijData.level == 8) ? '10' : '50') + '</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value><value name="BY"><block type="math_number"><title name="NUM">10</title></block></value><statement name="DO"><block type="procedures_callnoreturn" inline="false"><mutation name="draw a square"><arg name="length"></arg></mutation><value name="ARG0">' + ((opt_ijData.level == 5) ? '<block type="math_number"><title name="NUM">10</title></block>' : '') + '</value></block></statement></block>' : (opt_ijData.page == 3 && opt_ijData.level == 4) ? '<block type="controls_for" inline="true" x="20" y="170"><title name="VAR">counter</title><value name="FROM"><block type="math_number"><title name="NUM">10</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value><value name="BY"><block type="math_number"><title name="NUM">10</title></block></value><statement name="DO"><block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value><next><block type="procedures_callnoreturn" inline="false"><mutation name="draw a square"><arg name="length"></arg></mutation><value name="ARG0"><block type="variables_get"><title name="VAR">counter</title></block></value></block></next></block></statement></block>' : '');
    } else if (opt_ijData.page == 3 && opt_ijData.level == 7) {
      output += '<block type="procedures_defnoreturn" x="20" y="20"><mutation><arg name="length"></arg></mutation><title name="NAME">draw a hexagon</title><statement name="STACK"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">6</title></block></value><statement name="DO"><block type="draw_move" inline="false"><title name="DIR">moveForward</title><value name="VALUE"><block type="variables_get_length"></block></value><next><block type="draw_turn" inline="false"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">60</title></block></value></block></next></block></statement></block></statement></block><block type="math_arithmetic" inline="true" x="20" y="200"><title name="OP">DIVIDE</title></block>';
    } else if (opt_ijData.page == 2) {
      if (opt_ijData.level == 9) {
        for (var i114 = 25; i114 < 61; i114 += 5) {
          output += '<block type="draw_move" inline="false" editable="false" disabled="true"><title name="DIR">moveForward</title><value name="VALUE"><block type="math_number"><title name="NUM">' + soy.$$escapeHtml(i114) + '</title></block></value><next><block type="draw_turn" inline="false" editable="false" disabled="true"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value><next>';
        }
        for (var i118 = 5; i118 < 25; i118 += 5) {
          output += '</block></next></block></next>';
        }
      } else if (opt_ijData.level == 10) {
        output += '<block type="draw_width" inline="false" x="158" y="67"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value><next><block type="controls_for" inline="true"><title name="VAR">length</title><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value><statement name="DO"><block type="draw_move" inline="false"><title name="DIR">moveForward</title><value name="VALUE"><block type="variables_get_length"></block></value><next><block type="draw_turn" inline="false"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">91</title></block></value></block></next></block></statement><next><block type="turtle_visibility"><title name="VISIBILITY">hideTurtle</title></block></next></block></next></block>';
      }
    }
  }
  output += '</div><table width="100%" height="100%"><tr><td width="' + ((opt_ijData.reinf && opt_ijData.reinf != 0) ? '100%' : '410') + '" valign="top"><h1><a href="../">MOOC</a> &gt; ' + soy.$$escapeHtml(opt_ijData.title) + '</h1>';
  if (opt_ijData.reinf) {
    output += (opt_ijData.reinf[0]) ? '<div id="bubble"><div id="hint"><b>' + soy.$$escapeHtml(opt_ijData.reinf[0]) + '</b></div></div><img id="turtle" height=45 width=130 src="turtle.png">' : '';
    switch (opt_ijData.reinf[1]) {
      case 'picture':
        output += '<table><tr><br></tr><tr><td><img src="' + soy.$$escapeHtml(opt_ijData.reinf[2]) + '"></td></tr><tr height=40><br><br></tr></table>';
        break;
      case 'picture-table':
        output += '<table>';
        var tupleList145 = opt_ijData.reinf[2];
        var tupleListLen145 = tupleList145.length;
        for (var tupleIndex145 = 0; tupleIndex145 < tupleListLen145; tupleIndex145++) {
          var tupleData145 = tupleList145[tupleIndex145];
          output += '<tr height="100" valign="middle"><td><img src="' + soy.$$escapeHtml(tupleData145[1]) + '"></td><td>' + soy.$$escapeHtml(tupleData145[0]) + '</td></tr>';
        }
        output += '</table>';
        break;
      case 'quiz':
        output += '<table><tr><td colspan=' + soy.$$escapeHtml(opt_ijData.reinf[2][0]) + '><img src="p' + soy.$$escapeHtml(opt_ijData.page) + '-l' + soy.$$escapeHtml(opt_ijData.level) + '-q.png"></td></tr><tr>';
        var iLimit161 = opt_ijData.reinf[2][0] + 1;
        for (var i161 = 1; i161 < iLimit161; i161++) {
          output += '<td><img src="p' + soy.$$escapeHtml(opt_ijData.page) + '-l' + soy.$$escapeHtml(opt_ijData.level) + '-a' + soy.$$escapeHtml(i161) + '.png" class="answer" onclick="alert(' + ((i161 == opt_ijData.reinf[2][1]) ? '\'' + soy.$$escapeHtml(opt_ijData.MSG.rightAnswer) + '\'); document.getElementById(\'continueButton\').style.display = \'inline\';' : '\'' + soy.$$escapeHtml(opt_ijData.MSG.wrongAnswer) + '\');') + '"></td>';
        }
        output += '</tr></table>';
        break;
      case 'animations':
        output += '<p><button id="showButton" style="display: inline" class="launch" onclick="this.style.display = \'none\'; document.getElementById(\'animation\').style.display=\'inline\'; document.getElementById(\'continueButton\').style.display=\'inline\';">' + soy.$$escapeHtml(opt_ijData.MSG.showMe) + '</button></p><div id="animation" style="display: none"><table><tr>';
        var fileList184 = opt_ijData.reinf[2];
        var fileListLen184 = fileList184.length;
        for (var fileIndex184 = 0; fileIndex184 < fileListLen184; fileIndex184++) {
          var fileData184 = fileList184[fileIndex184];
          output += '<td><img src="' + soy.$$escapeHtml(fileData184) + '"></td>';
        }
        output += '</tr></table></div>';
        break;
      case 'special':
        break;
    }
    output += '<button id="continueButton" style="display: ' + ((opt_ijData.reinf[1] == 'quiz' || opt_ijData.reinf[1] == 'animations') ? 'none' : 'inline') + '" class="launch" onclick="Turtle.continueButtonClick();">' + soy.$$escapeHtml(opt_ijData.MSG.gotoNext) + '</button>';
  } else {
    output += '<p class="levelLine">' + soy.$$escapeHtml(opt_ijData.MSG.level) + ': &nbsp;';
    var iLimit204 = opt_ijData.maxLevel + 1;
    for (var i204 = 1; i204 < iLimit204; i204++) {
      output += (i204 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i204) + '</span>' : '<a class="tab" href="?page=' + soy.$$escapeHtml(opt_ijData.page) + '&level=' + soy.$$escapeHtml(i204) + '">' + soy.$$escapeHtml(i204) + '</a>';
    }
    output += '</p><div id="bubble"><div id="prompt">' + soy.$$escapeHtml(opt_ijData.MSG.prompts[opt_ijData.page][opt_ijData.level]) + '</div></div><div id="capacity"></div><img id="turtle" height=45 width=130 src="turtle.png"><div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="launch" onclick="Turtle.runButtonClick();">' + soy.$$escapeHtml(opt_ijData.MSG.runProgram) + '</button><button id="resetButton" class="launch" onclick="Turtle.resetButtonClick();" style="display: none">' + soy.$$escapeHtml(opt_ijData.MSG.resetProgram) + '</button></td></tr></table><div id="toolbarDiv"><button title="' + soy.$$escapeHtml(opt_ijData.MSG.codeTooltip) + '" onclick="BlocklyApps.showCode();"><img src=\'../media/1x1.gif\' class="code"></button><button id="linkButton" title="' + soy.$$escapeHtml(opt_ijData.MSG.linkTooltip) + '" onclick="BlocklyStorage.link();"><img src=\'../media/1x1.gif\' class="link"></button></div></td>';
  }
  output += '<td valign="top">' + ((opt_ijData.reinf == 0) ? turtlepage.toolbox(null, null, opt_ijData) : '') + '<script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript" src="../common.js"><\/script><script type="text/javascript">BlocklyApps.loadLanguageScripts(languageSrc);<\/script><script type="text/javascript" src="blocks.js"><\/script><script type="text/javascript" src="answers.js"><\/script><div id="blockly"></div></td></tr></table>';
  return output;
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none">' + ((opt_ijData.page == 1) ? '<block type="draw_move' + ((opt_ijData.level < 6) ? '_forward' : '') + '_inline"></block>"><block type="draw_turn' + ((opt_ijData.level < 6) ? '_right' : '') + '_inline' + ((opt_ijData.level < 9) ? '_restricted' : '') + '"><title name="VALUE">90</title></block>' + ((opt_ijData.level >= 3) ? '<block type="controls_repeat"><title name="TIMES">4</title></block>' : '') + ((opt_ijData.level >= 4) ? '<block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block>' : '') + ((opt_ijData.level >= 8) ? '<block type="draw_pen"></block>' : '') + ((opt_ijData.level >= 11) ? '<block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value></block>' : '') + ((opt_ijData.level == opt_ijData.maxLevel) ? '<block type="draw_width"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="colour_rgb"><value name="RED"><block type="math_number"><title name="NUM">0</title></block></value><value name="GREEN"><block type="math_number"><title name="NUM">0</title></block></value><value name="BLUE"><block type="math_number"><title name="NUM">1</title></block></value></block>' : '') : (opt_ijData.page == 2 || opt_ijData.page == 3) ? '<category name="' + soy.$$escapeHtml(opt_ijData.MSG.catTurtle) + '"><block type="draw_move"><value name="VALUE"><block type="math_number"><title name="NUM">100</title></block></value></block></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catColour) + '"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catControl) + '"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">4</title></block></value></block>' + ((opt_ijData.level >= 5) ? '<block type="controls_for"><title name="VAR">counter</title><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value><value name="BY"><block type="math_number"><title name="NUM">10</title></block></value></block>' : '') + '</category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catMath) + '"><block type="math_number"></block><block type="math_arithmetic" inline="true" x="100" y="180"><title name="OP">DIVIDE</title></block>' + ((opt_ijData.level == 8) ? '<block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block>' : '') + '</category>' + ((opt_ijData.page == 2 && opt_ijData.level >= 2 || opt_ijData.page == 3 && opt_ijData.level <= 6) ? '<category name="' + soy.$$escapeHtml(opt_ijData.MSG.catProcedures) + '">' + ((opt_ijData.page == 2 || opt_ijData.page == 3 && opt_ijData.level != 7) ? '<block type="procedures_callnoreturn"><mutation name="draw a square">' + ((opt_ijData.page == 2 || opt_ijData.page == 3 && opt_ijData.level >= 4) ? '<arg name="length"></arg>' : '') + '</mutation></block><block type="procedures_callnoreturn"><mutation name="draw a triangle">' + ((opt_ijData.page == 3 && opt_ijData.level >= 4) ? '<arg name="length"></arg>' : '') + '</mutation></block>' : '') + ((opt_ijData.page == 3 && opt_ijData.level == 3) ? '<block type="procedures_callnoreturn"><mutation name="draw a house"></mutation></block><block type="procedures_defnoreturn"></block>' : (opt_ijData.page == 3 && opt_ijData.level == 5) ? '<block type="procedures_callnoreturn"><mutation name="draw a house"><arg name="length"></arg></mutation></block>' : (opt_ijData.page == 3 && (opt_ijData.level == 6 || opt_ijData.level == 8)) ? '<block type="procedures_callnoreturn"><mutation name="draw a hexagon"><arg name="length"></arg></mutation></block><block type="procedures_defnoreturn"></block>' : '') + ((opt_ijData.page == 3 && opt_ijData.level == 7) ? '<block type="procedures_callnoreturn"><mutation name="draw a hexagon"><arg name="sides"></arg><arg name="length"></arg></mutation></block>' : '') + '</category>' : '') + ((opt_ijData.page == 3 && opt_ijData.level >= 7) ? '<category name="' + soy.$$escapeHtml(opt_ijData.MSG.catVariables) + '" custom="VARIABLE"></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catProcedures) + '" custom="PROCEDURE"></category>' : (opt_ijData.page == 2 && opt_ijData.level >= 5) ? '<category name="' + soy.$$escapeHtml(opt_ijData.MSG.catVariables) + '"><block type="variables_get_counter"></block></category>' : (opt_ijData.page == 3 && opt_ijData.level >= 4) ? '<category name="' + soy.$$escapeHtml(opt_ijData.MSG.catVariables) + '">' + ((opt_ijData.level == 7) ? '<block type="variables_get_sides"></block>' : '') + '<block type="variables_get_length"></block></category>' : '') : '') + '</xml>';
};
