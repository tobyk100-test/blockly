/**
 * Visual Blocks Language
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
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.messages.en');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

// Context menus.
/** @desc context menu - make a duplicate of the selected block */
Blockly.MSG_DUPLICATE_BLOCK = goog.getMsg("Duplicate");
/** @desc context menu - remove the descriptive comment from the selected block */
Blockly.MSG_REMOVE_COMMENT = goog.getMsg("Remove Comment");
/** @desc context menu - add a descriptive comment to the selected block */
Blockly.MSG_ADD_COMMENT = goog.getMsg("Add Comment");
/** @desc context menu - change from 'inline' to 'external' mode for displaying blocks used as inputs to the selected one */
Blockly.MSG_EXTERNAL_INPUTS = goog.getMsg("External Inputs");
/** @desc context menu - change from 'external' to 'inline' mode for displaying blocks used as inputs to the selected one */
Blockly.MSG_INLINE_INPUTS = goog.getMsg("Inline Inputs");
/** @desc context menu - permanently delete the selected block */
Blockly.MSG_DELETE_BLOCK = goog.getMsg("Delete Block");
/** @desc context menu - permanently delete the %1 selected blocks, where %1 represents an integer greater than 1 */
Blockly.MSG_DELETE_X_BLOCKS = goog.getMsg("Delete %1 Blocks");
/** @desc context menu - make the appearance of the selected block smaller by hiding some information about it */
Blockly.MSG_COLLAPSE_BLOCK = goog.getMsg("Collapse Block");
/** @desc context menu - restore the appearance of the selected block by showing information about it that was hidden earlier */
Blockly.MSG_EXPAND_BLOCK = goog.getMsg("Expand Block");
/** @desc context menu - make it so the selected block has no effect (unless reenabled) */
Blockly.MSG_DISABLE_BLOCK = goog.getMsg("Disable Block");
/** @desc context menu - make it so the selected block has effect (after having been disabled earlier) */
Blockly.MSG_ENABLE_BLOCK = goog.getMsg("Enable Block");
/** @desc context menu - provide helpful information about the selected block */
Blockly.MSG_HELP = goog.getMsg("Help");

// Variable renaming.
/** @desc prompt - prompt the user to change the following value associated with the selected variable */
Blockly.MSG_CHANGE_VALUE_TITLE = goog.getMsg("Change value:");
/** @desc dropdown choice - create a new variable */
Blockly.MSG_NEW_VARIABLE = goog.getMsg("New variable...");
Blockly.MSG_NEW_VARIABLE_TITLE = '{msg meaning="MSG_NEW_VARIABLE_TITLE" desc="prompt - prompt the user to enter a name in a subsequent field for a new variable"}New variable name:{/msg}';
/** @desc dropdown choice - rename the selected variable */
Blockly.MSG_RENAME_VARIABLE = goog.getMsg("Rename variable...");
/** @desc prompt - prompt the user to enter a new name in a subsequent field for the selected variable */
Blockly.MSG_RENAME_VARIABLE_TITLE = goog.getMsg("Rename all "%1" variables to:");

// Colour Blocks.
/** @desc url - information about colour or how computers represent colour */
Blockly.LANG_COLOUR_PICKER_HELPURL = goog.getMsg("http://en.wikipedia.org/wiki/Colour");
/** @desc tooltip - invites the user to click on one of dozens of colours available in a pop-up window */
Blockly.LANG_COLOUR_PICKER_TOOLTIP = goog.getMsg("Choose a colour from the palette.");

/** @desc url - a page that displays a random colour; there is no need to translate this */
Blockly.LANG_COLOUR_RANDOM_HELPURL = goog.getMsg("http://randomcolour.com");
/** @desc tooltip - this block generates a colour randomly */
Blockly.LANG_COLOUR_RANDOM_TOOLTIP = goog.getMsg("Choose a colour at random.");

/** @desc url - a page with information about defining colours by their percentage of red, green, and blue */
Blockly.LANG_COLOUR_RGB_HELPURL = goog.getMsg("http://www.december.com/html/spec/colourper.html");
/** @desc block text - text displayed on a block to indicate that information about the red, green, and blue components follows */
Blockly.LANG_COLOUR_RGB_TITLE = goog.getMsg("colour with");
/** @desc block text - this appears next to a number indicating how much red (on a scale from 0% to 100%) should be in the generated colour */
Blockly.LANG_COLOUR_RGB_RED = goog.getMsg("red");
/** @desc block text - this appears next to a number indicating how much green (on a scale from 0% to 100%) should be in the generated colour */
Blockly.LANG_COLOUR_RGB_GREEN = goog.getMsg("green");
/** @desc block text - this appears next to a number indicating how much blue (on a scale from 0% to 100%) should be in the generated colour */
Blockly.LANG_COLOUR_RGB_BLUE = goog.getMsg("blue");
/** @desc toolip - this block generates a colour from the specified percentages of red, green, and blue */
Blockly.LANG_COLOUR_RGB_TOOLTIP = goog.getMsg("Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.");

Blockly.LANG_COLOUR_BLEND_HELPURL = '{msg meaning="LANG_COLOUR_BLEND_HELPURL" desc="url - a page describing how colours are blended"}http://meyerweb.com/eric/tools/colour-blend/{/msg}';
/** @desc block input text - use the word for mixing or blending two different shades of paint to get a new shade */
Blockly.LANG_COLOUR_BLEND_TITLE = goog.getMsg("blend");
/** @desc block input text - the first of the two colours to blend */
Blockly.LANG_COLOUR_BLEND_COLOUR1 = goog.getMsg("colour 1");
/** @desc block input text - the second of the two colours to blend */
Blockly.LANG_COLOUR_BLEND_COLOUR2 = goog.getMsg("colour 2");
/** @desc block input text - the desired ratio (between 0 an 1, inclusive) of the first colour over the second colour */
Blockly.LANG_COLOUR_BLEND_RATIO = goog.getMsg("ratio");
/** @desc tooltip - this block generates a colour by blending two colours (like two shades of paint) with the specified ratio */
Blockly.LANG_COLOUR_BLEND_TOOLTIP = goog.getMsg("Blends two colours together with a given ratio (0.0 - 1.0).");

// Control Blocks.
/** @desc url - information about if-then statements in programming languages */
Blockly.LANG_CONTROLS_IF_HELPURL = goog.getMsg("http://code.google.com/p/blockly/wiki/If_Then");
/** @desc tooltip - how if statements work (see [http://code.google.com/p/blockly/wiki/If_Then]) */
Blockly.LANG_CONTROLS_IF_TOOLTIP_1 = goog.getMsg("If a value is true, then do some blocks");
/** @desc tooltip - how if-else statements work (see [http://code.google.com/p/blockly/wiki/If_Then]) */
Blockly.LANG_CONTROLS_IF_TOOLTIP_2 = goog.getMsg("If a value is true, then do the first set of blocks. Otherwise, do the second set of blocks.");
/** @desc tooltip - how if-else-if statements (possibly with multiple else-if clauses) work (see [http://code.google.com/p/blockly/wiki/If_Then]) */
Blockly.LANG_CONTROLS_IF_TOOLTIP_3 = goog.getMsg("If the first value is true, then do the first set of blocks. Otherwise, advance to the next value and set of blocks, and so forth.");
/** @desc tooltip - how if-else-if-else statements (possibly with multiple else-if clauses) work (see [http://code.google.com/p/blockly/wiki/If_Then]) */
Blockly.LANG_CONTROLS_IF_TOOLTIP_4 = goog.getMsg("If the first value is true, then do the first set of blocks. Otherwise, advance to the next value and set of blocks, and so forth. If none of the values are true, do the last set of blocks");
/** @desc block text - if (as in: '''if''' there is a path to the right, turn right). */
Blockly.LANG_CONTROLS_IF_MSG_IF = goog.getMsg("if");
/** @desc block text - else/otherwise if (as in: if there is a path to the right, turn right; '''otherwise, if''' there is a path to the left, turn left'). */
Blockly.LANG_CONTROLS_IF_MSG_ELSEIF = goog.getMsg("else if")
/** @desc block text - else/otherwise (as in: if you're facing a wall, back up; '''otherwise''', move forward). */
Blockly.LANG_CONTROLS_IF_MSG_ELSE = goog.getMsg("else");
/** @desc block text - do/then (as in: if there is a path to your left, '''then''' turn left). */
Blockly.LANG_CONTROLS_IF_MSG_THEN = goog.getMsg("then");

Blockly.LANG_CONTROLS_IF_IF_TITLE_IF = Blockly.LANG_CONTROLS_IF_MSG_IF;
/** @desc tooltip - how to [https://translatewiki.net/wiki/Translating:Blockly#Reconfiguring_blocks reconfigure an 'if' block] */
Blockly.LANG_CONTROLS_IF_IF_TOOLTIP = goog.getMsg("Add, remove, or reorder sections to reconfigure this if block.");
Blockly.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.LANG_CONTROLS_IF_MSG_ELSE;
/** @desc tooltip - how to [https://translatewiki.net/wiki/Translating:Blockly#Reconfiguring_blocks add an else-if section to an 'if' block] */
Blockly.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = goog.getMsg("Add a condition to the if block.");
Blockly.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.LANG_CONTROLS_IF_MSG_ELSE;
/** @desc tooltip - how to [https://translatewiki.net/wiki/Translating:Blockly#Reconfiguring_blocks add a final else section to an 'if' block] */
Blockly.LANG_CONTROLS_IF_ELSE_TOOLTIP = goog.getMsg("Add a final, catch-all condition to the if block.");

Blockly.LANG_CONTROLS_REPEAT_HELPURL = 'http://en.wikipedia.org/wiki/For_loop';
Blockly.LANG_CONTROLS_REPEAT_TITLE_REPEAT = 'repeat';
Blockly.LANG_CONTROLS_REPEAT_TITLE_TIMES = 'times';
Blockly.LANG_CONTROLS_REPEAT_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';

Blockly.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'http://code.google.com/p/blockly/wiki/Repeat';
Blockly.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until';
Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

Blockly.LANG_CONTROLS_FOR_HELPURL = 'http://en.wikipedia.org/wiki/For_loop';
Blockly.LANG_CONTROLS_FOR_INPUT_WITH = 'count with';
Blockly.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
Blockly.LANG_CONTROLS_FOR_INPUT_FROM = 'from';
Blockly.LANG_CONTROLS_FOR_INPUT_TO = 'to';
Blockly.LANG_CONTROLS_FOR_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_FOR_TOOLTIP = 'Count from a start number to an end number.\n' +
    'For each count, set the current count number to\n' +
    'variable "%1", and then do some statements.';

Blockly.LANG_CONTROLS_FOREACH_HELPURL = 'http://en.wikipedia.org/wiki/For_loop';
Blockly.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'for each item';
Blockly.LANG_CONTROLS_FOREACH_INPUT_VAR = 'x';
Blockly.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'in list';
Blockly.LANG_CONTROLS_FOREACH_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the item to\n' +
    'variable "%1", and then do some statements.';

Blockly.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration of loop';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and\n' +
    'continue with the next iteration.';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning:\n' +
    'This block may only\n' +
    'be used within a loop.';

// Logic Blocks.
Blockly.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LT = 'Return true if the first input is smaller\n' +
    'than the second input.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LTE = 'Return true if the first input is smaller\n' +
    'than or equal to the second input.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GT = 'Return true if the first input is greater\n' +
    'than the second input.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GTE = 'Return true if the first input is greater\n' +
    'than or equal to the second input.';

Blockly.LANG_LOGIC_OPERATION_HELPURL = 'http://code.google.com/p/blockly/wiki/And_Or';
Blockly.LANG_LOGIC_OPERATION_AND = 'and';
Blockly.LANG_LOGIC_OPERATION_OR = 'or';
Blockly.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.';
Blockly.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Return true if either inputs are true.';

Blockly.LANG_LOGIC_NEGATE_HELPURL = 'http://code.google.com/p/blockly/wiki/Not';
Blockly.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
Blockly.LANG_LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false.\n' +
    'Returns false if the input is true.';

Blockly.LANG_LOGIC_BOOLEAN_HELPURL = 'http://code.google.com/p/blockly/wiki/True_False';
Blockly.LANG_LOGIC_BOOLEAN_TRUE = 'true';
Blockly.LANG_LOGIC_BOOLEAN_FALSE = 'false';
Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

Blockly.LANG_LOGIC_NULL_HELPURL = 'http://en.wikipedia.org/wiki/Nullable_type';
Blockly.LANG_LOGIC_NULL = 'null';
Blockly.LANG_LOGIC_NULL_TOOLTIP = 'Returns null.';

Blockly.LANG_LOGIC_TERNARY_HELPURL = 'http://en.wikipedia.org/wiki/%3F:';
Blockly.LANG_LOGIC_TERNARY_CONDITION = 'test';
Blockly.LANG_LOGIC_TERNARY_IF_TRUE = 'if true';
Blockly.LANG_LOGIC_TERNARY_IF_FALSE = 'if false';
Blockly.LANG_LOGIC_TERNARY_TOOLTIP = 'Check the condition in "test". If the condition is true\n' +
    'returns the "if true" value, otherwise returns the "if false" value.';

// Math Blocks.
Blockly.LANG_MATH_NUMBER_HELPURL = 'http://en.wikipedia.org/wiki/Number';
Blockly.LANG_MATH_NUMBER_TOOLTIP = 'A number.';

Blockly.LANG_MATH_ARITHMETIC_HELPURL = 'http://en.wikipedia.org/wiki/Arithmetic';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to\n' +
    'the power of the second number.';

Blockly.LANG_MATH_SINGLE_HELPURL = 'http://en.wikipedia.org/wiki/Square_root';
Blockly.LANG_MATH_SINGLE_OP_ROOT = 'square root';
Blockly.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absolute';
Blockly.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

Blockly.LANG_MATH_TRIG_HELPURL = 'http://en.wikipedia.org/wiki/Trigonometric_functions';
Blockly.LANG_MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).';
Blockly.LANG_MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).';
Blockly.LANG_MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).';
Blockly.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
Blockly.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
Blockly.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

Blockly.LANG_MATH_CONSTANT_HELPURL = 'http://en.wikipedia.org/wiki/Mathematical_constant';
Blockly.LANG_MATH_CONSTANT_TOOLTIP = 'Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026),\n' +
    'sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).';

Blockly.LANG_MATH_IS_EVEN = 'is even';
Blockly.LANG_MATH_IS_ODD = 'is odd';
Blockly.LANG_MATH_IS_PRIME = 'is prime';
Blockly.LANG_MATH_IS_WHOLE = 'is whole';
Blockly.LANG_MATH_IS_POSITIVE = 'is positive';
Blockly.LANG_MATH_IS_NEGATIVE = 'is negative';
Blockly.LANG_MATH_IS_DIVISIBLE_BY = 'is divisible by';
Blockly.LANG_MATH_IS_TOOLTIP = 'Check if a number is an even, odd, prime, whole, positive, negative,\n' +
    'or if it is divisible by certain number.  Returns true or false.';

Blockly.LANG_MATH_CHANGE_HELPURL = 'http://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
Blockly.LANG_MATH_CHANGE_TITLE_CHANGE = 'change';
Blockly.LANG_MATH_CHANGE_TITLE_ITEM = 'item';
Blockly.LANG_MATH_CHANGE_INPUT_BY = 'by';
Blockly.LANG_MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';

Blockly.LANG_MATH_ROUND_HELPURL = 'http://en.wikipedia.org/wiki/Rounding';
Blockly.LANG_MATH_ROUND_TOOLTIP = 'Round a number up or down.';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUND = 'round';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

Blockly.LANG_MATH_ONLIST_HELPURL = '';
Blockly.LANG_MATH_ONLIST_OPERATOR_SUM = 'sum of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_MIN = 'min of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_MAX = 'max of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_AVERAGE = 'average of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_MEDIAN = 'median of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_MODE = 'modes of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_RANDOM = 'random item of list';
Blockly.LANG_MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the arithmetic mean of the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

Blockly.LANG_MATH_MODULO_HELPURL = 'http://en.wikipedia.org/wiki/Modulo_operation';
Blockly.LANG_MATH_MODULO_INPUT_DIVIDEND = 'remainder of';
Blockly.LANG_MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.';

Blockly.LANG_MATH_CONSTRAIN_HELPURL = 'http://en.wikipedia.org/wiki/Clamping_%28graphics%29';
Blockly.LANG_MATH_CONSTRAIN_INPUT_CONSTRAIN = 'constrain';
Blockly.LANG_MATH_CONSTRAIN_INPUT_LOW = 'low';
Blockly.LANG_MATH_CONSTRAIN_INPUT_HIGH = 'high';
Blockly.LANG_MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

Blockly.LANG_MATH_RANDOM_INT_HELPURL = 'http://en.wikipedia.org/wiki/Random_number_generation';
Blockly.LANG_MATH_RANDOM_INT_INPUT_FROM = 'random integer from';
Blockly.LANG_MATH_RANDOM_INT_INPUT_TO = 'to';
Blockly.LANG_MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two\n' +
    'specified limits, inclusive.';

Blockly.LANG_MATH_RANDOM_FLOAT_HELPURL = 'http://en.wikipedia.org/wiki/Random_number_generation';
Blockly.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
Blockly.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between\n' +
    '0.0 (inclusive) and 1.0 (exclusive).';

// Text Blocks.
Blockly.LANG_TEXT_TEXT_HELPURL = 'http://en.wikipedia.org/wiki/String_(computer_science)';
Blockly.LANG_TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

Blockly.LANG_TEXT_JOIN_HELPURL = '';
Blockly.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
Blockly.LANG_TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining\n' +
    'together any number of items.';

Blockly.LANG_TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
Blockly.LANG_TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';

Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = 'item';
Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

Blockly.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_APPEND_TO = 'to';
Blockly.LANG_TEXT_APPEND_APPENDTEXT = 'append text';
Blockly.LANG_TEXT_APPEND_VARIABLE = 'item';
Blockly.LANG_TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

Blockly.LANG_TEXT_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_LENGTH_INPUT_LENGTH = 'length of';
Blockly.LANG_TEXT_LENGTH_TOOLTIP = 'Returns number of letters (including spaces)\n' +
    'in the provided text.';

Blockly.LANG_TEXT_ISEMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'is empty';
Blockly.LANG_TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

Blockly.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'in text';
Blockly.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text';
Blockly.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text';
Blockly.LANG_TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
    'of first text in the second text.\n' +
    'Returns 0 if text is not found.';

Blockly.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_CHARAT_INPUT_INTEXT = 'in text';
Blockly.LANG_TEXT_CHARAT_FROM_START = 'get letter #';
Blockly.LANG_TEXT_CHARAT_FROM_END = 'get letter # from end';
Blockly.LANG_TEXT_CHARAT_FIRST = 'get first letter';
Blockly.LANG_TEXT_CHARAT_LAST = 'get last letter';
Blockly.LANG_TEXT_CHARAT_RANDOM = 'get random letter';
Blockly.LANG_TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

Blockly.LANG_TEXT_SUBSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_SUBSTRING_INPUT_IN_TEXT = 'in text';
Blockly.LANG_TEXT_SUBSTRING_INPUT_AT1 = 'get substring from';
Blockly.LANG_TEXT_SUBSTRING_INPUT_AT2 = 'to';
Blockly.LANG_TEXT_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';

Blockly.LANG_TEXT_CHANGECASE_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case';
Blockly.LANG_TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';

Blockly.LANG_TEXT_TRIM_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides';
Blockly.LANG_TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side';
Blockly.LANG_TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side';
Blockly.LANG_TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces\n' +
    'removed from one or both ends.';

Blockly.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_PRINT_TITLE_PRINT = 'print';
Blockly.LANG_TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';

Blockly.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
Blockly.LANG_TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message';
Blockly.LANG_TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message';
Blockly.LANG_TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.';
Blockly.LANG_TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.';

// Lists Blocks.
Blockly.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
Blockly.LANG_LISTS_CREATE_EMPTY_TITLE = 'create empty list';
Blockly.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

Blockly.LANG_LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
Blockly.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';

Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';

Blockly.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'item';
Blockly.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

Blockly.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_REPEAT_INPUT_WITH = 'create list with item';
Blockly.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repeated';
Blockly.LANG_LISTS_REPEAT_INPUT_TIMES = 'times';
Blockly.LANG_LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value\n' +
    'repeated the specified number of times.';

Blockly.LANG_LISTS_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_LISTS_LENGTH_INPUT_LENGTH = 'length of';
Blockly.LANG_LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

Blockly.LANG_LISTS_IS_EMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_LISTS_INPUT_IS_EMPTY = 'is empty';
Blockly.LANG_LISTS_TOOLTIP = 'Returns true if the list is empty.';

Blockly.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_INDEX_OF_FIRST = 'find first occurrence of item';
Blockly.LANG_LISTS_INDEX_OF_LAST = 'find last occurrence of item';
Blockly.LANG_LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
    'of the item in the list.\n' +
    'Returns 0 if text is not found.';

Blockly.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_GET_INDEX_GET = 'get';
Blockly.LANG_LISTS_GET_INDEX_GET_REMOVE = 'get and remove';
Blockly.LANG_LISTS_GET_INDEX_REMOVE = 'remove';
Blockly.LANG_LISTS_GET_INDEX_FROM_START = '#';
Blockly.LANG_LISTS_GET_INDEX_FROM_END = '# from end';
Blockly.LANG_LISTS_GET_INDEX_FIRST = 'first';
Blockly.LANG_LISTS_GET_INDEX_LAST = 'last';
Blockly.LANG_LISTS_GET_INDEX_RANDOM = 'random';
Blockly.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_FROM_START = 'Returns the item at the specified position in a list.\n' +
    '#1 is the first item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_FROM_END = 'Returns the item at the specified position in a list.\n' +
    '#1 is the last item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_START = 'Removes and returns the item at the specified position\n' +
    ' in a list.  #1 is the first item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_END = 'Removes and returns the item at the specified position\n' +
    ' in a list.  #1 is the last item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_START = 'Removes the item at the specified position\n' +
    ' in a list.  #1 is the first item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_END = 'Removes the item at the specified position\n' +
    ' in a list.  #1 is the last item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.';

Blockly.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_SET_INDEX_SET = 'set';
Blockly.LANG_LISTS_SET_INDEX_INSERT = 'insert at';
Blockly.LANG_LISTS_SET_INDEX_INPUT_TO = 'as';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_FROM_START = 'Sets the item at the specified position in a list.\n' +
    '#1 is the first item.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_FROM_END = 'Sets the item at the specified position in a list.\n' +
    '#1 is the last item.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_START = 'Inserts the item at the specified position in a list.\n' +
    '#1 is the first item.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_END = 'Inserts the item at the specified position in a list.\n' +
    '#1 is the last item.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

Blockly.LANG_LISTS_GET_SUBLIST_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_GET_SUBLIST_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_GET_SUBLIST_INPUT_AT1 = 'get sub-list from';
Blockly.LANG_LISTS_GET_SUBLIST_INPUT_AT2 = 'to';
Blockly.LANG_LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

// Variables Blocks.
Blockly.LANG_VARIABLES_GET_HELPURL = 'http://en.wikipedia.org/wiki/Variable_(computer_science)';
Blockly.LANG_VARIABLES_GET_TITLE = 'get';
Blockly.LANG_VARIABLES_GET_ITEM = 'item';
Blockly.LANG_VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';
Blockly.LANG_VARIABLES_GET_CREATE_SET = 'Create "set %1"';

Blockly.LANG_VARIABLES_SET_HELPURL = 'http://en.wikipedia.org/wiki/Variable_(computer_science)';
Blockly.LANG_VARIABLES_SET_TITLE = 'set';
Blockly.LANG_VARIABLES_SET_ITEM = 'item';
Blockly.LANG_VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
Blockly.LANG_VARIABLES_SET_CREATE_GET = 'Create "get %1"';

// Procedures Blocks.
Blockly.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedure';
Blockly.LANG_PROCEDURES_DEFNORETURN_DO = 'do';
Blockly.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'A procedure with no return value.';

Blockly.LANG_PROCEDURES_DEFRETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.LANG_PROCEDURES_DEFRETURN_DO = Blockly.LANG_PROCEDURES_DEFNORETURN_DO;
Blockly.LANG_PROCEDURES_DEFRETURN_RETURN = 'return';
Blockly.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'A procedure with a return value.';

Blockly.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning:\n' +
    'This procedure has\n' +
    'duplicate parameters.';

Blockly.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_CALLNORETURN_CALL = 'do';
Blockly.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedure';
Blockly.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Call a procedure with no return value.';

Blockly.LANG_PROCEDURES_CALLRETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.LANG_PROCEDURES_CALLNORETURN_CALL;
Blockly.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
Blockly.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Call a procedure with a return value.';

Blockly.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'parameters';
Blockly.LANG_PROCEDURES_MUTATORARG_TITLE = 'variable:';

Blockly.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Highlight Procedure';
Blockly.LANG_PROCEDURES_CREATE_DO = 'Create "do %1"';

Blockly.LANG_PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then return a value.';
Blockly.LANG_PROCEDURES_IFRETURN_WARNING = 'Warning:\n' +
    'This block may only be\n' +
    'used within a procedure.';
