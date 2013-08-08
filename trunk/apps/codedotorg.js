/**
 * On mobile devices, display some UI feature which hints the user to
 * turn to landscape.
 */
BlocklyApps.hintLandscape = function() {
  // Insert hint to turn to landscape.
  if (Blockly.userAgent.IPAD || Blockly.userAgent.ANDROID) {
    // Move blockly back so image covers it.
    document.getElementById('blockly').style.zIndex = 0;
    var landscapeHint = document.getElementById('landscape-hint');
    var displayHint = function(e) {
      if (window.orientation % 180 == 0) {
        landscapeHint.style.display = '';
      } else {
        landscapeHint.style.display = 'none';
      }
    };
    window.addEventListener('orientationchange', displayHint);
    displayHint();
  }
};
window.addEventListener('load', BlocklyApps.hintLandscape, false);
