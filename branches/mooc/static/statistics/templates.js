Templates = {};
Templates.createTableCell = function(contents) {
  var cell = document.createElement('td');
  cell.appendChild(document.createTextNode(contents));
  return cell;
}
Templates.programRow = function(success, count, program, handler) {
  var row = document.createElement('tr');
  var success_ = Templates.createTableCell(success);
  var count_ = Templates.createTableCell(count);
  var program_ = Templates.createTableCell(program);
  program_.className = "programCell longcol";
  row.appendChild(success_);
  row.appendChild(count_);
  row.appendChild(program_);
  Templates.addLink(program_, handler);
  return row;
}
Templates.addLink = function(cell, handler) {
  var contents = cell.firstChild;
  var link = document.createElement('a');
  link.href = '#';
  link.appendChild(contents);
  cell.appendChild(link);
  link.addEventListener('click', handler);
}
