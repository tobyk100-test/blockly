function attachProgramListeners() {
  links = document.querySelector('.results > table > a');
  for (link in links) {
    link.addEventListener(link, function() {
      var program = link.innerHTML;
    });
  }
}
function linkHandler(e) {
  var Blockly = document.getElementById('mazeFrame').contentWindow['Blockly'];
  var link = e.target;
  var program = unescapeHtml(link.innerHTML);
  program = Blockly.Xml.textToDom(program);
  Blockly.mainWorkspace.clear();
  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, program);
}
// TODO(toby): Use a library function to ensure XSS proofness, see closure's
// string.unescapeEntities
function unescapeHtml(html) {
  var unescapedHtml = html.replace(/&lt;|&gt;/g, function(entity) {
    var map = {"&lt;": "<", "&gt;": ">"};
    return map[entity];
  });
  return unescapedHtml;
}
function buildTable(programs) {
  var resultTable = document.querySelector('.results > table');
  for (var program in programs) {
    var row = Templates.programRow(programs[program][0], programs[program][1],
        program, linkHandler);
    resultTable.appendChild(row);
  }
  attachProgramListeners();
}
function init() {
  var req = new XMLHttpRequest();
  req.open("get", "/report", true);
  req.onload = function(e) {
    programs = JSON.parse(req.responseText);
    buildTable(programs);
  };
  req.send()
}
window.addEventListener('load', function() {
  init();
});
