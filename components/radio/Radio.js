"use strict";

require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.regexp.exec.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.array.find-index.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.object.get-prototype-of.js");
var _lodash = _interopRequireDefault(require("lodash"));
var _ListComponent2 = _interopRequireDefault(require("../_classes/list/ListComponent"));
var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));
var _Formio = require("../../Formio");
var _utils = require("../../utils/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var RadioComponent = /*#__PURE__*/function (_ListComponent) {
  _inherits(RadioComponent, _ListComponent);
  var _super = _createSuper(RadioComponent);
  function RadioComponent(component, options, data) {
    var _this;
    _classCallCheck(this, RadioComponent);
    _this = _super.call(this, component, options, data);
    _this.previousValue = _this.dataValue || null;
    return _this;
  }
  _createClass(RadioComponent, [{
    key: "defaultSchema",
    get: function get() {
      return RadioComponent.schema();
    }
  }, {
    key: "defaultValue",
    get: function get() {
      var defaultValue = _get(_getPrototypeOf(RadioComponent.prototype), "defaultValue", this);
      if (!defaultValue && this.component.defaultValue === false) {
        defaultValue = this.component.defaultValue;
      }
      return defaultValue;
    }
  }, {
    key: "inputInfo",
    get: function get() {
      var _this$root;
      var info = _get(_getPrototypeOf(RadioComponent.prototype), "elementInfo", this).call(this);
      info.type = 'input';
      info.changeEvent = 'click';
      info.attr.class = 'form-check-input';
      info.attr.name = info.attr.name += "[".concat((_this$root = this.root) === null || _this$root === void 0 ? void 0 : _this$root.id, "-").concat(this.id, "]");
      return info;
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return '';
    }
  }, {
    key: "isRadio",
    get: function get() {
      return this.component.inputType === 'radio';
    }
  }, {
    key: "optionSelectedClass",
    get: function get() {
      return 'radio-selected';
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      _get(_getPrototypeOf(RadioComponent.prototype), "init", this).call(this);
      this.templateData = {};
      this.validators = this.validators.concat(['select', 'onlyAvailableItems']);

      // Trigger an update.
      var updateArgs = [];
      var triggerUpdate = _lodash.default.debounce(function () {
        updateArgs = [];
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _this2.updateItems.apply(_this2, args);
      }, 100);
      this.triggerUpdate = function () {
        // Make sure we always resolve the previous promise before reassign it
        if (typeof _this2.itemsLoadedResolve === 'function') {
          _this2.itemsLoadedResolve();
        }
        _this2.itemsLoaded = new _nativePromiseOnly.default(function (resolve) {
          _this2.itemsLoadedResolve = resolve;
        });
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        if (args.length) {
          updateArgs = args;
        }
        return triggerUpdate.apply(void 0, _toConsumableArray(updateArgs));
      };
      this.itemsLoaded = new _nativePromiseOnly.default(function (resolve) {
        _this2.itemsLoadedResolve = resolve;
      });
      this.shouldLoad = true;
      this.loadedOptions = [];
    }
  }, {
    key: "render",
    value: function render() {
      return _get(_getPrototypeOf(RadioComponent.prototype), "render", this).call(this, this.renderTemplate('radio', {
        input: this.inputInfo,
        inline: this.component.inline,
        values: this.component.dataSrc === 'values' ? this.component.values : this.loadedOptions,
        value: this.dataValue,
        row: this.row
      }));
    }
  }, {
    key: "attach",
    value: function attach(element) {
      var _this3 = this;
      this.loadRefs(element, {
        input: 'multiple',
        wrapper: 'multiple'
      });
      this.refs.input.forEach(function (input, index) {
        _this3.addEventListener(input, _this3.inputInfo.changeEvent, function () {
          _this3.updateValue(null, {
            modified: true
          });
        });
        if (_this3.component.values[index]) {
          _this3.addShortcut(input, _this3.component.values[index].shortcut);
        }
        if (_this3.isRadio) {
          var dataValue = _this3.dataValue;
          if (!_lodash.default.isString(_this3.dataValue)) {
            dataValue = _lodash.default.toString(_this3.dataValue);
          }
          input.checked = dataValue === input.value;
          _this3.addEventListener(input, 'keyup', function (event) {
            if (event.key === ' ' && dataValue === input.value) {
              event.preventDefault();
              _this3.updateValue(null, {
                modified: true
              });
            }
          });
        }
      });
      this.triggerUpdate();
      this.setSelectedClasses();
      return _get(_getPrototypeOf(RadioComponent.prototype), "attach", this).call(this, element);
    }
  }, {
    key: "detach",
    value: function detach(element) {
      var _this4 = this;
      if (element && this.refs.input) {
        this.refs.input.forEach(function (input, index) {
          if (_this4.component.values[index]) {
            _this4.removeShortcut(input, _this4.component.values[index].shortcut);
          }
        });
      }
      _get(_getPrototypeOf(RadioComponent.prototype), "detach", this).call(this);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (this.viewOnly || !this.refs.input || !this.refs.input.length) {
        return this.dataValue;
      }
      var value = this.dataValue;
      this.refs.input.forEach(function (input) {
        if (input.checked) {
          value = input.value;
        }
      });
      return value;
    }
  }, {
    key: "validateValueAvailability",
    value: function validateValueAvailability(setting, value) {
      var _this5 = this;
      if (!(0, _utils.boolValue)(setting) || !value) {
        return true;
      }
      var values = this.component.values;
      if (values) {
        return values.findIndex(function (_ref) {
          var optionValue = _ref.value;
          return _this5.normalizeValue(optionValue) === value;
        }) !== -1;
      }
      return false;
    }
  }, {
    key: "getValueAsString",
    value: function getValueAsString(value) {
      if (!_lodash.default.isString(value)) {
        value = _lodash.default.toString(value);
      }
      if (this.component.dataSrc !== 'values') {
        return value;
      }
      var option = _lodash.default.find(this.component.values, function (v) {
        return v.value === value;
      });
      if (!value) {
        return _lodash.default.get(option, 'label', '');
      }
      return _lodash.default.get(option, 'label', '');
    }
  }, {
    key: "setValueAt",
    value: function setValueAt(index, value) {
      if (this.refs.input && this.refs.input[index] && value !== null && value !== undefined) {
        var inputValue = this.refs.input[index].value;
        this.refs.input[index].checked = inputValue === value.toString();
      }
    }
  }, {
    key: "loadItems",
    value: function loadItems(url, search, headers, options, method, body) {
      var _this6 = this;
      // Ensure we have a method and remove any body if method is get
      method = method || 'GET';
      if (method.toUpperCase() === 'GET') {
        body = null;
      }

      // Set ignoreCache if it is
      options.ignoreCache = this.component.ignoreCache;
      // Make the request.
      options.header = headers;
      if (this.shouldLoad) {
        this.loading = true;
        _Formio.GlobalFormio.makeRequest(this.options.formio, 'select', url, method, body, options).then(function (response) {
          _this6.loading = false;
          _this6.error = null;
          _this6.setItems(response);
          _this6.shouldLoad = false;
          _this6.redraw();
        }).catch(function (err) {
          _this6.handleLoadingError(err);
        });
      }
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      var _this7 = this;
      items === null || items === void 0 ? void 0 : items.forEach(function (item, i) {
        _this7.loadedOptions[i] = {
          value: item[_this7.component.valueProperty],
          label: _this7.itemTemplate(item, item[_this7.component.valueProperty])
        };
      });
    }
  }, {
    key: "setSelectedClasses",
    value: function setSelectedClasses() {
      var _this8 = this;
      if (this.refs.wrapper) {
        //add/remove selected option class
        var value = this.dataValue;
        this.refs.wrapper.forEach(function (wrapper, index) {
          var input = _this8.refs.input[index];
          var checked = input.type === 'checkbox' ? value[input.value] : input.value.toString() === value.toString();
          if (checked) {
            //add class to container when selected
            _this8.addClass(wrapper, _this8.optionSelectedClass);
            //change "checked" attribute
            input.setAttribute('checked', 'true');
          } else {
            _this8.removeClass(wrapper, _this8.optionSelectedClass);
            input.removeAttribute('checked');
          }
        });
      }
    }
  }, {
    key: "updateValue",
    value: function updateValue(value, flags) {
      var changed = _get(_getPrototypeOf(RadioComponent.prototype), "updateValue", this).call(this, value, flags);
      if (changed) {
        this.setSelectedClasses();
      }
      if (!flags || !flags.modified && value === this.defaultValue || !this.isRadio) {
        if (changed) {
          this.previousValue = this.dataValue;
        }
        return changed;
      }

      // If they clicked on the radio that is currently selected, it needs to reset the value.
      this.currentValue = this.dataValue;
      var shouldResetValue = flags && flags.modified && !flags.noUpdateEvent && this.previousValue === this.currentValue;
      if (shouldResetValue) {
        this.resetValue();
        this.triggerChange(flags);
      }
      this.previousValue = this.dataValue;
      return changed;
    }

    /**
     * Normalize values coming into updateValue.
     *
     * @param value
     * @return {*}
     */
  }, {
    key: "normalizeValue",
    value: function normalizeValue(value) {
      var dataType = this.component.dataType || 'auto';
      if (value === this.emptyValue) {
        return value;
      }
      switch (dataType) {
        case 'auto':
          if (!isNaN(parseFloat(value)) && isFinite(value)) {
            value = +value;
          }
          if (value === 'true') {
            value = true;
          }
          if (value === 'false') {
            value = false;
          }
          break;
        case 'number':
          value = +value;
          break;
        case 'string':
          if (_typeof(value) === 'object') {
            value = JSON.stringify(value);
          } else {
            value = String(value);
          }
          break;
        case 'boolean':
          value = !(!value || value.toString() === 'false');
          break;
      }
      return _get(_getPrototypeOf(RadioComponent.prototype), "normalizeValue", this).call(this, value);
    }
  }], [{
    key: "schema",
    value: function schema() {
      for (var _len3 = arguments.length, extend = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        extend[_key3] = arguments[_key3];
      }
      return _ListComponent2.default.schema.apply(_ListComponent2.default, [{
        type: 'radio',
        inputType: 'radio',
        label: 'Radio',
        key: 'radio',
        values: [{
          label: '',
          value: ''
        }],
        data: {
          url: ''
        },
        fieldSet: false
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Radio',
        group: 'basic',
        icon: 'dot-circle-o',
        weight: 80,
        documentation: '/userguide/forms/form-components#radio',
        schema: RadioComponent.schema()
      };
    }
  }]);
  return RadioComponent;
}(_ListComponent2.default);
exports.default = RadioComponent;