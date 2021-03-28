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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
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
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
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

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
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
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
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
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
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

module.exports = function(isValidElement, throwOnDirectAccess) {
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

  var ANONYMOUS = '<<anonymous>>';

  // Important!
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
    exact: createStrictShapeTypeChecker,
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
  }
  // Make `instanceof Error` still work for returned errors.
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
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
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
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
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
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
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
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
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
    switch (typeof propValue) {
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
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
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
  }

  // This handles more types than `getPropType`. Only used for error messages.
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
  }

  // Returns a string that is postfixed to a warning about an invalid type.
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
  }

  // Returns class name of the object, if any.
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

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
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

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
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





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
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
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-select/animated/dist/react-select.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-select/animated/dist/react-select.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default, Input, MultiValue, Placeholder, SingleValue, ValueContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiValue", function() { return MultiValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return Placeholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleValue", function() { return SingleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return ValueContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dist_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dist/utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _dist_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dist/index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");











function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow
var AnimatedInput = function AnimatedInput(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        appear = _ref.appear,
        enter = _ref.enter,
        exit = _ref.exit,
        props = _objectWithoutPropertiesLoose(_ref, ["in", "onExited", "appear", "enter", "exit"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
  };
};

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Fade = function Fade(_ref) {
  var Tag = _ref.component,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      inProp = _ref.in,
      onExited = _ref.onExited,
      props = _objectWithoutPropertiesLoose$1(_ref, ["component", "duration", "in", "onExited"]);

  var transition = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity " + duration + "ms"
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_9__["Transition"], {
    mountOnEnter: true,
    unmountOnExit: true,
    in: inProp,
    timeout: duration
  }, function (state) {
    var innerProps = {
      style: _extends({}, transition[state])
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      innerProps: innerProps
    }, props));
  });
}; // ==============================
// Collapse Transition
// ==============================

var collapseDuration = 260;
// wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM
var Collapse =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.duration = collapseDuration;
    _this.rafID = void 0;
    _this.state = {
      width: 'auto'
    };
    _this.transition = {
      exiting: {
        width: 0,
        transition: "width " + _this.duration + "ms ease-out"
      },
      exited: {
        width: 0
      }
    };

    _this.getWidth = function (ref) {
      if (ref && isNaN(_this.state.width)) {
        /*
          Here we're invoking requestAnimationFrame with a callback invoking our
          call to getBoundingClientRect and setState in order to resolve an edge case
          around portalling. Certain portalling solutions briefly remove children from the DOM
          before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
          while the Select component is in this state.
        */
        // cannot use `offsetWidth` because it is rounded
        _this.rafID = window.requestAnimationFrame(function () {
          var _ref$getBoundingClien = ref.getBoundingClientRect(),
              width = _ref$getBoundingClien.width;

          _this.setState({
            width: width
          });
        });
      }
    };

    _this.getStyle = function (width) {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: width
      };
    };

    _this.getTransition = function (state) {
      return _this.transition[state];
    };

    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.rafID) {
      window.cancelAnimationFrame(this.rafID);
    }
  } // width must be calculated; cannot transition from `undefined` to `number`
  ;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in;
    var width = this.state.width;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_9__["Transition"], {
      enter: false,
      mountOnEnter: true,
      unmountOnExit: true,
      in: inProp,
      timeout: this.duration
    }, function (state) {
      var style = _extends({}, _this2.getStyle(width), _this2.getTransition(state));

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: _this2.getWidth,
        style: style
      }, children);
    });
  };

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        props = _objectWithoutPropertiesLoose$2(_ref, ["in", "onExited"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends$1({
      cropWithEllipsis: inProp
    }, props)));
  };
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, _extends$2({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, _extends$3({
      component: WrappedComponent
    }, props));
  };
};

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

// make ValueContainer a transition group
var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_9__["TransitionGroup"], _extends$4({
      component: WrappedComponent
    }, props));
  };
};

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var makeAnimated = function makeAnimated(externalComponents) {
  if (externalComponents === void 0) {
    externalComponents = {};
  }

  var components = Object(_dist_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__["w"])({
    components: externalComponents
  });

  var Input = components.Input,
      MultiValue = components.MultiValue,
      Placeholder = components.Placeholder,
      SingleValue = components.SingleValue,
      ValueContainer = components.ValueContainer,
      rest = _objectWithoutPropertiesLoose$3(components, ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"]);

  return _extends$5({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
};

var AnimatedComponents = makeAnimated();
var Input = AnimatedComponents.Input;
var MultiValue = AnimatedComponents.MultiValue;
var Placeholder = AnimatedComponents.Placeholder;
var SingleValue = AnimatedComponents.SingleValue;
var ValueContainer = AnimatedComponents.ValueContainer;
var index = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(makeAnimated, _dist_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__["x"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/react-select/async/dist/react-select.browser.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-select/async/dist/react-select.browser.esm.js ***!
  \**************************************************************************/
/*! exports provided: default, defaultProps, makeAsyncSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncSelect", function() { return makeAsyncSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dist_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dist/utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _dist_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dist/index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony import */ var _dist_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dist/Select-9fdb8cd0.browser.esm.js */ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dist_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dist/stateManager-04f734a2.browser.esm.js */ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js");












function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var defaultProps = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null,
  isLoading: false
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Async, _Component);

    function Async(props) {
      var _this;

      _this = _Component.call(this) || this;
      _this.select = void 0;
      _this.lastRequest = void 0;
      _this.mounted = false;
      _this.optionsCache = {};

      _this.handleInputChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = Object(_dist_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["k"])(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      };

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    var _proto = Async.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      this.mounted = true;
      var defaultOptions = this.props.defaultOptions;
      var inputValue = this.state.inputValue;

      if (defaultOptions === true) {
        this.loadOptions(inputValue, function (options) {
          if (!_this2.mounted) return;
          var isLoading = !!_this2.lastRequest;

          _this2.setState({
            defaultOptions: options || [],
            isLoading: isLoading
          });
        });
      }
    };

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
      // if the cacheOptions prop changes, clear the cache
      if (nextProps.cacheOptions !== this.props.cacheOptions) {
        this.optionsCache = {};
      }

      if (nextProps.defaultOptions !== this.props.defaultOptions) {
        this.setState({
          defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
        });
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    _proto.focus = function focus() {
      this.select.focus();
    };

    _proto.blur = function blur() {
      this.select.blur();
    };

    _proto.loadOptions = function loadOptions(inputValue, callback) {
      var loadOptions = this.props.loadOptions;
      if (!loadOptions) return callback();
      var loader = loadOptions(inputValue, callback);

      if (loader && typeof loader.then === 'function') {
        loader.then(callback, function () {
          return callback();
        });
      }
    };

    _proto.render = function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          loadOptions = _this$props2.loadOptions,
          isLoadingProp = _this$props2.isLoading,
          props = _objectWithoutPropertiesLoose(_this$props2, ["loadOptions", "isLoading"]);

      var _this$state = this.state,
          defaultOptions = _this$state.defaultOptions,
          inputValue = _this$state.inputValue,
          isLoading = _this$state.isLoading,
          loadedInputValue = _this$state.loadedInputValue,
          loadedOptions = _this$state.loadedOptions,
          passEmptyOptions = _this$state.passEmptyOptions;
      var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
        ref: function ref(_ref) {
          _this3.select = _ref;
        },
        options: options,
        isLoading: isLoading || isLoadingProp,
        onInputChange: this.handleInputChange
      }));
    };

    return Async;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = defaultProps, _temp;
};
var SelectState = Object(_dist_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["m"])(_dist_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["S"]);
var Async = makeAsyncSelect(SelectState);

/* harmony default export */ __webpack_exports__["default"] = (Async);



/***/ }),

/***/ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: S, a, c, d, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mergeStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");








var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return option.label + " " + option.value;
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _extends({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref =  false ? undefined : {
  name: "1laao21-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFNIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxuY29uc3QgQTExeVRleHQgPSAocHJvcHM6IEVsZW1lbnRDb25maWc8J3NwYW4nPikgPT4gKFxuICAgIDxzcGFuXG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdhMTF5VGV4dCcsXG4gICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBMTF5VGV4dDtcbiJdfQ== */"
};

var A11yText = function A11yText(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", _extends$1({
    css: _ref
  }, props));
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function DummyInput(_ref) {
  var inProp = _ref.in,
      out = _ref.out,
      onExited = _ref.onExited,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      innerRef = _ref.innerRef,
      emotion = _ref.emotion,
      props = _objectWithoutPropertiesLoose(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("input", _extends$2({
    ref: innerRef
  }, props, {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"])({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGluOiBpblByb3AsXG4gIG91dCxcbiAgb25FeGl0ZWQsXG4gIGFwcGVhcixcbiAgZW50ZXIsXG4gIGV4aXQsXG4gIGlubmVyUmVmLFxuICBlbW90aW9uLFxuICAuLi5wcm9wc1xufTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY3NzPXt7XG4gICAgICAgIGxhYmVsOiAnZHVtbXlJbnB1dCcsXG4gICAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgICAgd2lkdGg6IDEsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgICAgbGVmdDogLTEwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NodeResolver, _Component);

  function NodeResolver() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NodeResolver.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.innerRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this));
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.innerRef(null);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

function _inheritsLoose$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var canUseDOM = !!( window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$1(ScrollLock, _Component);

  function ScrollLock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.originalStyles = {};
    _this.listenerOptions = {
      capture: false,
      passive: false
    };
    return _this;
  }

  var _proto = ScrollLock.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!canUseDOM) return;
    var _this$props = this.props,
        accountForScrollbars = _this$props.accountForScrollbars,
        touchScrollTarget = _this$props.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        _this2.originalStyles[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = adjustedPadding + "px";
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    if (!canUseDOM) return;
    var _this$props2 = this.props,
        accountForScrollbars = _this$props2.accountForScrollbars,
        touchScrollTarget = _this$props2.touchScrollTarget;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = _this3.originalStyles[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

function _inheritsLoose$2(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _ref$1 =  false ? undefined : {
  name: "1dsbpcp",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;",
  map: ""
};

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose$2(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      touchScrollTarget: null
    };

    _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    };

    _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    };

    return _this;
  }

  var _proto = ScrollBlock.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        isEnabled = _this$props.isEnabled;
    var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

    if (!isEnabled) return children;
    /*
     * Div
     * ------------------------------
     * blocks scrolling on non-body elements behind the menu
      * NodeResolver
     * ------------------------------
     * we need a reference to the scrollable element to "unlock" scroll on
     * mobile devices
      * ScrollLock
     * ------------------------------
     * actually does the scroll locking
     */

    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      onClick: this.blurSelectInput,
      css: _ref$1
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(NodeResolver, {
      innerRef: this.getScrollTarget
    }, children), touchScrollTarget ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(ScrollLock, {
      touchScrollTarget: touchScrollTarget
    }) : null);
  };

  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose$3(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$3(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.isBottom = false;
    _this.isTop = false;
    _this.scrollTarget = void 0;
    _this.touchStart = void 0;

    _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };

    _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    };

    _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    };

    _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    };

    _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    };

    _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    };

    return _this;
  }

  var _proto = ScrollCaptor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListening(this.scrollTarget);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListening(this.scrollTarget);
  };

  _proto.startListening = function startListening(el) {
    // bail early if no element is available to attach to
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.stopListening = function stopListening(el) {
    // all the if statements are to appease Flow 😢
    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('wheel', this.onWheel, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchstart', this.onTouchStart, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchmove', this.onTouchMove, false);
    }
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeResolver, {
      innerRef: this.getScrollTarget
    }, this.props.children);
  };

  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function ScrollCaptorSwitch(_ref) {
  var _ref$isEnabled = _ref.isEnabled,
      isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
      props = _objectWithoutPropertiesLoose$1(_ref, ["isEnabled"]);

  return isEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptor, props) : props.children;
}

var instructionsAriaMessage = function instructionsAriaMessage(event, context) {
  if (context === void 0) {
    context = {};
  }

  var _context = context,
      isSearchable = _context.isSearchable,
      isMulti = _context.isMulti,
      label = _context.label,
      isDisabled = _context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options" + (isDisabled ? '' : ', press Enter to select the currently focused option') + ", press Escape to exit the menu, press Tab to select the option and exit the menu.";

    case 'input':
      return (label ? label : 'Select') + " is focused " + (isSearchable ? ',type to refine list' : '') + ", press Down to open the menu, " + (isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option " + value + ", deselected.";

    case 'select-option':
      return isDisabled ? "option " + value + " is disabled. Select another option." : "option " + value + ", selected.";
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value " + getOptionLabel(focusedValue) + " focused, " + (selectValue.indexOf(focusedValue) + 1) + " of " + selectValue.length + ".";
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option " + getOptionLabel(focusedOption) + " focused" + (focusedOption.isDisabled ? ' disabled' : '') + ", " + (options.indexOf(focusedOption) + 1) + " of " + options.length + ".";
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "" + screenReaderMessage + (inputValue ? ' for search term ' + inputValue : '') + ".";
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var defaultStyles = {
  clearIndicator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["c"],
  container: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["a"],
  control: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["b"],
  dropdownIndicator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["d"],
  group: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["g"],
  groupHeading: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["e"],
  indicatorsContainer: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["i"],
  indicatorSeparator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["f"],
  input: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["h"],
  loadingIndicator: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["l"],
  loadingMessage: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["j"],
  menu: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["m"],
  menuList: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["k"],
  menuPortal: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["n"],
  multiValue: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["o"],
  multiValueLabel: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["p"],
  multiValueRemove: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["q"],
  noOptionsMessage: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["r"],
  option: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["s"],
  placeholder: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["t"],
  singleValue: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["u"],
  valueContainer: _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["v"]
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source, target) {
  if (target === void 0) {
    target = {};
  }

  // initialize with source styles
  var styles = _extends$3({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _inheritsLoose$4(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["i"])(),
  captureMenuScroll: !Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["i"])(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["d"])(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return count + " result" + (count !== 1 ? 's' : '') + " available";
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose$4(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _this = _Component.call(this, _props) || this;
    _this.state = {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.clearFocusValueOnUpdate = false;
    _this.commonProps = void 0;
    _this.components = void 0;
    _this.hasGroups = false;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.inputIsHiddenAfterUpdate = void 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.cacheComponents = function (components) {
      _this.components = Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["w"])({
        components: components
      });
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _extends$4({}, actionMeta, {
        name: name
      }));
    };

    _this.setValue = function (newValue, action, option) {
      if (action === void 0) {
        action = 'set-value';
      }

      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(selectValue, [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValue = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    };

    _this.popValue = function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValue = selectValue.slice(0, selectValue.length - 1);

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue.length ? newValue : null, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getOptionLabel = function (data) {
      return _this.props.getOptionLabel(data);
    };

    _this.getOptionValue = function (data) {
      return _this.props.getOptionValue(data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return _this.instancePrefix + "-" + element;
    };

    _this.getActiveDescendentId = function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    };

    _this.announceAriaLiveSelection = function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    };

    _this.announceAriaLiveContext = function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _extends$4({}, context, {
          label: _this.props['aria-label']
        }))
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["j"])(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    };

    _this.onInputFocus = function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    };

    _this.onKeyDown = function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.buildMenuOptions = function (props, selectValue) {
      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this.isOptionDisabled(option, selectValue);

        var isSelected = _this.isOptionSelected(option, selectValue);

        var label = _this.getOptionLabel(option);

        var value = _this.getOptionValue(option);

        if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this.selectOption(option);
        };
        var optionId = _this.getElementId('option') + "-" + id;
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this.hasGroups) _this.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, itemIndex + "-" + i);
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = _this.getElementId('group') + "-" + itemIndex;
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "" + itemIndex);

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    };

    var _value = _props.value;
    _this.cacheComponents = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.cacheComponents, _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"]).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["e"])(_value);

    _this.buildMenuOptions = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.buildMenuOptions, function (newArgs, lastArgs) {
      var _ref6 = newArgs,
          newProps = _ref6[0],
          newSelectValue = _ref6[1];
      var _ref7 = lastArgs,
          lastProps = _ref7[0],
          lastSelectValue = _ref7[1];
      return Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"])(newSelectValue, lastSelectValue) && Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"])(newProps.inputValue, lastProps.inputValue) && Object(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["x"])(newProps.options, lastProps.options);
    }).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
      render: [],
      focusable: []
    };

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  var _proto = Select.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.startListeningComposition();
    this.startListeningToTouch();

    if (this.props.closeMenuOnScroll && document && document.addEventListener) {
      // Listen to all scroll events, and filter them out inside of 'onScroll'
      document.addEventListener('scroll', this.onScroll, true);
    }

    if (this.props.autoFocus) {
      this.focusInput();
    }
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var _this$props8 = this.props,
        options = _this$props8.options,
        value = _this$props8.value,
        menuIsOpen = _this$props8.menuIsOpen,
        inputValue = _this$props8.inputValue; // re-cache custom components

    this.cacheComponents(nextProps.components); // rebuild the menu options

    if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
      var selectValue = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["e"])(nextProps.value);
      var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
        render: [],
        focusable: []
      };
      var focusedValue = this.getNextFocusedValue(selectValue);
      var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
      this.setState({
        menuOptions: menuOptions,
        selectValue: selectValue,
        focusedOption: focusedOption,
        focusedValue: focusedValue
      });
    } // some updates should toggle the state of the input visibility


    if (this.inputIsHiddenAfterUpdate != null) {
      this.setState({
        inputIsHidden: this.inputIsHiddenAfterUpdate
      });
      delete this.inputIsHiddenAfterUpdate;
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props9 = this.props,
        isDisabled = _this$props9.isDisabled,
        menuIsOpen = _this$props9.menuIsOpen;
    var isFocused = this.state.isFocused;

    if ( // ensure focus is restored correctly when the control becomes enabled
    isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
    isFocused && menuIsOpen && !prevProps.menuIsOpen) {
      this.focusInput();
    } // scroll the focused option into view if necessary


    if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
      Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this.menuListRef, this.focusedOptionRef);
      this.scrollToFocusedOptionOnUpdate = false;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stopListeningComposition();
    this.stopListeningToTouch();
    document.removeEventListener('scroll', this.onScroll, true);
  };

  // ==============================
  // Consumer Handlers
  // ==============================
  _proto.onMenuOpen = function onMenuOpen() {
    this.props.onMenuOpen();
  };

  _proto.onMenuClose = function onMenuClose() {
    var _this$props10 = this.props,
        isSearchable = _this$props10.isSearchable,
        isMulti = _this$props10.isMulti;
    this.announceAriaLiveContext({
      event: 'input',
      context: {
        isSearchable: isSearchable,
        isMulti: isMulti
      }
    });
    this.onInputChange('', {
      action: 'menu-close'
    });
    this.props.onMenuClose();
  };

  _proto.onInputChange = function onInputChange(newValue, actionMeta) {
    this.props.onInputChange(newValue, actionMeta);
  } // ==============================
  // Methods
  // ==============================
  ;

  _proto.focusInput = function focusInput() {
    if (!this.inputRef) return;
    this.inputRef.focus();
  };

  _proto.blurInput = function blurInput() {
    if (!this.inputRef) return;
    this.inputRef.blur();
  } // aliased for consumers
  ;

  _proto.openMenu = function openMenu(focusOption) {
    var _this2 = this;

    var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        isFocused = _this$state3.isFocused;
    var menuOptions = this.buildMenuOptions(this.props, selectValue);
    var isMulti = this.props.isMulti;
    var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

    if (!isMulti) {
      var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

      if (selectedIndex > -1) {
        openAtIndex = selectedIndex;
      }
    } // only scroll if the menu isn't already open


    this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
    this.inputIsHiddenAfterUpdate = false;
    this.setState({
      menuOptions: menuOptions,
      focusedValue: null,
      focusedOption: menuOptions.focusable[openAtIndex]
    }, function () {
      _this2.onMenuOpen();

      _this2.announceAriaLiveContext({
        event: 'menu'
      });
    });
  };

  _proto.focusValue = function focusValue(direction) {
    var _this$props11 = this.props,
        isMulti = _this$props11.isMulti,
        isSearchable = _this$props11.isSearchable;
    var _this$state4 = this.state,
        selectValue = _this$state4.selectValue,
        focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

    if (!isMulti) return;
    this.setState({
      focusedOption: null
    });
    var focusedIndex = selectValue.indexOf(focusedValue);

    if (!focusedValue) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'value'
      });
    }

    var lastIndex = selectValue.length - 1;
    var nextFocus = -1;
    if (!selectValue.length) return;

    switch (direction) {
      case 'previous':
        if (focusedIndex === 0) {
          // don't cycle from the start to the end
          nextFocus = 0;
        } else if (focusedIndex === -1) {
          // if nothing is focused, focus the last value first
          nextFocus = lastIndex;
        } else {
          nextFocus = focusedIndex - 1;
        }

        break;

      case 'next':
        if (focusedIndex > -1 && focusedIndex < lastIndex) {
          nextFocus = focusedIndex + 1;
        }

        break;
    }

    if (nextFocus === -1) {
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
    }

    this.setState({
      inputIsHidden: nextFocus !== -1,
      focusedValue: selectValue[nextFocus]
    });
  };

  _proto.focusOption = function focusOption(direction) {
    if (direction === void 0) {
      direction = 'first';
    }

    var pageSize = this.props.pageSize;
    var _this$state5 = this.state,
        focusedOption = _this$state5.focusedOption,
        menuOptions = _this$state5.menuOptions;
    var options = menuOptions.focusable;
    if (!options.length) return;
    var nextFocus = 0; // handles 'first'

    var focusedIndex = options.indexOf(focusedOption);

    if (!focusedOption) {
      focusedIndex = -1;
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }

    if (direction === 'up') {
      nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
    } else if (direction === 'down') {
      nextFocus = (focusedIndex + 1) % options.length;
    } else if (direction === 'pageup') {
      nextFocus = focusedIndex - pageSize;
      if (nextFocus < 0) nextFocus = 0;
    } else if (direction === 'pagedown') {
      nextFocus = focusedIndex + pageSize;
      if (nextFocus > options.length - 1) nextFocus = options.length - 1;
    } else if (direction === 'last') {
      nextFocus = options.length - 1;
    }

    this.scrollToFocusedOptionOnUpdate = true;
    this.setState({
      focusedOption: options[nextFocus],
      focusedValue: null
    });
    this.announceAriaLiveContext({
      event: 'menu',
      context: {
        isDisabled: isOptionDisabled(options[nextFocus])
      }
    });
  };

  // ==============================
  // Getters
  // ==============================
  _proto.getTheme = function getTheme() {
    // Use the default theme if there are no customizations.
    if (!this.props.theme) {
      return defaultTheme;
    } // If the theme prop is a function, assume the function
    // knows how to merge the passed-in default theme with
    // its own modifications.


    if (typeof this.props.theme === 'function') {
      return this.props.theme(defaultTheme);
    } // Otherwise, if a plain theme object was passed in,
    // overlay it with the default theme.


    return _extends$4({}, defaultTheme, this.props.theme);
  };

  _proto.getCommonProps = function getCommonProps() {
    var clearValue = this.clearValue,
        getStyles = this.getStyles,
        setValue = this.setValue,
        selectOption = this.selectOption,
        props = this.props;
    var classNamePrefix = props.classNamePrefix,
        isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
    var selectValue = this.state.selectValue;
    var hasValue = this.hasValue();

    var getValue = function getValue() {
      return selectValue;
    };

    var cx = _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["h"].bind(null, classNamePrefix);
    return {
      cx: cx,
      clearValue: clearValue,
      getStyles: getStyles,
      getValue: getValue,
      hasValue: hasValue,
      isMulti: isMulti,
      isRtl: isRtl,
      options: options,
      selectOption: selectOption,
      setValue: setValue,
      selectProps: props,
      theme: this.getTheme()
    };
  };

  _proto.getNextFocusedValue = function getNextFocusedValue(nextSelectValue) {
    if (this.clearFocusValueOnUpdate) {
      this.clearFocusValueOnUpdate = false;
      return null;
    }

    var _this$state6 = this.state,
        focusedValue = _this$state6.focusedValue,
        lastSelectValue = _this$state6.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

    if (lastFocusedIndex > -1) {
      var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

      if (nextFocusedIndex > -1) {
        // the focused value is still in the selectValue, return it
        return focusedValue;
      } else if (lastFocusedIndex < nextSelectValue.length) {
        // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
      }
    }

    return null;
  };

  _proto.getNextFocusedOption = function getNextFocusedOption(options) {
    var lastFocusedOption = this.state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
  };

  _proto.hasValue = function hasValue() {
    var selectValue = this.state.selectValue;
    return selectValue.length > 0;
  };

  _proto.hasOptions = function hasOptions() {
    return !!this.state.menuOptions.render.length;
  };

  _proto.countOptions = function countOptions() {
    return this.state.menuOptions.focusable.length;
  };

  _proto.isClearable = function isClearable() {
    var _this$props12 = this.props,
        isClearable = _this$props12.isClearable,
        isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
    // multi select, by default, IS clearable

    if (isClearable === undefined) return isMulti;
    return isClearable;
  };

  _proto.isOptionDisabled = function isOptionDisabled(option, selectValue) {
    return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
  };

  _proto.isOptionSelected = function isOptionSelected(option, selectValue) {
    var _this3 = this;

    if (selectValue.indexOf(option) > -1) return true;

    if (typeof this.props.isOptionSelected === 'function') {
      return this.props.isOptionSelected(option, selectValue);
    }

    var candidate = this.getOptionValue(option);
    return selectValue.some(function (i) {
      return _this3.getOptionValue(i) === candidate;
    });
  };

  _proto.filterOption = function filterOption(option, inputValue) {
    return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
  };

  _proto.formatOptionLabel = function formatOptionLabel(data, context) {
    if (typeof this.props.formatOptionLabel === 'function') {
      var inputValue = this.props.inputValue;
      var selectValue = this.state.selectValue;
      return this.props.formatOptionLabel(data, {
        context: context,
        inputValue: inputValue,
        selectValue: selectValue
      });
    } else {
      return this.getOptionLabel(data);
    }
  };

  _proto.formatGroupLabel = function formatGroupLabel(data) {
    return this.props.formatGroupLabel(data);
  } // ==============================
  // Mouse Handlers
  // ==============================
  ;

  // ==============================
  // Composition Handlers
  // ==============================
  _proto.startListeningComposition = function startListeningComposition() {
    if (document && document.addEventListener) {
      document.addEventListener('compositionstart', this.onCompositionStart, false);
      document.addEventListener('compositionend', this.onCompositionEnd, false);
    }
  };

  _proto.stopListeningComposition = function stopListeningComposition() {
    if (document && document.removeEventListener) {
      document.removeEventListener('compositionstart', this.onCompositionStart);
      document.removeEventListener('compositionend', this.onCompositionEnd);
    }
  };

  // ==============================
  // Touch Handlers
  // ==============================
  _proto.startListeningToTouch = function startListeningToTouch() {
    if (document && document.addEventListener) {
      document.addEventListener('touchstart', this.onTouchStart, false);
      document.addEventListener('touchmove', this.onTouchMove, false);
      document.addEventListener('touchend', this.onTouchEnd, false);
    }
  };

  _proto.stopListeningToTouch = function stopListeningToTouch() {
    if (document && document.removeEventListener) {
      document.removeEventListener('touchstart', this.onTouchStart);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  };

  // ==============================
  // Renderers
  // ==============================
  _proto.constructAriaLiveMessage = function constructAriaLiveMessage() {
    var _this$state7 = this.state,
        ariaLiveContext = _this$state7.ariaLiveContext,
        selectValue = _this$state7.selectValue,
        focusedValue = _this$state7.focusedValue,
        focusedOption = _this$state7.focusedOption;
    var _this$props13 = this.props,
        options = _this$props13.options,
        menuIsOpen = _this$props13.menuIsOpen,
        inputValue = _this$props13.inputValue,
        screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

    var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
      focusedValue: focusedValue,
      getOptionLabel: this.getOptionLabel,
      selectValue: selectValue
    }) : ''; // An aria live message representing the currently focused option in the select.

    var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
      focusedOption: focusedOption,
      getOptionLabel: this.getOptionLabel,
      options: options
    }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

    var resultsMsg = resultsAriaMessage({
      inputValue: inputValue,
      screenReaderMessage: screenReaderStatus({
        count: this.countOptions()
      })
    });
    return focusedValueMsg + " " + focusedOptionMsg + " " + resultsMsg + " " + ariaLiveContext;
  };

  _proto.renderInput = function renderInput() {
    var _this$props14 = this.props,
        isDisabled = _this$props14.isDisabled,
        isSearchable = _this$props14.isSearchable,
        inputId = _this$props14.inputId,
        inputValue = _this$props14.inputValue,
        tabIndex = _this$props14.tabIndex;
    var Input = this.components.Input;
    var inputIsHidden = this.state.inputIsHidden;
    var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

    var ariaAttributes = {
      'aria-autocomplete': 'list',
      'aria-label': this.props['aria-label'],
      'aria-labelledby': this.props['aria-labelledby']
    };

    if (!isSearchable) {
      // use a dummy input to maintain focus/blur functionality
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DummyInput, _extends$4({
        id: id,
        innerRef: this.getInputRef,
        onBlur: this.onInputBlur,
        onChange: _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["n"],
        onFocus: this.onInputFocus,
        readOnly: true,
        disabled: isDisabled,
        tabIndex: tabIndex,
        value: ""
      }, ariaAttributes));
    }

    var _this$commonProps = this.commonProps,
        cx = _this$commonProps.cx,
        theme = _this$commonProps.theme,
        selectProps = _this$commonProps.selectProps;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, _extends$4({
      autoCapitalize: "none",
      autoComplete: "off",
      autoCorrect: "off",
      cx: cx,
      getStyles: this.getStyles,
      id: id,
      innerRef: this.getInputRef,
      isDisabled: isDisabled,
      isHidden: inputIsHidden,
      onBlur: this.onInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.onInputFocus,
      selectProps: selectProps,
      spellCheck: "false",
      tabIndex: tabIndex,
      theme: theme,
      type: "text",
      value: inputValue
    }, ariaAttributes));
  };

  _proto.renderPlaceholderOrValue = function renderPlaceholderOrValue() {
    var _this4 = this;

    var _this$components = this.components,
        MultiValue = _this$components.MultiValue,
        MultiValueContainer = _this$components.MultiValueContainer,
        MultiValueLabel = _this$components.MultiValueLabel,
        MultiValueRemove = _this$components.MultiValueRemove,
        SingleValue = _this$components.SingleValue,
        Placeholder = _this$components.Placeholder;
    var commonProps = this.commonProps;
    var _this$props15 = this.props,
        controlShouldRenderValue = _this$props15.controlShouldRenderValue,
        isDisabled = _this$props15.isDisabled,
        isMulti = _this$props15.isMulti,
        inputValue = _this$props15.inputValue,
        placeholder = _this$props15.placeholder;
    var _this$state8 = this.state,
        selectValue = _this$state8.selectValue,
        focusedValue = _this$state8.focusedValue,
        isFocused = _this$state8.isFocused;

    if (!this.hasValue() || !controlShouldRenderValue) {
      return inputValue ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder, _extends$4({}, commonProps, {
        key: "placeholder",
        isDisabled: isDisabled,
        isFocused: isFocused
      }), placeholder);
    }

    if (isMulti) {
      var selectValues = selectValue.map(function (opt, index) {
        var isOptionFocused = opt === focusedValue;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiValue, _extends$4({}, commonProps, {
          components: {
            Container: MultiValueContainer,
            Label: MultiValueLabel,
            Remove: MultiValueRemove
          },
          isFocused: isOptionFocused,
          isDisabled: isDisabled,
          key: _this4.getOptionValue(opt),
          index: index,
          removeProps: {
            onClick: function onClick() {
              return _this4.removeValue(opt);
            },
            onTouchEnd: function onTouchEnd() {
              return _this4.removeValue(opt);
            },
            onMouseDown: function onMouseDown(e) {
              e.preventDefault();
              e.stopPropagation();
            }
          },
          data: opt
        }), _this4.formatOptionLabel(opt, 'value'));
      });
      return selectValues;
    }

    if (inputValue) {
      return null;
    }

    var singleValue = selectValue[0];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleValue, _extends$4({}, commonProps, {
      data: singleValue,
      isDisabled: isDisabled
    }), this.formatOptionLabel(singleValue, 'value'));
  };

  _proto.renderClearIndicator = function renderClearIndicator() {
    var ClearIndicator = this.components.ClearIndicator;
    var commonProps = this.commonProps;
    var _this$props16 = this.props,
        isDisabled = _this$props16.isDisabled,
        isLoading = _this$props16.isLoading;
    var isFocused = this.state.isFocused;

    if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
      return null;
    }

    var innerProps = {
      onMouseDown: this.onClearIndicatorMouseDown,
      onTouchEnd: this.onClearIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClearIndicator, _extends$4({}, commonProps, {
      innerProps: innerProps,
      isFocused: isFocused
    }));
  };

  _proto.renderLoadingIndicator = function renderLoadingIndicator() {
    var LoadingIndicator = this.components.LoadingIndicator;
    var commonProps = this.commonProps;
    var _this$props17 = this.props,
        isDisabled = _this$props17.isDisabled,
        isLoading = _this$props17.isLoading;
    var isFocused = this.state.isFocused;
    if (!LoadingIndicator || !isLoading) return null;
    var innerProps = {
      'aria-hidden': 'true'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingIndicator, _extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderIndicatorSeparator = function renderIndicatorSeparator() {
    var _this$components2 = this.components,
        DropdownIndicator = _this$components2.DropdownIndicator,
        IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

    if (!DropdownIndicator || !IndicatorSeparator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorSeparator, _extends$4({}, commonProps, {
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderDropdownIndicator = function renderDropdownIndicator() {
    var DropdownIndicator = this.components.DropdownIndicator;
    if (!DropdownIndicator) return null;
    var commonProps = this.commonProps;
    var isDisabled = this.props.isDisabled;
    var isFocused = this.state.isFocused;
    var innerProps = {
      onMouseDown: this.onDropdownIndicatorMouseDown,
      onTouchEnd: this.onDropdownIndicatorTouchEnd,
      'aria-hidden': 'true'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownIndicator, _extends$4({}, commonProps, {
      innerProps: innerProps,
      isDisabled: isDisabled,
      isFocused: isFocused
    }));
  };

  _proto.renderMenu = function renderMenu() {
    var _this5 = this;

    var _this$components3 = this.components,
        Group = _this$components3.Group,
        GroupHeading = _this$components3.GroupHeading,
        Menu = _this$components3.Menu,
        MenuList = _this$components3.MenuList,
        MenuPortal = _this$components3.MenuPortal,
        LoadingMessage = _this$components3.LoadingMessage,
        NoOptionsMessage = _this$components3.NoOptionsMessage,
        Option = _this$components3.Option;
    var commonProps = this.commonProps;
    var _this$state9 = this.state,
        focusedOption = _this$state9.focusedOption,
        menuOptions = _this$state9.menuOptions;
    var _this$props18 = this.props,
        captureMenuScroll = _this$props18.captureMenuScroll,
        inputValue = _this$props18.inputValue,
        isLoading = _this$props18.isLoading,
        loadingMessage = _this$props18.loadingMessage,
        minMenuHeight = _this$props18.minMenuHeight,
        maxMenuHeight = _this$props18.maxMenuHeight,
        menuIsOpen = _this$props18.menuIsOpen,
        menuPlacement = _this$props18.menuPlacement,
        menuPosition = _this$props18.menuPosition,
        menuPortalTarget = _this$props18.menuPortalTarget,
        menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
        noOptionsMessage = _this$props18.noOptionsMessage,
        onMenuScrollToTop = _this$props18.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
    if (!menuIsOpen) return null; // TODO: Internal Option Type here

    var render = function render(props) {
      // for performance, the menu options in state aren't changed when the
      // focused option changes so we calculate additional props based on that
      var isFocused = focusedOption === props.data;
      props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, _extends$4({}, commonProps, props, {
        isFocused: isFocused
      }), _this5.formatOptionLabel(props.data, 'menu'));
    };

    var menuUI;

    if (this.hasOptions()) {
      menuUI = menuOptions.render.map(function (item) {
        if (item.type === 'group') {
          var type = item.type,
              group = _objectWithoutPropertiesLoose$2(item, ["type"]);

          var headingId = item.key + "-heading";
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Group, _extends$4({}, commonProps, group, {
            Heading: GroupHeading,
            headingProps: {
              id: headingId
            },
            label: _this5.formatGroupLabel(item.data)
          }), item.options.map(function (option) {
            return render(option);
          }));
        } else if (item.type === 'option') {
          return render(item);
        }
      });
    } else if (isLoading) {
      var message = loadingMessage({
        inputValue: inputValue
      });
      if (message === null) return null;
      menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingMessage, commonProps, message);
    } else {
      var _message = noOptionsMessage({
        inputValue: inputValue
      });

      if (_message === null) return null;
      menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoOptionsMessage, commonProps, _message);
    }

    var menuPlacementProps = {
      minMenuHeight: minMenuHeight,
      maxMenuHeight: maxMenuHeight,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition,
      menuShouldScrollIntoView: menuShouldScrollIntoView
    };
    var menuElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["M"], _extends$4({}, commonProps, menuPlacementProps), function (_ref8) {
      var ref = _ref8.ref,
          _ref8$placerProps = _ref8.placerProps,
          placement = _ref8$placerProps.placement,
          maxHeight = _ref8$placerProps.maxHeight;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, _extends$4({}, commonProps, menuPlacementProps, {
        innerRef: ref,
        innerProps: {
          onMouseDown: _this5.onMenuMouseDown,
          onMouseMove: _this5.onMenuMouseMove
        },
        isLoading: isLoading,
        placement: placement
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptorSwitch, {
        isEnabled: captureMenuScroll,
        onTopArrive: onMenuScrollToTop,
        onBottomArrive: onMenuScrollToBottom
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollBlock, {
        isEnabled: menuShouldBlockScroll
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuList, _extends$4({}, commonProps, {
        innerRef: _this5.getMenuListRef,
        isLoading: isLoading,
        maxHeight: maxHeight
      }), menuUI))));
    }); // positioning behaviour is almost identical for portalled and fixed,
    // so we use the same component. the actual portalling logic is forked
    // within the component based on `menuPosition`

    return menuPortalTarget || menuPosition === 'fixed' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuPortal, _extends$4({}, commonProps, {
      appendTo: menuPortalTarget,
      controlElement: this.controlRef,
      menuPlacement: menuPlacement,
      menuPosition: menuPosition
    }), menuElement) : menuElement;
  };

  _proto.renderFormField = function renderFormField() {
    var _this6 = this;

    var _this$props19 = this.props,
        delimiter = _this$props19.delimiter,
        isDisabled = _this$props19.isDisabled,
        isMulti = _this$props19.isMulti,
        name = _this$props19.name;
    var selectValue = this.state.selectValue;
    if (!name || isDisabled) return;

    if (isMulti) {
      if (delimiter) {
        var value = selectValue.map(function (opt) {
          return _this6.getOptionValue(opt);
        }).join(delimiter);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: value
        });
      } else {
        var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            key: "i-" + i,
            name: name,
            type: "hidden",
            value: _this6.getOptionValue(opt)
          });
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: name,
          type: "hidden"
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, input);
      }
    } else {
      var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: name,
        type: "hidden",
        value: _value2
      });
    }
  };

  _proto.renderLiveRegion = function renderLiveRegion() {
    if (!this.state.isFocused) return null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A11yText, {
      "aria-live": "polite"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "aria-selection-event"
    }, "\xA0", this.state.ariaLiveSelection), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "aria-context"
    }, "\xA0", this.constructAriaLiveMessage()));
  };

  _proto.render = function render() {
    var _this$components4 = this.components,
        Control = _this$components4.Control,
        IndicatorsContainer = _this$components4.IndicatorsContainer,
        SelectContainer = _this$components4.SelectContainer,
        ValueContainer = _this$components4.ValueContainer;
    var _this$props20 = this.props,
        className = _this$props20.className,
        id = _this$props20.id,
        isDisabled = _this$props20.isDisabled,
        menuIsOpen = _this$props20.menuIsOpen;
    var isFocused = this.state.isFocused;
    var commonProps = this.commonProps = this.getCommonProps();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectContainer, _extends$4({}, commonProps, {
      className: className,
      innerProps: {
        id: id,
        onKeyDown: this.onKeyDown
      },
      isDisabled: isDisabled,
      isFocused: isFocused
    }), this.renderLiveRegion(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Control, _extends$4({}, commonProps, {
      innerRef: this.getControlRef,
      innerProps: {
        onMouseDown: this.onControlMouseDown,
        onTouchEnd: this.onControlTouchEnd
      },
      isDisabled: isDisabled,
      isFocused: isFocused,
      menuIsOpen: menuIsOpen
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueContainer, _extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderPlaceholderOrValue(), this.renderInput()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorsContainer, _extends$4({}, commonProps, {
      isDisabled: isDisabled
    }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
  };

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Select.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/index-4322c0ed.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: M, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MenuPlacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return containerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dropdownIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return groupHeadingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return indicatorSeparatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return groupCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return inputCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indicatorsContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loadingMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return menuListCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return menuPortalCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return multiValueCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return multiValueLabelCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiValueRemoveCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return noOptionsMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return optionCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return placeholderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return css$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return valueContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return defaultComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return exportedEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return components; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_6__);








function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["a"])(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["b"])(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["s"])(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["c"])(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"" + placement + "\".");
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _ref3[alignToControl(placement)] = '100%', _ref3.backgroundColor = colors.neutral0, _ref3.borderRadius = borderRadius, _ref3.boxShadow = '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)', _ref3.marginBottom = spacing.menuGutter, _ref3.marginTop = spacing.menuGutter, _ref3.position = 'absolute', _ref3.width = '100%', _ref3.zIndex = 1, _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(MenuPlacer, _Component);

  function MenuPlacer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _extends({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  var _proto = MenuPlacer.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return children({
      ref: this.getPlacement,
      placerProps: this.getUpdatedProps()
    });
  };

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
MenuPlacer.contextTypes = {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: baseUnit * 2 + "px " + baseUnit * 3 + "px",
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(MenuPortal, _Component2);

  function MenuPortal() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  var _proto2 = MenuPortal.prototype;

  _proto2.getChildContext = function getChildContext() {
    return {
      getPortalPlacement: this.getPortalPlacement
    };
  } // callback for occassions where the menu must "flip"
  ;

  _proto2.render = function render() {
    var _this$props2 = this.props,
        appendTo = _this$props2.appendTo,
        children = _this$props2.children,
        controlElement = _this$props2.controlElement,
        menuPlacement = _this$props2.menuPlacement,
        position = _this$props2.menuPosition,
        getStyles = _this$props2.getStyles;
    var isFixed = position === 'fixed'; // bail early if required elements aren't present

    if (!appendTo && !isFixed || !controlElement) {
      return null;
    }

    var placement = this.state.placement || coercePlacement(menuPlacement);
    var rect = Object(_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["g"])(controlElement);
    var scrollDistance = isFixed ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    var state = {
      offset: offset,
      position: position,
      rect: rect
    }; // same wrapper element whether fixed or portalled

    var menuWrapper = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: getStyles('menuPortal', state)
    }, children);
    return appendTo ? Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(menuWrapper, appendTo) : menuWrapper;
  };

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
MenuPortal.childContextTypes = {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$1({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: spacing.baseUnit / 2 + "px " + spacing.baseUnit * 2 + "px",
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _ref2 =  false ? undefined : {
  name: "19bqh2r",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1vblByb3BzLCBUaGVtZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHsgc2l6ZSwgLi4ucHJvcHMgfTogeyBzaXplOiBudW1iZXIgfSkgPT4gKFxuICA8c3ZnXG4gICAgaGVpZ2h0PXtzaXplfVxuICAgIHdpZHRoPXtzaXplfVxuICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDAsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBhbnkpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIiAvPlxuICA8L1N2Zz5cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgSW5kaWNhdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW46IE5vZGUsXG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufTtcblxuY29uc3QgYmFzZUNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogSW5kaWNhdG9yUHJvcHMpID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcblxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2Ryb3Bkb3duSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIFNlcGFyYXRvclN0YXRlID0geyBpc0Rpc2FibGVkOiBib29sZWFuIH07XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSAoe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBDb21tb25Qcm9wcyAmIFNlcGFyYXRvclN0YXRlKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gKHByb3BzOiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gKHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiB7XG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgc2l6ZTogbnVtYmVyLFxuICB0aGVtZTogVGhlbWUsXG59KSA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufSk7XG5cbnR5cGUgRG90UHJvcHMgPSB7IGRlbGF5OiBudW1iZXIsIG9mZnNldDogYm9vbGVhbiB9O1xuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogRG90UHJvcHMpID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0RvdEFuaW1hdGlvbnN9IDFzIGVhc2UtaW4tb3V0ICR7ZGVsYXl9bXMgaW5maW5pdGU7YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIExvYWRpbmdJY29uUHJvcHMgPSB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogYW55LFxuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuLFxuICAvKiogV2hldGhlciB0aGUgdGV4dCBpcyByaWdodCB0byBsZWZ0ICovXG4gIGlzUnRsOiBib29sZWFuLFxufSAmIENvbW1vblByb3BzICYge1xuICAgIC8qKiBTZXQgc2l6ZSBvZiB0aGUgY29udGFpbmVyLiAqL1xuICAgIHNpemU6IG51bWJlcixcbiAgfTtcbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gKHByb3BzOiBMb2FkaW5nSWNvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzLCBpc1J0bCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdsb2FkaW5nSW5kaWNhdG9yJywgcHJvcHMpfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAge1xuICAgICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezB9IG9mZnNldD17aXNSdGx9IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MTYwfSBvZmZzZXQgLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXszMjB9IG9mZnNldD17IWlzUnRsfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbkxvYWRpbmdJbmRpY2F0b3IuZGVmYXVsdFByb3BzID0geyBzaXplOiA0IH07XG4iXX0= */"
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["size"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", _extends$2({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, _extends$2({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, _extends$2({
    size: 20
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$2({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$2({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", _extends$2({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["default"])({
      animation: loadingDotAnimations + " 1s ease-in-out " + delay + "ms infinite;",
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? undefined : "")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$2({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 160,
    offset: true
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px " + colors.primary : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$3({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Heading, _extends$4({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutPropertiesLoose$1(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$4({
    css: getStyles('groupHeading', _extends$4({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutPropertiesLoose$2(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('input', _extends$5({
      theme: theme
    }, props))
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default.a, _extends$5({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", innerProps, children || Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["ClassNames"], null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Container, {
      data: data,
      innerProps: _extends$6({}, innerProps, {
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }),
      selectProps: selectProps
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Remove, {
      data: data,
      innerProps: _extends$6({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: spacing.baseUnit * 2 + "px " + spacing.baseUnit * 3 + "px",
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$7({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$8({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - " + spacing.baseUnit * 2 + "px)",
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends$9({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _extends$a({}, components, props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.browser.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.browser.esm.js ***!
  \********************************************************************/
/*! exports provided: components, createFilter, defaultTheme, mergeStyles, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__["y"]; });

/* harmony import */ var _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Select-9fdb8cd0.browser.esm.js */ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["m"]; });

/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stateManager-04f734a2.browser.esm.js */ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");














function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NonceProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.createEmotionCache = function (nonce) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_11__["default"])({
        nonce: nonce
      });
    };

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.createEmotionCache);
    return _this;
  }

  var _proto = NonceProvider.prototype;

  _proto.render = function render() {
    var emotionCache = this.createEmotionCache(this.props.nonce);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["CacheProvider"], {
      value: emotionCache
    }, this.props.children);
  };

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var index = Object(_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["m"])(_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["S"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return manageState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(StateManager, _Component);

    function StateManager() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    var _proto = StateManager.prototype;

    _proto.focus = function focus() {
      this.select.focus();
    };

    _proto.blur = function blur() {
      this.select.blur();
    } // FIXME: untyped flow code, return any
    ;

    _proto.getProp = function getProp(key) {
      return this.props[key] !== undefined ? this.props[key] : this.state[key];
    } // FIXME: untyped flow code, return any
    ;

    _proto.callProp = function callProp(name) {
      if (typeof this.props[name] === 'function') {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return (_this$props = this.props)[name].apply(_this$props, args);
      }
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          defaultInputValue = _this$props2.defaultInputValue,
          defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
          defaultValue = _this$props2.defaultValue,
          props = _objectWithoutPropertiesLoose(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
        ref: function ref(_ref) {
          _this2.select = _ref;
        },
        inputValue: this.getProp('inputValue'),
        menuIsOpen: this.getProp('menuIsOpen'),
        onChange: this.onChange,
        onInputChange: this.onInputChange,
        onMenuClose: this.onMenuClose,
        onMenuOpen: this.onMenuOpen,
        value: this.getProp('value')
      }));
    };

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = defaultProps, _temp;
};




/***/ }),

/***/ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, n, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScrollParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return animatedScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getBoundingClientObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isTouchCapable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return scrollTo; });
// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("" + applyPrefixToName(prefix, key));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to, duration, callback) {
  if (duration === void 0) {
    duration = 200;
  }

  if (callback === void 0) {
    callback = noop;
  }

  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}




/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./src/blocks/call2action/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/call2action/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/util */ "./src/libs/util.js");



var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    RichText = _wp$editor.RichText,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    MediaUpload = _wp$editor.MediaUpload,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    Panel = _wp$components.Panel,
    TreeSelect = _wp$components.TreeSelect,
    RadioControl = _wp$components.RadioControl,
    FontSizePicker = _wp$components.FontSizePicker,
    withFallbackStyles = _wp$components.withFallbackStyles,
    IconButton = _wp$components.IconButton,
    Dashicon = _wp$components.Dashicon,
    Toolbar = _wp$components.Toolbar;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
registerBlockType('download-manager/call2action', {
  title: 'Call To Action',
  description: 'Call To Action UI',
  keywords: [__('bootstrap jumbotron component'), __('call-to-action ui'), __('call2action')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].btnC2A(),
  category: 'wpdm-blocks',
  attributes: {
    actionType: {
      type: 'string',
      default: 'button'
    },
    title: {
      type: 'array',
      source: 'children',
      selector: '.title'
    },
    alignment: {
      type: 'string',
      default: 'center'
    },
    titleFontSize: {
      type: 'string',
      default: '20'
    },
    textFontSize: {
      type: 'string',
      default: '13'
    },
    buttonText: {
      type: 'array',
      source: 'children',
      selector: 'a',
      default: 'Call To Action'
    },
    buttonStyle: {
      type: 'string',
      default: 'btn btn-primary btn-lg'
    },
    buttonSize: {
      type: 'string',
      default: 'btn-lg'
    },
    link: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'href'
    },
    content: {
      type: 'array',
      source: 'children',
      selector: '.content'
    },
    buttonTextColor: {
      type: 'string',
      default: '#ffffff'
    },
    buttonBG: {
      type: 'string',
      default: '#333333'
    },
    ctaBG: {
      type: 'string',
      default: '#E9ECEF'
    },
    ctaBGx: {
      type: 'string',
      default: '#E9ECEF'
    },
    ctaBGAlpha: {
      type: 'string',
      default: '50'
    },
    bgCS1: {
      type: 'string',
      default: '0'
    },
    bgCS2: {
      type: 'string',
      default: '100'
    },
    gradAngle: {
      type: 'string',
      default: '45'
    },
    ctaBGImage: {
      type: 'string',
      default: null
    },
    ctaBGSize: {
      type: 'string',
      default: 'bg-cover'
    },
    ctaBGRepeat: {
      type: 'string',
      default: 'bg-no-repeat'
    },
    ctaBGImageID: {
      type: 'string',
      default: null
    },
    titleColor: {
      type: 'string',
      default: '#333333'
    },
    textColor: {
      type: 'string',
      default: '#333333'
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        content = attributes.content;

    var onChangeContent = function onChangeContent(newContent) {
      setAttributes({
        content: newContent
      });
    };

    var onChangeTitle = function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    };

    var onChangeAlignment = function onChangeAlignment(newAlignment) {
      setAttributes({
        alignment: newAlignment
      });
    };

    var onChangeButton = function onChangeButton(buttonText) {
      setAttributes({
        buttonText: buttonText
      });
    };

    var onSelectImage = function onSelectImage(img) {
      setAttributes({
        ctaBGImage: img.url
      });
    };

    var onRemoveImage = function onRemoveImage() {
      setAttributes({
        ctaBGImage: null //imgAlt: null,

      });
    };

    var fontSizes = [{
      name: __('Small'),
      slug: 'small',
      size: 12
    }, {
      name: __('Medium'),
      slug: 'small',
      size: 16
    }, {
      name: __('Big'),
      slug: 'small',
      size: 24
    }, {
      name: __('Extra Big'),
      slug: 'xbig',
      size: 32
    }];
    /* Default colors */

    var defaultColors = _libs_util__WEBPACK_IMPORTED_MODULE_2__["default"].defaultColor();
    var fallbackFontSize = 16;
    var colorPaletteControl = '';
    var tfz = attributes.titleFontSize + 'px';
    var xfz = attributes.textFontSize + 'px';
    var rgba1 = _libs_util__WEBPACK_IMPORTED_MODULE_2__["default"].hexToRgba(attributes.ctaBG, attributes.ctaBGAlpha);
    var rgba2 = _libs_util__WEBPACK_IMPORTED_MODULE_2__["default"].hexToRgba(attributes.ctaBGx, attributes.ctaBGAlpha);
    var cs1 = attributes.bgCS1 + "%";
    var cs2 = attributes.bgCS2 + "%";
    var overlay = "linear-gradient( " + attributes.gradAngle + "deg, " + rgba1 + " " + cs1 + ", " + rgba2 + " " + cs2 + "),";
    /* onchange functions */

    var onChangeButonTextColor = function onChangeButonTextColor(value) {
      return setAttributes({
        buttonTextColor: value
      });
    };

    var actionTypeEditHTML = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: attributes.link,
      className: attributes.buttonStyle,
      style: {
        background: attributes.buttonBG,
        color: attributes.buttonTextColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      placeholder: __('Call To Action'),
      onChange: onChangeButton,
      value: attributes.buttonText
    }));
    var actionTypeOutputHTML = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: attributes.link,
      className: attributes.buttonStyle,
      style: {
        background: attributes.buttonBG,
        color: attributes.buttonTextColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      placeholder: __('Call To Action'),
      value: attributes.buttonText
    }));

    if (attributes.actionType === 'search') {
      actionTypeEditHTML = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
        className: "text-center",
        method: "GET",
        action: attributes.link
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
        name: "s",
        style: {
          maxWidth: '100%',
          width: '500px',
          margin: '0px auto'
        },
        type: "text",
        className: "form-control input-lg",
        placeholder: "Search..."
      }));
      actionTypeOutputHTML = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
        className: "text-center",
        method: "GET",
        action: attributes.link
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
        name: "s",
        style: {
          maxWidth: '100%',
          width: '500px',
          margin: '0px auto'
        },
        type: "text",
        className: "form-control input-lg",
        placeholder: attributes.buttonText
      }));
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Action URL",
      help: 'Where to go when someone clicks the button',
      value: attributes.link,
      onChange: function onChange(value) {
        return setAttributes({
          link: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RadioControl, {
      label: "Action type",
      help: "The type of the current user",
      selected: attributes.actionType,
      options: [{
        label: 'Button',
        value: 'button'
      }, {
        label: 'Search',
        value: 'search'
      }],
      onChange: function onChange(actionType) {
        return setAttributes({
          actionType: actionType
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Text Alignment"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      value: attributes.alignment,
      onChange: onChangeAlignment
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Text Options')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Title Font Size"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FontSizePicker, {
      fontSizes: fontSizes,
      value: attributes.titleFontSize,
      fallbackFontSize: fallbackFontSize,
      onChange: function onChange(fontSize) {
        return setAttributes({
          titleFontSize: fontSize
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Text Font Size"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FontSizePicker, {
      fontSizes: fontSizes,
      value: attributes.textFontSize,
      fallbackFontSize: fallbackFontSize,
      onChange: function onChange(fontSize) {
        return setAttributes({
          textFontSize: fontSize
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Background Options'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel panel-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-heading"
    }, __('Background Color Left')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      disableAlpha: false,
      label: __('Background Color'),
      value: attributes.ctaBG,
      onChange: function onChange(value) {
        return setAttributes({
          ctaBG: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel panel-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-heading"
    }, __('Background Color Right')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      disableAlpha: false,
      label: __('Background Color'),
      value: attributes.ctaBGx,
      onChange: function onChange(value) {
        return setAttributes({
          ctaBGx: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel panel-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-heading"
    }, __('Select a background image:')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: attributes.ctaBGImage,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-cta-inspector-media",
          label: __('Edit image'),
          icon: "format-image",
          onClick: open
        }, __('Select Image')), attributes.ctaBGImage && !!attributes.ctaBGImage.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-cta-inspector-media",
          label: __('Remove Image'),
          icon: "dismiss",
          onClick: onRemoveImage
        }, __('Remove')));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Gradient Angle:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      value: attributes.gradAngle,
      onChange: function onChange(value) {
        return setAttributes({
          gradAngle: value
        });
      },
      min: -270,
      max: 360,
      step: 1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Opacity:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      value: attributes.ctaBGAlpha,
      onChange: function onChange(value) {
        return setAttributes({
          ctaBGAlpha: value
        });
      },
      min: 0,
      max: 100,
      step: 1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Color #1 Start:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      value: attributes.bgCS1,
      onChange: function onChange(value) {
        return setAttributes({
          bgCS1: value
        });
      },
      min: 0,
      max: 100,
      step: 1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Color #2 Start:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      value: attributes.bgCS2,
      onChange: function onChange(value) {
        return setAttributes({
          bgCS2: value
        });
      },
      min: 0,
      max: 100,
      step: 1
    })), attributes.ctaBGImage && !!attributes.ctaBGImage.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Background Size:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      value: attributes.ctaBGSize,
      onChange: function onChange(value) {
        return setAttributes({
          ctaBGSize: value
        });
      },
      options: [{
        label: 'Auto',
        value: 'bg-auto'
      }, {
        label: 'Cover',
        value: 'bg-cover'
      }, {
        label: 'Contain',
        value: 'bg-contain'
      }, {
        label: '100%',
        value: 'bg-100'
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Background Repeat:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      value: attributes.ctaBGRepeat,
      onChange: function onChange(value) {
        return setAttributes({
          ctaBGRepeat: value
        });
      },
      options: [{
        label: 'No Repeat',
        value: 'bg-no-repeat'
      }, {
        label: 'Repeat',
        value: 'bg-repeat'
      }, {
        label: 'Repeat X',
        value: 'bg-repeat-x'
      }, {
        label: 'Repeat Y',
        value: 'bg-repeat-y'
      }]
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: __('Button Text Color'),
      initialOpen: false,
      colorSettings: [{
        value: attributes.buttonTextColor,
        onChange: onChangeButonTextColor,
        label: __('Button Text Color'),
        colors: defaultColors
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: __('Button Background Color'),
      initialOpen: false,
      colorSettings: [{
        value: attributes.buttonBG,
        onChange: function onChange(buttonBG) {
          return setAttributes({
            buttonBG: buttonBG
          });
        },
        label: __('Button Background Color'),
        colors: defaultColors
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: __('Title Color'),
      initialOpen: false,
      colorSettings: [{
        value: attributes.titleColor,
        onChange: function onChange(titleColor) {
          return setAttributes({
            titleColor: titleColor
          });
        },
        label: __('Title Color'),
        colors: defaultColors
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: __('Text Color'),
      initialOpen: false,
      colorSettings: [{
        value: attributes.textColor,
        onChange: function onChange(textColor) {
          return setAttributes({
            textColor: textColor
          });
        },
        label: __('Text Color'),
        colors: defaultColors
      }]
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "jumbotron jumbotron-fluid " + attributes.ctaBGRepeat + " " + attributes.ctaBGSize,
      style: {
        background: overlay + " " + "url(" + attributes.ctaBGImage + ")"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        textAlign: attributes.alignment
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h1",
      className: "title",
      style: {
        color: attributes.titleColor,
        fontSize: tfz
      },
      placeholder: __('Title'),
      onChange: onChangeTitle,
      value: title
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div",
      className: "content",
      placeholder: __('Content'),
      onChange: onChangeContent,
      style: {
        color: attributes.textColor,
        fontSize: xfz
      },
      value: content
    }), actionTypeEditHTML)))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes,
        className = _ref3.className;
    var title = attributes.title,
        content = attributes.content;
    var actionTypeOutputHTML = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: attributes.link,
      className: attributes.buttonStyle,
      style: {
        background: attributes.buttonBG,
        color: attributes.buttonTextColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      placeholder: __('Call To Action'),
      value: attributes.buttonText
    }));

    if (attributes.actionType === 'search') {
      actionTypeOutputHTML = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
        className: "text-center",
        method: "GET",
        action: attributes.link
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
        name: "s",
        style: {
          maxWidth: '100%',
          width: '500px',
          margin: '0px auto'
        },
        type: "text",
        className: "form-control input-lg",
        placeholder: "Search..."
      }));
    }

    var tfz = attributes.titleFontSize + 'px';
    var xfz = attributes.textFontSize + 'px';
    var rgba1 = _libs_util__WEBPACK_IMPORTED_MODULE_2__["default"].hexToRgba(attributes.ctaBG, attributes.ctaBGAlpha);
    var rgba2 = _libs_util__WEBPACK_IMPORTED_MODULE_2__["default"].hexToRgba(attributes.ctaBGx, attributes.ctaBGAlpha);
    var cs1 = attributes.bgCS1 + "%";
    var cs2 = attributes.bgCS2 + "%";
    var overlay = "linear-gradient( " + attributes.gradAngle + "deg, " + rgba1 + " " + cs1 + ", " + rgba2 + " " + cs2 + "),";
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "jumbotron jumbotron-fluid " + attributes.ctaBGRepeat + " " + attributes.ctaBGSize,
      style: {
        background: overlay + " " + "url(" + attributes.ctaBGImage + ")"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        textAlign: attributes.alignment
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h1",
      className: "title",
      style: {
        color: attributes.titleColor,
        fontSize: tfz
      },
      value: title
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "div",
      className: "content",
      style: {
        color: attributes.textColor,
        fontSize: xfz
      },
      value: content
    }), actionTypeOutputHTML)));
  }
});

/***/ }),

/***/ "./src/blocks/category-cards/index.js":
/*!********************************************!*\
  !*** ./src/blocks/category-cards/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");
/* harmony import */ var _libs_columns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/columns */ "./src/libs/columns.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select/animated */ "./node_modules/react-select/animated/dist/react-select.browser.esm.js");
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/util */ "./src/libs/util.js");







var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody;
var registerBlockType = wp.blocks.registerBlockType;
var withState = wp.compose.withState;
var __ = wp.i18n.__;
var animatedComponents = Object(react_select_animated__WEBPACK_IMPORTED_MODULE_5__["default"])();
registerBlockType('download-manager/category-blocks', {
  title: 'Category Cards',
  description: 'Download Manager Category Cards',
  keywords: [__('download manager digital ecommerce store product sell'), __('file manager'), __('product category categories')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].theCat(),
  category: 'wpdm-blocks',
  attributes: {
    cats: {
      type: 'string',
      default: ""
    },
    cols: {
      type: 'string',
      default: "3"
    },
    button_color: {
      type: 'string',
      default: "rgb(0, 115, 255)"
    },
    hover_color: {
      type: 'string',
      default: "rgb(0, 115, 255)"
    },
    template: {
      type: 'string',
      default: ''
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    function onChangeTemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    }

    function onSelectCategory(categories) {
      console.log(categories);
      var selected_cats = [];
      jQuery.each(categories, function (index, category) {
        selected_cats.push(category.value);
      });
      console.log(selected_cats.join(','));
      setAttributes({
        cats: selected_cats.join(',')
      });
    }

    function selectedCats(cats) {
      var selected_cats = [];
      cats = cats.split(',');
      jQuery.each(wpdm_categories, function (index, category) {
        if (cats.indexOf(category.value) !== -1) {
          selected_cats.push(category);
        }
      });
      return selected_cats;
    }
    /* Default colors */


    var defaultColors = _libs_util__WEBPACK_IMPORTED_MODULE_6__["default"].defaultColor();
    console.log(attributes);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Include Categories:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "categories",
      name: "categories",
      closeMenuOnSelect: false,
      components: animatedComponents,
      defaultValue: selectedCats(attributes.cats),
      isMulti: true,
      options: wpdm_categories,
      onChange: function onChange(categories) {
        return onSelectCategory(categories);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Columns:",
      value: attributes.cols,
      class: "form-control wpdm-custom-select",
      options: [{
        label: "4 columns",
        value: 4
      }, {
        label: "3 columns",
        value: 3
      }, {
        label: "2 columns",
        value: 2
      }, {
        label: '1 column',
        value: 1
      }],
      onChange: function onChange(cols) {
        return setAttributes({
          cols: cols
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Template:",
      value: attributes.template,
      class: "form-control wpdm-custom-select",
      options: [{
        label: "Default",
        value: 'default'
      }],
      onChange: function onChange(template) {
        return setAttributes({
          template: template
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: __('Button Color'),
      initialOpen: false,
      colorSettings: [{
        value: attributes.button_color,
        onChange: function onChange(button_color) {
          return setAttributes({
            button_color: button_color
          });
        },
        label: __('Border Color'),
        colors: defaultColors
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: __('Hover Color'),
      initialOpen: false,
      colorSettings: [{
        value: attributes.hover_color,
        onChange: function onChange(hover_color) {
          return setAttributes({
            hover_color: hover_color
          });
        },
        label: __('Hover Color'),
        colors: defaultColors
      }]
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "download-manager/category-blocks",
      attributes: attributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/category/index.js":
/*!**************************************!*\
  !*** ./src/blocks/category/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");
/* harmony import */ var _libs_link_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/link-templates */ "./src/libs/link-templates.js");
/* harmony import */ var _libs_columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/columns */ "./src/libs/columns.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select/animated */ "./node_modules/react-select/animated/dist/react-select.browser.esm.js");






var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody;
var registerBlockType = wp.blocks.registerBlockType;
var withState = wp.compose.withState;
var __ = wp.i18n.__;
var animatedComponents = Object(react_select_animated__WEBPACK_IMPORTED_MODULE_5__["default"])();
registerBlockType('download-manager/category', {
  title: 'Categories',
  description: 'Download Manager Category',
  keywords: [__('download manager digital ecommerce store product sell'), __('file manager'), __('product category categories')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].catIcon(),
  category: 'wpdm-blocks',
  attributes: {
    cats: {
      type: 'string',
      default: ""
    },
    title: {
      type: 'string',
      default: ""
    },
    desc: {
      type: 'string',
      default: ""
    },
    items_per_page: {
      type: 'string',
      default: "10"
    },
    toolbar: {
      type: 'string',
      default: '1'
    },
    paging: {
      type: 'string',
      default: "1"
    },
    cols: {
      type: 'string',
      default: "1"
    },
    colspad: {
      type: 'string',
      default: "1"
    },
    colsphone: {
      type: 'string',
      default: "1"
    },
    orderby: {
      type: 'string',
      default: ""
    },
    order: {
      type: 'string',
      default: ""
    },
    async: {
      type: 'string',
      default: "1"
    },
    template: {
      type: 'string',
      default: 'link-template-panel'
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    function onChangeTemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    }

    function onSelectCategory(categories) {
      console.log(categories);
      var selected_cats = [];
      jQuery.each(categories, function (index, category) {
        selected_cats.push(category.value);
      });
      console.log(selected_cats.join(','));
      setAttributes({
        cats: selected_cats.join(',')
      });
    }

    function selectedCats(cats) {
      var selected_cats = [];
      cats = cats.split(',');
      jQuery.each(wpdm_categories, function (index, category) {
        if (cats.indexOf(category.value) !== -1) {
          selected_cats.push(category);
        }
      });
      return selected_cats;
    }

    function onChangeCols(cols) {
      if (cols.cols !== undefined) setAttributes({
        cols: cols.cols
      });
      if (cols.colspad !== undefined) setAttributes({
        colspad: cols.colspad
      });
      if (cols.colsphone !== undefined) setAttributes({
        colsphone: cols.colsphone
      });
      console.log(cols);
    }

    console.log(attributes);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Include Categories:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "categories",
      name: "categories",
      closeMenuOnSelect: false,
      components: animatedComponents,
      defaultValue: selectedCats(attributes.cats),
      isMulti: true,
      options: wpdm_categories,
      onChange: function onChange(categories) {
        return onSelectCategory(categories);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Toolbar:",
      value: attributes.toolbar,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Extended Toolbar',
        value: 1
      }, {
        label: 'Compact Toolbar',
        value: 'skinny'
      }, {
        label: "Hide Toolbar",
        value: 0
      }],
      onChange: function onChange(toolbar) {
        return setAttributes({
          toolbar: toolbar
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Title:",
      value: attributes.title,
      onChange: function onChange(text) {
        return setAttributes({
          title: text
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
      label: "Description:",
      value: attributes.desc,
      onChange: function onChange(text) {
        return setAttributes({
          desc: text
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Items Par Page:",
      type: "number",
      value: attributes.items_per_page,
      onChange: function onChange(items_per_page) {
        return setAttributes({
          items_per_page: items_per_page
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_libs_link_templates__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Link Template:",
      value: attributes.template,
      onChange: onChangeTemplate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Pagination:",
      value: attributes.paging,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Show',
        value: 1
      }, {
        label: "Hide",
        value: 0
      }],
      onChange: function onChange(paging) {
        return setAttributes({
          paging: paging
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_libs_columns__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Columns:",
      cols: attributes.cols,
      colspad: attributes.colspad,
      colsphone: attributes.colsphone,
      onChange: onChangeCols
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Asynchronous Request:",
      value: attributes.async,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Enabled',
        value: 1
      }, {
        label: "Disabled",
        value: 0
      }],
      onChange: function onChange(async) {
        return setAttributes({
          async: async
        });
      }
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "download-manager/category",
      attributes: attributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/dashboard/index.js":
/*!***************************************!*\
  !*** ./src/blocks/dashboard/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select/animated */ "./node_modules/react-select/animated/dist/react-select.browser.esm.js");




var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    FormToggle = _wp$components.FormToggle,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    IconButton = _wp$components.IconButton;
var __ = wp.i18n.__;
var animatedComponents = Object(react_select_animated__WEBPACK_IMPORTED_MODULE_3__["default"])();
registerBlockType('download-manager/dashboard', {
  title: 'Dashboard',
  description: 'Download Manager User Dashboard',
  keywords: [__('download manager signup form digital ecommerce store product sell'), __('file manager'), __('login signin form')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].dashboard(),
  category: 'wpdm-blocks',
  attributes: {
    logo: {
      type: 'string',
      default: ''
    },
    recommended: {
      type: 'string',
      default: 'recent'
    },
    fav: {
      type: 'integer',
      default: 1
    },
    note_before: {
      type: 'string',
      default: ''
    },
    note_after: {
      type: 'string',
      default: ''
    },
    regurl: {
      type: 'string',
      default: ''
    },
    redirect: {
      type: 'string',
      default: ''
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;
    var _recommend = wpdm_categories;

    if (_recommend[1].value !== 'recent') {
      _recommend.unshift({
        label: 'Recent Item',
        value: 'recent'
      });

      _recommend.unshift({
        label: 'Hide',
        value: ''
      });
    }

    function onSelectCategory(category) {
      setAttributes({
        recommended: category.value
      });
    }

    function selectedCategory(category) {
      jQuery.each(_recommend, function (index, _category) {
        if (_category.value === category) {
          return _category;
        }
      });
      return null;
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Recommend:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "recommended",
      name: "recommended",
      dashboard: true,
      components: animatedComponents,
      defaultValue: selectedCategory(attributes.recommend),
      options: _recommend,
      onChange: function onChange(recommend) {
        return onSelectCategory(recommend);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormToggle, {
      id: "fav",
      checked: attributes.fav,
      onChange: function onChange(fav) {
        setAttributes({
          fav: fav.target.checked
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "fav",
      style: {
        paddingLeft: "5px"
      }
    }, " Show Favourites"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Login Form Options')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Redirect URL ( Optional )",
      help: 'Where you want to redirect user after login',
      value: attributes.redirect,
      onChange: function onChange(url) {
        return setAttributes({
          redirect: url
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Signup Page URL ( Optional )",
      help: 'If you have multiple signup page, you can specify one here',
      value: attributes.redirect,
      onChange: function onChange(url) {
        return setAttributes({
          redirect: url
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Login Form Notes')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Before Form:",
      help: 'Write if you have any special instructions',
      value: attributes.note_before,
      onChange: function onChange(note_before) {
        return setAttributes({
          note_before: note_before
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "After Form:",
      help: 'Write if you have any special instructions',
      value: attributes.note_after,
      onChange: function onChange(note_after) {
        return setAttributes({
          note_after: note_after
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Login Form Logo:')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(img) {
        setAttributes({
          logo: img.url
        });
      },
      type: "image",
      value: attributes.logo,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-cta-inspector-media",
          label: __('Edit image'),
          icon: "format-image",
          onClick: open
        }, __('Select Image')), attributes.logo && !!attributes.logo.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          style: {
            margin: "10px 0",
            height: "128px",
            width: 'auto'
          },
          src: attributes.logo
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-cta-inspector-media",
          label: __('Remove Image'),
          icon: "dismiss",
          onClick: function onClick() {
            setAttributes({
              logo: ''
            });
          }
        }, __('Remove'))));
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "download-manager/dashboard",
      attributes: attributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/datatable/index.js":
/*!***************************************!*\
  !*** ./src/blocks/datatable/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");
/* harmony import */ var _libs_link_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/link-templates */ "./src/libs/link-templates.js");
/* harmony import */ var _libs_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/sortable */ "./src/libs/sortable.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select/animated */ "./node_modules/react-select/animated/dist/react-select.browser.esm.js");







var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    FormToggle = _wp$components.FormToggle,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody;
var registerBlockType = wp.blocks.registerBlockType;
var withState = wp.compose.withState;
var __ = wp.i18n.__;
var animatedComponents = Object(react_select_animated__WEBPACK_IMPORTED_MODULE_6__["default"])();
registerBlockType('download-manager/datatable', {
  title: 'All Downloads Table',
  description: 'List all downloads in a searchable and sortable table',
  keywords: [__('download manager digital ecommerce store product sell'), __('file manager'), __('product category categories')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].table(),
  category: 'wpdm-blocks',
  attributes: {
    login: {
      type: 'boolean',
      default: false
    },
    categories: {
      type: 'string',
      default: ""
    },
    include_children: {
      type: 'boolean',
      default: false
    },
    operator: {
      type: 'string',
      default: "IN"
    },
    xcats: {
      type: 'string',
      default: ""
    },
    tag: {
      type: 'string',
      default: ""
    },
    tag__not_in: {
      type: 'string',
      default: ""
    },
    author: {
      type: 'string',
      default: ""
    },
    author__not_in: {
      type: 'string',
      default: ""
    },
    items_per_page: {
      type: 'string',
      default: "10"
    },
    toolbar: {
      type: 'string',
      default: '1'
    },
    paging: {
      type: 'string',
      default: "1"
    },
    cols: {
      type: 'string',
      default: ""
    },
    colheads: {
      type: 'string',
      default: ""
    },
    orderby: {
      type: 'string',
      default: ""
    },
    order: {
      type: 'string',
      default: ""
    },
    async: {
      type: 'string',
      default: "1"
    },
    template: {
      type: 'string',
      default: 'link-template-panel'
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    function onChangeTemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    }

    function onSelectCategory(categories) {
      var selected_cats = [];
      jQuery.each(categories, function (index, category) {
        selected_cats.push(category.value);
      });
      console.log(selected_cats.join(','));
      setAttributes({
        categories: selected_cats.join(',')
      });
    }

    function onExcludeCategory(categories) {
      var selected_cats = [];
      jQuery.each(categories, function (index, category) {
        selected_cats.push(category.value);
      });
      console.log(selected_cats.join(','));
      setAttributes({
        xcats: selected_cats.join(',')
      });
    }

    function selectedCats(cats) {
      var selected_cats = [];
      cats = cats.split(',');
      jQuery.each(wpdm_categories, function (index, category) {
        if (cats.indexOf(category.value) !== -1) {
          selected_cats.push(category);
        }
      });
      return selected_cats;
    }

    function updateColumns(columns) {
      var cols = [];
      var colheads = [];
      console.log(columns);
      jQuery.each(columns, function (index, column) {
        cols.push(column.field);
        colheads.push(column.label);
      });
      setAttributes({
        cols: cols.join('|'),
        colheads: colheads.join('|')
      });
    }

    function _delete(columns) {
      var cols = [];
      var colheads = [];
      console.log(columns);
      jQuery.each(columns, function (index, column) {
        cols.push(column.field);
        colheads.push(column.label);
      });
      setAttributes({
        cols: cols.join('|'),
        colheads: colheads.join('|')
      });
    }

    function prepareColumns() {
      var columnsDefaults = [{
        label: 'Title',
        field: 'title'
      }, {
        label: 'Category',
        field: 'categories'
      }, {
        label: 'Update Date',
        field: 'update_date'
      }, {
        label: 'Tags',
        field: 'tags'
      }, {
        label: 'Action',
        field: 'action_buttons'
      }];
      var columns = [];
      var cols = attributes.cols.split('|');
      var colheads = attributes.colheads.split('|');
      jQuery.each(cols, function (index, column) {
        columns.push({
          label: colheads[index],
          field: column
        });
      });
      if (columns.length === 0) columns = columnsDefaults;
      return columns;
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormToggle, {
      id: "login",
      checked: attributes.login,
      onChange: function onChange(login) {
        setAttributes({
          login: login.target.checked
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "login",
      style: {
        paddingLeft: "5px"
      }
    }, " Members Only Access"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Table Columns"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_libs_sortable__WEBPACK_IMPORTED_MODULE_3__["default"], {
      list: prepareColumns(),
      onDelete: _delete,
      onUpdate: updateColumns
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Query Options"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Include Categories:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "categories",
      name: "categories",
      closeMenuOnSelect: false,
      components: animatedComponents,
      defaultValue: selectedCats(attributes.categories),
      isMulti: true,
      options: wpdm_categories,
      onChange: function onChange(categories) {
        return onSelectCategory(categories);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormToggle, {
      id: "ever",
      checked: attributes.include_children,
      onChange: function onChange(_include_children) {
        setAttributes({
          include_children: _include_children.target.checked
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "ever",
      style: {
        paddingLeft: "5px"
      }
    }, " Include Children")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Category Match:",
      value: attributes.operator,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Match Exactly',
        value: 'AND'
      }, {
        label: 'Match Any',
        value: 'IN'
      }],
      onChange: function onChange(operator) {
        return setAttributes({
          operator: operator
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Exclude Categories:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "xcats",
      name: "xcats",
      closeMenuOnSelect: false,
      components: animatedComponents,
      defaultValue: selectedCats(attributes.xcats),
      isMulti: true,
      options: wpdm_categories,
      onChange: function onChange(categories) {
        return onExcludeCategory(categories);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Tags:",
      placeholder: "Tags separated by comma",
      value: attributes.tag,
      onChange: function onChange(tag) {
        return setAttributes({
          tag: tag
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Exclude Packages With Tags:",
      placeholder: "Tags separated by comma",
      value: attributes.tag__not_in,
      onChange: function onChange(tag__not_in) {
        return setAttributes({
          tag__not_in: tag__not_in
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Author:",
      placeholder: "Author IDs separated by comma",
      value: attributes.author,
      onChange: function onChange(author) {
        return setAttributes({
          author: author
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Exclude Package From Authors:",
      placeholder: "Author IDs separated by comma",
      value: attributes.author__not_in,
      onChange: function onChange(author__not_in) {
        return setAttributes({
          author__not_in: author__not_in
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Toolbar:",
      value: attributes.toolbar,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Show Toolbar',
        value: 1
      }, {
        label: "Hide Toolbar",
        value: 0
      }],
      onChange: function onChange(toolbar) {
        return setAttributes({
          toolbar: toolbar
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Order By:",
      value: attributes.order_by,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Publish Date',
        value: 'date'
      }, {
        label: 'Update Date',
        value: 'updated'
      }, {
        label: "Downloads",
        value: 'download_count'
      }, {
        label: "Views",
        value: 'view_count'
      }, {
        label: "Price",
        value: 'base_price'
      }],
      onChange: function onChange(order_by) {
        return setAttributes({
          order_by: order_by
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Order:",
      value: attributes.order,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Desc',
        value: 'desc'
      }, {
        label: 'Asc',
        value: 'asc'
      }],
      onChange: function onChange(order) {
        return setAttributes({
          order: order
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Items Par Page:",
      type: "number",
      value: attributes.items_per_page,
      onChange: function onChange(items_per_page) {
        return setAttributes({
          items_per_page: items_per_page
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_libs_link_templates__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Link Template:",
      value: attributes.template,
      onChange: onChangeTemplate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Pagination:",
      value: attributes.paging,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Show',
        value: 1
      }, {
        label: "Hide",
        value: 0
      }],
      onChange: function onChange(paging) {
        return setAttributes({
          paging: paging
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Asynchronous Request:",
      value: attributes.async,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Enabled',
        value: 1
      }, {
        label: "Disabled",
        value: 0
      }],
      onChange: function onChange(async) {
        return setAttributes({
          async: async
        });
      }
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "download-manager/datatable",
      attributes: attributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/package/index.js":
/*!*************************************!*\
  !*** ./src/blocks/package/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");
/* harmony import */ var _libs_link_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/link-templates */ "./src/libs/link-templates.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select/animated */ "./node_modules/react-select/animated/dist/react-select.browser.esm.js");






var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody;
var __ = wp.i18n.__;
registerBlockType('download-manager/package', {
  title: 'Package',
  description: 'Download Manager Package',
  keywords: [__('download manager digital ecommerce store product sell'), __('file manager'), __('package link')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].downloadIcon(),
  category: 'wpdm-blocks',
  attributes: {
    packageID: {
      type: 'integer',
      default: 0
    },
    packageTitle: {
      type: 'string',
      default: 'Select Package'
    },
    template: {
      type: 'string',
      default: 'link-template-panel'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    function onChangeTemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    }

    function onSelectPackage(_package) {
      setAttributes({
        packageID: _package.value,
        packageTitle: _package.label
      });
    }

    function selectedPackage() {
      console.log(attributes);
      return {
        value: attributes.packageID,
        label: attributes.packageTitle
      };
    }

    var promiseOptions = function promiseOptions(inputValue) {
      return wp.apiFetch({
        path: "/wpdm/v2/search-package".concat(inputValue ? '?selected=' + attributes.packageID + '&s=' + inputValue : '?selected=' + attributes.packageID)
      }).then(function (response) {
        return response;
      }) // my option list array?
      .catch(function (err) {
        console.log('some error', err);
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Select Package"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_select_async__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cacheOptions: true,
      loadOptions: promiseOptions,
      defaultOptions: [selectedPackage()],
      defaultValue: [selectedPackage()],
      onChange: onSelectPackage
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_libs_link_templates__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Link Template:",
      value: attributes.template,
      onChange: onChangeTemplate
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "download-manager/package",
      attributes: attributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/packages/index.js":
/*!**************************************!*\
  !*** ./src/blocks/packages/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");
/* harmony import */ var _libs_link_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/link-templates */ "./src/libs/link-templates.js");
/* harmony import */ var _libs_columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/columns */ "./src/libs/columns.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select/animated */ "./node_modules/react-select/animated/dist/react-select.browser.esm.js");







var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    FormToggle = _wp$components.FormToggle,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody;
var registerBlockType = wp.blocks.registerBlockType;
var withState = wp.compose.withState;
var __ = wp.i18n.__;
var animatedComponents = Object(react_select_animated__WEBPACK_IMPORTED_MODULE_6__["default"])();
var options = [{
  value: 'chocolate',
  label: 'Chocolate'
}, {
  value: 'strawberry',
  label: 'Strawberry'
}, {
  value: 'vanilla',
  label: 'Vanilla'
}];
registerBlockType('download-manager/packages', {
  title: 'Packages',
  description: 'Query Download Manager Packages',
  keywords: [__('download manager digital ecommerce store product sell'), __('file manager'), __('product category categories')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].packages(),
  category: 'wpdm-blocks',
  attributes: {
    search: {
      type: 'string',
      default: ""
    },
    categories: {
      type: 'string',
      default: ""
    },
    include_children: {
      type: 'boolean',
      default: false
    },
    operator: {
      type: 'string',
      default: "IN"
    },
    xcats: {
      type: 'string',
      default: ""
    },
    tag: {
      type: 'string',
      default: ""
    },
    tag__not_in: {
      type: 'string',
      default: ""
    },
    author: {
      type: 'string',
      default: ""
    },
    author__not_in: {
      type: 'string',
      default: ""
    },
    items_per_page: {
      type: 'string',
      default: "10"
    },
    toolbar: {
      type: 'string',
      default: '1'
    },
    paging: {
      type: 'string',
      default: "1"
    },
    cols: {
      type: 'string',
      default: "1"
    },
    colspad: {
      type: 'string',
      default: "1"
    },
    colsphone: {
      type: 'string',
      default: "1"
    },
    orderby: {
      type: 'string',
      default: ""
    },
    order: {
      type: 'string',
      default: ""
    },
    async: {
      type: 'string',
      default: "1"
    },
    template: {
      type: 'string',
      default: 'link-template-panel'
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    function onChangeTemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    }

    function onSelectCategory(categories) {
      var selected_cats = [];
      jQuery.each(categories, function (index, category) {
        selected_cats.push(category.value);
      });
      console.log(selected_cats.join(','));
      setAttributes({
        categories: selected_cats.join(',')
      });
    }

    function onExcludeCategory(categories) {
      var selected_cats = [];
      jQuery.each(categories, function (index, category) {
        selected_cats.push(category.value);
      });
      console.log(selected_cats.join(','));
      setAttributes({
        xcats: selected_cats.join(',')
      });
    }

    function onChangeCols(cols) {
      if (cols.cols !== undefined) setAttributes({
        cols: cols.cols
      });
      if (cols.colspad !== undefined) setAttributes({
        colspad: cols.colspad
      });
      if (cols.colsphone !== undefined) setAttributes({
        colsphone: cols.colsphone
      });
      console.log(cols);
    }

    function selectedCats(cats) {
      var selected_cats = [];
      cats = cats.split(',');
      jQuery.each(wpdm_categories, function (index, category) {
        if (cats.indexOf(category.value) !== -1) {
          selected_cats.push(category);
        }
      });
      return selected_cats;
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Search Keyword:",
      value: attributes.search,
      onChange: function onChange(keyword) {
        return setAttributes({
          search: keyword
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Include Categories:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "categories",
      name: "categories",
      closeMenuOnSelect: false,
      components: animatedComponents,
      defaultValue: selectedCats(attributes.categories),
      isMulti: true,
      options: wpdm_categories,
      onChange: function onChange(categories) {
        return onSelectCategory(categories);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormToggle, {
      id: "ever",
      checked: attributes.include_children,
      onChange: function onChange(_include_children) {
        setAttributes({
          include_children: _include_children.target.checked
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "ever",
      style: {
        paddingLeft: "5px"
      }
    }, " Include Children")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Category Match:",
      value: attributes.operator,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Match Exactly',
        value: 'AND'
      }, {
        label: 'Match Any',
        value: 'IN'
      }],
      onChange: function onChange(operator) {
        return setAttributes({
          operator: operator
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Exclude Categories:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "xcats",
      name: "xcats",
      closeMenuOnSelect: false,
      components: animatedComponents,
      defaultValue: selectedCats(attributes.xcats),
      isMulti: true,
      options: wpdm_categories,
      onChange: function onChange(categories) {
        return onExcludeCategory(categories);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Tags:",
      placeholder: "Tags separated by comma",
      value: attributes.tag,
      onChange: function onChange(tag) {
        return setAttributes({
          tag: tag
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Exclude Packages With Tags:",
      placeholder: "Tags separated by comma",
      value: attributes.tag__not_in,
      onChange: function onChange(tag__not_in) {
        return setAttributes({
          tag__not_in: tag__not_in
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Author:",
      placeholder: "Author IDs separated by comma",
      value: attributes.author,
      onChange: function onChange(author) {
        return setAttributes({
          author: author
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Exclude Package From Authors:",
      placeholder: "Author IDs separated by comma",
      value: attributes.author__not_in,
      onChange: function onChange(author__not_in) {
        return setAttributes({
          author__not_in: author__not_in
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Toolbar:",
      value: attributes.toolbar,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Show Toolbar',
        value: 1
      }, {
        label: "Hide Toolbar",
        value: 0
      }],
      onChange: function onChange(toolbar) {
        return setAttributes({
          toolbar: toolbar
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Order By:",
      value: attributes.order_by,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Publish Date',
        value: 'date'
      }, {
        label: 'Update Date',
        value: 'updated'
      }, {
        label: "Downloads",
        value: 'download_count'
      }, {
        label: "Views",
        value: 'view_count'
      }, {
        label: "Price",
        value: 'base_price'
      }],
      onChange: function onChange(order_by) {
        return setAttributes({
          order_by: order_by
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Order:",
      value: attributes.order,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Desc',
        value: 'desc'
      }, {
        label: 'Asc',
        value: 'asc'
      }],
      onChange: function onChange(order) {
        return setAttributes({
          order: order
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Items Par Page:",
      type: "number",
      value: attributes.items_per_page,
      onChange: function onChange(items_per_page) {
        return setAttributes({
          items_per_page: items_per_page
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_libs_link_templates__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Link Template:",
      value: attributes.template,
      onChange: onChangeTemplate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Pagination:",
      value: attributes.paging,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Show',
        value: 1
      }, {
        label: "Hide",
        value: 0
      }],
      onChange: function onChange(paging) {
        return setAttributes({
          paging: paging
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_libs_columns__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Columns:",
      cols: attributes.cols,
      colspad: attributes.colspad,
      colsphone: attributes.colsphone,
      onChange: onChangeCols
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Asynchronous Request:",
      value: attributes.async,
      class: "form-control wpdm-custom-select",
      options: [{
        label: 'Enabled',
        value: 1
      }, {
        label: "Disabled",
        value: 0
      }],
      onChange: function onChange(async) {
        return setAttributes({
          async: async
        });
      }
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "download-manager/packages",
      attributes: attributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/search/index.js":
/*!************************************!*\
  !*** ./src/blocks/search/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");
/* harmony import */ var _libs_link_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/link-templates */ "./src/libs/link-templates.js");
/* harmony import */ var _libs_columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/columns */ "./src/libs/columns.js");




var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    FormToggle = _wp$components.FormToggle,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody;
var registerBlockType = wp.blocks.registerBlockType;
var withState = wp.compose.withState;
var __ = wp.i18n.__;
registerBlockType('download-manager/search', {
  title: 'Search Results',
  description: 'Search Download Manager Packages',
  keywords: [__('download manager digital ecommerce store product sell'), __('file manager'), __('product category categories')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].search(),
  category: 'wpdm-blocks',
  attributes: {
    init: {
      type: 'boolean',
      default: true
    },
    items_per_page: {
      type: 'integer',
      default: 10
    },
    cols: {
      type: 'integer',
      default: 1
    },
    colspad: {
      type: 'integer',
      default: 1
    },
    colsphone: {
      type: 'integer',
      default: 1
    },
    template: {
      type: 'string',
      default: 'link-template-panel'
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    function onChangeTemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    }

    function onSelectCategory(categories) {
      console.log(categories);
      var selected_cats = [];
      jQuery.each(categories, function (index, category) {
        selected_cats.push(category.value);
      });
      console.log(selected_cats.join(','));
      setAttributes({
        categories: selected_cats.join(',')
      });
    }

    function onExcludeCategory(categories) {
      console.log(categories);
      var selected_cats = [];
      jQuery.each(categories, function (index, category) {
        selected_cats.push(category.value);
      });
      console.log(selected_cats.join(','));
      setAttributes({
        xcats: selected_cats.join(',')
      });
    }

    function onChangeCols(cols) {
      if (cols.cols !== undefined) setAttributes({
        cols: cols.cols
      });
      if (cols.colspad !== undefined) setAttributes({
        colspad: cols.colspad
      });
      if (cols.colsphone !== undefined) setAttributes({
        colsphone: cols.colsphone
      });
      console.log(cols);
    }

    function selectedCats(cats) {
      var selected_cats = [];
      cats = cats.split(',');
      jQuery.each(wpdm_categories, function (index, category) {
        if (cats.indexOf(category.value) !== -1) {
          selected_cats.push(category);
        }
      });
      return selected_cats;
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormToggle, {
      id: "init",
      checked: attributes.init,
      onChange: function onChange(init) {
        setAttributes({
          init: init.target.checked
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "init",
      style: {
        paddingLeft: "5px"
      }
    }, " Show Initial Results")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Items Par Page:",
      type: "number",
      value: attributes.items_per_page,
      onChange: function onChange(items_per_page) {
        return setAttributes({
          items_per_page: items_per_page
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_libs_link_templates__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Link Template:",
      value: attributes.template,
      onChange: onChangeTemplate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_libs_columns__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Columns:",
      cols: attributes.cols,
      colspad: attributes.colspad,
      colsphone: attributes.colsphone,
      onChange: onChangeCols
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "download-manager/search",
      attributes: attributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/section/index.js":
/*!*************************************!*\
  !*** ./src/blocks/section/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/util */ "./src/libs/util.js");
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");



var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    RichText = _wp$editor.RichText,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    MediaUpload = _wp$editor.MediaUpload,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl,
    Panel = _wp$components.Panel,
    TreeSelect = _wp$components.TreeSelect,
    RadioControl = _wp$components.RadioControl,
    FontSizePicker = _wp$components.FontSizePicker,
    withFallbackStyles = _wp$components.withFallbackStyles,
    IconButton = _wp$components.IconButton,
    Dashicon = _wp$components.Dashicon,
    Toolbar = _wp$components.Toolbar,
    FormToggle = _wp$components.FormToggle,
    ResizableBox = _wp$components.ResizableBox;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
registerBlockType('download-manager/section', {
  title: 'Section',
  description: 'HTML Section',
  keywords: [__('bootstrap jumbotron component'), __('call-to-action ui'), __('call2action')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_2__["default"].section(),
  category: 'wpdm-blocks',
  attributes: {
    wideContent: {
      type: 'boolean',
      default: false
    },
    sectionBG: {
      type: 'string',
      default: '#E9ECEF'
    },
    sectionBGx: {
      type: 'string',
      default: '#E9ECEF'
    },
    sectionBGAlpha: {
      type: 'number',
      default: 95
    },
    bgCS1: {
      type: 'number',
      default: 0
    },
    bgCS2: {
      type: 'number',
      default: 100
    },
    gradAngle: {
      type: 'number',
      default: 45
    },
    sectionBGImage: {
      type: 'string',
      default: null
    },
    sectionBGSize: {
      type: 'string',
      default: 'bg-cover'
    },
    sectionBGRepeat: {
      type: 'string',
      default: 'bg-no-repeat'
    },
    sectionBGImageID: {
      type: 'string',
      default: null
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;

    var onSelectImage = function onSelectImage(img) {
      setAttributes({
        sectionBGImage: img.url
      });
    };

    var onRemoveImage = function onRemoveImage() {
      setAttributes({
        sectionBGImage: null //imgAlt: null,

      });
    };
    /* Default colors */


    var defaultColors = _libs_util__WEBPACK_IMPORTED_MODULE_1__["default"].defaultColor();
    var rgba1 = _libs_util__WEBPACK_IMPORTED_MODULE_1__["default"].hexToRgba(attributes.sectionBG, attributes.sectionBGAlpha);
    var rgba2 = _libs_util__WEBPACK_IMPORTED_MODULE_1__["default"].hexToRgba(attributes.sectionBGx, attributes.sectionBGAlpha);
    var cs1 = attributes.bgCS1 + "%";
    var cs2 = attributes.bgCS2 + "%";
    var overlay = "linear-gradient( " + attributes.gradAngle + "deg, " + rgba1 + " " + cs1 + ", " + rgba2 + " " + cs2 + "),";
    if (attributes.sectionBGImage === null) attributes.sectionBGImage = "";
    var background = overlay + " " + "url(" + attributes.sectionBGImage + ")";
    var container = attributes.wideContent ? 'container-fluid' : 'container';
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormToggle, {
      id: "ever",
      checked: attributes.wideContent,
      onChange: function onChange(_wideContent) {
        setAttributes({
          wideContent: _wideContent.target.checked
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "ever",
      style: {
        paddingLeft: "5px"
      }
    }, " Full-width Content")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Background Options'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel panel-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-heading"
    }, __('Background Color Left')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: defaultColors,
      disableAlpha: false,
      label: __('Background Color'),
      value: attributes.sectionBG ? attributes.sectionBG : 'transparent',
      onChange: function onChange(value) {
        return setAttributes({
          sectionBG: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel panel-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-heading"
    }, __('Background Color Right')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: defaultColors,
      disableAlpha: false,
      label: __('Background Color'),
      value: attributes.sectionBGx,
      onChange: function onChange(value) {
        return setAttributes({
          sectionBGx: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Gradient Angle:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      value: attributes.gradAngle,
      onChange: function onChange(value) {
        return setAttributes({
          gradAngle: value
        });
      },
      min: -270,
      max: 360,
      step: 1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Opacity:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      value: attributes.sectionBGAlpha,
      onChange: function onChange(value) {
        return setAttributes({
          sectionBGAlpha: value
        });
      },
      min: 0,
      max: 100,
      step: 1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Color #1 Start:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      value: attributes.bgCS1,
      onChange: function onChange(value) {
        return setAttributes({
          bgCS1: value
        });
      },
      min: 0,
      max: 100,
      step: 1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Color #2 Start:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      value: attributes.bgCS2,
      onChange: function onChange(value) {
        return setAttributes({
          bgCS2: value
        });
      },
      min: 0,
      max: 100,
      step: 1
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel panel-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-heading"
    }, __('Select a background image:')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "panel-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: attributes.sectionBGImage,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-section-inspector-media",
          label: __('Edit image'),
          icon: "format-image",
          onClick: open
        }, __('Select Image')), attributes.sectionBGImage && !!attributes.sectionBGImage.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: attributes.sectionBGImage
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-section-inspector-media",
          label: __('Remove Image'),
          icon: "dismiss",
          onClick: onRemoveImage
        }, __('Remove'))));
      }
    }))), attributes.sectionBGImage && !!attributes.sectionBGImage.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Background Size:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      class: "form-control wpdm-custom-select",
      value: attributes.sectionBGSize,
      onChange: function onChange(value) {
        return setAttributes({
          sectionBGSize: value
        });
      },
      options: [{
        label: 'Auto',
        value: 'bg-auto'
      }, {
        label: 'Cover',
        value: 'bg-cover'
      }, {
        label: 'Contain',
        value: 'bg-contain'
      }, {
        label: '100%',
        value: 'bg-100'
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Background Repeat:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      class: "form-control wpdm-custom-select",
      value: attributes.sectionBGRepeat,
      onChange: function onChange(value) {
        return setAttributes({
          sectionBGRepeat: value
        });
      },
      options: [{
        label: 'No Repeat',
        value: 'bg-no-repeat'
      }, {
        label: 'Repeat',
        value: 'bg-repeat'
      }, {
        label: 'Repeat X',
        value: 'bg-repeat-x'
      }, {
        label: 'Repeat Y',
        value: 'bg-repeat-y'
      }]
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "w3eden " + attributes.sectionBGRepeat + " " + attributes.sectionBGSize,
      style: {
        background: background
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: container
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      renderAppender: function renderAppender() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    })))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes,
        className = _ref3.className;
    var rgba1 = _libs_util__WEBPACK_IMPORTED_MODULE_1__["default"].hexToRgba(attributes.sectionBG, attributes.sectionBGAlpha);
    var rgba2 = _libs_util__WEBPACK_IMPORTED_MODULE_1__["default"].hexToRgba(attributes.sectionBGx, attributes.sectionBGAlpha);
    var cs1 = attributes.bgCS1 + "%";
    var cs2 = attributes.bgCS2 + "%";
    var overlay = "linear-gradient( " + attributes.gradAngle + "deg, " + rgba1 + " " + cs1 + ", " + rgba2 + " " + cs2 + "),";
    if (attributes.sectionBGImage === null) attributes.sectionBGImage = "";
    var background = overlay + " " + "url(" + attributes.sectionBGImage + ")";
    var container = attributes.wideContent ? 'container-fluid' : 'container';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "w3eden " + attributes.sectionBGRepeat + " " + attributes.sectionBGSize,
      style: {
        background: background
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: container
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/signin-form/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/signin-form/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");


var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    FormToggle = _wp$components.FormToggle,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    IconButton = _wp$components.IconButton;
var __ = wp.i18n.__;
registerBlockType('download-manager/signin-form', {
  title: 'Login Form',
  description: 'Download Manager Login Form',
  keywords: [__('download manager signup form digital ecommerce store product sell'), __('file manager'), __('login signin form')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].login(),
  category: 'wpdm-blocks',
  attributes: {
    logo: {
      type: 'string',
      default: ''
    },
    note_before: {
      type: 'string',
      default: ''
    },
    note_after: {
      type: 'string',
      default: ''
    },
    regurl: {
      type: 'string',
      default: ''
    },
    redirect: {
      type: 'string',
      default: ''
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    function onChangeTemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    }

    function onChangeID(event) {
      if (event.target.value > 0) setAttributes({
        packageID: event.target.value
      });else if (event.target.id > 0) setAttributes({
        packageID: event.target.id
      });
    }

    var captchaToggle = function captchaToggle(ncaptcha) {
      setAttributes({
        captcha: ncaptcha.target.checked
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Redirect URL ( Optional )",
      help: 'Where you want to redirect user after login',
      value: attributes.redirect,
      onChange: function onChange(url) {
        return setAttributes({
          redirect: url
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Signup Page URL ( Optional )",
      help: 'If you have multiple signup page, you can specify one here',
      value: attributes.redirect,
      onChange: function onChange(url) {
        return setAttributes({
          redirect: url
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Notes')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Before Form:",
      help: 'Write if you have any special instructions',
      value: attributes.note_before,
      onChange: function onChange(note_before) {
        return setAttributes({
          note_before: note_before
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "After Form:",
      help: 'Write if you have any special instructions',
      value: attributes.note_after,
      onChange: function onChange(note_after) {
        return setAttributes({
          note_after: note_after
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Logo:')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(img) {
        setAttributes({
          logo: img.url
        });
      },
      type: "image",
      value: attributes.logo,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-cta-inspector-media",
          label: __('Edit image'),
          icon: "format-image",
          onClick: open
        }, __('Select Image')), attributes.logo && !!attributes.logo.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          style: {
            margin: "10px 0",
            height: "128px",
            width: 'auto'
          },
          src: attributes.logo
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-cta-inspector-media",
          label: __('Remove Image'),
          icon: "dismiss",
          onClick: function onClick() {
            setAttributes({
              logo: ''
            });
          }
        }, __('Remove'))));
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "download-manager/signin-form",
      attributes: attributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/signup-form/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/signup-form/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/icons */ "./src/libs/icons.js");


var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    FormToggle = _wp$components.FormToggle,
    ServerSideRender = _wp$components.ServerSideRender,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    IconButton = _wp$components.IconButton;
var __ = wp.i18n.__;
registerBlockType('download-manager/signup-form', {
  title: 'Signup Form',
  description: 'Download Manager Sigup Form',
  keywords: [__('download manager signup form digital ecommerce store product sell'), __('file manager'), __('signup register form')],
  icon: _libs_icons__WEBPACK_IMPORTED_MODULE_1__["default"].signup(),
  category: 'wpdm-blocks',
  attributes: {
    role: {
      type: 'string',
      default: 'subscriber'
    },
    logo: {
      type: 'string',
      default: ''
    },
    note_before: {
      type: 'string',
      default: ''
    },
    note_after: {
      type: 'string',
      default: ''
    },
    social_only: {
      type: 'boolean',
      default: false
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    function onChangeTemplate(newTemplate) {
      setAttributes({
        template: newTemplate
      });
    }

    function onChangeID(event) {
      if (event.target.value > 0) setAttributes({
        packageID: event.target.value
      });else if (event.target.id > 0) setAttributes({
        packageID: event.target.id
      });
    }

    var captchaToggle = function captchaToggle(ncaptcha) {
      setAttributes({
        captcha: ncaptcha.target.checked
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "w3eden"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Role:",
      help: 'Assign signed up user to the selected role',
      class: "form-control wpdm-custom-select",
      value: attributes.role,
      options: __wpdm_roles,
      onChange: function onChange(role) {
        setAttributes({
          role: role
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "form-group"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormToggle, {
      id: "soconly",
      checked: attributes.social_only,
      onChange: function onChange(_social_only) {
        setAttributes({
          social_only: _social_only.target.checked
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "soconly",
      style: {
        paddingLeft: "5px"
      }
    }, " Social Signup Only"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Notes')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Before Form:",
      help: 'Write if you have any special instructions',
      value: attributes.note_before,
      onChange: function onChange(note_before) {
        return setAttributes({
          note_before: note_before
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "After Form:",
      help: 'Write if you have any special instructions',
      value: attributes.note_after,
      onChange: function onChange(note_after) {
        return setAttributes({
          note_after: note_after
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Logo:')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(img) {
        setAttributes({
          logo: img.url
        });
      },
      type: "image",
      value: attributes.logo,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-cta-inspector-media",
          label: __('Edit image'),
          icon: "format-image",
          onClick: open
        }, __('Select Image')), attributes.logo && !!attributes.logo.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          style: {
            margin: "10px 0",
            height: "128px",
            width: 'auto'
          },
          src: attributes.logo
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "ab-cta-inspector-media",
          label: __('Remove Image'),
          icon: "dismiss",
          onClick: function onClick() {
            setAttributes({
              logo: ''
            });
          }
        }, __('Remove'))));
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ServerSideRender, {
      block: "download-manager/signup-form",
      attributes: attributes
    })];
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/vars */ "./src/libs/vars.js");
/* harmony import */ var _libs_vars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_vars__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/columns */ "./src/libs/columns.js");
/* harmony import */ var _libs_link_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/link-templates */ "./src/libs/link-templates.js");
/* harmony import */ var _blocks_package__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/package */ "./src/blocks/package/index.js");
/* harmony import */ var _blocks_packages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/packages */ "./src/blocks/packages/index.js");
/* harmony import */ var _blocks_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/category */ "./src/blocks/category/index.js");
/* harmony import */ var _blocks_category_cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/category-cards */ "./src/blocks/category-cards/index.js");
/* harmony import */ var _blocks_signup_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/signup-form */ "./src/blocks/signup-form/index.js");
/* harmony import */ var _blocks_signin_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/signin-form */ "./src/blocks/signin-form/index.js");
/* harmony import */ var _blocks_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/search */ "./src/blocks/search/index.js");
/* harmony import */ var _blocks_dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/dashboard */ "./src/blocks/dashboard/index.js");
/* harmony import */ var _blocks_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/datatable */ "./src/blocks/datatable/index.js");
/* harmony import */ var _blocks_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/section */ "./src/blocks/section/index.js");
/* harmony import */ var _blocks_call2action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/call2action */ "./src/blocks/call2action/index.js");
/**
 * Internal dependencies
 */















/***/ }),

/***/ "./src/libs/columns.js":
/*!*****************************!*\
  !*** ./src/libs/columns.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var cscount = 0;
var SelectControl = wp.components.SelectControl;

var Columns = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Columns, _React$Component);

  var _super = _createSuper(Columns);

  function Columns(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Columns);

    _this = _super.call(this, props);
    _this.state = {
      cols: props.cols,
      colspad: props.colspad,
      colsphone: props.colsphone,
      label: props.label,
      tabClass: '',
      tabContentClass: ''
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Columns, [{
    key: "showTab",
    value: function showTab(e) {
      jQuery('#columnSelectorTab a.nav-link').removeClass('active');
      jQuery(e.currentTarget).addClass('active');
      jQuery('#columnSelectorTabContent .tab-pane').removeClass('active');
      jQuery(jQuery(e.currentTarget).attr('href')).addClass('active');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "tab-container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, this.state.label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
        className: "nav nav-tabs",
        id: "columnSelectorTab",
        role: "tablist"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        className: "nav-item",
        role: "presentation"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
        className: "nav-link active",
        onClick: this.showTab,
        id: "home-tab",
        "data-toggle": "tab",
        href: "#pc",
        role: "tab",
        "aria-controls": "home",
        "aria-selected": "true"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "dashicons dashicons-laptop"
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        className: "nav-item",
        role: "presentation"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
        className: "nav-link",
        onClick: this.showTab,
        id: "contact-tab",
        "data-toggle": "tab",
        href: "#tablet",
        role: "tab",
        "aria-controls": "contact",
        "aria-selected": "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "dashicons dashicons-tablet"
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
        className: "nav-item",
        role: "presentation"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
        className: "nav-link",
        onClick: this.showTab,
        id: "profile-tab",
        "data-toggle": "tab",
        href: "#phone",
        role: "tab",
        "aria-controls": "profile",
        "aria-selected": "false"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "dashicons dashicons-smartphone"
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "tab-content",
        id: "columnSelectorTabContent",
        style: {
          border: "1px solid #dddddd",
          borderTop: 0,
          padding: "15px"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "tab-pane active",
        id: "pc",
        role: "tabpanel",
        "aria-labelledby": "pc-tab"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        value: this.state.cols,
        class: "form-control wpdm-custom-select",
        options: [{
          label: '1 Column',
          value: 1
        }, {
          label: "2 Columns",
          value: 2
        }, {
          label: "3 Columns",
          value: 3
        }, {
          label: "4 Columns",
          value: 4
        }, {
          label: "6 Columns",
          value: 6
        }, {
          label: "12 Columns",
          value: 12
        }]
        /*onChange={ ( cols ) => { this.attributes.cols = cols }  }*/
        ,
        onChange: function onChange(cols) {
          _this2.setState({
            cols: cols
          });

          _this2.props.onChange({
            cols: cols
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "tab-pane",
        id: "tablet",
        role: "tabpanel",
        "aria-labelledby": "tablet-tab"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        value: this.state.colspad,
        class: "form-control wpdm-custom-select",
        options: [{
          label: '1 Column',
          value: 1
        }, {
          label: "2 Columns",
          value: 2
        }, {
          label: "3 Columns",
          value: 3
        }, {
          label: "4 Columns",
          value: 4
        }, {
          label: "6 Columns",
          value: 6
        }, {
          label: "12 Columns",
          value: 12
        }],
        onChange: function onChange(cols) {
          _this2.setState({
            colspad: cols
          });

          _this2.props.onChange({
            colspad: cols
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "tab-pane",
        id: "phone",
        role: "tabpanel",
        "aria-labelledby": "phone-tab"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        value: this.state.colsphone,
        class: "form-control wpdm-custom-select",
        options: [{
          label: '1 Column',
          value: 1
        }, {
          label: "2 Columns",
          value: 2
        }, {
          label: "3 Columns",
          value: 3
        }, {
          label: "4 Columns",
          value: 4
        }, {
          label: "6 Columns",
          value: 6
        }, {
          label: "12 Columns",
          value: 12
        }],
        onChange: function onChange(cols) {
          _this2.setState({
            colsphone: cols
          });

          _this2.props.onChange({
            colsphone: cols
          });
        }
      }))));
    }
  }]);

  return Columns;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (Columns);

/***/ }),

/***/ "./src/libs/icons.js":
/*!***************************!*\
  !*** ./src/libs/icons.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



var downloadIcon = function downloadIcon(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: "512pt",
    viewBox: "-23 0 512 512",
    width: "512pt"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M337.953 230.602c66.16 9.285 117.063 66.054 117.063 134.777 0 75.125-60.934 136.058-136.059 136.058-51.644 0-96.68-28.812-119.621-71.285-10.457-19.312-16.434-41.402-16.434-64.879 0-75.125 60.934-136.058 136.055-136.058 6.406.105 12.703.535 18.996 1.387zm0 0",
    fill: "#fedb41"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M337.953 230.602a139.95 139.95 0 0 0-18.996-1.282c-75.121 0-136.055 60.934-136.055 136.059 0 23.476 5.977 45.566 16.434 64.879l-.215.11H57.2c-25.933 0-46.957-21.024-46.957-46.954V57.73c0-25.93 21.024-46.953 46.957-46.953h172.23v77.688c0 20.058 16.22 36.281 36.282 36.281h72.242zm0 0",
    fill: "#00acea"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M229.43 10.777l108.523 113.97h-72.242c-20.063 0-36.281-16.224-36.281-36.282zm0 0",
    fill: "#00efd1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M348.945 221.64v-96.894c0-2.777-1.28-5.336-3.093-7.363L237.219 3.309C235.19 1.176 232.309 0 229.429 0H57.2C25.4 0 0 25.93 0 57.73v325.684c0 31.8 25.398 57.305 57.2 57.305h135.948C219.61 485.535 267.203 512 318.961 512c80.887 0 146.726-65.734 146.726-146.727 0-35.64-12.699-69.898-36.175-96.68-21.235-24.116-49.621-40.55-80.567-46.952zM240.102 37.458l72.882 76.723h-47.273c-14.086 0-25.613-11.63-25.613-25.715V37.457zM21.344 383.414V57.73c0-20.062 15.898-36.386 35.855-36.386h161.559v67.12c0 25.93 21.023 47.06 46.953 47.06h61.894v83.34c-3.203-.106-5.765-.532-8.539-.532-37.242 0-71.496 14.297-97.32 36.707H86.223c-5.868 0-10.672 4.8-10.672 10.672 0 5.871 4.8 10.672 10.672 10.672h115.675c-7.578 10.672-13.875 21.344-18.78 33.082H86.222c-5.868 0-10.672 4.8-10.672 10.668 0 5.87 4.8 10.672 10.672 10.672h89.957c-2.668 10.672-4.055 22.515-4.055 34.363 0 18.672 3.52 37.133 10.352 54.207H57.199c-19.957 0-35.855-16.008-35.855-35.96zM318.96 490.766c-45.992 0-88.36-25.184-110.34-65.63-9.926-18.245-15.152-38.843-15.152-59.757 0-69.149 56.234-125.387 125.383-125.387 5.87 0 11.738.43 17.5 1.176 29.668 4.16 56.984 18.887 76.832 41.512 20.062 22.836 31.054 52.18 31.054 82.699.106 69.148-56.129 125.387-125.277 125.387zm0 0",
    fill: "#083863"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M86.223 223.027H194.32c5.871 0 10.672-4.804 10.672-10.672 0-5.87-4.8-10.671-10.672-10.671H86.223c-5.868 0-10.672 4.8-10.672 10.671 0 5.868 4.804 10.672 10.672 10.672zm0 0M373.594 363.137l-43.856 47.273V293.883c0-5.871-4.804-10.672-10.672-10.672-5.87 0-10.671 4.8-10.671 10.672V410.41l-44.18-47.273c-4.055-4.266-10.883-4.586-15.152-.535-4.27 4.058-4.59 10.78-.536 15.046l62.426 67.122c2.027 2.136 4.805 3.418 7.79 3.418 2.987 0 5.765-1.282 7.788-3.418l62.426-67.122c4.059-4.265 3.844-11.097-.426-15.046-4.265-4.051-10.883-3.73-14.937.535zm0 0",
    fill: "#083863"
  }));
};

var catIcon = function catIcon(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 512 512"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#004a7b"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M75 512c-8.291 0-15-6.709-15-15v-61c0-8.291 6.709-15 15-15s15 6.709 15 15v61c0 8.291-6.709 15-15 15zM271 436v61c0 8.399-6.599 15-15 15s-15-6.601-15-15v-61c0-8.401 6.599-15 15-15s15 6.599 15 15z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#00345b"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M437 512c-8.291 0-15-6.709-15-15v-61c0-8.291 6.709-15 15-15s15 6.709 15 15v61c0 8.291-6.709 15-15 15zM271 436v61c0 8.399-6.599 15-15 15v-91c8.401 0 15 6.599 15 15z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M271 226v120c0 8.399-6.599 15-15 15s-15-6.601-15-15V226c0-8.401 6.599-15 15-15s15 6.599 15 15z",
    fill: "#004a7b"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M271 226v120c0 8.399-6.599 15-15 15V211c8.401 0 15 6.599 15 15z",
    fill: "#00345b"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M452 316v30c0 8.399-6.599 15-15 15s-15-6.601-15-15v-30c0-8.401-6.599-15-15-15H105c-8.401 0-15 6.599-15 15v30c0 8.399-6.599 15-15 15s-15-6.601-15-15v-30c0-24.901 20.099-45 45-45h302c24.901 0 45 20.099 45 45z",
    fill: "#004a7b"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M452 316v30c0 8.399-6.599 15-15 15s-15-6.601-15-15v-30c0-8.401-6.599-15-15-15H256v-30h151c24.901 0 45 20.099 45 45z",
    fill: "#00345b"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#17ace8"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M105 451H45c-24.814 0-45-20.186-45-45v-30c0-24.814 20.186-45 45-45h60c24.814 0 45 20.186 45 45v30c0 24.814-20.186 45-45 45zM286 331h-60c-24.901 0-45 20.099-45 45v30c0 24.899 20.099 45 45 45h60c24.901 0 45-20.101 45-45v-30c0-24.901-20.099-45-45-45z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#1689fc"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M467 451h-60c-24.814 0-45-20.186-45-45v-30c0-24.814 20.186-45 45-45h60c24.814 0 45 20.186 45 45v30c0 24.814-20.186 45-45 45zM105 512H45c-8.291 0-15-6.709-15-15s6.709-15 15-15h60c8.291 0 15 6.709 15 15s-6.709 15-15 15zM301 497c0 8.399-6.599 15-15 15h-60c-8.401 0-15-6.601-15-15 0-8.401 6.599-15 15-15h60c8.401 0 15 6.599 15 15z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#136ef1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M467 512h-60c-8.291 0-15-6.709-15-15s6.709-15 15-15h60c8.291 0 15 6.709 15 15s-6.709 15-15 15zM301 497c0 8.399-6.599 15-15 15h-30v-30h30c8.401 0 15 6.599 15 15z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M331 376v30c0 24.899-20.099 45-45 45h-30V331h30c24.901 0 45 20.099 45 45z",
    fill: "#1689fc"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M286 151h-60c-8.401 0-15 6.599-15 15v60c0 8.399 6.599 15 15 15h60c8.401 0 15-6.601 15-15v-60c0-8.401-6.599-15-15-15z",
    fill: "#a8aff1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M301 166v60c0 8.399-6.599 15-15 15h-30v-90h30c8.401 0 15 6.599 15 15z",
    fill: "#8a93e6"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M346 0H166c-24.901 0-45 20.099-45 45v91c0 24.899 20.099 45 45 45h180c24.901 0 45-20.101 45-45V45c0-24.901-20.099-45-45-45z",
    fill: "#e1e4fb"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M391 45v91c0 24.899-20.099 45-45 45h-90V0h90c24.901 0 45 20.099 45 45z",
    fill: "#c5c9f7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M331 226c0 8.399-6.599 15-15 15H196c-8.401 0-15-6.601-15-15 0-8.401 6.599-15 15-15h120c8.401 0 15 6.599 15 15z",
    fill: "#e1e4fb"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M316 241h-60v-30h60c8.401 0 15 6.599 15 15 0 8.399-6.599 15-15 15z",
    fill: "#c5c9f7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M346 30H166c-8.401 0-15 6.599-15 15v91c0 8.399 6.599 15 15 15h180c8.401 0 15-6.601 15-15V45c0-8.401-6.599-15-15-15z",
    fill: "#004a7b"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M346 151h-90V30h90c8.401 0 15 6.599 15 15v91c0 8.399-6.599 15-15 15z",
    fill: "#00345b"
  }));
};

var panelIcon = function panelIcon(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 512 512"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#ebebeb",
    d: "M400.394 100.964l.011 229.053L0 330.016V100.964l201.859-16.699z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#a6e2e3",
    d: "M0 61.28h400.39v39.684H0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#ccc",
    d: "M75.275 202.48v127.537h325.13l-.006-127.537h-36.324z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#ebebeb",
    d: "M512 221.668V450.72H111.594V221.668l200.203-18.072z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#ffa638",
    d: "M512 181.983v39.685H111.594v-39.685h288.8z"
  }));
};

var btnIcon = function btnIcon(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 512 512"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("linearGradient", {
    id: "a",
    x1: "10%",
    y1: "0%",
    x2: "90%",
    y2: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("stop", {
    offset: "0%",
    stopColor: "#FE7B39"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("stop", {
    offset: "100%",
    stopColor: "#FD3838"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    width: 512,
    height: 200,
    rx: 8,
    ry: 8,
    fill: "url(#a)"
  }));
};

var btnC2A = function btnC2A(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 512 512"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M497.807 232.355l-29.945 5.99v-88.276l29.945 5.99A17.653 17.653 0 0 1 512 173.37v41.673c0 8.416-5.94 15.663-14.193 17.312z",
    fill: "#d7deed"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M497.807 205.873l-29.945 5.99v26.483l29.945-5.99A17.655 17.655 0 0 0 512 215.044v-26.483c0 8.416-5.94 15.661-14.193 17.312z",
    fill: "#c7cfe2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M26.483 256h-8.828C7.904 256 0 248.096 0 238.345v-88.276c0-9.751 7.904-17.655 17.655-17.655h8.828V256z",
    fill: "#be4b50"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M229.517 97.103V291.31c61.793 0 158.897 26.483 229.517 88.276V8.828c-70.62 61.793-167.724 88.275-229.517 88.275z",
    fill: "#d7deed"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M476.69 388.414h-8.828a8.829 8.829 0 0 1-8.828-8.828V8.828A8.829 8.829 0 0 1 467.862 0h8.828a8.829 8.829 0 0 1 8.828 8.828v370.759a8.83 8.83 0 0 1-8.828 8.827z",
    fill: "#959cb3"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M242.05 494.345a8.83 8.83 0 0 1-8.657-7.096L194.207 291.31H97.103l39.88 199.401C139.459 503.09 150.328 512 162.952 512h79.098a8.829 8.829 0 0 0 0-17.655z",
    fill: "#d2555a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M211.862 291.31v10.177a8.825 8.825 0 0 1-7.377 8.707l-141.241 23.54c-5.38.897-10.279-3.252-10.279-8.707V291.31h158.897z",
    fill: "#be4b50"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M229.517 291.31H52.966c-19.501 0-35.31-15.809-35.31-35.31V132.414c0-19.501 15.809-35.31 35.31-35.31h176.552V291.31z",
    fill: "#ff6464"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#959cb3",
    d: "M211.862 97.103h17.655V291.31h-17.655z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M17.655 229.517h194.207v61.793H52.966c-19.501 0-35.31-15.809-35.31-35.31v-26.483z",
    fill: "#d2555a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#707487",
    d: "M211.862 229.517h17.655v61.793h-17.655z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M229.517 291.31c61.793 0 158.897 26.483 229.517 88.276V273.655c-70.621-29.426-167.724-44.138-229.517-44.138v61.793z",
    fill: "#c7cfe2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M476.69 282.483h-8.828a8.829 8.829 0 0 1-8.828-8.828v105.931a8.829 8.829 0 0 0 8.828 8.828h8.828a8.829 8.829 0 0 0 8.828-8.828V273.655a8.83 8.83 0 0 1-8.828 8.828z",
    fill: "#707487"
  }));
};

var theCat = function theCat(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 117 117"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("title", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fillRule: "nonzero",
    fill: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M4.5 52.9h44.3c2.3 0 4.1-1.8 4.1-4.1V4.5c0-2.3-1.8-4.1-4.1-4.1H4.5C2.2.4.4 2.2.4 4.5v44.3c0 2.2 1.9 4.1 4.1 4.1zM8.6 8.6h36.1v36.1H8.6V8.6z",
    fill: "#4A4A4A"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M116.6 4.5c0-2.3-1.8-4.1-4.1-4.1H68.2c-2.3 0-4.1 1.8-4.1 4.1v44.3c0 2.3 1.8 4.1 4.1 4.1h44.3c2.3 0 4.1-1.8 4.1-4.1V4.5zm-8.2 40.2H72.3V8.6h36.1v36.1zM4.5 116.6h44.3c2.3 0 4.1-1.8 4.1-4.1V68.2c0-2.3-1.8-4.1-4.1-4.1H4.5c-2.3 0-4.1 1.8-4.1 4.1v44.3c0 2.2 1.9 4.1 4.1 4.1zm4.1-44.3h36.1v36.1H8.6V72.3z",
    fill: "#17AB13"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M112.5 64.1H68.2c-2.3 0-4.1 1.8-4.1 4.1v44.3c0 2.3 1.8 4.1 4.1 4.1h44.3c2.3 0 4.1-1.8 4.1-4.1V68.2c0-2.2-1.9-4.1-4.1-4.1zm-4.1 44.3H72.3V72.3h36.1v36.1z",
    fill: "#4A4A4A"
  })));
};

var packages = function packages(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 512 512"
  }, props, {
    width: "1em",
    height: "1em"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#7941b6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M244.872 109.344h194.896V132.8H244.872zM244.872 174.336H512V196.6H244.872z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#7941b6",
    d: "M0 74.16h178.088v155.824H0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#17ab13"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M244.872 315.456h184.96v22.264h-184.96zM244.872 382.224H512v22.264H244.872z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#17ab13",
    d: "M0 282.016h178.088V437.84H0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#fff"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M55.536 318.536l71.752 41.424-71.752 41.424zM55.536 110.648l71.752 41.424-71.752 41.424z"
  })));
};

var slider = function slider(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 1000 1000"
  }, props, {
    width: "1em",
    height: "1em"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M10 304.77v291.89h980V12.88H10v291.89zm947.46-181.84v81.35H42.54V41.58h914.92v81.35zM181.69 340.56c3.25 2.87 4.4 6.32 4.4 11.87 0 7.27-1.34 8.8-28.71 36.37l-28.52 28.9 28.52 28.9c26.61 26.8 28.71 29.29 28.71 35.98 0 9.19-6.89 16.46-15.7 16.46-5.55 0-10.14-4.02-42.11-35.98L92.3 427.07v-8.61c0-11.68 4.02-16.84 40.77-53.02 27.75-27.18 30.05-29.09 36.94-29.09 4.79 0 8.62 1.34 11.68 4.21zm686.19 29.67c22.4 22.39 34.64 35.98 36.17 40.2 4.02 12.44 1.34 16.65-32.54 50.91-40 40.58-44.6 43.26-55.89 32.16-10.15-10.34-8.81-13.02 23.16-45.17 15.9-15.9 28.72-29.68 28.72-30.63s-12.82-14.74-28.71-30.63c-30.05-30.43-31.39-32.35-25.84-43.07 3.25-6.32 5.17-7.27 14.17-7.46 6.12-.19 9.37 2.68 40.76 33.69z",
    fill: "#7e1ddf"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M103.6 61.3c-16.08 6.13-30.05 18.38-38.47 34.26-3.64 6.89-4.4 11.1-4.4 27.37 0 16.46.57 20.48 4.59 28.71 6.32 12.82 19.14 25.07 32.35 31.2 15.89 7.27 36.94 7.27 53.02-.19 14.93-6.89 26.22-18.18 32.92-32.73 7.46-16.27 7.46-37.32.19-53.21-6.12-13.21-18.37-26.03-31.2-32.16-11.49-5.74-37.71-7.46-49-3.25zm36.94 34.26c24.69 13.97 20.29 49.96-7.08 58.95-20.29 6.7-41.15-9.57-41.15-31.97-.01-24.3 26.41-39.23 48.23-26.98z",
    fill: "red"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M253.09 60.53c-16.46 5.36-35.6 21.82-41.34 35.79-10.91 26.03-4.59 56.85 15.12 74.84 12.82 11.48 26.61 16.65 44.41 16.65 12.44 0 17.23-.77 26.03-4.98 42.11-19.52 52.45-72.73 20.29-104.89-12.82-12.82-24.31-17.8-43.45-18.38-9.01-.37-18.38.01-21.06.97zm32.34 33.69c24.12 12.44 23.73 47.47-.57 58.57-10.34 4.59-17.23 4.59-27.56-.38-11.29-5.55-17.8-15.69-17.99-28.14 0-13.4 6.32-23.93 18.57-30.63 5.54-3.06 21.24-2.87 27.55.58z",
    fill: "#15cd14"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M396.64 61.87c-17.99 6.51-30.62 18.38-38.85 36.75-3.06 6.7-4.02 12.82-4.02 24.31 0 18.18 5.36 31.97 17.8 45.55 17.8 19.14 49.38 25.46 73.31 14.36 13.21-6.12 26.03-18.37 32.35-31.2 4.02-8.23 4.59-12.25 4.59-28.71 0-17.04-.57-20.29-5.17-28.71-5.74-11.29-18.57-23.73-30.63-29.86-10.91-5.74-36.75-7.08-49.38-2.49zm38.47 33.88c9.95 6.7 15.12 15.7 15.12 26.61 0 23.93-21.44 39.62-43.07 31.2-25.46-9.57-28.9-43.64-5.74-57.61 10.34-6.13 24.7-6.32 33.69-.2z",
    fill: "#0f56f4"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M10 808.16v178.96h980V629.2H10v178.96zm233.32-122.88c44.21 15.5 73.69 54.93 76.37 101.83 2.3 45.55-22.78 88.62-63.16 107.76-18.76 9-31.01 11.87-50.91 11.87-31.2 0-57.61-11.1-79.82-33.5-22.4-22.2-33.5-48.62-33.5-79.05 0-20.86 2.68-32.73 11.87-51.87 13.78-28.9 40.58-50.91 72.73-59.53 19.72-5.36 46.9-4.4 66.42 2.49zm283.29-3.44c30.43 7.27 62.21 32.73 75.22 60.29 9.19 19.14 12.06 31.96 11.87 52.64-.38 47.08-29.09 87.66-75.03 105.85-11.48 4.4-15.5 4.98-37.71 5.17-21.25 0-26.8-.57-37.71-4.4-33.69-11.68-62.02-41.15-72.92-75.99-6.13-19.71-5.55-48.43 1.15-67.57 6.89-19.91 15.5-33.3 30.63-47.47 14.17-13.4 33.5-24.31 50.72-28.33 14.54-3.64 38.84-3.64 53.78-.19zm295.91.95c31.96 8.23 59.53 30.43 73.31 59.72 9 18.76 11.87 31.01 11.87 50.91 0 31.2-11.1 57.42-33.5 79.82s-48.62 33.5-79.82 33.5c-19.91 0-32.16-2.87-50.91-11.87-61.63-29.29-82.5-108.72-43.45-166.14 26.99-39.81 75.41-58 122.5-45.94z",
    fill: "#007dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M181.88 715.14c-22.78 7.27-38.85 21.44-49.96 44.21-5.74 11.67-6.13 13.59-6.13 33.5 0 19.71.38 21.82 6.13 34.07 13.02 27.18 39.05 45.17 67.95 46.89 75.8 4.4 116.95-84.79 63.55-138.2-21.44-21.43-53.4-29.47-81.54-20.47z",
    fill: "#ffa600"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M480.09 713.61C468.22 716.48 451 726.63 442 736.2c-12.06 12.82-18.38 24.88-21.63 41.15-5.36 25.84 1.72 51.1 19.72 70.24 16.65 17.99 36.18 26.61 59.91 26.61 49.77 0 89-45.94 80.39-93.98-8.61-47.28-53.98-77.52-100.3-66.61z",
    fill: "#e82c9a"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M771.8 714.57c-27.37 7.28-49.19 29.48-56.27 57.23-10.53 40.2 8.81 79.24 48.04 97.04 7.66 3.45 12.83 4.21 30.24 4.21 19.91.19 21.82-.19 34.07-5.93 17.04-8.04 32.16-23.16 40.2-40.2 5.74-12.25 6.13-14.16 5.93-34.07 0-17.42-.77-22.59-4.21-30.24-17.8-39.43-57.62-58.95-98-48.04z",
    fill: "#18da70"
  })));
};

var signup = function signup(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "0 0 417.118 417.118"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M176.505 0c46.66 0 84.49 37.82 84.49 84.48 0 46.67-37.83 110.49-84.49 110.49s-84.49-63.82-84.49-110.49c0-46.66 37.83-84.48 84.49-84.48z",
    fill: "#fcd09f"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("circle", {
    cx: 303.365,
    cy: 327.118,
    r: 90,
    fill: "#ef806f"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#fff",
    d: "M241.14 319.618h124.451v15H241.14z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    fill: "#fff",
    d: "M295.865 264.893h15v124.451h-15z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M199.363 327.118c0 21.69 6.67 41.85 18.09 58.54a228.305 228.305 0 01-40.95 3.68c-58.79 0-112.38-22.3-152.75-58.91v-.13c0-60.89 35.63-113.45 87.17-137.98 19.37 19.32 42.05 29.73 65.58 29.73 23.54 0 46.21-10.41 65.59-29.73a152.878 152.878 0 0144.54 32.15c-49.42 8.02-87.27 51-87.27 102.65z",
    fill: "#1ea6c6"
  }));
};

var section = function section(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 512,
    viewBox: "0 0 192 192",
    width: 512
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M178.4 188.8H13.6c-5.744 0-10.4-4.656-10.4-10.4v-140h185.6v140c0 5.744-4.656 10.4-10.4 10.4z",
    fill: "#e7eced"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M188.8 41.6H3.2v-28c0-5.744 4.656-10.4 10.4-10.4h164.8c5.744 0 10.4 4.656 10.4 10.4z",
    fill: "#556080"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M16 16h12.8v12.8H16z",
    fill: "#dd352e"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M41.6 16h12.8v12.8H41.6z",
    fill: "#ebba16"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M67.2 16H80v12.8H67.2z",
    fill: "#23a24d"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M19.2 124.8h153.6v48H19.2z",
    fill: "#ebba16"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#4d007e"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M177.6 192H14.4C6.461 192 0 185.539 0 177.6V14.4C0 6.461 6.461 0 14.4 0h163.2c7.939 0 14.4 6.461 14.4 14.4v163.2c0 7.939-6.461 14.4-14.4 14.4zM14.4 6.4c-4.41 0-8 3.587-8 8v163.2c0 4.413 3.59 8 8 8h163.2c4.413 0 8-3.587 8-8V14.4c0-4.413-3.59-8-8-8z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M28.8 32H16a3.2 3.2 0 01-3.2-3.2V16a3.2 3.2 0 013.2-3.2h12.8A3.2 3.2 0 0132 16v12.8a3.2 3.2 0 01-3.2 3.2zm-9.6-6.4h6.4v-6.4h-6.4zM54.4 32H41.6a3.2 3.2 0 01-3.2-3.2V16a3.2 3.2 0 013.2-3.2h12.8a3.2 3.2 0 013.2 3.2v12.8a3.2 3.2 0 01-3.2 3.2zm-9.6-6.4h6.4v-6.4h-6.4zM80 32H67.2a3.2 3.2 0 01-3.2-3.2V16a3.2 3.2 0 013.2-3.2H80a3.2 3.2 0 013.2 3.2v12.8A3.2 3.2 0 0180 32zm-9.6-6.4h6.4v-6.4h-6.4z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M188.8 44.8H3.2A3.2 3.2 0 010 41.6V14.4C0 6.461 6.461 0 14.4 0h163.2c7.939 0 14.4 6.461 14.4 14.4v27.2a3.2 3.2 0 01-3.2 3.2zM6.4 38.4h179.2v-24c0-4.413-3.59-8-8-8H14.4c-4.41 0-8 3.587-8 8zM24 112h-4.8a3.2 3.2 0 01-3.2-3.2V104a3.2 3.2 0 116.4 0v1.6H24a3.2 3.2 0 110 6.4zM19.2 92.07a3.2 3.2 0 01-3.2-3.2V77.523a3.2 3.2 0 116.4 0V88.87a3.2 3.2 0 01-3.2 3.2zM19.2 65.6a3.2 3.2 0 01-3.2-3.2v-4.8a3.2 3.2 0 013.2-3.2H24a3.2 3.2 0 110 6.4h-1.6v1.6a3.2 3.2 0 01-3.2 3.2zM155.478 60.8h-9.392a3.2 3.2 0 110-6.4h9.392a3.2 3.2 0 110 6.4zm-21.913 0h-9.392a3.2 3.2 0 110-6.4h9.392c1.766 0 3.2 1.43 3.2 3.2s-1.431 3.2-3.2 3.2zm-21.914 0h-9.392a3.2 3.2 0 110-6.4h9.392a3.2 3.2 0 110 6.4zm-21.913 0h-9.392a3.2 3.2 0 110-6.4h9.392c1.766 0 3.2 1.43 3.2 3.2s-1.431 3.2-3.2 3.2zm-21.911 0h-9.392a3.2 3.2 0 110-6.4h9.392a3.2 3.2 0 110 6.4zm-21.913 0h-9.392a3.2 3.2 0 110-6.4h9.392a3.2 3.2 0 110 6.4zM172.8 65.6a3.2 3.2 0 01-3.2-3.2v-1.6H168a3.2 3.2 0 110-6.4h4.8a3.2 3.2 0 013.2 3.2v4.8a3.2 3.2 0 01-3.2 3.2zM172.8 92.074a3.2 3.2 0 01-3.2-3.2V77.526a3.2 3.2 0 116.4 0v11.347a3.2 3.2 0 01-3.2 3.201zM172.8 112H168a3.2 3.2 0 110-6.4h1.6V104a3.2 3.2 0 116.4 0v4.8a3.2 3.2 0 01-3.2 3.2zM155.478 112h-9.392a3.2 3.2 0 110-6.4h9.392a3.2 3.2 0 110 6.4zm-21.913 0h-9.392a3.2 3.2 0 110-6.4h9.392c1.766 0 3.2 1.43 3.2 3.2s-1.431 3.2-3.2 3.2zm-21.914 0h-9.392a3.2 3.2 0 110-6.4h9.392a3.2 3.2 0 110 6.4zm-21.913 0h-9.392a3.2 3.2 0 110-6.4h9.392c1.766 0 3.2 1.43 3.2 3.2s-1.431 3.2-3.2 3.2zm-21.911 0h-9.392a3.2 3.2 0 110-6.4h9.392a3.2 3.2 0 110 6.4zm-21.913 0h-9.392a3.2 3.2 0 110-6.4h9.392a3.2 3.2 0 110 6.4zM96 96a3.2 3.2 0 01-3.2-3.2V73.6a3.2 3.2 0 116.4 0v19.2A3.2 3.2 0 0196 96z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M105.6 86.4H86.4a3.2 3.2 0 110-6.4h19.2a3.2 3.2 0 110 6.4zM172.8 176H19.2a3.2 3.2 0 01-3.2-3.2v-48a3.2 3.2 0 013.2-3.2h153.6a3.2 3.2 0 013.2 3.2v48a3.2 3.2 0 01-3.2 3.2zm-150.4-6.4h147.2V128H22.4z"
  })));
};

var login = function login(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 512,
    viewBox: "0 0 468 468",
    width: 512
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M312.591 344.677H127.409c-6.119 0-11.08-4.96-11.08-11.079V200.293a11.08 11.08 0 017.678-10.544l45.857-14.792a11.08 11.08 0 0113.526 6.044L220 263.37l36.609-82.368a11.08 11.08 0 0113.526-6.044l45.857 14.792a11.08 11.08 0 017.678 10.544v133.304c0 6.119-4.96 11.079-11.079 11.079z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M154.626 212.95l37.075-13.249-8.311-18.699a11.08 11.08 0 00-13.526-6.044l-45.857 14.792a11.08 11.08 0 00-7.678 10.544v133.304c0 6.119 4.96 11.079 11.08 11.079h17.92V226.162a14.028 14.028 0 019.297-13.212z",
    fill: "#e6e7e8"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ellipse", {
    cx: 220,
    cy: 71.127,
    fill: "#0795fe",
    rx: 66,
    ry: 66.127
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M206.297 269.484l-35.176-79.143-39.792 12.836v21.486h-30v-24.369c0-11.376 7.268-21.362 18.084-24.85l45.854-14.791c12.708-4.103 26.395 2.016 31.825 14.235L220 226.425l22.906-51.537c5.431-12.219 19.115-18.339 31.827-14.236l45.855 14.792c10.814 3.487 18.082 13.473 18.082 24.849v20.654h-30v-17.77l-39.792-12.836-35.176 79.143c-4.702 11.041-21.702 12.795-27.405 0zM101.329 248.708h30v26.529h-30z",
    fill: "#3e4d6c"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M265.425 309.396l-84.916-.068-32.036 20.122-31.448-20.146-32.036 20.122-29.867-20.145L15 348.722l40.52 39.486 206.349.113c15.2 35.444 54.062 59.627 94.383 59.649 53.761.029 97.022-44.242 96.746-99.008s-43.983-99.084-97.744-99.114c-40.321-.022-74.986 24.12-89.829 59.548z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M368.253 416.91c-36.445-.02-71.697-19.778-89.362-49.749-3.607-6.12-10.142-9.903-17.235-9.906l-194.136-.107-30.679-29.896L15 348.722l40.52 39.485 206.349.113c15.2 35.444 54.062 59.626 94.383 59.648 46.801.025 85.638-33.523 94.729-78.339-16.942 28.392-47.59 47.3-82.728 47.281z",
    fill: "#e6e7e8"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ellipse", {
    cx: 356.197,
    cy: 348.91,
    fill: "#0795fe",
    rx: 21,
    ry: 21.383
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M356.291 463c-41.688 0-83.468-22.755-103.792-59.653l-197.042-.108a14.988 14.988 0 01-10.452-4.255L4.479 359.498c-5.953-5.801-5.976-15.674-.047-21.501l40.128-39.442a14.981 14.981 0 0118.884-1.74l21.783 14.691 23.782-14.934a14.974 14.974 0 0116.049.071l23.449 15.02 23.992-15.068a14.981 14.981 0 017.969-2.295h.012l75.445.061c19.323-36.48 57.254-59.541 99.26-59.541h.061c61.854.035 112.434 51.206 112.751 114.067.311 61.511-49.791 114.111-111.706 114.113zM61.56 373.184l200.289.11a14.999 14.999 0 0113.775 9.096c12.76 29.745 45.912 50.533 80.622 50.553 45.511 0 81.975-38.801 81.748-83.903-.233-46.381-37.361-84.136-82.764-84.161h-.045c-33.33 0-63.14 19.754-75.956 50.337a15.003 15.003 0 01-13.833 9.212h-.012l-80.608-.065-28.38 17.823a14.984 14.984 0 01-16.05-.071l-23.449-15.02-23.993 15.067a14.979 14.979 0 01-16.346-.266l-19.719-13.3-20.432 20.082z",
    fill: "#3e4d6c"
  })));
};

var wpdmLogo = function wpdmLogo(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      width: '18px',
      height: '18px',
      marginLeft: '8px'
    },
    viewBox: "0 0 327.3 327.3"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("linearGradient", {
    id: "prefix__linear-gradient",
    x1: 11.99,
    y1: 216.58,
    x2: 263.62,
    y2: 129.92,
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("stop", {
    offset: 0,
    stopColor: "#3c80e4"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("stop", {
    offset: 1,
    stopColor: "#229df0"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("title", null, 'wpdm logo v5'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    id: "prefix__Layer_2",
    "data-name": "Layer 2"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    id: "prefix__download-manager-logo"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    id: "prefix__wpdm_logo_v3",
    "data-name": "wpdm logo v3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    id: "prefix__arrow",
    d: "M149.87 180.29l-91.41-91A20 20 0 0158.39 61L64 55.36a20 20 0 0128.29-.07l71.52 71.18 71-71.7a20 20 0 0128.29-.13l5.68 5.62a20 20 0 01.14 28.29l-90.75 91.64a20 20 0 01-28.3.1z",
    fill: "#3c80e4"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    id: "prefix__circle",
    d: "M186.66 202.9a32 32 0 01-45.29.16l-43.79-43.58a78 78 0 10132.49-.41z",
    fill: "#094168"
  })))));
};

var posts = function posts(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: "512pt",
    viewBox: "0 0 512 512",
    width: "512pt"
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M512 120v392H0V120l39.3-30h433.4zm0 0",
    fill: "#f2f2fc"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M512 120v392H256V90h216.7zm0 0",
    fill: "#d8d8fc"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M271 181h196v30H271zm0 0M271 241h196v30H271zm0 0",
    fill: "#a3a3d1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M45 301h422v30H45zm0 0M45 361h196v30H45zm0 0M45 421h196v30H45zm0 0",
    fill: "#d8d8fc"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M467 451H271v-90h196zm0 0M256 301h211v30H256zm0 0",
    fill: "#a3a3d1"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M45 181v90h196v-90zm0 0",
    fill: "#d8d8fc"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M512 0H361l-30 69.375L361 120h151zm0 0",
    fill: "#47568c"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M0 0h361v120H0zm0 0",
    fill: "#4bb9ec"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M256 0h105v120H256zm0 0",
    fill: "#0095ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    fill: "#f2f2fc"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M60 45h30v30H60zm0 0M121 45h30v30h-30zm0 0M181 45h30v30h-30zm0 0"
  })));
};

var dashboard = function dashboard(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 512,
    viewBox: "0 0 512 512",
    width: 512
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M328.2 447.99H183.8l10-57.79h124.4z",
    fill: "#aac2cc"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M328.2 447.99h-29.32l-10-57.79h29.32z",
    fill: "#86a0a8"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M348.203 447.991H163.798c-8.284 0-15 6.716-15 15s6.716 15 15 15h184.406c8.284 0 15-6.716 15-15s-6.716-15-15.001-15z",
    fill: "#c2e8ef"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M363.203 462.991c0 8.28-6.72 15-15 15h-30c8.28 0 15-6.72 15-15 0-8.29-6.72-15-15-15h30c8.28 0 15 6.711 15 15z",
    fill: "#9dcfd6"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M504.5 57.72v308.76c0 13.1-10.62 23.72-23.71 23.72H31.21c-12.17 0-22.21-9.18-23.55-21a22.2 22.2 0 01-.16-2.72V57.72c0-13.09 10.62-23.71 23.71-23.71h449.58c13.09 0 23.71 10.62 23.71 23.71z",
    fill: "#e1f9ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M504.5 57.72v308.76c0 13.1-10.62 23.72-23.71 23.72H31.21c-12.17 0-22.21-9.18-23.55-21h448.12c13.1 0 23.72-10.62 23.72-23.72V57.72c0-13.09-10.62-23.71-23.71-23.71h25c13.09 0 23.71 10.62 23.71 23.71z",
    fill: "#c2e8ef"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M504.5 350.2v16.28c0 13.1-10.62 23.72-23.71 23.72H31.21c-12.17 0-22.21-9.18-23.55-21a22.2 22.2 0 01-.16-2.72V350.2z",
    fill: "#4a555b"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M504.5 350.2v16.28c0 13.1-10.62 23.72-23.71 23.72H31.21c-12.17 0-22.21-9.18-23.55-21h448.12c11.48 0 21.06-8.16 23.25-19z",
    fill: "#2d383d"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M317.281 186.559h-38.919v-78.954h38.919z",
    fill: "#ffd85c"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M388.891 186.559h-38.919V129.06h38.919z",
    fill: "#ff6248"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M459.971 186.559h-38.919V87.81h38.919z",
    fill: "#2cdddd"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M480.787 26.509h-96.481a7.5 7.5 0 000 15h96.481c8.94 0 16.213 7.273 16.213 16.213v284.974H15V57.722c0-8.94 7.273-16.213 16.213-16.213h318.092a7.5 7.5 0 000-15H31.213C14.002 26.509 0 40.511 0 57.722v308.761c0 17.211 14.002 31.213 31.213 31.213h71.801a7.5 7.5 0 000-15H31.213c-8.94 0-16.213-7.273-16.213-16.213v-8.787h482v8.787c0 8.94-7.273 16.213-16.213 16.213H137.684a7.5 7.5 0 000 15h47.204l-7.405 42.795h-13.686c-12.407 0-22.5 10.093-22.5 22.5s10.093 22.5 22.5 22.5h184.406c12.407 0 22.5-10.093 22.5-22.5s-10.093-22.5-22.5-22.5h-13.686l-7.405-42.795h153.674c17.211 0 31.213-14.002 31.213-31.213V57.722c.001-17.211-14.001-31.213-31.212-31.213zM319.294 440.491h-20.418a7.5 7.5 0 000 15h49.327c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5H163.797c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5h100.067a7.5 7.5 0 000-15h-71.158l7.405-42.795H311.89z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M405.719 216.277a7.501 7.501 0 00-6.685 4.099l-35.394 69.565-29.868-58.705a7.501 7.501 0 00-13.37 0l-16.191 31.822H278.36a7.5 7.5 0 000 15h30.45a7.501 7.501 0 006.685-4.099l11.592-22.783 29.868 58.705a7.501 7.501 0 0013.37 0l35.394-69.565 17.117 33.644a7.501 7.501 0 006.685 4.099h30.45a7.5 7.5 0 000-15H434.12l-21.716-42.683a7.501 7.501 0 00-6.685-4.099zM278.363 194.059h38.919a7.5 7.5 0 007.5-7.5v-78.954a7.5 7.5 0 00-7.5-7.5h-38.919a7.5 7.5 0 00-7.5 7.5v78.954a7.5 7.5 0 007.5 7.5zm7.5-78.954h23.919v63.954h-23.919zM388.891 121.56h-38.919a7.5 7.5 0 00-7.5 7.5v57.499a7.5 7.5 0 007.5 7.5h38.919a7.5 7.5 0 007.5-7.5V129.06a7.5 7.5 0 00-7.5-7.5zm-7.5 57.499h-23.919V136.56h23.919zM459.971 194.059a7.5 7.5 0 007.5-7.5V87.81a7.5 7.5 0 00-7.5-7.5h-38.919a7.5 7.5 0 00-7.5 7.5v98.749a7.5 7.5 0 007.5 7.5zM428.552 95.31h23.919v83.749h-23.919zM221.898 165.152h-170a7.5 7.5 0 000 15h170a7.5 7.5 0 000-15zM51.898 219.993H82.32a7.5 7.5 0 000-15H51.898a7.5 7.5 0 000 15zM221.898 204.993H116.685a7.5 7.5 0 000 15h105.213a7.5 7.5 0 000-15zM221.898 80.31h-170a7.5 7.5 0 000 15h170a7.5 7.5 0 000-15zM51.898 135.152H157.32a7.5 7.5 0 000-15H51.898a7.5 7.5 0 000 15zM221.898 120.152h-30.213a7.5 7.5 0 000 15h30.213a7.5 7.5 0 000-15zM229.398 251.851a7.5 7.5 0 00-7.5-7.5h-170a7.5 7.5 0 000 15h170a7.5 7.5 0 007.5-7.5zM51.898 283.981a7.5 7.5 0 000 15h80a7.5 7.5 0 000-15z"
  })));
};

var search = function search(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 512,
    viewBox: "0 0 512 512",
    width: 512
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M30.2 242.6c0 38 30.9 69 69 69H124c6-61.8 58.1-110.2 121.4-110.2s115.5 48.5 121.4 110.2h45.9c38 0 69-30.9 69-69s-30.9-69-69-69c-7.2 0-14.4 1.2-21.3 3.4-10.9 2.9-18.8-5.5-18.5-13.7 1.2-77.3-60-132.7-129.8-133-37.4-1.1-74.8 17.5-99.7 47.6h30.1c7.8 0 14.1 6.3 14.1 14.1s-6.3 14.1-14.1 14.1h-48.1c-3.7 7.9-6.7 16.3-8.7 25.1h24.9c7.8 0 14.1 6.3 14.1 14.1s-6.3 14.1-14.1 14.1h-28.3v.1c0 7.8-6.3 14-14.1 14-38 .1-69 31.1-69 69.1z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M353.3 283.4h59.5c22.5 0 40.8-18.3 40.8-40.8s-18.3-40.8-40.8-40.8c-4.2 0-8.5.7-12.6 2l-56.8 18.5 1.4-59.7c.7-28.1-9.9-54.5-29.6-74.3-19.2-19.2-44.7-29.8-71.9-29.8s-52.7 10.6-71.9 29.8c-19.1 19.1-29.6 44.4-29.7 71.4l-.2 42.1H99.2c-22.5 0-40.8 18.3-40.8 40.8s18.3 40.8 40.8 40.8h38.4",
    fill: "#56ace0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M339.3 323.4c0-51.7-42.1-93.8-93.8-93.8s-93.8 42.1-93.8 93.8 42.1 93.8 93.8 93.8 93.8-42.1 93.8-93.8zM245.5 389c-17.5 0-34-6.8-46.4-19.2-25.6-25.6-25.6-67.2 0-92.8 12.4-12.4 28.9-19.2 46.4-19.2s34 6.8 46.4 19.2c25.6 25.6 25.6 67.2 0 92.8-12.4 12.4-28.9 19.2-46.4 19.2z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M340.1 400.3c-5.3 6.5-11.2 12.4-17.7 17.7l60.2 60.2c4.9 4.9 12.9 4.9 17.7 0 4.9-4.9 4.9-12.9 0-17.7z",
    fill: "#ffc10d"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M412.8 339.8c53.6 0 97.2-43.6 97.2-97.2s-43.6-97.2-97.2-97.2c-4.1 0-8.1.3-12.2.8-7.3-84.7-78.7-144-157.4-144.1-85.4.7-151.7 67.8-157.5 144.2C38.5 152.9 2 193.6 2 242.6c0 53.6 43.6 97.2 97.2 97.2h25.5c8.1 59.6 59.1 105.6 120.8 105.6 18.8 0 36.5-4.4 52.4-12l64.7 64.7c13.2 13.4 39.4 17.7 57.7 0 15.9-15.9 15.9-41.8 0-57.7l-64.7-64.7c5.3-11.2 9-23.3 10.8-36h46.4zM30.2 242.6c0-38 30.9-69 69-69 7.8 0 14.1-6.3 14.1-14v-.1h28.3c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1h-24.9c2.1-8.8 5-17.1 8.7-25.1h48.1c7.8 0 14.1-6.3 14.1-14.1S181.3 78 173.5 78h-30.1c25-30.1 62.3-48.7 99.7-47.6 69.8.2 131 55.7 129.8 133-.4 8.2 7.5 16.7 18.5 13.7 7-2.3 14.1-3.4 21.3-3.4 38 0 69 30.9 69 69s-30.9 69-69 69h-45.9c-6-61.8-58.1-110.2-121.4-110.2S130 249.8 124 311.6H99.2c-38 0-69-31-69-69zm121.4 80.8c0-51.7 42.1-93.8 93.8-93.8s93.8 42.1 93.8 93.8-42.1 93.8-93.8 93.8-93.8-42.1-93.8-93.8zm248.7 137.1c4.9 4.9 4.9 12.9 0 17.7-4.9 4.9-12.9 4.9-17.7 0L322.4 418c6.5-5.3 12.4-11.2 17.7-17.7z",
    fill: "#194f82"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("circle", {
    cx: 245.5,
    cy: 323.4,
    fill: "#ffc10d",
    r: 66.2
  }));
};

var email_download = function email_download(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 512,
    viewBox: "0 0 468 468",
    width: 512
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M47 190.997h374v262.019H47z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M87 191H47v262h374v-40H309c-122.607 0-222-99.393-222-222z",
    fill: "#e6e7e8"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M234 22.985L47 190.643l186.855 168.443L421 190.643z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M284.392 15.128l-169.334-.112-.5 236.523 119.297 107.547L355 249.867V85.87z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M355 85.87h-70.258V15.009z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M182 233.001h115v30H182z",
    fill: "#0795fe"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M435.514 194c1.131-5.136-.357-10.809-4.5-14.525L370 124.771V86h-.009c-.001-4-1.499-7.761-4.34-10.626L295.174 4.48C293.392 2.683 292 1.491 289 .822V.099L115.068 0h-.011c-8.271 0-14.982 6.704-15 14.976l-.229 108.156-62.843 56.343a15.002 15.002 0 00-4.986 11.148L32 453c0 8.284 6.716 15 15 15h374c8.284 0 15-6.716 15-15V194zM370 165.064l28.535 25.584L370 216.253zM300 51.442L319.004 71H300zM130.119 30.027l139.881.07V85.87c0 8.284 6.457 15.13 14.741 15.13H340v142.194L233.855 338.89l-104.189-94.01zM99.744 163.5l-.115 54.386-30.192-27.214zM406 438H62V224.358l161.811 145.868c5.618 5.065 14.469 5.066 20.088 0L406 224.324z",
    fill: "#3e4d6c"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M258.778 141.063l-9.855 12.193V79h-30v75.767l-10.144-11.972-22.889 19.394 36.588 43.345c6.158 7.268 17.144 7.115 23.11-.267l36.521-45.264z",
    fill: "#0795fe"
  }));
};

var table = function table(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 512,
    viewBox: "0 0 468 468",
    width: 512
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M47 101.813V439c0 7.732 6.268 14 14 14h346c7.732 0 14-6.268 14-14V101.813z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M97 101.814H47V439c0 7.732 6.268 14 14 14h346c7.732 0 14-6.268 14-14v-36l-33.392-3.295C231.197 384.269 108.56 258.559 97 101.814z",
    fill: "#e6e7e8"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M421 29c0-7.732-6.268-14-14-14H61c-7.732 0-14 6.268-14 14v72.813h374z",
    fill: "#fff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M407 0H61C45.009 0 32 13.009 32 29v410c0 15.991 13.009 29 29 29h346c15.991 0 29-13.009 29-29V29c0-15.991-13.009-29-29-29zm-1 86.813h-92.517V30H406zm-221.483 0V30h98.966v56.813zm98.966 30V438h-98.966V116.813zM62 30h92.517v56.813H62zm0 86.813h92.517V438H62zM406 438h-92.517V116.813H406z",
    fill: "#3e4d6c"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M205.115 158.373h57.77v30h-57.77zM205.115 228.373h57.77v30h-57.77zM205.115 298.373h57.77v30h-57.77z",
    fill: "#0795fe"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M78.914 158.373h57.769v30H78.914zM78.914 228.373h57.769v30H78.914zM78.914 368.373h57.769v30H78.914z",
    fill: "#3e4d6c"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M331.317 158.373h57.769v30h-57.769zM331.317 298.373h57.769v30h-57.769zM331.317 368.373h57.769v30h-57.769z",
    fill: "#3e4d6c"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M215.982 44.888h36.035v30h-36.035z",
    fill: "#3e4d6c"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M89.78 44.888h36.036v30H89.78z",
    fill: "#0795fe"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M342.184 44.888h36.036v30h-36.036z",
    fill: "#0795fe"
  })));
};

(function () {
  wp.blocks.updateCategory('wpdm-blocks', {
    icon: wpdmLogo
  });
})();

var wpdmIcons = {
  downloadIcon: downloadIcon,
  section: section,
  catIcon: catIcon,
  signup: signup,
  slider: slider,
  packages: packages,
  theCat: theCat,
  btnC2A: btnC2A,
  login: login,
  search: search,
  dashboard: dashboard,
  table: table
};
/* harmony default export */ __webpack_exports__["default"] = (wpdmIcons);

/***/ }),

/***/ "./src/libs/link-templates.js":
/*!************************************!*\
  !*** ./src/libs/link-templates.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Component = wp.element.Component;
var SelectControl = wp.components.SelectControl;

var LinkTemplates = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LinkTemplates, _React$Component);

  var _super = _createSuper(LinkTemplates);

  function LinkTemplates(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LinkTemplates);

    _this = _super.call(this, props);
    _this.state = {
      value: props.value,
      templates: [{
        label: 'Loading Templates...',
        value: ''
      }]
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LinkTemplates, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      /*fetch(wpdmConfig.siteURL + "/wp-json/wpdm/v1/link-templates")
          .then(response => {
              return response.json();
          }).then(data => {
          this.setState({
              templates: data,
          });
      });*/
      wp.apiFetch({
        path: "/wpdm/v2/link-templates"
      }).then(function (templates) {
        _this2.setState({
          templates: templates
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "form-group"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        type: "string",
        label: "Link Template:",
        options: this.state.templates,
        value: this.props.value,
        class: "form-control wpdm-custom-select",
        onChange: this.props.onChange
      }));
    }
  }]);

  return LinkTemplates;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (LinkTemplates);

/***/ }),

/***/ "./src/libs/sortable.js":
/*!******************************!*\
  !*** ./src/libs/sortable.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select/animated */ "./node_modules/react-select/animated/dist/react-select.browser.esm.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var animatedComponents = Object(react_select_animated__WEBPACK_IMPORTED_MODULE_8__["default"])();
var data_fields = [{
  value: 'thumb',
  label: 'Featured Image  ( thumb )'
}, {
  value: 'icon',
  label: 'Package Icon  ( icon )'
}, {
  value: 'title',
  label: 'Post Title  ( title )'
}, {
  value: 'page_link',
  label: 'Linked Post Title  ( page_link )'
}, {
  value: 'date',
  label: 'Publish Date  ( date )'
}, {
  value: 'update_date',
  label: 'Update Date  ( update_date )'
}, {
  value: 'categories',
  label: 'Categories  ( update_date )'
}, {
  value: 'tags',
  label: 'Tags  ( tags )'
}, {
  value: 'download_count',
  label: 'Download Count  ( download_count )'
}, {
  value: 'audio_player',
  label: 'Audio Player  ( audio_player )'
}, {
  value: 'file_count',
  label: 'File Count  ( file_count )'
}, {
  value: 'package_size',
  label: 'Package Size  ( package_size )'
}, {
  value: 'download_link',
  label: 'Download Button  ( download_link )'
}, {
  value: 'details_link',
  label: 'Details Button  ( details_link )'
}];

var Sortable = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Sortable, _React$Component);

  var _super = _createSuper(Sortable);

  function Sortable(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Sortable);

    _this = _super.call(this, props);
    _this.state = {
      list: props.list,
      addcolcard: false,
      insertcoldata_label: null,
      insertcoldata_field: null
    };
    _this.deleteColumn = _this.deleteColumn.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.addColumn = _this.addColumn.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.hideAddColCard = _this.hideAddColCard.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.insertColumnHeader = _this.insertColumnHeader.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.insertColumn = _this.insertColumn.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Sortable, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps) {
      var $this = this;
      jQuery('.sortable-list').sortable({
        update: function update(event, ui) {
          var colheads = jQuery(this).find('.colheads');
          var result = [];
          jQuery.each(jQuery(this).find('.cols'), function (index, field) {
            result.push({
              field: field.value,
              label: colheads[index].value
            });
          }); //$this.setState((prevState) => ({list: result}));

          $this.props.onUpdate(result);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var $this = this;
      jQuery('.sortable-list').sortable({
        update: function update(event, ui) {
          var colheads = jQuery(this).find('.colheads');
          var result = [];
          jQuery.each(jQuery(this).find('.cols'), function (index, field) {
            result.push({
              field: field.value,
              label: colheads[index].value
            });
          }); //$this.setState((prevState) => ({list: result}));

          $this.props.onUpdate(result);
        }
      });
    }
  }, {
    key: "deleteColumn",
    value: function deleteColumn(_item) {
      var field = _item.currentTarget.id;
      this.setState(function (prevState) {
        return {
          list: prevState.list.filter(function (item) {
            return item.field !== field;
          })
        };
      });
      this.props.onDelete(this.state.list.filter(function (item) {
        return item.field !== field;
      }));
    }
  }, {
    key: "addColumn",
    value: function addColumn(_item) {
      this.setState(function (preState) {
        return {
          addcolcard: true
        };
      });
    }
  }, {
    key: "insertColumnHeader",
    value: function insertColumnHeader(_item) {
      var label = _item.currentTarget.value;
      this.setState(function (preState) {
        return {
          insertcoldata_label: label
        };
      });
    }
  }, {
    key: "insertColumn",
    value: function insertColumn(_item) {
      var _list = this.state.list;

      _list.push({
        label: this.state.insertcoldata_label,
        field: this.state.insertcoldata_field
      });

      this.setState(function (prevState) {
        return {
          list: _list,
          addcolcard: false
        };
      });
      this.props.onUpdate(_list);
    }
  }, {
    key: "hideAddColCard",
    value: function hideAddColCard(_item) {
      this.setState(function (preState) {
        return {
          addcolcard: false
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      function onSelectDataField(data_field) {
        var fields = '';
        jQuery.each(data_field, function (index, dataobj) {
          fields += dataobj.value;
        });
        this.setState(function (preState) {
          return {
            insertcoldata_field: fields
          };
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          position: 'relative'
        }
      }, this.state.addcolcard === true && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "card m-0 hide add-column-card"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "card-header"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("i", {
        onClick: this.hideAddColCard.bind(this),
        className: "float-right c-pointer fas fa-times-circle text-primary mt-1"
      }), "Add Table Column"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "card-body"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "form-group"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", null, "Column Header Title"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        type: "text",
        value: this.state.insertcoldata_label,
        onChange: this.insertColumnHeader.bind(this),
        className: "form-control"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "form-group mb-3"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", null, "Column Data"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "data_fields",
        name: "data_fields",
        closeMenuOnSelect: true,
        components: animatedComponents,
        isMulti: true,
        options: data_fields,
        onChange: function onChange(data_field) {
          var fields = [];
          jQuery.each(data_field, function (index, dataobj) {
            fields.push(dataobj.value);
          });
          console.log(fields);
          _this2.state.insertcoldata_field = fields.join(',');
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          clear: 'both'
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "card-footer"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
        type: "button",
        className: "btn btn-success btn-block",
        onClick: this.insertColumn.bind(this)
      }, "Insert Column"))), this.state.addcolcard === false && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("ul", {
        className: "list-group text-sm sortable-list",
        style: {
          overflow: 'hidden'
        }
      }, this.state.list.map(function (item) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("li", {
          style: {
            fontSize: '12px',
            padding: '10px'
          },
          className: "list-group-item d-flex justify-content-between align-items-center m-0"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
          type: "hidden",
          className: "cols",
          name: "cols[]",
          value: item.field
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
          type: "hidden",
          className: "colheads",
          name: "colheads[]",
          value: item.label
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          className: "sorter",
          style: {
            width: '16px',
            cursor: 'pointer'
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("i", {
          className: "fas fa-arrows-alt-v text-info"
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          style: {
            width: 'calc(100% - 48px)',
            overflow: 'hidden'
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("strong", {
          className: "d-block"
        }, item.label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
          style: {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '100%',
            display: 'block'
          },
          className: "text-muted"
        }, item.field)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
          href: "#",
          style: {
            fontSize: '10px'
          },
          onClick: _this2.deleteColumn.bind(_this2),
          id: item.field,
          className: "btn btn-danger btn-sm delete-column"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("i", {
          className: "fas fa-trash"
        })));
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
        className: "btn btn-primary btn-block btn-sm mt-2",
        onClick: this.addColumn.bind(this),
        type: "button"
      }, "Add New Column")));
    }
  }]);

  return Sortable;
}(React.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sortable);

/***/ }),

/***/ "./src/libs/util.js":
/*!**************************!*\
  !*** ./src/libs/util.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var wpdmCategories = [];

var Util = /*#__PURE__*/function () {
  function Util() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Util);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Util, null, [{
    key: "hexToRgba",
    value: function hexToRgba(hex, alpha) {
      if (!hex || hex === 'transparent') return 'transparent';
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      var rgba = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: alpha / 100
      } : null;
      return "rgba( " + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a + ")";
    }
  }, {
    key: "defaultColor",
    value: function defaultColor() {
      /* Default colors */
      var defaultColors = [{
        color: '#ffffff',
        name: 'white'
      }, {
        color: '#392F43',
        name: 'black'
      }, {
        color: '#3373dc',
        name: 'royal blue'
      }, {
        color: '#209cef',
        name: 'sky blue'
      }, {
        color: '#2BAD59',
        name: 'green'
      }, {
        color: '#ff3860',
        name: 'pink'
      }, {
        color: '#7941b6',
        name: 'purple'
      }, {
        color: '#F7812B',
        name: 'orange'
      }, {
        color: 'transparent',
        name: 'Transparent'
      }];
      return defaultColors;
    }
  }, {
    key: "loadCategories",
    value: function loadCategories() {
      wp.apiFetch({
        path: "/wpdm/v1/categories"
      }).then(function (categories) {
        wpdmCategories.push({
          label: "Select a Category",
          value: 0
        });
        jQuery.each(categories, function (key, val) {
          wpdmCategories.push({
            label: val.label,
            value: val.id
          });
        });
      });
    }
  }]);

  return Util;
}();

Util.loadCategories();
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./src/libs/vars.js":
/*!**************************!*\
  !*** ./src/libs/vars.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Default colors */
var defaultColors = [{
  color: '#ffffff',
  name: 'white'
}, {
  color: '#392F43',
  name: 'black'
}, {
  color: '#3373dc',
  name: 'royal blue'
}, {
  color: '#209cef',
  name: 'sky blue'
}, {
  color: '#2BAD59',
  name: 'green'
}, {
  color: '#ff3860',
  name: 'pink'
}, {
  color: '#7941b6',
  name: 'purple'
}, {
  color: '#F7812B',
  name: 'orange'
}];

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map