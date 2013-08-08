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
        .appendTitle(BlocklyApps.getMsg('moveForward'));
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput('100',
          Blockly.FieldTextInput.numberValidator), 'VALUE')
        .appendTitle(BlocklyApps.getMsg('pixels'));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('moveForwardTooltip'));
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
        .appendTitle(BlocklyApps.getMsg('pixels'));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('moveForwardTooltip'));
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
        .appendTitle(BlocklyApps.getMsg('turnRight'));
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.VALUE), 'VALUE')
        .appendTitle(BlocklyApps.getMsg('degrees'));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('turnRightTooltip'));
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
        .appendTitle(BlocklyApps.getMsg('degrees'));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('turnTooltip'));
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
        .appendTitle(BlocklyApps.getMsg('degrees'));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('turnTooltip'));
  }
};

Blockly.JavaScript.draw_turn_inline = function() {
  // Generate JavaScript for turning left or right.
  var value = window.parseFloat(this.getTitleValue('VALUE'));
  return 'Turtle.' + this.getTitleValue('DIR') +
      '(' + value + ', \'' + this.id + '\');\n';
};

Blockly.Language.variables_get_counter = {
  // Variable getter.
  category: null,  // Variables are handled specially.
  helpUrl: Blockly.LANG_VARIABLES_GET_HELPURL,
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_VARIABLES_GET_TITLE)
        .appendTitle(new Blockly.FieldLabel(BlocklyApps.getMsg('loopVariable')),
                     'VAR');
    this.setOutput(true);
    this.setTooltip(Blockly.LANG_VARIABLES_GET_TOOLTIP);
  },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  }
};

Blockly.JavaScript.variables_get_counter = Blockly.JavaScript.variables_get;

Blockly.Language.variables_get_length = {
  // Variable getter.
  category: null,  // Variables are handled specially.
  helpUrl: Blockly.LANG_VARIABLES_GET_HELPURL,
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_VARIABLES_GET_TITLE)
        .appendTitle(new Blockly.FieldLabel('length'), 'VAR');
    this.setOutput(true);
    this.setTooltip(Blockly.LANG_VARIABLES_GET_TOOLTIP);
  },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  }
};

Blockly.JavaScript.variables_get_length = Blockly.JavaScript.variables_get;

Blockly.Language.variables_get_sides = {
  // Variable getter.
  category: null,  // Variables are handled specially.
  helpUrl: Blockly.LANG_VARIABLES_GET_HELPURL,
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_VARIABLES_GET_TITLE)
        .appendTitle(new Blockly.FieldLabel('sides'), 'VAR');
    this.setOutput(true);
    this.setTooltip(Blockly.LANG_VARIABLES_GET_TOOLTIP);
  },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  }
};

Blockly.JavaScript.variables_get_sides = Blockly.JavaScript.variables_get;

// Create a fake "draw a square" function so it can be made available to users
// without being shown in the workspace.
Blockly.Language.draw_a_square = {
  // Draw a square.
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('drawASquare'));
    this.appendValueInput('VALUE')
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number')
            .appendTitle(BlocklyApps.getMsg('lengthParameter') + ':');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript.draw_a_square = function() {
  // Generate JavaScript for drawing a square.
  var value_length = Blockly.JavaScript.valueToCode(
      this, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  return 'for (var ' + loopVar + ' = 0; ' + loopVar + ' < 4; ' +
      loopVar + '++) {\n' +
      '  Turtle.moveForward(' + value_length + ');\n' +
      '  Turtle.turnRight(90);\n}\n';
};

// Create a fake "draw a snowball" function so it can be made available to
// users without being shown in the workspace.
Blockly.Language.draw_a_snowball = {
  // Draw a circle in front of the turtle, ending up on the opposite side.
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle('draw a snowball');
    this.appendValueInput('VALUE')
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number')
        .appendTitle(BlocklyApps.getMsg('diameterParameter') + ':');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript.draw_a_snowball = function() {
  // Generate JavaScript for drawing a circle in front of the turtle,
  // ending up on the opposite side.
  var value = Blockly.JavaScript.valueToCode(
      this, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'degrees', Blockly.Variables.NAME_TYPE);
  return 'Turtle.turnLeft(90);\n' +
      'for (var ' + loopVar + ' = 0; ' + loopVar + ' < 540; ' +
      loopVar + '++) {\n' +
      '  Turtle.moveForward(' + value + '/ 115.0);\n' +
      '  Turtle.turnRight(1);\n' +
      '}\n' +
      'Turtle.turnLeft(90);\n';
};

// This is a modified copy of Blockly.Language.controls_for with the
// variable named "counter" hardcoded.
Blockly.Language.controls_for_counter = {
  // For loop with hardcoded loop variable.
  helpUrl: Blockly.LANG_CONTROLS_FOR_HELPURL,
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_CONTROLS_FOR_INPUT_WITH)
        .appendTitle(new Blockly.FieldLabel(BlocklyApps.getMsg('loopVariable')),
                     'VAR');
    this.appendValueInput('FROM')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LANG_CONTROLS_FOR_INPUT_FROM);
    this.appendValueInput('TO')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LANG_CONTROLS_FOR_INPUT_TO);
    this.appendValueInput('BY')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.LANG_CONTROLS_FOR_INPUT_BY);
    if (Blockly.LANG_CONTROLS_FOR_TAIL) {
      this.appendDummyInput()
          .appendTitle(Blockly.LANG_CONTROLS_FOR_TAIL);
    }
    this.appendStatementInput('DO')
        .appendTitle(Blockly.LANG_CONTROLS_FOR_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_CONTROLS_FOR_TOOLTIP.replace(
        '%1', this.getTitleValue('VAR')));
  },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  },
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getTitleValue('VAR');
    option.text = Blockly.LANG_VARIABLES_SET_CREATE_GET.replace('%1', name);
    var xmlTitle = goog.dom.createDom('title', null, name);
    xmlTitle.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlTitle);
    xmlBlock.setAttribute('type', 'variables_get_counter');
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.JavaScript.controls_for_counter = Blockly.JavaScript.controls_for;

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
    this.setTooltip(BlocklyApps.getMsg('moveTooltip'));
  }
};

Blockly.Language.draw_move.DIRECTIONS =
    [[BlocklyApps.getMsg('moveForward'), 'moveForward'],
     [BlocklyApps.getMsg('moveBackward'), 'moveBackward']];

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
    this.setTooltip(BlocklyApps.getMsg('turnTooltip'));
  }
};

Blockly.Language.draw_turn.DIRECTIONS =
    [[BlocklyApps.getMsg('turnRight'), 'turnRight'],
     [BlocklyApps.getMsg('turnLeft'), 'turnLeft']];

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
        .appendTitle(BlocklyApps.getMsg('setWidth'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('widthTooltip'));
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
    this.setTooltip(BlocklyApps.getMsg('penTooltip'));
  }
};

Blockly.Language.draw_pen.STATE =
    [[BlocklyApps.getMsg('penUp'), 'penUp'],
     [BlocklyApps.getMsg('penDown'), 'penDown']];

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
        .appendTitle(BlocklyApps.getMsg('setColour'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('colourTooltip'));
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
    this.setTooltip(BlocklyApps.getMsg('turtleVisibilityTooltip'));
  }
};

Blockly.Language.turtle_visibility.STATE =
    [[BlocklyApps.getMsg('hideTurtle'), 'hideTurtle'],
     [BlocklyApps.getMsg('showTurtle'), 'showTurtle']];

Blockly.JavaScript.turtle_visibility = function() {
  // Generate JavaScript for changing turtle visibility.
  return 'Turtle.' + this.getTitleValue('VISIBILITY') +
      '(\'block_id_' + this.id + '\');\n';
};
