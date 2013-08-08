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
GridApp = function(width, height) {
  this.GAME_WIDTH = width;
  this.GAME_HEIGHT = height;
  /**
   * @type {!Array.<!GridApp.Skin>}
   * @private
   */
  this.skins_ = [];
};

/**
 * An internal class representing a skin.
 * @param {Object} opt_skin @see {Bird.prototype.addSkin}
 * @protected
 * @constructor
 */
GridApp.Skin = function(opt_skin) {
    // Spring canopy, photo by Rupert Fleetingly, CC licensed for reuse.
    this.background = opt_skin.background || 'media/bg_panda.jpg';
    this.look = opt_skin.look || '#000';
};

/**
 * Draws the current skin's background.
 */
GridApp.prototype.drawBackground = function() {
  var svg = document.getElementById('svgBird');
  if (this.skin.background) {
    var tile = document.createElementNS(Blockly.SVG_NS, 'image');
    tile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href',
        this.skin.background);
    tile.setAttribute('height', this.GAME_HEIGHT);
    tile.setAttribute('width', this.GAME_WIDTH);
    tile.setAttribute('x', 0);
    tile.setAttribute('y', 0);
    tile.setAttribute('opacity', .3);
    svg.appendChild(tile);
  }
};
