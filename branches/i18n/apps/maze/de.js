// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<table width="100%" height="100%"><tr><td width="410" valign="top"><h1><a href="http://blockly.googlecode.com/">Blockly</a> &gt; <a href="../index.html">Apps</a> &gt; Blockly Labyrinth</h1><p class="levelLine">  Level: &nbsp;';
  for (var i10 = 1; i10 < 11; i10++) {
    output += (i10 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i10) + '</span>' : '<a class="tab" href="?level=' + soy.$$escapeHtml(i10) + '">' + soy.$$escapeHtml(i10) + '</a>';
  }
  output += '</p><div id="bubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Ein Programm besteht aus einer Aneinanderreihungen von Anweisungen. Verbinde einige \'laufe vorwärts\' Blöcke, um mir zu helfen um das Ziel zu erreichen.';
      break;
    case 2:
      output += 'Welche Anweisungen werden benötigt um dieses Labyrinth zu durchlaufen?';
      break;
    case 3:
      output += 'Computer haben begrenzten Speicher. Dieses Labyrinth lässt sich mit nur 2 Anweisungen lösen. Benutze \'wiederholen\' um eine Anweisung mehr als ein mal aus zu führen.';
      break;
    case 4:
      output += 'Für dieses Labyrinth hast du nur 5 Anweisungen zur verfügung.';
      break;
    case 5:
      output += 'Pacman dreht sich links herum, wenn er nicht weiter geradeaus gehen kann.';
      break;
    case 6:
      output += 'Eine \'wenn\' Bedingung wird führt etwas nur aus, wenn die Bedingung wahr ist.  Versuche die Anweisung \'wenn ein Pfad vor Packman\' aus.';
      break;
    case 7:
      output += 'Dieses Labyrinth sieht schwieriger aus als die vorherigen. Ist es aber nicht.';
      break;
    case 8:
      output += 'Du kannst zwei \'wenn\' Bedingungen in einander verschachteln.';
      break;
    case 9:
      output += 'Wenn-ansonsten Anweisungen führen etwas aus wenn eine Bedingung zutrifft oder eine Alternative.';
      break;
    case 10:
      output += 'Schaffst du dieses komplexe Labyrinth.  Folge der Wand.  Dieses Labyrinth ist für fortgeschrittene!';
      break;
  }
  output += '</div><div id="capacity"></div></div><img id="pegman_bubble" height=42 width=55 src="pegman_bubble.png"><div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"></div><table width="100%"><tr><td style="width: 190px; text-align: center"><button title="Erzeugten JavaScript Code anzeigen" onclick="BlocklyApps.showCode();"><img src=\'../../media/1x1.gif\' class="code"></button><button id="linkButton" title="Blöcke abspeichern und Link erzeugen" onclick="BlocklyStorage.link();"><img src=\'../../media/1x1.gif\' class="link"></button><button id="randomizeButton" title="Randomize start and finish markers onclick="Maze.randomize();" style="display: none"><img src=\'../../media/1x1.gif\' class="random"></button></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();">Programm ausführen</button><button id="resetButton" class="launch" onclick="Maze.resetButtonClick();" style="display: none">Zurücksetzen</button></td></tr></table></td><td valign="top"><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../generators/javascript.js"><\/script><script type="text/javascript" src="../common.js"><\/script><script type="text/javascript">BlocklyApps.loadLanguageScripts(languageSrc);<\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div></td></tr></table>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<!-- Fix on sync.  --><xml id="toolbox" style="display: none"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level > 4) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 7) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


mazepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<script>var MSG = {moveForward: "laufe vorwärts", move: "laufe", forward: "vorwärts", backward: "zurück", turn: "drehen", left: "links herum", right: "rechts herum", randomly: "zufällig", path: "ein Pfad ist", ifPath: "wenn ein Pfad", doCode: "mache", else: "ansonsten", ahead: "vor Packman", toTheLeft: "links von Packman", toTheRight: "rechts von Packman", behind: "hinter Packman", repeatUntilFinished: "wiederhole bis zum Ziel", getX: "get X position", getY: "get Y position", getDirection: "get direction", moveForwardTooltip: "Packman läuft 1 Feld vor.", moveTooltip: "Packman läuft 1 Feld vor oder zurück", turnTooltip: "Dreht Packman nach links oder rechts", ifTooltip: "If there is a path in the specified direction, \\nthen do some actions.", ifelseTooltip: "Falls sich an der angegebenen Position ein Pfad \\nbefindet, dann führe die erste Anweisung aus. \\nAnderfalls führe die zweite Anweisung aus. ", whileTooltip: "Führe die angegebene Aktion aus, \\nbis das Ziel erreicht wurde. ", isPathTooltip: "Returns true if there is a path in the specified \\ndirection. ", getXTooltip: "Returns Pegman\'s horizontal position\\nLeft edge is 1, right edge is 8", getYTooltip: "Returns Pegman\'s vertical position\\nTop edge is 1, bottom edge is 8", getDirectionTooltip: "Retuns Pegman\'s direction. North: 0, \\nEast: 1, South: 2, West: 3. ", capacity0: "Du hast 0 Anweisungen zur Verfügung.", capacity1: "Du hast 1 Anweisung zur Verfügung.", capacity2: "Du hast %1 Anweisungen zur Verfügung.", nextLevel: "Gratulation! In das Level %1 gehen?", finalLevel: "Gratulation! Du hast das Spiel beendet.", oneTopBlock: "On this level, you need to stack together all of the blocks in the white workspace."};<\/script>';
};
