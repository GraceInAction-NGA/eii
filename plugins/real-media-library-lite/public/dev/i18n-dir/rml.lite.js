var rml =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/ts/rml.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "../../node_modules/add-dom-event-listener/lib/EventBaseObject.js":
/*!*********************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/add-dom-event-listener/lib/EventBaseObject.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */


Object.defineProperty(exports, "__esModule", {
  value: true
});

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,
  constructor: EventBaseObject,
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse,
  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue; // fixed 1.2
    // call stopPropagation implicitly

    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }

    this.preventDefault();
  }
};
exports["default"] = EventBaseObject;
module.exports = exports["default"];

/***/ }),

/***/ "../../node_modules/add-dom-event-listener/lib/EventObject.js":
/*!*****************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/add-dom-event-listener/lib/EventObject.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var _EventBaseObject = __webpack_require__(/*! ./EventBaseObject */ "../../node_modules/add-dom-event-listener/lib/EventBaseObject.js");

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    } // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)


    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail; // ie/webkit

    if (wheelDelta) {
      delta = wheelDelta / 120;
    } // gecko


    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    } // Gecko


    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    } // Webkit


    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }

    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    } // 默认 deltaY (ie)


    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button; // Calculate pageX/Y if missing and clientX/Y available

    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    } // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button


    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    } // add relatedTarget, if necessary


    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;
  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent; // in case dom event has been mark as default prevented by lower dom node

  var isDefaultPrevented = retFalse;

  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;
  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();
  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);

      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });
  l = props.length; // clone properties of the original event object

  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  } // fix target property, if necessary


  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  } // check if target is a text node (safari)


  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,
  preventDefault: function preventDefault() {
    var e = this.nativeEvent; // if preventDefault exists run it on the original event

    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent; // if stopPropagation exists run it on the original event

    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});
exports['default'] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/add-dom-event-listener/lib/index.js":
/*!***********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/add-dom-event-listener/lib/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var _EventObject = __webpack_require__(/*! ./EventObject */ "../../node_modules/add-dom-event-listener/lib/EventObject.js");

var _EventObject2 = _interopRequireDefault(_EventObject);

function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    var _ret = function () {
      var useCapture = false;

      if (_typeof(option) === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }

      target.addEventListener(eventType, wrapCallback, option || false);
      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    }();

    if (_typeof(_ret) === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/_util/wave.js":
/*!**********************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/_util/wave.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _Event = __webpack_require__(/*! css-animation/lib/Event */ "../../node_modules/css-animation/lib/Event.js");

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var Wave = function (_React$Component) {
  (0, _inherits3['default'])(Wave, _React$Component);

  function Wave() {
    (0, _classCallCheck3['default'])(this, Wave);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Wave.__proto__ || Object.getPrototypeOf(Wave)).apply(this, arguments));

    _this.onClick = function (node, waveColor) {
      if (node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');
      var extraNode = _this.extraNode;
      extraNode.className = 'ant-click-animating-node';

      var attributeName = _this.getAttributeName();

      node.removeAttribute(attributeName);
      node.setAttribute(attributeName, 'true'); // Not white or transparnt or grey

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && _this.isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        extraNode.style.borderColor = waveColor;
        _this.styleForPesudo = document.createElement('style');
        _this.styleForPesudo.innerHTML = '[ant-click-animating-without-extra-node]:after { border-color: ' + waveColor + '; }';
        document.body.appendChild(_this.styleForPesudo);
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      _Event2['default'].addEndEventListener(node, _this.onTransitionEnd);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT') {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    return _this;
  }

  (0, _createClass3['default'])(Wave, [{
    key: 'isNotGrey',
    value: function isNotGrey(color) {
      var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);

      if (match && match[1] && match[2] && match[3]) {
        return !(match[1] === match[2] && match[2] === match[3]);
      }

      return true;
    }
  }, {
    key: 'getAttributeName',
    value: function getAttributeName() {
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    }
  }, {
    key: 'resetEffect',
    value: function resetEffect(node) {
      if (!node || node === this.extraNode) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.removeAttribute(attributeName);
      this.removeExtraStyleNode();

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      _Event2['default'].removeEndEventListener(node, this.onTransitionEnd);
    }
  }, {
    key: 'removeExtraStyleNode',
    value: function removeExtraStyleNode() {
      if (this.styleForPesudo && document.body.contains(this.styleForPesudo)) {
        document.body.removeChild(this.styleForPesudo);
        this.styleForPesudo = null;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.instance = this.bindAnimationEvent((0, _reactDom.findDOMNode)(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return Wave;
}(React.Component);

exports['default'] = Wave;
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/button/button-group.js":
/*!*******************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/button/button-group.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = function ButtonGroup(props) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === undefined ? 'ant-btn-group' : _props$prefixCls,
      size = props.size,
      className = props.className,
      others = __rest(props, ["prefixCls", "size", "className"]); // large => lg
  // small => sm


  var sizeCls = '';

  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';

    default:
      break;
  }

  var classes = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-' + sizeCls, sizeCls), className);
  return React.createElement('div', (0, _extends3['default'])({}, others, {
    className: classes
  }));
};

exports['default'] = ButtonGroup;
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/button/button.js":
/*!*************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/button/button.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _propTypes = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _wave = __webpack_require__(/*! ../_util/wave */ "../../node_modules/antd/lib/_util/wave.js");

var _wave2 = _interopRequireDefault(_wave);

var _icon = __webpack_require__(/*! ../icon */ "../../node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return React.createElement('span', null, child);
  }

  return child;
}

var Button = function (_React$Component) {
  (0, _inherits3['default'])(Button, _React$Component);

  function Button(props) {
    (0, _classCallCheck3['default'])(this, Button);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(e);
      }
    };

    _this.state = {
      loading: props.loading,
      hasTwoCNChar: false
    };
    return _this;
  }

  (0, _createClass3['default'])(Button, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fixTwoCNChar();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var currentLoading = this.props.loading;
      var loading = nextProps.loading;

      if (currentLoading) {
        clearTimeout(this.delayTimeout);
      }

      if (typeof loading !== 'boolean' && loading && loading.delay) {
        this.delayTimeout = window.setTimeout(function () {
          return _this2.setState({
            loading: loading
          });
        }, loading.delay);
      } else {
        this.setState({
          loading: loading
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.fixTwoCNChar();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    }
  }, {
    key: 'fixTwoCNChar',
    value: function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      var node = (0, _reactDom.findDOMNode)(this);
      var buttonText = node.textContent || node.innerText;

      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.state.hasTwoCNChar) {
          this.setState({
            hasTwoCNChar: true
          });
        }
      } else if (this.state.hasTwoCNChar) {
        this.setState({
          hasTwoCNChar: false
        });
      }
    }
  }, {
    key: 'isNeedInserted',
    value: function isNeedInserted() {
      var _props = this.props,
          icon = _props.icon,
          children = _props.children;
      return React.Children.count(children) === 1 && !icon;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this3 = this;

      var _a = this.props,
          type = _a.type,
          shape = _a.shape,
          size = _a.size,
          className = _a.className,
          children = _a.children,
          icon = _a.icon,
          prefixCls = _a.prefixCls,
          ghost = _a.ghost,
          _loadingProp = _a.loading,
          block = _a.block,
          rest = __rest(_a, ["type", "shape", "size", "className", "children", "icon", "prefixCls", "ghost", "loading", "block"]);

      var _state = this.state,
          loading = _state.loading,
          hasTwoCNChar = _state.hasTwoCNChar; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';

        default:
          break;
      }

      var classes = (0, _classnames2['default'])(prefixCls, className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + shape, shape), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3['default'])(_classNames, prefixCls + '-icon-only', !children && icon), (0, _defineProperty3['default'])(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3['default'])(_classNames, prefixCls + '-background-ghost', ghost), (0, _defineProperty3['default'])(_classNames, prefixCls + '-two-chinese-chars', hasTwoCNChar), (0, _defineProperty3['default'])(_classNames, prefixCls + '-block', block), _classNames));
      var iconType = loading ? 'loading' : icon;
      var iconNode = iconType ? React.createElement(_icon2['default'], {
        type: iconType
      }) : null;
      var kids = children || children === 0 ? React.Children.map(children, function (child) {
        return insertSpace(child, _this3.isNeedInserted());
      }) : null;

      if ('href' in rest) {
        return React.createElement('a', (0, _extends3['default'])({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), iconNode, kids);
      } else {
        // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
        var htmlType = rest.htmlType,
            otherProps = __rest(rest, ["htmlType"]);

        return React.createElement(_wave2['default'], null, React.createElement('button', (0, _extends3['default'])({}, otherProps, {
          type: htmlType || 'button',
          className: classes,
          onClick: this.handleClick
        }), iconNode, kids));
      }
    }
  }]);
  return Button;
}(React.Component);

exports['default'] = Button;
Button.__ANT_BUTTON = true;
Button.defaultProps = {
  prefixCls: 'ant-btn',
  loading: false,
  ghost: false,
  block: false
};
Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'circle-outline']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string,
  icon: PropTypes.string,
  block: PropTypes.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/button/index.js":
/*!************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/button/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! ./button */ "../../node_modules/antd/lib/button/button.js");

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(/*! ./button-group */ "../../node_modules/antd/lib/button/button-group.js");

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

_button2['default'].Group = _buttonGroup2['default'];
exports['default'] = _button2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/calendar/locale/en_US.js":
/*!*********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/calendar/locale/en_US.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__(/*! ../../date-picker/locale/en_US */ "../../node_modules/antd/lib/date-picker/locale/en_US.js");

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

exports['default'] = _en_US2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/date-picker/locale/en_US.js":
/*!************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/date-picker/locale/en_US.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _en_US = __webpack_require__(/*! rc-calendar/lib/locale/en_US */ "../../node_modules/rc-calendar/lib/locale/en_US.js");

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(/*! ../../time-picker/locale/en_US */ "../../node_modules/antd/lib/time-picker/locale/en_US.js");

var _en_US4 = _interopRequireDefault(_en_US3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
} // Merge into a locale object


var locale = {
  lang: (0, _extends3['default'])({
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date']
  }, _en_US2['default']),
  timePickerLocale: (0, _extends3['default'])({}, _en_US4['default'])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports['default'] = locale;
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/icon/index.js":
/*!**********************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/icon/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(/*! omit.js */ "../../node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var Icon = function Icon(props) {
  var type = props.type,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      spin = props.spin;
  var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
    anticon: true,
    'anticon-spin': !!spin || type === 'loading'
  }, 'anticon-' + type, true), className);
  return React.createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), {
    className: classString
  }));
};

exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/locale-provider/LocaleReceiver.js":
/*!******************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/locale-provider/LocaleReceiver.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var LocaleReceiver = function (_React$Component) {
  (0, _inherits3['default'])(LocaleReceiver, _React$Component);

  function LocaleReceiver() {
    (0, _classCallCheck3['default'])(this, LocaleReceiver);
    return (0, _possibleConstructorReturn3['default'])(this, (LocaleReceiver.__proto__ || Object.getPrototypeOf(LocaleReceiver)).apply(this, arguments));
  }

  (0, _createClass3['default'])(LocaleReceiver, [{
    key: 'getLocale',
    value: function getLocale() {
      var _props = this.props,
          componentName = _props.componentName,
          defaultLocale = _props.defaultLocale;
      var antLocale = this.context.antLocale;
      var localeFromContext = antLocale && antLocale[componentName];
      return (0, _extends3['default'])({}, typeof defaultLocale === 'function' ? defaultLocale() : defaultLocale, localeFromContext || {});
    }
  }, {
    key: 'getLocaleCode',
    value: function getLocaleCode() {
      var antLocale = this.context.antLocale;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return 'en-us';
      }

      return localeCode;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode());
    }
  }]);
  return LocaleReceiver;
}(React.Component);

exports['default'] = LocaleReceiver;
LocaleReceiver.contextTypes = {
  antLocale: PropTypes.object
};
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/locale-provider/default.js":
/*!***********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/locale-provider/default.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__(/*! rc-pagination/lib/locale/en_US */ "../../node_modules/rc-pagination/lib/locale/en_US.js");

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(/*! ../date-picker/locale/en_US */ "../../node_modules/antd/lib/date-picker/locale/en_US.js");

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = __webpack_require__(/*! ../time-picker/locale/en_US */ "../../node_modules/antd/lib/time-picker/locale/en_US.js");

var _en_US6 = _interopRequireDefault(_en_US5);

var _en_US7 = __webpack_require__(/*! ../calendar/locale/en_US */ "../../node_modules/antd/lib/calendar/locale/en_US.js");

var _en_US8 = _interopRequireDefault(_en_US7);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

exports['default'] = {
  locale: 'en',
  Pagination: _en_US2['default'],
  DatePicker: _en_US4['default'],
  TimePicker: _en_US6['default'],
  Calendar: _en_US8['default'],
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    notFoundContent: 'Not Found',
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Select: {
    notFoundContent: 'Not Found'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file'
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/modal/ActionButton.js":
/*!******************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/modal/ActionButton.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _button = __webpack_require__(/*! ../button */ "../../node_modules/antd/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var ActionButton = function (_React$Component) {
  (0, _inherits3['default'])(ActionButton, _React$Component);

  function ActionButton(props) {
    (0, _classCallCheck3['default'])(this, ActionButton);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).call(this, props));

    _this.onClick = function () {
      var _this$props = _this.props,
          actionFn = _this$props.actionFn,
          closeModal = _this$props.closeModal;

      if (actionFn) {
        var ret = void 0;

        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();

          if (!ret) {
            closeModal();
          }
        }

        if (ret && ret.then) {
          _this.setState({
            loading: true
          });

          ret.then(function () {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal.apply(undefined, arguments);
          }, function () {
            // See: https://github.com/ant-design/ant-design/issues/6183
            _this.setState({
              loading: false
            });
          });
        }
      } else {
        closeModal();
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  (0, _createClass3['default'])(ActionButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var $this = ReactDOM.findDOMNode(this);
        this.timeoutId = setTimeout(function () {
          return $this.focus();
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          children = _props.children;
      var loading = this.state.loading;
      return React.createElement(_button2['default'], {
        type: type,
        onClick: this.onClick,
        loading: loading
      }, children);
    }
  }]);
  return ActionButton;
}(React.Component);

exports['default'] = ActionButton;
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/modal/Modal.js":
/*!***********************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/modal/Modal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _rcDialog = __webpack_require__(/*! rc-dialog */ "../../node_modules/rc-dialog/es/DialogWrap.js");

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _propTypes = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "../../node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _button = __webpack_require__(/*! ../button */ "../../node_modules/antd/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _LocaleReceiver = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../../node_modules/antd/lib/locale-provider/LocaleReceiver.js");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _locale = __webpack_require__(/*! ./locale */ "../../node_modules/antd/lib/modal/locale.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var mousePosition = void 0;
var mousePositionEventBinded = void 0;

var Modal = function (_React$Component) {
  (0, _inherits3['default'])(Modal, _React$Component);

  function Modal() {
    (0, _classCallCheck3['default'])(this, Modal);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));

    _this.handleCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.handleOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    _this.renderFooter = function (locale) {
      var _this$props = _this.props,
          okText = _this$props.okText,
          okType = _this$props.okType,
          cancelText = _this$props.cancelText,
          confirmLoading = _this$props.confirmLoading;
      return React.createElement('div', null, React.createElement(_button2['default'], (0, _extends3['default'])({
        onClick: _this.handleCancel
      }, _this.props.cancelButtonProps), cancelText || locale.cancelText), React.createElement(_button2['default'], (0, _extends3['default'])({
        type: okType,
        loading: confirmLoading,
        onClick: _this.handleOk
      }, _this.props.okButtonProps), okText || locale.okText));
    };

    return _this;
  }

  (0, _createClass3['default'])(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (mousePositionEventBinded) {
        return;
      } // 只有点击事件支持从鼠标位置动画展开


      (0, _addEventListener2['default'])(document.documentElement, 'click', function (e) {
        mousePosition = {
          x: e.pageX,
          y: e.pageY
        }; // 100ms 内发生过点击事件，则从点击位置动画展示
        // 否则直接 zoom 展示
        // 这样可以兼容非点击方式展开

        setTimeout(function () {
          return mousePosition = null;
        }, 100);
      });
      mousePositionEventBinded = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _a = this.props,
          footer = _a.footer,
          visible = _a.visible,
          wrapClassName = _a.wrapClassName,
          centered = _a.centered,
          prefixCls = _a.prefixCls,
          restProps = __rest(_a, ["footer", "visible", "wrapClassName", "centered", "prefixCls"]);

      var defaultFooter = React.createElement(_LocaleReceiver2['default'], {
        componentName: 'Modal',
        defaultLocale: (0, _locale.getConfirmLocale)()
      }, this.renderFooter);
      return React.createElement(_rcDialog2['default'], (0, _extends3['default'])({}, restProps, {
        prefixCls: prefixCls,
        wrapClassName: (0, _classnames2['default'])((0, _defineProperty3['default'])({}, prefixCls + '-centered', !!centered), wrapClassName),
        footer: footer === undefined ? defaultFooter : footer,
        visible: visible,
        mousePosition: mousePosition,
        onClose: this.handleCancel
      }));
    }
  }]);
  return Modal;
}(React.Component);

exports['default'] = Modal;
Modal.defaultProps = {
  prefixCls: 'ant-modal',
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false,
  okType: 'primary',
  okButtonDisabled: false,
  cancelButtonDisabled: false
};
Modal.propTypes = {
  prefixCls: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.node,
  cancelText: PropTypes.node,
  centered: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  confirmLoading: PropTypes.bool,
  visible: PropTypes.bool,
  align: PropTypes.object,
  footer: PropTypes.node,
  title: PropTypes.node,
  closable: PropTypes.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/modal/confirm.js":
/*!*************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/modal/confirm.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports['default'] = confirm;

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _classnames = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(/*! ../icon */ "../../node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _Modal = __webpack_require__(/*! ./Modal */ "../../node_modules/antd/lib/modal/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _ActionButton = __webpack_require__(/*! ./ActionButton */ "../../node_modules/antd/lib/modal/ActionButton.js");

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _locale = __webpack_require__(/*! ./locale */ "../../node_modules/antd/lib/modal/locale.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var IS_REACT_16 = !!ReactDOM.createPortal;

var ConfirmDialog = function ConfirmDialog(props) {
  var onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard;
  var iconType = props.iconType || 'question-circle';
  var okType = props.okType || 'primary';
  var prefixCls = props.prefixCls || 'ant-confirm'; // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {}; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var runtimeLocale = (0, _locale.getConfirmLocale)();
  var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  var cancelText = props.cancelText || runtimeLocale.cancelText;
  var classString = (0, _classnames2['default'])(prefixCls, prefixCls + '-' + props.type, props.className);
  var cancelButton = okCancel && React.createElement(_ActionButton2['default'], {
    actionFn: onCancel,
    closeModal: close
  }, cancelText);
  return React.createElement(_Modal2['default'], {
    className: classString,
    wrapClassName: (0, _classnames2['default'])((0, _defineProperty3['default'])({}, prefixCls + '-centered', !!props.centered)),
    onCancel: close.bind(undefined, {
      triggerCancel: true
    }),
    visible: visible,
    title: '',
    transitionName: 'zoom',
    footer: '',
    maskTransitionName: 'fade',
    maskClosable: maskClosable,
    style: style,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard
  }, React.createElement('div', {
    className: prefixCls + '-body-wrapper'
  }, React.createElement('div', {
    className: prefixCls + '-body'
  }, React.createElement(_icon2['default'], {
    type: iconType
  }), React.createElement('span', {
    className: prefixCls + '-title'
  }, props.title), React.createElement('div', {
    className: prefixCls + '-content'
  }, props.content)), React.createElement('div', {
    className: prefixCls + '-btns'
  }, cancelButton, React.createElement(_ActionButton2['default'], {
    type: okType,
    actionFn: onOk,
    closeModal: close,
    autoFocus: true
  }, okText))));
};

function confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (IS_REACT_16) {
      render((0, _extends3['default'])({}, config, {
        close: close,
        visible: false,
        afterClose: destroy.bind.apply(destroy, [this].concat(args))
      }));
    } else {
      destroy.apply(undefined, args);
    }
  }

  function destroy() {
    var unmountResult = ReactDOM.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var triggerCancel = args && args.length && args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }
  }

  function render(props) {
    ReactDOM.render(React.createElement(ConfirmDialog, props), div);
  }

  render((0, _extends3['default'])({}, config, {
    visible: true,
    close: close
  }));
  return {
    destroy: close
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/modal/index.js":
/*!***********************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/modal/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _Modal = __webpack_require__(/*! ./Modal */ "../../node_modules/antd/lib/modal/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _confirm = __webpack_require__(/*! ./confirm */ "../../node_modules/antd/lib/modal/confirm.js");

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

_Modal2['default'].info = function (props) {
  var config = (0, _extends3['default'])({
    type: 'info',
    iconType: 'info-circle',
    okCancel: false
  }, props);
  return (0, _confirm2['default'])(config);
};

_Modal2['default'].success = function (props) {
  var config = (0, _extends3['default'])({
    type: 'success',
    iconType: 'check-circle',
    okCancel: false
  }, props);
  return (0, _confirm2['default'])(config);
};

_Modal2['default'].error = function (props) {
  var config = (0, _extends3['default'])({
    type: 'error',
    iconType: 'cross-circle',
    okCancel: false
  }, props);
  return (0, _confirm2['default'])(config);
};

_Modal2['default'].warning = _Modal2['default'].warn = function (props) {
  var config = (0, _extends3['default'])({
    type: 'warning',
    iconType: 'exclamation-circle',
    okCancel: false
  }, props);
  return (0, _confirm2['default'])(config);
};

_Modal2['default'].confirm = function (props) {
  var config = (0, _extends3['default'])({
    type: 'confirm',
    okCancel: true
  }, props);
  return (0, _confirm2['default'])(config);
};

exports['default'] = _Modal2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/modal/locale.js":
/*!************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/modal/locale.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _default = __webpack_require__(/*! ../locale-provider/default */ "../../node_modules/antd/lib/locale-provider/default.js");

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var runtimeLocale = (0, _extends3['default'])({}, _default2['default'].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0, _extends3['default'])({}, runtimeLocale, newLocale);
  } else {
    runtimeLocale = (0, _extends3['default'])({}, _default2['default'].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "../../node_modules/antd/lib/modal/style/index.css":
/*!******************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/modal/style/index.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../node_modules/antd/lib/progress/index.js":
/*!**************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/progress/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = __webpack_require__(/*! ./progress */ "../../node_modules/antd/lib/progress/progress.js");

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

exports['default'] = _progress2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/progress/progress.js":
/*!*****************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/progress/progress.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _icon = __webpack_require__(/*! ../icon */ "../../node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _rcProgress = __webpack_require__(/*! rc-progress */ "../../node_modules/rc-progress/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var statusColorMap = {
  normal: '#108ee9',
  exception: '#ff5500',
  success: '#87d068'
};

var validProgress = function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  } else if (progress > 100) {
    return 100;
  }

  return progress;
};

var Progress = function (_React$Component) {
  (0, _inherits3['default'])(Progress, _React$Component);

  function Progress() {
    (0, _classCallCheck3['default'])(this, Progress);
    return (0, _possibleConstructorReturn3['default'])(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Progress, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var props = this.props;

      var prefixCls = props.prefixCls,
          className = props.className,
          _props$percent = props.percent,
          percent = _props$percent === undefined ? 0 : _props$percent,
          status = props.status,
          format = props.format,
          trailColor = props.trailColor,
          size = props.size,
          successPercent = props.successPercent,
          type = props.type,
          strokeWidth = props.strokeWidth,
          width = props.width,
          showInfo = props.showInfo,
          _props$gapDegree = props.gapDegree,
          gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
          gapPosition = props.gapPosition,
          strokeColor = props.strokeColor,
          _props$strokeLinecap = props.strokeLinecap,
          strokeLinecap = _props$strokeLinecap === undefined ? 'round' : _props$strokeLinecap,
          restProps = __rest(props, ["prefixCls", "className", "percent", "status", "format", "trailColor", "size", "successPercent", "type", "strokeWidth", "width", "showInfo", "gapDegree", "gapPosition", "strokeColor", "strokeLinecap"]);

      var progressStatus = parseInt(successPercent ? successPercent.toString() : percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : status || 'normal';
      var progressInfo = void 0;
      var progress = void 0;

      var textFormatter = format || function (percentNumber) {
        return percentNumber + '%';
      };

      if (showInfo) {
        var text = void 0;
        var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';

        if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
          text = textFormatter(validProgress(percent), validProgress(successPercent));
        } else if (progressStatus === 'exception') {
          text = React.createElement(_icon2['default'], {
            type: 'cross' + iconType
          });
        } else if (progressStatus === 'success') {
          text = React.createElement(_icon2['default'], {
            type: 'check' + iconType
          });
        }

        progressInfo = React.createElement('span', {
          className: prefixCls + '-text'
        }, text);
      }

      if (type === 'line') {
        var percentStyle = {
          width: validProgress(percent) + '%',
          height: strokeWidth || (size === 'small' ? 6 : 8),
          background: strokeColor,
          borderRadius: strokeLinecap === 'square' ? 0 : '100px'
        };
        var successPercentStyle = {
          width: validProgress(successPercent) + '%',
          height: strokeWidth || (size === 'small' ? 6 : 8),
          borderRadius: strokeLinecap === 'square' ? 0 : '100px'
        };
        var successSegment = successPercent !== undefined ? React.createElement('div', {
          className: prefixCls + '-success-bg',
          style: successPercentStyle
        }) : null;
        progress = React.createElement('div', null, React.createElement('div', {
          className: prefixCls + '-outer'
        }, React.createElement('div', {
          className: prefixCls + '-inner'
        }, React.createElement('div', {
          className: prefixCls + '-bg',
          style: percentStyle
        }), successSegment)), progressInfo);
      } else if (type === 'circle' || type === 'dashboard') {
        var circleSize = width || 120;
        var circleStyle = {
          width: circleSize,
          height: circleSize,
          fontSize: circleSize * 0.15 + 6
        };
        var circleWidth = strokeWidth || 6;
        var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
        var gapDeg = gapDegree || type === 'dashboard' && 75;
        progress = React.createElement('div', {
          className: prefixCls + '-inner',
          style: circleStyle
        }, React.createElement(_rcProgress.Circle, {
          percent: validProgress(percent),
          strokeWidth: circleWidth,
          trailWidth: circleWidth,
          strokeColor: statusColorMap[progressStatus],
          strokeLinecap: strokeLinecap,
          trailColor: trailColor,
          prefixCls: prefixCls,
          gapDegree: gapDeg,
          gapPosition: gapPos
        }), progressInfo);
      }

      var classString = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + (type === 'dashboard' && 'circle' || type), true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-show-info', showInfo), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, size), _classNames), className);
      return React.createElement('div', (0, _extends3['default'])({}, restProps, {
        className: classString
      }), progress);
    }
  }]);
  return Progress;
}(React.Component);

exports['default'] = Progress;
Progress.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  trailColor: '#f3f3f3',
  prefixCls: 'ant-progress',
  size: 'default'
};
Progress.propTypes = {
  status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
  type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
  showInfo: PropTypes.bool,
  percent: PropTypes.number,
  width: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeLinecap: PropTypes.oneOf(['round', 'square']),
  strokeColor: PropTypes.string,
  trailColor: PropTypes.string,
  format: PropTypes.func,
  gapDegree: PropTypes.number,
  'default': PropTypes.oneOf(['default', 'small'])
};
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/antd/lib/progress/style/index.css":
/*!*********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/progress/style/index.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../node_modules/antd/lib/time-picker/locale/en_US.js":
/*!************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/antd/lib/time-picker/locale/en_US.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var locale = {
  placeholder: 'Select time'
};
exports['default'] = locale;
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/assign.js":
/*!**************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/core-js/object/assign.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"),
  __esModule: true
};

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/create.js":
/*!**************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/core-js/object/create.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/create */ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js"),
  __esModule: true
};

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/define-property.js":
/*!***********************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"),
  __esModule: true
};

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js"),
  __esModule: true
};

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/symbol.js":
/*!*******************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/core-js/symbol.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/symbol */ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"),
  __esModule: true
};

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!****************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"),
  __esModule: true
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/classCallCheck.js":
/*!***************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/createClass.js":
/*!************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/helpers/createClass.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2["default"])(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/defineProperty.js":
/*!***************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/helpers/defineProperty.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2["default"])(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/extends.js":
/*!********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/helpers/extends.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "../../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = _assign2["default"] || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/inherits.js":
/*!*********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/helpers/inherits.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3["default"])(superClass)));
  }

  subClass.prototype = (0, _create2["default"])(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2["default"] ? (0, _setPrototypeOf2["default"])(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports["default"] = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3["default"])(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/typeof.js":
/*!*******************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/helpers/typeof.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2["default"] === "function" && _typeof2(_iterator2["default"]) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof _symbol2["default"] === "function" && obj.constructor === _symbol2["default"] && obj !== _symbol2["default"].prototype ? "symbol" : _typeof2(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = typeof _symbol2["default"] === "function" && _typeof(_iterator2["default"]) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2["default"] === "function" && obj.constructor === _symbol2["default"] && obj !== _symbol2["default"].prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/*!**************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js":
/*!**************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js");

var $Object = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;

module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js":
/*!***********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js");

var $Object = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;

module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":
/*!*************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js");

__webpack_require__(/*! ../../modules/es6.object.to-string */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! ../../modules/es7.symbol.observable */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Symbol;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");

__webpack_require__(/*! ../../modules/web.dom.iterable */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");

module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  /* empty */
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!*********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/*!**********************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!***********************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!**********************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/*!**************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!******************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!*************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");

var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!*************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!**********************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!***********************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
/*!***********************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/*!**************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":
/*!***************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
/*!******************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(/*! ./_hide */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
/*!******************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");

var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/*!**************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":
/*!***********************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var META = __webpack_require__(/*! ./_uid */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js")('meta');

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");

var has = __webpack_require__(/*! ./_has */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var setDesc = __webpack_require__(/*! ./_object-dp */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(/*! ./_fails */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");

var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
/*!********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":
/*!******************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");

var has = __webpack_require__(/*! ./_has */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!**********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":
/*!******************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!******************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!******************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
/*!***************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");

var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;

var has = __webpack_require__(/*! ./_has */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/*!*************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js"); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!*******************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/*!**********************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");

var defineProperty = __webpack_require__(/*! ./_object-dp */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":
/*!**************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
/*!**********************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");

var _Symbol = __webpack_require__(/*! ./_global */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");

var step = __webpack_require__(/*! ./_iter-step */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js"); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(/*! ./_iter-define */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!***********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(/*! ./_object-assign */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js")
});

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js":
/*!***********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js"); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


$export($export.S, 'Object', {
  create: __webpack_require__(/*! ./_object-create */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js")
});

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!********************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js"); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js"), 'Object', {
  defineProperty: __webpack_require__(/*! ./_object-dp */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f
});

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Object', {
  setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js").set
});

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(/*! ./_iter-define */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":
/*!****************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(/*! ./_global */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");

var META = __webpack_require__(/*! ./_meta */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").KEY;

var $fails = __webpack_require__(/*! ./_fails */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");

var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");

var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");

var wks = __webpack_require__(/*! ./_wks */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");

var wksDefine = __webpack_require__(/*! ./_wks-define */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js");

var enumKeys = __webpack_require__(/*! ./_enum-keys */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js");

var isArray = __webpack_require__(/*! ./_is-array */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js");

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");

var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

var _create = __webpack_require__(/*! ./_object-create */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");

var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js");

var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js");

var $GOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");

var $DP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***************************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('observable');

/***/ }),

/***/ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!**********************************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");

var global = __webpack_require__(/*! ./_global */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");

var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),

/***/ "../../node_modules/classnames/index.js":
/*!*******************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/classnames/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames["default"] = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "../../node_modules/component-classes/index.js":
/*!**************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/component-classes/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
try {
  var index = __webpack_require__(/*! indexof */ "../../node_modules/component-indexof/index.js");
} catch (err) {
  var index = __webpack_require__(/*! component-indexof */ "../../node_modules/component-indexof/index.js");
}
/**
 * Whitespace regexp.
 */


var re = /\s+/;
/**
 * toString reference.
 */

var toString = Object.prototype.toString;
/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function (el) {
  return new ClassList(el);
};
/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */


function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }

  this.el = el;
  this.list = el.classList;
}
/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */


ClassList.prototype.add = function (name) {
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  } // fallback


  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};
/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */


ClassList.prototype.remove = function (name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  } // classList


  if (this.list) {
    this.list.remove(name);
    return this;
  } // fallback


  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};
/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */


ClassList.prototype.removeMatching = function (re) {
  var arr = this.array();

  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }

  return this;
};
/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */


ClassList.prototype.toggle = function (name, force) {
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }

    return this;
  } // fallback


  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};
/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */


ClassList.prototype.array = function () {
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};
/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */


ClassList.prototype.has = ClassList.prototype.contains = function (name) {
  return this.list ? this.list.contains(name) : !!~index(this.array(), name);
};

/***/ }),

/***/ "../../node_modules/component-indexof/index.js":
/*!**************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/component-indexof/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (arr, obj) {
  if (arr.indexOf) return arr.indexOf(obj);

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }

  return -1;
};

/***/ }),

/***/ "../../node_modules/css-animation/es/Event.js":
/*!*************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/css-animation/es/Event.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },
  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};
var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },
  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};
var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];

        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,
  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }

    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }

    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },
  // End events
  endEvents: endEvents,
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }

    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }

    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TransitionEvents);

/***/ }),

/***/ "../../node_modules/css-animation/es/index.js":
/*!*************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/css-animation/es/index.js ***!
  \*************************************************************************/
/*! exports provided: isCssAnimationSupported, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssAnimationSupported", function() { return isCssAnimationSupported; });
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../../node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "../../node_modules/css-animation/es/Event.js");
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component-classes */ "../../node_modules/component-classes/index.js");
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(component_classes__WEBPACK_IMPORTED_MODULE_2__);



var isCssAnimationSupported = _Event__WEBPACK_IMPORTED_MODULE_1__["default"].endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O', // ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';

  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);

    if (ret) {
      break;
    }
  }

  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay); // sometimes, browser bug

    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;

      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = component_classes__WEBPACK_IMPORTED_MODULE_2___default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);
    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);
    _Event__WEBPACK_IMPORTED_MODULE_1__["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null; // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.

    if (end) {
      end();
    }
  };

  _Event__WEBPACK_IMPORTED_MODULE_1__["default"].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }

  nodeClasses.add(className);
  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);

    if (active) {
      setTimeout(active, 0);
    }

    fixBrowserByTimeout(node); // 30ms for firefox
  }, 30);
  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);
    _Event__WEBPACK_IMPORTED_MODULE_1__["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null; // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.

    if (callback) {
      callback();
    }
  };

  _Event__WEBPACK_IMPORTED_MODULE_1__["default"].addEndEventListener(node, node.rcEndListener);
  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }

    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;

  if (value === undefined) {
    v = property;
    property = '';
  }

  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

/* harmony default export */ __webpack_exports__["default"] = (cssAnimation);

/***/ }),

/***/ "../../node_modules/css-animation/lib/Event.js":
/*!**************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/css-animation/lib/Event.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },
  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};
var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },
  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};
var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];

        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,
  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }

    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }

    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },
  // End events
  endEvents: endEvents,
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }

    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }

    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};
exports['default'] = TransitionEvents;
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/lil-uri/uri.js":
/*!**************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/lil-uri/uri.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! lil-uri - v0.2.0 - MIT License - https://github.com/lil-js/uri */
;

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (exports) {
  'use strict';

  var VERSION = '0.2.2';
  var REGEX = /^(?:([^:\/?#]+):\/\/)?((?:([^\/?#@]*)@)?([^\/?#:]*)(?:\:(\d*))?)?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n)*))?/i;

  function isStr(o) {
    return typeof o === 'string';
  }

  function decode(uri) {
    return decodeURIComponent(escape(uri));
  }

  function mapSearchParams(search) {
    var map = {};

    if (typeof search === 'string') {
      search.split('&').forEach(function (values) {
        values = values.split('=');

        if (map.hasOwnProperty(values[0])) {
          map[values[0]] = Array.isArray(map[values[0]]) ? map[values[0]] : [map[values[0]]];
          map[values[0]].push(values[1]);
        } else {
          map[values[0]] = values[1];
        }
      });
      return map;
    }
  }

  function accessor(type) {
    return function (value) {
      if (value) {
        this.parts[type] = isStr(value) ? decode(value) : value;
        return this;
      }

      this.parts = this.parse(this.build());
      return this.parts[type];
    };
  }

  function URI(uri) {
    this.uri = uri || null;

    if (isStr(uri) && uri.length) {
      this.parts = this.parse(uri);
    } else {
      this.parts = {};
    }
  }

  URI.prototype.parse = function (uri) {
    var parts = decode(uri || '').match(REGEX);
    var auth = (parts[3] || '').split(':');
    var host = auth.length ? (parts[2] || '').replace(/(.*\@)/, '') : parts[2];
    return {
      uri: parts[0],
      protocol: parts[1],
      host: host,
      hostname: parts[4],
      port: parts[5],
      auth: parts[3],
      user: auth[0],
      password: auth[1],
      path: parts[6],
      search: parts[7],
      query: mapSearchParams(parts[7]),
      hash: parts[8]
    };
  };

  URI.prototype.protocol = function (host) {
    return accessor('protocol').call(this, host);
  };

  URI.prototype.host = function (host) {
    return accessor('host').call(this, host);
  };

  URI.prototype.hostname = function (hostname) {
    return accessor('hostname').call(this, hostname);
  };

  URI.prototype.port = function (port) {
    return accessor('port').call(this, port);
  };

  URI.prototype.auth = function (auth) {
    return accessor('host').call(this, auth);
  };

  URI.prototype.user = function (user) {
    return accessor('user').call(this, user);
  };

  URI.prototype.password = function (password) {
    return accessor('password').call(this, password);
  };

  URI.prototype.path = function (path) {
    return accessor('path').call(this, path);
  };

  URI.prototype.search = function (search) {
    return accessor('search').call(this, search);
  };

  URI.prototype.query = function (query) {
    return query && _typeof(query) === 'object' ? accessor('query').call(this, query) : this.parts.query;
  };

  URI.prototype.hash = function (hash) {
    return accessor('hash').call(this, hash);
  };

  URI.prototype.get = function (value) {
    return this.parts[value] || '';
  };

  URI.prototype.build = URI.prototype.toString = URI.prototype.valueOf = function () {
    var p = this.parts,
        buf = [];
    if (p.protocol) buf.push(p.protocol + '://');
    if (p.auth) buf.push(p.auth + '@');else if (p.user) buf.push(p.user + (p.password ? ':' + p.password : '') + '@');

    if (p.host) {
      buf.push(p.host);
    } else {
      if (p.hostname) buf.push(p.hostname);
      if (p.port) buf.push(':' + p.port);
    }

    if (p.path) buf.push(p.path);

    if (p.query && _typeof(p.query) === 'object') {
      if (!p.path) buf.push('/');
      buf.push('?' + Object.keys(p.query).map(function (name) {
        if (Array.isArray(p.query[name])) {
          return p.query[name].map(function (value) {
            return name + (value ? '=' + value : '');
          }).join('&');
        } else {
          return name + (p.query[name] ? '=' + p.query[name] : '');
        }
      }).join('&'));
    } else if (p.search) {
      buf.push('?' + p.search);
    }

    if (p.hash) {
      if (!p.path) buf.push('/');
      buf.push('#' + p.hash);
    }

    return this.url = buf.filter(function (part) {
      return isStr(part);
    }).join('');
  };

  function uri(uri) {
    return new URI(uri);
  }

  function isURL(uri) {
    return typeof uri === 'string' && REGEX.test(uri);
  }

  uri.VERSION = VERSION;
  uri.is = uri.isURL = isURL;
  uri.URI = URI;
  return exports.uri = uri;
});

/***/ }),

/***/ "../../node_modules/mobx-react-lite/dist/index.module.js":
/*!************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/mobx-react-lite/dist/index.module.js ***!
  \************************************************************************************/
/*! exports provided: Observer, isUsingStaticRendering, observer, optimizeScheduler, useAsObservableSource, useComputed, useDisposable, useForceUpdate, useLocalStore, useObservable, useObserver, useStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return ObserverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return isUsingStaticRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizeScheduler", function() { return optimizeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return useAsObservableSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComputed", function() { return useComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDisposable", function() { return useDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return useLocalStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObservable", function() { return useObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return useObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return useStaticRendering; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
  throw new Error("mobx-react-lite requires React with Hooks support");
}

if (!mobx__WEBPACK_IMPORTED_MODULE_0__["spy"]) {
  throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

function useObservable(initialValue) {
  var observableRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  if (!observableRef.current) {
    observableRef.current = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(initialValue);
  }

  return observableRef.current;
}

function useComputed(func, inputs) {
  if (inputs === void 0) {
    inputs = [];
  }

  var computed$1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["computed"])(func);
  }, inputs);
  return computed$1.get();
}

var doNothingDisposer = function doNothingDisposer() {// empty
};
/**
 * Adds an observable effect (reaction, autorun, or anything else that returns a disposer) that will be registered upon component creation and disposed upon unmounting.
 * Returns the generated disposer for early disposal.
 *
 * @export
 * @template D
 * @param {() => D} disposerGenerator A function that returns the disposer of the wanted effect.
 * @param {ReadonlyArray<any>} [inputs=[]] If you want the effect to be automatically re-created when some variable(s) are changed then pass them in this array.
 * @returns {D}
 */


function useDisposable(disposerGenerator, inputs) {
  if (inputs === void 0) {
    inputs = [];
  }

  var disposerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var earlyDisposedRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return lazyCreateDisposer(false);
  }, inputs);

  function lazyCreateDisposer(earlyDisposal) {
    // ensure that we won't create a new disposer if it was early disposed
    if (earlyDisposedRef.current) {
      return doNothingDisposer;
    }

    if (!disposerRef.current) {
      var newDisposer = disposerGenerator();

      if (typeof newDisposer !== "function") {
        var error = new Error("generated disposer must be a function");
        {
          // tslint:disable-next-line:no-console
          console.error(error);
          return doNothingDisposer;
        }
      }

      disposerRef.current = newDisposer;
    }

    return function () {
      if (disposerRef.current) {
        disposerRef.current();
        disposerRef.current = null;
      }

      if (earlyDisposal) {
        earlyDisposedRef.current = true;
      }
    };
  }

  return lazyCreateDisposer(true);
}

var globalIsUsingStaticRendering = false;

function useStaticRendering(enable) {
  globalIsUsingStaticRendering = enable;
}

function isUsingStaticRendering() {
  return globalIsUsingStaticRendering;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function printDebugValue(v) {
  if (!v.current) {
    return "<unknown>";
  }

  return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["getDependencyTree"])(v.current);
}

var EMPTY_ARRAY = [];

function useUnmount(fn) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return fn;
  }, EMPTY_ARRAY);
}

function useForceUpdate() {
  var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), 2),
      setTick = _a[1];

  var update = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setTick(function (tick) {
      return tick + 1;
    });
  }, []);
  return update;
}

function isPlainObject(value) {
  if (!value || _typeof(value) !== "object") {
    return false;
  }

  var proto = Object.getPrototypeOf(value);
  return !proto || proto === Object.prototype;
}

var EMPTY_OBJECT = {};

function useObserver(fn, baseComponentName, options) {
  if (baseComponentName === void 0) {
    baseComponentName = "observed";
  }

  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (isUsingStaticRendering()) {
    return fn();
  }

  var wantedForceUpdateHook = options.useForceUpdate || useForceUpdate;
  var forceUpdate = wantedForceUpdateHook();
  var reaction = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  if (!reaction.current) {
    reaction.current = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"]("observer(" + baseComponentName + ")", function () {
      forceUpdate();
    });
  }

  var dispose = function dispose() {
    if (reaction.current && !reaction.current.isDisposed) {
      reaction.current.dispose();
      reaction.current = null;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(reaction, printDebugValue);
  useUnmount(function () {
    dispose();
  }); // render the original component, but have the
  // reaction track the observables, so that rendering
  // can be invalidated (see above) once a dependency changes

  var rendering;
  var exception;
  reaction.current.track(function () {
    try {
      rendering = fn();
    } catch (e) {
      exception = e;
    }
  });

  if (exception) {
    dispose();
    throw exception; // re-throw any exceptions catched during rendering
  }

  return rendering;
} // n.b. base case is not used for actual typings or exported in the typing files


function observer(baseComponent, options) {
  // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
  if (isUsingStaticRendering()) {
    return baseComponent;
  }

  var realOptions = _assign({
    forwardRef: false
  }, options);

  var baseComponentName = baseComponent.displayName || baseComponent.name;

  var wrappedComponent = function wrappedComponent(props, ref) {
    return useObserver(function () {
      return baseComponent(props, ref);
    }, baseComponentName);
  };

  wrappedComponent.displayName = baseComponentName; // memo; we are not intested in deep updates
  // in props; we assume that if deep objects are changed,
  // this is in observables, which would have been tracked anyway

  var memoComponent;

  if (realOptions.forwardRef) {
    // we have to use forwardRef here because:
    // 1. it cannot go before memo, only after it
    // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
    //    since it wouldn't be a callable function anymore
    memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(wrappedComponent));
  } else {
    memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(wrappedComponent);
  }

  copyStaticProperties(baseComponent, memoComponent);
  memoComponent.displayName = baseComponentName;
  return memoComponent;
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true
};

function copyStaticProperties(base, target) {
  Object.keys(base).forEach(function (key) {
    if (base.hasOwnProperty(key) && !hoistBlackList[key]) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}

function ObserverComponent(_a) {
  var children = _a.children,
      render = _a.render;
  var component = children || render;

  if (typeof component !== "function") {
    return null;
  }

  return useObserver(component);
}

ObserverComponent.propTypes = {
  children: ObserverPropsCheck,
  render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
  var extraKey = key === "children" ? "render" : "children";
  var hasProp = typeof props[key] === "function";
  var hasExtraProp = typeof props[extraKey] === "function";

  if (hasProp && hasExtraProp) {
    return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
  }

  if (hasProp || hasExtraProp) {
    return null;
  }

  return new Error("Invalid prop `" + propFullName + "` of type `" + _typeof(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
}

function useAsObservableSourceInternal(current, usedByLocalStore) {
  if (usedByLocalStore && current === undefined) {
    return undefined;
  }

  var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(current, {}, {
      deep: false
    });
  }), 1),
      res = _a[0];

  Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
    Object.assign(res, current);
  });
  return res;
}

function useAsObservableSource(current) {
  return useAsObservableSourceInternal(current, false);
}

function useLocalStore(initializer, current) {
  var source = useAsObservableSourceInternal(current, true);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    var local = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(initializer(source));

    if (isPlainObject(local)) {
      Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
        Object.keys(local).forEach(function (key) {
          var value = local[key];

          if (typeof value === "function") {
            // @ts-ignore No idea why ts2536 is popping out here
            local[key] = wrapInTransaction(value, local);
          }
        });
      });
    }

    return local;
  })[0];
} // tslint:disable-next-line: ban-types


function wrapInTransaction(fn, context) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["transaction"])(function () {
      return fn.apply(context, args);
    });
  };
}

var optimizeScheduler = function optimizeScheduler(reactionScheduler) {
  if (typeof reactionScheduler === "function") {
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({
      reactionScheduler: reactionScheduler
    });
  }
};



/***/ }),

/***/ "../../node_modules/mobx-react/dist/mobxreact.esm.js":
/*!********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/mobx-react/dist/mobxreact.esm.js ***!
  \********************************************************************************/
/*! exports provided: Observer, isUsingStaticRendering, useAsObservableSource, useLocalStore, useObserver, useStaticRendering, MobXProviderContext, PropTypes, Provider, disposeOnUnmount, inject, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobXProviderContext", function() { return MobXProviderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return PropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeOnUnmount", function() { return disposeOnUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "../../node_modules/mobx-react-lite/dist/index.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["Observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["isUsingStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["useAsObservableSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["useLocalStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["useObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["useStaticRendering"]; });

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};

function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}

function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (_typeof(objA) !== "object" || objA === null || _typeof(objB) !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};

function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */


function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */


var mobxMixins = /*#__PURE__*/newSymbol("patchMixins");
var mobxPatchedDefinition = /*#__PURE__*/newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  } // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls


  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_0__["$mobx"] || "$mobx";
var mobxIsUnmounted = /*#__PURE__*/newSymbol("isUnmounted");
var skipRenderKey = /*#__PURE__*/newSymbol("skipRender");
var isForcingUpdateKey = /*#__PURE__*/newSymbol("isForcingUpdate");

function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;
  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["isUsingStaticRendering"])() === true) return;

    if (this.render[mobxAdminProperty]) {
      this.render[mobxAdminProperty].dispose();
    } else if (true) {
      var displayName = getDisplayName(this);
      console.warn("The render function for an observer component (" + displayName + ") was modified after MobX attached. This is not supported, since the new function can't be triggered by MobX.");
    }

    this[mobxIsUnmounted] = true;
  });
  return componentClass;
} // Generates a friendly name for debugging


function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["isUsingStaticRendering"])() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChanges"])(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["isUsingStaticRendering"])()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        prevReadState = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"])(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"])(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol["for"]; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ? /*#__PURE__*/Symbol["for"]("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"] === "function" && /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ? /*#__PURE__*/Symbol["for"]("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_1__["memo"] === "function" && /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function ObserverForwardRef() {
      var args = arguments;
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["Observer"], null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_1__["Component"], component)) {
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["observer"])(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});

function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(_extends({}, parentValue, {}, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, {}, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}

Provider.displayName = "MobXProvider";
/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountProto");
var instStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;

  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor || Object.getPrototypeOf(target.constructor);
  var c2 = Object.getPrototypeOf(target.constructor);

  if (!(c === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = _typeof(propValue);

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"];
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableObject"];
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableMap"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Map");
var observableObject = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};
if (!react__WEBPACK_IMPORTED_MODULE_1__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]) throw new Error("mobx-react requires mobx to be available");
if (typeof react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"] === "function") Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({
  reactionScheduler: react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"]
});


/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!**********************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/object-assign/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "../../node_modules/omit.js/es/index.js":
/*!*******************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/omit.js/es/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);


function omit(obj, fields) {
  var shallowCopy = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, obj);

  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!******************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/process/browser.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "../../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "../../node_modules/prop-types/index.js":
/*!*******************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/prop-types/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "../../node_modules/rc-animate/es/Animate.js":
/*!************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-animate/es/Animate.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_unsafeLifecyclesPolyfill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/unsafeLifecyclesPolyfill */ "../../node_modules/rc-util/es/unsafeLifecyclesPolyfill.js");
/* harmony import */ var _ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChildrenUtils */ "../../node_modules/rc-animate/es/ChildrenUtils.js");
/* harmony import */ var _AnimateChild__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AnimateChild */ "../../node_modules/rc-animate/es/AnimateChild.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/animate */ "../../node_modules/rc-animate/es/util/animate.js");












var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;

  if (react__WEBPACK_IMPORTED_MODULE_6___default.a.isValidElement(children)) {
    if (!children.key) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }

  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Animate, _React$Component); // eslint-disable-line


  function Animate(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Animate);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];
    _this.state = {
      children: Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["toArrayChildren"])(getChildrenFromProps(props))
    };
    _this.childrenRefs = {};
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;

      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }

      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["toArrayChildren"])(getChildrenFromProps(nextProps));
      var props = this.props; // exclusive needs immediate response

      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }

      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys; // last props children if exclusive

      var currentChildren = props.exclusive ? Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["toArrayChildren"])(getChildrenFromProps(props)) : this.state.children; // in case destroy in showProp mode

      var newChildren = [];

      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["findChildInChildrenByKey"])(nextChildren, currentChild.key);
          var newChild = void 0;

          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(nextChild || currentChild, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }

          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["findChildInChildrenByKey"])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["mergeChildren"])(currentChildren, nextChildren);
      } // need render to avoid update


      this.setState({
        children: newChildren
      });
      nextChildren.forEach(function (child) {
        var key = child && child.key;

        if (child && currentlyAnimatingKeys[key]) {
          return;
        }

        var hasPrev = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["findChildInChildrenByKey"])(currentChildren, key);

        if (showProp) {
          var showInNext = child.props[showProp];

          if (hasPrev) {
            var showInNow = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);

            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });
      currentChildren.forEach(function (child) {
        var key = child && child.key;

        if (child && currentlyAnimatingKeys[key]) {
          return;
        }

        var hasNext = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["findChildInChildrenByKey"])(nextChildren, key);

        if (showProp) {
          var showInNow = child.props[showProp];

          if (hasNext) {
            var showInNext = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["findShownChildInChildrenByKey"])(nextChildren, key, showProp);

            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;

      if (showProp) {
        return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
      }

      return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["findChildInChildrenByKey"])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];

      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;

      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }

          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }

          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_AnimateChild__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: child.key,
            ref: function ref(node) {
              _this4.childrenRefs[child.key] = node;
            },
            animation: props.animation,
            transitionName: props.transitionName,
            transitionEnter: props.transitionEnter,
            transitionAppear: props.transitionAppear,
            transitionLeave: props.transitionLeave
          }, child);
        });
      }

      var Component = props.component;

      if (Component) {
        var passedProps = props;

        if (typeof Component === 'string') {
          passedProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, passedProps, children);
      }

      return children[0] || null;
    }
  }]);

  return Animate;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Animate.isAnimate = true;
Animate.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  component: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  componentProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  transitionEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  transitionAppear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  exclusive: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  transitionLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onEnd: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onAppear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  showProp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;

      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;

      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key]; // if update on exclusive mode, skip check

    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }

    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["toArrayChildren"])(getChildrenFromProps(props));

    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_11__["default"].allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (_util_animate__WEBPACK_IMPORTED_MODULE_11__["default"].allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;

      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key]; // if update on exclusive mode, skip check

    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }

    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["toArrayChildren"])(getChildrenFromProps(props)); // in case state change is too fast

    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (_util_animate__WEBPACK_IMPORTED_MODULE_11__["default"].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };

      if (!Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_9__["isSameChildren"])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(rc_util_es_unsafeLifecyclesPolyfill__WEBPACK_IMPORTED_MODULE_8__["default"])(Animate));

/***/ }),

/***/ "../../node_modules/rc-animate/es/AnimateChild.js":
/*!*****************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-animate/es/AnimateChild.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var css_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! css-animation */ "../../node_modules/css-animation/es/index.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/animate */ "../../node_modules/rc-animate/es/util/animate.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }










var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(AnimateChild, _React$Component);

  function AnimateChild() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AnimateChild);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_8__["default"].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_8__["default"].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_8__["default"].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = _typeof(transitionName) === 'object';
      this.stop();

      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };

      if ((css_animation__WEBPACK_IMPORTED_MODULE_7__["isCssAnimationSupported"] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';

        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }

        this.stopper = Object(css_animation__WEBPACK_IMPORTED_MODULE_7__["default"])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;

      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

AnimateChild.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (AnimateChild);

/***/ }),

/***/ "../../node_modules/rc-animate/es/ChildrenUtils.js":
/*!******************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-animate/es/ChildrenUtils.js ***!
  \******************************************************************************/
/*! exports provided: toArrayChildren, findChildInChildrenByKey, findShownChildInChildrenByKey, findHiddenChildInChildrenByKey, isSameChildren, mergeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayChildren", function() { return toArrayChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChildInChildrenByKey", function() { return findChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findShownChildInChildrenByKey", function() { return findShownChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findHiddenChildInChildrenByKey", function() { return findHiddenChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameChildren", function() { return isSameChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildren", function() { return mergeChildren; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function toArrayChildren(children) {
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}
function findChildInChildrenByKey(children, key) {
  var ret = null;

  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }

      if (child && child.key === key) {
        ret = child;
      }
    });
  }

  return ret;
}
function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;

  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }

        ret = child;
      }
    });
  }

  return ret;
}
function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;

  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }

      found = child && child.key === key && !child.props[showProp];
    });
  }

  return found;
}
function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;

  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];

      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }

  return same;
}
function mergeChildren(prev, next) {
  var ret = []; // For each key of `next`, the list of keys to insert before that key in
  // the combined list

  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });
  next.forEach(function (child) {
    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }

    ret.push(child);
  });
  ret = ret.concat(pendingChildren);
  return ret;
}

/***/ }),

/***/ "../../node_modules/rc-animate/es/util/animate.js":
/*!*****************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-animate/es/util/animate.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ }),

/***/ "../../node_modules/rc-calendar/lib/locale/en_US.js":
/*!*******************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-calendar/lib/locale/en_US.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/rc-dialog/es/Dialog.js":
/*!**********************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-dialog/es/Dialog.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "../../node_modules/rc-dialog/node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "../../node_modules/rc-dialog/node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-animate */ "../../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LazyRenderBox */ "../../node_modules/rc-dialog/es/LazyRenderBox.js");
/* harmony import */ var rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/getScrollBarSize */ "../../node_modules/rc-dialog/node_modules/rc-util/es/getScrollBarSize.js");











var uuid = 0;
var openCount = 0;
/* eslint react/no-is-mounted:0 */

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }

  return ret;
}

function setTransformOrigin(node, value) {
  var style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
    style[prefix + 'TransformOrigin'] = value;
  });
  style['transformOrigin'] = value;
}

function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}

var Dialog = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Dialog, _React$Component);

  function Dialog() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dialog);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));

    _this.onAnimateLeave = function () {
      var afterClose = _this.props.afterClose; // need demo?
      // https://github.com/react-component/dialog/pull/28

      if (_this.wrap) {
        _this.wrap.style.display = 'none';
      }

      _this.inTransition = false;

      _this.removeScrollingEffect();

      if (afterClose) {
        afterClose();
      }
    };

    _this.onMaskClick = function (e) {
      // android trigger click on open (fastclick??)
      if (Date.now() - _this.openTime < 300) {
        return;
      }

      if (e.target === e.currentTarget) {
        _this.close(e);
      }
    };

    _this.onKeyDown = function (e) {
      var props = _this.props;

      if (props.keyboard && e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ESC) {
        e.stopPropagation();

        _this.close(e);

        return;
      } // keep focus inside dialog


      if (props.visible) {
        if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].TAB) {
          var activeElement = document.activeElement;
          var sentinelStart = _this.sentinelStart;

          if (e.shiftKey) {
            if (activeElement === sentinelStart) {
              _this.sentinelEnd.focus();
            }
          } else if (activeElement === _this.sentinelEnd) {
            sentinelStart.focus();
          }
        }
      }
    };

    _this.getDialogElement = function () {
      var props = _this.props;
      var closable = props.closable;
      var prefixCls = props.prefixCls;
      var dest = {};

      if (props.width !== undefined) {
        dest.width = props.width;
      }

      if (props.height !== undefined) {
        dest.height = props.height;
      }

      var footer = void 0;

      if (props.footer) {
        footer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
          className: prefixCls + '-footer',
          ref: _this.saveRef('footer')
        }, props.footer);
      }

      var header = void 0;

      if (props.title) {
        header = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
          className: prefixCls + '-header',
          ref: _this.saveRef('header')
        }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
          className: prefixCls + '-title',
          id: _this.titleId
        }, props.title));
      }

      var closer = void 0;

      if (closable) {
        closer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", {
          onClick: _this.close,
          "aria-label": "Close",
          className: prefixCls + '-close'
        }, props.closeIcon || react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
          className: prefixCls + '-close-x'
        }));
      }

      var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props.style, dest);

      var sentinelStyle = {
        width: 0,
        height: 0,
        overflow: 'hidden'
      };

      var transitionName = _this.getTransitionName();

      var dialogElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: "dialog-element",
        role: "document",
        ref: _this.saveRef('dialog'),
        style: style,
        className: prefixCls + ' ' + (props.className || ''),
        visible: props.visible
      }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        tabIndex: 0,
        ref: _this.saveRef('sentinelStart'),
        style: sentinelStyle
      }, "sentinelStart"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: prefixCls + '-content'
      }, closer, header, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: prefixCls + '-body',
        style: props.bodyStyle,
        ref: _this.saveRef('body')
      }, props.bodyProps), props.children), footer), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        tabIndex: 0,
        ref: _this.saveRef('sentinelEnd'),
        style: sentinelStyle
      }, "sentinelEnd"));
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: "dialog",
        showProp: "visible",
        onLeave: _this.onAnimateLeave,
        transitionName: transitionName,
        component: "",
        transitionAppear: true
      }, props.visible || !props.destroyOnClose ? dialogElement : null);
    };

    _this.getZIndexStyle = function () {
      var style = {};
      var props = _this.props;

      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }

      return style;
    };

    _this.getWrapStyle = function () {
      return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.wrapStyle);
    };

    _this.getMaskStyle = function () {
      return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.maskStyle);
    };

    _this.getMaskElement = function () {
      var props = _this.props;
      var maskElement = void 0;

      if (props.mask) {
        var maskTransition = _this.getMaskTransitionName();

        maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          style: _this.getMaskStyle(),
          key: "mask",
          className: props.prefixCls + '-mask',
          hiddenClassName: props.prefixCls + '-mask-hidden',
          visible: props.visible
        }, props.maskProps));

        if (maskTransition) {
          maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: "mask",
            showProp: "visible",
            transitionAppear: true,
            component: "",
            transitionName: maskTransition
          }, maskElement);
        }
      }

      return maskElement;
    };

    _this.getMaskTransitionName = function () {
      var props = _this.props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;

      if (!transitionName && animation) {
        transitionName = props.prefixCls + '-' + animation;
      }

      return transitionName;
    };

    _this.getTransitionName = function () {
      var props = _this.props;
      var transitionName = props.transitionName;
      var animation = props.animation;

      if (!transitionName && animation) {
        transitionName = props.prefixCls + '-' + animation;
      }

      return transitionName;
    };

    _this.setScrollbar = function () {
      if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
        document.body.style.paddingRight = _this.scrollbarWidth + 'px';
      }
    };

    _this.addScrollingEffect = function () {
      openCount++;

      if (openCount !== 1) {
        return;
      }

      _this.checkScrollbar();

      _this.setScrollbar();

      document.body.style.overflow = 'hidden'; // this.adjustDialog();
    };

    _this.removeScrollingEffect = function () {
      openCount--;

      if (openCount !== 0) {
        return;
      }

      document.body.style.overflow = '';

      _this.resetScrollbar(); // this.resetAdjustments();

    };

    _this.close = function (e) {
      var onClose = _this.props.onClose;

      if (onClose) {
        onClose(e);
      }
    };

    _this.checkScrollbar = function () {
      var fullWindowWidth = window.innerWidth;

      if (!fullWindowWidth) {
        // workaround for missing window.innerWidth in IE8
        var documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
      }

      _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;

      if (_this.bodyIsOverflowing) {
        _this.scrollbarWidth = Object(rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_10__["default"])();
      }
    };

    _this.resetScrollbar = function () {
      document.body.style.paddingRight = '';
    };

    _this.adjustDialog = function () {
      if (_this.wrap && _this.scrollbarWidth !== undefined) {
        var modalIsOverflowing = _this.wrap.scrollHeight > document.documentElement.clientHeight;
        _this.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
        _this.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
      }
    };

    _this.resetAdjustments = function () {
      if (_this.wrap) {
        _this.wrap.style.paddingLeft = _this.wrap.style.paddingLeft = '';
      }
    };

    _this.saveRef = function (name) {
      return function (node) {
        _this[name] = node;
      };
    };

    return _this;
  }

  Dialog.prototype.componentWillMount = function componentWillMount() {
    this.inTransition = false;
    this.titleId = 'rcDialogTitle' + uuid++;
  };

  Dialog.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({});
  };

  Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    var mousePosition = this.props.mousePosition;

    if (props.visible) {
      // first show
      if (!prevProps.visible) {
        this.openTime = Date.now();
        this.addScrollingEffect();
        this.tryFocus();
        var dialogNode = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](this.dialog);

        if (mousePosition) {
          var elOffset = offset(dialogNode);
          setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
        } else {
          setTransformOrigin(dialogNode, '');
        }
      }
    } else if (prevProps.visible) {
      this.inTransition = true;

      if (props.mask && this.lastOutSideFocusNode) {
        try {
          this.lastOutSideFocusNode.focus();
        } catch (e) {
          this.lastOutSideFocusNode = null;
        }

        this.lastOutSideFocusNode = null;
      }
    }
  };

  Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.visible || this.inTransition) {
      this.removeScrollingEffect();
    }
  };

  Dialog.prototype.tryFocus = function tryFocus() {
    if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(this.wrap, document.activeElement)) {
      this.lastOutSideFocusNode = document.activeElement;
      this.sentinelStart.focus();
    }
  };

  Dialog.prototype.render = function render() {
    var props = this.props;
    var prefixCls = props.prefixCls,
        maskClosable = props.maskClosable;
    var style = this.getWrapStyle(); // clear hide display
    // and only set display after async anim, not here for hide

    if (props.visible) {
      style.display = null;
    }

    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, this.getMaskElement(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      tabIndex: -1,
      onKeyDown: this.onKeyDown,
      className: prefixCls + '-wrap ' + (props.wrapClassName || ''),
      ref: this.saveRef('wrap'),
      onClick: maskClosable ? this.onMaskClick : undefined,
      role: "dialog",
      "aria-labelledby": props.title ? this.titleId : null,
      style: style
    }, props.wrapProps), this.getDialogElement()));
  };

  return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dialog);
Dialog.defaultProps = {
  className: '',
  mask: true,
  visible: false,
  keyboard: true,
  closable: true,
  maskClosable: true,
  destroyOnClose: false,
  prefixCls: 'rc-dialog'
};

/***/ }),

/***/ "../../node_modules/rc-dialog/es/DialogWrap.js":
/*!**************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-dialog/es/DialogWrap.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dialog */ "../../node_modules/rc-dialog/es/Dialog.js");
/* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/ContainerRender */ "../../node_modules/rc-dialog/node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Portal */ "../../node_modules/rc-dialog/node_modules/rc-util/es/Portal.js");









var IS_REACT_16 = ('createPortal' in react_dom__WEBPACK_IMPORTED_MODULE_5__);

var DialogWrap = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DialogWrap, _React$Component);

  function DialogWrap() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DialogWrap);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));

    _this.saveDialog = function (node) {
      _this._component = node;
    };

    _this.getComponent = function () {
      var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        ref: _this.saveDialog
      }, _this.props, extra, {
        key: "dialog"
      }));
    }; // fix issue #10656

    /*
    * Custom container should not be return, because in the Portal component, it will remove the
    * return container element here, if the custom container is the only child of it's component,
    * like issue #10656, It will has a conflict with removeChild method in react-dom.
    * So here should add a child (div element) to custom container.
    * */


    _this.getContainer = function () {
      var container = document.createElement('div');

      if (_this.props.getContainer) {
        _this.props.getContainer().appendChild(container);
      } else {
        document.body.appendChild(container);
      }

      return container;
    };

    return _this;
  }

  DialogWrap.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref) {
    var visible = _ref.visible;
    return !!(this.props.visible || visible);
  };

  DialogWrap.prototype.componentWillUnmount = function componentWillUnmount() {
    if (IS_REACT_16) {
      return;
    }

    if (this.props.visible) {
      this.renderComponent({
        afterClose: this.removeContainer,
        onClose: function onClose() {},
        visible: false
      });
    } else {
      this.removeContainer();
    }
  };

  DialogWrap.prototype.render = function render() {
    var _this2 = this;

    var visible = this.props.visible;
    var portal = null;

    if (!IS_REACT_16) {
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_7__["default"], {
        parent: this,
        visible: visible,
        autoDestroy: false,
        getComponent: this.getComponent,
        getContainer: this.getContainer
      }, function (_ref2) {
        var renderComponent = _ref2.renderComponent,
            removeContainer = _ref2.removeContainer;
        _this2.renderComponent = renderComponent;
        _this2.removeContainer = removeContainer;
        return null;
      });
    }

    if (visible || this._component) {
      portal = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        getContainer: this.getContainer
      }, this.getComponent());
    }

    return portal;
  };

  return DialogWrap;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

DialogWrap.defaultProps = {
  visible: false
};
/* harmony default export */ __webpack_exports__["default"] = (DialogWrap);

/***/ }),

/***/ "../../node_modules/rc-dialog/es/LazyRenderBox.js":
/*!*****************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-dialog/es/LazyRenderBox.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var LazyRenderBox = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LazyRenderBox, _React$Component);

  function LazyRenderBox() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !!nextProps.hiddenClassName || !!nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var className = this.props.className;

    if (!!this.props.hiddenClassName && !this.props.visible) {
      className += " " + this.props.hiddenClassName;
    }

    var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props);

    delete props.hiddenClassName;
    delete props.visible;
    props.className = className;
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props));
  };

  return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "../../node_modules/rc-dialog/node_modules/rc-util/es/ContainerRender.js":
/*!****************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-dialog/node_modules/rc-util/es/ContainerRender.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainerRender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}





var ContainerRender = /*#__PURE__*/function (_React$Component) {
  _inherits(ContainerRender, _React$Component);

  function ContainerRender() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContainerRender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContainerRender)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.removeContainer = function () {
      if (_this.container) {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(_this.container);

        _this.container.parentNode.removeChild(_this.container);

        _this.container = null;
      }
    };

    _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }

        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    };

    return _this;
  }

  _createClass(ContainerRender, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ContainerRender.propTypes = {
  autoMount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  autoDestroy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  getComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};


/***/ }),

/***/ "../../node_modules/rc-dialog/node_modules/rc-util/es/Dom/contains.js":
/*!*************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-dialog/node_modules/rc-util/es/Dom/contains.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
function contains(root, n) {
  var node = n;

  while (node) {
    if (node === root) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}

/***/ }),

/***/ "../../node_modules/rc-dialog/node_modules/rc-util/es/KeyCode.js":
/*!********************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-dialog/node_modules/rc-util/es/KeyCode.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (KeyCode);

/***/ }),

/***/ "../../node_modules/rc-dialog/node_modules/rc-util/es/Portal.js":
/*!*******************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-dialog/node_modules/rc-util/es/Portal.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}





var Portal = /*#__PURE__*/function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Portal).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: "createContainer",
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: "removeContainer",
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this._container) {
        return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.props.children, this._container);
      }

      return null;
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Portal.propTypes = {
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  didUpdate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};


/***/ }),

/***/ "../../node_modules/rc-dialog/node_modules/rc-util/es/getScrollBarSize.js":
/*!*****************************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-dialog/node_modules/rc-util/es/getScrollBarSize.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

/***/ }),

/***/ "../../node_modules/rc-pagination/lib/locale/en_US.js":
/*!*********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-pagination/lib/locale/en_US.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/rc-progress/es/Circle.js":
/*!************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-progress/es/Circle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enhancer */ "../../node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "../../node_modules/rc-progress/es/types.js");





/* eslint react/prop-types: 0 */






var Circle = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Circle, _Component);

  function Circle() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Circle);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.apply(this, arguments));
  }

  Circle.prototype.getPathStyles = function getPathStyles() {
    var _props = this.props,
        percent = _props.percent,
        strokeWidth = _props.strokeWidth,
        strokeColor = _props.strokeColor,
        _props$gapDegree = _props.gapDegree,
        gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
        gapPosition = _props.gapPosition;
    var radius = 50 - strokeWidth / 2;
    var beginPositionX = 0;
    var beginPositionY = -radius;
    var endPositionX = 0;
    var endPositionY = -2 * radius;

    switch (gapPosition) {
      case 'left':
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = 2 * radius;
        endPositionY = 0;
        break;

      case 'right':
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = -2 * radius;
        endPositionY = 0;
        break;

      case 'bottom':
        beginPositionY = radius;
        endPositionY = 2 * radius;
        break;

      default:
    }

    var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
    var len = Math.PI * 2 * radius;
    var trailPathStyle = {
      strokeDasharray: len - gapDegree + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
    };
    var strokePathStyle = {
      stroke: strokeColor,
      strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line

    };
    return {
      pathString: pathString,
      trailPathStyle: trailPathStyle,
      strokePathStyle: strokePathStyle
    };
  };

  Circle.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        strokeWidth = _props2.strokeWidth,
        trailWidth = _props2.trailWidth,
        percent = _props2.percent,
        trailColor = _props2.trailColor,
        strokeLinecap = _props2.strokeLinecap,
        style = _props2.style,
        className = _props2.className,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'percent', 'trailColor', 'strokeLinecap', 'style', 'className']);

    var _getPathStyles = this.getPathStyles(),
        pathString = _getPathStyles.pathString,
        trailPathStyle = _getPathStyles.trailPathStyle,
        strokePathStyle = _getPathStyles.strokePathStyle;

    delete restProps.percent;
    delete restProps.gapDegree;
    delete restProps.gapPosition;
    delete restProps.strokeColor;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('svg', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: prefixCls + '-circle ' + className,
      viewBox: '0 0 100 100',
      style: style
    }, restProps), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
      className: prefixCls + '-circle-trail',
      d: pathString,
      stroke: trailColor,
      strokeLinecap: strokeLinecap,
      strokeWidth: trailWidth || strokeWidth,
      fillOpacity: '0',
      style: trailPathStyle
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
      className: prefixCls + '-circle-path',
      d: pathString,
      strokeLinecap: strokeLinecap,
      strokeWidth: this.props.percent === 0 ? 0 : strokeWidth,
      fillOpacity: '0',
      ref: function ref(path) {
        _this2.path = path;
      },
      style: strokePathStyle
    }));
  };

  return Circle;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Circle.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _types__WEBPACK_IMPORTED_MODULE_8__["propTypes"], {
  gapPosition: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['top', 'bottom', 'left', 'right'])
});
Circle.defaultProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _types__WEBPACK_IMPORTED_MODULE_8__["defaultProps"], {
  gapPosition: 'top'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_enhancer__WEBPACK_IMPORTED_MODULE_7__["default"])(Circle));

/***/ }),

/***/ "../../node_modules/rc-progress/es/Line.js":
/*!**********************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-progress/es/Line.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enhancer */ "../../node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "../../node_modules/rc-progress/es/types.js");









var Line = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Line, _Component);

  function Line() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Line);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.apply(this, arguments));
  }

  Line.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        percent = _props.percent,
        prefixCls = _props.prefixCls,
        strokeColor = _props.strokeColor,
        strokeLinecap = _props.strokeLinecap,
        strokeWidth = _props.strokeWidth,
        style = _props.style,
        trailColor = _props.trailColor,
        trailWidth = _props.trailWidth,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['className', 'percent', 'prefixCls', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'trailWidth']);

    delete restProps.gapPosition;
    var pathStyle = {
      strokeDasharray: '100px, 100px',
      strokeDashoffset: 100 - percent + 'px',
      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear'
    };
    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = 'M ' + (strokeLinecap === 'round' ? center : 0) + ',' + center + '\n           L ' + (strokeLinecap === 'round' ? right : 100) + ',' + center;
    var viewBoxString = '0 0 100 ' + strokeWidth;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('svg', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: prefixCls + '-line ' + className,
      viewBox: viewBoxString,
      preserveAspectRatio: 'none',
      style: style
    }, restProps), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
      className: prefixCls + '-line-trail',
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: trailColor,
      strokeWidth: trailWidth || strokeWidth,
      fillOpacity: '0'
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
      className: prefixCls + '-line-path',
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      fillOpacity: '0',
      ref: function ref(path) {
        _this2.path = path;
      },
      style: pathStyle
    }));
  };

  return Line;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Line.propTypes = _types__WEBPACK_IMPORTED_MODULE_7__["propTypes"];
Line.defaultProps = _types__WEBPACK_IMPORTED_MODULE_7__["defaultProps"];
/* harmony default export */ __webpack_exports__["default"] = (Object(_enhancer__WEBPACK_IMPORTED_MODULE_6__["default"])(Line));

/***/ }),

/***/ "../../node_modules/rc-progress/es/enhancer.js":
/*!**************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-progress/es/enhancer.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);




var enhancer = function enhancer(WrappedComponent) {
  return function (_WrappedComponent) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Progress, _WrappedComponent);

    function Progress() {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Progress);

      return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _WrappedComponent.apply(this, arguments));
    }

    Progress.prototype.componentDidUpdate = function componentDidUpdate() {
      if (!this.path) {
        return;
      }

      var pathStyle = this.path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
      var now = Date.now();

      if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }

      this.prevTimeStamp = Date.now();
    };

    Progress.prototype.render = function render() {
      return _WrappedComponent.prototype.render.call(this);
    };

    return Progress;
  }(WrappedComponent);
};

/* harmony default export */ __webpack_exports__["default"] = (enhancer);

/***/ }),

/***/ "../../node_modules/rc-progress/es/index.js":
/*!***********************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-progress/es/index.js ***!
  \***********************************************************************/
/*! exports provided: Line, Circle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "../../node_modules/rc-progress/es/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Line__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "../../node_modules/rc-progress/es/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  Line: _Line__WEBPACK_IMPORTED_MODULE_0__["default"],
  Circle: _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "../../node_modules/rc-progress/es/types.js":
/*!***********************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-progress/es/types.js ***!
  \***********************************************************************/
/*! exports provided: defaultProps, propTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};
var propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['butt', 'round', 'square']),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  trailColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  trailWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])
};

/***/ }),

/***/ "../../node_modules/rc-util/es/unsafeLifecyclesPolyfill.js":
/*!**************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-util/es/unsafeLifecyclesPolyfill.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var unsafeLifecyclesPolyfill = function unsafeLifecyclesPolyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  } // only handle componentWillReceiveProps


  if (typeof prototype.componentWillReceiveProps !== 'function') {
    return Component;
  } // In React 16.9, React.Profiler was introduced together with UNSAFE_componentWillReceiveProps
  // https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#performance-measurements-with-reactprofiler


  if (!react__WEBPACK_IMPORTED_MODULE_0___default.a.Profiler) {
    return Component;
  } // Here polyfill get started


  prototype.UNSAFE_componentWillReceiveProps = prototype.componentWillReceiveProps;
  delete prototype.componentWillReceiveProps;
  return Component;
};

/* harmony default export */ __webpack_exports__["default"] = (unsafeLifecyclesPolyfill);

/***/ }),

/***/ "../../node_modules/rc-util/lib/Dom/addEventListener.js":
/*!***********************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/rc-util/lib/Dom/addEventListener.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListenerWrap;

var _addDomEventListener = _interopRequireDefault(__webpack_require__(/*! add-dom-event-listener */ "../../node_modules/add-dom-event-listener/lib/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom["default"].unstable_batchedUpdates ? function run(e) {
    _reactDom["default"].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener["default"])(target, eventType, callback, option);
}

/***/ }),

/***/ "../../node_modules/react-aiot/src/style/theme-wordpress.scss":
/*!*****************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/react-aiot/src/style/theme-wordpress.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "../../node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/react-is/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/setimmediate/setImmediate.js":
/*!****************************************************************************!*\
  !*** /builds/devowlio/devowl-wp/node_modules/setimmediate/setImmediate.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/public/ts/components/AppTree.jsx":
/*!**********************************************!*\
  !*** ./src/public/ts/components/AppTree.jsx ***!
  \**********************************************/
/*! exports provided: latestQueriedFolder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latestQueriedFolder", function() { return latestQueriedFolder; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./src/public/ts/components/index.jsx");
/* harmony import */ var _others_renderOrderMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../others/renderOrderMenu */ "./src/public/ts/others/renderOrderMenu.jsx");
/* harmony import */ var _others_renderSortMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../others/renderSortMenu */ "./src/public/ts/others/renderSortMenu.jsx");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var _util_dragdrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/dragdrop */ "./src/public/ts/util/dragdrop.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _others_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../others/filter */ "./src/public/ts/others/filter.jsx");
/* harmony import */ var _hooks_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/permissions */ "./src/public/ts/hooks/permissions.jsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx-react */ "../../node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _hooks_sortable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/sortable */ "./src/public/ts/hooks/sortable.jsx");
/* harmony import */ var _components_MetaBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MetaBox */ "./src/public/ts/components/MetaBox.jsx");
/* harmony import */ var _others_defaultFolder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../others/defaultFolder */ "./src/public/ts/others/defaultFolder.jsx");
/* harmony import */ var _components_ProFooter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/ProFooter */ "./src/public/ts/components/ProFooter.jsx");


var _dec, _class, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** @module AppTree */

















/**
 * The latest queried folder.
 *
 * @deprecated Do no longer use it, use rmlOpts.others.lastQueried instead
 * @type object
 */

var latestQueriedFolder = {
  node: null
};
react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].config({
  top: 50
});
/**
 * The application tree handler for Real Media Library.
 *
 * @param {string} id The HTML id (needed to localStorage support)
 * @param {object} [attachmentsBrowser] The attachments browser (for media grid view)
 * @param {boolean} [isModal=false] If true the given app tree is a modal dialog
 * @param {module:AppTree~AppTree~init} [init]
 * @see module:store.StoredAppTree
 * @see module:react-aiot~Tree
 * @extends React.Component
 */

var AppTree = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_12__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_12__["observer"])(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  _inherits(AppTree, _React$Component);

  var _super = _createSuper(AppTree);

  /**
   * Initialize properties and state for AIOTree component.
   * Also handles the responsiveness.
   */
  function AppTree(_props) {
    var _this;

    _classCallCheck(this, AppTree);

    _this = _super.call(this, _props); // Add respnsive handler for non-modal views

    _this.renderToolbarButtons = function (multi) {
      var availableToolbarButtons = multi ? _this.state.availableMultiToolbarButtons : _this.state.availableToolbarButtons,
          toolbarBackButton = _this.state.toolbarBackButton;
      var toolbar = {
        buttons: {},
        backButton: _this.resolveStateRefs(toolbarBackButton, "keysToolbar")
      };

      for (var i = 0; i < availableToolbarButtons.length; i++) {
        toolbar.buttons[availableToolbarButtons[i]] = _this.resolveStateRefs(_this.state[(multi ? "multiToolbar_" : "toolbar_") + availableToolbarButtons[i]], "keysToolbar");
      }

      return toolbar;
    };

    _this.renderCreatables = function () {
      var _this$state = _this.state,
          availableCreatables = _this$state.availableCreatables,
          creatableBackButton = _this$state.creatableBackButton,
          creatable = {
        buttons: {},
        backButton: _this.resolveStateRefs(creatableBackButton, "keysCreatable")
      };

      for (var i = 0; i < availableCreatables.length; i++) {
        creatable.buttons[availableCreatables[i]] = _this.resolveStateRefs(_this.state["creatable_" + availableCreatables[i]], "keysCreatable");
      }

      return creatable;
    };

    _this.doRef = function (ref) {
      return _this.ref = ref;
    };

    _this.handleCloseMultiToolbar = function (checkedNodes) {
      checkedNodes.forEach(function (n) {
        return n.toggleChecked(false, false);
      });
    };

    _this.handleCreatableClick = function (type, typeInt) {
      _this._lastHandleCreatableClickArgs = [type, typeInt]; // @see handleAddClose

      var createRoot = undefined,
          $create = undefined;

      if (type) {
        // Activate create
        var creatable = _this.state["creatable_" + type],
            newNode = {
          $rename: true,
          icon: _this.resolveStateRef(creatable.icon),
          iconActive: _this.resolveStateRef(creatable.iconActive),
          parent: +_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.rootId,
          typeInt: typeInt
        },
            selectedId = _this.getSelectedId();

        if (typeof selectedId !== "number" || [+_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.rootId, _others_defaultFolder__WEBPACK_IMPORTED_MODULE_15__["ID_NONE"]].indexOf(selectedId) > -1) {
          createRoot = newNode;
        } else {
          $create = newNode;
          newNode.parent = selectedId;
        }
      }

      _this.setState({
        isTreeLinkDisabled: !!type,
        isCreatableLinkCancel: !!type,
        isToolbarActive: !type,
        createRoot: createRoot
      });

      _this.updateTreeItemById(function (node) {
        node.$create = $create;
      });
    };

    _this.handleCheck = function (id) {
      _this.props.store.getTreeItemById(id).toggleChecked();
    };

    _this.handleSelect = function (id) {
      // Do nothing when sort mode is active
      if (_this.state.toolbarActiveButton === "sort") {
        return;
      }

      var select = _this.getTreeItemById(id, false),
          setter = function setter(_id, $busy) {
        latestQueriedFolder.node = select;
        latestQueriedFolder.node.setter(function (node) {
          node.$busy = $busy;
          node.selected = true;
        });
        _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.lastQueried = select.id;
        /**
         * The user is selecting a node in the app tree.
         *
         * @event module:util/hooks#tree/select
         * @param {int|string} id
         * @param {object} select The MST node
         * @param {object} attachmentsBrowser
         * @this module:AppTree~AppTree
         * @since 4.0.5
         */

        _util__WEBPACK_IMPORTED_MODULE_7__["hooks"].call("tree/select", [_id, select, _this.attachmentsBrowser], _assertThisInitialized(_this));
      };

      if (_this.attachmentsBrowser) {
        !id && _this.attachmentsBrowser.collection.props.set({
          ignore: +new Date()
        }); // Reload the view

        _this._handleBackboneFilterSelection(select.id);
      } else {
        var href = window.location.href;
        Object(_util__WEBPACK_IMPORTED_MODULE_7__["urlParam"])("orderby") === "rml" && (href = href.split("?")[0]);
        +Object(_util__WEBPACK_IMPORTED_MODULE_7__["urlParam"])("paged") > 1 && (href = Object(_util__WEBPACK_IMPORTED_MODULE_7__["addUrlParam"])(href, "paged", 1));
        select.properties && (select.contentCustomOrder === 1 || select.forceCustomOrder) && (href = Object(_hooks_sortable__WEBPACK_IMPORTED_MODULE_13__["orderUrl"])(href));
        window.location.href = Object(_util__WEBPACK_IMPORTED_MODULE_7__["addUrlParam"])(href, "rml_folder", select.id);
      }

      setter(select.id, !_this.attachmentsBrowser);
    };

    _this.handleResize = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          attachmentsBrowser = _assertThisInitialize.attachmentsBrowser;

      attachmentsBrowser && attachmentsBrowser.attachments.setColumns();
    };

    _this.handleOrderClick = function () {
      if (!_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.isPro && _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.showProHints) {
        _this.setState({
          showProFeature: "order-content"
        });
      } else {
        if (Object(_hooks_sortable__WEBPACK_IMPORTED_MODULE_13__["toggleSortable"])(_this.getTreeItemById(), true, _this.attachmentsBrowser)) {
          _this.setState({
            isMoveable: false,
            toolbarActiveButton: "order",
            toolbarBackButton: Object.assign(_this.state.toolbarBackButton, {
              label: "i18n.back"
            })
          });
        }
      }
    };

    _this.handleOrderCancel = function () {
      Object(_hooks_sortable__WEBPACK_IMPORTED_MODULE_13__["toggleSortable"])(_this.getTreeItemById(), false, _this.attachmentsBrowser);

      _this.setState({
        isMoveable: true,
        toolbarActiveButton: undefined,
        toolbarBackButton: Object.assign(_this.state.toolbarBackButton, {
          label: "i18n.cancel"
        })
      });
    };

    _this.handleRenameClick = function () {
      return _this._handleRenameNode("rename", true, true, true);
    };

    _this.handleRenameCancel = function () {
      return _this._handleRenameNode(undefined, false, false, undefined);
    };

    _this.handleRenameClose = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(save, inputValue, _ref) {
        var id, hide, node, _yield$node$setName, name;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;

                if (!(save && inputValue.length)) {
                  _context.next = 22;
                  break;
                }

                hide = react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("renameLoadingText", {
                  name: inputValue
                }));
                _context.prev = 3;
                node = _this.props.store.getTreeItemById(id);
                _context.next = 7;
                return node.setName(inputValue);

              case 7:
                _yield$node$setName = _context.sent;
                name = _yield$node$setName.name;

                /**
                 * Folder successfully renamed.
                 *
                 * @event module:util/hooks#folder/renamed
                 * @param {module:store/TreeNode~TreeNode} node The node
                 * @this module:AppTree~AppTree
                 * @since 4.0.7
                 */
                _util__WEBPACK_IMPORTED_MODULE_7__["hooks"].call("folder/renamed", [node], _assertThisInitialized(_this));
                react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].success(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("renameSuccess", {
                  name: name
                }));

                _this.handleRenameCancel();

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].error(_context.t0.responseJSON.message);

              case 17:
                _context.prev = 17;
                hide();
                return _context.finish(17);

              case 20:
                _context.next = 23;
                break;

              case 22:
                _this.handleRenameCancel();

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 14, 17, 20]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleAddClose = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(save, name, _ref3) {
        var parent, typeInt, i, iterate, hide, ctrlHolding, newObj, backboneFilter, lastSlugs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                parent = _ref3.parent, typeInt = _ref3.typeInt;

                if (!save) {
                  _context2.next = 29;
                  break;
                }

                if (false) {}

                // Iterate until 10 folders are found
                i = 0;

                iterate = function iterate(arr) {
                  i += arr.length;
                  arr.forEach(function (_ref5) {
                    var childNodes = _ref5.childNodes;
                    return iterate(childNodes);
                  });
                };

                iterate(_this.props.store.tree);

                if (!(i >= 7 + 4 - 1)) {
                  _context2.next = 9;
                  break;
                }

                _this.setState({
                  showProFeature: "limit"
                });

                return _context2.abrupt("return");

              case 9:
                _this.updateCreateNode(function (obj) {
                  obj.$busy = true;
                });

                hide = react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("addLoadingText", {
                  name: name
                })), ctrlHolding = jquery__WEBPACK_IMPORTED_MODULE_9___default()("body").hasClass("aiot-helper-ctrl");
                _context2.prev = 11;
                _context2.next = 14;
                return _this.props.store.persist(name, {
                  parent: parent,
                  typeInt: typeInt
                }, function () {
                  if (ctrlHolding) {
                    var _this2;

                    // Allow bulk insert while holding ctrl + enter
                    (_this2 = _this).handleCreatableClick.apply(_this2, _toConsumableArray(_this._lastHandleCreatableClickArgs));
                  } else {
                    _this.handleCreatableClick();
                  }
                });

              case 14:
                newObj = _context2.sent;
                react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].success(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("addSuccess", {
                  name: name
                })); // Modify all available attachments browsers filter

                jquery__WEBPACK_IMPORTED_MODULE_9___default()(_others_filter__WEBPACK_IMPORTED_MODULE_10__["FILTER_SELECTOR"]).each(function () {
                  backboneFilter = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).data("backboneView");

                  if (backboneFilter) {
                    lastSlugs = backboneFilter.lastSlugs;
                    lastSlugs.names.push("(NEW) " + name);
                    lastSlugs.slugs.push(newObj.id);
                    lastSlugs.types.push(typeInt);
                    backboneFilter.createFilters(lastSlugs);
                  }
                });
                !ctrlHolding && Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_8__["droppable"])(_assertThisInitialized(_this));
                _context2.next = 24;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](11);

                if (_context2.t0.responseJSON.code === "rest_rml_only_pro") {
                  _this.setState({
                    showProFeature: "limit"
                  });
                } else {
                  react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].error(_context2.t0.responseJSON.message);
                }

                _this.updateCreateNode(function (obj) {
                  obj.$busy = false;
                });

              case 24:
                _context2.prev = 24;
                hide();
                return _context2.finish(24);

              case 27:
                _context2.next = 30;
                break;

              case 29:
                _this.handleCreatableClick();

              case 30:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[11, 20, 24, 27]]);
      }));

      return function (_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.handleTrash = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
        var node,
            isMulti,
            hide,
            parentId,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                node = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : _this.getTreeItemById();
                isMulti = _args3.length > 2 ? _args3[2] : undefined;

                if (!node.childNodes.filter(function (node) {
                  return node.$visible;
                }).length) {
                  _context3.next = 5;
                  break;
                }

                react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].error(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("deleteFailedSub", {
                  name: node.title
                }));
                return _context3.abrupt("return", false);

              case 5:
                hide = react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("deleteLoadingText", {
                  name: node.title
                }));
                _context3.prev = 6;
                _context3.next = 9;
                return node.trash();

              case 9:
                !isMulti && react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].success(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("deleteSuccess", {
                  name: node.title
                }));
                /**
                 * A folder has been deleted.
                 *
                 * @event module:util/hooks#tree/select
                 * @param {module:store/TreeNode~TreeNode} node The node
                 * @param {object} attachmentsBrowser
                 * @this module:AppTree~AppTree
                 * @since 4.0.7
                 */

                _util__WEBPACK_IMPORTED_MODULE_7__["hooks"].call("folder/deleted", [node, _this.attachmentsBrowser], _assertThisInitialized(_this)); // Select parent

                if (!isMulti) {
                  parentId = Object(react_aiot__WEBPACK_IMPORTED_MODULE_6__["getTreeParentById"])(node.id, _this.props.store.tree);

                  _this.handleSelect(parentId === 0 ? +_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.rootId : parentId);
                }

                return _context3.abrupt("return", true);

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](6);
                react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].error(_context3.t0.responseJSON.message);
                return _context3.abrupt("return", false);

              case 19:
                _context3.prev = 19;
                hide();
                return _context3.finish(19);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[6, 15, 19, 22]]);
      }));

      return function (_x7) {
        return _ref6.apply(this, arguments);
      };
    }();

    _this.handleMultipleTrash = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var count, checkedNodes, _iterator, _step, nodes, _iterator2, _step2, node, result;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              count = 0;

              _this.setState({
                isTreeBusy: true
              });

              checkedNodes = Object(react_aiot__WEBPACK_IMPORTED_MODULE_6__["getRecursivelyCheckedNodes"])(_this.props.store.tree, true);

              _this.handleSelect(+_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.rootId);

              _iterator = _createForOfIteratorHelper(Object.values(checkedNodes).reverse());
              _context4.prev = 5;

              _iterator.s();

            case 7:
              if ((_step = _iterator.n()).done) {
                _context4.next = 33;
                break;
              }

              nodes = _step.value;
              _iterator2 = _createForOfIteratorHelper(nodes);
              _context4.prev = 10;

              _iterator2.s();

            case 12:
              if ((_step2 = _iterator2.n()).done) {
                _context4.next = 23;
                break;
              }

              node = _step2.value;
              count++;
              _context4.next = 17;
              return _this.handleTrash(null, node, true);

            case 17:
              result = _context4.sent;

              if (result) {
                _context4.next = 21;
                break;
              }

              _this.setState({
                isTreeBusy: false
              });

              return _context4.abrupt("return");

            case 21:
              _context4.next = 12;
              break;

            case 23:
              _context4.next = 28;
              break;

            case 25:
              _context4.prev = 25;
              _context4.t0 = _context4["catch"](10);

              _iterator2.e(_context4.t0);

            case 28:
              _context4.prev = 28;

              _iterator2.f();

              return _context4.finish(28);

            case 31:
              _context4.next = 7;
              break;

            case 33:
              _context4.next = 38;
              break;

            case 35:
              _context4.prev = 35;
              _context4.t1 = _context4["catch"](5);

              _iterator.e(_context4.t1);

            case 38:
              _context4.prev = 38;

              _iterator.f();

              return _context4.finish(38);

            case 41:
              react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].success(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("deleteMultipleSuccess", {
                count: count
              }));

              _this.setState({
                isTreeBusy: false
              });

            case 43:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[5, 35, 38, 41], [10, 25, 28, 31]]);
    }));
    _this.handleSortManual = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var _this3;

      var result,
          _args5 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (_this3 = _this).handleSort.apply(_this3, _args5);

            case 2:
              result = _context5.sent;
              result && _this.setState({
                rearrangeBoxId: false,
                isSortableBusy: false,
                isToolbarBusy: false
              });
              return _context5.abrupt("return", result);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    _this.handleSort = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(_ref9) {
        var _ref9$doFinally, doFinally, props, hide, toolbarActiveButton, parentFromId, parentToId, store;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _ref9$doFinally = _ref9.doFinally, doFinally = _ref9$doFinally === void 0 ? true : _ref9$doFinally, props = _objectWithoutProperties(_ref9, ["doFinally"]);

                _this.setState({
                  isSortableBusy: true,
                  isToolbarBusy: true
                });

                hide = react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("sortLoadingText")), toolbarActiveButton = _this.state.toolbarActiveButton, parentFromId = props.parentFromId, parentToId = props.parentToId, store = _this.props.store;
                _context6.prev = 3;
                _context6.next = 6;
                return store.handleSort(props);

              case 6:
                react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].success(Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("sortedSuccess"));

                if (parentFromId === parentToId) {
                  /**
                   * This action is called when a folder was relocated in the
                   * folder tree. That means the parent was not changed, only
                   * the order was changed.
                   *
                   * @event module:util/hooks#folder/relocated
                   * @param {object} props The move properties
                   * @this module:AppTree~AppTree
                   * @since 4.0.7
                   */
                  _util__WEBPACK_IMPORTED_MODULE_7__["hooks"].call("folder/relocated", [props], _assertThisInitialized(_this));
                } else {
                  /**
                   * This action is called when a folder was moved in the folder tree.
                   * That means the parent and order was changed.
                   *
                   * @event module:util/hooks#folder/moved
                   * @param {object} props The move properties
                   * @this module:AppTree~AppTree
                   * @since 4.0.7
                   */
                  _util__WEBPACK_IMPORTED_MODULE_7__["hooks"].call("folder/moved", [props], _assertThisInitialized(_this));
                }

                return _context6.abrupt("return", true);

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](3);
                react_aiot__WEBPACK_IMPORTED_MODULE_6__["message"].error(_context6.t0.responseJSON.message);
                return _context6.abrupt("return", false);

              case 15:
                _context6.prev = 15;
                hide();
                doFinally && _this._handleSortNode(toolbarActiveButton, false);
                return _context6.finish(15);

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[3, 11, 15, 19]]);
      }));

      return function (_x8) {
        return _ref10.apply(this, arguments);
      };
    }();

    _this.handleWindowResize = function () {
      var isMobile = _this._isMobile();

      _this.setState({
        isSticky: !isMobile,
        isStickyHeader: !isMobile,
        isResizable: !isMobile,
        isFullWidth: isMobile,
        style: isMobile ? {
          marginLeft: 10
        } : {}
      });
    };

    _this.handleReload = function () {
      _this.handleSelect();
    };

    _this.handleDismissLicenseNotice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return Object(_util__WEBPACK_IMPORTED_MODULE_7__["ajax"])("notice/license", {
                method: "DELETE"
              });

            case 2:
              window.location.reload();

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    _this.handleDismissImportTaxNotice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return Object(_util__WEBPACK_IMPORTED_MODULE_7__["ajax"])("notice/import", {
                method: "DELETE"
              });

            case 2:
              window.location.reload();

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    _this.onTreeNodeRender = function (createTreeNode, TreeNode, node) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_12__["Observer"], {
        key: node.id
      }, function () {
        return createTreeNode(node, {
          indeterminate: node.indeterminate
        });
      });
    };

    _this.onTreeNodeRenderIcon = function (icon) {
      return Object(_util__WEBPACK_IMPORTED_MODULE_7__["resolveIcon"])(icon);
    };

    _this._handleRenameNode = function (toolbarActiveButton, isCreatableLinkDisabled, isTreeLinkDisabled, nodeRename) {
      _this.setState({
        // Make other nodes editable / not editable
        isCreatableLinkDisabled: isCreatableLinkDisabled,
        isTreeLinkDisabled: isTreeLinkDisabled,
        toolbarActiveButton: toolbarActiveButton
      });

      _this.updateTreeItemById(function (node) {
        // Make selected node editable / not editable
        node.$rename = nodeRename;
      });
    };

    _this._isMobile = function () {
      return jquery__WEBPACK_IMPORTED_MODULE_9___default()(window).width() <= 700;
    };

    _this._handleSortNode = function (toolbarActiveButton, isBusy) {
      _this.setState({
        isCreatableLinkDisabled: !!toolbarActiveButton,
        toolbarActiveButton: toolbarActiveButton,
        isSortableDisabled: !toolbarActiveButton,
        toolbarBackButton: Object.assign(_this.state.toolbarBackButton, {
          label: "i18n." + (toolbarActiveButton ? "back" : "cancel")
        })
      });

      typeof isBusy === "boolean" && _this.setState({
        isSortableBusy: isBusy
      });
      typeof isBusy === "boolean" && _this.setState({
        isToolbarBusy: isBusy
      });
    };

    _this._handleDetails = function (action, status, response) {
      var metaBoxId = action ? action === "usersettings" ? action : _this.props.store.selectedId : false;

      _this.setState({
        metaBoxId: metaBoxId
      }); // When the metadata is saved successfully listen to the "reload" state and reload the current view.


      status === true && response && response.reload && _this.handleReload();
    };

    !_props.isModal && jquery__WEBPACK_IMPORTED_MODULE_9___default()(window).resize(_this.handleWindowResize);

    var _isMobile = _this._isMobile(); // State refs (see https://github.com/reactjs/redux/issues/1793) and #resolveStateRefs


    _this.stateRefs = {
      keysCreatable: "icon,iconActive,toolTipTitle,toolTipText,onClick,label".split(","),
      keysToolbar: "content,toolTipTitle,toolTipText,onClick,onCancel,onSave,modifier,label,save,menu".split(","),
      // Icons
      ICON_OBJ_FOLDER_CLOSED: _util__WEBPACK_IMPORTED_MODULE_7__["ICON_OBJ_FOLDER_CLOSED"],
      ICON_OBJ_FOLDER_OPEN: _util__WEBPACK_IMPORTED_MODULE_7__["ICON_OBJ_FOLDER_OPEN"],
      ICON_OBJ_FOLDER_COLLECTION: _util__WEBPACK_IMPORTED_MODULE_7__["ICON_OBJ_FOLDER_COLLECTION"],
      ICON_OBJ_FOLDER_GALLERY: _util__WEBPACK_IMPORTED_MODULE_7__["ICON_OBJ_FOLDER_GALLERY"],
      ICON_SETTINGS: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "setting"
      }),
      ICON_LOCKED: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "lock"
      }),
      ICON_ORDER: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["DashIcon"], {
        name: "move"
      }),
      ICON_RELOAD: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "reload"
      }),
      ICON_RENAME: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "edit"
      }),
      ICON_TRASH: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "delete"
      }),
      ICON_SORT: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["DashIcon"], {
        name: "sort"
      }),
      ICON_SAVE: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "save"
      }),
      ICON_ELLIPSIS: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: "ellipsis"
      }),
      // Creatable
      handleCreatableClickBackButton: function handleCreatableClickBackButton() {
        return _this.handleCreatableClick();
      },
      handleCreatableClickFolder: function handleCreatableClickFolder() {
        return _this.handleCreatableClick("folder", 0);
      },
      handleCreatableClickCollection: _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.isPro ? function () {
        return _this.handleCreatableClick("collection", 1);
      } : function () {
        return _this.setState({
          showProFeature: "collections"
        });
      },
      handleCreatableClickGallery: function handleCreatableClickGallery() {
        return _this.handleCreatableClick("gallery", 2);
      },
      // Toolbar buttons
      renderOrderMenu: _others_renderOrderMenu__WEBPACK_IMPORTED_MODULE_4__["default"].bind(_assertThisInitialized(_this)),
      renderSortMenu: _others_renderSortMenu__WEBPACK_IMPORTED_MODULE_5__["default"].bind(_assertThisInitialized(_this)),
      handleOrderClick: _this.handleOrderClick,
      handleOrderCancel: _this.handleOrderCancel,
      handleReload: _this.handleReload,
      handleRenameClick: _this.handleRenameClick,
      handleRenameCancel: _this.handleRenameCancel,
      handleTrashModifier: function handleTrashModifier(body) {
        var node = _this.getTreeItemById();

        return node ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Popconfirm"], {
          placement: "bottom",
          onConfirm: _this.handleTrash,
          title: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("deleteConfirm", {
            name: node.title
          }, "maxWidth"),
          okText: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("ok"),
          cancelText: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("cancel")
        }, body) : body;
      },
      handleMultipleTrashModifier: function handleMultipleTrashModifier(body) {
        var checkedNodes = Object(react_aiot__WEBPACK_IMPORTED_MODULE_6__["getRecursivelyCheckedNodes"])(_this.props.store.tree);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Popconfirm"], {
          placement: "bottom",
          onConfirm: _this.handleMultipleTrash,
          title: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("deleteMultipleConfirm", {
            count: checkedNodes.length
          }, "maxWidth"),
          okText: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("ok"),
          cancelText: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("cancel")
        }, body);
      },
      handleSortClick: function handleSortClick() {
        return _this._handleSortNode("sort");
      },
      handleSortCancel: function handleSortCancel() {
        return _this._handleSortNode();
      },
      handleDetailsClick: function handleDetailsClick() {
        return _this._handleDetails("details");
      },
      handleUserSettingsClick: function handleUserSettingsClick() {
        return _this._handleDetails("usersettings");
      }
    }; // Determine selected id and fetch tree

    var _selectedId = Object(_others_defaultFolder__WEBPACK_IMPORTED_MODULE_15__["getDefaultFolder"])();

    _this.attachmentsBrowser = _props.attachmentsBrowser;
    _this.state = {
      // Custom
      currentFolderRestrictions: [],
      isModal: _props.isModal,
      isMoveable: true,
      isWPAttachmentsSortMode: false,
      // See modal.js
      initialSelectedId: !_selectedId || _selectedId === "all" ? "all" : +_selectedId,
      metaBoxId: false,
      rearrangeBoxId: false,
      showProFeature: undefined,
      // Creatables
      availableCreatables: (_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.isPro || _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.showProHints ? "folder,collection,gallery" : "folder").split(","),
      selectedCreatableType: undefined,
      // The selected folder type
      creatable_folder: {
        icon: "ICON_OBJ_FOLDER_CLOSED",
        iconActive: "ICON_OBJ_FOLDER_OPEN",
        visibleInFolderType: [undefined, 0],
        cssClasses: "page-title-action add-new-h2",
        toolTipTitle: "i18n.creatable0ToolTipTitle",
        toolTipText: "i18n.creatable0ToolTipText",
        label: "+",
        onClick: "handleCreatableClickFolder"
      },
      creatable_collection: {
        icon: "ICON_OBJ_FOLDER_COLLECTION",
        visibleInFolderType: [undefined, 0, 1],
        cssClasses: "page-title-action add-new-h2",
        toolTipTitle: "i18n.creatable1ToolTipTitle",
        toolTipText: "i18n.creatable1ToolTipText",
        label: "+",
        onClick: "handleCreatableClickCollection"
      },
      creatable_gallery: {
        icon: "ICON_OBJ_FOLDER_GALLERY",
        visibleInFolderType: [1],
        visible: false,
        cssClasses: "page-title-action add-new-h2",
        toolTipTitle: "i18n.creatable2ToolTipTitle",
        toolTipText: "i18n.creatable2ToolTipText",
        label: "+",
        onClick: "handleCreatableClickGallery"
      },
      creatableBackButton: {
        cssClasses: "page-title-action add-new-h2",
        label: "i18n.cancel",
        onClick: "handleCreatableClickBackButton"
      },
      // Toolbar buttons
      availableToolbarButtons: (_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.isPro || _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.showProHints ? "locked,usersettings,order,reload,rename,trash,sort,details" : "locked,usersettings,reload,rename,trash,sort,details").split(","),
      toolbar_usersettings: {
        content: "ICON_SETTINGS",
        visible: !!+_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.userSettings,
        toolTipTitle: "i18n.userSettingsToolTipTitle",
        toolTipText: "i18n.userSettingsToolTipText",
        onClick: "handleUserSettingsClick"
      },
      toolbar_locked: {
        content: "ICON_LOCKED",
        visible: false,
        toolTipTitle: "i18n.lockedToolTipTitle",
        toolTipText: "" // Lazy

      },
      toolbar_order: {
        content: "ICON_ORDER",
        toolTipTitle: "i18n.orderToolTipTitle",
        toolTipText: "i18n.orderToolTipText",
        onClick: "handleOrderClick",
        onCancel: "handleOrderCancel",
        menu: "resolve.renderOrderMenu",
        toolTipPlacement: "topLeft",
        dropdownPlacement: "bottomLeft"
      },
      toolbar_reload: {
        content: "ICON_RELOAD",
        toolTipTitle: "i18n.refreshToolTipTitle",
        toolTipText: "i18n.refreshToolTipText",
        onClick: "handleReload"
      },
      toolbar_rename: {
        content: "ICON_RENAME",
        toolTipTitle: "i18n.renameToolTipTitle",
        toolTipText: "i18n.renameToolTipText",
        onClick: "handleRenameClick",
        onCancel: "handleRenameCancel",
        disabled: true
      },
      toolbar_trash: {
        content: "ICON_TRASH",
        toolTipTitle: "i18n.trashToolTipTitle",
        toolTipText: "i18n.trashToolTipText",
        modifier: "handleTrashModifier",
        disabled: true
      },
      toolbar_sort: {
        content: "ICON_SORT",
        toolTipTitle: "i18n.sortToolTipTitle",
        toolTipText: "i18n.sortToolTipText",
        onClick: "handleSortClick",
        onCancel: "handleSortCancel",
        menu: "resolve.renderSortMenu",
        toolTipPlacement: "topLeft",
        dropdownPlacement: "bottomLeft"
      },
      toolbar_details: {
        content: "ICON_ELLIPSIS",
        disabled: true,
        toolTipTitle: "i18n.detailsToolTipTitle",
        toolTipText: "i18n.detailsToolTipText",
        onClick: "handleDetailsClick"
      },
      toolbarBackButton: {
        label: "i18n.cancel",
        save: "i18n.save"
      },
      // Multitoolbar buttons
      availableMultiToolbarButtons: "trash".split(","),
      multiToolbar_trash: {
        content: "ICON_TRASH",
        toolTipTitle: "i18n.trashToolTipTitle",
        toolTipText: "i18n.trashMultipleToolTipText",
        modifier: "handleMultipleTrashModifier"
      },
      // AIO
      isResizable: !_isMobile,
      isSticky: !_isMobile,
      isStickyHeader: !_isMobile,
      isFullWidth: _isMobile,
      style: _isMobile ? {
        marginLeft: 10
      } : {},
      isSortable: true,
      isSortableDisabled: true,
      isTreeBusy: false,
      isBusyHeader: false,
      sortableDelay: 0,
      headerStickyAttr: {
        top: "#wpadminbar"
      },
      isCreatableLinkDisabled: false,
      toolbarActiveButton: undefined,
      isTreeLinkDisabled: false,
      onResizeOpposite: Object(_util__WEBPACK_IMPORTED_MODULE_7__["isMaterialWp"])() && _util__WEBPACK_IMPORTED_MODULE_7__["materialWpResizeOpposite"]
    }; // What happens if the attachments browser is available? We will add a reference to this React element

    _this.attachmentsBrowser && (_this.attachmentsBrowser.controller.$RmlAppTree = _assertThisInitialized(_this));
    /**
     * Called on initialzation and allows you to modify the init state.
     *
     * @callback module:AppTree~AppTree~init
     * @param {object} state The default state
     * @param {AppTree} tree The AppTree component instance
     * @returns {object} The new state
     */

    _props.init && (_this.state = _props.init(_this.state, _assertThisInitialized(_this)));
    /**
     * The React AppTree instance gets constructed and you can modify it here.
     *
     * @event module:util/hooks#tree/init
     * @param {object} state
     * @param {object} props
     * @this module:AppTree~AppTree
     */

    _util__WEBPACK_IMPORTED_MODULE_7__["hooks"].call("tree/init", [_this.state, _props], _assertThisInitialized(_this));
    _this.initialSelectedId = _this.state.initialSelectedId;
    return _this;
  }
  /**
   * Render AIO tree with tax switcher.
   */


  _createClass(AppTree, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      //{ metaBoxId !== false && (<MetaBox treeInstance={ this } patcher={ patcher => (this.metaboxPatcher = patcher) }
      // busy={ isBusyHeader } errors={ metaBoxErrors } id={ metaBoxId } />) }
      var _this$props$store = this.props.store,
          staticTree = _this$props$store.staticTree,
          tree = _this$props$store.tree,
          methodNotAllowed405Endpoint = _this$props$store.methodNotAllowed405Endpoint,
          methodMoved301Endpoint = _this$props$store.methodMoved301Endpoint,
          _this$state2 = this.state,
          metaBoxId = _this$state2.metaBoxId,
          rearrangeBoxId = _this$state2.rearrangeBoxId,
          showProFeature = _this$state2.showProFeature;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
        ref: this.doRef,
        id: this.props.id,
        rootId: +_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.rootId,
        staticTree: staticTree,
        tree: tree.length > 0 ? tree : [],
        opposite: document.getElementById("wpbody-content"),
        onSelect: this.handleSelect,
        onCloseMultiToolbar: this.handleCloseMultiToolbar,
        onRenameClose: this.handleRenameClose,
        onAddClose: this.handleAddClose,
        onCheck: this.handleCheck,
        onNodeExpand: function onNodeExpand() {
          return setTimeout(function () {
            return Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_8__["droppable"])(_this4);
          }, 200);
        },
        renderItem: this.onTreeNodeRender,
        renderIcon: this.onTreeNodeRenderIcon,
        onNodePressF2: this.handleRenameClick,
        onSort: this.handleSort,
        onResize: this.handleResize,
        headline: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            paddingRight: 5
          }
        }, Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("folders")),
        renameSaveText: this.stateRefs.ICON_SAVE,
        renameAddText: this.stateRefs.ICON_SAVE,
        noFoldersTitle: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("noFoldersTitle"),
        noFoldersDescription: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("noFoldersDescription"),
        noSearchResult: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("noSearchResult"),
        innerClassName: "wrap",
        theme: "wordpress",
        creatable: this.renderCreatables(),
        toolbar: this.renderToolbarButtons(),
        multiToolbar: this.renderToolbarButtons(true),
        forceSortableFallback: true,
        allowMultiSelect: true
      }, this.state), !!methodNotAllowed405Endpoint.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("methodNotAllowed405", {
          endpoint: methodNotAllowed405Endpoint
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "https://airbrake.io/blog/http-errors/405-method-not-allowed",
          target: "_blank"
        }, Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("methodNotAllowed405LinkText"))),
        type: "error",
        showIcon: true,
        style: {
          marginBottom: "10px"
        }
      }), _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.showTaxImportNotice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.lang.sidebarDetectedTax, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.taxImportNoticeLink
        }, _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.lang.sidebarDetectedTaxImport), " ", "\xB7", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          onClick: this.handleDismissImportTaxNotice
        }, _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.lang.sidebarDetectedTaxDismiss)),
        type: "info",
        style: {
          marginBottom: "10px"
        }
      }), _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.showLicenseNotice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.lang.noProductLicense, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.pluginsUrl
        }, _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.lang.enterLicense), " \xB7", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#",
          onClick: this.handleDismissLicenseNotice
        }, _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.lang.licenseNoticeDismiss)),
        type: "info",
        style: {
          marginBottom: "10px"
        }
      }), !_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.isPro && _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.showProHints && _util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.showLiteNotice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProFooter__WEBPACK_IMPORTED_MODULE_16__["ProFooter"], {
        dismissible: true
      }), methodMoved301Endpoint && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("methodMoved301")),
        type: "error",
        showIcon: true,
        style: {
          marginBottom: "10px"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MetaBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: metaBoxId,
        onClose: function onClose(status, response) {
          return _this4._handleDetails(undefined, status, response);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_others_renderSortMenu__WEBPACK_IMPORTED_MODULE_5__["RearrangeBox"], {
        id: rearrangeBoxId,
        onClose: function onClose() {
          return _this4.setState({
            rearrangeBoxId: undefined
          });
        },
        onSort: this.handleSortManual
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProFooter__WEBPACK_IMPORTED_MODULE_16__["ProBox"], {
        feature: showProFeature,
        onClose: function onClose() {
          return _this4.setState({
            showProFeature: undefined
          });
        }
      }));
    }
    /**
     * @returns {object}
     */

  }, {
    key: "resolveStateRefs",

    /**
     * Iterates all available values in an object and resolve it with the available
     * this::stateRefs.
     *
     * @returns {object}
     */
    value: function resolveStateRefs(_obj, keys) {
      var obj = Object.assign({}, _obj);
      var value, newValue;

      for (var key in obj) {
        if ( // eslint-disable-next-line no-prototype-builtins
        obj.hasOwnProperty(key) && (value = obj[key]) && this.stateRefs[keys].indexOf(key) > -1 && typeof value === "string" && (newValue = this.resolveStateRef(value))) {
          obj[key] = newValue;
        }
      }

      return obj;
    }
    /**
     * Resolve single state ref key.
     *
     * @returns {object}
     */

  }, {
    key: "resolveStateRef",
    value: function resolveStateRef(key) {
      if (typeof key !== "string") {
        return;
      }

      if (key.indexOf("i18n.") === 0) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])(key.substr(5));
      } else if (key.indexOf("resolve.") === 0) {
        return this.stateRefs[key.substr(8)]();
      } else if (this.stateRefs[key]) {
        return this.stateRefs[key];
      }
    }
  }, {
    key: "componentWillUnmount",

    /**
     * Remove resize handler.
     */
    value: function componentWillUnmount() {
      jquery__WEBPACK_IMPORTED_MODULE_9___default()(window).off("resize", this.handleWindowResize);
      /**
       * The React AppTree instance gets unmounted.
       *
       * @event module:util/hooks#tree/destroy
       * @param {object} state
       * @param {object} props
       * @this module:AppTree~AppTree
       */

      _util__WEBPACK_IMPORTED_MODULE_7__["hooks"].call("tree/destroy", [this.state, this.props], this);
    }
    /**
     * Initiate draggable and droppable
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // Fetch initial tree
      this.fetchTree(this.initialSelectedId);
      Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_8__["draggable"])(this);
      Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_8__["droppable"])(this);
      this.handleResize(); // If order should be enabled in list mode, then activate it now

      if (_util__WEBPACK_IMPORTED_MODULE_7__["rmlOpts"].others.listMode === "list" && window.location.hash === "#order") {
        this.handleOrderClick();
        window.location.hash = "";
      }
    }
    /**
     * When the component updates the droppable zone is reinitialized.
     * Also the toolbar buttons gets disabled or enabled depending on selected node.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var selectedCreatableType = this.state.selectedCreatableType,
          selected = this.getTreeItemById();

      if (selected && selectedCreatableType !== selected.properties.type || !selected && selectedCreatableType !== undefined) {
        this._updateCreatableButtons(selected ? selected.properties.type : undefined);
      } // Enable / Disable toolbar buttons


      this._updateToolbarButtons(); // Enable locked toolbar item


      Object(_hooks_permissions__WEBPACK_IMPORTED_MODULE_11__["default"])(this);
      Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_8__["draggable"])(this);
      Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_8__["droppable"])(this);
    }
    /**
     * Return the backbone filter view for the given attachments browser.
     *
     * @returns object
     */

  }, {
    key: "getBackboneFilter",
    value: function getBackboneFilter() {
      var attachmentsBrowser = this.attachmentsBrowser;
      return attachmentsBrowser && attachmentsBrowser.toolbar.get("rml_folder");
    }
    /**
     * Get the selected node id.
     *
     * @returns {string|int}
     */

  }, {
    key: "getSelectedId",
    value: function getSelectedId() {
      return this.props.store.selectedId;
    }
    /**
     * Get tree item by id.
     *
     * @param {string|int} [id=Current]
     * @param {boolean} [excludeStatic=true]
     * @returns {object} Tree node
     */

  }, {
    key: "getTreeItemById",
    value: function getTreeItemById() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelectedId();
      var excludeStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return this.props.store.getTreeItemById(id, excludeStatic);
    }
    /**
     * Update a tree item by id.
     *
     * @param {function|array} callback The callback with one argument (node draft) and should return the new node.
     * @param {string|int} [id=Current] The id which should be updated
     * @param {boolean} [setHash] If true the hash node is changed so a rerender is forced
     */

  }, {
    key: "updateTreeItemById",
    value: function updateTreeItemById(callback) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getSelectedId();
      var setHash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var node = this.props.store.getTreeItemById(id);
      node && node.setter(callback, setHash);
    }
    /**
     * Updates the create node. That's the node without id and the input field.
     *
     * @param {object} modifier The modifier object which is passed through Object.assign
     */

  }, {
    key: "updateCreateNode",
    value: function () {
      var _updateCreateNode = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(modifier) {
        var createRoot, node;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                // Root update
                createRoot = this.state.createRoot;
                createRoot && this.setState({
                  createRoot: react_aiot__WEBPACK_IMPORTED_MODULE_6__["immer"].produce(createRoot, modifier)
                }); // Child node update

                node = this.getTreeItemById();
                node && node.$create && this.updateTreeItemById(function (node) {
                  var obj = _objectSpread({}, node.$create);

                  modifier(obj);
                  node.$create = obj;
                }, undefined, true);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function updateCreateNode(_x9) {
        return _updateCreateNode.apply(this, arguments);
      }

      return updateCreateNode;
    }()
    /**
     * Disable the checked property for all checked nodes.
     *
     * @method
     */

  }, {
    key: "handleDestroy",
    value: function handleDestroy() {
      this.ref && react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(this.ref.container.parentNode);
    }
    /**
     * Dismiss the license notice for a given time (transient).
     *
     * @method
     */

  }, {
    key: "_handleBackboneFilterSelection",

    /**
     * Set the attachments browser location.
     *
     * @param {int} [id=Current selected id] The id
     */
    value: function _handleBackboneFilterSelection() {
      var _this5 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelectedId();
      var attachmentsBrowser = this.attachmentsBrowser;

      if (attachmentsBrowser && id !== _others_defaultFolder__WEBPACK_IMPORTED_MODULE_15__["ID_NONE"]) {
        setTimeout(function () {
          var backboneFilter = _this5.getBackboneFilter();

          backboneFilter && backboneFilter.$el.val(id).change(); // Reset bulk select in no-modal mode

          attachmentsBrowser.$el.parents(".media-modal").length === 0 && attachmentsBrowser.controller.state().get("selection").reset(); // Check if folder needs refresh

          var store = _this5.props.store;

          if (store.foldersNeedsRefresh.indexOf(id) > -1) {
            store.removeFoldersNeedsRefresh(id);

            _this5.handleReload();
          }
        }, 0);
      }
    }
    /**
     * Update the creatable buttons regarding the selected type.
     *
     * @param {int} selectedCreatableType
     */

  }, {
    key: "_updateCreatableButtons",
    value: function _updateCreatableButtons(selectedCreatableType) {
      var _this6 = this;

      this.setState({
        selectedCreatableType: selectedCreatableType
      });
      this.state.availableCreatables.forEach(function (c) {
        return _this6.setState(_defineProperty({}, "creatable_" + c, Object.assign(_this6.state["creatable_" + c], {
          visible: _this6.state["creatable_" + c].visibleInFolderType.indexOf(selectedCreatableType) > -1
        })));
      });
    }
  }, {
    key: "_updateToolbarButtons",
    value: function _updateToolbarButtons() {
      var _this$state3 = this.state,
          isWPAttachmentsSortMode = _this$state3.isWPAttachmentsSortMode,
          toolbar_order = _this$state3.toolbar_order,
          toolbar_rename = _this$state3.toolbar_rename,
          toolbar_trash = _this$state3.toolbar_trash,
          toolbar_details = _this$state3.toolbar_details,
          selected = this.getTreeItemById(),
          disableIfStatic = !selected,
          restrictions = selected && selected.properties && selected.properties.restrictions || [];
      var disableOrder = disableIfStatic || isWPAttachmentsSortMode || selected && selected.contentCustomOrder === 2 || selected && selected.orderAutomatically;
      toolbar_order.disabled !== disableOrder && this.setState({
        toolbar_order: Object.assign(toolbar_order, {
          disabled: disableOrder
        })
      });
      var disableRename = disableIfStatic || restrictions.indexOf("ren") > -1;
      toolbar_rename.disabled !== disableRename && this.setState({
        toolbar_rename: Object.assign(toolbar_rename, {
          disabled: disableRename
        })
      });
      var disableTrash = disableIfStatic || restrictions.indexOf("del") > -1;
      toolbar_trash.disabled !== disableTrash && this.setState({
        toolbar_trash: Object.assign(toolbar_trash, {
          disabled: disableTrash
        })
      });
      toolbar_details.disabled !== disableIfStatic && this.setState({
        toolbar_details: Object.assign(toolbar_details, {
          disabled: disableIfStatic
        })
      });
    }
    /**
     * Fetch folder tree.
     */

  }, {
    key: "fetchTree",
    value: function () {
      var _fetchTree = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(setSelectedId) {
        var _yield$this$props$sto, slugs;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.setState({
                  isTreeBusy: true
                });
                _context10.prev = 1;
                _context10.next = 4;
                return this.props.store.fetchTree(setSelectedId);

              case 4:
                _yield$this$props$sto = _context10.sent;
                slugs = _yield$this$props$sto.slugs;
                // Modify all available attachments browsers filter
                jquery__WEBPACK_IMPORTED_MODULE_9___default()(_others_filter__WEBPACK_IMPORTED_MODULE_10__["FILTER_SELECTOR"]).each(function () {
                  var backboneFilter = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).data("backboneView");
                  backboneFilter && backboneFilter.createFilters(slugs);
                });

                this._handleBackboneFilterSelection();

                latestQueriedFolder.node = this.props.store.selected;
                _context10.next = 14;
                break;

              case 11:
                _context10.prev = 11;
                _context10.t0 = _context10["catch"](1);
                console.log(_context10.t0);

              case 14:
                // Modify this tree
                this.setState({
                  isTreeBusy: false
                });

              case 15:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 11]]);
      }));

      function fetchTree(_x10) {
        return _fetchTree.apply(this, arguments);
      }

      return fetchTree;
    }()
    /**
     * Update the folder count. If you pass no argument the folder count is
     * requested from server.
     *
     * @param {object} counts Key value map of folder and count
     */

  }, {
    key: "fetchCounts",
    value: function () {
      var _fetchCounts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(counts) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.props.store.fetchCounts(counts);

              case 2:
                return _context11.abrupt("return", _context11.sent);

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function fetchCounts(_x11) {
        return _fetchCounts.apply(this, arguments);
      }

      return fetchCounts;
    }()
  }]);

  return AppTree;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (AppTree);

/***/ }),

/***/ "./src/public/ts/components/Breadcrumb.jsx":
/*!*************************************************!*\
  !*** ./src/public/ts/components/Breadcrumb.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/** @module components/Breadcrumb */


var ICON_OBJ_SEP = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
  type: "right"
});
/**
 * Simple breadcrumbs with arrows and a home icon.
 *
 * @property {string[]} path The pathes
 * @type React.Element
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var path = _ref.path,
      _ref$closeable = _ref.closeable,
      closeable = _ref$closeable === void 0 ? false : _ref$closeable,
      onClose = _ref.onClose;
  var i = 0; // Use counter as key

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
    type: "home"
  }), "\xA0\xA0", path.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: i++
    }, item, "\xA0", i < path.length && ICON_OBJ_SEP, "\xA0");
  }), !!closeable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
    type: "close",
    onClick: onClose
  }));
});

/***/ }),

/***/ "./src/public/ts/components/FolderBox.jsx":
/*!************************************************!*\
  !*** ./src/public/ts/components/FolderBox.jsx ***!
  \************************************************/
/*! exports provided: FolderBoxHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderBoxHeader", function() { return FolderBoxHeader; });
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/** @module components/FolderBox */



function FolderBoxHeader(_ref) {
  var icon = _ref.icon,
      folder = _ref.folder;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, icon, " ", Object(_util__WEBPACK_IMPORTED_MODULE_1__["resolveIcon"])(folder.icon), " ", folder.title);
}
/**
 * A component showing a container for a folder option. For example the metabox
 * or manual placement for nodes (rearrange).
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var busy = _ref2.busy,
      icon = _ref2.icon,
      folder = _ref2.folder,
      _ref2$errors = _ref2.errors,
      errors = _ref2$errors === void 0 ? [] : _ref2$errors,
      _ref2$header = _ref2.header,
      header = _ref2$header === void 0 ? true : _ref2$header,
      children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_0__["Spin"], {
    spinning: busy === undefined ? false : busy,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "rml-postbox"
  }, header && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FolderBoxHeader, {
    icon: icon,
    folder: folder
  })), errors.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    style: {
      marginTop: 0
    }
  }, errors.map(function (e, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: i
    }, e);
  })), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "inside"
  }, children), folder.id > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      "float": "right",
      paddingBottom: "5px",
      fontSize: "10px",
      opacity: 0.5
    }
  }, "ID #", folder.id)));
});

/***/ }),

/***/ "./src/public/ts/components/FolderSelector.jsx":
/*!*****************************************************!*\
  !*** ./src/public/ts/components/FolderSelector.jsx ***!
  \*****************************************************/
/*! exports provided: FolderSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderSelector", function() { return FolderSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFolderSelector; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "../../node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./src/public/ts/components/index.jsx");
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Breadcrumb */ "./src/public/ts/components/Breadcrumb.jsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./src/public/ts/store/index.jsx");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);


var _dec, _class, _class2, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** @module components/FolderSelector */











var FolderSelector = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["inject"])("tree"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(_class = (_temp = _class2 = /*#__PURE__*/function (_React$Component) {
  _inherits(FolderSelector, _React$Component);

  var _super = _createSuper(FolderSelector);

  function FolderSelector(_ref) {
    var _this;

    var input = _ref.input,
        disabled = _ref.disabled,
        selected = _ref.selected;

    _classCallCheck(this, FolderSelector);

    _this = _super.apply(this, arguments);

    _this.getInputValue = function () {
      var val = _this.inputObject.value;
      return val === "" ? val : +val;
    };

    _this.getMainStore = function () {
      return (
        /* global rml */
        rml.store.tree.length && rml.store
      );
    };

    _this.onTreeNodeRender = function (createTreeNode, TreeNode, node) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_3__["Observer"], {
        key: node.id
      }, function () {
        return createTreeNode(node);
      });
    };

    _this.onTreeNodeRenderIcon = function (icon) {
      return Object(_util__WEBPACK_IMPORTED_MODULE_7__["resolveIcon"])(icon);
    };

    _this.handleSelect = function (id) {
      var item;

      var previousValue = _this.getInputValue();

      if (id === "") {
        // nullable
        item = _this.props.tree.selected;
        item && item.setter(function (node) {
          return node.selected = false;
        });
        item = null;
      } else {
        item = _this.props.tree.getTreeItemById(id, false);

        if (!item) {
          return _this.handleSelect(+rmlopts__WEBPACK_IMPORTED_MODULE_9___default.a.others.rootId);
        } else {
          item.setter(function (node) {
            return node.selected = true;
          });
        }
      }

      _this.inputObject.value = id;
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(_this.inputObject).data("node", item).trigger("folderSelected");

      _this.setState({
        visible: false
      });

      previousValue !== id && _this.props.onSelect && _this.props.onSelect(item, _this.inputObject);
      return item;
    };

    _this.handleVisibleChange = function () {
      var visible = !_this.state.visible;

      if (_this._nullableNextVisibleChange) {
        visible = false;
      }

      _this.setState({
        visible: visible
      });

      _this._nullableNextVisibleChange = false;
    };

    _this.handleSelectNull = function () {
      _this._nullableNextVisibleChange = true;

      _this.handleSelect("");
    };

    _this.inputObject = input || document.createElement("input"); // Initial selection

    selected !== undefined && (_this.inputObject.value = selected);
    _this.state = {
      isTreeBusy: false,
      visible: false,
      disabled: (disabled ? ("" + disabled).split(",") : []).map(function (i) {
        return +i;
      })
    };
    return _this;
  }
  /**
   * Set the selected id to the input field so it can be updated through the properties.
   */


  _createClass(FolderSelector, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          input = _this$props.input,
          selected = _this$props.selected;

      if (!input && selected !== prevProps.selected) {
        this.handleSelect(prevProps.selected);
      }
    }
    /**
     * Initially set the value of the input field and breadcrumb path.
     *
     * @internal
     */

  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var val, tree, mainStore, disabled, fnDisabled, item;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                val = this.getInputValue(), tree = this.props.tree;

                if (!this.props.nullable && (!val || val < 0)) {
                  this.inputObject.value = -1;
                }

                this.setState({
                  isTreeBusy: true
                });

                if (!this.props.fetch) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 4;
                // Check if global rml store holds already a tree
                mainStore = this.getMainStore();

                if (!mainStore) {
                  _context.next = 10;
                  break;
                }

                tree.setTree(mainStore.getTreeSnapshot());
                _context.next = 12;
                break;

              case 10:
                _context.next = 12;
                return tree.fetchTree();

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);
                console.log(_context.t0);

              case 17:
                // Disable nodes
                disabled = this.state.disabled;

                if (disabled.length) {
                  fnDisabled = function fnDisabled(node) {
                    if (disabled.indexOf(node.properties && +node.properties.type) > -1) {
                      node.setter(function (n) {
                        return n.className = "rml-deactivated";
                      });
                    }
                  };

                  tree.nodes(fnDisabled);
                  tree.nodes(fnDisabled, true);
                } // Modify this tree


                this.setState({
                  isTreeBusy: false
                }); // Preselect

                item = this.handleSelect(val);
                this.props.onNodeInit && this.props.onNodeInit(item, this.inputObject);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 14]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isTreeBusy = _this$state.isTreeBusy,
          visible = _this$state.visible,
          _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style,
          editable = _this$props2.editable,
          title = _this$props2.title,
          nullable = _this$props2.nullable,
          _this$props2$tree = _this$props2.tree,
          breadcrumb = _this$props2$tree.breadcrumb,
          selected = _this$props2$tree.selected,
          staticTree = _this$props2$tree.staticTree,
          tree = _this$props2$tree.tree,
          ignoreChildNodes = _this$props2.ignoreChildNodes;
      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["Modal"], {
        key: "modal",
        visible: visible && editable,
        wrapClassName: "rml-folder-selector",
        okText: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("ok"),
        cancelText: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("cancel"),
        title: title,
        onCancel: this.handleVisibleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
        rootId: +rmlopts__WEBPACK_IMPORTED_MODULE_9___default.a.others.rootId,
        staticTree: staticTree,
        tree: tree.length > 0 ? tree : [],
        isResizable: false,
        isFullWidth: true,
        creatable: {
          buttons: {}
        },
        toolbar: {
          buttons: {}
        },
        onSelect: this.handleSelect,
        renderItem: this.onTreeNodeRender,
        renderIcon: this.onTreeNodeRenderIcon,
        headline: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            paddingRight: 5
          }
        }, Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("folders")),
        noFoldersTitle: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("noFoldersTitle"),
        ignoreChildNodes: ignoreChildNodes,
        noFoldersDescription: "",
        noSearchResult: Object(_util__WEBPACK_IMPORTED_MODULE_7__["i18n"])("noSearchResult"),
        theme: "wordpress",
        autoFocusSearchInput: true
      }, this.state))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: "breadcrumb",
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("rml-folder-edit", className, {
          "rml-deactivated": !editable
        }),
        style: style,
        onClick: this.handleVisibleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_4__["Spin"], {
        spinning: isTreeBusy
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["default"], {
        path: breadcrumb,
        closeable: selected && editable && nullable,
        onClose: this.handleSelectNull
      })))];
    }
  }]);

  return FolderSelector;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _class2.defaultProps = {
  fetch: true,
  // Set to false if you want to set the selectable tree by yourself (store)
  nullable: false,
  editable: true,
  onSelect: undefined,
  onNodeInit: undefined,
  ignoreChildNodes: false,
  title: undefined,
  selected: undefined,
  // Use this only without input
  input: undefined,
  // Input is optional, use selected for initial selected id
  disabled: "" // comma seperated list of types which are disabled

}, _temp)) || _class) || _class);

/**
 * Create the folder selector in a given target.
 *
 * @param {HTMLElement} target
 * @param {HTMLElement} input An input where the selected id is stored (usually input[type="hidden"])
 * @param {object} props The properties for FolderSelector control
 * @returns {object} The created store
 */

function createFolderSelector(target, input, props) {
  var store = _store__WEBPACK_IMPORTED_MODULE_8__["BasicStore"].create({
    staticTree: [Object(_store__WEBPACK_IMPORTED_MODULE_8__["createUnorganizedNode"])()]
  });
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    tree: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FolderSelector, _extends({
    input: input
  }, props))), target);
  return store;
}

/***/ }),

/***/ "./src/public/ts/components/MetaBox.jsx":
/*!**********************************************!*\
  !*** ./src/public/ts/components/MetaBox.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "../../node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var _FolderBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FolderBox */ "./src/public/ts/components/FolderBox.jsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! . */ "./src/public/ts/components/index.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./src/public/ts/store/index.jsx");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__);


var _dec, _class, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** @module components/MetaBox */









/**
 * Show a meta box for the selected folder id. It also supports
 * user settings.
 *
 * @property {string|int} id The id of the folder or 'usersettings'
 * @extends React.Component
 */

var MetaBox = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  _inherits(MetaBox, _React$Component);

  var _super = _createSuper(MetaBox);

  function MetaBox(props) {
    var _this;

    _classCallCheck(this, MetaBox);

    _this = _super.call(this, props);

    _this.handleRef = function (ref) {
      _this.refSpan = ref;
      /**
       * The MetaBox ref element is ready and created.
       *
       * @event module:util/hooks#folder/meta
       * @param {HTMLElement} ref The reference
       * @param {string|id} id The folder id or 'usersettings'
       * @param {module:store~Store} store The store
       * @this MetaBox instance
       */

      _util__WEBPACK_IMPORTED_MODULE_5__["hooks"].call("folder/meta", [ref, _this.state.id, _this.props.store], _assertThisInitialized(_this));
    };

    _this.handleSave = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var form, serialize, data, url, response, message;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              form = jquery__WEBPACK_IMPORTED_MODULE_2___default()(_this.refSpan).children("form"), serialize = form.serializeArray(), data = {};
              jquery__WEBPACK_IMPORTED_MODULE_2___default.a.each(serialize, function (key, value) {
                return data[value.name] = value.value;
              });
              /**
               * The MetaBox is serialized and ready to send.
               *
               * @event module:util/hooks#folder/meta/serialize
               * @param {string|id} id The folder id or 'usersettings'
               * @param {module:store~Store} store The store
               * @param {object} data The data prepared for the server so you can perhaps modify it
               * @param {HTMLElement} form The form container
               * @this MetaBox instance
               */

              _util__WEBPACK_IMPORTED_MODULE_5__["hooks"].call("folder/meta/serialize", [_this.state.id, _this.props.store, data, form], _assertThisInitialized(_this));
              url = _this.state.id === "usersettings" ? "usersettings" : "folders/" + _this.state.id + "/meta";

              _this.setState({
                loading: true,
                errors: []
              });

              _context.prev = 5;
              _context.next = 8;
              return Object(_util__WEBPACK_IMPORTED_MODULE_5__["ajax"])(url, {
                method: "PUT",
                data: data
              });

            case 8:
              response = _context.sent;

              /**
               * The MetaBox is saved successfully.
               *
               * @event module:util/hooks#folder/meta/saved
               * @param {string|id} id The folder id or 'usersettings'
               * @param {object} response The server response
               * @param {object} data The data sent to the server
               * @this MetaBox instance
               */
              _util__WEBPACK_IMPORTED_MODULE_5__["hooks"].call("folder/meta/saved", [_this.state.id, response, data], _assertThisInitialized(_this));

              _this.props.onClose(true, response);

              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);
              message = _context.t0.responseJSON.message;

              _this.setState({
                errors: message
              });

            case 17:
              _context.prev = 17;

              _this.setState({
                loading: false
              });

              return _context.finish(17);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 13, 17, 20]]);
    }));
    _this.state = {
      id: 0,
      // The current visible id
      html: "",
      // The html
      loading: false,
      errors: []
    };
    return _this;
  }

  _createClass(MetaBox, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var id = this.props.id;

      if (id !== this.state.id) {
        this.setState({
          id: id,
          html: ""
        });

        if (id !== false) {
          var url = id === "usersettings" ? "usersettings" : "folders/" + id + "/meta";
          Object(_util__WEBPACK_IMPORTED_MODULE_5__["ajax"])(url).then(function (_ref3) {
            var html = _ref3.html;

            _this2.setState({
              html: html
            });
          }, function () {
            // An error occured
            _this2.setState({
              html: ""
            });
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var selected, modalContent, title;

      if (this.props.id === "usersettings") {
        selected = {
          icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            type: "setting"
          }),
          title: _util__WEBPACK_IMPORTED_MODULE_5__["rmlOpts"].others.lang.userSettingsToolTipTitle
        };
      } else {
        selected = this.props.store.getTreeItemById(this.props.id, false);
      }

      var _this$state = this.state,
          html = _this$state.html,
          loading = _this$state.loading,
          errors = _this$state.errors;

      if (selected) {
        title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FolderBox__WEBPACK_IMPORTED_MODULE_6__["FolderBoxHeader"], {
          icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
            type: "ellipsis"
          }),
          folder: selected
        });
        modalContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FolderBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          busy: !html || loading,
          folder: selected,
          errors: errors,
          header: false
        }, html && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "inside"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: html
          },
          style: {
            display: html ? "block" : "none"
          },
          ref: this.handleRef
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__["Modal"], {
        visible: !!modalContent,
        title: title,
        onOk: this.handleSave,
        onCancel: this.props.onClose,
        cancelText: Object(_util__WEBPACK_IMPORTED_MODULE_5__["i18n"])("cancel"),
        okText: Object(_util__WEBPACK_IMPORTED_MODULE_5__["i18n"])("save"),
        zIndex: Object(_util__WEBPACK_IMPORTED_MODULE_5__["getMediaDialogNextZIndex"])(),
        confirmLoading: loading
      }, modalContent);
    }
  }]);

  return MetaBox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _temp)) || _class) || _class);
/**
 * Wait for the input field for the cover image and create a media picker.
 *
 * @see https://wordpress.stackexchange.com/questions/190987/how-do-i-create-a-custom-add-media-button-modal
 */

_util__WEBPACK_IMPORTED_MODULE_5__["hooks"].register("wprfc/metaCoverImage", function () {
  var modal = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents(".ant-modal-wrap").parent(),
      _$$wpMediaPicker$data = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).wpMediaPicker().data("wpWpMediaPicker"),
      _frame = _$$wpMediaPicker$data._frame; // Attach new store with new selected id


  var useStore = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__["clone"])(_store__WEBPACK_IMPORTED_MODULE_8__["default"]);
  useStore.getTreeItemById("all", false).setter(function (node) {
    return node.selected = true;
  });

  _frame.$el.data("useStore", useStore); // Listen to changes


  _frame.on("open", function () {
    return modal.hide();
  }).on("close", function () {
    return modal.show();
  });
});
/* harmony default export */ __webpack_exports__["default"] = (MetaBox);

/***/ }),

/***/ "./src/public/ts/components/ProFooter.jsx":
/*!************************************************!*\
  !*** ./src/public/ts/components/ProFooter.jsx ***!
  \************************************************/
/*! exports provided: ProFooter, ProBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProFooter", function() { return ProFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProBox", function() { return ProBox; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/public/ts/components/index.jsx");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** @module components/ProFooter */




/**
 * Show a dialog box with a pro feature.
 *
 * @param [props.feature=undefined] {string} The feature to show
 * @extends React.Component
 */

var ProBox = /*#__PURE__*/function (_React$Component) {
  _inherits(ProBox, _React$Component);

  var _super = _createSuper(ProBox);

  function ProBox(props) {
    var _this;

    _classCallCheck(this, ProBox);

    _this = _super.call(this, props);

    _this.redirect = function () {
      window.open(_util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.proUrl + "&feature=" + _this.props.feature, "_blank").focus();

      _this.props.onClose();
    };

    return _this;
  }

  _createClass(ProBox, [{
    key: "render",
    value: function render() {
      var title, modalContent;
      var feature = this.props.feature;

      if (feature) {
        var set = _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.lang.proFeatures[feature];
        title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          type: "lock"
        }), " ", set.title, " ", _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.lang.proBoxTitle);
        modalContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, !!set.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "https://assets.devowl.io/in-app/wp-real-media-library/".concat(set.image)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, set.description));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["Modal"], {
        visible: !!modalContent,
        title: title,
        onOk: this.redirect,
        onCancel: this.props.onClose,
        cancelText: Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("proBoxCancel"),
        okText: Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("proBoxOk"),
        zIndex: Object(_util__WEBPACK_IMPORTED_MODULE_3__["getMediaDialogNextZIndex"])(),
        className: "rml-probox"
      }, modalContent);
    }
  }]);

  return ProBox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

function dismiss() {
  return _dismiss.apply(this, arguments);
}

function _dismiss() {
  _dismiss = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])("notice/lite", {
              method: "DELETE"
            });

          case 2:
            window.location.reload();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _dismiss.apply(this, arguments);
}

var ProFooter = function ProFooter(_ref) {
  var _ref$dismissible = _ref.dismissible,
      dismissible = _ref$dismissible === void 0 ? false : _ref$dismissible;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.lang.proFooterText, " \xB7", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.proUrl + "&feature=folder-tree",
      target: "_blank"
    }, _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.lang.proLearnMore), dismissible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "\xB7", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: dismiss,
      href: "#"
    }, _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.lang.proDismiss))),
    type: "info",
    style: {
      marginBottom: "10px"
    }
  });
};



/***/ }),

/***/ "./src/public/ts/components/UploadMessage.jsx":
/*!****************************************************!*\
  !*** ./src/public/ts/components/UploadMessage.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/public/ts/components/index.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/public/ts/store/index.jsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_4__);
/** @module components/UploadMessage */





/**
 * Show the current uploading file with progress bar and status. It uses
 * the main store to read the current upload.
 *
 * @type React.Element
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_store__WEBPACK_IMPORTED_MODULE_2__["injectAndObserve"])(function (_ref) {
  var store = _ref.store,
      onCancel = _ref.onCancel;
  var currentUpload = store.currentUpload,
      uploadTotalRemainTime = store.uploadTotalRemainTime,
      readableUploadTotalLoaded = store.readableUploadTotalLoaded,
      readableUploadTotalSize = store.readableUploadTotalSize,
      readableUploadTotalBytesPerSec = store.readableUploadTotalBytesPerSec;

  if (!currentUpload) {
    return null;
  }

  var name = currentUpload.name,
      previewSrc = currentUpload.previewSrc,
      percent = currentUpload.percent,
      _currentUpload$node = currentUpload.node,
      title = _currentUpload$node.title,
      icon = _currentUpload$node.icon,
      readableLoaded = currentUpload.readableLoaded,
      readableSize = currentUpload.readableSize,
      deny = currentUpload.deny,
      count = store.uploading.length;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "rml-upload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-trigger"
  }, !!previewSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: previewSrc
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "rml-upload-file"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-folder"
  }, icon, " ", title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    percent: percent,
    size: "small",
    status: percent >= 100 ? "success" : "active"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-progress"
  }, count > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("filesRemaining", {
    count: count
  }), " \xB7\xA0"), percent >= 100 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("receiveData") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, readableLoaded, " / ", readableSize), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), uploadTotalRemainTime, " \xB7 ", readableUploadTotalBytesPerSec, "/s\xA0", count > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xB7 ", readableUploadTotalLoaded, " / ", readableUploadTotalSize) : ""), !!deny && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-deny"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    type: "warning"
  }), " ", deny))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rml-upload-cancel",
    onClick: onCancel
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("cancel")));
}));

/***/ }),

/***/ "./src/public/ts/components/index.jsx":
/*!********************************************!*\
  !*** ./src/public/ts/components/index.jsx ***!
  \********************************************/
/*! exports provided: Progress, Modal, DashIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashIcon", function() { return DashIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/progress */ "../../node_modules/antd/lib/progress/index.js");
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return antd_lib_progress__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/modal */ "../../node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return antd_lib_modal__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var antd_lib_progress_style_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/progress/style/index.css */ "../../node_modules/antd/lib/progress/style/index.css");
/* harmony import */ var antd_lib_progress_style_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress_style_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_modal_style_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/modal/style/index.css */ "../../node_modules/antd/lib/modal/style/index.css");
/* harmony import */ var antd_lib_modal_style_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_index_css__WEBPACK_IMPORTED_MODULE_4__);
/** @module components */






/**
 * Create a WordPress dash icon.
 *
 * @property {string} name The icon
 * @see https://developer.wordpress.org/resource/dashicons/ Available icons
 * @returns React.Element
 * @function
 */

var DashIcon = function DashIcon(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dashicons dashicons-" + name
  });
};

/***/ }),

/***/ "./src/public/ts/hooks/index.jsx":
/*!***************************************!*\
  !*** ./src/public/ts/hooks/index.jsx ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcut */ "./src/public/ts/hooks/shortcut.jsx");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions */ "./src/public/ts/hooks/permissions.jsx");
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploader */ "./src/public/ts/hooks/uploader.jsx");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/public/ts/hooks/modal.jsx");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable */ "./src/public/ts/hooks/sortable.jsx");






/***/ }),

/***/ "./src/public/ts/hooks/modal.jsx":
/*!***************************************!*\
  !*** ./src/public/ts/hooks/modal.jsx ***!
  \***************************************/
/*! exports provided: getModalControllerOf, isAttachmentsBrowserSortable, isAttachmentsGalleryEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModalControllerOf", function() { return getModalControllerOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAttachmentsBrowserSortable", function() { return isAttachmentsBrowserSortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAttachmentsGalleryEdit", function() { return isAttachmentsGalleryEdit; });
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/hooks */ "./src/public/ts/util/hooks.jsx");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp */ "wp");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _others_mediaViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../others/mediaViews */ "./src/public/ts/others/mediaViews.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** @module hooks/modal */




/**
 * Get the backbone controller of the modal.
 *
 * @param {object} element The DOM element
 * @returns {Controller} The backbone controller
 */

function getModalControllerOf(element) {
  try {
    return jquery__WEBPACK_IMPORTED_MODULE_2___default()(element).parents(".rml-modal").data("backboneView").controller;
  } catch (e) {
    return null;
  }
}
/**
 * When there is a new attachments browser in modal view then
 * prepare the media view for the AppTree container.
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_0__["default"].register("attachmentsBrowser/modal", function () {
  var _this = this;

  // Wait the menu, it will immmediatly created
  setTimeout(function () {
    // Check if attachments browser is visible (plugins like ACF do hide it)
    if (!_this.$el.children("ul.attachments").is(":visible")) {
      return;
    }

    var parent = _this.views.parent,
        views = parent.views;
    var frames = views.get(".media-frame-menu");

    if (!frames) {
      // No frames available, for example in the "replace-image" dialog
      parent.views.add(".media-frame-menu", new wp__WEBPACK_IMPORTED_MODULE_1___default.a.media.view.Menu({
        controller: _this.controller
      }));
      frames = views.get(".media-frame-menu");
    }

    var _frames = frames,
        _frames2 = _slicedToArray(_frames, 1),
        mediaMenu = _frames2[0],
        mediaMenuViews = mediaMenu.views.get();

    var container = mediaMenuViews && mediaMenuViews.filter(function (v) {
      return v.className === "rml-modal-container";
    });
    container && container.length && (container = container[0]) || (container = undefined);

    if (!container) {
      // Add seperator
      mediaMenu.views.add(new wp__WEBPACK_IMPORTED_MODULE_1___default.a.media.View({
        className: "separator"
      })); // Add ReactJS container

      container = new wp__WEBPACK_IMPORTED_MODULE_1___default.a.media.View({
        className: "rml-modal-container"
      });
      mediaMenu.views.add(container);
    } // Always enable the menu


    _this.controller.state().set("menu", true, {
      silent: true
    });

    parent.$el.addClass("rml-media-modal").removeClass("hide-menu");
    /**
     * A modal attachments browser is created and the view for the
     * React element is ready.
     *
     * @event module:util/hooks#attachmentsBrowser/modal/dom/ready
     * @param {object} container The backbone view
     * @this wp.media.view.AttachmentsBrowser
     */

    _util_hooks__WEBPACK_IMPORTED_MODULE_0__["default"].call("attachmentsBrowser/modal/dom/ready", [container], _this);
    setTimeout(function () {
      return jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).trigger("resize");
    }, 0);
  }, 50);
});
/**
 * The sortable state gets refreshed so check if we have to destroy the
 * draggable instance.
 *
 * @returns {boolean}
 */

function isAttachmentsBrowserSortable(element) {
  try {
    var attachments = element.attachmentsBrowser.attachments;
    return !attachments.$el.sortable("option", "disabled");
  } catch (e) {
    return false;
  }
}
/**
 * @returns {boolean}
 */

function isAttachmentsGalleryEdit(attachments) {
  try {
    return attachments.options.model.get("toolbar") === "gallery-edit";
  } catch (e) {
    return false;
  }
}
/**
 * When a tree gets initialized then check if it is a modal and
 * modify the state.
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_0__["default"].register("tree/init", function (state, _ref) {
  var _this2 = this;

  var isModal = _ref.isModal;

  if (isModal && this.attachmentsBrowser) {
    state.isResizable = false, state.isSticky = false;
    state.isStickyHeader = false;
    state.isFullWidth = true; // Update WP attachment sort mode and disable the draggable items

    state.isWPAttachmentsSortMode = isAttachmentsBrowserSortable(this);

    var changeOrderBy = function changeOrderBy() {
      return _this2.setState({
        isWPAttachmentsSortMode: isAttachmentsBrowserSortable(_this2)
      });
    },
        props = this.attachmentsBrowser.collection.props;

    props.on("change:orderby", changeOrderBy);

    this._unsubscribeChangeOrderBy = function () {
      return props.off("change:orderby", changeOrderBy);
    }; // Update previously selected item if tab change is the reason to rerender


    var modal = this.attachmentsBrowser.controller.modal;
    Object(_others_mediaViews__WEBPACK_IMPORTED_MODULE_3__["restoreMediaViewSelection"])(this, modal._rmlFolder, function (_ref2) {
      var id = _ref2.id;
      _this2.attachmentsBrowser.attachments._rmlInitialSetted = true;
      state.initialSelectedId = id;
    });
  }
});
/**
 * When a modal tree gets destroyed save the last selected folder in the modal.
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_0__["default"].register("tree/destroy", function (state, _ref3) {
  var isModal = _ref3.isModal,
      store = _ref3.store;

  if (isModal) {
    this.attachmentsBrowser.controller.modal._rmlFolder = store.selectedId;
    var _unsubscribeChangeOrderBy = this._unsubscribeChangeOrderBy;
    _unsubscribeChangeOrderBy && _unsubscribeChangeOrderBy();
    this._unsubscribeChangeOrderBy = undefined;
  }
});
/**
 * When the window gets resized check the flexible modal containers
 * for responsiveness.
 */

jquery__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).resize(function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(".rml-modal-container .aiot-pad > div:nth-child(2)").each(function () {
      var parent = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents(".rml-media-modal"),
          menu = parent.find(".media-frame-menu .media-menu"),
          menuHeight = menu.get(0).offsetHeight,
          oppositeHeight = menu.children(":not(.rml-modal-container)").get().map(function (c) {
        return c.offsetHeight;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);

      if (menuHeight - oppositeHeight > 300) {
        parent.removeClass("rml-mobile-modal");
      } else {
        parent.addClass("rml-mobile-modal");
      }
    });
  });
});

/***/ }),

/***/ "./src/public/ts/hooks/permissions.jsx":
/*!*********************************************!*\
  !*** ./src/public/ts/hooks/permissions.jsx ***!
  \*********************************************/
/*! exports provided: LockedToolTipText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedToolTipText", function() { return LockedToolTipText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_2__);
/** @module hooks/permissions */



/**
 * This functions generates a tooltip text for the locked toolbar button.
 *
 * @params {object} props The properties
 * @params {string[]} props.restrictions The restrictions
 * @returns {React.Element}
 */

var LockedToolTipText = function LockedToolTipText(_ref) {
  var restrictions = _ref.restrictions;
  var inheritsCount = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_util__WEBPACK_IMPORTED_MODULE_1__["i18n"])("restrictionsSuffix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), restrictions.map(function (r) {
    var inherits = r.slice(-1) === ">",
        i18nKey = inherits ? r.slice(0, -1) : r;
    inherits && inheritsCount++;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: r
    }, "- ", Object(_util__WEBPACK_IMPORTED_MODULE_1__["i18n"])("restrictions." + i18nKey), inherits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " *"));
  }), inheritsCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "*"), " ", Object(_util__WEBPACK_IMPORTED_MODULE_1__["i18n"])("restrictionsInherits")));
};
/**
 * Show a locked button with tooltip in toolbar depending the permissions.
 *
 * @param {module:AppTree} element The AppTree
 * @param {object} [selected=Current] The node
 */

/* harmony default export */ __webpack_exports__["default"] = (function (element) {
  var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.getTreeItemById();
  var restrictions = [];
  var _element$state = element.state,
      currentFolderRestrictions = _element$state.currentFolderRestrictions,
      toolbar_locked = _element$state.toolbar_locked,
      lockedVisible = !!(selected && (restrictions = selected.properties.restrictions).length),
      lockedToolTipText = lockedVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LockedToolTipText, {
    restrictions: restrictions
  }) : "";
  currentFolderRestrictions.join() !== restrictions.join() && element.setState({
    currentFolderRestrictions: restrictions || [],
    toolbar_locked: Object.assign(toolbar_locked, {
      visible: lockedVisible,
      toolTipText: lockedToolTipText
    })
  });
});
/**
 * A new node is pushed to the folder tree. We can modify it here that way that
 * a locked icon is shown.
 */

_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register("tree/node", function (node) {
  var restrictions = node.properties.restrictions;

  if (restrictions.length) {
    node.className["rml-locked"] = true;
  }
});
/**
 * When a file is added do check if upload is allowed to this folder.
 */

_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register("uploader/add", function (file, _ref2, store) {
  var properties = _ref2.properties;

  if (properties && properties.restrictions && properties.restrictions.join().indexOf("ins") > -1) {
    this.node = store.getTreeItemById(+rmlopts__WEBPACK_IMPORTED_MODULE_2___default.a.others.rootId, false);
    this.deny = Object(_util__WEBPACK_IMPORTED_MODULE_1__["i18n"])("restrictions.ins");
  }
});

/***/ }),

/***/ "./src/public/ts/hooks/shortcut.jsx":
/*!******************************************!*\
  !*** ./src/public/ts/hooks/shortcut.jsx ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_4__);
/** @module hooks/shortcut */





/**
 * A icon with tooltip showing a text that the given attachment is a shortcut.
 *
 * @param {object} props Properties
 * @type React.Element
 */

var ShortcutIconTooltip = function ShortcutIconTooltip() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    placement: "top",
    title: Object(_util__WEBPACK_IMPORTED_MODULE_2__["i18n"])("shortcut"),
    content: Object(_util__WEBPACK_IMPORTED_MODULE_2__["i18n"])("shortcutInfo")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "rmlicon-share"
  }));
};
/**
 * Is called after each grid item in the attachments browser is rendered completely
 * and adds the shortcut icon container with a tooltip.
 */


_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register("attachmentsBrowser/item/rendered", function ($el, model) {
  // Parse it
  var isShortcut = model.attributes.rmlIsShortcut > 0;
  var icon = $el.children(".attachment-preview").children(".rml-shortcut-container");
  icon.remove();

  if (isShortcut > 0) {
    $el.addClass("rml-shortcut rml-shortcut-grid");
    icon = jquery__WEBPACK_IMPORTED_MODULE_3___default()('<div class="rml-shortcut-container"></div>').appendTo($el.children(".attachment-preview"));
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortcutIconTooltip, null), icon.get(0));
  } else {
    $el.removeClass("rml-shortcut rml-shortcut-grid");
  }
});
/**
 * Is called in media library list mode and shows a shortcut icon to each shortcut attachment.
 */

_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register("ready", function () {
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(".rmlShortcutSpan").each(function () {
    var tr = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).parents("tr"),
        imgContainer = tr.children("td.title").find(".media-icon"),
        icon = jquery__WEBPACK_IMPORTED_MODULE_3___default()('<div class="rml-shortcut-container"></div>').appendTo(imgContainer);
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortcutIconTooltip, null), icon.get(0));
  });
});
/**
 * Is called in grid mode when an item is removed. This callback handles the remove of duplicate
 * shortcuts when one gets removed.
 */

_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register("attachmentsBrowser/item/removed", function (element, model, collection) {
  var id = model.attributes.id;
  collection.models.forEach(function (single) {
    if (single.attributes.rmlIsShortcut === id) {
      collection.remove(single);
    }
  });
});

/***/ }),

/***/ "./src/public/ts/hooks/sortable.jsx":
/*!******************************************!*\
  !*** ./src/public/ts/hooks/sortable.jsx ***!
  \******************************************/
/*! exports provided: applyToAttachmentsBrowser, isFilterActive, isOrderByActive, orderUrl, toggleSortable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyToAttachmentsBrowser", function() { return applyToAttachmentsBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilterActive", function() { return isFilterActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOrderByActive", function() { return isOrderByActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderUrl", function() { return orderUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSortable", function() { return toggleSortable; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/public/ts/store/index.jsx");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_3__);
/** @module hooks/sortable */




var WP_TABLE_LIST_SELECTOR = ".wp-list-table.media tbody";
/**
 * Apply an order to attachments browser without reloading the collection.
 */

function applyToAttachmentsBrowser(attachmentsBrowser, selected) {
  var orderby = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "rml";
  var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "ASC";
  var filter;

  if (attachmentsBrowser && (filter = attachmentsBrowser.toolbar.get("rml_folder").filters[selected.id])) {
    var props = attachmentsBrowser.collection.props,
        o = {
      silent: true
    };

    if (selected.contentCustomOrder === 1 || selected.forceCustomOrder) {
      filter.props.orderby = "rml";
      filter.props.order = "ASC";
      props.set({
        orderby: orderby,
        order: order
      }, o);
    } else {
      delete filter.props.orderby;
      delete filter.props.order;
      props.set({
        orderby: "date",
        order: "DESC"
      }, o);
    }
  }
}

if (false) {}
/* Silence is golden... Until you have PRO Version! */

/**
 * Checks if a filter is active.
 *
 * @param {object} [attachmentsBrowser] If set the filter is searched in the backbone controller
 */


function isFilterActive(attachmentsBrowser) {
  if (attachmentsBrowser) {
    var filters = ["monthnum", "year", "uploadedTo", "type"],
        props = attachmentsBrowser.collection.props;

    for (var i = 0; i < filters.length; i++) {
      if (props.get(filters[i])) {
        return true;
      }
    }

    return false;
  } else {
    // List
    return !!Object(_util__WEBPACK_IMPORTED_MODULE_0__["urlParam"])("attachment-filter");
  }
}
/**
 * Checks if a orderby is active.
 *
 * @param {object} [attachmentsBrowser] If set the filter is searched in the backbone controller
 */

function isOrderByActive(attachmentsBrowser) {
  var orderby = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "rml";
  var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ASC";

  if (attachmentsBrowser) {
    var props = attachmentsBrowser.collection.props,
        propOrder = props.get("order") || "DESC";
    return props.get("orderby") === orderby && propOrder.toUpperCase() === order.toUpperCase();
  } else {
    // List
    var _propOrder = Object(_util__WEBPACK_IMPORTED_MODULE_0__["urlParam"])("order") || "DESC";

    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["urlParam"])("orderby") === orderby && _propOrder.toUpperCase() === order.toUpperCase();
  }
}
/**
 * @returns {string}
 */

function orderUrl() {
  var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["addUrlParam"])(Object(_util__WEBPACK_IMPORTED_MODULE_0__["addUrlParam"])(href, "orderby", "rml"), "order", "asc");
}
/**
 * (Pro only) Toggle the sortable mode. Popup a message if custom order is not disabled, yet.
 * If custom order is enabled check the different list and grid mode behavior.
 *
 * @param {object} selected The selected node
 * @parma {boolean} mode The mode to activate
 * @param {object} [attachmentsBrowser] If set the filter is searched in the backbone controller
 */

function toggleSortable(selected, mode, attachmentsBrowser) {
  if (true) {
    return false;
  } else {}
}

/***/ }),

/***/ "./src/public/ts/hooks/uploader.jsx":
/*!******************************************!*\
  !*** ./src/public/ts/hooks/uploader.jsx ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp */ "wp");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/public/ts/store/index.jsx");
/* harmony import */ var _components_AppTree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppTree */ "./src/public/ts/components/AppTree.jsx");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UploadMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UploadMessage */ "./src/public/ts/components/UploadMessage.jsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "../../node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _others_mediaViews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../others/mediaViews */ "./src/public/ts/others/mediaViews.jsx");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lil_uri__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lil-uri */ "../../node_modules/lil-uri/uri.js");
/* harmony import */ var lil_uri__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lil_uri__WEBPACK_IMPORTED_MODULE_12__);
/** @module hooks/uploader */













var UniqueUploadMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_5__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UploadMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
  onCancel: cancelUpload
})),
    CLASS_NAME = "ant-message-bottom";
var uploaderFetchCountsTimeout, currentMessageHide, currentUploader;
/**
 * Cancel all the uploads.
 */

function cancelUpload() {
  currentUploader.stop();
  afterUpload(currentUploader);
  currentUploader.start();
}
/**
 * After upload complete do some required actions.
 */


function afterUpload(up) {
  // Update queue and counter
  up.splice();
  up.total.reset();
  clearTimeout(uploaderFetchCountsTimeout);
  uploaderFetchCountsTimeout = setTimeout(function () {
    return _store__WEBPACK_IMPORTED_MODULE_5__["default"].fetchCounts();
  }, 500); // Avoid too many requests
  // Hide uploader message

  hideMessage();
}
/**
 * Show the uploading message.
 *
 * @param {object} up The current plupload instance
 */


function showMessage(up) {
  if (!currentMessageHide) {
    // Only show once
    currentMessageHide = react_aiot__WEBPACK_IMPORTED_MODULE_7__["message"].loading(UniqueUploadMessage, 0);
  }

  currentUploader = up;
}
/**
 * Hide the uploading message.
 */


function hideMessage() {
  currentMessageHide && currentMessageHide();
  currentMessageHide = undefined;
}
/**
 * Toggle the placement of the unique uploader message.
 */


function togglePlacement() {
  jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents(".ant-message").toggleClass(CLASS_NAME);
  setTimeout(function () {
    return jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).one("mouseenter", ".rml-upload-trigger", togglePlacement);
  }, 10);
}
/**
 * Get the current selected node id.
 *
 * @returns {object}
 */


function getNodeId() {
  var selectVal = jquery__WEBPACK_IMPORTED_MODULE_4___default()(".attachments-filter-preUploadUi:visible:first").prev(),
      id = +selectVal.val();
  return id ? selectVal.data("node") : _components_AppTree__WEBPACK_IMPORTED_MODULE_6__["latestQueriedFolder"].node;
}
/**
 * When a file is added do general checks.
 */


_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register("uploader/add", function (file, node) {
  if (node.id === "all") {
    this.node = _store__WEBPACK_IMPORTED_MODULE_5__["default"].getTreeItemById(+rmlopts__WEBPACK_IMPORTED_MODULE_11___default.a.others.rootId, false);
  }
});
/**
 * The media-new.php page. Adds the property to the asyn-upload.php file and
 * modifies the output row while uploading a new file.
 *
 * @see wp-includes/js/plupload/handlers.js
 */

_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register("general", function () {
  if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()("body").hasClass("media-new-php")) {
    return;
  } // When the file is uploaded, then the original filename is overwritten. Now we
  // must add it again to the row after the filename.


  if (window.prepareMediaItemInit) {
    var copyPrepareMediaItemInit = window.prepareMediaItemInit;

    window.prepareMediaItemInit = function (file) {
      copyPrepareMediaItemInit.apply(this, arguments);

      if (file.rmlFolderHTML) {
        var mediaRowFilename = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#media-item-" + file.id).find(".filename");

        if (mediaRowFilename.length) {
          mediaRowFilename.after(file.rmlFolderHTML);
        }
      }
    };
  } // Add event to the uploader so the parameter for the folder id is sent


  setTimeout(function () {
    return window.uploader && window.uploader.bind("BeforeUpload", function (up, file) {
      var rmlFolderNode = getNodeId(); // Set server-side-readable rmlfolder id

      if (rmlFolderNode && !isNaN(+rmlFolderNode.id)) {
        up.settings.multipart_params.rmlFolder = rmlFolderNode.id; // Get title as string

        var div = document.createElement("div");
        var title = rmlFolderNode.title;
        typeof title === "string" ? div.innerText = title : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(title, div);
        title = div.innerText;
        var mediaRowFilename = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#media-item-" + file.id).find(".filename");

        if (mediaRowFilename.length > 0) {
          file.rmlFolderHTML = '<div class="media-item-rml-folder">' + title + "</div>";
          mediaRowFilename.after(file.rmlFolderHTML);
        }
      }
    });
  }, 500);
});
/**
 * The default backbone uploader.
 */

_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register("general", function () {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["findDeep"])(window, "wp.media") || !Object(_util__WEBPACK_IMPORTED_MODULE_2__["findDeep"])(window, "wp.Uploader")) {
    return;
  }

  jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).one("mouseenter", ".rml-upload-trigger", togglePlacement); // Initialize

  var oldP = wp__WEBPACK_IMPORTED_MODULE_3___default.a.Uploader.prototype,
      oldInit = oldP.init,
      oldSucess = oldP.success;

  oldP.init = function () {
    oldInit.apply(this, arguments);
    /**
     * The uploader gets initialized.
     *
     * @event module:util/hooks#uploader/init
     * @this wp.Uploader
     */

    _util__WEBPACK_IMPORTED_MODULE_2__["hooks"].call("uploader/init", [], this); // Bind the last selected node to the uploaded file

    this.uploader.bind("FileFiltered", function (up, file) {
      file.rmlFolderNode = getNodeId();
    }); // Remove files from queue if upload is a folder

    /*this.uploader.bind('FilesAdded', function(up, files) {
        files.forEach(file => {
            console.log(file.getSource().relativePath);
        	up.removeFile(file);
        });
        console.log(files);
        console.log(up);
        
        // TODO: Disable upload until here and show dialog with folder preview
    }, undefined, 10);*/
    // A new file is added, add it to the store so it can be rendered

    this.uploader.bind("FilesAdded", function (up, files) {
      showMessage(up);
      files.forEach(function (file) {
        var cid = file.attachment.cid,
            name = file.name,
            percent = file.percent,
            loaded = file.loaded,
            size = file.size,
            rmlFolderNode = file.rmlFolderNode,
            previewObj = {
          cid: cid,
          name: name,
          percent: percent,
          loaded: loaded,
          size: size,
          node: rmlFolderNode
        };
        /**
         * A new file is added.
         *
         * @event module:util/hooks#uploader/add
         * @param {object} file The file
         * @param {module:store/TreeNode~TreeNode} folder The folder node
         * @param {module:store~Store} store The store
         * @this object
         */

        _util__WEBPACK_IMPORTED_MODULE_2__["hooks"].call("uploader/add", [file, rmlFolderNode, _store__WEBPACK_IMPORTED_MODULE_5__["default"]], previewObj);
        var upload = file.rmlUpload = _store__WEBPACK_IMPORTED_MODULE_5__["default"].addUploading(previewObj); // Generate preview url

        var preloader = new window.mOxie.Image();

        preloader.onload = function () {
          preloader.downsize(89, 89);
          var finalUrl;

          try {
            finalUrl = preloader.getAsDataURL();
            finalUrl = Object(_util__WEBPACK_IMPORTED_MODULE_2__["dataUriToBlob"])(finalUrl);
            finalUrl = window.URL.createObjectURL(finalUrl);
            finalUrl && upload.setter(function (u) {
              return u.previewSrc = finalUrl;
            });
          } catch (e) {// Silence is golden.
          }
        };

        preloader.load(file.getSource());
      });
    }); // Set server-side-readable RML folder id

    this.uploader.bind("BeforeUpload", function (up, file) {
      var multipart_params = up.settings.multipart_params;
      var rmlFolderNode = file.rmlFolderNode;
      !rmlFolderNode && (rmlFolderNode = getNodeId()); // Lazy node

      if (rmlFolderNode && !isNaN(+rmlFolderNode.id)) {
        multipart_params.rmlFolder = rmlFolderNode.id;
      }
    }); // The upload progress

    this.uploader.bind("UploadProgress", function (_ref, _ref2) {
      var total = _ref.total;
      var rmlUpload = _ref2.rmlUpload,
          percent = _ref2.percent,
          loaded = _ref2.loaded;
      rmlUpload.setter(function (u) {
        u.percent = percent;
        u.loaded = loaded;
      });
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].setUploadTotal(total);
    }); // All files are completed

    this.uploader.bind("UploadComplete", afterUpload);
  };
  /**
   * A single file is completed successfully.
   */


  oldP.success = function (file_attachment) {
    oldSucess.apply(this, arguments); // Remove file from queue

    _store__WEBPACK_IMPORTED_MODULE_5__["default"].removeUploading(file_attachment.cid);
    var uploadId = file_attachment.get("rmlFolderId");
    _store__WEBPACK_IMPORTED_MODULE_5__["default"].addFoldersNeedsRefresh(uploadId); // Update all available backbone view

    var rmlGalleryOrder = file_attachment.get("rmlGalleryOrder"),
        at = rmlGalleryOrder === -1 ? 0 : rmlGalleryOrder;
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(_others_mediaViews__WEBPACK_IMPORTED_MODULE_10__["BROWSER_SELECTOR"]).each(function () {
      var backboneView = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data("backboneView");

      if (backboneView) {
        var $RmlAppTree = backboneView.controller.$RmlAppTree,
            activeNode = $RmlAppTree.getTreeItemById(undefined, false);

        if (uploadId === activeNode.id || activeNode.id === "all") {
          backboneView.collection.add(file_attachment, {
            at: activeNode.id === "all" ? 0 : at
          });
        }
      }
    });
  };
});
var GALLERY_ALLOWED_EXT = ["jpg", "jpeg", "jpe", "gif", "png"];
/**
 * Checks, if the uploading folder is a collection or gallery and restrict the upload,
 * move the file to unorganized folder.
 */

_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register("uploader/add", function (_ref3, _ref4, store) {
  var name = _ref3.name;
  var properties = _ref4.properties;

  // May only contain image files
  if (properties && properties.type) {
    var ext = name.substr(name.lastIndexOf(".") + 1).toLowerCase(),
        isCollection = +properties.type === 1;

    if (jquery__WEBPACK_IMPORTED_MODULE_4___default.a.inArray(ext, GALLERY_ALLOWED_EXT) === -1 || isCollection) {
      this.node = store.getTreeItemById(+rmlopts__WEBPACK_IMPORTED_MODULE_11___default.a.others.rootId, false);
      this.deny = Object(_util__WEBPACK_IMPORTED_MODULE_2__["i18n"])(isCollection ? "uploadingCollection" : "uploadingGallery");
    }
  }
});
/**
 * Check if the current page is list mode and modify the "Add new" button to
 * preselect in the media-new.php page.
 */

_util__WEBPACK_IMPORTED_MODULE_2__["hooks"].register("tree/init", function (state, props) {
  var rml_preselect = +state.initialSelectedId;

  if (!props.attachmentsBrowser && !isNaN(rml_preselect)) {
    var a = jquery__WEBPACK_IMPORTED_MODULE_4___default()('a.page-title-action[href*="/media-new.php"]'),
        url = lil_uri__WEBPACK_IMPORTED_MODULE_12___default()(a.attr("href")),
        newUrl = url.query(jquery__WEBPACK_IMPORTED_MODULE_4___default.a.extend(true, {}, url.query(), {
      rml_preselect: rml_preselect
    })).build();
    a.attr("href", newUrl);
  }
});

/***/ }),

/***/ "./src/public/ts/others/defaultFolder.jsx":
/*!************************************************!*\
  !*** ./src/public/ts/others/defaultFolder.jsx ***!
  \************************************************/
/*! exports provided: ID_NONE, ID_LAST_QUERIED, getDefaultFolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID_NONE", function() { return ID_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID_LAST_QUERIED", function() { return ID_LAST_QUERIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultFolder", function() { return getDefaultFolder; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_2__);



var ID_NONE = -2,
    ID_LAST_QUERIED = -3;

function adjustLinks() {
  var df = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDefaultFolder(false);
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#menu-media a[href^="upload.php"]').each(function () {
    var url = Object(_util__WEBPACK_IMPORTED_MODULE_0__["addUrlParam"])(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr("href"), "rml_folder", df);
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr("href", url);
  });
}
/**
 * Get the default folder and resolve if for example "Last queried folder".
 *
 * @param {boolean} [resolve=true] If false the rmlOpts.others.defaultFolder is returned in raw, so -2 is possible for example
 * @returns {number}
 */


function getDefaultFolder() {
  var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var id = +rmlopts__WEBPACK_IMPORTED_MODULE_2___default.a.others.defaultFolder;

  if (!resolve) {
    return id;
  } // Higher priority list mode query parameter


  id = Object(_util__WEBPACK_IMPORTED_MODULE_0__["urlParam"])("rml_folder") || id; // Resolve

  switch (id) {
    case ID_LAST_QUERIED:
      return +rmlopts__WEBPACK_IMPORTED_MODULE_2___default.a.others.lastQueried;

    default:
      return id;
  }
}
/**
 * Check for changes of the default startup folder and reload the link.
 */


_util__WEBPACK_IMPORTED_MODULE_0__["hooks"].register("folder/meta/saved", function (id, _ref, _ref2) {
  var lastQueried = _ref.lastQueried;
  var defaultFolder = _ref2.defaultFolder;

  if (id === "usersettings") {
    rmlopts__WEBPACK_IMPORTED_MODULE_2___default.a.others.defaultFolder = defaultFolder;
    rmlopts__WEBPACK_IMPORTED_MODULE_2___default.a.others.lastQueried = lastQueried;
    adjustLinks();
  }
}); // Change it once

adjustLinks();


/***/ }),

/***/ "./src/public/ts/others/exportMediaLibrary.jsx":
/*!*****************************************************!*\
  !*** ./src/public/ts/others/exportMediaLibrary.jsx ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./src/public/ts/components/index.jsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
// @see inc/comp/ExportMediaLibrary.class.php






if (+rmlopts__WEBPACK_IMPORTED_MODULE_1___default.a.others.massedge_wp_export) {
  var Item = react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item,
      ItemGroup = react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"].ItemGroup,
      SUPPORTS_SUBFOLDERS = +rmlopts__WEBPACK_IMPORTED_MODULE_1___default.a.others.childrenSql > 1;
  /**
   * Handle click on a menu item so the correct admin page can be called.
   */

  var handleClick = function handleClick(e) {
    var url = Object(_util__WEBPACK_IMPORTED_MODULE_4__["uri"])(Object(_util__WEBPACK_IMPORTED_MODULE_4__["ajax"])("massedge/export", undefined, undefined, true)).query({
      type: e.key,
      folder: this.props.store.selectedId,
      _wpnonce: rmlopts__WEBPACK_IMPORTED_MODULE_1___default.a.restNonce
    }).build();
    window.location.href = url;
  };
  /**
   * A function which is called to render the dropdown menu.
   */


  var renderMenu = function renderMenu() {
    var store = this.props.store,
        selected = store.selected,
        isFolder = selected && selected.id > 0;

    if (!isFolder) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        style: {
          visibility: "hidden"
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      onClick: handleClick.bind(this),
      theme: _util__WEBPACK_IMPORTED_MODULE_4__["IS_DARKMODE"] ? "dark" : "light"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemGroup, {
      key: "wos",
      title: "Without RML subfolders"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      key: "wosFlat"
    }, "As flat .zip file"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      key: "wosHierarchical"
    }, "As hierarchical .zip file (physical structure)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemGroup, {
      key: "ws",
      title: "Include RML subfolders" + (SUPPORTS_SUBFOLDERS ? "" : " (not supported by your system)")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      key: "wsFlat",
      disabled: !SUPPORTS_SUBFOLDERS
    }, "As flat .zip file"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      key: "wsHierarchicalRML",
      disabled: !SUPPORTS_SUBFOLDERS
    }, "As hierarchical .zip file (RML structure)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      key: "wsHierarchical",
      disabled: !SUPPORTS_SUBFOLDERS
    }, "As hierarchical .zip file (physical structure)")));
  }; // Create download icon and register it to the toolbar


  _util__WEBPACK_IMPORTED_MODULE_4__["hooks"].register("tree/init", function () {
    this.stateRefs.ICON_DOWNLOAD_ZIP = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["DashIcon"], {
      name: "download"
    });
    this.stateRefs.renderDownloadZipMenu = renderMenu.bind(this); // When clicking on the download icon in "All" or "Unorganized" redirect to usual export page

    this.stateRefs.handleDownloadZipClick = function () {
      var selectedId = this.props.store.selectedId;

      if (selectedId === "all" || this.props.store.selectedId === -1) {
        window.location.href = Object(_util__WEBPACK_IMPORTED_MODULE_4__["addUrlParam"])(window.location.href, "page", "mass-edge-export-media-library");
      }
    }.bind(this);

    this.state.toolbar_download_zip = {
      content: "ICON_DOWNLOAD_ZIP",
      toolTipTitle: "Download folder as zip",
      toolTipText: "A folder can be downloaded as flat or hierarchical zip.",
      menu: "resolve.renderDownloadZipMenu",
      toolTipPlacement: "topLeft",
      dropdownPlacement: "bottomLeft",
      onClick: "handleDownloadZipClick"
    };
    this.state.availableToolbarButtons.unshift("download_zip");
  });
}

/***/ }),

/***/ "./src/public/ts/others/filter.jsx":
/*!*****************************************!*\
  !*** ./src/public/ts/others/filter.jsx ***!
  \*****************************************/
/*! exports provided: FILTER_SELECTOR, filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_SELECTOR", function() { return FILTER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/public/ts/store/index.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/** @module others/filter */


/**
 * The attachments filter selectors.
 */

var FILTER_SELECTOR = ".attachment-filters.attachment-filters-rml";
/**
 * The filter select dropdown prepared as backbone object.
 */

var filter = {
  id: "media-attachment-filters-rml",
  className: "attachment-filters attachment-filters-rml",
  lastSlugs: {},
  createFilters: function createFilters(namesSlug) {
    var _this = this;

    this.$el.data("backboneView", this); // default "all" filter, shows all tags

    var filters = this.filters = {
      all: {
        text: "All",
        props: {
          rml_folder: "",
          orderby: "date",
          order: "DESC"
        },
        priority: 10
      }
    }; // No filters loaded, yet

    if (namesSlug) {
      this.lastSlugs = namesSlug;
      var names = namesSlug.names,
          slugs = namesSlug.slugs; // create a filter for each tag

      var props, node;

      for (var i = 0; i < names.length; i++) {
        node = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTreeItemById(slugs[i]);
        props = {
          rml_folder: slugs[i],
          orderby: "date",
          order: "DESC"
        }; // Add order by

        if (node && (node.contentCustomOrder === 1 || node.forceCustomOrder)) {
          props.orderby = "rml";
          props.order = "ASC";
        }

        filters[slugs[i]] = {
          text: names[i],
          props: props,
          priority: 20 + i
        };
      }
    } //this.model.set(filters['all'].props); // Implemented in mediaViews


    if (namesSlug) {
      // Build `<option>` elements.
      this.$el.html(Object.keys(this.filters).map(function (key) {
        return jquery__WEBPACK_IMPORTED_MODULE_1___default()("<option></option>").val(key).html(_this.filters[key].text)[0].outerHTML;
      }).join("")); // Reselect

      this.select();
    }
  }
};

/***/ }),

/***/ "./src/public/ts/others/mediaViews.jsx":
/*!*********************************************!*\
  !*** ./src/public/ts/others/mediaViews.jsx ***!
  \*********************************************/
/*! exports provided: BROWSER_SELECTOR, firstCreatedToolbar, restoreMediaViewSelection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_SELECTOR", function() { return BROWSER_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstCreatedToolbar", function() { return firstCreatedToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreMediaViewSelection", function() { return restoreMediaViewSelection; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var _util_dragdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dragdrop */ "./src/public/ts/util/dragdrop.jsx");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp */ "wp");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ "./src/public/ts/others/filter.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/modal */ "./src/public/ts/hooks/modal.jsx");
/* harmony import */ var _defaultFolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultFolder */ "./src/public/ts/others/defaultFolder.jsx");
/** @module others/mediaViews */

/* global rmlOpts */







/**
 * The attachments browser selectors.hooks
 */

var BROWSER_SELECTOR = ".attachments-browser";
/**
 * This deferred promise is resolved when the first attachments browser'
 * toolbar is created with the RML filter.
 */

var firstCreatedToolbar = jquery__WEBPACK_IMPORTED_MODULE_4___default.a.Deferred();
/**
 * Restores the selected id from the _rmlFolder property of the given context.
 *
 * @param {module:AppTree~AppTree} tree The tree instance
 * @param {object} _rmlFolder The _rmlFolder property
 * @param {function} [callback] Optional callback resolved with the selected node
 */

function restoreMediaViewSelection(tree, _rmlFolder, callback) {
  if (_rmlFolder !== undefined && tree) {
    // Detect, if the folder is available, if yes, select it if not yet
    var store = tree.props.store,
        node = store.getTreeItemById(_rmlFolder);

    if (node && node.visible && store.selectedId !== _rmlFolder) {
      node.setter(function (node) {
        node.selected = true;
      });
    } // If the folder is no longer available, force 'All' files to be selected


    if (!node || !node.$visible) {
      tree.handleSelect("all");
    } else {
      callback && callback(node);
    }
  }
}
/**
 * Modify the media-views.js components (Backbone) in a way
 * to make them compatible with the AIOT component.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["findDeep"])(window, "wp.media.view.Attachment.Library")) {
    return false;
  } // Fix bug with uploads.php?item=:item route when refreshing the page
  //const oldShowItem = wp.media.view.MediaFrame.Manage.Router.prototype.showItem;
  //wp.media.view.MediaFrame.Manage.Router.prototype.showItem = function() {
  //	const args = arguments;
  //	if (wp.media.frames.browse) {
  //		return oldShowItem.apply(this, );
  //	}
  //	setTimeout(() => wp.media.view.MediaFrame.Manage.Router.prototype.showItem.apply(this, args), 50);
  //};
  // Create filter


  var RMLFilter = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentFilters.RML = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentFilters.extend(_filter__WEBPACK_IMPORTED_MODULE_3__["filter"]); // Hold selectedId to select previously selected id

  var Modal = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Modal;
  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Modal = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Modal.extend({
    className: "rml-modal",
    // Add class and backboneView so we can find it via DOM, see getModalControllerOf in modal.js
    initialize: function initialize() {
      Modal.prototype.initialize.apply(this, arguments);
      this.$el.data("backboneView", this);
    },
    close: function close() {
      Modal.prototype.close.apply(this, arguments);
      var $RmlAppTree = this.controller.$RmlAppTree;
      this._rmlFolder = $RmlAppTree ? $RmlAppTree.props.store.selectedId : undefined;
    },
    open: function open() {
      var $RmlAppTree = this.controller.$RmlAppTree;
      $RmlAppTree && restoreMediaViewSelection($RmlAppTree, this._rmlFolder);
      Modal.prototype.open.apply(this, arguments);
    }
  }); // Allow rml orderby

  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.model.Query.orderby.allowed.push("rml");

  var createComporator = function createComporator(attachments, collection, fallbackComparator) {
    return function (a, b) {
      var $RmlAppTree = attachments.controller.$RmlAppTree;
      var selectedId;

      if ($RmlAppTree && $RmlAppTree.props && (selectedId = $RmlAppTree.getSelectedId()) && selectedId === "all") {
        return fallbackComparator.apply(this, arguments);
      }

      var aO, bO;

      if (collection.props.get("orderby") === "rml" && (aO = a.attributes.rmlGalleryOrder) && (bO = b.attributes.rmlGalleryOrder) && aO !== -1 && bO !== -1) {
        if (aO < bO) {
          return -1;
        } else if (aO > bO) {
          return 1;
        }

        return 0;
      } else if (typeof fallbackComparator === "function") {
        return fallbackComparator.apply(this, arguments);
      }
    };
  }; // Create rml orderby comparator


  var Attachments = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachments;
  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachments = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachments.extend({
    initialize: function initialize() {
      Attachments.prototype.initialize.apply(this, arguments);
      var that = this,
          collection = this.collection,
          comparator = collection.comparator; // Disable comporator in gallery-edit mode (dialog)

      if (Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this)) {
        collection.comparator = undefined;
        this.initSortable();
        return;
      }

      collection.comparator = createComporator(that, collection, comparator); // Initially load a folder from the AppTree initialSelectedId state

      var oldMore = collection.more;
      that._rmlInitialSetted = false;

      collection.more = function () {
        if (!that.views.parent || that.controller.acf && that.controller.acf.data.mode === "edit") {
          return oldMore.apply(this, arguments);
        }

        var $RmlAppTree = that.controller.$RmlAppTree,
            toolbar = that.views.parent.toolbar;
        var initialSelectedId;

        if ($RmlAppTree && $RmlAppTree.props && (initialSelectedId = $RmlAppTree.initialSelectedId)) {
          var model = toolbar.get("rml_folder").model;

          if (!that._rmlInitialSetted && initialSelectedId !== _defaultFolder__WEBPACK_IMPORTED_MODULE_6__["ID_NONE"]) {
            model.set({
              rml_folder: initialSelectedId === "all" ? "" : initialSelectedId
            }, {
              silent: false
            });
            that._rmlInitialSetted = true;
          }

          if (model.get("rml_folder") !== undefined) {
            return oldMore.apply(this, arguments);
          }
        }

        return jquery__WEBPACK_IMPORTED_MODULE_4___default.a.Deferred().resolveWith(that).promise();
      };
    },

    /**
     * Override the default behavior when scrolling is relative to the document
     * height: upload.php. Instead of calculating with the scroll bottom use
     * the view-port approach.
     *
     * @internal
     */
    scroll: function scroll() {
      var _this = this;

      var el = this.options.scrollElement,
          overrideDefault = el === document && !Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this); // The scroll event occurs on the document, but the element
      // that should be checked is the last grid item

      if (overrideDefault && !this.$el.hasClass("rml-loading")) {
        el = this.$el.children(":last");

        if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()(el).is(":visible") || !this.collection.hasMore()) {
          return;
        }

        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["inViewPort"])(el, true)) {
          this.$el.addClass("rml-loading");
          this.collection.more().done(function () {
            _this.$el.removeClass("rml-loading");

            _this.scroll();
          });
        }
      } else {
        Attachments.prototype.scroll.apply(this, arguments);
      }
    }
  }); // Call a grid render for all new generated items

  var oldRender = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachment.Library.prototype.render;

  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.Attachment.Library.prototype.render = function () {
    oldRender.apply(this, arguments); // Disable in gallery edit view

    if (Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this.views.parent)) {
      return;
    }

    var $RmlAppTree = this.controller.$RmlAppTree;
    /**
     * Fired when an attachments browser item is rendered.
     *
     * @event module:util/hooks#attachmentsBrowser/item/rendered
     * @param {jQuery} $el The element
     * @param {object} model The backbone model
     * @param {object} appTree The app tree instance
     * @this wp.media.view.Attachment.Library
     */

    _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call("attachmentsBrowser/item/rendered", [this.$el, this.model, $RmlAppTree], this);
  }; // Modify attachments browser


  var timeoutReloadCount;
  var AttachmentsBrowser = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentsBrowser;
  wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentsBrowser = wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.view.AttachmentsBrowser.extend({
    initialize: function initialize() {
      var _this2 = this;

      AttachmentsBrowser.prototype.initialize.apply(this, arguments); // Disable in gallery edit view

      if (Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this)) {
        return;
      } // Events for attachments browsers collections


      var timeout;
      this.collection.on("change reset add remove", function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          // Merged collection change
          var $RmlAppTree = _this2.controller.$RmlAppTree;

          if ($RmlAppTree) {
            Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_1__["draggable"])($RmlAppTree);
            /**
             * Fired when the collection of attachments browser changes.
             *
             * @event module:util/hooks#attachmentsBrowser/collection/change
             * @param {object} appTree The app tree instance
             * @this wp.media.view.AttachmentsBrowser
             */

            _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call("attachmentsBrowser/collection/change", [$RmlAppTree], _this2);
          }
        }, 50);
      });
      this.collection.on("remove", function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        /**
         * Fired when an attachments browser item gets removed.
         *
         * @event module:util/hooks#attachmentsBrowser/item/removed
         * @param {mixed} args... The event arguments
         * @this wp.media.view.AttachmentsBrowser
         */
        _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call("attachmentsBrowser/item/removed", [_this2.controller.$RmlAppTree].concat(args), _this2);
      }); // Listen to the ajax complete to refresh the folder counts

      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ajaxComplete(function (e, xhs, req) {
        try {
          if (req.data.indexOf("action=delete-post") > -1) {
            var $RmlAppTree = _this2.controller.$RmlAppTree;
            clearTimeout(timeoutReloadCount);
            $RmlAppTree && (timeoutReloadCount = setTimeout(function () {
              return $RmlAppTree.fetchCounts();
            }, 1800));
          }
        } catch (e) {// Silence is golden.
        }
      });
    },
    createToolbar: function createToolbar() {
      AttachmentsBrowser.prototype.createToolbar.call(this); // Disable in gallery edit view

      if (Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_5__["isAttachmentsGalleryEdit"])(this)) {
        return;
      }

      this.$el.data("backboneView", this); // Add new toolbar

      var obj = new RMLFilter({
        controller: this.controller,
        model: this.collection.props,
        priority: -81 // see media-views.js#7295

      }).render();
      this.toolbar.set("rml_folder", obj);
      obj.initialize();
      var modal = this.controller.options.modal;

      if (modal) {
        /**
         * Fired, when a new modal window is created.
         *
         * @event module:util/hooks#attachmentsBrowser/modal
         * @this wp.media.view.AttachmentsBrowser
         */
        _util__WEBPACK_IMPORTED_MODULE_0__["hooks"].call("attachmentsBrowser/modal", [], this);
      } else {
        firstCreatedToolbar.resolve(this);
      }
    },

    /**
     * Create the view for "Select folder".
     */
    createAttachments: function createAttachments() {
      AttachmentsBrowser.prototype.createAttachments.apply(this, arguments);
      this.attachmentsSelectFolder = new wp__WEBPACK_IMPORTED_MODULE_2___default.a.media.View({
        controller: this.controller,
        tagName: "p"
      });
      var $el = this.attachmentsSelectFolder.$el;

      if (+rmlOpts.defaultFolder === _defaultFolder__WEBPACK_IMPORTED_MODULE_6__["ID_NONE"]) {
        $el.addClass("hidden no-media").html(rmlOpts.others.lang.defaultFolderNoneLabel);
        this.views.add(this.attachmentsSelectFolder);
      }

      if (!this.controller.isModeActive("grid")) {
        $el.css({
          color: "#666",
          "font-size": "18px",
          padding: "30px 0 0 20px"
        });
      }
    },

    /**
     * Update handler to show created label for "Select folder" or "No media found".
     */
    updateContent: function updateContent() {
      var _this3 = this;

      AttachmentsBrowser.prototype.updateContent.apply(this, arguments);
      var noItemsView = this.controller.isModeActive("grid") ? this.attachmentsNoResults : this.uploader;
      this.dfd && this.dfd.done(function () {
        var attributes = _this3.collection.props.attributes;

        if (attributes && attributes.rml_folder === undefined) {
          noItemsView.$el.addClass("hidden");

          _this3.attachmentsSelectFolder.$el.removeClass("hidden");
        } else {
          _this3.attachmentsSelectFolder.$el.addClass("hidden");
        }
      });
    },
    remove: function remove() {
      var $RmlAppTree = this.controller.$RmlAppTree;
      $RmlAppTree && $RmlAppTree.handleDestroy();
      AttachmentsBrowser.prototype.remove.apply(this, arguments);
    }
  });
  return true;
});
/**
 * Enhanced Media Library compatibility and layout adjustment.
 */

_util__WEBPACK_IMPORTED_MODULE_0__["hooks"].register("ready", function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_4___default()("body").hasClass("eml-grid")) {
    var mediaGrid = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#wp-media-grid"),
        offsetTop = mediaGrid.offset().top,
        fnResize = function fnResize() {
      mediaGrid.css("height", jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).height() - jquery__WEBPACK_IMPORTED_MODULE_4___default()("#wpadminbar").height() - 10);
    },
        fnScroll = function fnScroll() {
      var scrollTop = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).scrollTop();
      mediaGrid[0].style.top = (scrollTop > offsetTop ? scrollTop : 0) + "px"; //mediaGrid.css("top", scrollTop > offsetTop ? scrollTop - offsetTop : 0);
    }; // Centerize container


    jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).on("resize", fnResize);
    fnResize(); // Scroll container

    jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).on("scroll", fnScroll);
    fnScroll();
  }
});

/***/ }),

/***/ "./src/public/ts/others/optionsScreen.jsx":
/*!************************************************!*\
  !*** ./src/public/ts/others/optionsScreen.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @module others/optionsScreen */


/**
 * Do the options screen with a nav bar (WordPress standard). This
 * nav bar is not ReactJS.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Append to known option
  var container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="rml-options"><nav><ul></ul></nav></div>').insertBefore(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[for="rml_load_frontend"]').parents("table").prev()),
      nav = container.find("nav ul");
  var navLiCnt = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("<h3>Real Media Library</h3>").insertBefore(container); // Search the option panels

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("table.form-table").each(function () {
    var oHeadline = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev();
    var sHeadline = oHeadline.html();

    if (sHeadline && sHeadline.indexOf("RealMediaLibrary") === 0) {
      sHeadline = sHeadline.split(":", 2)[1]; // Append headline to options panel

      var li = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li class="nav-tab ' + (navLiCnt === 0 ? "nav-tab-active" : "") + '">' + sHeadline + "</li>").appendTo(nav),
          section = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).appendTo(container);
      !navLiCnt && section.show();
      li.click(function () {
        container.children("table").hide();
        nav.find(".nav-tab-active").removeClass("nav-tab-active");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("nav-tab-active");
        section.show();
      }); // Hash navigation

      var hashObj,
          hash = window.location.hash.split("rml-", 2);

      if (hash.length > 1 && (hashObj = section.find("#" + hash[1])).length) {
        li.click(); // Scroll to element

        setTimeout(function () {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({
            scrollTop: hashObj.offset().top - 170
          }, 500);
        }, 300);
      }

      oHeadline.remove();
      navLiCnt++;
    }
  });
  /**
   * Fired when the options screen tables are rendered successfully.
   *
   * @event module:util/hooks#options/ready
   */

  _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call("options/ready");
});
/**
 * When a .rml-rest-button is pressed show a loading indicator and send
 * the request to the REST server.
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("click", ".rml-rest-button", function (e) {
    var _$$data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(),
        url = _$$data.url,
        method = _$$data.method,
        urlnamespace = _$$data.urlnamespace,
        data = _objectWithoutProperties(_$$data, ["url", "method", "urlnamespace"]),
        btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("disabled") !== "disabled" && window.confirm(_util__WEBPACK_IMPORTED_MODULE_1__["rmlOpts"].others.lang.areYouSure)) {
      btn.html('<div class="spinner is-active" style="float: initial;margin: 0;"></div>');
      btn.attr("disabled", "disabled");
      /**
       * Fired when a button with class .rml-rest-button gets clicked and
       * the POST data is prepared so you can modify it. The $url is the
       * data-url attribute of the button. You also have to define a
       * data-method attribute.
       *
       * @event module:util/hooks#rest/button/prepare/$url
       * @param {object} data The data
       * @this jQuery
       */

      _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call("rest/button/prepare/" + url, [data], btn);
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["ajax"])(url, {
        method: method,
        data: data
      }, urlnamespace).then(function () {
        btn.html('<i class="fa fa-check"></i> ' + _util__WEBPACK_IMPORTED_MODULE_1__["rmlOpts"].others.lang.success).attr("disabled", false);
        /**
         * Fired when a button with class .rml-rest-button is successfully saved.
         *
         * @event module:util/hooks#rest/button/success/$url
         * @param {mixed} args... The $.ajax success arguments
         * @param {string} method The method
         * @param {object} data The data
         * @this jQuery
         */

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call("rest/button/success/" + url, [].concat(args, [method, data]), btn);
      }, function () {
        btn.html('<i class="fa fa-warning"></i> ' + _util__WEBPACK_IMPORTED_MODULE_1__["rmlOpts"].others.lang.failed).attr("disabled", false);
        /**
         * Fired when a button with class .rml-rest-button is successfully saved.
         *
         * @event module:util/hooks#rest/button/error/$url
         * @param {mixed} args... The $.ajax success arguments
         * @param {string} method The method
         * @param {object} data The data
         * @this jQuery
         */

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _util__WEBPACK_IMPORTED_MODULE_1__["hooks"].call("rest/button/error/" + url, [].concat(args, [method, data]), btn);
      });
    }

    e.preventDefault();
    return false;
  });
});
_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register("rest/button/success/export", function (response) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#rml_export_data textarea").get(0).value = response;
});
_util__WEBPACK_IMPORTED_MODULE_1__["hooks"].register("rest/button/prepare/import", function (data) {
  data["import"] = encodeURIComponent(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#rml_import_data textarea").get(0).value);
});

/***/ }),

/***/ "./src/public/ts/others/renderOrderMenu.jsx":
/*!**************************************************!*\
  !*** ./src/public/ts/others/renderOrderMenu.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var _hooks_sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/sortable */ "./src/public/ts/hooks/sortable.jsx");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** @module others/renderOrderMenu */




var Item = react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item,
    SubMenu = react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu,
    Divider = react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"].Divider;
/**
 * An element rendering sortables for the popup menu.
 *
 * @returns React.Element[]
 */

var createSortables = function createSortables(sortables, select, selectText) {
  return Object.keys(sortables).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      key: key
    }, sortables[key], " ", select === key && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "(", selectText, ")"));
  });
};
/**
 * Apply an order to a tree node object and afterwards reload the view.
 *
 * @this AppTree
 */


function applyOrder(_x, _x2, _x3) {
  return _applyOrder2.apply(this, arguments);
}
/**
 * When clicking on a menu item in the order menu popup.
 *
 * @this AppTree
 */


function _applyOrder2() {
  _applyOrder2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(selected, key, automatically) {
    var hide, attachmentsBrowser;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!_util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.isPro && _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.showProHints)) {
              _context.next = 4;
              break;
            }

            this.setState({
              showProFeature: "order-content"
            });
            _context.next = 10;
            break;

          case 4:
            hide = react_aiot__WEBPACK_IMPORTED_MODULE_2__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("orderLoadingText", {
              name: selected.title
            })), attachmentsBrowser = this.attachmentsBrowser;
            _context.next = 7;
            return selected.applyOrder(key, automatically);

          case 7:
            // Apply props to backbone model
            Object(_hooks_sortable__WEBPACK_IMPORTED_MODULE_4__["applyToAttachmentsBrowser"])(attachmentsBrowser, selected);
            this.handleReload();
            hide();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _applyOrder2.apply(this, arguments);
}

function handleClick(_x4) {
  return _handleClick.apply(this, arguments);
}
/**
 * Render the order menu.
 *
 * @type React.Element
 */


function _handleClick() {
  _handleClick = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
    var key, keyPath, path, selected, _applyOrder;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            key = _ref.key, keyPath = _ref.keyPath;
            path = keyPath.reverse(), selected = this.props.store.selected, _applyOrder = applyOrder.bind(this);

            if (path[0] === "dnd") {
              this.handleOrderClick();
            } else if (path[0] === "applyOnce") {
              // Apply sorting once
              _applyOrder(selected, key);
            } else if (path[0] === "applyAutomatically") {
              _applyOrder(selected, key, true);
            } else if (key === "reset") {
              _applyOrder(selected, "original");
            } else if (key === "resetAutomatically") {
              _applyOrder(selected, "deactivate");
            } else if (key === "applyReindex") {
              _applyOrder(selected, "reindex");
            } else if (key === "applyResetLast") {
              _applyOrder(selected, "last");
            }

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _handleClick.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var store = this.props.store,
      selected = store.selected,
      sortables = store.sortables,
      isSortable = selected && selected.properties && selected.contentCustomOrder !== 2;

  if (!isSortable) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      style: {
        visibility: "hidden"
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    onClick: handleClick.bind(this),
    theme: _util__WEBPACK_IMPORTED_MODULE_3__["IS_DARKMODE"] ? "dark" : "light"
  }, !selected.orderAutomatically && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "dnd"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("orderByDnd")), selected.contentCustomOrder !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "reset"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("resetOrder")), !selected.orderAutomatically && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "applyOnce",
    title: Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("applyOrderOnce"),
    disabled: selected.orderAutomatically
  }, sortables && createSortables(sortables, selected.lastOrderBy, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("last"))), selected.orderAutomatically && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "resetAutomatically",
    disabled: selected.contentCustomOrder === 0
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("deactivateOrderAutomatically")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "applyAutomatically",
    title: Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("applyOrderAutomatically")
  }, sortables && createSortables(sortables, selected.orderAutomatically && selected.lastOrderBy, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("latest"))), selected.contentCustomOrder === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null), selected.contentCustomOrder === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "applyReindex"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("reindexOrder")), selected.contentCustomOrder === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "applyResetLast"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("resetToLastOrder")));
});

/***/ }),

/***/ "./src/public/ts/others/renderSortMenu.jsx":
/*!*************************************************!*\
  !*** ./src/public/ts/others/renderSortMenu.jsx ***!
  \*************************************************/
/*! exports provided: default, RearrangeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RearrangeBox", function() { return RearrangeBox; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "../../node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ "./src/public/ts/components/index.jsx");
/* harmony import */ var _components_FolderBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FolderBox */ "./src/public/ts/components/FolderBox.jsx");
/* harmony import */ var _components_FolderSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FolderSelector */ "./src/public/ts/components/FolderSelector.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./src/public/ts/store/index.jsx");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);


var _dec, _class, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** @module others/renderSortMenu */

/* global rmlOpts */










var Item = react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item,
    SubMenu = react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu,
    Divider = react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"].Divider,
    ItemGroup = react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"].ItemGroup;

if (false) {}
/* Silence is golden... Until you have PRO Version! */

/**
 * An element rendering sortables for the popup menu.
 *
 * @returns React.Element[]
 */


var createSortables = function createSortables(sortables, select, selectText) {
  return Object.keys(sortables).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      key: key
    }, sortables[key], " ", select === key && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "(", selectText, ")"));
  });
};
/**
 * Apply an order to a tree node object.
 *
 * @this AppTree
 */


function applyOrder(_x, _x2, _x3) {
  return _applyOrder2.apply(this, arguments);
}
/**
 * When clicking on a menu item in the order menu popup.
 *
 * @this AppTree
 */


function _applyOrder2() {
  _applyOrder2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(selected, key, automatically) {
    var hide;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!rmlOpts.others.isPro && rmlOpts.others.showProHints)) {
              _context2.next = 4;
              break;
            }

            this.setState({
              showProFeature: "order-subfolders"
            });
            _context2.next = 8;
            break;

          case 4:
            hide = react_aiot__WEBPACK_IMPORTED_MODULE_2__["message"].loading(Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("sortLoadingText", {
              name: selected.title
            }));
            _context2.next = 7;
            return selected.applyChildrenOrder(key, automatically);

          case 7:
            hide();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _applyOrder2.apply(this, arguments);
}

function handleClick(_x4) {
  return _handleClick.apply(this, arguments);
}
/**
 * Render the order menu.
 *
 * @type React.Element
 */


function _handleClick() {
  _handleClick = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref) {
    var key, keyPath, path, _this$props$store, selectedId, selected, _applyOrder;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            key = _ref.key, keyPath = _ref.keyPath;
            path = keyPath.reverse(), _this$props$store = this.props.store, selectedId = _this$props$store.selectedId, selected = _this$props$store.selected, _applyOrder = applyOrder.bind(this);

            if (path[0] === "dnd") {
              // Apply sorting once
              this.stateRefs.handleSortClick();
            } else if (path[0] === "manual") {
              this.setState({
                rearrangeBoxId: selectedId
              });
            } else if (path[0] === "applyOnce") {
              _applyOrder(selected, key);
            } else if (path[0] === "applyAutomatically") {
              _applyOrder(selected, key, true);
            } else if (key === "reset") {
              _applyOrder(selected, "original");
            } else if (key === "resetAutomatically") {
              _applyOrder(selected, "deactivate");
            } else if (key === "applyReindex") {
              _applyOrder(selected, "reindex");
            }

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _handleClick.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var store = this.props.store,
      selectedId = store.selectedId,
      selected = store.selected,
      sortables = store.treeSortables,
      isFolder = selectedId > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    onClick: handleClick.bind(this),
    theme: _util__WEBPACK_IMPORTED_MODULE_3__["IS_DARKMODE"] ? "dark" : "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "dnd"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("sortByDnd")), isFolder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "manual"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("sortByManual", {
    name: Object(_util__WEBPACK_IMPORTED_MODULE_3__["textDots"])(selected.title)
  })), isFolder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null), isFolder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemGroup, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("subfolders"), " (", Object(_util__WEBPACK_IMPORTED_MODULE_3__["textDots"])(selected.title), ")")
  }, !!selected.lastSubOrderBy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "reset"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("resetOrder")), !selected.subOrderAutomatically ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "applyOnce",
    title: Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("applyOrderOnce")
  }, sortables && createSortables(sortables, selected.lastSubOrderBy, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("last"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "resetAutomatically"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("deactivateOrderAutomatically")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "applyAutomatically",
    title: Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("applyOrderAutomatically")
  }, sortables && createSortables(sortables, selected.subOrderAutomatically && selected.lastSubOrderBy, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("latest"))), !!selected.lastSubOrderBy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    key: "applyReindex"
  }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("reindexOrder"))));
});
/**
 * Show a rearrange box for the selected folder id.
 *
 * @property {int} id The id of the folder
 * @extends React.Component
 */

var RearrangeBox = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  _inherits(RearrangeBox, _React$Component);

  var _super = _createSuper(RearrangeBox);

  function RearrangeBox(_props) {
    var _this;

    _classCallCheck(this, RearrangeBox);

    _this = _super.call(this, _props);

    _this.handleSelect = function (parent) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          siblingStore = _assertThisInitialize.siblingStore,
          tree = jquery__WEBPACK_IMPORTED_MODULE_10___default.a.extend(true, [], Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__["getSnapshot"])(parent ? parent.childNodes : _this.props.store.tree));

      tree.forEach(function (n) {
        return n.childNodes = [];
      });
      siblingStore.setTree(tree);
      var selected = siblingStore.selected;
      selected && selected.setter(function (n) {
        return n.selected = false;
      }); // Reset selection
    };

    _this.handleSave = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var store, id, _assertThisInitialize2, parentStore, siblingStore, oldItem, props, parentTo, newIndexRelative, newIndexA;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: true
              });

              try {
                store = _this.props.store, id = _this.item.id, _assertThisInitialize2 = _assertThisInitialized(_this), parentStore = _assertThisInitialize2.parentStore, siblingStore = _assertThisInitialize2.siblingStore, oldItem = store.getTreeItemById(id), props = {
                  id: id,
                  oldIndex: oldItem.parentArray.indexOf(oldItem),
                  parentFromId: oldItem.parentId,
                  parentToId: parentStore.selected ? parentStore.selectedId : store.rootId,
                  nextId: siblingStore.selectedId || NaN,
                  doFinally: false
                }; // Get newIndex

                parentTo = store.getTreeItemById(props.parentToId), newIndexRelative = parentTo ? parentTo.childNodes : store.tree, newIndexA = newIndexRelative.filter(function (_ref3) {
                  var id = _ref3.id;
                  return id !== oldItem.id;
                }).map(function (_ref4, idx) {
                  var id = _ref4.id;
                  return id === props.nextId ? "" + idx : null;
                }).filter(Boolean).map(function (i) {
                  return +i;
                });
                props.newIndex = !isNaN(props.nextId) && newIndexA.length ? newIndexA[0] : newIndexRelative.length; // Do the sorting

                _this.props.onSort(props);
              } finally {
                _this.setState({
                  loading: false
                });
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.handleNodeInit = function (itemId) {
      var _this$item = _this.item = _this.parentStore.getTreeItemById(itemId, false),
          nextSibling = _this$item.nextSibling,
          parentArray = _this$item.parentArray,
          id = nextSibling ? nextSibling.id : undefined;

      _this.setState({
        nextId: id
      }, function () {
        var tree = jquery__WEBPACK_IMPORTED_MODULE_10___default.a.extend(true, [], Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__["getSnapshot"])(parentArray)),
            _assertThisInitialize3 = _assertThisInitialized(_this),
            siblingStore = _assertThisInitialize3.siblingStore,
            parentStore = _assertThisInitialize3.parentStore;

        tree.forEach(function (n) {
          return n.childNodes = [];
        });
        siblingStore.setTree(tree);
        parentStore.getTreeItemById(_this.item.id).setter(function (n) {
          return n.$visible = false;
        });
        siblingStore.getTreeItemById(_this.item.id).setter(function (n) {
          return n.$visible = false;
        });
        id !== undefined && siblingStore.getTreeItemById(id).setter(function (n) {
          return n.selected = true;
        });
      });
    };

    _this.state = {
      nextId: undefined,
      loading: false
    };
    _this.parentStore = _store__WEBPACK_IMPORTED_MODULE_8__["BasicStore"].create({
      staticTree: [Object(_store__WEBPACK_IMPORTED_MODULE_8__["createUnorganizedNode"])()]
    }); // Create sibling store

    _this.siblingStore = _store__WEBPACK_IMPORTED_MODULE_8__["BasicStore"].create({
      staticTree: [Object(_store__WEBPACK_IMPORTED_MODULE_8__["createUnorganizedNode"])()]
    });
    return _this;
  }
  /**
   * Create the sibling tree.
   */


  _createClass(RearrangeBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var modalContent, title;
      var selected = this.props.id && this.props.store.getTreeItemById(this.props.id, false);

      if (selected) {
        var selectedId = selected.parentId > 0 ? selected.parentId : "";
        title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FolderBox__WEBPACK_IMPORTED_MODULE_6__["FolderBoxHeader"], {
          icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["DashIcon"], {
            name: "sort"
          }),
          folder: selected
        });
        modalContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FolderBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          folder: selected,
          header: false
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("parent")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
          tree: this.parentStore
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FolderSelector__WEBPACK_IMPORTED_MODULE_7__["FolderSelector"], {
          selected: selectedId,
          nullable: true,
          disabled: "4",
          onSelect: this.handleSelect,
          onNodeInit: function onNodeInit() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return _this2.handleNodeInit.apply(_this2, [_this2.props.id].concat(args));
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("beforeThisNode")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
          tree: this.siblingStore
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FolderSelector__WEBPACK_IMPORTED_MODULE_7__["FolderSelector"], {
          fetch: false,
          nullable: true,
          disabled: "4",
          ignoreChildNodes: true
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "description"
        }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("beforeThisNodeInfo"))));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
        visible: !!modalContent,
        title: title,
        onOk: this.handleSave,
        onCancel: this.props.onClose,
        cancelText: Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("cancel"),
        okText: Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("save"),
        zIndex: Object(_util__WEBPACK_IMPORTED_MODULE_3__["getMediaDialogNextZIndex"])(),
        confirmLoading: this.state.loading
      }, modalContent);
    }
  }]);

  return RearrangeBox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _temp)) || _class) || _class);


/***/ }),

/***/ "./src/public/ts/others/rfcPreUploadUi.jsx":
/*!*************************************************!*\
  !*** ./src/public/ts/others/rfcPreUploadUi.jsx ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/hooks */ "./src/public/ts/util/hooks.jsx");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FolderSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FolderSelector */ "./src/public/ts/components/FolderSelector.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/public/ts/store/index.jsx");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** @module others/rfcPreUploadUi */





/**
 * Load data to a dropdown or show label that the folder is inherited from the AppTree.
 * This RFC is placed in the upload UI where you can select your files.
 *
 * @function preUploadUi
 * @listens module:util/hooks#wprfc/$function
 */

_util_hooks__WEBPACK_IMPORTED_MODULE_2__["default"].register("wprfc/preUploadUi", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var compatView, attachmentsBrowser, span;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            compatView = !!jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent(".rml-compat-preUploadUi").length;
            attachmentsBrowser = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents(".attachments-browser"); // Fallback to main media library page

            compatView && !attachmentsBrowser.length && (attachmentsBrowser = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".attachments-browser"));

            if (attachmentsBrowser.length && !compatView) {
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().hide().prev().html(rmlopts__WEBPACK_IMPORTED_MODULE_3___default.a.others.lang.uploaderUsesLeftTree);
            } else {
              span = jquery__WEBPACK_IMPORTED_MODULE_1___default()("<span/>").addClass("attachments-filter-preUploadUi").insertAfter(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this)).get(0);
              Object(_components_FolderSelector__WEBPACK_IMPORTED_MODULE_4__["default"])(span, jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).get(0), Object.assign(data, {
                style: {
                  maxWidth: 400
                },
                // When in compat view raise the change event manually so it is saved
                onSelect: compatView && function (node, input) {
                  var _attachmentsBrowser$d;

                  (_attachmentsBrowser$d = attachmentsBrowser.data("backboneView")) === null || _attachmentsBrowser$d === void 0 ? void 0 : _attachmentsBrowser$d.controller.once("attachment:compat:ready", function () {
                    return _store__WEBPACK_IMPORTED_MODULE_5__["default"].fetchCounts();
                  });
                  jquery__WEBPACK_IMPORTED_MODULE_1___default()(input).trigger("change");
                }
              }));
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/public/ts/others/rfcShortcutInfo.jsx":
/*!**************************************************!*\
  !*** ./src/public/ts/others/rfcShortcutInfo.jsx ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/hooks */ "./src/public/ts/util/hooks.jsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Create a WP RFC for the shortcut info container.
 *
 * @property {string[]} data-path The pathes
 * @module others/rfcShortcutInfo
 */



/**
 * Append HTML content below the attachment details.
 *
 * @param {jQuery} container The container
 * @param {string} html The html
 * @returns {jQuery}
 */

var appendTo = function appendTo(container, html) {
  var attachmentDetails = container.parents(".attachment-details"),
      mediaSidebar = container.parents(".media-sidebar"); // Check if it is already an container

  (mediaSidebar.length > 0 ? mediaSidebar : attachmentDetails.length > 0 ? attachmentDetails : container).find(".rml-shortcut-info-container").remove(); // The normal media library view

  if (mediaSidebar.length > 0) {
    return jquery__WEBPACK_IMPORTED_MODULE_1___default()(html).appendTo(mediaSidebar);
  } else if (attachmentDetails.length > 0) {
    return jquery__WEBPACK_IMPORTED_MODULE_1___default()(html).insertAfter(attachmentDetails.children(".attachment-info").children(".settings"));
  } else {
    return container.replaceWithPush(html);
  }
};
/**
 * Create a WP RFC for a shortcut info container.
 *
 * @property {id} id The attachment id.
 * @function shortcutInfo
 * @listens module:util/hooks#wprfc/$function
 */


_util_hooks__WEBPACK_IMPORTED_MODULE_2__["default"].register("wprfc/shortcutInfo", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var id, loadingContainer, _yield$ajax, html;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.id;
            loadingContainer = appendTo(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("rml-shortcut-info-container"), '<div style="height:50px;text-align:center;"><div class="spinner is-active" style="float: initial;margin: 0;"></div></div>');
            _context.next = 4;
            return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])("attachments/" + id + "/shortcutInfo");

          case 4:
            _yield$ajax = _context.sent;
            html = _yield$ajax.html;
            loadingContainer.replaceWithPush(html);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/public/ts/others/static.jsx":
/*!*****************************************!*\
  !*** ./src/public/ts/others/static.jsx ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_0__);
/* global commonL10n */

/**
 * Warn the user when deleting files and give a hint while deleting shortcuts.
 */

window.rmlWarnDelete = function () {
  return confirm((commonL10n.warnDelete || "") + rmlopts__WEBPACK_IMPORTED_MODULE_0___default.a.others.lang.warnDelete);
};

/***/ }),

/***/ "./src/public/ts/rml.jsx":
/*!*******************************!*\
  !*** ./src/public/ts/rml.jsx ***!
  \*******************************/
/*! exports provided: hooks, rmlOpts, i18n, urlParam, ajax, applyNodeDefaults, fetchTree, findDeep, humanFileSize, secondsFormat, dataUriToBlob, addUrlParam, uri, injectAndObserve, store, TreeNode, Upload, StoredAppTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/public/ts/util/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["hooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rmlOpts", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["rmlOpts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlParam", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["urlParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["ajax"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyNodeDefaults", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["applyNodeDefaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchTree", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["fetchTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDeep", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["findDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "humanFileSize", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["humanFileSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secondsFormat", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["secondsFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataUriToBlob", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["dataUriToBlob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUrlParam", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["addUrlParam"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uri", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["uri"]; });

/* harmony import */ var _others_optionsScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./others/optionsScreen */ "./src/public/ts/others/optionsScreen.jsx");
/* harmony import */ var _others_mediaViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./others/mediaViews */ "./src/public/ts/others/mediaViews.jsx");
/* harmony import */ var _util_dragdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/dragdrop */ "./src/public/ts/util/dragdrop.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/public/ts/store/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectAndObserve", function() { return _store__WEBPACK_IMPORTED_MODULE_8__["injectAndObserve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _store__WEBPACK_IMPORTED_MODULE_8__["TreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _store__WEBPACK_IMPORTED_MODULE_8__["Upload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoredAppTree", function() { return _store__WEBPACK_IMPORTED_MODULE_8__["StoredAppTree"]; });

/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style/style.scss */ "./src/public/ts/style/style.scss");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_aiot_src_style_theme_wordpress_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-aiot/src/style/theme-wordpress.scss */ "../../node_modules/react-aiot/src/style/theme-wordpress.scss");
/* harmony import */ var react_aiot_src_style_theme_wordpress_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_aiot_src_style_theme_wordpress_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks */ "./src/public/ts/hooks/index.jsx");
/* harmony import */ var _others_static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./others/static */ "./src/public/ts/others/static.jsx");
/* harmony import */ var _util_wpRfc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util/wpRfc */ "./src/public/ts/util/wpRfc.jsx");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(setimmediate__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _others_exportMediaLibrary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./others/exportMediaLibrary */ "./src/public/ts/others/exportMediaLibrary.jsx");
/* harmony import */ var _others_defaultFolder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./others/defaultFolder */ "./src/public/ts/others/defaultFolder.jsx");
/**
 * Startup file which initializes the AIOT Tree. You can access the exports
 * through <code>window.rml</code>.
 *
 * @module rml
 */














 // Polyfill for yielding



Object(mobx__WEBPACK_IMPORTED_MODULE_2__["configure"])({
  isolateGlobalState: true
}); // ReplaceWith should return the new object

!jquery__WEBPACK_IMPORTED_MODULE_3___default.a.fn.replaceWithPush && (jquery__WEBPACK_IMPORTED_MODULE_3___default.a.fn.replaceWithPush = function (a) {
  var $a = jquery__WEBPACK_IMPORTED_MODULE_3___default()(a);
  this.replaceWith($a);
  return $a;
});
/**
 * General event when script for RML is ready to load.
 *
 * @event module:util/hooks#general
 */

_util__WEBPACK_IMPORTED_MODULE_4__["hooks"].call("general");
Object(_others_mediaViews__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_util__WEBPACK_IMPORTED_MODULE_4__["ready"])(function () {
  // Add rml-touch class if touch device
  if ("ontouchstart" in window || window.navigator.maxTouchPoints) {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").addClass("rml-touch");
  }

  Object(_util_dragdrop__WEBPACK_IMPORTED_MODULE_7__["anyKeyHolding"])();
  "WebkitAppearance" in document.documentElement.style && jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").addClass("rml-webkit");

  if (_util__WEBPACK_IMPORTED_MODULE_4__["rmlOpts"] && jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").hasClass("wp-admin") && jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").hasClass("upload-php")) {
    var $container, container;
    var containerId = "rml" + _util__WEBPACK_IMPORTED_MODULE_4__["rmlOpts"].others.blogId;
    /**
     * General event when DOM is ready and a list table / grid mode
     * is available in media library page.
     *
     * @event module:util/hooks#ready
     */

    _util__WEBPACK_IMPORTED_MODULE_4__["hooks"].call("ready"); // Create the container sidebar

    jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").addClass("activate-aiot");
    $container = jquery__WEBPACK_IMPORTED_MODULE_3___default()("<div/>").prependTo("body.wp-admin #wpbody").addClass("rml-container");
    container = $container.get(0); // Create the wrapper and React component, the modal react element is created in hooks/modal.js

    if (_util__WEBPACK_IMPORTED_MODULE_4__["rmlOpts"].others.listMode === "grid") {
      // When in grid mode, we have to wait for the first attachments browser
      _others_mediaViews__WEBPACK_IMPORTED_MODULE_6__["firstCreatedToolbar"].done(function (attachmentsBrowser) {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_store__WEBPACK_IMPORTED_MODULE_8__["StoredAppTree"], {
          attachmentsBrowser: attachmentsBrowser,
          id: containerId
        }), container);
      });
    } else {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_store__WEBPACK_IMPORTED_MODULE_8__["StoredAppTree"], {
        id: containerId
      }), container);
    }
  } // Wait for modals


  _util__WEBPACK_IMPORTED_MODULE_4__["hooks"].register("attachmentsBrowser/modal/dom/ready", function (container) {
    if (!_util__WEBPACK_IMPORTED_MODULE_4__["rmlOpts"]) return;

    try {
      _util__WEBPACK_IMPORTED_MODULE_4__["hooks"].call("attachmentsBrowser/modal/exception", [container], this);

      var _containerId = "rml" + _util__WEBPACK_IMPORTED_MODULE_4__["rmlOpts"].others.blogId,
          useStore = container.$el.parents(".media-frame").data("useStore");

      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_store__WEBPACK_IMPORTED_MODULE_8__["StoredAppTree"], {
        attachmentsBrowser: this,
        isModal: true,
        id: _containerId,
        useStore: useStore
      }), container.el);
    } catch (e) {// Silence is golden.
    }
  }); // Options panel

  jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").hasClass("options-media-php") && Object(_others_optionsScreen__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
_util__WEBPACK_IMPORTED_MODULE_4__["IS_DARKMODE"] && jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").addClass("aiot-wp-dark-mode");
Object(_util__WEBPACK_IMPORTED_MODULE_4__["isMaterialWp"])() && jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").addClass("aiot-wp-material");


/***/ }),

/***/ "./src/public/ts/store/TreeNode.jsx":
/*!******************************************!*\
  !*** ./src/public/ts/store/TreeNode.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_4__);


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @module store/TreeNode */




/**
 * The store holding general data for folders. The properties are read-only.
 *
 * @see React AIOT TreeNode documentation for properties and defaults
 * @class TreeNode
 */

var TreeNode = mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].model("RMLTreeNode", {
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].union(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].identifier, mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].identifierNumber),
  hash: "",
  className: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen(),
  icon: "folder",
  iconActive: "",
  childNodes: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].late(function () {
    return TreeNode;
  })), []),
  title: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].string,
  count: 0,
  attr: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen()),
  isTreeLinkDisabled: false,
  checked: false,
  selected: false,
  $busy: false,
  $busyOrder: false,
  $droppable: true,
  $visible: true,
  $rename: false,
  $create: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen()),
  contentCustomOrder: 0,
  forceCustomOrder: false,
  // Content order
  lastOrderBy: "",
  orderAutomatically: false,
  // Subfolder order
  lastSubOrderBy: "",
  subOrderAutomatically: false,
  //searchSelected: false,
  //expandedState: true,
  //displayChildren: true,
  //selectedIds: [],
  //onRenameClose: undefined,
  //onAddClose: undefined,
  //onSelect: undefined,
  //onNodePressF2: undefined,
  //onExpand: undefined,
  //onUlRef: undefined
  properties: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].frozen()),
  isQueried: true
}).views(function (self) {
  return {
    get indeterminate() {
      return false; // Not implemented, yet
      //if (self.checked) {
      //    return false;
      //}
      //const allChilds = self.childNodes,
      //    checked = allChilds.filter(o => o.checked).length;
      //return checked > 0;
    },

    get parentArray() {
      return Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getParent"])(self);
    },

    get nextSibling() {
      var parentArray = self.parentArray,
          indexOf = parentArray.indexOf(self),
          nextOf = indexOf + 1;
      return indexOf > -1 ? parentArray[nextOf] : undefined;
    },

    get path() {
      var result = [],
          parent = self;

      while (parent) {
        result.push(parent);

        try {
          parent = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getParentOfType"])(parent, TreeNode);
        } catch (e) {
          parent = undefined;
        }
      }

      return result.reverse();
    },

    get parentId() {
      var root = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["getRoot"])(self);
      return Object(react_aiot__WEBPACK_IMPORTED_MODULE_4__["getTreeParentById"])(self.id, root.tree, root.rootId);
    }

  };
}).actions(function (self) {
  return {
    /**
     * Update this node attributes.
     *
     * @param {function} callback The callback with one argument (node draft)
     * @param {boolean} [setHash] If true the hash node is changed so a rerender is forced
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     */
    setter: function setter(callback) {
      var setHash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      callback(self);
      setHash && (self.hash = Object(react_aiot__WEBPACK_IMPORTED_MODULE_4__["uuid"])());
    },

    /**
     * Update the checked flag.
     *
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     */
    toggleChecked: function toggleChecked() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !self.checked;
      var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      self.checked = flag;
      children && self.childNodes.forEach(function (n) {
        return n.toggleChecked(flag);
      }); // Check parents

      if (!flag) {
        var path = self.path;
        path.pop();
        path.forEach(function (n) {
          return n.toggleChecked(false, false);
        });
      }
    },

    /**
     * Rename folder.
     *
     * @param {string} inputValue The new name
     * @returns {object} Server response
     * @throws Error
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     * @async
     */
    setName: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["flow"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(inputValue) {
      var result, id, name, cnt, children, rest;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              self.setter(function (node) {
                node.$busy = true;
              });
              _context.prev = 1;
              _context.next = 4;
              return Object(_util__WEBPACK_IMPORTED_MODULE_1__["ajax"])("folders/" + self.id, {
                method: "PUT",
                data: {
                  name: inputValue
                }
              });

            case 4:
              result = _context.sent;
              id = result.id;
              name = result.name;
              cnt = result.cnt;
              children = result.children;
              rest = _objectWithoutProperties(result, ["id", "name", "cnt", "children"]);
              self.setter(function (node) {
                node.title = name;
                node.properties = jquery__WEBPACK_IMPORTED_MODULE_3___default.a.merge(node.properties, rest);
                node.$busy = false;
              });
              return _context.abrupt("return", result);

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              self.setter(function (node) {
                node.$busy = false;
              }, self.id);
              throw _context.t0;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 14]]);
    })),

    /**
     * (Pro only) Apply an order to the folder content.
     *
     * @param {string} id The sortable id
     * @param {boolean} [automatically=false] If true the order is applied automatically if new files are added to the folder
     * @returns {boolean}
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     * @async
     */
    applyOrder: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["flow"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      var automatically,
          _args2 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              automatically = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;

              if (true) {
                _context2.next = 4;
                break;
              }

              _context2.next = 5;
              break;

            case 4:
              return _context2.abrupt("return", false);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),

    /**
     * (Pro only) Apply an order to the childrens.
     *
     * @param {string} [id] The sortable id - if not set the childNodes are sorted again by the last local known orderby
     * @param {boolean} [automatically=false] If true the order is applied automatically if new folders are added as subfolders
     * @returns {boolean}
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     * @async
     * @since 4.4
     */
    applyChildrenOrder: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["flow"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
      var automatically,
          _args3 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              automatically = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;

              if (true) {
                _context3.next = 4;
                break;
              }

              _context3.next = 5;
              break;

            case 4:
              return _context3.abrupt("return", false);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),

    /**
     * Toggle the view of this folder.
     *
     * @param boolean state
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     * @since 4.0.9
     */
    visible: function visible(state) {
      self.$visible = state;
    },

    /**
     * Permanently delete folder.
     *
     * @returns {string|int} The parent id
     * @throws Error
     * @memberof module:store/TreeNode~TreeNode
     * @instance
     * @async
     */
    trash: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["flow"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              self.setter(function (node) {
                node.$busy = true;
              });
              _context4.prev = 1;
              _context4.next = 4;
              return Object(_util__WEBPACK_IMPORTED_MODULE_1__["ajax"])("folders/" + self.id, {
                method: "DELETE"
              });

            case 4:
              self.visible(false);

            case 5:
              _context4.prev = 5;
              self.setter(function (node) {
                node.$busy = false;
              });
              return _context4.finish(5);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1,, 5, 8]]);
    }))
  };
});
/* harmony default export */ __webpack_exports__["default"] = (TreeNode);

/***/ }),

/***/ "./src/public/ts/store/Upload.jsx":
/*!****************************************!*\
  !*** ./src/public/ts/store/Upload.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeNode */ "./src/public/ts/store/TreeNode.jsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/** @module store/Upload */



/**
 * This model represents an uploading file. The properties are read-only.
 *
 * @class Upload
 * @property {string} cid The cid
 * @property {string} name The name of the uploaded file
 * @property {module:store/TreeNode~TreeNode} node The destination tree node
 * @property {int} percent The percent
 * @property {int} loaded The loaded size
 * @property {int} size The total size of the upload
 * @property {string} [previewSrc] The src for the preview image
 * @property {React.Element|string} [deny] Deny message
 * @property {int} readableLoaded The loaded size in human readable format
 * @property {int} readableSize The total size of the upload in human readable format
 */

var Upload = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("RMLUpload", {
  cid: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier,
  name: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  node: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].reference(_TreeNode__WEBPACK_IMPORTED_MODULE_1__["default"]),
  percent: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  // Not computed because it comes directly from plupload
  loaded: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  size: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  previewSrc: "",
  deny: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].frozen())
}).views(function (self) {
  return {
    get readableLoaded() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["humanFileSize"])(self.loaded);
    },

    get readableSize() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["humanFileSize"])(self.size);
    }

  };
}).actions(function (self) {
  return {
    /**
     * Update this upload attributes.
     *
     * @param {function} callback The callback with one argument (node draft)
     * @memberof module:store/Upload~Upload
     * @instance
     */
    setter: function setter(callback) {
      callback(self);
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ }),

/***/ "./src/public/ts/store/index.jsx":
/*!***************************************!*\
  !*** ./src/public/ts/store/index.jsx ***!
  \***************************************/
/*! exports provided: createUnorganizedNode, default, StoredAppTree, injectAndObserve, TreeNode, Upload, BasicStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnorganizedNode", function() { return createUnorganizedNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoredAppTree", function() { return StoredAppTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectAndObserve", function() { return injectAndObserve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicStore", function() { return BasicStore; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "../../node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _components_AppTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppTree */ "./src/public/ts/components/AppTree.jsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/public/ts/util/index.jsx");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TreeNode */ "./src/public/ts/store/TreeNode.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _TreeNode__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Upload */ "./src/public/ts/store/Upload.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _Upload__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @module store */









/**
 * The main Mobx State Tree store for the RML application. It holds a static tree and
 * the fetched tree from the server.
 *
 * @class BasicStore
 * @property {int} [rootId=rmlOpts.others.rootId] The root folder id
 * @property {module:store/TreeNode~TreeNode[]} staticTree The static tree
 * @property {module:store/TreeNode~TreeNode[]} [tree] The tree
 * @property {string|int} [selectedId=0] The selected id
 */

var BasicStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].model("RMLBasicStore", {
  rootId: +_util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.rootId,
  staticTree: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].array(_TreeNode__WEBPACK_IMPORTED_MODULE_6__["default"]),
  tree: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].array(_TreeNode__WEBPACK_IMPORTED_MODULE_6__["default"]), []),
  selectedId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].union(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].string, mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number), 0) // Do not fill manually, it is filled in afterCreated through onPatch

}).views(function (self) {
  return {
    /**
     * Get tree item by id.
     *
     * @param {string|int} id
     * @param {boolean} [exlucdeStatic=true]
     * @returns {module:store/TreeNode~TreeNode} Tree node
     * @memberof module:store~BasicStore
     * @instance
     */
    getTreeItemById: function getTreeItemById(id) {
      var excludeStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (id === false) {
        return undefined;
      }

      var result = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["resolveIdentifier"])(_TreeNode__WEBPACK_IMPORTED_MODULE_6__["default"], self, id);

      if (excludeStatic && self.staticTree.indexOf(result) > -1) {
        return undefined;
      }

      return result;
    },

    get selected() {
      return self.getTreeItemById(self.selectedId, false);
    },

    get breadcrumb() {
      var selected = this.selected;

      if (selected) {
        return selected.path.map(function (node) {
          return node.title;
        });
      } else {
        return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          key: "0"
        }, Object(_util__WEBPACK_IMPORTED_MODULE_3__["i18n"])("noneSelected"))];
      }
    }

  };
}).actions(function (self) {
  var currentlySettingTree = 0; // see onPatch in afterCreate()

  return {
    /**
     * The model is created so watch for specific properties. For example set
     * the selected property.
     *
     * @memberof module:store~BasicStore
     * @private
     * @instance
     */
    afterCreate: function afterCreate() {
      Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["onPatch"])(self, function (_ref) {
        var op = _ref.op,
            path = _ref.path,
            value = _ref.value;

        // A new selected item is setted
        if ((path.startsWith("/tree/") || path.startsWith("/staticTree/")) && path.endsWith("/selected")) {
          var currentSelected = self.selected,
              obj = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["resolvePath"])(self, path.slice(0, path.length - 9));

          if (value === true) {
            currentSelected && currentSelected.id !== obj.id && currentSelected.setter(function (node) {
              node.selected = false;
            });

            self._setSelectedIdFromPath(obj);
          } else if (currentSelected === obj) {
            // Reset selected id
            self._setSelectedIdFromPath({
              id: undefined
            });
          }
        } else if (currentlySettingTree === 0 && op === "add" && /(tree|childNodes)\/\d+$/.test(path)) {
          // Listen to children changes when added to the tree so automatical orders are applied
          var applyTo = Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["getParent"])(Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["resolvePath"])(self, path), 2);

          if (typeof applyTo.applyChildrenOrder === "function" && applyTo.subOrderAutomatically) {
            applyTo.applyChildrenOrder();
          }
        }
      });
    },

    /**
     * Iterate a callback over all nodes within the static and/or normal tree.
     */
    nodes: function nodes(fn) {
      var isStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var fnRec = function fnRec() {
        var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : isStatic ? self.staticTree : self.tree;
        return tree.forEach(function (n) {
          fn(n);
          n.childNodes && fnRec(n.childNodes);
        });
      };

      fnRec();
    },
    _setSelectedIdFromPath: function _setSelectedIdFromPath(obj) {
      self.selectedId = obj.id;
    },

    /**
     * Update this node attributes.
     *
     * @param {function} callback The callback with one argument (node draft)
     * @memberof module:store~BasicStore
     * @instance
     */
    setter: function setter(callback) {
      callback(self);
    },

    /**
     * Get a snapshot of tree without selection.
     *
     * @returns {object[]}
     */
    getTreeSnapshot: function getTreeSnapshot() {
      var snapshot = jquery__WEBPACK_IMPORTED_MODULE_8___default.a.extend(true, [], Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["getSnapshot"])(self.tree));
      Object(react_aiot__WEBPACK_IMPORTED_MODULE_4__["updateTreeItemById"])(self.selectedId, snapshot, function (n) {
        return n.selected = false;
      });
      return snapshot;
    },

    /**
     * Set the tree.
     *
     * @param {object} tree The object representing a tree
     * @param {boolean} [isStatic=false]
     * @memberof module:store~BasicStore
     * @instance
     */
    setTree: function setTree(tree) {
      var isStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      currentlySettingTree++;

      if (isStatic) {
        self.staticTree.clear();
        self.staticTree.replace(tree);
      } else {
        self.tree.clear();
        self.tree.replace(tree);
      }

      currentlySettingTree--;
    },

    /**
     * Handle sort mechanism.
     *
     * @returns {boolean}
     * @throws Error
     * @memberof module:store~Store
     * @instance
     */
    handleSort: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
      var id, oldIndex, newIndex, parentFromId, parentToId, nextId, _ref2$request, request, tree, rootId, treeItem;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _ref2.id, oldIndex = _ref2.oldIndex, newIndex = _ref2.newIndex, parentFromId = _ref2.parentFromId, parentToId = _ref2.parentToId, nextId = _ref2.nextId, _ref2$request = _ref2.request, request = _ref2$request === void 0 ? true : _ref2$request;
              tree = self.tree, rootId = self.rootId; // Find parent trees with children

              if (parentFromId === rootId) {
                treeItem = tree[oldIndex].toJSON();
                tree.splice(oldIndex, 1);
              } else {
                self.getTreeItemById(parentFromId).setter(function (node) {
                  treeItem = node.childNodes[oldIndex].toJSON();
                  node.childNodes.splice(oldIndex, 1);
                }, true);
              } // Find destination tree


              if (parentToId === rootId) {
                tree.splice(newIndex, 0, treeItem);
              } else {
                self.getTreeItemById(parentToId).setter(function (node) {
                  node.childNodes.splice(newIndex, 0, treeItem);
                }, true);
              }

              if (request) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", true);

            case 6:
              _context.prev = 6;
              _context.next = 9;
              return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])("hierarchy/" + id, {
                method: "PUT",
                data: {
                  parent: parentToId,
                  nextId: nextId === 0 ? false : nextId
                }
              });

            case 9:
              return _context.abrupt("return", true);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](6);
              _context.next = 16;
              return store.handleSort({
                id: id,
                oldIndex: newIndex,
                newIndex: oldIndex,
                parentFromId: parentToId,
                parentToId: parentFromId,
                request: false
              });

            case 16:
              throw _context.t0;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 12]]);
    })),

    /**
     * Fetch the folder tree.
     *
     * @returns {object[]} Tree
     * @memberof module:store~Store
     * @instance
     * @async
     */
    fetchTree: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(setSelectedId) {
      var _yield$utilFetchTree, tree, cntRoot, cntAll, slugs, result, node, all;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_util__WEBPACK_IMPORTED_MODULE_3__["fetchTree"])();

            case 2:
              _yield$utilFetchTree = _context2.sent;
              tree = _yield$utilFetchTree.tree;
              cntRoot = _yield$utilFetchTree.cntRoot;
              cntAll = _yield$utilFetchTree.cntAll;
              slugs = _yield$utilFetchTree.slugs;
              result = {
                tree: tree,
                cntRoot: cntRoot,
                cntAll: cntAll,
                slugs: slugs
              };
              self.setTree(tree);

              if (typeof setSelectedId !== "undefined") {
                node = self.getTreeItemById(setSelectedId, false);
                node && node.setter(function (node) {
                  return node.selected = true;
                });
              }

              all = self.getTreeItemById("all", false);
              all && all.setter(function (node) {
                return node.count = cntAll;
              });
              self.getTreeItemById(self.rootId, false).setter(function (node) {
                return node.count = cntRoot;
              });
              return _context2.abrupt("return", result);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),

    /**
     * Update the folder count. If you pass no argument the folder count is
     * requested from server.
     *
     * @param {object} counts Key value map of folder and count
     * @returns {object<string|int,int>} Count map
     * @memberof module:store~Store
     * @instance
     * @async
     */
    fetchCounts: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(counts) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!counts) {
                _context3.next = 3;
                break;
              }

              Object.keys(counts).forEach(function (k) {
                var ref = self.getTreeItemById(k, false);
                ref && (ref.count = counts[k]);
              });
              return _context3.abrupt("return", counts);

            case 3:
              _context3.t0 = self;
              _context3.next = 6;
              return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])("folders/content/counts");

            case 6:
              _context3.t1 = _context3.sent;
              _context3.next = 9;
              return _context3.t0.fetchCounts.call(_context3.t0, _context3.t1);

            case 9:
              return _context3.abrupt("return", _context3.sent);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),

    /**
     * Create a new tree node.
     *
     * @param {string} name The name of the new folder
     * @param {object} obj The object representing the folder
     * @param {string|int} obj.parent
     * @param {int} obj.typeInt
     * @param {function} [beforeAttach] Callback executed before attaching the new object to the tree
     * @returns {object} The tree node (no mobx model)
     * @memberof module:store~Store
     * @instance
     * @async
     */
    persist: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(name, _ref3, beforeAttach) {
      var parent, typeInt, newObj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              parent = _ref3.parent, typeInt = _ref3.typeInt;
              _context4.t0 = _util__WEBPACK_IMPORTED_MODULE_3__["applyNodeDefaults"];
              _context4.next = 4;
              return Object(_util__WEBPACK_IMPORTED_MODULE_3__["ajax"])("folders", {
                method: "POST",
                data: {
                  name: name,
                  parent: parent,
                  type: typeInt
                }
              });

            case 4:
              _context4.t1 = _context4.sent;
              _context4.t2 = [_context4.t1];
              newObj = (0, _context4.t0)(_context4.t2)[0];
              // Add to tree
              beforeAttach && beforeAttach(newObj);

              if (parent === self.rootId) {
                self.tree.push(newObj);
              } else {
                self.getTreeItemById(parent).setter(function (node) {
                  node.childNodes.push(newObj);
                }, true);
              }

              return _context4.abrupt("return", newObj);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))
  };
});
/**
 * The main Mobx State Tree store for the RML application in the media library view.
 *
 * @class Store
 * @property {mixed[]} [foldersNeedsRefresh] Node ids which needs to be refreshed when they gets queried
 * @property {module:store/Upload~Upload[]} [uploading] The upload queue
 * @property {int} [uploadTotalLoaded=0] The upload total loaded
 * @property {int} [uploadTotalSize=0] The upload total size
 * @property {object} [sortables] Available sortables for the content order menu
 * @property {object} [treeSortables] Available sortables for the tree order menu
 * @property {int} [uploadTotalBytesPerSec=0] The uploader bytes per second
 * @property {module:store/TreeNode~TreeNode} [selected] The selected tree node
 * @property {module:store/Upload~Upload} [currentUpload] The current upload file
 * @property {string} [uploadTotalRemainTime] The current upload remaining time in human readable form
 * @property {string} [readableUploadTotalLoaded] The uploader total loaded in human readable form
 * @property {string} [readableUploadTotalSize] The uploader total size in human readable form
 * @property {string} [readableUploadTotalBytesPerSec] The uploader bytes per second in human readable form
 */

var Store = BasicStore.named("RMLStore").props({
  foldersNeedsRefresh: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].union(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].string, mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number)), []),
  uploading: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].array(_Upload__WEBPACK_IMPORTED_MODULE_7__["default"]), []),
  uploadTotalLoaded: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number, 0),
  uploadTotalSize: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number, 0),
  sortables: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].frozen()),
  treeSortables: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].frozen()),
  uploadTotalBytesPerSec: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].number, 0),
  methodNotAllowed405Endpoint: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].string, ""),
  methodMoved301Endpoint: false
}).views(function (self) {
  return {
    get currentUpload() {
      return self.uploading.length ? self.uploading[0] : undefined;
    },

    get uploadTotalRemainTime() {
      if (self.uploadTotalBytesPerSec > 0) {
        var remainTime = Math.floor((self.uploadTotalSize - self.uploadTotalLoaded) / self.uploadTotalBytesPerSec);
        return Object(_util__WEBPACK_IMPORTED_MODULE_3__["secondsFormat"])(remainTime);
      } else {
        return "00:00:00";
      }
    },

    get readableUploadTotalLoaded() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["humanFileSize"])(self.uploadTotalLoaded);
    },

    get readableUploadTotalSize() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["humanFileSize"])(self.uploadTotalSize);
    },

    get readableUploadTotalBytesPerSec() {
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["humanFileSize"])(self.uploadTotalBytesPerSec);
    }

  };
}).actions(function (self) {
  return {
    /**
     * Set upload total stats.
     *
     * @memberof module:store~Store
     * @instance
     */
    setUploadTotal: function setUploadTotal(_ref4) {
      var loaded = _ref4.loaded,
          size = _ref4.size,
          bytesPerSec = _ref4.bytesPerSec;
      self.uploadTotalLoaded = loaded;
      self.uploadTotalSize = size;
      self.uploadTotalBytesPerSec = bytesPerSec;
    },

    /**
     * Add an uploading file.
     *
     * @param {object} object The object to push
     * @returns {object} The upload instance
     * @memberof module:store~Store
     * @instance
     */
    addUploading: function addUploading(upload) {
      self.uploading.push(upload);
      return self.uploading[self.uploading.length - 1];
    },

    /**
     * Register a folder that it needs refresh.
     *
     * @memberof module:store~Store
     * @instance
     */
    addFoldersNeedsRefresh: function addFoldersNeedsRefresh(id) {
      self.foldersNeedsRefresh.indexOf(id) === -1 && self.foldersNeedsRefresh.push(id);
    },

    /**
     * Register a folder that it needs refresh.
     *
     * @memberof module:store~Store
     * @instance
     */
    removeFoldersNeedsRefresh: function removeFoldersNeedsRefresh(id) {
      var idx = self.foldersNeedsRefresh.indexOf(id);
      idx > -1 && self.foldersNeedsRefresh.splice(idx, 1);
    },

    /**
     * Remove an uploading file from queue.
     *
     * @param {string} cid The cid
     * @returns {object} A copy of the original object
     * @memberof module:store~Store
     * @instance
     */
    removeUploading: function removeUploading(cid) {
      var found = self.uploading.filter(function (u) {
        return u.cid === cid;
      }),
          result = !!found.length && found[0].toJSON();
      found.length && self.uploading.splice(self.uploading.indexOf(found[0]), 1);
      return result;
    }
  };
});
var createUnorganizedNode = function createUnorganizedNode() {
  return {
    id: +_util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.rootId,
    title: _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.lang.unorganized,
    icon: "home",
    count: 0,
    contentCustomOrder: 2,
    properties: {
      type: 4
    }
  };
};
/**
 * Main store instance.
 */

var store = Store.create({
  staticTree: [{
    id: -2,
    title: "none",
    $visible: false,
    properties: {
      type: -2
    }
  }, {
    id: "all",
    title: _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.lang.allPosts,
    icon: "copy",
    count: _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.allPostCnt
  }, createUnorganizedNode()],
  sortables: _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.sortables.content,
  treeSortables: _util__WEBPACK_IMPORTED_MODULE_3__["rmlOpts"].others.sortables.tree
});
/**
 * A single instance of store.
 */

/* harmony default export */ __webpack_exports__["default"] = (store);
/**
 * An AppTree implementation with store provided. This means you have no longer
 * implement the Provider of mobx here.
 *
 * @returns {React.Element}
 */

var StoredAppTree = function StoredAppTree(_ref5) {
  var children = _ref5.children,
      useStore = _ref5.useStore,
      rest = _objectWithoutProperties(_ref5, ["children", "useStore"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: useStore ? useStore : store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AppTree__WEBPACK_IMPORTED_MODULE_2__["default"], rest, children));
};
/**
 * Import general store to ReactJS component.
 */

function injectAndObserve(fn) {
  var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "store";
  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])(store)(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(fn));
}


/***/ }),

/***/ "./src/public/ts/style/style.scss":
/*!****************************************!*\
  !*** ./src/public/ts/style/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/public/ts/util/addUrlParam.jsx":
/*!********************************************!*\
  !*** ./src/public/ts/util/addUrlParam.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addUrlParam; });
/**
 * Add a URL parameter (or changing it if it already exists)
 *
 * @param {string} url The url
 * @param {string} parameterName The parameter name
 * @param {string} parameterValue The parameter value
 * @param {boolean} [atStart] Add param before others
 * @returns {string} URL
 * @see http://stackoverflow.com/questions/486896/adding-a-parameter-to-the-url-with-javascript
 * @see http://stackoverflow.com/questions/6953944/how-to-add-parameters-to-a-url-that-already-contains-other-parameters-and-maybe?noredirect=1&lq=1
 * @module util/addUrlParam
 */
function addUrlParam(url, parameterName, parameterValue, atStart) {
  var replaceDuplicates = true,
      urlhash,
      sourceUrl;

  if (url.indexOf("#") > 0) {
    var cl = url.indexOf("#");
    urlhash = url.substring(url.indexOf("#"), url.length);
  } else {
    urlhash = "";
    cl = url.length;
  }

  sourceUrl = url.substring(0, cl);
  var urlParts = sourceUrl.split("?");
  var newQueryString = "";

  if (urlParts.length > 1) {
    var parameters = urlParts[1].split("&");

    for (var i = 0; i < parameters.length; i++) {
      var parameterParts = parameters[i].split("=");

      if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
        if (newQueryString == "") newQueryString = "?";else newQueryString += "&";
        newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : "");
      }
    }
  }

  if (newQueryString == "") newQueryString = "?";

  if (atStart) {
    newQueryString = "?" + parameterName + "=" + parameterValue + (newQueryString.length > 1 ? "&" + newQueryString.substring(1) : "");
  } else {
    if (newQueryString !== "" && newQueryString != "?") newQueryString += "&";
    newQueryString += parameterName + "=" + (parameterValue ? parameterValue : "");
  }

  return urlParts[0] + newQueryString + urlhash;
}

/***/ }),

/***/ "./src/public/ts/util/dragdrop.jsx":
/*!*****************************************!*\
  !*** ./src/public/ts/util/dragdrop.jsx ***!
  \*****************************************/
/*! exports provided: anyKeyHolding, droppable, draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyKeyHolding", function() { return anyKeyHolding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "droppable", function() { return droppable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draggable", function() { return draggable; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/public/ts/util/index.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/modal */ "./src/public/ts/hooks/modal.jsx");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** @module util/dragdrop */






/**
 * On CTRL holding add class 'aiot-helper-method-append' to document body.
 */

function anyKeyHolding() {
  jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on("keydown", function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()("body").addClass("aiot-helper-method-append");
    e.ctrlKey && jquery__WEBPACK_IMPORTED_MODULE_5___default()("body").addClass("aiot-helper-ctrl");
  });
  jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on("keyup", function () {
    return jquery__WEBPACK_IMPORTED_MODULE_5___default()("body").removeClass("aiot-helper-method-append aiot-helper-ctrl");
  });
}
/**
 * jQuery's draggable helper container.
 *
 * @param {object} props Properties
 * @param {int} props.count The count
 * @type React.Element
 */

var DragHelper = function DragHelper(_ref) {
  var count = _ref.count;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aiot-helper-method-move"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "swap"
  }), " ", Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])(count > 1 ? "move" : "moveOne", {
    count: count
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])("moveTip"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aiot-helper-method-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "copy"
  }), " ", Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])(count > 1 ? "append" : "appendOne", {
    count: count
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])("appendTip"))));
};
/**
 * Enables / Reinitializes the droppable nodes. If a draggable item is dropped
 * here the given posts are moved to the category. You have to provide a ReactJS
 * element to reload the tree.
 *
 * @param {React.Element} element The element
 */


function droppable(element) {
  var dom = jquery__WEBPACK_IMPORTED_MODULE_5___default()(element.ref.container).find(".aiot-node.aiot-droppable[data-id!='all']"),
      attachmentsBrowser = element.attachmentsBrowser;
  dom.droppable({
    activeClass: "aiot-state-default",
    hoverClass: "aiot-state-hover",
    tolerance: "pointer",
    drop: function () {
      var _drop = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, ui) {
        var ids, toTmp, to, activeId, elements, fnFade, isCopy, store, isOne, i18nProps, i18nGet, hide, _yield$ajax, counts, removedFolderIds, fadeBack;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ids = [], toTmp = jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.target).attr("data-id"), to = toTmp === "all" ? toTmp : +toTmp, activeId = element.getSelectedId(), elements = [], fnFade = function fnFade(percent) {
                  return elements.forEach(function (obj) {
                    return obj.fadeTo(250, percent);
                  });
                }, isCopy = jquery__WEBPACK_IMPORTED_MODULE_5___default()("body").hasClass("aiot-helper-method-append"), store = element.props.store; // Get dragged items

                iterateDraggedItem(ui.draggable, element, function (tr) {
                  ids.push(+tr.find('input[name="media[]"]').attr("value"));
                  elements.push(tr);
                }, function (attributes, attachmentsBrowser) {
                  ids.push(attributes.id);
                  elements.push(attachmentsBrowser.$el.find('li[data-id="' + attributes.id + '"]'));
                });
                element.setState({
                  isTreeLinkDisabled: true
                }); // Disable tree

                fnFade(0.3); // Make folders updateable in grid mode

                if (attachmentsBrowser) {
                  // If the target is "Uncategorized" the current folder has to be refreshed, too
                  store.addFoldersNeedsRefresh(to);
                  to === +___WEBPACK_IMPORTED_MODULE_4__["rmlOpts"].others.rootId && store.addFoldersNeedsRefresh(activeId);
                } // Get i18n key


                isOne = ids.length === 1, i18nProps = {
                  count: ids.length,
                  category: jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.target).find(".aiot-node-name").html()
                }, i18nGet = function i18nGet(key) {
                  return Object(___WEBPACK_IMPORTED_MODULE_4__["i18n"])((isCopy ? "append" : "move") + key + (isOne ? "One" : ""), i18nProps);
                };
                hide = react_aiot__WEBPACK_IMPORTED_MODULE_3__["message"].loading(i18nGet("LoadingText"));
                _context.prev = 7;
                _context.next = 10;
                return Object(___WEBPACK_IMPORTED_MODULE_4__["ajax"])("attachments/bulk/move", {
                  method: "PUT",
                  data: {
                    ids: ids,
                    to: to,
                    isCopy: isCopy
                  }
                });

              case 10:
                _yield$ajax = _context.sent;
                counts = _yield$ajax.counts;
                removedFolderIds = _yield$ajax.removedFolderIds;
                // Remove the folders which got deleted through the move process
                removedFolderIds && removedFolderIds.length && removedFolderIds.forEach(function (id) {
                  var obj = store.getTreeItemById(+id);
                  obj && obj.visible(false);
                });
                /**
                 * Attachment items got moved.
                 *
                 * @event module:util/hooks#attachment/move/finished
                 * @param {int[]} ids The attachment ids
                 * @param {int|string} to The destination folder
                 * @param {boolean} isCopy If true the files were copied (shortcut)
                 * @this module:AppTree~AppTree
                 * @since 4.0.7
                 */

                ___WEBPACK_IMPORTED_MODULE_4__["hooks"].call("attachment/move/finished", [ids, to, isCopy], element);
                react_aiot__WEBPACK_IMPORTED_MODULE_3__["message"].success(i18nGet("Success"));
                element.fetchCounts(counts); // Update items view

                fadeBack = isCopy || !isCopy && activeId === to || activeId === "all";
                fadeBack ? fnFade(1) : elements.forEach(function (obj) {
                  return obj.remove();
                }); // Refresh view if necessery

                if (activeId === "all" && isCopy || isCopy && activeId === to) {
                  element.handleReload();
                } // Deselect for the next bulk selection action


                elements.forEach(function (obj) {
                  var attachmentPreview = obj.children(".attachment-preview");
                  obj.hasClass("selected") && attachmentPreview.length && attachmentPreview.click();
                }); // Add no media

                if (!element.attachmentsBrowser && !jquery__WEBPACK_IMPORTED_MODULE_5___default()(".wp-list-table tbody tr").length) {
                  jquery__WEBPACK_IMPORTED_MODULE_5___default()(".wp-list-table tbody").html('<tr class="no-items"><td class="colspanchange" colspan="6">' + ___WEBPACK_IMPORTED_MODULE_4__["rmlOpts"].others.lang.noEntries + "</td></tr></tbody>");
                }

                _context.next = 28;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](7);
                react_aiot__WEBPACK_IMPORTED_MODULE_3__["message"].error(_context.t0.responseJSON.message);
                fnFade(1);

              case 28:
                _context.prev = 28;
                hide();
                element.setState(function () {
                  return {
                    isTreeLinkDisabled: false
                  };
                }); // Enable tree

                return _context.finish(28);

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 24, 28, 32]]);
      }));

      function drop(_x, _x2) {
        return _drop.apply(this, arguments);
      }

      return drop;
    }()
  });
}
/*
 * Iterates through the UI and gets the collection of dragged items.
 *
 * @param {jQuery} ui The draggable ui object
 * @param {React.Element} container The AIOT container
 * @param {function} [listMode] Function to iterate over list mode items (<tr> object)
 * @param {function} [gridMode] Function to iterate over grid mode items (attributes, attachmentsBrowser)
 * @returns {int} The count of selected items
 */

function iterateDraggedItem(ui, _ref2, listMode, gridMode) {
  var attachmentsBrowser = _ref2.attachmentsBrowser;

  if (attachmentsBrowser) {
    // Grid mode
    var selection = attachmentsBrowser.options.selection.models;

    if (selection.length) {
      selection.forEach(function (model) {
        gridMode && gridMode(model.attributes, attachmentsBrowser);
      });
      return selection.length;
    } else {
      var id = ui.data("id"),
          models = attachmentsBrowser.collection.models;
      gridMode && gridMode(models.filter(function (model) {
        return model.id === id;
      })[0], attachmentsBrowser);
      return 1;
    }
  } else {
    // List mode
    var trs = jquery__WEBPACK_IMPORTED_MODULE_5___default()('input[name="media[]"]:checked');

    if (trs.length) {
      trs.each(function () {
        listMode && listMode(jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).parents("tr"));
      });
    } else {
      listMode && listMode(ui);
    }

    return trs.length || 1;
  }
}
/**
 * Detect a single click on touch devices to trigger the click handler.
 * This must be done because jQuery Touch Punch does not support click and
 * draggable concurrently.
 */


function draggableTouchClick(e) {
  if (!jquery__WEBPACK_IMPORTED_MODULE_5___default()("body").hasClass("aiot-currently-dragging")) {
    // Check native click event
    if (e.target.click) {
      e.target.click();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(e.target).trigger("click");
    }
  }
}
/**
 * Make the list table draggable if sort mode is not active.
 *
 * @param {React.Element} element The element
 * @param {boolean} [destroy=false] If true the draggable gets destroyed
 */


function draggable(element, destroy) {
  // Get selector
  var attachmentsBrowser = element.attachmentsBrowser,
      _element$state = element.state,
      isMoveable = _element$state.isMoveable,
      isWPAttachmentsSortMode = _element$state.isWPAttachmentsSortMode,
      attachments = attachmentsBrowser && attachmentsBrowser.attachments,
      selector = attachmentsBrowser ? attachmentsBrowser.$el.find("ul.attachments > li") : jquery__WEBPACK_IMPORTED_MODULE_5___default()("#wpbody-content .wp-list-table tbody tr:not(.no-items)"),
      isGalleryEdit = Object(_hooks_modal__WEBPACK_IMPORTED_MODULE_6__["isAttachmentsGalleryEdit"])(attachments); // Make draggable

  if (destroy || !isMoveable || isWPAttachmentsSortMode || isGalleryEdit) {
    try {
      selector.draggable("destroy");
    } catch (e) {} // Silence is golden.
    // In gallery edit mode enable the built-in sortable


    if (isGalleryEdit) {
      attachments.collection.comparator = undefined;
      attachments.initSortable();
    }
  } else {
    selector.draggable({
      revert: "invalid",
      revertDuration: 0,
      appendTo: "body",
      cursorAt: {
        top: 0,
        left: 0
      },
      distance: 10,
      refreshPositions: true,
      helper: function helper(event) {
        var helper = jquery__WEBPACK_IMPORTED_MODULE_5___default()('<div class="aiot-helper"></div>').appendTo(jquery__WEBPACK_IMPORTED_MODULE_5___default()("body")),
            count = iterateDraggedItem(jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.currentTarget), element);
        react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DragHelper, {
          count: count
        }), helper.get(0));
        return helper;
      },
      start: function start() {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("body").addClass("aiot-currently-dragging"); // FIX https://bugs.jqueryui.com/ticket/4261

        jquery__WEBPACK_IMPORTED_MODULE_5___default()(document.activeElement).blur();
      },
      stop: function stop() {
        return setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_5___default()("body").removeClass("aiot-currently-dragging");
        }, 50);
      }
    }).unbind("touchend", draggableTouchClick).on("touchend", draggableTouchClick);
  }
}

/***/ }),

/***/ "./src/public/ts/util/hooks.jsx":
/*!**************************************!*\
  !*** ./src/public/ts/util/hooks.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Hook system to modify simple things.
 *
 * @module util/hooks
 * @see Events for hook events
 * @example <caption>Accessing the hook system</caption>
 * window.rml.hooks.register("yourAction", function() {
 *  // Do something
 * });
 */

var registry = {},
    hooks = {
  /**
   * Registers a callback to a given event name.
   *
   * @param {string} names The event name, you can also pass multiple names when splitted with " "
   * @param {function} callback The callback function with the arguments
   * @returns {module:util/hooks}
   * @function register
   */
  register: function register(names, callback) {
    names.split(" ").forEach(function (name) {
      registry[name] = registry[name] || [];
      registry[name].push(callback);
    });
    return hooks;
  },

  /**
   * Deregister a callback to a given event name.
   *
   * @param {string} name The event name
   * @param {function} callback The callback function with the arguments
   * @returns {module:util/hooks}
   * @function register
   */
  deregister: function deregister(name, callback) {
    var i;

    if (registry[name]) {
      registry[name].forEach(function (fns) {
        i = fns.indexOf(callback);
        i > -1 && fns.splice(i, 1);
      });
    }

    return hooks;
  },

  /**
   * Call an event.
   *
   * @param {string} name The event name
   * @param {mixed[]} args Pass arguments to the callbacks
   * @param {object} context Pass context to the callbacks
   * @returns {module:util/hooks}
   * @function call
   */
  call: function call(name, args, context) {
    if (registry[name]) {
      if (args) {
        if (Object.prototype.toString.call(args) === "[object Array]") {
          args.push(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
        } else {
          args = [args, jquery__WEBPACK_IMPORTED_MODULE_0___default.a];
        }
      } else {
        args = [jquery__WEBPACK_IMPORTED_MODULE_0___default.a];
      } // When explicit false then break the for


      registry[name].forEach(function (callback) {
        return callback.apply(context, args) !== false;
      });
    }

    return hooks;
  },

  /**
   * Checks if a event name is registered.
   *
   * @param {string} name The event name
   * @returns {boolean}
   * @function exists
   */
  exists: function exists(name) {
    return !!registry[name];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (hooks);

/***/ }),

/***/ "./src/public/ts/util/index.jsx":
/*!**************************************!*\
  !*** ./src/public/ts/util/index.jsx ***!
  \**************************************/
/*! exports provided: untrailingslashit, trailingslashit, IS_DARKMODE, textDots, ICON_OBJ_FOLDER_CLOSED, ICON_OBJ_FOLDER_OPEN, ICON_OBJ_FOLDER_COLLECTION, ICON_OBJ_FOLDER_GALLERY, resolveIcon, ready, i18n, urlParam, ajax, applyNodeDefaults, fetchTree, findDeep, humanFileSize, secondsFormat, dataUriToBlob, inViewPort, isMaterialWp, materialWpResizeOpposite, getMediaDialogNextZIndex, addUrlParam, hooks, uri, rmlOpts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untrailingslashit", function() { return untrailingslashit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trailingslashit", function() { return trailingslashit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DARKMODE", function() { return IS_DARKMODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textDots", function() { return textDots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_OBJ_FOLDER_CLOSED", function() { return ICON_OBJ_FOLDER_CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_OBJ_FOLDER_OPEN", function() { return ICON_OBJ_FOLDER_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_OBJ_FOLDER_COLLECTION", function() { return ICON_OBJ_FOLDER_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_OBJ_FOLDER_GALLERY", function() { return ICON_OBJ_FOLDER_GALLERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveIcon", function() { return resolveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlParam", function() { return urlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return ajax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyNodeDefaults", function() { return applyNodeDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTree", function() { return fetchTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDeep", function() { return findDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanFileSize", function() { return humanFileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondsFormat", function() { return secondsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUriToBlob", function() { return dataUriToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inViewPort", function() { return inViewPort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMaterialWp", function() { return isMaterialWp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialWpResizeOpposite", function() { return materialWpResizeOpposite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaDialogNextZIndex", function() { return getMediaDialogNextZIndex; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _addUrlParam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addUrlParam */ "./src/public/ts/util/addUrlParam.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUrlParam", function() { return _addUrlParam__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./src/public/ts/util/hooks.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rmlopts */ "rmlopts");
/* harmony import */ var rmlopts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rmlopts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "rmlOpts", function() { return rmlopts__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-aiot */ "react-aiot");
/* harmony import */ var react_aiot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_aiot__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var i18n_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! i18n-react */ "i18n-react");
/* harmony import */ var i18n_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(i18n_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lil_uri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lil-uri */ "../../node_modules/lil-uri/uri.js");
/* harmony import */ var lil_uri__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lil_uri__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "uri", function() { return lil_uri__WEBPACK_IMPORTED_MODULE_8___default.a; });


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @module util */









var untrailingslashit = function untrailingslashit(str) {
  return str.endsWith("/") || str.endsWith("\\") ? untrailingslashit(str.slice(0, -1)) : str;
};
var trailingslashit = function trailingslashit(str) {
  return untrailingslashit(str) + "/";
};
var IS_DARKMODE = jquery__WEBPACK_IMPORTED_MODULE_2___default()("link#dark_mode-css").length > 0;
var textDots = function textDots(string) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return string && string.length > max ? string.slice(0, max) + "..." : string;
};
var ICON_OBJ_FOLDER_CLOSED = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
  type: "folder"
});
var ICON_OBJ_FOLDER_OPEN = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
  type: "folder-open"
});
var ICON_OBJ_FOLDER_COLLECTION = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
  className: "rmlicon-collection"
});
var ICON_OBJ_FOLDER_GALLERY = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
  className: "rmlicon-gallery"
});
/**
 * Resolve the icon for a given string or object.
 *
 * @param {string} icon
 */

function resolveIcon(icon) {
  var result = {
    icon: undefined
  };

  switch (icon) {
    case "folder":
      return ICON_OBJ_FOLDER_CLOSED;

    case "folder-open":
      return ICON_OBJ_FOLDER_OPEN;

    case "collection":
      return ICON_OBJ_FOLDER_COLLECTION;

    case "gallery":
      return ICON_OBJ_FOLDER_GALLERY;

    default:
      if (typeof icon !== "string") {
        return icon;
      }
      /**
       * Set the tree node icon by string.
       *
       * @event module:util/hooks#tree/node/icon
       * @param {object} result Set "icon" to the React element
       * @param {string} icon The icon string
       * @since 4.6.0
       */


      _hooks__WEBPACK_IMPORTED_MODULE_4__["default"].call("tree/node/icon", [result, icon]);
      return result.icon ? result.icon : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_aiot__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        type: icon
      });
  }
}
var WP_REST_API_USE_GLOBAL_METHOD = true;
/**
 * Replacement for $(document).ready(). Some WordPress environments do not
 * support completely the above function when in conflict with another plugin.
 *
 * @see https://matthiasweb.freshdesk.com/a/tickets/1545
 * @see http://youmightnotneedjquery.com/
 */

var ready = function ready(fn) {
  return (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") ? fn() : document.addEventListener("DOMContentLoaded", fn);
};
/**
 * Creates a React component (span) with the translated markdown.
 *
 * @param {string} key The key in rmlOpts.lang
 * @param {object} [params] The parameters
 * @param {object|string('maxWidth')} [spanWrapperProps] Wraps an additinal span wrapper with custom attributes
 * @see https://github.com/alexdrel/i18n-react
 * @returns {React.Element} Or null if key not found
 */

function i18n(key, params, spanWrapperProps) {
  if (rmlopts__WEBPACK_IMPORTED_MODULE_5___default.a && rmlopts__WEBPACK_IMPORTED_MODULE_5___default.a.others.lang && rmlopts__WEBPACK_IMPORTED_MODULE_5___default.a.others.lang[key]) {
    var span = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(i18n_react__WEBPACK_IMPORTED_MODULE_7___default.a.span, _extends({
      text: rmlopts__WEBPACK_IMPORTED_MODULE_5___default.a.others.lang[key]
    }, params)); // Predefined span wrapper props

    if (typeof spanWrapperProps === "string") {
      switch (spanWrapperProps) {
        case "maxWidth":
          spanWrapperProps = {
            style: {
              display: "inline-block",
              maxWidth: 200
            }
          };
          break;

        default:
          break;
      }
    }

    return spanWrapperProps ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", spanWrapperProps, span) : span;
  }

  return key;
}
/**
 * Get URL parameter of current url.
 *
 * @param {string} name The parameter name
 * @param {string} [url=window.location.href]
 * @returns {string|null}
 */

function urlParam(name) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(url);
  return results && results[1] || null;
}
/**
 * Execute a jQuery request with X-WP-Nonce header.
 *
 * @param {string} url The url appended to ".../wp-json/realmedialibrary/v1/"
 * @param {object} [settings] The options for jQuery.ajax
 * @param {string} [url='realmedialibrary/v1'] The API namespace
 * @returns Result of jQuery.ajax
 */

function ajax(url) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var urlNamespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "realmedialibrary/v1";
  var returnUrl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  /* global rml */
  var apiUrl = lil_uri__WEBPACK_IMPORTED_MODULE_8___default()(rmlopts__WEBPACK_IMPORTED_MODULE_5___default.a.restRoot);
  var windowProtocol = lil_uri__WEBPACK_IMPORTED_MODULE_8___default()(window.location.href).protocol(),
      query = apiUrl.query() || {},
      path = query.rest_route || apiUrl.path(),
      // Determine path from permalink settings
  usePath = trailingslashit(path) + trailingslashit(urlNamespace) + url;

  if (apiUrl.toString().indexOf("/") !== 0) {
    // Ignore full path
    windowProtocol === "https" && apiUrl.protocol("https"); // Set https if site url is SSL
  } // Set path depending on permalink settings


  if (query.rest_route) {
    query.rest_route = usePath;
  } else {
    apiUrl.path(usePath); // Set path
  } // Use global parameter (see https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/)


  if (WP_REST_API_USE_GLOBAL_METHOD && settings.method && settings.method.toUpperCase() !== "GET") {
    query._method = settings.method;
    settings.method = "POST";
  }

  var builtUrl = apiUrl.query(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend(true, {}, rmlopts__WEBPACK_IMPORTED_MODULE_5___default.a.restQuery, query)).build();

  if (returnUrl) {
    return builtUrl;
  }

  var promise = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend(true, settings, {
    url: builtUrl,
    headers: {
      "X-WP-Nonce": rmlopts__WEBPACK_IMPORTED_MODULE_5___default.a.restNonce
    }
  })),
      _url = url;
  urlNamespace.startsWith("realmedialibrary") && promise.fail(function (_ref) {
    var status = _ref.status;
    status === 405 && rml && rml.store && rml.store.setter(function (self) {
      self.methodNotAllowed405Endpoint = (settings && settings.method ? settings.method : "GET") + " " + _url;
    });
  });
  return promise;
}
/**
 * Handle tree node defaults for loaded folder items and new items.
 *
 * @param {object[]} folders The folders
 * @returns object[]
 */

function applyNodeDefaults(arr) {
  return arr.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name,
        cnt = _ref2.cnt,
        children = _ref2.children,
        contentCustomOrder = _ref2.contentCustomOrder,
        forceCustomOrder = _ref2.forceCustomOrder,
        lastOrderBy = _ref2.lastOrderBy,
        orderAutomatically = _ref2.orderAutomatically,
        lastSubOrderBy = _ref2.lastSubOrderBy,
        subOrderAutomatically = _ref2.subOrderAutomatically,
        rest = _objectWithoutProperties(_ref2, ["id", "name", "cnt", "children", "contentCustomOrder", "forceCustomOrder", "lastOrderBy", "orderAutomatically", "lastSubOrderBy", "subOrderAutomatically"]);

    return function (node) {
      // Update node
      switch (node.properties.type) {
        case 0:
          node.iconActive = "folder-open";
          break;

        case 1:
          node.icon = "collection";
          break;

        case 2:
          node.icon = "gallery";
          break;

        default:
          break;
      }
      /**
       * A tree node is fetched from the server and should be prepared
       * for the {@link module:store/TreeNode~TreeNode} class.
       *
       * @event module:util/hooks#tree/node
       * @param {object} node The node object
       */


      _hooks__WEBPACK_IMPORTED_MODULE_4__["default"].call("tree/node", [node]);
      return node;
    }(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend({}, react_aiot__WEBPACK_IMPORTED_MODULE_6__["TreeNode"].defaultProps, {
      // Default node
      id: id,
      title: name,
      icon: "folder",
      count: cnt,
      childNodes: children ? applyNodeDefaults(children) : [],
      properties: rest,
      className: {},
      contentCustomOrder: contentCustomOrder,
      forceCustomOrder: forceCustomOrder,
      lastOrderBy: lastOrderBy ? lastOrderBy : "",
      orderAutomatically: !!orderAutomatically,
      lastSubOrderBy: lastSubOrderBy ? lastSubOrderBy : "",
      subOrderAutomatically: !!subOrderAutomatically,
      $visible: true
    }));
  });
}
/**
 * Execute the REST query to fetch the category tree.
 *
 * @param {object} [settings] Additional options for jQuery.ajax
 * @returns {object} The original AJAX result and the tree result prepared for AIO
 */

function fetchTree(_x) {
  return _fetchTree.apply(this, arguments);
}
/**
 * Allows you to find an object path.
 *
 * @param {object} obj The object
 * @param {string} path The path
 * @returns {mixed|undefined}
 */

function _fetchTree() {
  _fetchTree = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(settings) {
    var _yield$ajax, tree, rest;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ajax("tree", settings);

          case 2:
            _yield$ajax = _context.sent;
            tree = _yield$ajax.tree;
            rest = _objectWithoutProperties(_yield$ajax, ["tree"]);

            if (!tree) {
              rml && rml.store && rml.store.setter(function (self) {
                self.methodMoved301Endpoint = true;
              });
            }

            return _context.abrupt("return", _objectSpread({
              tree: applyNodeDefaults(tree)
            }, rest));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchTree.apply(this, arguments);
}

function findDeep(obj, path) {
  var paths = path.split(".");
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }

  return current;
}
/**
 * Transform bytes to humand readable string.
 *
 * @param {int} bytes The bytes
 * @returns {string}
 * @see http://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable
 */

function humanFileSize(bytes) {
  var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  var units = si ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  var u = -1;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);

  return bytes.toFixed(1) + " " + units[u];
}
/**
 * Transform seconds to readable HH:mm:ss.
 *
 * @param {int} totalSec The seconds
 * @returns {string}
 */

function secondsFormat(totalSec) {
  var hours = Math.floor(totalSec / 3600),
      minutes = Math.floor((totalSec - hours * 3600) / 60),
      seconds = totalSec - hours * 3600 - minutes * 60;
  return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
}
/**
 * Export Data URI to blob instance.
 *
 * @param {string} sUri
 * @returns {Blob}
 */

function dataUriToBlob(sUri) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;

  if (sUri.split(",")[0].indexOf("base64") >= 0) {
    byteString = window.atob(sUri.split(",")[1]);
  } else {
    byteString = unescape(sUri.split(",")[1]);
  } // separate out the mime component


  var type = sUri.split(",")[0].split(":")[1].split(";")[0]; // write the bytes of the string to a typed array

  var ia = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new window.Blob([ia], {
    type: type
  });
}
/**
 * Detects if an element is in view port.
 *
 * @param {jQuery|HTMLElement} el
 * @returns {boolean}
 */

function inViewPort(el, allowFromBottom) {
  var elementTop = jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).offset().top,
      height = jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).outerHeight(),
      elementBottom = elementTop + height,
      viewportTop = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).scrollTop(),
      viewportBottom = viewportTop + jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).height();

  if (allowFromBottom && viewportTop > elementBottom - viewportTop) {
    return true;
  }

  return elementBottom > viewportTop && elementTop < viewportBottom;
}
/**
 * Check if Material WP is activated.
 *
 * @see https://codecanyon.net/item/material-wp-material-design-dashboard-theme/12981098
 * @returns {boolean}
 */

function isMaterialWp() {
  return jquery__WEBPACK_IMPORTED_MODULE_2___default()("body").hasClass("material-wp");
}

function materialWpWidthRules(calc) {
  return "width: -webkit-calc(" + calc + ") !important;" + "width: -moz-calc(" + calc + ") !important;" + "width: calc(" + calc + ") !important;";
}
/**
 * Resize handler for opposite when Material WP is active.
 *
 * @returns {boolean}
 */


function materialWpResizeOpposite(containerId, oppositeId, width, injectStyle) {
  var adminBarWidth = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#adminmenu").width();
  return injectStyle(containerId + "-styleOpposite", "@media only screen and (min-width: 1224px) {\n            body:not(.wp-customizer) #".concat(oppositeId, " {' +\n                ").concat(materialWpWidthRules("100% - " + width + "px - " + (adminBarWidth + 20) + "px"), "\n            }\n        }\n        @media only screen and (max-width: 1223px) and (min-width: 990px) {\n            body:not(.wp-customizer) #").concat(oppositeId, " {' +\n                ").concat(materialWpWidthRules("100% - " + width + "px - " + (adminBarWidth + 40) + "px"), "\n            }\n        }\n        @media only screen and (min-width: 700px) {\n          body.aiot-wp-material.activate-aiot .rml-container {\n        \tmargin-left: ").concat(adminBarWidth + 20, "px;\n          }\n        }\n        @media only screen and (max-width: 1223px) {\n          body.aiot-wp-material.activate-aiot .rml-container {\n            margin-left: ").concat(adminBarWidth + 40, "px;\n          }\n        }\n        body #wpcontent #wpbody #").concat(oppositeId, ".mwp-expanded {' +\n            ").concat(materialWpWidthRules("100% - " + width + "px - 50px"), "\n        }"));
}
/**
 * Get the next media modal z-index.
 *
 * @returns int
 */

function getMediaDialogNextZIndex() {
  // Beaver builder
  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("body").hasClass("fl-builder")
  /* Beaver Builder */
  || jquery__WEBPACK_IMPORTED_MODULE_2___default()("body").hasClass("et-fb")
  /* Divi Page Builder */
  ) {
      return 9999992;
    }

  return 160001;
}


/***/ }),

/***/ "./src/public/ts/util/wpRfc.jsx":
/*!**************************************!*\
  !*** ./src/public/ts/util/wpRfc.jsx ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./src/public/ts/util/hooks.jsx");
/* harmony import */ var _others_rfcShortcutInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../others/rfcShortcutInfo */ "./src/public/ts/others/rfcShortcutInfo.jsx");
/* harmony import */ var _others_rfcPreUploadUi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../others/rfcPreUploadUi */ "./src/public/ts/others/rfcPreUploadUi.jsx");
/**
 * The RML WP RFC functionality allows you to create callbacks for specific
 * elements defined in the DOM. For example you have to fallback to HTML output
 * like the CustomField in attachment browser.
 *
 * You can otherwise use the attribute data-wprfc-visible="1" then the RFC is called when
 * the elemen is visible. You do not have to append an additional script.
 *
 * @example <caption>PHP side component</caption>
 * <div class="rml-wprfc" data-wprfc="breadcrumb"></div>
 * <script>jQuery(function() { window.rml.hooks.call("wprfc"); });</script>
 * @example <caption>JS side</caption>
 * window.rml.hooks.register('wprfc/breadcrumb', () => { });
 * @module util/wpRfc
 * @see module:util/hooks#wprfc/$function
 */





var ready = function ready(fn) {
  return (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") ? fn() : document.addEventListener("DOMContentLoaded", fn);
};

var RFC_CLASS_NAME = "rml-wprfc";
/**
 * Interval visible rfc.
 */

ready(function () {
  var _fnSearch;

  (_fnSearch = function fnSearch() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-wprfc-visible="1"]').filter(':visible,input[type="hidden"]').removeClass(RFC_CLASS_NAME + "-visible").each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-wprfc-visible", "2");
      /**
       * A RML WP RFC is called and should be handled.
       *
       * @event module:util/hooks#wprfc/$function
       * @param {object} data The element data
       * @param {jQuery} $el The element
       */

      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].call("wprfc/" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-wprfc"), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
    setTimeout(_fnSearch, 500);
  })();
});
/**
 * Usual scripted rfc.
 */

_hooks__WEBPACK_IMPORTED_MODULE_1__["default"].register("wprfc", function () {
  return ready(function () {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()("." + RFC_CLASS_NAME).removeClass(RFC_CLASS_NAME).each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(":visible") && _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].call("wprfc/" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-wprfc"), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
  });
});

/***/ }),

/***/ "i18n-react":
/*!***************************************!*\
  !*** external "window['i18n-react']" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window['i18n-react'];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = mobx;

/***/ }),

/***/ "mobx-state-tree":
/*!********************************!*\
  !*** external "mobxStateTree" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = mobxStateTree;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-aiot":
/*!****************************!*\
  !*** external "ReactAIOT" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactAIOT;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "rmlopts":
/*!**************************!*\
  !*** external "rmlOpts" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rmlOpts;

/***/ }),

/***/ "wp":
/*!*********************!*\
  !*** external "wp" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp;

/***/ })

/******/ });
//# sourceMappingURL=rml.lite.js.map