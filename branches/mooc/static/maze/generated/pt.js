// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="MSG" style="display: none"><span id="moveForward">Mover para a frente</span><span id="turnLeft">gire para a esquerda</span><span id="turnRight">gire para a direita</span><span id="doCode">faça</span><span id="elseCode">senão</span><span id="pathAhead">se existe um caminho em frente</span><span id="pathLeft">se existe um caminho para a esquerda</span><span id="pathRight">se existe um caminho para a direita</span><span id="repeatUntil">repita até o</span><span id="moveForwardTooltip">Move o Pegman um quadro para frente.</span><span id="q3wrong">No - Try tracking my direction while following the program.</span><span id="q3right">That\'s right! Good job.</span><span id="q5wrong">No - Try tracking my direction while following the program.</span><span id="q5right">You got it right!</span><span id="q9wrong">No - Try tracking my direction while following the program.</span><span id="q9right">That\'s right!</span><span id="turnTooltip">Gire o Pegman 90 graus para esquerda ou para a \\ndireita. </span><span id="ifTooltip">Se existe um caminho na direção especificada, \\nentao executa algumas ações. </span><span id="ifelseTooltip">Se não existe um caminho na direção \\nespecificada, então execute o primeiro \\nbloco de ações. Senão, execute o \\nsegundo bloco de ações. </span><span id="whileTooltip">Repita as ações seguintes até que o ponto final \\nseja alcançado. </span><span id="capacity0">Você tem mais 0 blocos.</span><span id="capacity1">Você tem mais 1 blocos.</span><span id="capacity2">Você tem mais %1 blocos.</span><span id="nextLevel">Parabéns! Você está apto para o nível %1?</span><span id="finalLevel">Parabéns! Você resolveu o nível final.</span><span id="oneTopBlock">Neste nível, você precisa empilhar todos os blocos nos espaços em branco.</span></div><div id="COMMON_MSG" style="display: none"><span id="httpRequestError">Houve um problema com a solicitação.</span><span id="linkAlert">Compartilhe os seus blocos com este link:\n\n%1</span><span id="hashError">Desculpe, \'%1\' não corresponde a um blockly salvo.</span><span id="xmlError">Não foi possível ler o seu arquivo salvo.  Talvez ele tenha sido gerado por uma versão antiga do Blockly?</span></div><table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Quebra-cabeça</span> &nbsp; ';
  for (var i136 = 1; i136 < 11; i136++) {
    output += ' ' + ((i136 == opt_ijData.level) ? (i136 > 9) ? '<span class="selected doubleDigit tab">' + soy.$$escapeHtml(i136) + '</span>' : '<span class="selected tab">' + soy.$$escapeHtml(i136) + '</span>' : (i136 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i136) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i136) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i136) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i136) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select> &nbsp; <button id="pegmanButton" onmousedown="Maze.showPegmanMenu();"><img src="../media/1x1.gif"><span>&#x25BE;</span></button></td></tr></table><div id="levelFeedback"><div style="padding-bottom: 0.7ex;"><br><ul id="levelFeedbackText" style="resize: none; border: 0; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"><li id="nextLevelMsg" style="display: none">Parabéns! Você está apto para o nível %1?</li><li id="finalLevelMsg" style="display: none">Congratulations! You have solved the final level.</li><li id="emptyBlocksError" class="blockErrors" style="display:none">Remove unused empty blocks.</li><li id="ifError" class="blockErrors" style="display: none">Try using the if block.</li><li id="whileError" class="blockErrors" style="display:none">Try using the repeat block.</li><li id="tooManyBlocksError" class=blockErrors" style="display:none">This level can be solved with fewer blocks</li></ul><div id="interstitial" style="display: none;">' + ((opt_ijData.level == 2) ? '<img style="margin-left: 110px;" src="repeat_block.png">' : '') + '<br><div id="reinfbubble"><span id="reinfMsg">';
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
  output += '</span></div><img id="pegman_bubble" height=42 width=55 src="pegman_bubble.png">' + ((opt_ijData.level == 3) ? '<p><img border=2 src="dirs.png">&nbsp;<img src="dirs2.png"><br>' : '') + ((opt_ijData.level == 4) ? '<p><img style="margin-left: 110px;" src="ifblock.png"><br>' : '') + ((opt_ijData.level == 5) ? '<p><img style="margin-top: 10px;" border=2 src="repeat_block2.png"><br>' : '') + ((opt_ijData.level == 8) ? '<p><img style="margin-left: 60px; height: 150px; width: 260px;" src="if-else2.png"><br><br>' : '') + ((opt_ijData.level == 9) ? '<p><img style="margin-left: 10px; height: 350px; width: 490px;" src="ifelse.png"><br>' : '') + ((opt_ijData.level == 3) ? '<p><input type="radio" name="q3" id="q31" onclick="BlocklyApps.showReinfHelp(\'q3w\')"><label for="q31" style="font-weight: bold"> N</label><br><input type="radio" name="q3" id="q32" onclick="BlocklyApps.showReinfHelp(\'q3w\')"><label for="q32" style="font-weight: bold"> E</label><br><input type="radio" name="q3" id="q33" onclick="BlocklyApps.showReinfHelp(\'q3w\')"><label for="q33" style="font-weight: bold"> S</label><br><input type="radio" name="q3" id="q34" onclick="BlocklyApps.showReinfHelp(\'q3r\')"><label for="q34" style="font-weight: bold"> W</label><br><br></p><div id="reinfDone"><div style="padding-bottom: 0.7ex;"><div style="text-align: center;" id="reinfFeedbackImage"></div><br><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div><div style="text-align: center; padding-top: 1ex; padding-right: 3ex"><button id="okButton" class="launch" onclick="BlocklyApps.hideReinfHelp()&nbsp"><span>OK</span></button></div></div>' : '') + ((opt_ijData.level == 5) ? '<p><img style="margin-left: 30px;" src="repeat_blocka1.png" onclick="BlocklyApps.showReinfHelp(\'q5w\')"><img style="margin-left: 20px;" src="repeat_blocka2.png" onclick="BlocklyApps.showReinfHelp(\'q5r\')"><img style="margin-left: 20px;" src="repeat_blocka3.png" onclick="BlocklyApps.showReinfHelp(\'q5w\')"></p><div id="reinfDone"><div style="padding-bottom: 0.7ex"><div style="text-align: center;" id="reinfFeedbackImage"></div><br><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div><div style="text-align: center; padding-top: 1ex; padding-right: 3ex;"><button id="okButton" class="launch" onclick="BlocklyApps.hideReinfHelp()"><span>OK</span></button></div></div>' : '') + ((opt_ijData.level == 9) ? '<p><input type="radio" name="q9" id="q91" onClick="BlocklyApps.showReinfHelp(\'q9r\')"><label for="q91" style="font-weight: bold"> Yes</label><br><input type="radio" name="q9" id="q92" onClick="BlocklyApps.showReinfHelp(\'q9w\')"><label for="q92" style="font-weight: bold"> No</span><br><br></p><div id="reinfDone"><div style="padding-bottom: 0.7ex;"><div style="text-align:center;" id="reinfFeedbackImage"></div><br><textarea id="reinfFeedbackText" rows=2 cols=40 style="resize: none; border: none; text-align: center; overflow: hidden; font-size: 16pt; font-family: Arial;"></textarea></div><div style="text-align: center; padding-top: 1ex; padding-right: 3ex;"><button id="okButton" class="launch" onclick="BlocklyApps.hideReinfHelp()"><span>OK</span></button></div></div>' : '') + '</div><br><br><div style="text-align: center"><button id="tryAgainButton" class="launch" style="display: none" onclick="BlocklyApps.closeModalDialog(false);">Try again</button><button id="continueButton" class="launch" style="display: none" onclick="BlocklyApps.closeModalDialog(true);">Continue</button></div></div></div><div id="visualization"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Um programa é uma sequência de declarações. Empilhe alguns blocos \'Mover para a frente\' para ajudar-me a chegar ao destino.';
      break;
    case 2:
      output += 'Qual é a sequência de passos para seguir este caminho?';
      break;
    case 3:
      output += 'Os computadores têm uma memoria limitada. Chegue ao destino usando apenas dois blocos. Utilize o comando \'repita\' para executar um bloco várias vezes.';
      break;
    case 4:
      output += 'Chegue ao destino utilizando apenas cinco blocos.';
      break;
    case 5:
      output += 'Pegman will have to turn left when he cannot go straight.';
      break;
    case 6:
      output += 'A condição \'se\' executa algo apenas se a condição for verdadeira. Tente girar à esquerda se existe um caminho à esquerda';
      break;
    case 7:
      output += 'Este quebra-cabeças parece ser mais complicado que o anterior, mas nao é.';
      break;
    case 8:
      output += 'Você pode utilizar mais de um comando \'se\'.';
      break;
    case 9:
      output += 'O comando \'Se-senão\' faz uma coisa ou outra.';
      break;
    case 10:
      output += 'Você consegue resolver este quebra cabeças complexo. Tente seguir o muro do lado esquerdo. Para programadores avançados apenas!';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button title="Veja o código JavaScript gerado." onclick="BlocklyApps.showCode();"><img src=\'../media/1x1.gif\' class="code icon21"></button><button id="linkButton" title="Salva conexão com o blockly." onclick="BlocklyStorage.link();"><img src=\'../media/1x1.gif\' class="link icon21"></button></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();"><img src="../media/1x1.gif" class="run icon21"> Executar programa</button></button><button id="resetButton" class="launch" onclick="BlocklyApps.resetButtonClick();" style="display: none"><img src="../media/1x1.gif" class="stop icon21">Reiniciar</button></td></tr></table><script type="text/javascript" src="../blockly_compressed.js"><\/script><script type="text/javascript" src="../javascript_compressed.js"><\/script><script type="text/javascript" src="../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div><div id="shadow"></div>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 5) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 5) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
