goog.provide('GridApp');

/** Supported languages */
BlocklyApps.LANGUAGES = {
  // Format: ['Language name', 'direction', 'XX_compressed.js']
  en: ['English', 'ltr', 'en_compressed.js']
};

/** The app's current language. */
BlocklyApps.LANG = BlocklyApps.getLang();

document.write('<script type="text/javascript" src="generated/' +
               BlocklyApps.LANG + '.js"></script>\n');

/**
 * @param {number} cols The number of columns in a level.
 * @param {number} rows The number of rows in a level.
 * @param {number} square_size The pixel size of each square.
 * @constructor
 */
GridApp = function(cols, rows, square_size) {
  this.COLS = cols;
  this.ROWS = rows;
  this.SQUARE_SIZE = square_size;
  this.GAME_WIDTH = cols * square_size;
  this.GAME_HEIGHT = rows * square_size;
};

/**
 * Draws the current skin's background.
 */
GridApp.prototype.drawBackground = function() {
  var svg = document.getElementById('svgBird');
  if (this.SKIN.background) {
    var tile = document.createElementNS(Blockly.SVG_NS, 'image');
    tile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
        this.SKIN.background);
    tile.setAttribute('height', this.GAME_HEIGHT);
    tile.setAttribute('width', this.GAME_WIDTH);
    tile.setAttribute('x', 0);
    tile.setAttribute('y', 0);
    svg.appendChild(tile);
  }
};
