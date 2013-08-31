Statistics = {};
Statistics.initialize = function() {
  var level = Statistics.getLevel();
  var req = new XMLHttpRequest();
  req.open("get", "/report?level=" + level, true);
  req.onload = function(e) {
    programs = JSON.parse(req.responseText);
    Statistics.buildTable(programs);
  };
  req.send()
}

Statistics.getLevel = function() {
  return Statistics.BlocklyApps.LEVEL;
}

Statistics.linkHandler = function(e) {
  var link = e.target;
  var program = Statistics.unescapeHtml(link.innerHTML);
  program = Statistics.Blockly.Xml.textToDom(program);
  Statistics.Blockly.mainWorkspace.clear();
  Statistics.Blockly.Xml.domToWorkspace(Statistics.Blockly.mainWorkspace, program);
}

// TODO(toby): Use a library function to ensure XSS proofness, see closure's
// string.unescapeEntities
Statistics.unescapeHtml = function(html) {
  var unescapedHtml = html.replace(/&lt;|&gt;/g, function(entity) {
    var map = {"&lt;": "<", "&gt;": ">"};
    return map[entity];
  });
  return unescapedHtml;
}
Statistics.buildTable = function(programs) {
  var resultTable = document.querySelector('.results > table');
  for (var program in programs) {
    var row = Templates.programRow(programs[program][0], programs[program][1],
        program, Statistics.linkHandler);
    resultTable.appendChild(row);
  }
}

window.addEventListener('load', function() {
  Statistics.MazeFrame = document.getElementById("mazeFrame").contentWindow;
  document.getElementById("mazeFrame").addEventListener('load', function() {
    Statistics.initialize();
  });
  Statistics.Maze = Statistics.MazeFrame.Maze;
  Statistics.BlocklyApps = Statistics.MazeFrame.BlocklyApps;
  Statistics.Blockly = Statistics.MazeFrame.Blockly;
  Statistics.initialize();
});
