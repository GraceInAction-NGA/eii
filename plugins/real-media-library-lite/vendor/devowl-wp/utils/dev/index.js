var devowlWp_utils =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpdevowlWp_utils"] = window["webpackJsonpdevowlWp_utils"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./lib/index.tsx","vendor~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/components/button.tsx":
/*!***********************************!*\
  !*** ./lib/components/button.tsx ***!
  \***********************************/
/*! exports provided: Button, ButtonType */
/*! exports used: Button, ButtonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ButtonType; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




var ButtonType;

(function (ButtonType) {
  ButtonType[ButtonType["Primary"] = 0] = "Primary";
  ButtonType[ButtonType["Secondary"] = 1] = "Secondary";
})(ButtonType || (ButtonType = {}));

var Button = function Button(_ref) {
  var className = _ref.className,
      type = _ref.type,
      children = _ref.children,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["className", "type", "children"]);

  var buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, {
    "button-primary": type === ButtonType.Primary,
    "button-secondary": type === ButtonType.Secondary || !type
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: buttonClassName
  }, rest), children);
};



/***/ }),

/***/ "./lib/components/index.tsx":
/*!**********************************!*\
  !*** ./lib/components/index.tsx ***!
  \**********************************/
/*! exports provided: Button, ButtonType, Notice, NoticeType */
/*! exports used: Button, ButtonType, Notice, NoticeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./lib/components/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice */ "./lib/components/notice.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _notice__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _notice__WEBPACK_IMPORTED_MODULE_1__["b"]; });




/***/ }),

/***/ "./lib/components/notice.tsx":
/*!***********************************!*\
  !*** ./lib/components/notice.tsx ***!
  \***********************************/
/*! exports provided: Notice, NoticeType */
/*! exports used: Notice, NoticeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NoticeType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


var NoticeType;

(function (NoticeType) {
  NoticeType["Error"] = "Error";
  NoticeType["Info"] = "Info";
  NoticeType["Success"] = "Success";
})(NoticeType || (NoticeType = {}));

var Notice = function Notice(_ref) {
  var type = _ref.type,
      children = _ref.children;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    notice: true,
    "notice-error": type === NoticeType.Error,
    "notice-info": type === NoticeType.Info,
    "notice-success": type === NoticeType.Success
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, children));
};



/***/ }),

/***/ "./lib/factory/ajax/commonRequest.tsx":
/*!********************************************!*\
  !*** ./lib/factory/ajax/commonRequest.tsx ***!
  \********************************************/
/*! exports provided: commonRequest */
/*! exports used: commonRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commonRequest; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./lib/factory/ajax/commonUrlBuilder.tsx");




/**
 * Build and execute a specific REST query.
 *
 * @see urlBuilder
 * @returns Result of REST API
 * @throws
 */

function commonRequest(_x) {
  return _commonRequest.apply(this, arguments);
}

function _commonRequest() {
  _commonRequest = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var location, options, routeRequest, params, _ref$settings, settings, url, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            location = _ref.location, options = _ref.options, routeRequest = _ref.request, params = _ref.params, _ref$settings = _ref.settings, settings = _ref$settings === void 0 ? {} : _ref$settings;
            url = Object(___WEBPACK_IMPORTED_MODULE_3__[/* commonUrlBuilder */ "d"])({
              location: location,
              params: params,
              nonce: false,
              options: options
            }); // Use global parameter (see https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/)

            if (___WEBPACK_IMPORTED_MODULE_3__[/* WP_REST_API_USE_GLOBAL_METHOD */ "c"] && location.method && location.method !== ___WEBPACK_IMPORTED_MODULE_3__[/* RouteHttpVerb */ "a"].GET) {
              settings.method = "POST";
            }

            _context.next = 5;
            return jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax(jquery__WEBPACK_IMPORTED_MODULE_2___default.a.extend(true, settings, {
              url: url,
              headers: {
                "X-WP-Nonce": options.restNonce
              },
              data: routeRequest
            }));

          case 5:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _commonRequest.apply(this, arguments);
}



/***/ }),

/***/ "./lib/factory/ajax/commonUrlBuilder.tsx":
/*!***********************************************!*\
  !*** ./lib/factory/ajax/commonUrlBuilder.tsx ***!
  \***********************************************/
/*! exports provided: WP_REST_API_USE_GLOBAL_METHOD, RouteHttpVerb, commonUrlBuilder, Url */
/*! exports used: RouteHttpVerb, Url, WP_REST_API_USE_GLOBAL_METHOD, commonUrlBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WP_REST_API_USE_GLOBAL_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteHttpVerb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return commonUrlBuilder; });
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-parse */ "../../node_modules/url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "b", function() { return url_parse__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./lib/helpers.tsx");



// Use _method instead of Http verb
var WP_REST_API_USE_GLOBAL_METHOD = true;
var RouteHttpVerb;

(function (RouteHttpVerb) {
  RouteHttpVerb["GET"] = "GET";
  RouteHttpVerb["POST"] = "POST";
  RouteHttpVerb["PUT"] = "PUT";
  RouteHttpVerb["DELETE"] = "DELETE";
})(RouteHttpVerb || (RouteHttpVerb = {}));

/**
 * Build an URL for a specific scheme.
 *
 * @param param0
 */
function commonUrlBuilder(_ref) {
  var location = _ref.location,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$nonce = _ref.nonce,
      nonce = _ref$nonce === void 0 ? true : _ref$nonce,
      options = _ref.options;
  var apiUrl = new url_parse__WEBPACK_IMPORTED_MODULE_0___default.a(options.restRoot, true);
  var query = apiUrl.query;
  var permalinkPath = query.rest_route || apiUrl.pathname; // Determine path from permalink settings
  // Find dynamic parameters from URL bindings (like /user/:id)

  var foundParams = [];
  var path = location.path.replace(/:([A-Za-z0-9-_]+)/g, function (match, group) {
    foundParams.push(group);
    return params[group];
  });
  var getParams = {}; // Find undeclared body params (which are not bind above) and add it to GET query

  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
    var checkParam = _Object$keys[_i];

    if (foundParams.indexOf(checkParam) === -1) {
      getParams[checkParam] = encodeURIComponent(params[checkParam]);
    }
  }

  var usePath = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[/* trailingslashit */ "a"])(permalinkPath) + Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[/* untrailingslashit */ "b"])(location.namespace || options.restNamespace) + path; // Force protocol from parent location

  var useThisProtocol = new url_parse__WEBPACK_IMPORTED_MODULE_0___default.a(window.location.href).protocol.slice(0, -1);
  apiUrl.set("protocol", useThisProtocol); // Set path depending on permalink settings

  if (query.rest_route) {
    query.rest_route = usePath; // eslint-disable-line @typescript-eslint/camelcase
  } else {
    apiUrl.set("pathname", usePath); // Set path
  } // Append others


  if (nonce && options.restNonce) {
    query._wpnonce = options.restNonce;
  }

  if (WP_REST_API_USE_GLOBAL_METHOD && location.method && location.method !== RouteHttpVerb.GET) {
    query._method = location.method;
  }

  return apiUrl.set("query", jquery__WEBPACK_IMPORTED_MODULE_1___default.a.extend(true, {}, options.restQuery, getParams, query)).toString();
}



/***/ }),

/***/ "./lib/factory/ajax/createRequestFactory.tsx":
/*!***************************************************!*\
  !*** ./lib/factory/ajax/createRequestFactory.tsx ***!
  \***************************************************/
/*! exports provided: createRequestFactory */
/*! exports used: createRequestFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRequestFactory; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./lib/factory/ajax/commonUrlBuilder.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./lib/factory/ajax/commonRequest.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * Create a uri builder and request function for your specific plugin depending
 * on the rest root and additional parameters.
 *
 * @param options
 * @see urlBuilder
 * @see request
 */

function createRequestFactory(options) {
  var urlBuilder = function urlBuilder(passOptions) {
    return Object(___WEBPACK_IMPORTED_MODULE_1__[/* commonUrlBuilder */ "d"])(_objectSpread({}, passOptions, {
      options: {
        restNamespace: options.restNamespace,
        restNonce: options.restNonce,
        restQuery: options.restQuery,
        restRoot: options.restRoot
      }
    }));
  };

  var request = function request(passOptions) {
    return Object(___WEBPACK_IMPORTED_MODULE_2__[/* commonRequest */ "a"])(_objectSpread({}, passOptions, {
      options: {
        restNamespace: options.restNamespace,
        restNonce: options.restNonce,
        restQuery: options.restQuery,
        restRoot: options.restRoot
      }
    }));
  };

  return {
    urlBuilder: urlBuilder,
    request: request
  };
}



/***/ }),

/***/ "./lib/factory/ajax/index.tsx":
/*!************************************!*\
  !*** ./lib/factory/ajax/index.tsx ***!
  \************************************/
/*! exports provided: WP_REST_API_USE_GLOBAL_METHOD, RouteHttpVerb, commonUrlBuilder, Url, commonRequest, createRequestFactory */
/*! exports used: RouteHttpVerb, Url, WP_REST_API_USE_GLOBAL_METHOD, commonRequest, commonUrlBuilder, createRequestFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _commonUrlBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonUrlBuilder */ "./lib/factory/ajax/commonUrlBuilder.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _commonUrlBuilder__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _commonUrlBuilder__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _commonUrlBuilder__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _commonUrlBuilder__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony import */ var _commonRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonRequest */ "./lib/factory/ajax/commonRequest.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _commonRequest__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _createRequestFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRequestFactory */ "./lib/factory/ajax/createRequestFactory.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _createRequestFactory__WEBPACK_IMPORTED_MODULE_2__["a"]; });





/***/ }),

/***/ "./lib/factory/context.tsx":
/*!*********************************!*\
  !*** ./lib/factory/context.tsx ***!
  \*********************************/
/*! exports provided: createContextFactory */
/*! exports used: createContextFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createContextFactory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* istanbul ignore next: no logic in this factory! */

/**
 * Create context relevant objects to use within React.
 *
 * @param object
 * @returns
 */

function createContextFactory(object) {
  /**
   * MobX stores collection
   */
  var StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(object);
  /**
   * MobX HOC to get the context via hook.
   *
   * @param children
   */

  var StoreProvider = function StoreProvider(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React.createElement(StoreContext.Provider, {
      value: object
    }, children);
  };
  /**
   * Get all the MobX stores via a single hook.
   */


  var useStores = function useStores() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StoreContext);
  };

  return {
    StoreContext: StoreContext,
    StoreProvider: StoreProvider,
    useStores: useStores
  };
}



/***/ }),

/***/ "./lib/factory/i18n.tsx":
/*!******************************!*\
  !*** ./lib/factory/i18n.tsx ***!
  \******************************/
/*! exports provided: createLocalizationFactory */
/*! exports used: createLocalizationFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocalizationFactory; });
/* harmony import */ var i18n_calypso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n-calypso */ "../../node_modules/i18n-calypso/dist/esm/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wp */ "wp");
/* harmony import */ var wp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wp__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// @see https://github.com/Automattic/wp-calypso/blob/master/packages/i18n-calypso/src/index.js



/**
 * Create multiple functions for a specific plugin so they can be localized.
 *
 * @param slug The slug which you have registered your i18n assets
 * @returns
 */

function createLocalizationFactory(slug) {
  var _ref = window,
      wpi18nLazy = _ref.wpi18nLazy;

  if (wpi18nLazy && wpi18nLazy[slug] && wp__WEBPACK_IMPORTED_MODULE_2___default.a && wp__WEBPACK_IMPORTED_MODULE_2___default.a.i18n) {
    var _iterator = _createForOfIteratorHelper(wpi18nLazy[slug]),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var localeData = _step.value;
        wp__WEBPACK_IMPORTED_MODULE_2___default.a.i18n.setLocaleData(localeData, slug);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  /**
   * Translates and retrieves the singular or plural form based on the supplied number.
   * For arguments sprintf is used, see http://www.diveintojavascript.com/projects/javascript-sprintf for
   * specification and usage.
   *
   * @see https://github.com/WordPress/gutenberg/tree/master/packages/i18n#_n
   * @see https://github.com/WordPress/gutenberg/tree/master/packages/i18n#sprintf
   */


  function _n(single, plural, count) {
    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    return _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"].apply(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__, [_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"](single, plural, count, slug)].concat(args));
  }
  /**
   * Translates and retrieves the singular or plural form based on the supplied number, with gettext context.
   * For arguments sprintf is used, see http://www.diveintojavascript.com/projects/javascript-sprintf for
   * specification and usage.
   *
   * @see https://github.com/WordPress/gutenberg/tree/master/packages/i18n#_n
   * @see https://github.com/WordPress/gutenberg/tree/master/packages/i18n#sprintf
   */


  function _nx(single, plural, count, context) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
      args[_key2 - 4] = arguments[_key2];
    }

    return _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"].apply(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__, [_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_nx"](single, plural, count, context, slug)].concat(args));
  }
  /**
   * Retrieve translated string with gettext context.
   * For arguments sprintf is used, see http://www.diveintojavascript.com/projects/javascript-sprintf for
   * specification and usage.
   *
   * @see https://github.com/WordPress/gutenberg/tree/master/packages/i18n#_n
   * @see https://github.com/WordPress/gutenberg/tree/master/packages/i18n#sprintf
   */


  function _x(single, context) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    return _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"].apply(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__, [_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"](single, context, slug)].concat(args));
  }
  /**
   * Retrieve the translation of text.
   * For arguments sprintf is used, see http://www.diveintojavascript.com/projects/javascript-sprintf for
   * specification and usage.
   *
   * @see https://github.com/WordPress/gutenberg/tree/master/packages/i18n#_n
   * @see https://github.com/WordPress/gutenberg/tree/master/packages/i18n#sprintf
   */


  function __(single) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"].apply(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__, [_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"](single, slug)].concat(args));
  }
  /**
   * This function allows you to interpolate react components to your translations.
   * You have to pass an already translated string as argument! For this you can use the other
   * i18n functions like _n() or __().
   *
   * A translation can look like this: "Hello {{a}}click me{{/a}}." and you have to pass
   * a component with key "a".
   */


  function _i(translation, components) {
    return i18n_calypso__WEBPACK_IMPORTED_MODULE_0__[/* translate */ "a"](translation, {
      components: components
    });
  }

  return {
    _n: _n,
    _nx: _nx,
    _x: _x,
    __: __,
    _i: _i
  };
}



/***/ }),

/***/ "./lib/factory/index.tsx":
/*!*******************************!*\
  !*** ./lib/factory/index.tsx ***!
  \*******************************/
/*! exports provided: createContextFactory, WP_REST_API_USE_GLOBAL_METHOD, RouteHttpVerb, commonUrlBuilder, Url, commonRequest, createRequestFactory, createLocalizationFactory */
/*! exports used: RouteHttpVerb, Url, WP_REST_API_USE_GLOBAL_METHOD, commonRequest, commonUrlBuilder, createContextFactory, createLocalizationFactory, createRequestFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./lib/factory/context.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax */ "./lib/factory/ajax/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ajax__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _ajax__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _ajax__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _ajax__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _ajax__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _ajax__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./lib/factory/i18n.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["a"]; });





/***/ }),

/***/ "./lib/helpers.tsx":
/*!*************************!*\
  !*** ./lib/helpers.tsx ***!
  \*************************/
/*! exports provided: untrailingslashit, trailingslashit */
/*! exports used: trailingslashit, untrailingslashit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return untrailingslashit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trailingslashit; });
var untrailingslashit = function untrailingslashit(str) {
  return str.endsWith("/") || str.endsWith("\\") ? untrailingslashit(str.slice(0, -1)) : str;
};

var trailingslashit = function trailingslashit(str) {
  return "".concat(untrailingslashit(str), "/");
}; // Allows to make an interface extension and make some properties optional (https://git.io/JeK6J)




/***/ }),

/***/ "./lib/index.tsx":
/*!***********************!*\
  !*** ./lib/index.tsx ***!
  \***********************/
/*! exports provided: BaseOptions, untrailingslashit, trailingslashit, createContextFactory, WP_REST_API_USE_GLOBAL_METHOD, RouteHttpVerb, commonUrlBuilder, Url, commonRequest, createRequestFactory, createLocalizationFactory, locationRestPluginGet, Button, ButtonType, Notice, NoticeType */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js");
/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(setimmediate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./lib/options.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseOptions", function() { return _options__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./lib/helpers.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untrailingslashit", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trailingslashit", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory */ "./lib/factory/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContextFactory", function() { return _factory__WEBPACK_IMPORTED_MODULE_3__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WP_REST_API_USE_GLOBAL_METHOD", function() { return _factory__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteHttpVerb", function() { return _factory__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonUrlBuilder", function() { return _factory__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return _factory__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonRequest", function() { return _factory__WEBPACK_IMPORTED_MODULE_3__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequestFactory", function() { return _factory__WEBPACK_IMPORTED_MODULE_3__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocalizationFactory", function() { return _factory__WEBPACK_IMPORTED_MODULE_3__["g"]; });

/* harmony import */ var _wp_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wp-api */ "./lib/wp-api/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationRestPluginGet", function() { return _wp_api__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./lib/components/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _components__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return _components__WEBPACK_IMPORTED_MODULE_5__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoticeType", function() { return _components__WEBPACK_IMPORTED_MODULE_5__["d"]; });

 // Polyfill for yielding







/***/ }),

/***/ "./lib/options.tsx":
/*!*************************!*\
  !*** ./lib/options.tsx ***!
  \*************************/
/*! exports provided: BaseOptions */
/*! exports used: BaseOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseOptions; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * See PHP file inc/Assets.php.
 */
var BaseOptions = /*#__PURE__*/function () {
  function BaseOptions() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseOptions);

    this.slug = void 0;
    this.textDomain = void 0;
    this.version = void 0;
    this.restUrl = void 0;
    this.restNamespace = void 0;
    this.restRoot = void 0;
    this.restQuery = void 0;
    this.restNonce = void 0;
    this.publicUrl = void 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseOptions, null, [{
    key: "slugCamelCase",

    /**
     * Convert a slug like "my-plugin" to "myPlugin". This can
     * be useful for library naming (window[""] is bad because the hyphens).
     *
     * @param slug
     * @returns
     */
    value: function slugCamelCase(slug) {
      return slug.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
    }
    /**
     * Get the slug from the current process (webpack) instead of the PHP plugin output.
     * For some cases you need to use that.
     *
     * @param env
     * @param camelCase
     */

  }, {
    key: "getPureSlug",
    value: function getPureSlug(env) {
      var camelCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return camelCase ? BaseOptions.slugCamelCase(env.slug) : env.slug;
    }
  }]);

  return BaseOptions;
}();



/***/ }),

/***/ "./lib/wp-api/index.tsx":
/*!******************************!*\
  !*** ./lib/wp-api/index.tsx ***!
  \******************************/
/*! exports provided: locationRestPluginGet */
/*! exports used: locationRestPluginGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rest_plugin_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest.plugin.get */ "./lib/wp-api/rest.plugin.get.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _rest_plugin_get__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./lib/wp-api/rest.plugin.get.tsx":
/*!****************************************!*\
  !*** ./lib/wp-api/rest.plugin.get.tsx ***!
  \****************************************/
/*! exports provided: locationRestPluginGet */
/*! exports used: locationRestPluginGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locationRestPluginGet; });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory */ "./lib/factory/ajax/commonUrlBuilder.tsx");

var locationRestPluginGet = {
  path: "/plugin",
  method: _factory__WEBPACK_IMPORTED_MODULE_0__[/* RouteHttpVerb */ "a"].GET
};

/***/ }),

/***/ "@wordpress/i18n":
/*!*****************************!*\
  !*** external "wp['i18n']" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = wp['i18n'];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "wp":
/*!*********************!*\
  !*** external "wp" ***!
  \*********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = wp;

/***/ })

/******/ });
