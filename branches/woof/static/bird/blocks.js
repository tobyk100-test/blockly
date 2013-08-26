/**
 * Blockly Apps: Bird Blocks
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
 * @fileoverview Blocks for Blockly's Bird application.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

// Extensions to Blockly's language and JavaScript generator.

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

Blockly.Language.bird_hungry = {
  // Block for hungry condition.
  helpUrl: '',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Bird_hungry'));
    this.setOutput(true, 'Boolean');
    this.setTooltip(BlocklyApps.getMsg('Bird_hungryTooltip'));
  }
};

Blockly.JavaScript.bird_hungry = function() {
  // Generate JavaScript for hungry condition.
  return ['Bird.isHungry', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Language.bird_heading = {
  // Block for moving bird in a direction.
  helpUrl: '',
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Bird_heading'))
        .appendTitle(new Blockly.FieldAngle('90'), 'ANGLE');
    this.setPreviousStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Bird_headingTooltip'));
  }
};

Blockly.JavaScript.bird_heading = function() {
  // Generate JavaScript for moving bird in a direction.
  var dir = this.getTitleValue('ANGLE');
  return 'Bird.heading(' + dir + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Language.bird_position = {
  // Block for getting bird's x or y position.
  helpUrl: '',
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown([['x', 'X'], ['y', 'Y']]), 'XY');
    this.setOutput(true, 'Number');
    this.setTooltip(BlocklyApps.getMsg('Bird_positionTooltip'));
  }
};

Blockly.JavaScript.bird_position = function() {
  // Generate JavaScript for getting bird's x or y position.
  var code = 'Bird.' + this.getTitleValue('XY');
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Language.bird_compare = {
  // Block for comparing bird's x or y position with a number.
  helpUrl: Blockly.LANG_LOGIC_COMPARE_HELPURL,
  init: function() {
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendTitle(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getTitleValue('OP');
      return thisBlock.TOOLTIPS[op];
    });
  }
};

Blockly.Language.bird_compare.OPERATORS =
    [['<', 'LT'],
     ['>', 'GT']];

Blockly.Language.bird_compare.TOOLTIPS = {
  LT: Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LT,
  GT: Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GT
};

Blockly.JavaScript.bird_compare = function() {
  // Generate JavaScript for comparing bird's x or y position with a number.
  var operator = (this.getTitleValue('OP') == 'LT') ? '<' : '>';
  var order = Blockly.JavaScript.ORDER_RELATIONAL;
  var argument0 = Blockly.JavaScript.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(this, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Language.bird_and = {
  // Block for logical operator 'and'.
  helpUrl: Blockly.LANG_LOGIC_OPERATION_HELPURL,
  init: function() {
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('Boolean');
    this.appendValueInput('B')
        .setCheck('Boolean')
        .appendTitle('and', 'AND');
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_LOGIC_OPERATION_TOOLTIP_AND);
  }
};

Blockly.JavaScript.bird_and = function() {
  // Generate JavaScript for logical operator 'and'.
  var order = Blockly.JavaScript.ORDER_LOGICAL_AND;
  var argument0 = Blockly.JavaScript.valueToCode(this, 'A', order) || 'false';
  var argument1 = Blockly.JavaScript.valueToCode(this, 'B', order) || 'false';
  var code = argument0 + ' && ' + argument1;
  return [code, order];
};

Blockly.Language.bird_ifElse = {
  // Block for 'if/else'.
  helpUrl: Blockly.LANG_CONTROLS_IF_HELPURL,
  init: function() {
    this.setColour(210);
    this.appendValueInput("CONDITION")
        .appendTitle(BlocklyApps.getMsg('Bird_if'))
        .setCheck("Boolean");
    this.appendStatementInput('DO')
        .appendTitle(BlocklyApps.getMsg('Bird_doCode'));
    this.appendStatementInput('ELSE')
        .appendTitle(BlocklyApps.getMsg('Bird_elseCode'));
    this.setDeletable(false);
    this.setTooltip(Blockly.LANG_CONTROLS_IF_TOOLTIP_2);
  }
};

Blockly.JavaScript.bird_ifElse = function() {
  // Generate JavaScript for 'if/else' conditional.
  var argument = Blockly.JavaScript.valueToCode(this, 'CONDITION',
                 Blockly.JavaScript.ORDER_ATOMIC) +
                 '(\'block_id_' + this.id + '\')';
  var branch0 = Blockly.JavaScript.statementToCode(this, 'DO');
  var branch1 = Blockly.JavaScript.statementToCode(this, 'ELSE');
  var code = 'if (' + argument + ') {\n' + branch0 +
             '} else {\n' + branch1 + '}\n';
  return code;
};

Blockly.Language.controls_if.oldInit = Blockly.Language.controls_if.init;

Blockly.Language.controls_if.init = function() {
  this.oldInit();
  this.setPreviousStatement(false);
  this.setNextStatement(false);
  this.setDeletable(false);
};
