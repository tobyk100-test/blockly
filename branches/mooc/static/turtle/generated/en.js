// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="MSG" style="display: none"><span id="colourTooltip">Changes the color of the pen.</span><span id="degrees">degrees</span><span id="hideTurtle">hide turtle</span><span id="moveBackward">move backward by</span><span id="moveForward">move forward by</span><span id="moveForwardTooltip">Moves the turtle forward.</span><span id="moveTooltip">Moves the turtle forward or backward by the specified amount.</span><span id="nextLevel">Congratulations!  Would you like to proceed to the next level?</span><span id="penDown">pen down</span><span id="penTooltip">Lifts or lowers the pen, to start or stop drawing.</span><span id="penUp">pen up</span><span id="pixels">pixels</span><span id="setColour">set color</span><span id="setWidth">set width</span><span id="showTurtle">show turtle</span><span id="turnLeft">turn left by</span><span id="turnRightTooltip">Turns the turtle right by the specified angle.</span><span id="turnRight">turn right by</span><span id="turnTooltip">Turns the turtle left or right by the specified number of degrees.</span><span id="turtleVisibilityTooltip">Makes the turtle (green circle and arrow) visible or invisible.</span><span id="widthTooltip">Changes the width of the pen.</span><span id="loopVariable">counter</span><span id="drawASquare">draw a square</span><span id="lengthParameter">length</span><span id="drawASnowball">draw a snowball</span><span id="diameterParameter">diameter</span><span id="title">Turtle Graphics %1</span></div><script type="text/javascript" src="../slider.js"><\/script><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript">BlocklyApps.loadLanguageScripts(languageSrc);<\/script><script type="text/javascript" src="blocks.js"><\/script><script type="text/javascript" src="answers.js"><\/script><div id="start_blocks" style="display: none">';
  if (opt_ijData.page == 1) {
    switch (opt_ijData.level) {
      case 1:
      case 2:
        output += '<block type="draw_move_forward_inline" x="20" y="20"></block>';
        break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        output += '<block type="controls_repeat" x="20" y="20"><title name="TIMES">' + ((opt_ijData.level == 3 || opt_ijData.level == 6 || opt_ijData.level == 7) ? '4' : '3') + '</title></block>';
        break;
      case 8:
        output += '<block type="draw_colour" x="20" y="100"><value name="COLOUR"><block type="colour_random"></block></value><next><block type="draw_move_inline"><title name="DIR">moveForward</title><title name="VALUE">100</title><next><block type="draw_move_inline"><title name="DIR">moveBackward</title><title name="VALUE">100</title><next><block type="draw_turn_inline"><title name="DIR">turnRight</title><title name="VALUE">45</title></block></next></block></next></block></next></block>';
        break;
      case 9:
        output += '<block type="controls_repeat" editable="false" deleteable="false" movable="false" x="20" y="20"><title name="TIMES">??</title><statement name="DO"><block type="draw_move" editable="false" deleteable="false" movable="false"><value name="VALUE"><block type="math_number" editable="false" deleteable="false" movable="false"><title name="NUM">1</title></block></value><next><block type="draw_turn" editable="false" deleteable="false" movable="false"><value name="VALUE"><block type="math_number" editable="false" deleteable="false" movable="false"><title name="NUM">1</title></block></value></block></next></block></statement></block>';
        break;
      case 10:
        output += '<block type="draw_move_inline" x="20" y="20"><title name="DIR">moveForward</title><title name="VALUE">100</title></block>';
        break;
    }
  } else if (opt_ijData.page == 2) {
    if (opt_ijData.level == 3 || opt_ijData.level == 5) {
      output += '<block type="draw_a_square" inline="true"><value name="VALUE"><block type="math_number"><title name="NUM">' + ((opt_ijData.level == 3) ? '100' : '50') + '</title></block></value></block>';
    } else if (opt_ijData.level == 4) {
      output += '<block type="controls_repeat_ext" editable="false" deleteable="false" movable="false"><value name="TIMES"><block type="math_number" readOnly="false" deleteable="true" movable="false"><title name="NUM">3</title></block></value><statement name="DO"><block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value><next><block type="draw_a_square" inline="true" editable="false" deleteable="false" movable="false"><value name="VALUE"><block type="math_number" editable="false" deleteable="false" movable="false"><title name="NUM">100</title></block></value><next><block type="draw_turn" editable="false" deleteable="false" movable="false"><value name="VALUE"><block type="math_number" editable="false" deleteable="false" movable="false"><title name="NUM">120</title></block></value></block></next></block></next></block></statement></block>';
    } else if (opt_ijData.level == 6 || opt_ijData.level == 7) {
      output += '<block type="controls_for_counter" inline="true" x="20" y="20"><title name="VAR">counter</title><value name="FROM"><block type="math_number"><title name="NUM">' + ((opt_ijData.level == 6) ? '50' : '10') + '</title></block></value><value name="TO"><block type="math_number"><title name="NUM">' + ((opt_ijData.level == 6) ? '90' : '100') + '</title></block></value><value name="BY"><block type="math_number"><title name="NUM">10</title></block></value><statement name="DO"><block type="draw_a_square" inline="true">' + ((opt_ijData.level == 6) ? '<value name="VALUE"><block type="math_number"><title name="NUM">10</title></block></value>' : '') + '</block></statement></block>';
    } else if (opt_ijData.level == 8) {
      for (var i138 = 25; i138 < 61; i138 += 5) {
        output += '<block type="draw_move" ' + ((i138 == 25) ? 'x="300" y="100"' : '') + ' inline="false" editable="false" disabled="true"><title name="DIR">moveForward</title><value name="VALUE"><block type="math_number"><title name="NUM">' + soy.$$escapeHtml(i138) + '</title></block></value><next><block type="draw_turn" inline="false" editable="false" disabled="true"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value><next>';
      }
      for (var i146 = 5; i146 < 25; i146 += 5) {
        output += '</block></next></block></next>';
      }
    } else if (opt_ijData.level == 11) {
      output += '<block type="draw_width" inline="false" x="158" y="67"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value><next><block type="controls_for_counter" inline="true"><title name="VAR">length</title><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value><statement name="DO"><block type="draw_move" inline="false"><title name="DIR">moveForward</title><value name="VALUE"><block type="variables_get_length"></block></value><next><block type="draw_turn" inline="false"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">91</title></block></value></block></next></block></statement><next><block type="turtle_visibility"><title name="VISIBILITY">hideTurtle</title></block></next></block></next></block>';
    }
  } else {
    output += (opt_ijData.level != 7) ? '<block type="procedures_defnoreturn" x="20" y="20" editable="false" deletable="false" movable="false"><mutation>' + ((opt_ijData.level >= 4) ? '<arg name="length"></arg>' : '') + '</mutation><title name="NAME">draw a square</title><statement name="STACK"><block type="controls_repeat_ext" editable="false" deleteable="false" movable="false"><value name="TIMES"><block type="math_number" editable="false" deleteable="false" movable="false"><title name="NUM">4</title></block></value><statement name="DO"><block type="draw_move" editable="false" deleteable="false" movable="false"><value name="VALUE">' + ((opt_ijData.page == 2 || opt_ijData.page == 3 && opt_ijData.level >= 4) ? '`                     <block type="variables_get_length"></block>' : '<block type="math_number" editable="false" deleteable="false" movable="false"><title name="NUM">100</title></block>') + '</value><next><block type="draw_turn" editable="false" deleteable="false" movable="false"><value name="VALUE"><block type="math_number" editable="false" deleteable="false" movable="false"><title name="NUM">90</title></block></value></block></next></block></statement></block></statement></block>' + ((opt_ijData.level == 1) ? '<block type="procedures_defnoreturn" x="20" y="175"><title name="NAME">draw ??</title></block>' : (opt_ijData.level >= 2) ? '<block type="procedures_defnoreturn" x="20" y="175"><mutation>' + ((opt_ijData.level >= 5) ? '<arg name="length"></arg>' : '') + '</mutation><title name="NAME">draw a triangle</title>' + ((opt_ijData.level >= 2) ? '<statement name="STACK"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">3</title></block></value><statement name="DO"><block type="draw_move" inline="false"><title name="DIR">moveForward</title><value name="VALUE">' + ((opt_ijData.level >= 5) ? '`                     <block type="variables_get_length"></block>' : '<block type="math_number"><title name="NUM">100</title></block>') + '</value><next><block type="draw_turn" inline="false"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">120</title></block></value></block></next></block></statement></block></statement>' : '') : '') + '</block>' + ((opt_ijData.level == 4) ? '<block type="controls_for_counter" inline="true" x="20" y="170"><value name="FROM"><block type="math_number"><title name="NUM">10</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value><value name="BY"><block type="math_number"><title name="NUM">10</title></block></value><statement name="DO"><block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value><next><block type="procedures_callnoreturn" inline="false"><mutation name="draw a square"><arg name="length"></arg></mutation><value name="ARG0"><block type="variables_get"><title name="VAR">counter</title></block></value></block></next></block></statement></block>' : (opt_ijData.level == 5) ? '<block type="procedures_defnoreturn" x="20" y="350"><mutation>' + ((opt_ijData.level == 11) ? '<arg name="length"></arg>' : '') + '</mutation><title name="NAME">draw a house</title><statement name="STACK"><block type="procedures_callnoreturn" inline="false"><mutation name="draw a square"><arg name="length"></mutation><value name="ARG0">' + ((opt_ijData.level == 5) ? '<block type="math_number"><title name="NUM">100</title></block>' : '<block type="variables_get_length"></block>') + '</value><next><block type="draw_move" inline="false"><title name="DIR">moveForward</title><value name="VALUE">' + ((opt_ijData.level == 5) ? '<block type="math_number"><title name="NUM">100</title></block>' : '<block type="variables_get_length"></block>') + '</value><next><block type="draw_turn" inline="false"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">30</title></block></value><next><block type="procedures_callnoreturn" inline="false"><mutation name="draw a triangle"><arg name="length"></arg></mutation><value name="ARG0">' + ((opt_ijData.level == 5) ? '<block type="math_number"><title name="NUM">100</title></block>' : '<block type="variables_get_length"></block>') + '</value></block></next></block></next></block></next></block></statement></block>' : '') : '';
  }
  output += '</div><table width="100%" height="100%"><tr><td width="' + ((opt_ijData.reinf && opt_ijData.reinf != 0) ? '100%' : '410') + '" valign="top"><h1><a href="../">MOOC</a> &gt;  Turtle</h1>';
  if (opt_ijData.reinf) {
    output += (opt_ijData.reinf[0]) ? '<div id="bubble"><div id="hint"><b>' + soy.$$escapeHtml(opt_ijData.reinf[0]) + '</b></div></div><img id="turtle" height=45 width=130 src="turtle.png">' : '';
    switch (opt_ijData.reinf[1]) {
      case 'picture':
        output += '<table><tr><br></tr><tr><td><img src="' + soy.$$escapeHtml(opt_ijData.reinf[2]) + '"></td></tr><tr height=40><br><br></tr></table>';
        break;
      case 'picture-table':
        output += '<table>';
        var tupleList234 = opt_ijData.reinf[2];
        var tupleListLen234 = tupleList234.length;
        for (var tupleIndex234 = 0; tupleIndex234 < tupleListLen234; tupleIndex234++) {
          var tupleData234 = tupleList234[tupleIndex234];
          output += '<tr height="100" valign="middle"><td><img src="' + soy.$$escapeHtml(tupleData234[1]) + '"></td><td>' + soy.$$escapeHtml(tupleData234[0]) + '</td></tr>';
        }
        output += '</table>';
        break;
      case 'quiz':
        output += '<table><tr><td colspan=' + soy.$$escapeHtml(opt_ijData.reinf[2][0]) + '><img src="p' + soy.$$escapeHtml(opt_ijData.page) + '-l' + soy.$$escapeHtml(opt_ijData.level) + '-q.png"></td></tr><tr>';
        var iLimit250 = opt_ijData.reinf[2][0] + 1;
        for (var i250 = 1; i250 < iLimit250; i250++) {
          output += '<td><img src="p' + soy.$$escapeHtml(opt_ijData.page) + '-l' + soy.$$escapeHtml(opt_ijData.level) + '-a' + soy.$$escapeHtml(i250) + '.png" class="answer" onclick="alert(' + ((i250 == opt_ijData.reinf[2][1]) ? '\'You got it!\'); document.getElementById(\'continueButton\').style.display = \'inline\';' : '\'Wrong!  Try again.\');') + '"></td>';
        }
        output += '</tr></table>';
        break;
      case 'animations':
        output += '<p><button id="showButton" style="display: inline" class="launch" onclick="this.style.display = \'none\'; document.getElementById(\'animation\').style.display=\'inline\'; document.getElementById(\'continueButton\').style.display=\'inline\';">Show me</button></p><div id="animation" style="display: none"><table><tr>';
        var fileList276 = opt_ijData.reinf[2];
        var fileListLen276 = fileList276.length;
        for (var fileIndex276 = 0; fileIndex276 < fileListLen276; fileIndex276++) {
          var fileData276 = fileList276[fileIndex276];
          output += '<td><img src="' + soy.$$escapeHtml(fileData276) + '"></td>';
        }
        output += '</tr></table></div>';
        break;
      case 'special':
        break;
    }
    output += '<button id="continueButton" style="display: ' + ((opt_ijData.reinf[1] == 'quiz' || opt_ijData.reinf[1] == 'animations') ? 'none' : 'inline') + '" class="launch" onclick="Turtle.continueButtonClick();">Continue</button>';
  } else {
    output += '<p class="levelLine">Level: &nbsp;';
    var iLimit298 = opt_ijData.maxLevel + 1;
    for (var i298 = 1; i298 < iLimit298; i298++) {
      output += (i298 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i298) + '</span>' : '<a class="tab" href="?page=' + soy.$$escapeHtml(opt_ijData.page) + '&level=' + soy.$$escapeHtml(i298) + '">' + soy.$$escapeHtml(i298) + '</a>';
    }
    output += '</p><div id="bubble"><div id="prompt">';
    switch (opt_ijData.page) {
      case 1:
        switch (opt_ijData.level) {
          case 1:
            output += 'I\'m a turtle with a pen on my belly. Stack up blocks and press "Run Program" to make me draw the shown picture.';
            break;
          case 2:
            output += 'Draw a square, making each side a different color.';
            break;
          case 3:
            output += 'Make a square in only 3 blocks.  (Color blocks don\'t count.)';
            break;
          case 4:
            output += 'Draw a triangle whose sides are all 100 pixels and are in random colors.  You\'ll have to figure out how far to turn.';
            break;
          case 5:
            output += 'Draw a triangle and then a square.';
            break;
          case 6:
            output += 'Can you figure out how use a square and triangle to draw a red envelope?';
            break;
          case 7:
            output += 'See if you can draw these glasses in your favorite color.';
            break;
          case 8:
            output += 'After trying out these blocks, see what happens if you make them repeat 8 times.  It should look a little different every time you run it.';
            break;
          case 9:
            output += 'Figure out what number to replace the question marks with to draw a circle.';
            break;
          case 10:
            output += 'Draw anything you want. Some ideas are a stick figure, snowflake, or spiral. Have fun';
            break;
        }
        break;
      case 2:
        switch (opt_ijData.level) {
          case 1:
            output += 'Find the familiar blocks in the new categories to draw a square in your favorite color.';
            break;
          case 2:
            output += 'Use the new "draw a square" box, found in the "Functions" category, to draw a small green square.';
            break;
          case 3:
            output += 'Use the new block to draw 3 squares, 120 degrees apart, in random colors.';
            break;
          case 4:
            output += 'Now change the code to draw 36 squares, each 10 degrees apart.';
            break;
          case 5:
            output += 'Draw squares with sides of 50, 60, 70, 80, and 90 pixels.  You\'ll need lots of blocks.';
            break;
          case 6:
            output += 'Modify this program to get the value of counter (in the Variables category) when drawing a square instead of the value 10.';
            break;
          case 7:
            output += 'How about setting a random color before drawing each square and moving forward 10 pixels after each one?';
            break;
          case 8:
            output += 'Replace the pale (disabled) blocks with a "count with" block to draw the same spiral.';
            break;
          case 9:
            output += 'Draw a snowman by using the new "draw a snowball" function with inputs of 70, 50, and 30.';
            break;
          case 10:
            output += 'Draw whatever you want.  One idea is experimenting with different types of spirals.  What happens if you change the turn amount, rather than the move amount?  TODO: Add starting blocks.';
            break;
        }
        break;
      case 3:
        switch (opt_ijData.level) {
          case 1:
            output += 'Using the "draw a square" function as an example, create a "draw a triangle" function and use it.';
            break;
          case 2:
            output += 'See if you can figure out how to use "draw a square" and "draw a triangle" (and some other blocks) to draw a house.';
            break;
          case 3:
            output += 'Create (and use) a new function to draw a house.';
            break;
          case 4:
            output += 'Using "draw a square" as an example, add an input named "length" to "draw a triangle".  Then, draw triangles in different colors with side lengths of 50 and 100.';
            break;
          case 5:
            output += 'Add a "length" input to "draw a house" and build a tiny house for my snail friend.';
            break;
          case 6:
            output += 'Create a new block "draw a hexagon", similar to "draw a square", and use it to draw hexagons in different colors with sides of length 50 and 75.';
            break;
          case 7:
            output += 'Rename "draw a hexagon" to "draw a polygon" and add an input named "sides".  You\'ll have to make some other changes, including the amount to turn.  Test your new block by drawing a red octagon (8-sided polygon) with sides of length 80.';
            break;
          case 8:
            output += 'You\'re now free to do whatever you want.  One idea is to try running this program with different turn amounts (higher or lower than 90).  Other ideas are to draw a star, circle, heart, or animal.';
            break;
        }
        break;
    }
    output += '</div></div><div id="capacity"></div><img id="turtle" height=45 width=130 src="turtle.png"><div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="launch" onclick="Turtle.runButtonClick();">Run Program</button><button id="resetButton" class="launch" onclick="Turtle.resetButtonClick();" style="display: none">Reset</button></td></tr></table><div id="toolbarDiv"><button title="See generated JavaScript code." onclick="BlocklyApps.showCode();"><img src=\'../media/1x1.gif\' class="code"></button><button id="linkButton" title="See generated JavaScript code." onclick="BlocklyStorage.link();"><img src=\'../media/1x1.gif\' class="link"></button></div></td>';
  }
  output += '<td valign="top">' + ((opt_ijData.reinf == 0) ? turtlepage.toolbox(null, null, opt_ijData) : '') + '<div id="blockly"></div></td></tr></table>';
  return output;
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none">' + ((opt_ijData.page == 1) ? '<block type="draw_move' + ((opt_ijData.level <= 5) ? '_forward' : '') + '_inline"></block>"><block type="draw_turn' + ((opt_ijData.level < 5) ? '_right' : '') + '_inline' + ((opt_ijData.level <= 8) ? '_restricted' : '') + '"><title name="VALUE">90</title></block>' + ((opt_ijData.level >= 2) ? '<block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block>' : '') + ((opt_ijData.level >= 4) ? '<block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value></block>' : '') + ((opt_ijData.level >= 3) ? '<block type="controls_repeat"><title name="TIMES">4</title></block>' : '') + ((opt_ijData.level >= 7) ? '<block type="turtle_visibility"></block>' : '') : (opt_ijData.page == 2 || opt_ijData.page == 3) ? '<category name="Actions"><block type="draw_move"><value name="VALUE"><block type="math_number"><title name="NUM">100</title></block></value></block></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block><block type="turtle_visibility"></block></category><category name="Color"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value></block></category>' + ((opt_ijData.page == 2 && opt_ijData.level >= 2 || opt_ijData.page == 3) ? '<category name="Functions">' + ((opt_ijData.page == 2) ? '<block type="draw_a_square" inline="true"><value name="VALUE"><block type="math_number"><title name="NUM">100</title></block></value></block>' + ((opt_ijData.level >= 9) ? '<block type="draw_a_snowball" inline="true"><value name="VALUE"><block type="math_number"><title name="NUM">100</title></block></value></block>' : '') : ((opt_ijData.level != 7) ? '<block type="procedures_defnoreturn"></block><block type="procedures_callnoreturn"><mutation name="draw a square">' + ((opt_ijData.level >= 4) ? '<arg name="length"></arg>' : '') + '</mutation></block><block type="procedures_callnoreturn"><mutation name="draw a triangle">' + ((opt_ijData.level >= 4) ? '<arg name="length"></arg>' : '') + '</mutation></block>' : '') + ((opt_ijData.level == 3 || opt_ijData.level == 5) ? '<block type="procedures_callnoreturn"><mutation name="draw a house">' + ((opt_ijData.level == 5) ? '<arg name="length"></arg>' : '') + '</mutation></block>' : (opt_ijData.level == 6 || opt_ijData.level == 8) ? '<block type="procedures_callnoreturn"><mutation name="draw a hexagon"><arg name="length"></arg></mutation></block>' : '')) + '</category>' : '') + '<category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">4</title></block></value></block>' + ((opt_ijData.level >= 5) ? '<block type="controls_for_counter"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value><value name="BY"><block type="math_number"><title name="NUM">10</title></block></value></block>' : '') + '</category><category name="Math"><block type="math_number"></block>' + ((opt_ijData.page == 3) ? '<block type="math_arithmetic" inline="true"><title name="OP">DIVIDE</title></block>' + ((opt_ijData.level == 8) ? '<block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block>' : '') : '') + '</category>' + ((opt_ijData.page == 3 && opt_ijData.level >= 7) ? '<category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category>' : (opt_ijData.page == 2 && opt_ijData.level >= 5) ? '<category name="Variables"><block type="variables_get_counter"></block></category>' : (opt_ijData.page == 3 && opt_ijData.level >= 4) ? '<category name="Variables">' + ((opt_ijData.level == 7) ? '<block type="variables_get_sides"></block>' : '') + '<block type="variables_get_length"></block></category>' : '') : '') + '</xml>';
};
