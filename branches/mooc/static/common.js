/**
 * Blockly Apps: Common code
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

var BlocklyApps = {};

BlocklyApps.BLOCK_TEST_FAIL = 1;
BlocklyApps.IDEAL_TEST_FAIL = 2;
BlocklyApps.ALL_TESTS_PASS = 3;

/**
 * Pseudo-random identifier used for tracking user progress within a level.
 */
BlocklyApps.LEVEL_ID = Math.random();

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
BlocklyApps.getStringParamFromUrl = function(name, defaultValue) {
  var val =
      window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1]) : defaultValue;
};

/**
 * Extracts a numeric parameter from the URL.
 * If the parameter is absent or less than min_value, min_value is
 * returned.  If it is greater than max_value, max_value is returned.
 * @param {string} name The name of the parameter.
 * @param {number} minValue The minimum legal value.
 * @param {number} maxValue The maximum legal value.
 * @return {number} A number in the range [min_value, max_value].
 */
BlocklyApps.getNumberParamFromUrl = function(name, minValue, maxValue) {
  var val = Number(BlocklyApps.getStringParamFromUrl(name, 'NaN'));
  return isNaN(val) ? minValue : Math.min(Math.max(minValue, val), maxValue);
};

/**
 * Use a series of heuristics that determine the likely language of this user.
 * Use a session cookie to load/save the language preference.
 * @return {string} User's language.
 * @throws {string} If no languages exist in this app.
 */
BlocklyApps.getLang = function() {
  // First choice: The URL specified language.
  var lang = BlocklyApps.getStringParamFromUrl('lang', '');
  if (BlocklyApps.LANGUAGES[lang]) {
    // Save this explicit choice as cookie.
    // Use of a session cookie for saving language is explicitly permitted
    // in the EU's Cookie Consent Exemption policy.  Section 3.6:
    // http://ec.europa.eu/justice/data-protection/article-29/documentation/
    //   opinion-recommendation/files/2012/wp194_en.pdf
    document.cookie = 'lang=' + escape(lang) + '; path=/';
    return lang;
  }
  // Second choice: Language cookie.
  var cookie = document.cookie.match(/(^|;)\s*lang=(\w+)/);
  if (cookie) {
    lang = unescape(cookie[2]);
    if (BlocklyApps.LANGUAGES[lang]) {
      return lang;
    }
  }
  // Third choice: The browser's language.
  lang = navigator.language;
  if (BlocklyApps.LANGUAGES[lang]) {
    return lang;
  }
  // Fourth choice: English.
  lang = 'en';
  if (BlocklyApps.LANGUAGES[lang]) {
    return lang;
  }
  // Fifth choice: I'm feeling lucky.
  for (var lang in BlocklyApps.LANGUAGES) {
    return lang;
  }
  // Sixth choice: Die.
  throw 'No languages available.';
};

/**
 * User's language.
 * @type {?string}
 */
BlocklyApps.LANG = undefined;

/**
 * List of languages supported by this app.  Keys should be in ISO 639 format.
 * @type {Object}
 */
BlocklyApps.LANGUAGES = undefined;

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
 * Common startup tasks for all apps.
 */
BlocklyApps.init = function() {
  // Set the page title with the content of the translated title.
  document.title = document.getElementById('title').textContent;

  // Set the HTML's language and direction.
  // document.dir fails in Mozilla, use document.body.parentNode.dir instead.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=151407
  var rtl = BlocklyApps.LANGUAGES[BlocklyApps.LANG][1] == 'rtl';
  document.head.parentElement.setAttribute('dir',
      BlocklyApps.LANGUAGES[BlocklyApps.LANG][1]);
  document.head.parentElement.setAttribute('lang', BlocklyApps.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in BlocklyApps.LANGUAGES) {
    languages.push(BlocklyApps.LANGUAGES[lang].concat(lang));
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == BlocklyApps.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }

  // Disable the link button if page isn't backed by App Engine storage.
  var linkButton = document.getElementById('linkButton');
  if ('BlocklyStorage' in window) {
    BlocklyStorage.HTTPREQUEST_ERROR = BlocklyApps.getMsg('httpRequestError');
    BlocklyStorage.LINK_ALERT = BlocklyApps.getMsg('linkAlert');
    BlocklyStorage.HASH_ERROR = BlocklyApps.getMsg('hashError');
    BlocklyStorage.XML_ERROR = BlocklyApps.getMsg('xmlError');
    // Swap out the BlocklyStorage's alert() for a nicer dialog.
    // TODO in branch.
    //BlocklyStorage.alert = BlocklyApps.storageAlert;
  } else if (linkButton) {
    linkButton.className = 'disabled';
  }

  // Fixes viewport for small screens.
  var viewport = document.querySelector('meta[name="viewport"]');
  if (viewport && screen.availWidth < 725) {
    viewport.setAttribute('content',
        'width=725, initial-scale=.35, user-scalable=no');
  }
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
BlocklyApps.loadBlocks = function(defaultXml) {
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    // An href with #key trigers an AJAX call to retrieve saved blocks.
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else if (window.sessionStorage.loadOnceBlocks) {
    // Language switching stores the blocks during the reload.
    var text = window.sessionStorage.loadOnceBlocks;
    delete window.sessionStorage.loadOnceBlocks;
    var xml = Blockly.Xml.textToDom(text);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  } else if (defaultXml) {
    // Load the editor with default starting blocks.
    var xml = Blockly.Xml.textToDom(defaultXml);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  } else if ('BlocklyStorage' in window) {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  }
};

/**
 * Save the blocks and reload with a different language.
 */
BlocklyApps.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var text = Blockly.Xml.domToText(xml);
  window.sessionStorage.loadOnceBlocks = text;

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
      languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;
};

/**
 * Congratulates the user for completing the level and offers to
 * direct them to the next level, if available.
 * @param {?number} page The current page.
 * @param {number} level The current level.
 * @param {number} maxLevel The maxmium available level.
 * @param {?number} reinf Non-null if there is an interstitial to show after
 *     this screen, in which case the value is included in the URL.
 */
BlocklyApps.congratulations = function(page, level, maxLevel, reinf) {
  if (level < maxLevel) {
    var proceed = window.confirm(
        BlocklyApps.getMsg('nextLevel').replace('%1', level + 1));
    if (proceed) {
      var url = window.location.protocol + '//' +
          window.location.host + window.location.pathname + '?';
      if (page) {
        url += 'page=' + page + '&';
      }
      url += 'level=' + (level + 1);
      if (reinf) {
        url += '&reinf=' + reinf;
      }
      window.location = url;
    }
  } else {
    window.alert(MSG.finalLevel);
  }
};

/**
 * Updates the document's 'capacity' element's innerHTML with a message
 * indicating how many more blocks are permitted.  The capacity
 * is retrieved from Blockly.mainWorkspace.remainingCapacity().
 */
BlocklyApps.updateCapacity = function() {
  var cap = Blockly.mainWorkspace.remainingCapacity();
  var p = document.getElementById('capacity');
  if (cap == Infinity) {
    p.style.display = 'none';
  } else {
    p.style.display = 'inline';
    if (cap == 0) {
      p.innerHTML = BlocklyApps.getMsg('capacity0');
    } else if (cap == 1) {
      p.innerHTML = BlocklyApps.getMsg('capacity1');
    } else {
      cap = Number(cap);
      p.innerHTML = BlocklyApps.getMsg('capacity2').replace('%1', cap);
    }
  }
};

/**
 * Highlight the block (or clear highlighting).
 * @param {?string} id ID of block that triggered this action.
 */
BlocklyApps.highlight = function(id) {
  if (id) {
    var m = id.match(/^block_id_(\d+)$/);
    if (m) {
      id = m[1];
    }
  }
  Blockly.mainWorkspace.highlightBlock(id);
};

/**
 * If the user has executed too many actions, we're probably in an infinite
 * loop.  Sadly I wasn't able to solve the Halting Problem.
 * @param {!Array} log Log of user commands.
 * @param {number} ticks Number of remaining ticks the program may run.
 * @param {?string} opt_id ID of loop block to highlight.
 * @throws {Infinity} Throws an error to terminate the user's program.
 */
BlocklyApps.checkTimeout = function(log, ticks, opt_id) {
  if (opt_id) {
    log.push([null, opt_id]);
  }
  if (ticks-- < 0) {
    throw Infinity;
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

/**
 * Check user's code for empty top-level blocks e.g. 'repeat'.
 * @return {boolean} true if block is empty (no blocks are nested inside).
 */
BlocklyApps.hasEmptyTopLevelBlocks = function() {
  var code = Blockly.Generator.workspaceToCode('JavaScript');
  code = BlocklyApps.stripCode(code);
  return /\{\s*\}/.test(code);
};

/**
 * Check to see if the user's code contains the required blocks for a level.
 * @param {Array} requiredBlocks array of strings of block names.
 * A special case is 'while' is used instead of 'repeat' because it is based on
 *   the JavaScript generated code).
 * @return {!Array} notEnoughBlocks array of strings where each string is
 *   a block type that is not present in the workspace/user's code.
 */
BlocklyApps.getMissingRequiredBlocks = function(requiredBlocks) {
  var code = Blockly.Generator.workspaceToCode('JavaScript');
  code = BlocklyApps.stripCode(code);
  var notEnoughBlocks = [];
  if (requiredBlocks) {
    for (var b in requiredBlocks) {
      var blockType = requiredBlocks[b];
      var regex = new RegExp(blockType, 'g');
      if (!code.match(regex)) {
        notEnoughBlocks.push(blockType);
      }
    }
  }
  return notEnoughBlocks;
};

/**
 * Compare the number of blocks in the workspace to an ideal number of blocks
 * specified for each level.
 * @param {number} idealNumber The ideal number of blocks.
 * @return {number} 0 if the ideal number of blocks were used,
 * otherwise returns -1 if too few blocks are used and 1 if too many blocks.
 */
BlocklyApps.hasIdealNumberOfBlocks = function(idealNumber) {
  var numBlocks = Blockly.mainWorkspace.getAllBlocks().length;
  if (numBlocks == idealNumber) {
    // 0 / 0 is NaN so equation below will not work.
    return 0;
  } else {
    return (numBlocks - idealNumber) / Math.abs(numBlocks - idealNumber);
  }
};

/**
 * Run all of the code tests and set appropriate feedback to display when
 * modal dialog is displayed.
 * @param {number} idealNumber The ideal number of blocks.
 * @param {!Array} requiredBlocks The required block types.
 * @param {boolean} levelComplete true if the level was completed,
 *     false otherwise.
 * @param {number} attempts The number of times a level was attempted.
 * @param {number} maxFeedbackVersion The number of versions of feedback
 *     for a given block type.
 * @param {number} attempts The number of attempts by the user.
 * @return {number}
 *   BLOCK_TEST_FAIL if any block error tests fail.
 *   IDEAL_TEST_FAIL if more than the ideal number of blocks are used.
 *   ALL_TESTS_PASS if all tests pass.
 */
BlocklyApps.runTestsAndSetErrorFeedback = function(
  idealNumber, requiredBlocks, levelComplete, attempts, maxFeedbackVersion) {
  var versionOfFeedback = Math.min(attempts, maxFeedbackVersion);
  var testResult = null;
  /**
   * Level 1 tests, user will need to try again after improving their code.
   */
  // If there are empty blocks, display the empty block error.
  var emptyBlocksE = document.getElementById('emptyBlocksError');
  if (BlocklyApps.hasEmptyTopLevelBlocks()) {
    emptyBlocksE.style.display = 'list-item';
    testResult = BlocklyApps.BLOCK_TEST_FAIL;
  } else {
    emptyBlocksE.style.display = 'none';
  }
  // For each error type in the array, display the corresponding error.
  var requiredBlockErrors = BlocklyApps.getMissingRequiredBlocks(
      requiredBlocks);
  if (requiredBlockErrors.length) {
    for (var e = 0, bError; bError = requiredBlockErrors[e]; e++) {
      var blockErrorElement = document.getElementById(bError + 'Error' +
                                                      versionOfFeedback);
      if (blockErrorElement) {
        blockErrorElement.style.display = 'list-item';
      }
    }
    testResult = BlocklyApps.BLOCK_TEST_FAIL;
  }
  /**
   * Level 2 tests, user can try again and improve their code or continue to the
   *     next level/interstitial.
   */
  if (!testResult) {
    var idealTestResult = BlocklyApps.hasIdealNumberOfBlocks(idealNumber);
    if (levelComplete) {
      if (idealTestResult <= 0) {
        testResult = BlocklyApps.ALL_TESTS_PASS;
      } else {
        testResult = BlocklyApps.IDEAL_TEST_FAIL;
        document.getElementById('tooManyBlocksError')
            .style.display = 'list-item';
      }
    } else if (idealTestResult <= -1) {
      document.getElementById('tooFewBlocksError').style.display = 'list-item';
      testResult = BlocklyApps.BLOCK_TEST_FAIL;
    } else if (idealTestResult >= 1) {
      document.getElementById('tooManyBlocksError').style.display = 'list-item';
      testResult = BlocklyApps.BLOCK_TEST_FAIL;
    }
  }
  BlocklyApps.displayStars(levelComplete, testResult);
  return testResult;
};

/**
 * Show stars based on the degree of completion and if the level is complete.
 * @param {number} levelComplete true if the user has completed the level.
 * @param {number} testResult The number of stars to display.
 */
BlocklyApps.displayStars = function(levelComplete, testResult) {
  if (levelComplete) {
    document.getElementById('star' + testResult).style.display = 'block';
  }
};

/**
 * Gets the message with the given key from the document.
 * @param {string} key The key of the document element.
 * @return {string} The innerHTML of the specified element,
 *     or an error message if the element was not found.
 */
BlocklyApps.getMsg = function(key) {
  var msg = BlocklyApps.getMsgOrNull(key);
  return msg ? msg : '[Unknown message: ' + key + ']';
};

/**
 * Gets the message with the given key from the document.
 * @param {string} key The key of the document element.
 * @return {string} The innerHTML of the specified element,
 *     or null if the element was not found.
 */
BlocklyApps.getMsgOrNull = function(key) {
  var element = document.getElementById(key);
  if (element) {
    var text = element.innerHTML;
    // Convert newline sequences.
    text = text.replace(/\\n/g, '\n');
    return text;
  } else {
    return null;
  }
};

/**
 * Where to report back information about the user program.
 */
BlocklyApps.REPORT_URL = '/report';

/**
 * Report back to the server, if available.
 * @param {string} app The name of the application.
 * @param {number} id A unique identifier generated when the page was loaded.
 * @param {number} level The current level of the application.
 * @param {number} result An indicator of the success of the code.
 * @param {string} program The user program, which will get URL-encoded.
 */
BlocklyApps.report = function(app, id, level, result, program) {
  if ('BlocklyStorage' in window) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', BlocklyApps.REPORT_URL);
    httpRequest.setRequestHeader('Content-Type',
        'application/x-www-form-urlencoded');
    httpRequest.send('app=' + app +
        '&id=' + id +
        '&level=' + level +
        '&result=' + result +
        '&program=' + encodeURIComponent(program));
  }
};

/**
 * On touch enabled browsers, add touch-friendly variants of event handlers
 * for elements such as buttons whose event handlers are specified in the
 * markup. For example, ontouchend is treated as equivalent to onclick.
 */
BlocklyApps.addTouchEvents = function() {
  // Do nothing if the browser doesn't support touch.
  if (!('ontouchstart' in document.documentElement)) {
    return;
  }
  // Treat ontouchend as equivalent to onclick for buttons.
  var buttons = document.getElementsByTagName('button');
  for (var i = 0, button; button = buttons[i]; i++) {
    if (!button.ontouchend) {
      button.ontouchend = button.onclick;
    }
  }
};

/**
 * Show dialog at the end of a level and display feedback.
 * @param {number} feedbackType
 *   BLOCK_TEST_FAIL, show feedback and try again button.
 *   IDEAL_TEST_FAIL, show feedback and try again/continue buttons.
 *   ALL_TESTS_PASS, show feedback and continue button (to interstitial
 *       or next level).
 * @param {number} level The current level.
 * @param {number} maxLevel The maximum level.
 */
BlocklyApps.showDialogAndFeedback = function(feedbackType, level, maxLevel) {
  var feedbackColor;
  var feedbackText = document.getElementById('levelFeedbackText');
  if (feedbackType == BlocklyApps.ALL_TESTS_PASS) {
    feedbackColor = 'green';
    feedbackText.style.textAlign = 'center';
    document.getElementById('hintTitle').style.display = 'none';
    if (level < maxLevel) {
      document.getElementById('nextLevelMsg').style.display = 'inline';
    } else {
      document.getElementById('finalLevelMsg').style.display = 'inline';
    }
    document.getElementById('continueButton').style.display = 'inline';
    document.getElementById('tryAgainButton').style.display = 'none';
  } else {
    feedbackColor = 'red';
    feedbackText.style.textAlign = 'left';
    document.getElementById('hintTitle').style.display = 'inline';
    if (feedbackType == BlocklyApps.BLOCK_TEST_FAIL) {
      document.getElementById('tryAgainButton').style.display = 'inline';
      document.getElementById('continueButton').style.display = 'none';
    } else if (feedbackType == BlocklyApps.IDEAL_TEST_FAIL) {
      document.getElementById('tryAgainButton').style.display = 'inline';
      document.getElementById('continueButton').style.display = 'inline';
    }
  }
  document.getElementById('shadow').style.display = 'block';
  document.getElementById('levelFeedback').style.display = 'block';
  feedbackText.style.display = 'block';
  feedbackText.style.color = feedbackColor;
};

/**
 * Hide end of level feedback.
 */
BlocklyApps.hideFeedback = function() {
  document.getElementById('levelFeedbackText').style.display = 'none';
  var feedbackArray = document.querySelectorAll('.feedback');
  for (var f = 0, feedback; feedback = feedbackArray[f]; f++) {
    feedback.style.display = 'none';
  }
};

/**
 * Hide the modal dialog.
 */
BlocklyApps.hideDialog = function() {
  document.getElementById('shadow').style.display = 'none';
  document.getElementById('levelFeedback').style.display = 'none';
  BlocklyApps.hideFeedback();
};

/**
 * Show the help pop-up for reinf levels so we can set text appropriately.
 * @param {number} reinfLevel Level number the quiz is displayed on.
 * @param {string} identifier 'q' + reinforcement level number +
 *     'r' or 'w' (right or wrong answer).
 */
BlocklyApps.showReinfHelp = function(reinfLevel, identifier) {
  var qNum = reinfLevel;
  var responseType = identifier.charAt(identifier.length - 1);
  document.getElementById('reinfDone').style.display = 'block';
  var textColor;
  var responseType;
  if (responseType == 'w') {
    textColor = 'red';
    responseType = 'wrong';
  } else if (responseType == 'r') {
    textColor = 'green';
    responseType = 'right';
    document.getElementById('continueButton').removeAttribute('disabled');
  } else {
    throw 'Response not w or r.';
  }
  var textDiv = document.getElementById('reinfFeedbackText');
  textDiv.style.color = textColor;
  textDiv.value = BlocklyApps.getMsg('q' + qNum + responseType);
};

/**
 * @param {boolean} gotoNext true to continue to next level/interstitial,
 *     false to try level again.
 * @param {number} level The current level.
 * @param {number} skinId The maximum level.
 */
BlocklyApps.displayInterstitialOrCloseModalDialog =
  function(gotoNext, level, skinId) {
  if (gotoNext) {
    var reinfMSG = document.getElementById('reinfMsg').innerHTML.match(/\S/);
    var interstitial = document.getElementById('interstitial').style.display;
    if (reinfMSG && interstitial == 'none') {
      BlocklyApps.hideFeedback();
      if (document.querySelector('.quiz')) {
        document.getElementById('continueButton').setAttribute('disabled',
                                                               'disabled');
      } else {
        document.getElementById('reinfDone').style.display = 'none';
      }
      document.getElementById('interstitial').style.display = 'block';
      document.getElementById('tryAgainButton').style.display = 'none';
    } else {
      BlocklyApps.hideDialog();
      BlocklyApps.createURLAndOpenNextLevel(level, skinId);
    }
  } else {
    BlocklyApps.hideDialog();
    BlocklyApps.resetButtonClick();
  }
};

/**
 * Construct the URL and go to the next level.
 * @param {number} level The current level.
 * @param {number} skinId The skin identifier.
 */
BlocklyApps.createURLAndOpenNextLevel = function(level, skinId) {
  window.location = window.location.protocol + '//' +
    window.location.host + window.location.pathname +
    '?lang=' + BlocklyApps.LANG + '&level=' + (level + 1) +
    '&skin=' + skinId;
};

/**
 * Click the reset button.  Reset the application.
 */
BlocklyApps.resetButtonClick = function() {
  document.getElementById('runButton').style.display = 'inline';
  document.getElementById('resetButton').style.display = 'none';
  Blockly.mainWorkspace.traceOn(false);
  Maze.reset(false);
};

/**
 * If there is an interstitial iframe, create a URL for the video stored in
 *     Google Drive and add it as the iframe source.
 * @param {string} videoId A Google Drive video ID.
 */
BlocklyApps.addVideoIframeSrc = function(videoId) {
  var videoIframe = document.getElementById('interstitial')
      .getElementsByTagName('iframe')[0];
  if (videoIframe) {
    var videoUrl = 'https://docs.google.com/file/d/' + videoId + '/preview';
    videoIframe.src = videoUrl;
  }
};

// Add events for touch devices when the window is done loading.
window.addEventListener('load', BlocklyApps.addTouchEvents, false);
