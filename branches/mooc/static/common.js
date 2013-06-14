/**
 * Visual Blocks Editor
 *
 * Copyright 2013 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Common support code for Blockly apps.
 * @author fraser@google.com (Neil Fraser)
 */

'use strict';

/**
 * The richness of block colours, regardless of the hue.
 * MOOC blocks should be brighter (target audience is younger).
 * Must be in the range of 0 (inclusive) to 1 (exclusive).
 * Blockly's default is 0.45.
 */
Blockly.HSV_SATURATION = 0.6;

var BlocklyApps = {};

/**
 * Load the specified language file(s).
 * @param {!Array<string>} languageSrc Array of language files.
 */
BlocklyApps.loadLanguageScripts = function(languageSrc) {
  for (var x = 0; x < languageSrc.length; x++) {
    var file = languageSrc[x];
    if (file.match(/^(\w+\/)*\w+\.js$/)) {
      document.writeln('<script type="text/javascript" ' +
          'src="../' + file + '"><' + '/script>');
    } else {
      console.error('Illegal language file: ' + file);
    }
  }
};

/**
 * Updates the document's 'capacity' element's innerHTML with a message
 * indicating how many more blocks are permitted.  The capacity
 * is retrieved from Blockly.mainWorkspace.remainingCapacity().
 * @param {!Object} MSG An object with appropriate text properties for
 *     capacity0, capacity1, and capacity2.
 */
BlocklyApps.updateCapacity = function(MSG) {
  var cap = Blockly.mainWorkspace.remainingCapacity();
  var p = document.getElementById('capacity');
  if (cap == Infinity) {
    p.style.display = 'none';
  } else {
    p.style.display = 'inline';
    if (cap == 0) {
      p.innerHTML = MSG.capacity0;
    } else if (cap == 1) {
      p.innerHTML = MSG.capacity1;
    } else {
      cap = Number(cap);
      p.innerHTML = MSG.capacity2.replace('%1', cap);
    }
  }
};

/**
 * Congratulates the user for completing the level and offers to
 * direct them to the next level, if available.
 * @param {?number} page The current page.
 * @param {number} level The current level.
 * @param {number} maxLevel The maxmium available level.
 * @param {!Object} MSG An object with appropriate text properties for
 *     MSG.nextLevel and MSG.finalLevel.
 */
BlocklyApps.congratulations = function(page, level, maxLevel, MSG) {
  if (level < maxLevel) {
    var proceed = window.confirm(MSG.nextLevel.replace('%1', level + 1));
    if (proceed) {
      var url = window.location.protocol + '//' +
          window.location.host + window.location.pathname + '?';
      if (page) {
        url += 'page=' + page + '&';
      }
      url += 'level=' + (level + 1);
      window.location = url;
    }
  } else {
    window.alert(MSG.finalLevel);
  }
};

/**
 * Highlight the block (or clear highlighting).
 * @param {?string} id ID of block that triggered this action.
 */
BlocklyApps.highlight = function(id) {
  if (id) {
    var m = id.match(/^block_id_(\d+)$/)
    if (m) {
      id = m[1];
    }
  }
  Blockly.mainWorkspace.highlightBlock(id);
};

/**
 * If the user has executed too many actions, we're probably in an infinite
 * loop.  Sadly I wasn't able to solve the Halting Problem.
 * @param {?string} opt_id ID of loop block to highlight if timeout is reached.
 * @throws {false} Throws an error to terminate the user's program.
 */
BlocklyApps.checkTimeout = function(opt_id) {
  if (opt_id) {
    BlocklyApps.log.push([null, opt_id]);
  }
  if (BlocklyApps.ticks-- < 0) {
    // Highlight an infinite loop on death.
    throw false;
  }
};

/**
 * Convert the user's code to raw JavaScript.
 * @param {string} code Generated code.
 * @return {string} The code without serial numbers and timeout checks.
 */
BlocklyApps.stripCode = function(code) {
  // Strip out serial numbers.
  code = code.replace(/(,\s*)?'block_id_\d+'\)/g, ')');
  // Remove timeouts.
  var regex = new RegExp(Blockly.JavaScript.INFINITE_LOOP_TRAP
      .replace('(%1)', '\\(\\)'), 'g');
  return code.replace(regex, '');
};

/**
 * Show the user's code in raw JavaScript.
 */
BlocklyApps.showCode = function() {
  var code = Blockly.Generator.workspaceToCode('JavaScript');
  code = BlocklyApps.stripCode(code);
  window.alert(code);
};
