// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.polygon = function(opt_data, opt_ignored, opt_ijData) {
  return '<block type="procedures_defnoreturn" ' + opt_data.modifiers + '><mutation>' + ((opt_data.length == 0) ? '<arg name="length"></arg>' : '') + '</mutation><title name="NAME">' + opt_data.title + '</title><statement name="STACK"><block type="controls_repeat_ext" ' + opt_data.modifiers + '><value name="TIMES"><block type="math_number" ' + opt_data.modifiers + '><title name="NUM">' + opt_data.sides + '</title></block></value><statement name="DO"><block type="draw_move" ' + opt_data.modifiers + '><value name="VALUE">' + ((opt_data.length == 0) ? '<block type="variables_get_length"></block>' : '<block type="math_number" ' + opt_data.modifiers + '><title name="NUM">' + opt_data.length + '</title></block>') + '</value><next><block type="draw_turn" ' + opt_data.modifiers + '><value name="VALUE"><block type="math_number" ' + opt_data.modifiers + '><title name="NUM">' + 360 / opt_data.sides + '</title></block></value></block></next></block></statement></block></statement></block>';
};


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="colourTooltip">Changes the color of the pen.</span><span id="degrees">degrees</span><span id="hideTurtle">hide turtle</span><span id="moveBackward">move backward by</span><span id="moveForward">move forward by</span><span id="moveForwardTooltip">Moves the turtle forward.</span><span id="jumpBackward">jump backward by</span><span id="jumpForward">jump forward by</span><span id="jumpForwardTooltip">Moves the turtle forward without leaving any marks.</span><span id="moveTooltip">Moves the turtle forward or backward by the specified amount.</span><span id="nextLevel">Congratulations!  Would you like to proceed to the next level?</span><span id="penDown">pen down</span><span id="penTooltip">Lifts or lowers the pen, to start or stop drawing.</span><span id="penUp">pen up</span><span id="dots">dots</span><span id="setColour">set color</span><span id="setWidth">set width</span><span id="showTurtle">show turtle</span><span id="turnLeft">turn left by</span><span id="turnRightTooltip">Turns the turtle right by the specified angle.</span><span id="turnRight">turn right by</span><span id="turnTooltip">Turns the turtle left or right by the specified number of degrees.</span><span id="turtleVisibilityTooltip">Makes the turtle (green circle and arrow) visible or invisible.</span><span id="widthTooltip">Changes the width of the pen.</span><span id="loopVariable">counter</span><span id="drawASquare">draw a square</span><span id="lengthParameter">length</span><span id="drawASnowman">draw a snowman</span><span id="heightParameter">height</span><span id="title">CS First: Turtle Graphics %1</span></div>';
};


turtlepage.showInterstitials = function(opt_data, opt_ignored, opt_ijData) {
  var output = (opt_ijData.reinf[0]) ? '<div id="bubble"><div id="hint"><b>' + soy.$$escapeHtml(opt_ijData.reinf[0]) + '</b></div></div><img id="turtle" height=45 width=130 src="turtle.png">' : '';
  switch (opt_ijData.reinf[1]) {
    case 'picture':
      output += '<table><tr><br></tr><tr><td><img src="' + soy.$$escapeHtml(opt_ijData.reinf[2]) + '"></td></tr><tr height=40><br><br></tr></table>';
      break;
    case 'picture-table':
      output += '<table>';
      var tupleList141 = opt_ijData.reinf[2];
      var tupleListLen141 = tupleList141.length;
      for (var tupleIndex141 = 0; tupleIndex141 < tupleListLen141; tupleIndex141++) {
        var tupleData141 = tupleList141[tupleIndex141];
        output += '<tr height="100" valign="middle"><td><img src="' + soy.$$escapeHtml(tupleData141[1]) + '"></td><td>' + soy.$$escapeHtml(tupleData141[0]) + '</td></tr>';
      }
      output += '</table>';
      break;
    case 'quiz':
      output += '<table><tr><td colspan=' + soy.$$escapeHtml(opt_ijData.reinf[2][0]) + '><img src="p' + soy.$$escapeHtml(opt_ijData.page) + '-l' + soy.$$escapeHtml(opt_ijData.level) + '-q.png"></td></tr><tr>';
      var iLimit157 = opt_ijData.reinf[2][0] + 1;
      for (var i157 = 1; i157 < iLimit157; i157++) {
        output += '<td><img src="p' + soy.$$escapeHtml(opt_ijData.page) + '-l' + soy.$$escapeHtml(opt_ijData.level) + '-a' + soy.$$escapeHtml(i157) + '.png" class="answer" onclick="alert(' + ((i157 == opt_ijData.reinf[2][1]) ? '\'You got it!\'); document.getElementById(\'continueButton\').style.display = \'inline\';' : '\'Wrong!  Try again.\');') + '"></td>';
      }
      output += '</tr></table>';
      break;
    case 'animations':
      output += '<p><button id="showButton" style="display: inline" class="launch" onclick="this.style.display = \'none\'; document.getElementById(\'animation\').style.display=\'inline\'; document.getElementById(\'continueButton\').style.display=\'inline\';">Show me</button></p><div id="animation" style="display: none"><table><tr>';
      var fileList183 = opt_ijData.reinf[2];
      var fileListLen183 = fileList183.length;
      for (var fileIndex183 = 0; fileIndex183 < fileListLen183; fileIndex183++) {
        var fileData183 = fileList183[fileIndex183];
        output += '<td><img src="' + soy.$$escapeHtml(fileData183) + '"></td>';
      }
      output += '</tr></table></div>';
      break;
    case 'special':
      break;
  }
  output += '<button id="continueButton" style="display: ' + ((opt_ijData.reinf[1] == 'quiz' || opt_ijData.reinf[1] == 'animations') ? 'none' : 'inline') + '" class="launch" onclick="Turtle.continueButtonClick();">Continue</button>';
  return output;
};


turtlepage.startBlocks = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="start_blocks" style="display: none">';
  if (opt_ijData.page == 1) {
    switch (opt_ijData.level) {
      case 1:
      case 2:
        output += '<block type="draw_move_inline" x="20" y="20"></block>';
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
      output += '<block type="controls_repeat_ext" editable="false" deleteable="false" movable="false"><value name="TIMES"><block type="math_number" readOnly="false" deleteable="true" movable="false"><title name="NUM">???</title></block></value><statement name="DO"><block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value><next><block type="draw_a_square" inline="true" editable="false" deleteable="false" movable="false"><value name="VALUE"><block type="math_number" editable="false" deleteable="false" movable="false"><title name="NUM">???</title></block></value><next><block type="draw_turn" editable="false" deleteable="false" movable="false"><value name="VALUE"><block type="math_number" editable="false" deleteable="false" movable="false"><title name="NUM">???</title></block></value></block></next></block></next></block></statement></block>';
    } else if (opt_ijData.level == 6) {
      output += '<block type="controls_for_counter" inline="true" x="20" y="20"><title name="VAR">counter</title><value name="FROM"><block type="math_number"><title name="NUM">' + ((opt_ijData.level == 6) ? '50' : '10') + '</title></block></value><value name="TO"><block type="math_number"><title name="NUM">' + ((opt_ijData.level == 6) ? '90' : '100') + '</title></block></value><value name="BY"><block type="math_number"><title name="NUM">10</title></block></value><statement name="DO"><block type="draw_a_square" inline="true"><value name="VALUE"><block type="math_number"><title name="NUM">10</title></block></value></block></statement></block>';
    } else if (opt_ijData.level == 7) {
      for (var i251 = 25; i251 < 61; i251 += 5) {
        output += '<block type="draw_move" ' + ((i251 == 25) ? 'x="300" y="100"' : '') + ' inline="false" editable="false" disabled="true"><title name="DIR">moveForward</title><value name="VALUE"><block type="math_number"><title name="NUM">' + soy.$$escapeHtml(i251) + '</title></block></value><next><block type="draw_turn" inline="false" editable="false" disabled="true"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value><next>';
      }
      for (var i259 = 5; i259 < 25; i259 += 5) {
        output += '</block></next></block></next>';
      }
    } else if (opt_ijData.level == 8 || opt_ijData.level == 9) {
      output += '<block type="draw_a_snowman" x="20" y="20"><value name="VALUE"><block type="math_number"><title name="NUM">150</title></block></value></block>';
    } else if (opt_ijData.level == 10) {
      output += '<block type="draw_width" inline="false" x="158" y="67"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value><next><block type="controls_for_counter" inline="true"><title name="VAR">length</title><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value><statement name="DO"><block type="draw_move" inline="false"><title name="DIR">moveForward</title><value name="VALUE"><block type="variables_get_length"></block></value><next><block type="draw_turn" inline="false"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">91</title></block></value></block></next></block></statement></block></next></block>';
    }
  } else {
    output += turtlepage.polygon({title: 'draw a square', modifiers: 'x="20" y="20" editable="false" deletable="false" movable="false"', sides: 4, length: (opt_ijData.level >= 6) ? '0' : '100'}, null, opt_ijData) + ((opt_ijData.level == 1) ? turtlepage.polygon({title: 'draw a circle', modifiers: 'x="300" y="20" editable="false" deletable="false" movable="false"', sides: 360, length: '1'}, null, opt_ijData) : '') + ((opt_ijData.level == 2) ? '<block type="procedures_defnoreturn" x="20" y="175"><title name="NAME">draw a triangle</title></block>' : (opt_ijData.level >= 3) ? turtlepage.polygon({title: 'draw a triangle', modifiers: (opt_ijData.level == 6) ? 'x="20" y="190"' : 'x="340" y="20"', sides: 3, length: (opt_ijData.level >= 7) ? '0' : '100'}, null, opt_ijData) : '') + ((opt_ijData.level == 7) ? '<block type="procedures_defnoreturn" x="20" y="200"><mutation>' + ((opt_ijData.level == 11) ? '<arg name="length"></arg>' : '') + '</mutation><title name="NAME">draw a house</title><statement name="STACK"><block type="procedures_callnoreturn" inline="false"><mutation name="draw a square"><arg name="length"></mutation><value name="ARG0">' + ((opt_ijData.level == 7) ? '<block type="math_number"><title name="NUM">100</title></block>' : '<block type="variables_get_length"></block>') + '</value><next><block type="draw_move" inline="false"><title name="DIR">moveForward</title><value name="VALUE">' + ((opt_ijData.level == 7) ? '<block type="math_number"><title name="NUM">100</title></block>' : '<block type="variables_get_length"></block>') + '</value><next><block type="draw_turn" inline="false"><title name="DIR">turnRight</title><value name="VALUE"><block type="math_number"><title name="NUM">30</title></block></value><next><block type="procedures_callnoreturn" inline="false"><mutation name="draw a triangle"><arg name="length"></arg></mutation><value name="ARG0">' + ((opt_ijData.level == 7) ? '<block type="math_number"><title name="NUM">100</title></block>' : '<block type="variables_get_length"></block>') + '</value></block></next></block></next></block></next></block></statement></block>' : '');
  }
  output += '</div>';
  return output;
};


turtlepage.showInstructions = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
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
          output += 'Draw a triangle and then a square to draw an envelope.';
          break;
        case 6:
          output += 'Can you figure out how draw this triangle and square?';
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
          output += 'Use the new "draw a square" block, found in the "Functions" category, to draw a small green square.';
          break;
        case 3:
          output += 'Use the new block to draw 3 squares of size 100, each 120 degrees apart, in random colors.';
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
          output += 'Replace the pale (disabled) blocks with a "count with" block to draw the same spiral.';
          break;
        case 8:
          output += 'Draw three snowmen 150 dots tall in different colours, 100 dots apart.  Use the new "draw a snowman" function and "jump forward" block.';
          break;
        case 9:
          output += 'Draw a family of snowmen with heights of 110, 100, 90, 80, and 70, each 60 dots apart.';
          break;
        case 10:
          output += 'Draw whatever you want.  One idea is experimenting with different types of spirals.  What happens if you change the turn amount, rather than the move amount?  TODO: Add starting blocks.';
          break;
      }
      break;
    case 3:
      switch (opt_ijData.level) {
        case 1:
          output += 'You can now see how the "draw a square" and "draw a circle" functions are defined.  Defining a function doesn\'t run its blocks.  You have to pull out the "draw a square" block to actually draw a square.';
          break;
        case 2:
          output += 'Using the "draw a square" function as an example, create a "draw a triangle" function and use it.';
          break;
        case 3:
          output += 'Draw triangular fences around the cats and a square fence around the cow.';
          break;
        case 4:
          output += 'See if you can figure out how to use "draw a square" and "draw a triangle" (and some other blocks) to draw a house around the lion.';
          break;
        case 5:
          output += 'Now create and use a "draw a house" function to house two cats.';
          break;
        case 6:
          output += 'Using "draw a square" as an example, add an input named "length" to "draw a triangle".  Then, draw triangles in different colors around the animals.';
          break;
        case 7:
          output += 'Add a "length" input to "draw a house" and build a big house for the elephant.';
          break;
        case 8:
          output += 'Here are all of the blocks from the previous level.  Modify "draw a house" so the turtle ends up at the bottom right corner of the new house.  Use this modified function to house all the animals.';
          break;
        case 9:
          output += 'Use a "count with" block and your code from the previous level to draw houses of size 50, 100, and 150.';
          break;
        case 10:
          output += 'You\'re now free to do whatever you want.  One idea is to try running this program with different turn amounts (higher or lower than 90).  Other ideas are to draw a star, circle, heart, or animal.';
          break;
      }
      break;
  }
  return output;
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = turtlepage.messages(null, null, opt_ijData) + turtlepage.startBlocks(null, null, opt_ijData) + '<script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="blocks.js"><\/script>';
  if (opt_ijData.reinf) {
    output += turtlepage.showInterstitials(null, null, opt_ijData);
  } else {
    output += '<script type="text/javascript" src="../slider.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript">BlocklyApps.loadLanguageScripts(languageSrc);<\/script><script type="text/javascript" src="answers.js"><\/script><table class="nav-menu" width="100%" style="padding-top: 1em;"><tr><td><h1><span id="title"><a href="https://sites.google.com/site/computersciencefirst/">CS First</a> : ';
    switch (opt_ijData.page) {
      case 1:
        output += 'Turtle 1';
        break;
      case 2:
        output += 'Turtle 2';
        break;
      case 3:
        output += 'Turtle 3';
        break;
    }
    output += '</span> &nbsp; ';
    for (var i455 = 1; i455 < 11; i455++) {
      output += ' ' + ((i455 == opt_ijData.level) ? (i455 > 9) ? '<span class="selected doubleDigit tab">' + soy.$$escapeHtml(i455) + '</span>' : '<span class="selected tab">' + soy.$$escapeHtml(i455) + '</span>' : (i455 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i455) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i455) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i455) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i455) + '</a>');
    }
    output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select></td></tr></table><table><tr><td width=405><div id="bubble"><div id="prompt">' + turtlepage.showInstructions(null, null, opt_ijData) + '</div></div><div id="capacity"></div><div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="images" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="launch" onclick="Turtle.runButtonClick();"><img src="../media/1x1.gif" class="run icon21">Run</button><button id="resetButton" class="launch" onclick="Turtle.resetButtonClick();" style="display: none"><img src="../media/1x1.gif" class="stop icon21">Reset</button></td></tr></table><div id="toolbarDiv"><button title="See generated JavaScript code." onclick="BlocklyApps.showCode();"><img src=\'../media/1x1.gif\' class="code icon21"></button><button id="linkButton" title="See generated JavaScript code." onclick="BlocklyStorage.link();"><img src=\'../media/1x1.gif\' class="link icon21"></button></div></td><td valign="top">' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div></td></tr></table>';
  }
  return output;
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;">' + ((opt_ijData.page == 1) ? '<block type="draw_move_inline"></block>"><block type="draw_turn_inline' + ((opt_ijData.level <= 8) ? '_restricted' : '') + '"><title name="VALUE">90</title></block>' + ((opt_ijData.level >= 2) ? '<block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block>' : '') + ((opt_ijData.level >= 4) ? '<block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value></block>' : '') + ((opt_ijData.level >= 3) ? '<block type="controls_repeat"><title name="TIMES">4</title></block>' : '') + ((opt_ijData.level == 10) ? '<block type="draw_width" inline="false" x="158" y="67"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value></block>' : '') : (opt_ijData.page == 2 || opt_ijData.page == 3) ? '<category name="Actions"><block type="draw_move"><value name="VALUE"><block type="math_number"><title name="NUM">100</title></block></value></block>' + ((opt_ijData.page == 2 && opt_ijData.level >= 8) ? '<block type="jump"><value name="VALUE"><block type="math_number"><title name="NUM">50</title></block></value></block>' : '') + '<block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block></category><category name="Color"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="draw_colour"><value name="COLOUR"><block type="colour_random"></block></value></block></category>' + ((opt_ijData.page == 2 && opt_ijData.level >= 2) ? '<category name="Functions"><block type="draw_a_square" inline="true"><value name="VALUE"><block type="math_number"><title name="NUM">100</title></block></value></block>' + ((opt_ijData.level >= 8) ? '<block type="draw_a_snowman" inline="true"><value name="VALUE"><block type="math_number"><title name="NUM">100</title></block></value></block>' : '') + '</category>' : (opt_ijData.page == 3) ? (opt_ijData.level == 1) ? '<category name="Functions"><block type="procedures_callnoreturn"><mutation name="draw a circle"></mutation></block><block type="procedures_callnoreturn"><mutation name="draw a square"></mutation></block></category>' : '<category name="Functions" custom="PROCEDURE"></category>' : '') + '<category name="Loops">' + ((opt_ijData.page == 2 && opt_ijData.level >= 5 || opt_ijData.page == 3 && opt_ijData.level >= 9) ? '<block type="controls_for_counter"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value><value name="BY"><block type="math_number"><title name="NUM">10</title></block></value></block>' : '') + '<block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">4</title></block></value></block></category><category name="Math"><block type="math_number"></block>' + ((opt_ijData.level == 10) ? '<block type="math_arithmetic" inline="true"></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block>' : '') + '</category>' + ((opt_ijData.page == 2 && opt_ijData.level >= 5) ? '<category name="Variables"><block type="variables_get_counter"></block></category>' : (opt_ijData.page == 3 && opt_ijData.level >= 6) ? '<category name="Variables">' + ((opt_ijData.level >= 9) ? '<block type="variables_get_counter"></block>' : '') + '<block type="variables_get_length"></block></category>' : '') : '') + '</xml>';
};
