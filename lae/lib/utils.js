/* global self:false */
(function(window) {
  'use strict';

  let lae = window.lae || {};

  /**
  * Emulates part of the str.prototype.format() method of Python with a template.
  * Code based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  * @example
  * // returns "Hello Jack! It's me, Bob."
  * lae.pyTemplate`Hello ${1}! It's me, ${0}.`('Bob', 'Jack')
  * @param {String[]} strings The string literal segments
  * @param {Number[]} [keys] The indices of the arguments
  * @param {*[]} [values] The arguments of the called literal
  * @returns {Function} The pre-formatted string literal function, to be called with the replacements
  */
  lae.pyTemplate = (strings, ...keys) =>
    (...values) =>
      keys.reduce(
        (total, current, i) => total + values[current] + strings[i + 1],
        strings[0]
      );

  /**
  * Returns a random integer between min and max inclusive.
  * @param {Number} [min] The lower bound
  * @param {Number} [max] The upper bound
  * @returns {Number} A random integer
  */
  lae.randint = (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  window.lae = lae;
}(self));
