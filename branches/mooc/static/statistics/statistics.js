function attachProgramListeners() {
  links = document.querySelector('.results > table > a');
  for (link in links) {
    link.addEventListener(link, function() {
      var program = link.innerHTML;
      alert("Program: " + program);
    });
  }
}
function init() {
  var resultTable = document.querySelector('.results > table');
  var req = new XMLHttpRequest();
  req.open("get", "/report", true);
  req.onload = function(e) {
    programs = JSON.parse(req.responseText);
    for (var program in programs) {
      var row = Templates.programRow(programs[program][0],
                                     programs[program][1],
                                     program);
      resultTable.appendChild(row);
    }
    attachProgramListeners();
  };
  req.send()
}
window.addEventListener('load', function() {
  init();
});
