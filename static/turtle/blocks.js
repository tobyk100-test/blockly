/**
 * Blockly Demo: Turtle Graphics
 *
 * Copyright 2012 Google Inc.
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
 * @fileoverview Demonstration of Blockly: Turtle Graphics.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

// Extensions to Blockly's language and JavaScript generator.

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

// Limited blocks for tutorial.

Blockly.Language.draw_move_forward_inline = {
  // Block for moving forward the internal number of pixels.
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(MSG.moveForward);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput('100',
          Blockly.FieldTextInput.numberValidator), 'VALUE')
        .appendTitle(MSG.pixels);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.moveForwardTooltip);
  }
};

Blockly.JavaScript.draw_move_forward_inline = function() {
  // Generate JavaScript for moving forward the internal number of pixels.
  var value = window.parseFloat(this.getTitleValue('VALUE'));
  return 'Turtle.moveForward(' + value + ', \'' + this.id + '\');\n';
};

Blockly.Language.draw_move_inline = {
  // Block for moving forward or backward the internal number of pixels.
  helpUrl: 'http://www.example.com/',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(
            Blockly.Language.draw_move.DIRECTIONS), 'DIR');
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput('100',
          Blockly.FieldTextInput.numberValidator), 'VALUE')
        .appendTitle(MSG.pixels);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.moveForwardTooltip);
  }
};

Blockly.JavaScript.draw_move_inline = function() {
  // Generate JavaScript for moving forward or backward the internal number of
  // pixels.
  var value = window.parseFloat(this.getTitleValue('VALUE'));
  return 'Turtle.' + this.getTitleValue('DIR') +
      '(' + value + ', \'' + this.id + '\');\n';
};

Blockly.Language.draw_turn_right_inline_restricted = {
  // Block for turning right from among a fixed set of angles.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(MSG.turnRight);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.VALUE), 'VALUE')
        .appendTitle(MSG.degrees);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.turnTooltip);
  }
};

Blockly.Language.draw_turn_right_inline_restricted.VALUE =
    [30, 45, 60, 90, 120, 135, 150, 180].
    map(function(t) {return [String(t), String(t)];});

Blockly.JavaScript.draw_turn_right_inline_restricted = function() {
  // Generate JavaScript for turning right from among a fixed set of angles.
  var value = window.parseFloat(this.getTitleValue('VALUE'));
  return 'Turtle.turnRight(' + value + ', \'' + this.id + '\');\n';
};

Blockly.Language.draw_turn_inline_restricted = {
  // Block for turning either left or right from among a fixed set of angles.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(
            Blockly.Language.draw_turn.DIRECTIONS), 'DIR');
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.VALUE), 'VALUE')
        .appendTitle(MSG.degrees);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.turnTooltip);
  }
};

Blockly.Language.draw_turn_inline_restricted.VALUE =
    Blockly.Language.draw_turn_right_inline_restricted.VALUE;

Blockly.JavaScript.draw_turn_inline_restricted = function() {
  // Generate JavaScript for turning either left or right from among a fixed
  // set of angles.
  var value = window.parseFloat(this.getTitleValue('VALUE'));
  return 'Turtle.' + this.getTitleValue('DIR') +
      '(' + value + ', \'' + this.id + '\');\n';
};

Blockly.Language.draw_turn_inline = {
  // Block for turning left or right any number of degrees.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(
            Blockly.Language.draw_turn.DIRECTIONS), 'DIR');
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput('90',
            Blockly.FieldTextInput.numberValidator), 'VALUE')
        .appendTitle(MSG.degrees);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.turnTooltip);
  }
};

Blockly.JavaScript.draw_turn_inline = function() {
  // Generate JavaScript for turning left or right.
  var value = window.parseFloat(this.getTitleValue('VALUE'));
  return 'Turtle.' + this.getTitleValue('DIR') +
      '(' + value + ', \'' + this.id + '\');\n';
};

Blockly.Language.variables_get_length = {
  // Block for getting the value of the variable named 'length'.
  // (This exists so it is possible to get the value without a
  // VARIABLES category.)
  category: null,  // Variables are handled specially.
  helpUrl: Blockly.LANG_VARIABLES_GET_HELPURL,
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_VARIABLES_GET_TITLE)
        .appendTitle(new Blockly.FieldDropdown([['length', 'length']]), 'VAR');
    this.setOutput(true);
    this.setTooltip(Blockly.LANG_VARIABLES_GET_TOOLTIP);
  }
};

Blockly.JavaScript.variables_get_length = Blockly.JavaScript.variables_get;

// Delete these standard blocks.
delete Blockly.Language.procedures_defreturn;
delete Blockly.Language.procedures_ifreturn;

// General blocks.

Blockly.Language.draw_move = {
  // Block for moving forward or backwards.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendTitle(new Blockly.FieldDropdown(
            Blockly.Language.draw_move.DIRECTIONS), 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.moveTooltip);
  }
};

Blockly.Language.draw_move.DIRECTIONS =
    [[MSG.moveForward, 'moveForward'], [MSG.moveBackward, 'moveBackward']];

Blockly.JavaScript.draw_move = function() {
  // Generate JavaScript for moving forward or backwards.
  var value = Blockly.JavaScript.valueToCode(this, 'VALUE',
      Blockly.JavaScript.ORDER_NONE) || '0';
  return 'Turtle.' + this.getTitleValue('DIR') +
      '(' + value + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_turn = {
  // Block for turning left or right.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendTitle(new Blockly.FieldDropdown(
            Blockly.Language.draw_turn.DIRECTIONS), 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.turnTooltip);
  }
};

Blockly.Language.draw_turn.DIRECTIONS =
    [[MSG.turnRight, 'turnRight'], [MSG.turnLeft, 'turnLeft']];

Blockly.JavaScript.draw_turn = function() {
  // Generate JavaScript for turning left or right.
  var value = Blockly.JavaScript.valueToCode(this, 'VALUE',
      Blockly.JavaScript.ORDER_NONE) || '0';
  return 'Turtle.' + this.getTitleValue('DIR') +
      '(' + value + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_width = {
  // Block for setting the pen width.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendValueInput('WIDTH')
        .setCheck('Number')
        .appendTitle(MSG.setWidth);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.widthTooltip);
  }
};

Blockly.JavaScript.draw_width = function() {
  // Generate JavaScript for setting the pen width.
  var width = Blockly.JavaScript.valueToCode(this, 'WIDTH',
      Blockly.JavaScript.ORDER_NONE) || '1';
  return 'Turtle.penWidth(' + width + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_pen = {
  // Block for pen up/down.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.STATE), 'PEN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.penTooltip);
  }
};

Blockly.Language.draw_pen.STATE =
    [[MSG.penUp, 'penUp'], [MSG.penDown, 'penDown']];

Blockly.JavaScript.draw_pen = function() {
  // Generate JavaScript for pen up/down.
  return 'Turtle.' + this.getTitleValue('PEN') +
      '(\'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_colour = {
  // Block for setting the colour.
  helpUrl: '',
  init: function() {
    this.setColour(20);
    this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendTitle(MSG.setColour);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(MSG.colourTooltip);
  }
};

Blockly.JavaScript.draw_colour = function() {
  // Generate JavaScript for setting the colour.
  var colour = Blockly.JavaScript.valueToCode(this, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'Turtle.penColour(' + colour + ', \'block_id_' +
      this.id + '\');\n';
};

Blockly.Language.turtle_visibility = {
  // Block for changing turtle visiblity.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.STATE), 'VISIBILITY');
    this.setTooltip(MSG.turtleVisibilityTooltip);
  }
};

Blockly.Language.turtle_visibility.STATE =
    [[MSG.hideTurtle, 'hideTurtle'], [MSG.showTurtle, 'showTurtle']];

Blockly.JavaScript.turtle_visibility = function() {
  // Generate JavaScript for changing turtle visibility.
  return 'Turtle.' + this.getTitleValue('VISIBILITY') +
      '(\'block_id_' + this.id + '\');\n';
};

Turtle.drawPrint = function(text, id) {
  BlocklyApps.log.push(['DP', text, id]);
};

Turtle.drawFont = function(font, size, style, id) {
  BlocklyApps.log.push(['DF', font, size, style, id]);
};
