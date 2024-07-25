"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.define-getter.js");
require("core-js/modules/es.object.define-setter.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.array.join.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// Using polyfill from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
/* eslint-disable */
if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
}

/* Polyfill service v3.52.1
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 *
 * Features requested: DOMTokenList
 *
 * - Object.defineProperty, License: CC0 (required by "_DOMTokenList", "DOMTokenList")
 * - _DOMTokenList, License: ISC (required by "DOMTokenList")
 * - DOMTokenList, License: CC0 */

(function (self, undefined) {
  // Don't try to do polyfills outside of browser context.
  if (typeof document === 'undefined') {
    return;
  }
  if (!("defineProperty" in Object && function () {
    try {
      var e = {};
      return Object.defineProperty(e, "test", {
        value: 42
      }), !0;
    } catch (t) {
      return !1;
    }
  }())) {
    // Object.defineProperty
    (function (nativeDefineProperty) {
      var supportsAccessors = Object.prototype.hasOwnProperty.call(Object.prototype, '__defineGetter__');
      var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
      var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

      Object.defineProperty = function defineProperty(object, property, descriptor) {
        // Where native support exists, assume it
        if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
          return nativeDefineProperty(object, property, descriptor);
        }
        if (object === null || !(object instanceof Object || _typeof(object) === 'object')) {
          throw new TypeError('Object.defineProperty called on non-object');
        }
        if (!(descriptor instanceof Object)) {
          throw new TypeError('Property description must be an object');
        }
        var propertyString = String(property);
        var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
        var getterType = 'get' in descriptor && _typeof(descriptor.get);
        var setterType = 'set' in descriptor && _typeof(descriptor.set);

        // handle descriptor.get
        if (getterType) {
          if (getterType !== 'function') {
            throw new TypeError('Getter must be a function');
          }
          if (!supportsAccessors) {
            throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
          }
          if (hasValueOrWritable) {
            throw new TypeError(ERR_VALUE_ACCESSORS);
          }
          Object.__defineGetter__.call(object, propertyString, descriptor.get);
        } else {
          object[propertyString] = descriptor.value;
        }

        // handle descriptor.set
        if (setterType) {
          if (setterType !== 'function') {
            throw new TypeError('Setter must be a function');
          }
          if (!supportsAccessors) {
            throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
          }
          if (hasValueOrWritable) {
            throw new TypeError(ERR_VALUE_ACCESSORS);
          }
          Object.__defineSetter__.call(object, propertyString, descriptor.set);
        }

        // OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
        if ('value' in descriptor) {
          object[propertyString] = descriptor.value;
        }
        return object;
      };
    })(Object.defineProperty);
  }

  // _DOMTokenList
  /*
  Copyright (c) 2016, John Gardner
   Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  */
  var _DOMTokenList = function () {
    // eslint-disable-line no-unused-vars
    var dpSupport = true;
    var defineGetter = function defineGetter(object, name, fn, configurable) {
      if (Object.defineProperty) Object.defineProperty(object, name, {
        configurable: false === dpSupport ? true : !!configurable,
        get: fn
      });else object.__defineGetter__(name, fn);
    };

    /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
    try {
      defineGetter({}, "support");
    } catch (e) {
      dpSupport = false;
    }
    var _DOMTokenList = function _DOMTokenList(el, prop) {
      var that = this;
      var tokens = [];
      var tokenMap = {};
      var length = 0;
      var maxLength = 0;
      var addIndexGetter = function addIndexGetter(i) {
        defineGetter(that, i, function () {
          preop();
          return tokens[i];
        }, false);
      };
      var reindex = function reindex() {
        /** Define getter functions for array-like access to the tokenList's contents. */
        if (length >= maxLength) for (; maxLength < length; ++maxLength) {
          addIndexGetter(maxLength);
        }
      };

      /** Helper function called at the start of each class method. Internal use only. */
      var preop = function preop() {
        var error;
        var i;
        var args = arguments;
        var rSpace = /\s+/;

        /** Validate the token/s passed to an instance method, if any. */
        if (args.length) for (i = 0; i < args.length; ++i) {
          if (rSpace.test(args[i])) {
            error = new SyntaxError('String "' + args[i] + '" ' + "contains" + ' an invalid character');
            error.code = 5;
            error.name = "InvalidCharacterError";
            throw error;
          }
        }

        /** Split the new value apart by whitespace*/
        if (_typeof(el[prop]) === "object") {
          tokens = ("" + el[prop].baseVal).replace(/^\s+|\s+$/g, "").split(rSpace);
        } else {
          tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);
        }

        /** Avoid treating blank strings as single-item token lists */
        if ("" === tokens[0]) tokens = [];

        /** Repopulate the internal token lists */
        tokenMap = {};
        for (i = 0; i < tokens.length; ++i) {
          tokenMap[tokens[i]] = true;
        }
        length = tokens.length;
        reindex();
      };

      /** Populate our internal token list if the targeted attribute of the subject element isn't empty. */
      preop();

      /** Return the number of tokens in the underlying string. Read-only. */
      defineGetter(that, "length", function () {
        preop();
        return length;
      });

      /** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */
      that.toLocaleString = that.toString = function () {
        preop();
        return tokens.join(" ");
      };
      that.item = function (idx) {
        preop();
        return tokens[idx];
      };
      that.contains = function (token) {
        preop();
        return !!tokenMap[token];
      };
      that.add = function () {
        preop.apply(that, args = arguments);
        for (var args, token, i = 0, l = args.length; i < l; ++i) {
          token = args[i];
          if (!tokenMap[token]) {
            tokens.push(token);
            tokenMap[token] = true;
          }
        }

        /** Update the targeted attribute of the attached element if the token list's changed. */
        if (length !== tokens.length) {
          length = tokens.length >>> 0;
          if (_typeof(el[prop]) === "object") {
            el[prop].baseVal = tokens.join(" ");
          } else {
            el[prop] = tokens.join(" ");
          }
          reindex();
        }
      };
      that.remove = function () {
        preop.apply(that, args = arguments);

        /** Build a hash of token names to compare against when recollecting our token list. */
        for (var args, ignore = {}, i = 0, t = []; i < args.length; ++i) {
          ignore[args[i]] = true;
          delete tokenMap[args[i]];
        }

        /** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */
        for (i = 0; i < tokens.length; ++i) {
          if (!ignore[tokens[i]]) t.push(tokens[i]);
        }
        tokens = t;
        length = t.length >>> 0;

        /** Update the targeted attribute of the attached element. */
        if (_typeof(el[prop]) === "object") {
          el[prop].baseVal = tokens.join(" ");
        } else {
          el[prop] = tokens.join(" ");
        }
        reindex();
      };
      that.toggle = function (token, force) {
        preop.apply(that, [token]);

        /** Token state's being forced. */
        if (undefined !== force) {
          if (force) {
            that.add(token);
            return true;
          } else {
            that.remove(token);
            return false;
          }
        }

        /** Token already exists in tokenList. Remove it, and return FALSE. */
        if (tokenMap[token]) {
          that.remove(token);
          return false;
        }

        /** Otherwise, add the token and return TRUE. */
        that.add(token);
        return true;
      };
      return that;
    };
    return _DOMTokenList;
  }();
  if (!("DOMTokenList" in self && function (e) {
    return !("classList" in e) || !e.classList.toggle("x", !1) && !e.className;
  }(document.createElement("x")))) {
    // DOMTokenList
    /* global _DOMTokenList */
    (function (global) {
      var nativeImpl = "DOMTokenList" in global && global.DOMTokenList;
      if (!nativeImpl || !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg') && !(document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)) {
        global.DOMTokenList = _DOMTokenList;
      }

      // Add second argument to native DOMTokenList.toggle() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.toggle('x', false);
        if (!e.classList.contains('x')) return;
        e.classList.constructor.prototype.toggle = function toggle(token /*, force*/) {
          var force = arguments[1];
          if (force === undefined) {
            var add = !this.contains(token);
            this[add ? 'add' : 'remove'](token);
            return add;
          }
          force = !!force;
          this[force ? 'add' : 'remove'](token);
          return force;
        };
      })();

      // Add multiple arguments to native DOMTokenList.add() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a', 'b');
        if (e.classList.contains('b')) return;
        var _native = e.classList.constructor.prototype.add;
        e.classList.constructor.prototype.add = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            _native.call(this, args[i]);
          }
        };
      })();

      // Add multiple arguments to native DOMTokenList.remove() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a');
        e.classList.add('b');
        e.classList.remove('a', 'b');
        if (!e.classList.contains('b')) return;
        var _native2 = e.classList.constructor.prototype.remove;
        e.classList.constructor.prototype.remove = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            _native2.call(this, args[i]);
          }
        };
      })();
    })(self);
  }
})('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});