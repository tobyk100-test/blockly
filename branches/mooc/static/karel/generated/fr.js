// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="MSG" style="display: none"><span id="moveForward">avance</span><span id="putDownBall">put down ball</span><span id="pickUpBall">pick up ball</span><span id="while">while</span><span id="ballsPresent">balls present</span><span id="noBallsPresent">no balls present</span><span id="turnLeft">tourne à gauche</span><span id="turnRight">tourne à droite</span><span id="doCode">faire</span><span id="elseCode">sinon</span><span id="pathAhead">si chemin devant</span><span id="pathLeft">si chemin vers la gauche</span><span id="pathRight">si chem vers la droite</span><span id="noPathAhead">no path ahead</span><span id="noPathLeft">no path to the left</span><span id="noPathRight">no path to the right</span><span id="repeatUntil">répète jusqu\'a</span><span id="moveForwardTooltip">Fais avancer monsieur Pegman en avant d\'un espace.</span><span id="q4wrong">No - Try tracking my direction while following the program.</span><span id="q4right">That\'s right! Good job.</span><span id="q5wrong">No - Try tracking my direction while following the program.</span><span id="q5right">You got it right!</span><span id="q10wrong">No - Try tracking my direction while following the program.</span><span id="q10right">That\'s right!</span><span id="turnTooltip">Fais tourner monsieur Pegman à gauche ou à \\ndroite de 90 degrés. </span><span id="ifTooltip">Si il y\'a un chemin dans la direction specifiée, \\nalors effectue ces actions. </span><span id="ifelseTooltip">Si il y\'a un chemin dans la direction specifiée, \\nalors fais le premier bloc d\'actions. \\nSinon fais le second bloc d\'actions. </span><span id="whileTooltip">Répète les blocs qui sont à l\'intérieur jusqu\'à \\natteindre le but. </span><span id="capacity0">Il te reste 0 blocs.</span><span id="capacity1">Il te reste 1 bloc.</span><span id="capacity2">Il te reste %1 blocs.</span><span id="nextLevel">Bravo ! Est tu prêt pour le niveau %1?</span><span id="finalLevel">Bravo ! Tu as fini le dernier niveau.</span><span id="oneTopBlock">Dans ce niveau, tu as besoin d\'empiler les blocs les uns au dessus des autres dans la zone de travail blanche.</span></div><div id="COMMON_MSG" style="display: none"><span id="httpRequestError">Il y a eu un problème avec la demande.</span><span id="linkAlert">Partagez vos blocs grâce à ce lien:\n\n%1</span><span id="hashError">Désolé, \'%1\' ne correspond pas à un fichier Blockly sauvegarde.</span><span id="xmlError">Impossible de charger le fichier de sauvegarde.  Peut être a t-il ete créé avec une autre version de Blockly?</span></div><table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Labyrinthe</span> &nbsp; ';
  for (var i160 = 1; i160 < 17; i160++) {
    output += ' ' + ((i160 == opt_ijData.level) ? (i160 > 9) ? '<span class="selected doubleDigit tab">' + soy.$$escapeHtml(i160) + '</span>' : '<span class="selected singleDigit tab">' + soy.$$escapeHtml(i160) + '</span>' : (i160 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i160) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i160) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i160) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i160) + '</a>');
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
      output += 'Un programme est une séquence d\'instructions. Empile des blocs d\'instructions \'avance\' pour m\'aider à atteindre mon but.';
      break;
    case 2:
      output += 'Qu\'elle est la séquence de blocs à exécuter pour suivre ce chemin ?';
      break;
    case 3:
      output += 'Les ordinateurs n\'ont pas beaucoup de mémoire. Utilise seulement deux blocs pour atteindre le but. Utilise le bloc \'repète\' pour exécuter un bloc plus d\'une fois.';
      break;
    case 4:
      output += 'Atteint le but en utilisant seulement cinq blocs.';
      break;
    case 5:
      output += 'Monsieur Pegman devra tourner à gauche quand il ne pourra plus avancer tout droit.';
      break;
    case 6:
      output += 'Un bloc \'si\' va exécuter ce qu\'il y a dedans seulement si la condition est vraie. Essaie de tourner à gauche si il y a un chemin sur la gauche.';
      break;
    case 7:
      output += 'Ce labyrinthe a l\'air plus compliqué que le précédent, mais il ne l\'est pas.';
      break;
    case 8:
      output += 'Tu peux utiliser plus d\'une seule instruction \'si\'.';
      break;
    case 9:
      output += 'Un bloc \'Si-Sinon\' exécute une chose ou une autre.';
      break;
    case 10:
      output += 'Peux tu résoudre ce labyrinthe plus difficile? Essaie de suivre le mur du côté de ta main gauche.';
      break;
    case 11:
      output += 'Use the \'if-else\' block to help me get out of the maze!';
      break;
    case 12:
      output += 'Use the \'if-else\' block to help me get out of the maze!';
      break;
    case 13:
      output += 'Use the \'if-else\' block to help me get out of the maze!';
      break;
    case 14:
      output += 'Use the \'if-else\' block to help me get out of the maze!';
      break;
    case 15:
      output += 'Use the \'if-else\' block to help me get out of the maze!';
      break;
    case 16:
      output += 'Use the \'if-else\' block to help me get out of the maze!';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button title="Voir le code JavaScript généré\'." onclick="BlocklyApps.showCode();"><img src=\'../media/1x1.gif\' class="code icon21"></button><button id="linkButton" title="Sauvegarde et lies aux blocs." onclick="BlocklyStorage.link();"><img src=\'../media/1x1.gif\' class="link icon21"></button></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();"><img src="../media/1x1.gif" class="run icon21"> Execute le programme</button></button><button id="resetButton" class="launch" onclick="Maze.resetButtonClick();" style="display: none"><img src="../media/1x1.gif" class="stop icon21">Reset</button></td></tr></table><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript" src="../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div><div id="shadow"></div>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block><block type="maze_putDownBall"></block><block type="maze_pickUpBall"></block><block type="maze_while"></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 9) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
