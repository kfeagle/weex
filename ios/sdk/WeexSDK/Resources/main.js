(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.16.18 Build 20161129');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	__webpack_require__(1);
	
	var _runtime = __webpack_require__(77);
	
	var _runtime2 = _interopRequireDefault(_runtime);
	
	var _package = __webpack_require__(115);
	
	var _methods = __webpack_require__(116);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var native = _package.subversion.native,
	    transformer = _package.subversion.transformer;
	
	// register instance management APIs
	
	var _loop = function _loop(methodName) {
	  global[methodName] = function () {
	    var ret = _runtime2.default[methodName].apply(_runtime2.default, arguments);
	    if (ret instanceof Error) {
	      console.error(ret.toString());
	    }
	    return ret;
	  };
	};
	
	for (var methodName in _runtime2.default) {
	  _loop(methodName);
	}
	
	// register framework meta info
	global.frameworkVersion = native;
	global.transformerVersion = transformer;
	
	// register special methods for Weex framework
	global.registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPlainObject = exports.isObject = exports.toArray = exports.bind = exports.hasOwn = exports.remove = exports.def = exports.extend = undefined;
	
	var _utils = __webpack_require__(2);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _utils.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _utils.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _utils.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _utils.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _utils.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _utils.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isPlainObject;
	  }
	});
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(68);
	
	__webpack_require__(69);
	
	__webpack_require__(75);
	
	__webpack_require__(76);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.extend = extend;
	exports.def = def;
	exports.remove = remove;
	exports.hasOwn = hasOwn;
	exports.bind = bind;
	exports.toArray = toArray;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(target) {
	  for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    src[_key - 1] = arguments[_key];
	  }
	
	  if (typeof Object.assign === 'function') {
	    Object.assign.apply(Object, [target].concat(src));
	  } else {
	    var first = src.shift();
	    for (var key in first) {
	      target[key] = first[key];
	    }
	    if (src.length) {
	      extend.apply(undefined, [target].concat(src));
	    }
	  }
	  return target;
	}
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Remove an item from an array
	 *
	 * @param {Array} arr
	 * @param {*} item
	 */
	
	function remove(arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1);
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * @fileOverview
	 * Polyfill `setTimeout` on Android V8 using native method
	 * `setTimeoutNative(callbackId, time)` and JS method
	 * `setTimeoutCallback(callbackId)`.
	 * This polyfill is only used in virtual-DOM diff & flush agorithm. Not
	 * accessed by JS Bundle code (The timer APIs polyfill for JS Bundle is in
	 * `html5/default/app/ctrl.js`).
	 */
	
	var _global = global,
	    setTimeout = _global.setTimeout,
	    setTimeoutNative = _global.setTimeoutNative;
	
	/* istanbul ignore if */
	
	if (typeof setTimeout === 'undefined' && typeof setTimeoutNative === 'function') {
	  (function () {
	    var timeoutMap = {};
	    var timeoutId = 0;
	
	    global.setTimeout = function (cb, time) {
	      timeoutMap[++timeoutId] = cb;
	      setTimeoutNative(timeoutId.toString(), time);
	    };
	
	    global.setTimeoutCallback = function (id) {
	      if (typeof timeoutMap[id] === 'function') {
	        timeoutMap[id]();
	        delete timeoutMap[id];
	      }
	    };
	  })();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	var _global = global,
	    WXEnvironment = _global.WXEnvironment;
	
	if (WXEnvironment && WXEnvironment.platform === 'iOS') {
	  global.Promise = null;
	}
	__webpack_require__(5);
	__webpack_require__(25);
	__webpack_require__(51);
	__webpack_require__(55);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(6),
	    test = {};
	test[__webpack_require__(8)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(12)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(7),
	    TAG = __webpack_require__(8)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(9)('wks'),
	    uid = __webpack_require__(11),
	    _Symbol = __webpack_require__(10).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    hide = __webpack_require__(13),
	    has = __webpack_require__(23),
	    SRC = __webpack_require__(11)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(24).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(14),
	    createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(15),
	    IE8_DOM_DEFINE = __webpack_require__(17),
	    toPrimitive = __webpack_require__(21),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(16);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function () {
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(16),
	    document = __webpack_require__(10).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(26)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(29)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(27),
	    defined = __webpack_require__(28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(30),
	    $export = __webpack_require__(31),
	    redefine = __webpack_require__(12),
	    hide = __webpack_require__(13),
	    has = __webpack_require__(23),
	    Iterators = __webpack_require__(34),
	    $iterCreate = __webpack_require__(35),
	    setToStringTag = __webpack_require__(48),
	    getPrototypeOf = __webpack_require__(49),
	    ITERATOR = __webpack_require__(8)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
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
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
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

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    core = __webpack_require__(24),
	    hide = __webpack_require__(13),
	    redefine = __webpack_require__(12),
	    ctx = __webpack_require__(32),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(33);
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
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(36),
	    descriptor = __webpack_require__(22),
	    setToStringTag = __webpack_require__(48),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(8)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(15),
	    dPs = __webpack_require__(37),
	    enumBugKeys = __webpack_require__(46),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(20)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
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
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(14),
	    anObject = __webpack_require__(15),
	    getKeys = __webpack_require__(38);
	
	module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(39),
	    enumBugKeys = __webpack_require__(46);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(23),
	    toIObject = __webpack_require__(40),
	    arrayIndexOf = __webpack_require__(42)(false),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(41),
	    defined = __webpack_require__(28);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(7);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(40),
	    toLength = __webpack_require__(43),
	    toIndex = __webpack_require__(44);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(27),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(9)('keys'),
	    uid = __webpack_require__(11);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(14).f,
	    has = __webpack_require__(23),
	    TAG = __webpack_require__(8)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(23),
	    toObject = __webpack_require__(50),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(52),
	    redefine = __webpack_require__(12),
	    global = __webpack_require__(10),
	    hide = __webpack_require__(13),
	    Iterators = __webpack_require__(34),
	    wks = __webpack_require__(8),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(53),
	    step = __webpack_require__(54),
	    Iterators = __webpack_require__(34),
	    toIObject = __webpack_require__(40);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(29)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(8)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(13)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(30),
	    global = __webpack_require__(10),
	    ctx = __webpack_require__(32),
	    classof = __webpack_require__(6),
	    $export = __webpack_require__(31),
	    isObject = __webpack_require__(16),
	    aFunction = __webpack_require__(33),
	    anInstance = __webpack_require__(56),
	    forOf = __webpack_require__(57),
	    speciesConstructor = __webpack_require__(61),
	    task = __webpack_require__(62).set,
	    microtask = __webpack_require__(64)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(8)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(65)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(48)($Promise, PROMISE);
	__webpack_require__(66)(PROMISE);
	Wrapper = __webpack_require__(24)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(67)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(32),
	    call = __webpack_require__(58),
	    isArrayIter = __webpack_require__(59),
	    anObject = __webpack_require__(15),
	    toLength = __webpack_require__(43),
	    getIterFn = __webpack_require__(60),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(15);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(34),
	    ITERATOR = __webpack_require__(8)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(6),
	    ITERATOR = __webpack_require__(8)('iterator'),
	    Iterators = __webpack_require__(34);
	module.exports = __webpack_require__(24).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(15),
	    aFunction = __webpack_require__(33),
	    SPECIES = __webpack_require__(8)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(32),
	    invoke = __webpack_require__(63),
	    html = __webpack_require__(47),
	    cel = __webpack_require__(20),
	    global = __webpack_require__(10),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(7)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    macrotask = __webpack_require__(62).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(7)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(12);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    dP = __webpack_require__(14),
	    DESCRIPTORS = __webpack_require__(18),
	    SPECIES = __webpack_require__(8)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(8)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @fileOverview
	 * This file will hack `console` methods by `WXEnvironment.logLevel`.
	 * So we can control how many and which messages will be sent by change the log level.
	 * Additionally in native platform the message content must be primitive values and
	 * using `nativeLog(...args, logLevelMark)` so we create a new `console` object in
	 * global add a format process for its methods.
	 */
	
	var _global = global,
	    console = _global.console,
	    nativeLog = _global.nativeLog;
	
	var LEVELS = ['off', 'error', 'warn', 'info', 'log', 'debug'];
	var levelMap = {};
	
	generateLevelMap();
	
	/* istanbul ignore if */
	if (typeof console === 'undefined' || // Android
	global.WXEnvironment && global.WXEnvironment.platform === 'iOS' // iOS
	) {
	    global.console = {
	      debug: function debug() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        if (checkLevel('debug')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__DEBUG']));
	        }
	      },
	      log: function log() {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }
	
	        if (checkLevel('log')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__LOG']));
	        }
	      },
	      info: function info() {
	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }
	
	        if (checkLevel('info')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__INFO']));
	        }
	      },
	      warn: function warn() {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }
	
	        if (checkLevel('warn')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__WARN']));
	        }
	      },
	      error: function error() {
	        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	          args[_key5] = arguments[_key5];
	        }
	
	        if (checkLevel('error')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__ERROR']));
	        }
	      }
	    };
	  } else {
	  // HTML5
	  var debug = console.debug,
	      log = console.log,
	      info = console.info,
	      warn = console.warn,
	      error = console.error;
	
	  console.__ori__ = { debug: debug, log: log, info: info, warn: warn, error: error };
	  console.debug = function () {
	    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	      args[_key6] = arguments[_key6];
	    }
	
	    if (checkLevel('debug')) {
	      console.__ori__.debug.apply(console, args);
	    }
	  };
	  console.log = function () {
	    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	      args[_key7] = arguments[_key7];
	    }
	
	    if (checkLevel('log')) {
	      console.__ori__.log.apply(console, args);
	    }
	  };
	  console.info = function () {
	    for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	      args[_key8] = arguments[_key8];
	    }
	
	    if (checkLevel('info')) {
	      console.__ori__.info.apply(console, args);
	    }
	  };
	  console.warn = function () {
	    for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	      args[_key9] = arguments[_key9];
	    }
	
	    if (checkLevel('warn')) {
	      console.__ori__.warn.apply(console, args);
	    }
	  };
	  console.error = function () {
	    for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	      args[_key10] = arguments[_key10];
	    }
	
	    if (checkLevel('error')) {
	      console.__ori__.error.apply(console, args);
	    }
	  };
	}
	
	/**
	 * Generate map for which types of message will be sent in a certain message level
	 * as the order of LEVELS.
	 */
	function generateLevelMap() {
	  LEVELS.forEach(function (level) {
	    var levelIndex = LEVELS.indexOf(level);
	    levelMap[level] = {};
	    LEVELS.forEach(function (type) {
	      var typeIndex = LEVELS.indexOf(type);
	      if (typeIndex <= levelIndex) {
	        levelMap[level][type] = true;
	      }
	    });
	  });
	}
	
	/**
	 * Check if a certain type of message will be sent in current log level of env.
	 * @param  {string} type
	 * @return {boolean}
	 */
	function checkLevel(type) {
	  var logLevel = global.WXEnvironment && global.WXEnvironment.logLevel || 'log';
	  return levelMap[logLevel] && levelMap[logLevel][type];
	}
	
	/**
	 * Convert all log arguments into primitive values.
	 * @param  {array} args
	 * @return {array}
	 */
	function format(args) {
	  return args.map(function (v) {
	    var type = Object.prototype.toString.call(v);
	    if (type.toLowerCase() === '[object object]') {
	      v = JSON.stringify(v);
	    } else {
	      v = String(v);
	    }
	    return v;
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(70);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(71);
	module.exports = __webpack_require__(24).Object.assign;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(31);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(72) });

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(38),
	    gOPS = __webpack_require__(73),
	    pIE = __webpack_require__(74),
	    toObject = __webpack_require__(50),
	    IObject = __webpack_require__(41),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(19)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	/* eslint-disable */
	
	// https://gist.github.com/WebReflection/5593554
	if (!Object.setPrototypeOf) {
	  Object.setPrototypeOf = function (Object, magic) {
	    var set;
	    function setPrototypeOf(O, proto) {
	      set.call(O, proto);
	      return O;
	    }
	    try {
	      // this works already in Firefox and Safari
	      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
	      set.call({}, null);
	    } catch (e) {
	      if (
	      // IE < 11 cannot be shimmed
	      Object.prototype !== {}[magic] ||
	      // neither can any browser that actually
	      // implemented __proto__ correctly
	      // (all but old V8 will return here)
	      { __proto__: null }.__proto__ === void 0
	      // this case means null objects cannot be passed
	      // through setPrototypeOf in a reliable way
	      // which means here a **Sham** is needed instead
	      ) {
	          return;
	        }
	      // nodejs 0.8 and 0.10 are (buggy and..) fine here
	      // probably Chrome or some old Mobile stock browser
	      set = function set(proto) {
	        this[magic] = proto;
	      };
	      // please note that this will **not** work
	      // in those browsers that do not inherit
	      // __proto__ by mistake from Object.prototype
	      // in these cases we should probably throw an error
	      // or at least be informed about the issue
	      setPrototypeOf.polyfill = setPrototypeOf(setPrototypeOf({}, null), Object.prototype) instanceof Object;
	      // setPrototypeOf.polyfill === true means it works as meant
	      // setPrototypeOf.polyfill === false means it's not 100% reliable
	      // setPrototypeOf.polyfill === undefined
	      // or
	      // setPrototypeOf.polyfill ==  null means it's not a polyfill
	      // which means it works as expected
	      // we can even delete Object.prototype.__proto__;
	    }
	    return setPrototypeOf;
	  }(Object, '__proto__');
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	/* eslint-disable */
	
	// Production steps of ECMA-262, Edition 6, 22.1.2.1
	// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
	if (!Array.from) {
	  console.log('make polyfill');
	  Array.from = function () {
	    var toStr = Object.prototype.toString;
	    var isCallable = function isCallable(fn) {
	      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
	    };
	    var toInteger = function toInteger(value) {
	      var number = Number(value);
	      if (isNaN(number)) {
	        return 0;
	      }
	      if (number === 0 || !isFinite(number)) {
	        return number;
	      }
	      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
	    };
	    var maxSafeInteger = Math.pow(2, 53) - 1;
	    var toLength = function toLength(value) {
	      var len = toInteger(value);
	      return Math.min(Math.max(len, 0), maxSafeInteger);
	    };
	
	    // The length property of the from method is 1.
	    return function from(arrayLike /*, mapFn, thisArg */) {
	      // 1. Let C be the this value.
	      var C = this;
	
	      // 2. Let items be ToObject(arrayLike).
	      var items = Object(arrayLike);
	
	      // 3. ReturnIfAbrupt(items).
	      if (arrayLike == null) {
	        throw new TypeError('Array.from requires an array-like object - not null or undefined');
	      }
	
	      // 4. If mapfn is undefined, then let mapping be false.
	      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
	      var T;
	      if (typeof mapFn !== 'undefined') {
	        // 5. else
	        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
	        if (!isCallable(mapFn)) {
	          throw new TypeError('Array.from: when provided, the second argument must be a function');
	        }
	
	        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
	        if (arguments.length > 2) {
	          T = arguments[2];
	        }
	      }
	
	      // 10. Let lenValue be Get(items, "length").
	      // 11. Let len be ToLength(lenValue).
	      var len = toLength(items.length);
	
	      // 13. If IsConstructor(C) is true, then
	      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
	      // 14. a. Else, Let A be ArrayCreate(len).
	      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
	
	      // 16. Let k be 0.
	      var k = 0;
	      // 17. Repeat, while k < len… (also steps a - h)
	      var kValue;
	      while (k < len) {
	        kValue = items[k];
	        if (mapFn) {
	          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
	        } else {
	          A[k] = kValue;
	        }
	        k += 1;
	      }
	      // 18. Let putStatus be Put(A, "length", len, true).
	      A.length = len;
	      // 20. Return A.
	      return A;
	    };
	  }();
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vdom = __webpack_require__(78);
	
	var _listener = __webpack_require__(79);
	
	var _listener2 = _interopRequireDefault(_listener);
	
	var _config = __webpack_require__(80);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _init = __webpack_require__(114);
	
	var _init2 = _interopRequireDefault(_init);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @fileOverview
	 * Register framework(s) in JS runtime. Weex supply two layers for 3rd-party
	 * framework(s): one is the instance management layer, another is the
	 * virtual-DOM layer.
	 */
	
	// This config is generated by `npm run build:config`.
	// It will collect all `runtime/framework-*.js` files and import each of them.
	// The filename is also the framework name.
	var config = {
	  Document: _vdom.Document, Element: _vdom.Element, Comment: _vdom.Comment, Listener: _listener2.default, frameworks: _config2.default,
	  sendTasks: function sendTasks() {
	    var _global;
	
	    return (_global = global).callNative.apply(_global, arguments);
	  }
	};
	
	var methods = (0, _init2.default)(config);
	
	exports.default = methods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.instanceMap = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @fileOverview
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * A simple virtual dom implementation
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
	// import { extend } from '../shared'
	
	
	exports.Document = Document;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;
	
	var _utils = __webpack_require__(2);
	
	var DEFAULT_TAG_NAME = 'div';
	
	var instanceMap = exports.instanceMap = {};
	var nextNodeRef = 1;
	
	function Document(id, url, handler, Listener) {
	  id = id ? id.toString() : '';
	  this.id = id;
	  this.URL = url;
	
	  instanceMap[id] = this;
	  this.nodeMap = {};
	  Listener && (this.listener = new Listener(id, handler || genCallTasks(id)));
	  this.createDocumentElement();
	}
	
	function genCallTasks(id) {
	  // @todo: The `callAddElement` API should be re-design immediately
	  // because its public and global and without config opportunity.
	  var hasAddElementHandler = typeof callAddElement === 'function';
	  return function (tasks) {
	    if (!Array.isArray(tasks)) {
	      tasks = [tasks];
	    }
	    for (var i = 0; i < tasks.length; i++) {
	      var task = tasks[i];
	      var returnValue = void 0;
	      if (hasAddElementHandler && task.module === 'dom' && task.method === 'addElement') {
	        var _task$args = _slicedToArray(task.args, 3),
	            ref = _task$args[0],
	            json = _task$args[1],
	            index = _task$args[2];
	
	        returnValue = callAddElement(id, ref, json, index, '-1');
	      } else {
	        returnValue = callNative(id, [task], '-1');
	      }
	      if (returnValue === -1) {
	        return returnValue;
	      }
	    }
	  };
	}
	
	Document.prototype.destroy = function () {
	  delete this.listener;
	  delete this.nodeMap;
	  delete instanceMap[this.id];
	};
	
	Document.prototype.open = function () {
	  this.listener.batched = false;
	};
	
	Document.prototype.close = function () {
	  this.listener.batched = true;
	};
	
	Document.prototype.createDocumentElement = function () {
	  var _this = this;
	
	  if (!this.documentElement) {
	    var el = new Element('document');
	    el.docId = this.id;
	    el.ownerDocument = this;
	    el.role = 'documentElement';
	    el.depth = 0;
	    el.ref = '_documentElement';
	    this.nodeMap._documentElement = el;
	    this.documentElement = el;
	    el.appendChild = function (node) {
	      appendBody(_this, node);
	    };
	    el.insertBefore = function (node, before) {
	      appendBody(_this, node, before);
	    };
	  }
	
	  return this.documentElement;
	};
	
	function appendBody(doc, node, before) {
	  var documentElement = doc.documentElement;
	
	
	  if (documentElement.pureChildren.length > 0 || node.parentNode) {
	    return;
	  }
	  var children = documentElement.children;
	  var beforeIndex = children.indexOf(before);
	  if (beforeIndex < 0) {
	    children.push(node);
	  } else {
	    children.splice(beforeIndex, 0, node);
	  }
	
	  if (node.nodeType === 1) {
	    if (node.role === 'body') {
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      node.parentNode = documentElement;
	      linkParent(node, documentElement);
	    } else {
	      node.children.forEach(function (child) {
	        child.parentNode = node;
	      });
	      setBody(doc, node);
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      linkParent(node, documentElement);
	      delete doc.nodeMap[node.nodeId];
	    }
	    documentElement.pureChildren.push(node);
	    doc.listener.createBody(node);
	  } else {
	    node.parentNode = documentElement;
	    doc.nodeMap[node.ref] = node;
	  }
	}
	
	function setBody(doc, el) {
	  el.role = 'body';
	  el.depth = 1;
	  delete doc.nodeMap[el.nodeId];
	  el.ref = '_root';
	  doc.nodeMap._root = el;
	  doc.body = el;
	}
	
	Document.prototype.createBody = function (type, props) {
	  if (!this.body) {
	    var el = new Element(type, props);
	    setBody(this, el);
	  }
	
	  return this.body;
	};
	
	Document.prototype.createElement = function (tagName, props) {
	  return new Element(tagName, props);
	};
	
	Document.prototype.createComment = function (text) {
	  return new Comment(text);
	};
	
	Document.prototype.fireEvent = function (el, type, e, domChanges) {
	  if (!el) {
	    return;
	  }
	  e = e || {};
	  e.type = type;
	  e.target = el;
	  e.timestamp = Date.now();
	  if (domChanges) {
	    updateElement(el, domChanges);
	  }
	  return el.fireEvent(type, e);
	};
	
	Document.prototype.getRef = function (ref) {
	  return this.nodeMap[ref];
	};
	
	function updateElement(el, changes) {
	  var attrs = changes.attrs || {};
	  for (var name in attrs) {
	    el.setAttr(name, attrs[name], true);
	  }
	  var style = changes.style || {};
	  for (var _name in style) {
	    el.setStyle(_name, style[_name], true);
	  }
	}
	
	function Node() {
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.children = [];
	  this.pureChildren = [];
	  this.parentNode = null;
	  this.nextSibling = null;
	  this.previousSibling = null;
	}
	
	Node.prototype.destroy = function () {
	  var doc = instanceMap[this.docId];
	  if (doc) {
	    delete this.docId;
	    delete doc.nodeMap[this.nodeId];
	  }
	  this.children.forEach(function (child) {
	    child.destroy();
	  });
	};
	
	function Element() {
	  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TAG_NAME;
	  var props = arguments[1];
	
	  props = props || {};
	  this.nodeType = 1;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = type;
	  this.attr = props.attr || {};
	  this.classStyle = props.classStyle || {};
	  this.style = props.style || {};
	  this.event = {};
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Element.prototype = new Node();
	
	Element.prototype.appendChild = function (node) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.length, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      insertIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, -1);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.length, true);
	    if (node.nodeType === 1) {
	      var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId && index >= 0) {
	        var _listener = instanceMap[this.docId].listener;
	        return _listener.moveElement(node.ref, this.ref, index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertBefore = function (node, before) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === before || node.nextSibling === before) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(before), true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var pureBefore = nextElement(before);
	      var index = insertIndex(node, this.pureChildren, pureBefore ? this.pureChildren.indexOf(pureBefore) : this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(before), true);
	    if (node.nodeType === 1) {
	      var _pureBefore = nextElement(before);
	      var _index = moveIndex(node, this.pureChildren, _pureBefore ? this.pureChildren.indexOf(_pureBefore) : this.pureChildren.length);
	      if (this.docId && _index >= 0) {
	        var _listener2 = instanceMap[this.docId].listener;
	        return _listener2.moveElement(node.ref, this.ref, _index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertAfter = function (node, after) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === after || node.previousSibling === after) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var index = insertIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (node.nodeType === 1) {
	      var _index2 = moveIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId && _index2 >= 0) {
	        var _listener3 = instanceMap[this.docId].listener;
	        return _listener3.moveElement(node.ref, this.ref, _index2);
	      }
	    }
	  }
	};
	
	Element.prototype.removeChild = function (node, preserved) {
	  if (node.parentNode) {
	    removeIndex(node, this.children, true);
	    if (node.nodeType === 1) {
	      removeIndex(node, this.pureChildren);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        listener.removeElement(node.ref);
	      }
	    }
	  }
	  if (!preserved) {
	    node.destroy();
	  }
	};
	
	Element.prototype.clear = function () {
	  var _this2 = this;
	
	  if (this.docId) {
	    (function () {
	      var listener = instanceMap[_this2.docId].listener;
	      _this2.pureChildren.forEach(function (node) {
	        listener.removeElement(node.ref);
	      });
	    })();
	  }
	  this.children.forEach(function (node) {
	    node.destroy();
	  });
	  this.children.length = 0;
	  this.pureChildren.length = 0;
	};
	
	function nextElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.nextSibling;
	  }
	}
	
	function previousElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.previousSibling;
	  }
	}
	
	function linkParent(node, parent) {
	  node.parentNode = parent;
	  if (parent.docId) {
	    node.docId = parent.docId;
	    node.ownerDocument = parent.ownerDocument;
	    node.ownerDocument.nodeMap[node.nodeId] = node;
	    node.depth = parent.depth + 1;
	  }
	  node.children.forEach(function (child) {
	    linkParent(child, node);
	  });
	}
	
	function registerNode(docId, node) {
	  var doc = instanceMap[docId];
	  doc.nodeMap[node.nodeId] = node;
	}
	
	function insertIndex(target, list, newIndex, changeSibling) {
	  if (newIndex < 0) {
	    newIndex = 0;
	  }
	  var before = list[newIndex - 1];
	  var after = list[newIndex];
	  list.splice(newIndex, 0, target);
	  if (changeSibling) {
	    before && (before.nextSibling = target);
	    target.previousSibling = before;
	    target.nextSibling = after;
	    after && (after.previousSibling = target);
	  }
	  return newIndex;
	}
	
	function moveIndex(target, list, newIndex, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return -1;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	  var newIndexAfter = newIndex;
	  if (index <= newIndex) {
	    newIndexAfter = newIndex - 1;
	  }
	  var beforeNew = list[newIndexAfter - 1];
	  var afterNew = list[newIndexAfter];
	  list.splice(newIndexAfter, 0, target);
	  if (changeSibling) {
	    beforeNew && (beforeNew.nextSibling = target);
	    target.previousSibling = beforeNew;
	    target.nextSibling = afterNew;
	    afterNew && (afterNew.previousSibling = target);
	  }
	  if (index === newIndexAfter) {
	    return -1;
	  }
	  return newIndex;
	}
	
	function removeIndex(target, list, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	}
	
	Element.prototype.setAttr = function (key, value, silent) {
	  if (this.attr[key] === value && silent !== false) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setAttr(this.ref, key, value);
	  }
	};
	
	Element.prototype.setStyle = function (key, value, silent) {
	  if (this.style[key] === value && silent !== false) {
	    return;
	  }
	  this.style[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyle(this.ref, key, value);
	  }
	};
	
	Element.prototype.resetClassStyle = function () {
	  for (var key in this.classStyle) {
	    this.classStyle[key] = '';
	  }
	};
	
	Element.prototype.setClassStyle = function (classStyle) {
	  this.resetClassStyle();
	  (0, _utils.extend)(this.classStyle, classStyle);
	  if (this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyles(this.ref, this.toStyle());
	  }
	};
	
	Element.prototype.addEvent = function (type, handler) {
	  if (!this.event[type]) {
	    this.event[type] = handler;
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.addEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.removeEvent = function (type) {
	  if (this.event[type]) {
	    delete this.event[type];
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.removeEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.fireEvent = function (type, e) {
	  var handler = this.event[type];
	  if (handler) {
	    return handler.call(this, e);
	  }
	};
	
	Element.prototype.toStyle = function () {
	  return (0, _utils.extend)({}, this.classStyle, this.style);
	};
	
	Element.prototype.toJSON = function () {
	  var result = {
	    ref: this.ref.toString(),
	    type: this.type,
	    attr: this.attr,
	    style: this.toStyle()
	  };
	  var event = Object.keys(this.event);
	  if (event.length) {
	    result.event = event;
	  }
	  if (this.pureChildren.length) {
	    result.children = this.pureChildren.map(function (child) {
	      return child.toJSON();
	    });
	  }
	  return result;
	};
	
	Element.prototype.toString = function () {
	  return '<' + this.type + ' attr=' + JSON.stringify(this.attr) + ' style=' + JSON.stringify(this.toStyle()) + '>' + this.pureChildren.map(function (child) {
	    return child.toString();
	  }).join('') + '</' + this.type + '>';
	};
	
	function Comment(value) {
	  this.nodeType = 8;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = 'comment';
	  this.value = value;
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Comment.prototype = new Node();
	
	Comment.prototype.toString = function () {
	  return '<!-- ' + this.value + ' -->';
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Listener;
	exports.createAction = createAction;
	function Listener(id, handler) {
	  this.id = id;
	  this.batched = false;
	  this.updates = [];
	  if (typeof handler === 'function') {
	    this.handler = handler;
	  }
	}
	
	Listener.prototype.createFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('createFinish', [])], callback);
	};
	
	Listener.prototype.updateFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('updateFinish', [])], callback);
	};
	
	Listener.prototype.refreshFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('refreshFinish', [])], callback);
	};
	
	Listener.prototype.createBody = function (element) {
	  var body = element.toJSON();
	  var children = body.children;
	  delete body.children;
	  var actions = [createAction('createBody', [body])];
	  if (children) {
	    actions.push.apply(actions, children.map(function (child) {
	      return createAction('addElement', [body.ref, child, -1]);
	    }));
	  }
	  return this.addActions(actions);
	};
	
	Listener.prototype.addElement = function (element, ref, index) {
	  if (!(index >= 0)) {
	    index = -1;
	  }
	  return this.addActions(createAction('addElement', [ref, element.toJSON(), index]));
	};
	
	Listener.prototype.removeElement = function (ref) {
	  if (Array.isArray(ref)) {
	    var actions = ref.map(function (r) {
	      return createAction('removeElement', [r]);
	    });
	    return this.addActions(actions);
	  }
	  return this.addActions(createAction('removeElement', [ref]));
	};
	
	Listener.prototype.moveElement = function (targetRef, parentRef, index) {
	  return this.addActions(createAction('moveElement', [targetRef, parentRef, index]));
	};
	
	Listener.prototype.setAttr = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateAttrs', [ref, result]));
	};
	
	Listener.prototype.setStyle = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateStyle', [ref, result]));
	};
	
	Listener.prototype.setStyles = function (ref, style) {
	  return this.addActions(createAction('updateStyle', [ref, style]));
	};
	
	Listener.prototype.addEvent = function (ref, type) {
	  return this.addActions(createAction('addEvent', [ref, type]));
	};
	
	Listener.prototype.removeEvent = function (ref, type) {
	  return this.addActions(createAction('removeEvent', [ref, type]));
	};
	
	Listener.prototype.handler = function (actions, cb) {
	  return cb && cb();
	};
	
	Listener.prototype.addActions = function (actions) {
	  var updates = this.updates;
	  var handler = this.handler;
	
	  if (!Array.isArray(actions)) {
	    actions = [actions];
	  }
	
	  if (this.batched) {
	    updates.push.apply(updates, actions);
	  } else {
	    return handler(actions);
	  }
	};
	
	function createAction(name, args) {
	  return { module: 'dom', method: name, args: args };
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vanilla = __webpack_require__(81);
	
	var Vanilla = _interopRequireWildcard(_vanilla);
	
	var _default = __webpack_require__(82);
	
	var Weex = _interopRequireWildcard(_default);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// built by npm run build:config
	
	exports.default = {
	  Vanilla: Vanilla,
	  Weex: Weex
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.init = init;
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.prepareInstance = prepareInstance;
	exports.createInstance = createInstance;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	exports.getRoot = getRoot;
	exports.receiveTasks = receiveTasks;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var config = {};
	
	var instanceMap = {};
	
	function init(cfg) {
	  config.Document = cfg.Document;
	  config.Element = cfg.Element;
	  config.Comment = cfg.Comment;
	  config.sendTasks = cfg.sendTasks;
	}
	
	function registerComponents(components) {}
	
	function registerModules(modules) {}
	
	function registerMethods(apis) {}
	
	function prepareInstance(id, options, data) {}
	
	function createInstance(id, code, options, data) {
	  var document = new config.Document(id, options.bundleUrl);
	  var callbacks = {};
	  var lastCallbackId = 0;
	  document.addCallback = function (func) {
	    lastCallbackId++;
	    callbacks[lastCallbackId] = func;
	    return lastCallbackId;
	  };
	  document.handleCallback = function (funcId, data, ifLast) {
	    var callback = callbacks[funcId];
	    if (ifLast) {
	      delete callbacks[funcId];
	    }
	    return callback(data);
	  };
	  instanceMap[id] = document;
	  var result = new Function('Document', 'Element', 'Comment', 'sendTasks', 'id', 'options', 'data', 'document', code);
	  return result(config.Document, config.Element, config.Comment, config.sendTasks, id, options, data, document);
	}
	
	function refreshInstance(id, data) {}
	
	function destroyInstance(id) {
	  delete instanceMap[id];
	}
	
	function getRoot(id) {
	  return instanceMap[id].body.toJSON();
	}
	
	function receiveTasks(id, tasks) {
	  var jsHandlers = {
	    fireEvent: function fireEvent(id, ref, type, data, domChanges) {
	      var document = instanceMap[id];
	      var el = document.getRef(ref);
	      return document.fireEvent(el, type, data, domChanges);
	    },
	
	    callback: function callback(id, funcId, data, ifLast) {
	      var document = instanceMap[id];
	      return document.handleCallback(funcId, data, ifLast);
	    }
	  };
	
	  var document = instanceMap[id];
	  if (document && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(id);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _create = __webpack_require__(83);
	
	Object.defineProperty(exports, 'createInstance', {
	  enumerable: true,
	  get: function get() {
	    return _create.createInstance;
	  }
	});
	
	var _life = __webpack_require__(110);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _life.init;
	  }
	});
	Object.defineProperty(exports, 'refreshInstance', {
	  enumerable: true,
	  get: function get() {
	    return _life.refreshInstance;
	  }
	});
	Object.defineProperty(exports, 'destroyInstance', {
	  enumerable: true,
	  get: function get() {
	    return _life.destroyInstance;
	  }
	});
	
	var _register = __webpack_require__(111);
	
	Object.defineProperty(exports, 'registerComponents', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerComponents;
	  }
	});
	Object.defineProperty(exports, 'registerModules', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerModules;
	  }
	});
	Object.defineProperty(exports, 'registerMethods', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerMethods;
	  }
	});
	
	var _bridge = __webpack_require__(112);
	
	Object.defineProperty(exports, 'receiveTasks', {
	  enumerable: true,
	  get: function get() {
	    return _bridge.receiveTasks;
	  }
	});
	
	var _misc = __webpack_require__(113);
	
	Object.defineProperty(exports, 'getRoot', {
	  enumerable: true,
	  get: function get() {
	    return _misc.getRoot;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;
	
	var _app = __webpack_require__(84);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _map = __webpack_require__(109);
	
	var _ctrl = __webpack_require__(86);
	
	var _dep = __webpack_require__(93);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create a Weex instance.
	 *
	 * @param  {string} id
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(id, code, options, data) {
	  (0, _dep.resetTarget)();
	  var instance = _map.instanceMap[id];
	  options = options || {};
	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(id, options);
	    _map.instanceMap[id] = instance;
	    result = (0, _ctrl.init)(instance, code, data);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(85);
	
	var _ctrl = __webpack_require__(86);
	
	var _instance = __webpack_require__(107);
	
	var _instance2 = _interopRequireDefault(_instance);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @deprecated
	 */
	_instance2.default.prototype.requireModule = function (name) {
	  return (0, _register.requireModule)(this, name);
	};
	
	/**
	 * @deprecated
	 */
	/**
	 * @fileOverview
	 * Weex instance constructor & definition
	 */
	
	_instance2.default.prototype.updateActions = function () {
	  (0, _ctrl.updateActions)(this);
	};
	
	/**
	 * @deprecated
	 */
	_instance2.default.prototype.callTasks = function (tasks) {
	  (0, _ctrl.callTasks)(this, tasks);
	};
	
	exports.default = _instance2.default;

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getModule = getModule;
	exports.clearModules = clearModules;
	exports.initModules = initModules;
	exports.initMethods = initMethods;
	exports.requireModule = requireModule;
	exports.requireCustomComponent = requireCustomComponent;
	exports.registerCustomComponent = registerCustomComponent;
	var nativeModules = {};
	
	// for testing
	
	/**
	 * for testing
	 */
	function getModule(moduleName) {
	  return nativeModules[moduleName];
	}
	
	/**
	 * for testing
	 */
	function clearModules() {
	  nativeModules = {};
	}
	
	// for framework
	
	/**
	 * init modules for an app instance
	 * the second param determines whether to replace an existed method
	 */
	function initModules(modules, ifReplace) {
	  var _loop = function _loop(moduleName) {
	    // init `modules[moduleName][]`
	    var methods = nativeModules[moduleName];
	    if (!methods) {
	      methods = {};
	      nativeModules[moduleName] = methods;
	    }
	
	    // push each non-existed new method
	    modules[moduleName].forEach(function (method) {
	      if (typeof method === 'string') {
	        method = {
	          name: method
	        };
	      }
	
	      if (!methods[method.name] || ifReplace) {
	        methods[method.name] = method;
	      }
	    });
	  };
	
	  for (var moduleName in modules) {
	    _loop(moduleName);
	  }
	}
	
	/**
	 * init app methods
	 */
	function initMethods(Vm, apis) {
	  var p = Vm.prototype;
	
	  for (var apiName in apis) {
	    if (!p.hasOwnProperty(apiName)) {
	      p[apiName] = apis[apiName];
	    }
	  }
	}
	
	// for app
	
	/**
	 * get a module of methods for an app instance
	 */
	function requireModule(app, name) {
	  var methods = nativeModules[name];
	  var target = {};
	
	  var _loop2 = function _loop2(methodName) {
	    Object.defineProperty(target, methodName, {
	      enumerable: true,
	      configurable: true,
	      get: function proxyGetter() {
	        return function () {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          return app.callTasks({
	            module: name,
	            method: methodName,
	            args: args
	          });
	        };
	      },
	      set: function proxySetter(val) {
	        if (typeof val === 'function') {
	          return app.callTasks({
	            module: name,
	            method: methodName,
	            args: [val]
	          });
	        }
	      }
	    });
	  };
	
	  for (var methodName in methods) {
	    _loop2(methodName);
	  }
	  return target;
	}
	
	/**
	 * get a custom component options
	 */
	function requireCustomComponent(app, name) {
	  var customComponentMap = app.customComponentMap;
	
	  return customComponentMap[name];
	}
	
	/**
	 * register a custom component options
	 */
	function registerCustomComponent(app, name, def) {
	  var customComponentMap = app.customComponentMap;
	
	
	  if (customComponentMap[name]) {
	    console.error('[JS Framework] define a component(' + name + ') that already exists');
	    return;
	  }
	
	  customComponentMap[name] = def;
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _init = __webpack_require__(87);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _init.init;
	  }
	});
	
	var _misc = __webpack_require__(106);
	
	Object.defineProperty(exports, 'refresh', {
	  enumerable: true,
	  get: function get() {
	    return _misc.refresh;
	  }
	});
	Object.defineProperty(exports, 'destroy', {
	  enumerable: true,
	  get: function get() {
	    return _misc.destroy;
	  }
	});
	Object.defineProperty(exports, 'getRootElement', {
	  enumerable: true,
	  get: function get() {
	    return _misc.getRootElement;
	  }
	});
	Object.defineProperty(exports, 'fireEvent', {
	  enumerable: true,
	  get: function get() {
	    return _misc.fireEvent;
	  }
	});
	Object.defineProperty(exports, 'callback', {
	  enumerable: true,
	  get: function get() {
	    return _misc.callback;
	  }
	});
	Object.defineProperty(exports, 'updateActions', {
	  enumerable: true,
	  get: function get() {
	    return _misc.updateActions;
	  }
	});
	Object.defineProperty(exports, 'callTasks', {
	  enumerable: true,
	  get: function get() {
	    return _misc.callTasks;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	
	var _vm = __webpack_require__(88);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _util = __webpack_require__(89);
	
	var _bundle = __webpack_require__(101);
	
	var _misc = __webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - init bundle
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	/**
	 * Init an app by run code witgh data
	 * @param  {object} app
	 * @param  {string} code
	 * @param  {object} data
	 */
	function init(app, code, data) {
	  console.debug('[JS Framework] Intialize an instance with:\n', data);
	  var result = void 0;
	
	  // prepare app env methods
	  var bundleDefine = function bundleDefine() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _bundle.defineFn.apply(undefined, [app].concat(args));
	  };
	  var bundleBootstrap = function bundleBootstrap(name, config, _data) {
	    result = (0, _bundle.bootstrap)(app, name, config, _data || data);
	    (0, _misc.updateActions)(app);
	    app.doc.listener.createFinish();
	    console.debug('[JS Framework] After intialized an instance(' + app.id + ')');
	  };
	  var bundleVm = _vm2.default;
	  var bundleRegister = function bundleRegister() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _bundle.register.apply(undefined, [app].concat(args));
	  };
	  var bundleRender = function bundleRender(name, _data) {
	    result = (0, _bundle.bootstrap)(app, name, {}, _data);
	  };
	  var bundleRequire = function bundleRequire(name) {
	    return function (_data) {
	      result = (0, _bundle.bootstrap)(app, name, {}, _data);
	    };
	  };
	  var bundleDocument = app.doc;
	  var bundleRequireModule = function bundleRequireModule(name) {
	    return app.requireModule((0, _util.removeWeexPrefix)(name));
	  };
	
	  // prepare code
	  var functionBody = void 0;
	  /* istanbul ignore if */
	  if (typeof code === 'function') {
	    // `function () {...}` -> `{...}`
	    // not very strict
	    functionBody = code.toString().substr(12);
	  } else if (code) {
	    functionBody = code.toString();
	  }
	
	  // run code and get result
	  var _global = global,
	      WXEnvironment = _global.WXEnvironment;
	
	  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	    (function () {
	      // timer APIs polyfill in native
	      var timer = app.requireModule('timer');
	      var timerAPIs = {
	        setTimeout: function setTimeout() {
	          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setTimeout(handler, args[1]);
	          return app.uid.toString();
	        },
	        setInterval: function setInterval() {
	          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            args[_key4] = arguments[_key4];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setInterval(handler, args[1]);
	          return app.uid.toString();
	        },
	        clearTimeout: function clearTimeout(n) {
	          timer.clearTimeout(n);
	        },
	        clearInterval: function clearInterval(n) {
	          timer.clearInterval(n);
	        }
	      };
	
	      var fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	      '__weex_bootstrap__', // alias for bootstrap
	      '__weex_document__', // alias for bootstrap
	      '__weex_require__', '__weex_viewmodel__', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);
	
	      fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule, bundleVm, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    })();
	  } else {
	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    '__weex_document__', // alias for bootstrap
	    '__weex_require__', '__weex_viewmodel__', functionBody);
	
	    _fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule, bundleVm);
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(89);
	
	var _state = __webpack_require__(90);
	
	var _compiler = __webpack_require__(96);
	
	var _observer = __webpack_require__(94);
	
	var _directive = __webpack_require__(97);
	
	var _events = __webpack_require__(100);
	
	/**
	 * ViewModel constructor
	 *
	 * @param {string} type
	 * @param {object} options    component options
	 * @param {object} parentVm   which contains _app
	 * @param {object} parentEl   root element or frag block
	 * @param {object} mergedData external data
	 * @param {object} externalEvents external events
	 */
	/**
	 * @fileOverview
	 * ViewModel Constructor & definition
	 */
	
	function Vm(type, options, parentVm, parentEl, mergedData, externalEvents) {
	  parentVm = parentVm || {};
	  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
	  this._app = parentVm._app || {};
	  parentVm._childrenVms && parentVm._childrenVms.push(this);
	
	  if (!options && this._app.customComponentMap) {
	    options = this._app.customComponentMap[type];
	  }
	  options = options || {};
	
	  var data = options.data || {};
	
	  this._options = options;
	  this._methods = options.methods || {};
	  this._computed = options.computed || {};
	  this._css = options.style || {};
	  this._ids = {};
	  this._vmEvents = {};
	  this._childrenVms = [];
	  this._type = type;
	
	  // bind events and lifecycles
	  (0, _events.initEvents)(this, externalEvents);
	
	  console.debug('[JS Framework] "init" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:init');
	  this._inited = true;
	
	  // proxy data and methods
	  // observe data and add this to vms
	  this._data = typeof data === 'function' ? data() : data;
	  if (mergedData) {
	    (0, _util.extend)(this._data, mergedData);
	  }
	  (0, _state.initState)(this);
	
	  console.debug('[JS Framework] "created" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:created');
	  this._created = true;
	
	  // backward old ready entry
	  if (options.methods && options.methods.ready) {
	    console.warn('"exports.methods.ready" is deprecated, ' + 'please use "exports.created" instead');
	    options.methods.ready.call(this);
	  }
	
	  if (!this._app.doc) {
	    return;
	  }
	
	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  (0, _compiler.build)(this);
	}
	
	(0, _events.mixinEvents)(Vm.prototype);
	
	/**
	 * Watch an function and bind all the data appeared in it. When the related
	 * data changes, the callback will be called with new value as 1st param.
	 *
	 * @param {Function} fn
	 * @param {Function} callback
	 */
	Vm.prototype.$watch = function (fn, callback) {
	  (0, _directive.watch)(this, fn, callback);
	};
	
	Vm.set = _observer.set;
	Vm.delete = _observer.del;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _utils = __webpack_require__(2);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _utils.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _utils.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _utils.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _utils.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _utils.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _utils.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isPlainObject;
	  }
	});
	exports.isReserved = isReserved;
	exports.createNewSet = createNewSet;
	exports.cached = cached;
	exports.typof = typof;
	exports.removeWeexPrefix = removeWeexPrefix;
	exports.removeJSSurfix = removeJSSurfix;
	
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	// can we use __proto__?
	var hasProto = exports.hasProto = '__proto__' in {};
	
	var _Set = void 0;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  exports._Set = _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  exports._Set = _Set = function _Set() {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	exports._Set = _Set;
	
	/**
	 * Polyfill in iOS7 by native because the JavaScript polyfill has memory problem.
	 * @return {object}
	 */
	
	function createNewSet() {
	  /* eslint-disable */
	  if ((typeof nativeSet === 'undefined' ? 'undefined' : _typeof(nativeSet)) === 'object') {
	    return nativeSet.create();
	  }
	  /* eslint-enable */
	  return new _Set();
	}
	
	/**
	 * Create a cached version of a pure function.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	var camelize = exports.camelize = cached(function (str) {
	  return str.replace(camelizeRE, toUpper);
	});
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	var hyphenate = exports.hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	});
	
	function typof(v) {
	  var s = Object.prototype.toString.call(v);
	  return s.substring(8, s.length - 1).toLowerCase();
	}
	
	// weex name rules
	
	var WEEX_COMPONENT_REG = /^@weex-component\//;
	var WEEX_MODULE_REG = /^@weex-module\//;
	var NORMAL_MODULE_REG = /^\.{1,2}\//;
	var JS_SURFIX_REG = /\.js$/;
	
	var isWeexComponent = exports.isWeexComponent = function isWeexComponent(name) {
	  return !!name.match(WEEX_COMPONENT_REG);
	};
	var isWeexModule = exports.isWeexModule = function isWeexModule(name) {
	  return !!name.match(WEEX_MODULE_REG);
	};
	var isNormalModule = exports.isNormalModule = function isNormalModule(name) {
	  return !!name.match(NORMAL_MODULE_REG);
	};
	var isNpmModule = exports.isNpmModule = function isNpmModule(name) {
	  return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name);
	};
	
	function removeWeexPrefix(str) {
	  var result = str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	  return result;
	}
	
	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.initData = initData;
	exports.initComputed = initComputed;
	exports.initMethods = initMethods;
	
	var _watcher = __webpack_require__(91);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(93);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(94);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	function initState(vm) {
	  vm._watchers = [];
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	}
	
	function initData(vm) {
	  var data = vm._data;
	
	  if (!(0, _util.isPlainObject)(data)) {
	    data = {};
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    (0, _observer.proxy)(vm, keys[i]);
	  }
	  // observe data
	  (0, _observer.observe)(data, vm);
	}
	
	function noop() {}
	
	function initComputed(vm) {
	  var computed = vm._computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      var def = {
	        enumerable: true,
	        configurable: true
	      };
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, vm);
	        def.set = noop;
	      } else {
	        def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : (0, _util.bind)(userDef.get, vm) : noop;
	        def.set = userDef.set ? (0, _util.bind)(userDef.set, vm) : noop;
	      }
	      Object.defineProperty(vm, key, def);
	    }
	  }
	}
	
	function makeComputedGetter(getter, owner) {
	  var watcher = new _watcher2.default(owner, getter, null, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (_dep2.default.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}
	
	function initMethods(vm) {
	  var methods = vm._methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key];
	    }
	  }
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(93);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	var uid = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	
	// import { pushWatcher } from './batcher'
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    (0, _util.extend)(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = (0, _util.createNewSet)(); // new Set()
	  this.newDepIds = (0, _util.createNewSet)(); // new Set()
	  // parse expression for getter
	  if (isFn) {
	    this.getter = expOrFn;
	  } else {
	    this.getter = (0, _util.parsePath)(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && (0, _util.warn)('Failed watching path: ' + expOrFn + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
	    }
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  (0, _dep.pushTarget)(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  (0, _dep.popTarget)();
	  this.cleanupDeps();
	  return value;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.cleanupDeps = function () {
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else {
	    this.run();
	  }
	  // } else if (this.sync) {
	  //   this.run()
	  // } else {
	  //   // if queued, only overwrite shallow with non-shallow,
	  //   // but not the other way around.
	  //   this.shallow = this.queued
	  //     ? shallow
	  //       ? this.shallow
	  //       : false
	  //     : !!shallow
	  //   this.queued = true
	  //   pushWatcher(this)
	  // }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    ((0, _util.isObject)(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      this.cb.call(this.vm, value, oldValue);
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      (0, _util.remove)(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 * @param {Set} seen
	 */
	
	var seenObjects = (0, _util.createNewSet)(); // new Set()
	function traverse(val, seen) {
	  var i = void 0,
	      keys = void 0,
	      isA = void 0,
	      isO = void 0;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  isA = Array.isArray(val);
	  isO = (0, _util.isObject)(val);
	  if (isA || isO) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) {
	        traverse(val[i], seen);
	      }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) {
	        traverse(val[keys[i]], seen);
	      }
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(92)))

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
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
	    }
	    // if setTimeout wasn't available but was latter defined
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
	    }
	    // if clearTimeout wasn't available but was latter defined
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
	};
	
	// v8 likes predictible objects
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

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	exports.pushTarget = pushTarget;
	exports.popTarget = popTarget;
	exports.resetTarget = resetTarget;
	
	var _util = __webpack_require__(89);
	
	var uid = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget(_target) {
	  if (Dep.target) targetStack.push(Dep.target);
	  Dep.target = _target;
	}
	
	function popTarget() {
	  Dep.target = targetStack.pop();
	}
	
	function resetTarget() {
	  Dep.target = null;
	  targetStack = [];
	}
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  (0, _util.remove)(this.subs, sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Observer = Observer;
	exports.observe = observe;
	exports.defineReactive = defineReactive;
	exports.set = set;
	exports.del = del;
	exports.proxy = proxy;
	exports.unproxy = unproxy;
	
	var _dep = __webpack_require__(93);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(95);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arrayKeys = Object.getOwnPropertyNames(_array.arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new _dep2.default();
	  (0, _util.def)(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = _util.hasProto ? protoAugment : copyAugment;
	    augment(value, _array.arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  for (var key in obj) {
	    this.convert(key, obj[key]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  (0, _util.remove)(this.vms, vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    (0, _util.def)(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!(0, _util.isObject)(value)) {
	    return;
	  }
	  var ob = void 0;
	  if ((0, _util.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((Array.isArray(value) || (0, _util.isPlainObject)(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new _dep2.default();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (_dep2.default.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	function set(obj, key, val) {
	  if (Array.isArray(obj)) {
	    return obj.splice(key, 1, val);
	  }
	  if ((0, _util.hasOwn)(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      proxy(vm, key);
	      // vm.$forceUpdate()
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!(0, _util.hasOwn)(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      // obj.$forceUpdate()
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      unproxy(vm, key);
	      // vm.$forceUpdate()
	    }
	  }
	}
	
	var KEY_WORDS = ['$index', '$value', '$event'];
	function proxy(vm, key) {
	  if (KEY_WORDS.indexOf(key) > -1 || !(0, _util.isReserved)(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter() {
	        return vm._data[key];
	      },
	      set: function proxySetter(val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	function unproxy(vm, key) {
	  if (!(0, _util.isReserved)(key)) {
	    delete vm[key];
	  }
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(89);
	
	var arrayProto = Array.prototype; /* eslint-disable */
	
	var arrayMethods = exports.arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  (0, _util.def)(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted = void 0;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	(0, _util.def)(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	(0, _util.def)(arrayProto, '$remove', function $remove(index) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  if (typeof index !== 'number') {
	    index = this.indexOf(index);
	  }
	  if (index > -1) {
	    this.splice(index, 1);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	
	var _util = __webpack_require__(89);
	
	var _state = __webpack_require__(90);
	
	var _directive = __webpack_require__(97);
	
	var _domHelper = __webpack_require__(99);
	
	/**
	 * build()
	 *   compile(template, parentNode)
	 *     if (type is content) create contentNode
	 *     else if (dirs have v-for) foreach -> create context
	 *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
	 *     else if (dirs have v-if) assert
	 *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
	 *     else if (type is dynamic)
	 *       -> compile(templateWithoutDynamicType, parentNode): watch(type) onchange
	 *     else if (type is custom)
	 *       addChildVm(vm, parentVm)
	 *       build(externalDirs)
	 *       foreach childNodes -> compile(childNode, template)
	 *     else if (type is native)
	 *       set(dirs): update(id/attr/style/class) onchange
	 *       append(template, parentNode)
	 *       foreach childNodes -> compile(childNode, template)
	 */
	/**
	 * @fileOverview
	 * ViewModel template parser & data-binding process
	 */
	
	function build(vm) {
	  var opt = vm._options || {};
	  var template = opt.template || {};
	
	  if (opt.replace) {
	    if (template.children && template.children.length === 1) {
	      compile(vm, template.children[0], vm._parentEl);
	    } else {
	      compile(vm, template.children, vm._parentEl);
	    }
	  } else {
	    compile(vm, template, vm._parentEl);
	  }
	
	  console.debug('[JS Framework] "ready" lifecycle in Vm(' + vm._type + ')');
	  vm.$emit('hook:ready');
	  vm._ready = true;
	}
	
	/**
	 * Generate elements by child or children and append to parent elements.
	 * Root element info would be merged if has. The first argument may be an array
	 * if the root element with options.replace has not only one child.
	 *
	 * @param {object|array} target
	 * @param {object}       dest
	 * @param {object}       meta
	 */
	function compile(vm, target, dest, meta) {
	  var app = vm._app || {};
	
	  if (app.lastSignal === -1) {
	    return;
	  }
	
	  if (target.attr && target.attr.hasOwnProperty('static')) {
	    vm._static = true;
	  }
	
	  if (targetIsFragment(target)) {
	    compileFragment(vm, target, dest, meta);
	    return;
	  }
	  meta = meta || {};
	  if (targetIsContent(target)) {
	    console.debug('[JS Framework] compile "content" block by', target);
	    vm._content = (0, _domHelper.createBlock)(vm, dest);
	    return;
	  }
	
	  if (targetNeedCheckRepeat(target, meta)) {
	    console.debug('[JS Framework] compile "repeat" logic by', target);
	    if (dest.type === 'document') {
	      console.warn('[JS Framework] The root element does\'t support `repeat` directive!');
	    } else {
	      compileRepeat(vm, target, dest);
	    }
	    return;
	  }
	  if (targetNeedCheckShown(target, meta)) {
	    console.debug('[JS Framework] compile "if" logic by', target);
	    if (dest.type === 'document') {
	      console.warn('[JS Framework] The root element does\'t support `if` directive!');
	    } else {
	      compileShown(vm, target, dest, meta);
	    }
	    return;
	  }
	  var typeGetter = meta.type || target.type;
	  if (targetNeedCheckType(typeGetter, meta)) {
	    compileType(vm, target, dest, typeGetter, meta);
	    return;
	  }
	  var type = typeGetter;
	  var component = targetIsComposed(vm, target, type);
	  if (component) {
	    console.debug('[JS Framework] compile composed component by', target);
	    compileCustomComponent(vm, component, target, dest, type, meta);
	    return;
	  }
	  console.debug('[JS Framework] compile native component by', target);
	  compileNativeComponent(vm, target, dest, type);
	}
	
	/**
	 * Check if target is a fragment (an array).
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsFragment(target) {
	  return Array.isArray(target);
	}
	
	/**
	 * Check if target type is content/slot.
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsContent(target) {
	  return target.type === 'content' || target.type === 'slot';
	}
	
	/**
	 * Check if target need to compile by a list.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckRepeat(target, meta) {
	  return !meta.hasOwnProperty('repeat') && target.repeat;
	}
	
	/**
	 * Check if target need to compile by a boolean value.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckShown(target, meta) {
	  return !meta.hasOwnProperty('shown') && target.shown;
	}
	
	/**
	 * Check if target need to compile by a dynamic type.
	 *
	 * @param  {string|function} typeGetter
	 * @param  {object}          meta
	 * @return {boolean}
	 */
	function targetNeedCheckType(typeGetter, meta) {
	  return typeof typeGetter === 'function' && !meta.hasOwnProperty('type');
	}
	
	/**
	 * Check if this kind of component is composed.
	 *
	 * @param  {string}  type
	 * @return {boolean}
	 */
	function targetIsComposed(vm, target, type) {
	  var component = void 0;
	  if (vm._app && vm._app.customComponentMap) {
	    component = vm._app.customComponentMap[type];
	  }
	  if (vm._options && vm._options.components) {
	    component = vm._options.components[type];
	  }
	  if (target.component) {
	    component = component || {};
	  }
	  return component;
	}
	
	/**
	 * Compile a list of targets.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileFragment(vm, target, dest, meta) {
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  target.forEach(function (child) {
	    compile(vm, child, fragBlock, meta);
	  });
	}
	
	/**
	 * Compile a target with repeat directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 */
	function compileRepeat(vm, target, dest) {
	  var repeat = target.repeat;
	  var oldStyle = typeof repeat === 'function';
	  var getter = repeat.getter || repeat.expression || repeat;
	  if (typeof getter !== 'function') {
	    getter = function getter() {
	      return [];
	    };
	  }
	  var key = repeat.key || '$index';
	  var value = repeat.value || '$value';
	  var trackBy = repeat.trackBy || target.trackBy || target.attr && target.attr.trackBy;
	
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  fragBlock.children = [];
	  fragBlock.data = [];
	  fragBlock.vms = [];
	
	  bindRepeat(vm, target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
	}
	
	/**
	 * Compile a target with if directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileShown(vm, target, dest, meta) {
	  var newMeta = { shown: true };
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  if (meta.repeat) {
	    newMeta.repeat = meta.repeat;
	  }
	
	  bindShown(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a target with dynamic component type.
	 *
	 * @param {object}   target
	 * @param {object}   dest
	 * @param {function} typeGetter
	 */
	function compileType(vm, target, dest, typeGetter, meta) {
	  var type = typeGetter.call(vm);
	  var newMeta = (0, _util.extend)({ type: type }, meta);
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  (0, _directive.watch)(vm, typeGetter, function (value) {
	    var newMeta = (0, _util.extend)({ type: value }, meta);
	    (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    compile(vm, target, fragBlock, newMeta);
	  });
	
	  compile(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a composed component.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileCustomComponent(vm, component, target, dest, type, meta) {
	  var Ctor = vm.constructor;
	  var subVm = new Ctor(type, component, vm, dest, undefined, {
	    'hook:init': function hookInit() {
	      if (vm._static) {
	        this._static = vm._static;
	      }
	      (0, _directive.setId)(vm, null, target.id, this);
	      // bind template earlier because of lifecycle issues
	      this._externalBinding = {
	        parent: vm,
	        template: target
	      };
	    },
	    'hook:created': function hookCreated() {
	      (0, _directive.bindSubVm)(vm, this, target, meta.repeat);
	    },
	    'hook:ready': function hookReady() {
	      if (this._content) {
	        compileChildren(vm, target, this._content);
	      }
	    }
	  });
	  (0, _directive.bindSubVmAfterInitialized)(vm, subVm, target, dest);
	}
	
	/**
	 * Generate element from template and attach to the dest if needed.
	 * The time to attach depends on whether the mode status is node or tree.
	 *
	 * @param {object} template
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileNativeComponent(vm, template, dest, type) {
	  (0, _directive.applyNaitveComponentOptions)(template);
	
	  var element = void 0;
	  if (dest.ref === '_documentElement') {
	    // if its parent is documentElement then it's a body
	    console.debug('[JS Framework] compile to create body for ' + type);
	    element = (0, _domHelper.createBody)(vm, type);
	  } else {
	    console.debug('[JS Framework] compile to create element for ' + type);
	    element = (0, _domHelper.createElement)(vm, type);
	  }
	
	  if (!vm._rootEl) {
	    vm._rootEl = element;
	    // bind event earlier because of lifecycle issues
	    var binding = vm._externalBinding || {};
	    var target = binding.template;
	    var parentVm = binding.parent;
	    if (target && target.events && parentVm && element) {
	      for (var _type in target.events) {
	        var handler = parentVm[target.events[_type]];
	        if (handler) {
	          element.addEvent(_type, (0, _util.bind)(handler, parentVm));
	        }
	      }
	    }
	  }
	
	  (0, _directive.bindElement)(vm, element, template);
	
	  if (template.attr && template.attr.append) {
	    // backward, append prop in attr
	    template.append = template.attr.append;
	  }
	
	  if (template.append) {
	    // give the append attribute for ios adaptation
	    element.attr = element.attr || {};
	    element.attr.append = template.append;
	  }
	
	  var treeMode = template.append === 'tree';
	  var app = vm._app || {};
	  if (app.lastSignal !== -1 && !treeMode) {
	    console.debug('[JS Framework] compile to append single node for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	  if (app.lastSignal !== -1) {
	    compileChildren(vm, template, element);
	  }
	  if (app.lastSignal !== -1 && treeMode) {
	    console.debug('[JS Framework] compile to append whole tree for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	}
	
	/**
	 * Set all children to a certain parent element.
	 *
	 * @param {object} template
	 * @param {object} dest
	 */
	function compileChildren(vm, template, dest) {
	  var app = vm._app || {};
	  var children = template.children;
	  if (children && children.length) {
	    children.every(function (child) {
	      compile(vm, child, dest);
	      return app.lastSignal !== -1;
	    });
	  }
	}
	
	/**
	 * Watch the list update and refresh the changes.
	 *
	 * @param {object} target
	 * @param {object} fragBlock {vms, data, children}
	 * @param {object} info      {getter, key, value, trackBy, oldStyle}
	 */
	function bindRepeat(vm, target, fragBlock, info) {
	  var vms = fragBlock.vms;
	  var children = fragBlock.children;
	  var getter = info.getter,
	      trackBy = info.trackBy,
	      oldStyle = info.oldStyle;
	
	  var keyName = info.key;
	  var valueName = info.value;
	
	  function compileItem(item, index, context) {
	    var mergedData = void 0;
	    if (oldStyle) {
	      mergedData = item;
	      if ((0, _util.isObject)(item)) {
	        mergedData[keyName] = index;
	        if (!mergedData.hasOwnProperty('INDEX')) {
	          Object.defineProperty(mergedData, 'INDEX', {
	            value: function value() {
	              console.warn('[JS Framework] "INDEX" in repeat is deprecated, ' + 'please use "$index" instead');
	            }
	          });
	        }
	      } else {
	        console.warn('[JS Framework] Each list item must be an object in old-style repeat, ' + 'please use `repeat={{v in list}}` instead.');
	        mergedData = {};
	        mergedData[keyName] = index;
	        mergedData[valueName] = item;
	      }
	    } else {
	      mergedData = {};
	      mergedData[keyName] = index;
	      mergedData[valueName] = item;
	    }
	    var newContext = mergeContext(context, mergedData);
	    vms.push(newContext);
	    compile(newContext, target, fragBlock, { repeat: item });
	  }
	
	  var list = watchBlock(vm, fragBlock, getter, 'repeat', function (data) {
	    console.debug('[JS Framework] the "repeat" item has changed', data);
	    if (!fragBlock || !data) {
	      return;
	    }
	
	    var oldChildren = children.slice();
	    var oldVms = vms.slice();
	    var oldData = fragBlock.data.slice();
	    // 1. collect all new refs track by
	    var trackMap = {};
	    var reusedMap = {};
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      /* istanbul ignore if */
	      if (key == null || key === '') {
	        return;
	      }
	      trackMap[key] = item;
	    });
	
	    // 2. remove unused element foreach old item
	    var reusedList = [];
	    oldData.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      if (trackMap.hasOwnProperty(key)) {
	        reusedMap[key] = {
	          item: item, index: index, key: key,
	          target: oldChildren[index],
	          vm: oldVms[index]
	        };
	        reusedList.push(item);
	      } else {
	        (0, _domHelper.removeTarget)(vm, oldChildren[index]);
	      }
	    });
	
	    // 3. create new element foreach new item
	    children.length = 0;
	    vms.length = 0;
	    fragBlock.data = data.slice();
	    fragBlock.updateMark = fragBlock.start;
	
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      var reused = reusedMap[key];
	      if (reused) {
	        if (reused.item === reusedList[0]) {
	          reusedList.shift();
	        } else {
	          reusedList.$remove(reused.item);
	          (0, _domHelper.moveTarget)(vm, reused.target, fragBlock.updateMark, true);
	        }
	        children.push(reused.target);
	        vms.push(reused.vm);
	        if (oldStyle) {
	          reused.vm = item;
	        } else {
	          reused.vm[valueName] = item;
	        }
	        reused.vm[keyName] = index;
	        fragBlock.updateMark = reused.target;
	      } else {
	        compileItem(item, index, vm);
	      }
	    });
	
	    delete fragBlock.updateMark;
	  });
	
	  fragBlock.data = list.slice(0);
	  list.forEach(function (item, index) {
	    compileItem(item, index, vm);
	  });
	}
	
	/**
	 * Watch the display update and add/remove the element.
	 *
	 * @param  {object} target
	 * @param  {object} fragBlock
	 * @param  {object} context
	 */
	function bindShown(vm, target, fragBlock, meta) {
	  var display = watchBlock(vm, fragBlock, target.shown, 'shown', function (display) {
	    console.debug('[JS Framework] the "if" item was changed', display);
	
	    if (!fragBlock || !!fragBlock.display === !!display) {
	      return;
	    }
	    fragBlock.display = !!display;
	    if (display) {
	      compile(vm, target, fragBlock, meta);
	    } else {
	      (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    }
	  });
	
	  fragBlock.display = !!display;
	  if (display) {
	    compile(vm, target, fragBlock, meta);
	  }
	}
	
	/**
	 * Watch calc value changes and append certain type action to differ.
	 * It is used for if or repeat data-binding generator.
	 *
	 * @param  {object}   fragBlock
	 * @param  {function} calc
	 * @param  {string}   type
	 * @param  {function} handler
	 * @return {any}      init value of calc
	 */
	function watchBlock(vm, fragBlock, calc, type, handler) {
	  var differ = vm && vm._app && vm._app.differ;
	  var config = {};
	  var depth = (fragBlock.element.depth || 0) + 1;
	
	  return (0, _directive.watch)(vm, calc, function (value) {
	    config.latestValue = value;
	    if (differ && !config.recorded) {
	      differ.append(type, depth, fragBlock.blockId, function () {
	        var latestValue = config.latestValue;
	        handler(latestValue);
	        config.recorded = false;
	        config.latestValue = undefined;
	      });
	    }
	    config.recorded = true;
	  });
	}
	
	/**
	 * Clone a context and merge certain data.
	 *
	 * @param  {object} mergedData
	 * @return {object}
	 */
	function mergeContext(context, mergedData) {
	  var newContext = Object.create(context);
	  newContext._data = mergedData;
	  (0, _state.initData)(newContext);
	  (0, _state.initComputed)(newContext);
	  newContext._realParent = context;
	  if (context._static) {
	    newContext._static = context._static;
	  }
	  return newContext;
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * @fileOverview
	                                                                                                                                                                                                                                                                               * Directive Parser
	                                                                                                                                                                                                                                                                               */
	
	exports.applyNaitveComponentOptions = applyNaitveComponentOptions;
	exports.bindElement = bindElement;
	exports.bindSubVm = bindSubVm;
	exports.bindSubVmAfterInitialized = bindSubVmAfterInitialized;
	exports.setId = setId;
	exports.watch = watch;
	
	var _util = __webpack_require__(89);
	
	var _watcher = __webpack_require__(91);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	
	var SETTERS = {
	  attr: 'setAttr',
	  style: 'setStyle',
	  event: 'addEvent'
	};
	
	/**
	 * apply the native component's options(specified by template.type)
	 * to the template
	 */
	function applyNaitveComponentOptions(template) {
	  var type = template.type;
	
	  var options = nativeComponentMap[type];
	
	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    for (var key in options) {
	      if (template[key] == null) {
	        template[key] = options[key];
	      } else if ((0, _util.typof)(template[key]) === 'object' && (0, _util.typof)(options[key]) === 'object') {
	        for (var subkey in options[key]) {
	          if (template[key][subkey] == null) {
	            template[key][subkey] = options[key][subkey];
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * bind all id, attr, classnames, style, events to an element
	 */
	function bindElement(vm, el, template) {
	  setId(vm, el, template.id, vm);
	  setAttr(vm, el, template.attr);
	  setClass(vm, el, template.classList);
	  setStyle(vm, el, template.style);
	  bindEvents(vm, el, template.events);
	}
	
	/**
	 * bind all props to sub vm and bind all style, events to the root element
	 * of the sub vm if it doesn't have a replaced multi-node fragment
	 */
	function bindSubVm(vm, subVm, template, repeatItem) {
	  subVm = subVm || {};
	  template = template || {};
	
	  var options = subVm._options || {};
	
	  // bind props
	  var props = options.props;
	
	  if (Array.isArray(props)) {
	    props = props.reduce(function (result, value) {
	      result[value] = true;
	      return result;
	    }, {});
	  }
	
	  mergeProps(repeatItem, props, vm, subVm);
	  mergeProps(template.attr, props, vm, subVm);
	}
	
	/**
	 * merge class and styles from vm to sub vm.
	 */
	function bindSubVmAfterInitialized(vm, subVm, template) {
	  var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  mergeClassStyle(template.classList, vm, subVm);
	  mergeStyle(template.style, vm, subVm);
	
	  // bind subVm to the target element
	  if (target.children) {
	    target.children[target.children.length - 1]._vm = subVm;
	  } else {
	    target._vm = subVm;
	  }
	}
	
	/**
	 * Bind props from vm to sub vm and watch their updates.
	 */
	function mergeProps(target, props, vm, subVm) {
	  if (!target) {
	    return;
	  }
	
	  var _loop = function _loop(key) {
	    if (!props || props[key]) {
	      var value = target[key];
	      if (typeof value === 'function') {
	        var returnValue = watch(vm, value, function (v) {
	          subVm[key] = v;
	        });
	        subVm[key] = returnValue;
	      } else {
	        subVm[key] = value;
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop(key);
	  }
	}
	
	/**
	 * Bind style from vm to sub vm and watch their updates.
	 */
	function mergeStyle(target, vm, subVm) {
	  var _loop2 = function _loop2(key) {
	    var value = target[key];
	    if (typeof value === 'function') {
	      var returnValue = watch(vm, value, function (v) {
	        if (subVm._rootEl) {
	          subVm._rootEl.setStyle(key, v);
	        }
	      });
	      subVm._rootEl.setStyle(key, returnValue);
	    } else {
	      if (subVm._rootEl) {
	        subVm._rootEl.setStyle(key, value);
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop2(key);
	  }
	}
	
	/**
	 * Bind class & style from vm to sub vm and watch their updates.
	 */
	function mergeClassStyle(target, vm, subVm) {
	  var css = vm._options && vm._options.style || {};
	
	  /* istanbul ignore if */
	  if (!subVm._rootEl) {
	    return;
	  }
	
	  var className = '@originalRootEl';
	  css[className] = subVm._rootEl.classStyle;
	
	  function addClassName(list, name) {
	    if ((0, _util.typof)(list) === 'array') {
	      list.unshift(name);
	    }
	  }
	
	  if (typeof target === 'function') {
	    var _value = watch(vm, target, function (v) {
	      addClassName(v, className);
	      setClassStyle(subVm._rootEl, css, v);
	    });
	    addClassName(_value, className);
	    setClassStyle(subVm._rootEl, css, _value);
	  } else if (target != null) {
	    addClassName(target, className);
	    setClassStyle(subVm._rootEl, css, target);
	  }
	}
	
	/**
	 * bind id to an element
	 * each id is unique in a whole vm
	 */
	function setId(vm, el, id, target) {
	  var map = Object.create(null);
	
	  Object.defineProperties(map, {
	    vm: {
	      value: target,
	      writable: false,
	      configurable: false
	    },
	    el: {
	      get: function get() {
	        return el || target._rootEl;
	      },
	      configurable: false
	    }
	  });
	
	  if (typeof id === 'function') {
	    var handler = id;
	    id = handler.call(vm);
	    if (id) {
	      vm._ids[id] = map;
	    }
	    watch(vm, handler, function (newId) {
	      if (newId) {
	        vm._ids[newId] = map;
	      }
	    });
	  } else if (id && typeof id === 'string') {
	    vm._ids[id] = map;
	  }
	}
	
	/**
	 * bind attr to an element
	 */
	function setAttr(vm, el, attr) {
	  bindDir(vm, el, 'attr', attr);
	}
	
	function setClassStyle(el, css, classList) {
	  var classStyle = {};
	  var length = classList.length;
	
	  for (var i = 0; i < length; i++) {
	    var style = css[classList[i]];
	    if (style) {
	      for (var key in style) {
	        classStyle[key] = style[key];
	      }
	    }
	  }
	  el.setClassStyle(classStyle);
	}
	
	/**
	 * bind classnames to an element
	 */
	function setClass(vm, el, classList) {
	  if (typeof classList !== 'function' && !Array.isArray(classList)) {
	    return;
	  }
	  if (Array.isArray(classList) && !classList.length) {
	    el.setClassStyle({});
	    return;
	  }
	
	  var style = vm._options && vm._options.style || {};
	  if (typeof classList === 'function') {
	    var _value2 = watch(vm, classList, function (v) {
	      setClassStyle(el, style, v);
	    });
	    setClassStyle(el, style, _value2);
	  } else {
	    setClassStyle(el, style, classList);
	  }
	}
	
	/**
	 * bind style to an element
	 */
	function setStyle(vm, el, style) {
	  bindDir(vm, el, 'style', style);
	}
	
	/**
	 * add an event type and handler to an element and generate a dom update
	 */
	function setEvent(vm, el, type, handler) {
	  el.addEvent(type, (0, _util.bind)(handler, vm));
	}
	
	/**
	 * add all events of an element
	 */
	function bindEvents(vm, el, events) {
	  if (!events) {
	    return;
	  }
	  var keys = Object.keys(events);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var handler = events[key];
	    if (typeof handler === 'string') {
	      handler = vm[handler];
	      /* istanbul ignore if */
	      if (!handler) {
	        console.debug('[JS Framework] The method "' + handler + '" is not defined.');
	      }
	    }
	    var realVm = vm._realParent ? vm._realParent : vm;
	    setEvent(realVm, el, key, handler);
	  }
	}
	
	/**
	 * set a series of members as a kind of an element
	 * for example: style, attr, ...
	 * if the value is a function then bind the data changes
	 */
	function bindDir(vm, el, name, data) {
	  if (!data) {
	    return;
	  }
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var _value3 = data[key];
	    if (typeof _value3 === 'function') {
	      bindKey(vm, el, name, key, _value3);
	    } else {
	      el[SETTERS[name]](key, _value3);
	    }
	  }
	}
	
	/**
	 * bind data changes to a certain key to a name series in an element
	 */
	function bindKey(vm, el, name, key, calc) {
	  var methodName = SETTERS[name];
	  // watch the calc, and returns a value by calc.call()
	  var value = watch(vm, calc, function (value) {
	    function handler() {
	      el[methodName](key, value);
	    }
	    var differ = vm && vm._app && vm._app.differ;
	    if (differ) {
	      differ.append('element', el.depth, el.ref, handler);
	    } else {
	      handler();
	    }
	  });
	
	  el[methodName](key, value);
	}
	
	/**
	 * watch a calc function and callback if the calc value changes
	 */
	function watch(vm, calc, callback) {
	  if (vm._static) {
	    return (typeof calc === 'function' ? calc : (0, _util.parsePath)(calc)).call(vm, vm);
	  }
	  var watcher = new _watcher2.default(vm, calc, function (value, oldValue) {
	    /* istanbul ignore if */
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && value === oldValue) {
	      return;
	    }
	    callback(value);
	  });
	
	  return watcher.value;
	}

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// @todo: It should be registered by native from `registerComponents()`.
	exports.default = {
	  nativeComponentMap: {
	    text: true,
	    image: true,
	    container: true,
	    slider: {
	      type: 'slider',
	      append: 'tree'
	    },
	    cell: {
	      type: 'cell',
	      append: 'tree'
	    }
	  }
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.createBody = createBody;
	exports.createElement = createElement;
	exports.createBlock = createBlock;
	exports.attachTarget = attachTarget;
	exports.moveTarget = moveTarget;
	exports.removeTarget = removeTarget;
	/**
	 * @fileOverview Document & Element Helpers.
	 *
	 * required:
	 * Document#: createElement, createComment, getRef
	 * Element#: appendChild, insertBefore, removeChild, nextSibling
	 */
	
	/**
	 * Create a body by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createBody(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createBody(type);
	}
	
	/**
	 * Create an element by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createElement(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createElement(type);
	}
	
	/**
	 * Create and return a frag block for an element.
	 * The frag block has a starter, ender and the element itself.
	 *
	 * @param  {object} element
	 */
	function createBlock(vm, element) {
	  var start = createBlockStart(vm);
	  var end = createBlockEnd(vm);
	  var blockId = lastestBlockId++;
	  if (element.element) {
	    var updateMark = element.updateMark;
	    if (updateMark) {
	      if (updateMark.element) {
	        updateMark = updateMark.end;
	      }
	      element.element.insertAfter(end, updateMark);
	      element.element.insertAfter(start, updateMark);
	      element.updateMark = end;
	    } else {
	      element.element.insertBefore(start, element.end);
	      element.element.insertBefore(end, element.end);
	    }
	    element = element.element;
	  } else {
	    element.appendChild(start);
	    element.appendChild(end);
	  }
	  return { start: start, end: end, element: element, blockId: blockId };
	}
	
	var lastestBlockId = 1;
	
	/**
	 * Create and return a block starter.
	 * Using this._app.doc
	 */
	function createBlockStart(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('start');
	  return anchor;
	}
	
	/**
	 * Create and return a block ender.
	 * Using this._app.doc
	 */
	function createBlockEnd(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('end');
	  return anchor;
	}
	
	/**
	 * Attach target to a certain dest using appendChild by default.
	 * If the dest is a frag block then insert before the ender.
	 * If the target is a frag block then attach the starter and ender in order.
	 *
	 * @param  {object} target
	 * @param  {object} dest
	 */
	function attachTarget(vm, target, dest) {
	  if (dest.element) {
	    var before = dest.end;
	    var after = dest.updateMark;
	    // push new target for watch list update later
	    if (dest.children) {
	      dest.children.push(target);
	    }
	    // for check repeat case
	    if (after) {
	      var signal = moveTarget(vm, target, after);
	      dest.updateMark = target.element ? target.end : target;
	      return signal;
	    } else if (target.element) {
	      dest.element.insertBefore(target.start, before);
	      dest.element.insertBefore(target.end, before);
	    } else {
	      return dest.element.insertBefore(target, before);
	    }
	  } else {
	    if (target.element) {
	      dest.appendChild(target.start);
	      dest.appendChild(target.end);
	    } else {
	      return dest.appendChild(target);
	    }
	  }
	}
	
	/**
	 * Move target before a certain element. The target maybe block or element.
	 *
	 * @param  {object} target
	 * @param  {object} before
	 */
	function moveTarget(vm, target, after) {
	  if (target.element) {
	    return moveBlock(target, after);
	  }
	  return moveElement(target, after);
	}
	
	/**
	 * Move element before a certain element.
	 *
	 * @param  {object} element
	 * @param  {object} before
	 */
	function moveElement(element, after) {
	  var parent = after.parentNode;
	  if (parent) {
	    return parent.insertAfter(element, after);
	  }
	}
	
	/**
	 * Move all elements of the block before a certain element.
	 *
	 * @param  {object} fragBlock
	 * @param  {object} before
	 */
	function moveBlock(fragBlock, after) {
	  var parent = after.parentNode;
	
	  if (parent) {
	    var _ret = function () {
	      var el = fragBlock.start;
	      var signal = void 0;
	      var group = [el];
	
	      while (el && el !== fragBlock.end) {
	        el = el.nextSibling;
	        group.push(el);
	      }
	
	      var temp = after;
	      group.every(function (el) {
	        signal = parent.insertAfter(el, temp);
	        temp = el;
	        return signal !== -1;
	      });
	
	      return {
	        v: signal
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	
	/**
	 * Remove target from DOM tree.
	 * If the target is a frag block then call _removeBlock
	 *
	 * @param  {object} target
	 */
	function removeTarget(vm, target) {
	  var preserveBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  if (target.element) {
	    removeBlock(target, preserveBlock);
	  } else {
	    removeElement(target);
	  }
	  if (target._vm) {
	    target._vm.$emit('hook:destroyed');
	  }
	}
	
	/**
	 * Remove a certain element.
	 * Using this._app.doc
	 *
	 * @param  {object} target
	 */
	function removeElement(target) {
	  var parent = target.parentNode;
	
	  if (parent) {
	    parent.removeChild(target);
	  }
	}
	
	/**
	 * Remove a frag block.
	 * The second param decides whether the block self should be removed too.
	 *
	 * @param  {object}  fragBlock
	 * @param  {Boolean} preserveBlock=false
	 */
	function removeBlock(fragBlock) {
	  var preserveBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  var result = [];
	  var el = fragBlock.start.nextSibling;
	
	  while (el && el !== fragBlock.end) {
	    result.push(el);
	    el = el.nextSibling;
	  }
	
	  if (!preserveBlock) {
	    removeElement(fragBlock.start);
	  }
	  result.forEach(function (el) {
	    removeElement(el);
	  });
	  if (!preserveBlock) {
	    removeElement(fragBlock.end);
	  }
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$emit = $emit;
	exports.$dispatch = $dispatch;
	exports.$broadcast = $broadcast;
	exports.$on = $on;
	exports.$off = $off;
	exports.initEvents = initEvents;
	exports.mixinEvents = mixinEvents;
	/**
	 * @fileOverview
	 * Everything about component event which includes event object, event listener,
	 * event emitter and lifecycle hooks.
	 */
	
	/**
	 * Event object definition. An event object has `type`, `timestamp` and
	 * `detail` from which a component emit. The event object could be dispatched to
	 * parents or broadcasted to children except `this.stop()` is called.
	 * @param {string} type
	 * @param {any}    detail
	 */
	function Evt(type, detail) {
	  if (detail instanceof Evt) {
	    return detail;
	  }
	
	  this.timestamp = Date.now();
	  this.detail = detail;
	  this.type = type;
	
	  var shouldStop = false;
	
	  /**
	   * stop dispatch and broadcast
	   */
	  this.stop = function () {
	    shouldStop = true;
	  };
	
	  /**
	   * check if it can't be dispatched or broadcasted
	   */
	  this.hasStopped = function () {
	    return shouldStop;
	  };
	}
	
	/**
	 * Emit an event but not broadcast down or dispatch up.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $emit(type, detail) {
	  var _this = this;
	
	  var events = this._vmEvents;
	  var handlerList = events[type];
	  if (handlerList) {
	    (function () {
	      var evt = new Evt(type, detail);
	      handlerList.forEach(function (handler) {
	        handler.call(_this, evt);
	      });
	    })();
	  }
	}
	
	/**
	 * Emit an event and dispatch it up.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $dispatch(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
	    this._parent.$dispatch(type, evt);
	  }
	}
	
	/**
	 * Emit an event and broadcast it down.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $broadcast(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._childrenVms) {
	    this._childrenVms.forEach(function (subVm) {
	      subVm.$broadcast(type, evt);
	    });
	  }
	}
	
	/**
	 * Add event listener.
	 * @param  {string}   type
	 * @param  {function} handler
	 */
	function $on(type, handler) {
	  if (!type || typeof handler !== 'function') {
	    return;
	  }
	  var events = this._vmEvents;
	  var handlerList = events[type] || [];
	  handlerList.push(handler);
	  events[type] = handlerList;
	
	  // fixed old version lifecycle design
	  if (type === 'hook:ready' && this._ready) {
	    this.$emit('hook:ready');
	  }
	}
	
	/**
	 * Remove event listener.
	 * @param  {string}   type
	 * @param  {function} handler
	 */
	function $off(type, handler) {
	  if (!type) {
	    return;
	  }
	  var events = this._vmEvents;
	  if (!handler) {
	    delete events[type];
	    return;
	  }
	  var handlerList = events[type];
	  if (!handlerList) {
	    return;
	  }
	  handlerList.$remove(handler);
	}
	
	var LIFE_CYCLE_TYPES = ['init', 'created', 'ready', 'destroyed'];
	
	/**
	 * Init events:
	 * 1. listen `events` in component options & `externalEvents`.
	 * 2. bind lifecycle hooks.
	 * @param  {Vm}     vm
	 * @param  {object} externalEvents
	 */
	function initEvents(vm, externalEvents) {
	  var options = vm._options || {};
	  var events = options.events || {};
	  for (var type1 in events) {
	    vm.$on(type1, events[type1]);
	  }
	  for (var type2 in externalEvents) {
	    vm.$on(type2, externalEvents[type2]);
	  }
	  LIFE_CYCLE_TYPES.forEach(function (type) {
	    vm.$on('hook:' + type, options[type]);
	  });
	}
	
	/**
	 * Bind event related methods to ViewModel instance.
	 * @param  {Vm} vm
	 */
	function mixinEvents(vm) {
	  vm.$emit = $emit;
	  vm.$dispatch = $dispatch;
	  vm.$broadcast = $broadcast;
	  vm.$on = $on;
	  vm.$off = $off;
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bootstrap = __webpack_require__(102);
	
	Object.defineProperty(exports, 'bootstrap', {
	  enumerable: true,
	  get: function get() {
	    return _bootstrap.bootstrap;
	  }
	});
	
	var _define = __webpack_require__(105);
	
	Object.defineProperty(exports, 'defineFn', {
	  enumerable: true,
	  get: function get() {
	    return _define.defineFn;
	  }
	});
	Object.defineProperty(exports, 'register', {
	  enumerable: true,
	  get: function get() {
	    return _define.register;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;
	
	var _semver = __webpack_require__(103);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _vm = __webpack_require__(88);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(104);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	var _register = __webpack_require__(85);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * bootstrap app from a certain custom component with config & data
	 */
	function bootstrap(app, name, config, data) {
	  console.debug('[JS Framework] bootstrap for ' + name);
	
	  // 1. validate custom component name first
	  var cleanName = void 0;
	  if ((0, _util.isWeexComponent)(name)) {
	    cleanName = (0, _util.removeWeexPrefix)(name);
	  } else if ((0, _util.isNpmModule)(name)) {
	    cleanName = (0, _util.removeJSSurfix)(name);
	    // check if define by old 'define' method
	    /* istanbul ignore if */
	    if (!(0, _register.requireCustomComponent)(app, cleanName)) {
	      return new Error('It\'s not a component: ' + name);
	    }
	  } else {
	    return new Error('Wrong component name: ' + name);
	  }
	
	  // 2. validate configuration
	  config = (0, _util.isPlainObject)(config) ? config : {};
	  // 2.1 transformer version check
	  if (typeof config.transformerVersion === 'string' && typeof global.transformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.transformerVersion)) {
	    return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.transformerVersion));
	  }
	  // 2.2 downgrade version check
	  var downgradeResult = downgrade.check(config.downgrade);
	  /* istanbul ignore if */
	  if (downgradeResult.isDowngrade) {
	    app.callTasks([{
	      module: 'instanceWrap',
	      method: 'error',
	      args: [downgradeResult.errorType, downgradeResult.code, downgradeResult.errorMessage]
	    }]);
	    return new Error('Downgrade[' + downgradeResult.code + ']: ' + downgradeResult.errorMessage);
	  }
	
	  // 3. create a new Vm with custom component name and data
	  app.vm = new _vm2.default(cleanName, null, { _app: app }, null, data);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports = module.exports = SemVer;
	
	// The debug function is excluded entirely from the minified version.
	/* nomin */var debug;
	/* nomin */if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' &&
	/* nomin */process.env &&
	/* nomin */process.env.NODE_DEBUG &&
	/* nomin *//\bsemver\b/i.test(process.env.NODE_DEBUG))
	  /* nomin */debug = function debug() {
	    /* nomin */var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */args.unshift('SEMVER');
	    /* nomin */console.log.apply(console, args);
	    /* nomin */
	  };
	  /* nomin */else
	  /* nomin */debug = function debug() {};
	
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';
	
	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	
	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;
	
	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.
	
	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.
	
	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
	
	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.
	
	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	
	// ## Main Version
	// Three dot-separated numeric identifiers.
	
	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
	
	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
	
	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.
	
	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.
	
	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
	
	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
	
	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.
	
	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
	
	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.
	
	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
	
	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.
	
	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.
	
	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
	
	src[FULL] = '^' + FULLPLAIN + '$';
	
	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
	
	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';
	
	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';
	
	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
	
	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
	
	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';
	
	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';
	
	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
	
	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';
	
	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';
	
	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
	
	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
	
	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
	
	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';
	
	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
	
	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';
	
	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';
	
	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i]) re[i] = new RegExp(src[i]);
	}
	
	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer) return version;
	
	  if (typeof version !== 'string') return null;
	
	  if (version.length > MAX_LENGTH) return null;
	
	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version)) return null;
	
	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}
	
	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}
	
	exports.SemVer = SemVer;
	
	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose) return version;else version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }
	
	  if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
	
	  if (!(this instanceof SemVer)) return new SemVer(version, loose);
	
	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
	
	  if (!m) throw new TypeError('Invalid Version: ' + version);
	
	  this.raw = version;
	
	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];
	
	  if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');
	
	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');
	
	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');
	
	  // numberify any prerelease numeric ids
	  if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
	    if (/^[0-9]+$/.test(id)) {
	      var num = +id;
	      if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
	    }
	    return id;
	  });
	
	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}
	
	SemVer.prototype.format = function () {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};
	
	SemVer.prototype.toString = function () {
	  return this.version;
	};
	
	SemVer.prototype.compare = function (other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return this.compareMain(other) || this.comparePre(other);
	};
	
	SemVer.prototype.compareMain = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
	};
	
	SemVer.prototype.comparePre = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;
	
	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
	  } while (++i);
	};
	
	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function (release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0) this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	
	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0) this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0) this.prerelease = [0];else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
	        } else this.prerelease = [identifier, 0];
	      }
	      break;
	
	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};
	
	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof loose === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }
	
	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre' + key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}
	
	exports.compareIdentifiers = compareIdentifiers;
	
	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	
	  return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
	}
	
	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}
	
	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}
	
	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}
	
	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}
	
	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}
	
	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}
	
	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}
	
	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.compare(a, b, loose);
	  });
	}
	
	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}
	
	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}
	
	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}
	
	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}
	
	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}
	
	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}
	
	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}
	
	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '':case '=':case '==':
	      ret = eq(a, b, loose);break;
	    case '!=':
	      ret = neq(a, b, loose);break;
	    case '>':
	      ret = gt(a, b, loose);break;
	    case '>=':
	      ret = gte(a, b, loose);break;
	    case '<':
	      ret = lt(a, b, loose);break;
	    case '<=':
	      ret = lte(a, b, loose);break;
	    default:
	      throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}
	
	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose) return comp;else comp = comp.value;
	  }
	
	  if (!(this instanceof Comparator)) return new Comparator(comp, loose);
	
	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);
	
	  if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;
	
	  debug('comp', this);
	}
	
	var ANY = {};
	Comparator.prototype.parse = function (comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);
	
	  if (!m) throw new TypeError('Invalid comparator: ' + comp);
	
	  this.operator = m[1];
	  if (this.operator === '=') this.operator = '';
	
	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
	};
	
	Comparator.prototype.toString = function () {
	  return this.value;
	};
	
	Comparator.prototype.test = function (version) {
	  debug('Comparator.test', version, this.loose);
	
	  if (this.semver === ANY) return true;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  return cmp(version, this.operator, this.semver, this.loose);
	};
	
	exports.Range = Range;
	function Range(range, loose) {
	  if (range instanceof Range && range.loose === loose) return range;
	
	  if (!(this instanceof Range)) return new Range(range, loose);
	
	  this.loose = loose;
	
	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function (c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });
	
	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }
	
	  this.format();
	}
	
	Range.prototype.format = function () {
	  this.range = this.set.map(function (comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};
	
	Range.prototype.toString = function () {
	  return this.range;
	};
	
	Range.prototype.parseRange = function (range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);
	
	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);
	
	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);
	
	  // normalize spaces
	  range = range.split(/\s+/).join(' ');
	
	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	
	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function (comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function (comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function (comp) {
	    return new Comparator(comp, loose);
	  });
	
	  return set;
	};
	
	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function (comp) {
	    return comp.map(function (c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}
	
	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}
	
	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}
	
	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}
	
	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	
	    debug('tilde return', ret);
	    return ret;
	  });
	}
	
	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}
	
	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
	      if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
	    }
	
	    debug('caret return', ret);
	    return ret;
	  });
	}
	
	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function (comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}
	
	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;
	
	    if (gtlt === '=' && anyX) gtlt = '';
	
	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm) m = 0;
	      if (xp) p = 0;
	
	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) M = +M + 1;else m = +m + 1;
	      }
	
	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }
	
	    debug('xRange return', ret);
	
	    return ret;
	  });
	}
	
	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}
	
	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
	
	  if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;
	
	  if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;
	
	  return (from + ' ' + to).trim();
	}
	
	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function (version) {
	  if (!version) return false;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version)) return true;
	  }
	  return false;
	};
	
	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) return false;
	  }
	
	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY) continue;
	
	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
	      }
	    }
	
	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }
	
	  return true;
	}
	
	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}
	
	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}
	
	exports.minSatisfying = minSatisfying;
	function minSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return compare(a, b, loose);
	  })[0] || null;
	}
	
	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}
	
	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}
	
	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}
	
	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);
	
	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }
	
	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }
	
	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.
	
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];
	
	    var high = null;
	    var low = null;
	
	    comparators.forEach(function (comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0');
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });
	
	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }
	
	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	exports.prerelease = prerelease;
	function prerelease(version, loose) {
	  var parsed = parse(version, loose);
	  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(92)))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(103);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Normalize a version string.
	 * @param  {String} Version. ie: 1, 1.0, 1.0.0
	 * @return {String} Version
	 */
	function normalizeVersion(v) {
	  var isValid = _semver2.default.valid(v);
	  if (isValid) {
	    return v;
	  }
	
	  v = typeof v === 'string' ? v : '';
	  var split = v.split('.');
	  var i = 0;
	  var result = [];
	
	  while (i < 3) {
	    var s = typeof split[i] === 'string' && split[i] ? split[i] : '0';
	    result.push(s);
	    i++;
	  }
	
	  return result.join('.');
	}
	
	/**
	 * Get informations from different error key. Like:
	 * - code
	 * - errorMessage
	 * - errorType
	 * - isDowngrade
	 * @param  {string} key
	 * @param  {string} val
	 * @param  {string} criteria
	 * @return {object}
	 */
	function getError(key, val, criteria) {
	  var result = {
	    isDowngrade: true,
	    errorType: 1,
	    code: 1000
	  };
	  var getMsg = function getMsg(key, val, criteria) {
	    return 'Downgrade[' + key + '] :: deviceInfo ' + val + ' matched criteria ' + criteria;
	  };
	  var _key = key.toLowerCase();
	
	  result.errorMessage = getMsg(key, val, criteria);
	
	  if (_key.indexOf('osversion') >= 0) {
	    result.code = 1001;
	  } else if (_key.indexOf('appversion') >= 0) {
	    result.code = 1002;
	  } else if (_key.indexOf('weexversion') >= 0) {
	    result.code = 1003;
	  } else if (_key.indexOf('devicemodel') >= 0) {
	    result.code = 1004;
	  }
	
	  return result;
	}
	
	/**
	 * WEEX framework input(deviceInfo)
	 * {
	 *   platform: 'iOS' or 'android'
	 *   osVersion: '1.0.0' or '1.0' or '1'
	 *   appVersion: '1.0.0' or '1.0' or '1'
	 *   weexVersion: '1.0.0' or '1.0' or '1'
	 *   dDeviceModel: 'MODEL_NAME'
	 * }
	 *
	 * downgrade config(config)
	 * {
	 *   ios: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   },
	 *   android: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   }
	 * }
	 *
	 *
	 * @param  {object} deviceInfo Weex SDK framework input
	 * @param  {object} config     user input
	 * @return {Object}            { isDowngrade: true/false, errorMessage... }
	 */
	function check(config, deviceInfo) {
	  deviceInfo = deviceInfo || global.WXEnvironment;
	  deviceInfo = (0, _util.isPlainObject)(deviceInfo) ? deviceInfo : {};
	
	  var result = {
	    isDowngrade: false // defautl is pass
	  };
	
	  if ((0, _util.typof)(config) === 'function') {
	    var customDowngrade = config.call(this, deviceInfo, {
	      semver: _semver2.default,
	      normalizeVersion: this.normalizeVersion
	    });
	
	    customDowngrade = !!customDowngrade;
	
	    result = customDowngrade ? this.getError('custom', '', 'custom params') : result;
	  } else {
	    config = (0, _util.isPlainObject)(config) ? config : {};
	
	    var platform = deviceInfo.platform || 'unknow';
	    var dPlatform = platform.toLowerCase();
	    var cObj = config[dPlatform] || {};
	
	    for (var i in deviceInfo) {
	      var key = i;
	      var keyLower = key.toLowerCase();
	      var val = deviceInfo[i];
	      var isVersion = keyLower.indexOf('version') >= 0;
	      var isDeviceModel = keyLower.indexOf('devicemodel') >= 0;
	      var criteria = cObj[i];
	
	      if (criteria && isVersion) {
	        var c = this.normalizeVersion(criteria);
	        var d = this.normalizeVersion(deviceInfo[i]);
	
	        if (_semver2.default.satisfies(d, c)) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      } else if (isDeviceModel) {
	        var _criteria = (0, _util.typof)(criteria) === 'array' ? criteria : [criteria];
	        if (_criteria.indexOf(val) >= 0) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      }
	    }
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineFn = undefined;
	exports.register = register;
	
	var _util = __webpack_require__(89);
	
	var _register = __webpack_require__(85);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * define(name, factory) for primary usage
	 * or
	 * define(name, deps, factory) for compatibility
	 * Notice: DO NOT use function define() {},
	 * it will cause error after builded by webpack
	 */
	var defineFn = exports.defineFn = function defineFn(app, name) {
	  console.debug('[JS Framework] define a component ' + name);
	
	  // adapt args:
	  // 1. name, deps[], factory()
	  // 2. name, factory()
	  // 3. name, definition{}
	  var factory = void 0,
	      definition = void 0;
	  if ((arguments.length <= 2 ? 0 : arguments.length - 2) > 1) {
	    definition = arguments.length <= 3 ? undefined : arguments[3];
	  } else {
	    definition = arguments.length <= 2 ? undefined : arguments[2];
	  }
	  if (typeof definition === 'function') {
	    factory = definition;
	    definition = null;
	  }
	
	  // resolve definition from factory
	  if (factory) {
	    var r = function r(name) {
	      if ((0, _util.isWeexComponent)(name)) {
	        var cleanName = (0, _util.removeWeexPrefix)(name);
	        return (0, _register.requireCustomComponent)(app, cleanName);
	      }
	      if ((0, _util.isWeexModule)(name)) {
	        var _cleanName = (0, _util.removeWeexPrefix)(name);
	        return app.requireModule(_cleanName);
	      }
	      if ((0, _util.isNormalModule)(name) || (0, _util.isNpmModule)(name)) {
	        var _cleanName2 = (0, _util.removeJSSurfix)(name);
	        return app.commonModules[_cleanName2];
	      }
	    };
	    var m = { exports: {} };
	    factory(r, m.exports, m);
	    definition = m.exports;
	  }
	
	  // apply definition
	  if ((0, _util.isWeexComponent)(name)) {
	    var cleanName = (0, _util.removeWeexPrefix)(name);
	    (0, _register.registerCustomComponent)(app, cleanName, definition);
	  } else if ((0, _util.isWeexModule)(name)) {
	    var _cleanName3 = (0, _util.removeWeexPrefix)(name);
	    (0, _register.initModules)(_defineProperty({}, _cleanName3, definition));
	  } else if ((0, _util.isNormalModule)(name)) {
	    var _cleanName4 = (0, _util.removeJSSurfix)(name);
	    app.commonModules[_cleanName4] = definition;
	  } else if ((0, _util.isNpmModule)(name)) {
	    var _cleanName5 = (0, _util.removeJSSurfix)(name);
	    if (definition.template || definition.style || definition.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      (0, _register.registerCustomComponent)(app, _cleanName5, definition);
	    } else {
	      app.commonModules[_cleanName5] = definition;
	    }
	  }
	};
	
	/**
	 * @deprecated
	 */
	function register(app, type, options) {
	  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
	  (0, _register.registerCustomComponent)(app, type, options);
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.refresh = refresh;
	exports.destroy = destroy;
	exports.destroyVm = destroyVm;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.updateActions = updateActions;
	exports.callTasks = callTasks;
	
	var _util = __webpack_require__(89);
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - fire event
	                                                                                                                                                                                                     * - callback
	                                                                                                                                                                                                     * - refresh
	                                                                                                                                                                                                     * - destroy
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	
	/**
	 * Refresh an app with data to its root component options.
	 * @param  {object} app
	 * @param  {any}    data
	 */
	function refresh(app, data) {
	  console.debug('[JS Framework] Refresh with', data, 'in instance[' + app.id + ']');
	  var vm = app.vm;
	  if (vm && data) {
	    // app.doc.close()
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      (0, _util.extend)(vm, data);
	    }
	    updateActions(app);
	    app.doc.listener.refreshFinish();
	    // app.doc.open()
	    return;
	  }
	  return new Error('invalid data "' + data + '"');
	}
	
	/**
	 * Destroy an app.
	 * @param  {object} app
	 */
	function destroy(app) {
	  console.debug('[JS Framework] Destory an instance(' + app.id + ')');
	
	  if (app.vm) {
	    destroyVm(app.vm);
	  }
	
	  app.id = '';
	  app.options = null;
	  app.blocks = null;
	  app.vm = null;
	  app.doc.destroy();
	  app.doc = null;
	  app.customComponentMap = null;
	  app.commonModules = null;
	  app.callbacks = null;
	}
	
	/**
	 * Destroy an Vm.
	 * @param {object} vm
	 */
	function destroyVm(vm) {
	  delete vm._app;
	  delete vm._computed;
	  delete vm._css;
	  delete vm._data;
	  delete vm._ids;
	  delete vm._methods;
	  delete vm._options;
	  delete vm._parent;
	  delete vm._parentEl;
	  delete vm._rootEl;
	
	  // remove all watchers
	  if (vm._watchers) {
	    var watcherCount = vm._watchers.length;
	    while (watcherCount--) {
	      vm._watchers[watcherCount].teardown();
	    }
	    delete vm._watchers;
	  }
	
	  // destroy child vms recursively
	  if (vm._childrenVms) {
	    var vmCount = vm._childrenVms.length;
	    while (vmCount--) {
	      destroyVm(vm._childrenVms[vmCount]);
	    }
	    delete vm._childrenVms;
	  }
	
	  console.debug('[JS Framework] "destroyed" lifecycle in Vm(' + vm._type + ')');
	  vm.$emit('hook:destroyed');
	
	  delete vm._type;
	  delete vm._vmEvents;
	}
	
	/**
	 * Get a JSON object to describe the document body.
	 * @param  {object} app
	 * @return {object}
	 */
	function getRootElement(app) {
	  var doc = app.doc || {};
	  var body = doc.body || {};
	  return body.toJSON ? body.toJSON() : {};
	}
	
	/**
	 * Fire an event from renderer. The event has type, an event object and an
	 * element ref. If the event comes with some virtual-DOM changes, it should
	 * have one more parameter to describe the changes.
	 * @param  {object} app
	 * @param  {string} ref
	 * @param  {type}   type
	 * @param  {object} e
	 * @param  {object} domChanges
	 */
	function fireEvent(app, ref, type, e, domChanges) {
	  console.debug('[JS Framework] Fire a "' + type + '" event on an element(' + ref + ') in instance(' + app.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return app.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }
	  var el = app.doc.getRef(ref);
	  if (el) {
	    // app.doc.close()
	    var result = app.doc.fireEvent(el, type, e, domChanges);
	    updateActions(app);
	    app.doc.listener.updateFinish();
	    // app.doc.open()
	    return result;
	  }
	  return new Error('invalid element reference "' + ref + '"');
	}
	
	/**
	 * Make a callback for a certain app.
	 * @param  {object}   app
	 * @param  {number}   callbackId
	 * @param  {any}      data
	 * @param  {boolean}  ifKeepAlive
	 */
	function callback(app, callbackId, data, ifKeepAlive) {
	  console.debug('[JS Framework] Invoke a callback(' + callbackId + ') with', data, 'in instance(' + app.id + ')');
	  var callback = app.callbacks[callbackId];
	  if (typeof callback === 'function') {
	    // app.doc.close()
	    callback(data);
	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      app.callbacks[callbackId] = undefined;
	    }
	    updateActions(app);
	    app.doc.listener.updateFinish();
	    // app.doc.open()
	    return;
	  }
	  return new Error('invalid callback id "' + callbackId + '"');
	}
	
	/**
	 * Collect all virtual-DOM mutations together and send them to renderer.
	 * @param  {object} app
	 */
	function updateActions(app) {
	  app.differ.flush();
	  var tasks = [];
	  if (app.doc && app.doc.listener && app.doc.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(app.doc.listener.updates));
	    app.doc.listener.updates = [];
	  }
	  if (tasks.length) {
	    return callTasks(app, tasks);
	  }
	}
	
	/**
	 * Call all tasks from an app to renderer (native).
	 * @param  {object} app
	 * @param  {array}  tasks
	 */
	function callTasks(app, tasks) {
	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }
	
	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(arg, app);
	    });
	  });
	
	  return _config2.default.sendTasks(app.id, tasks, '-1');
	}
	
	/**
	 * Normalize a value. Specially, if the value is a function, then generate a function id
	 * and save it to `app.callbacks`, at last return the function id.
	 * @param  {any}        v
	 * @param  {object}     app
	 * @return {primitive}
	 */
	function normalize(v, app) {
	  var type = (0, _util.typof)(v);
	
	  switch (type) {
	    case 'undefined':
	    case 'null':
	      return '';
	    case 'regexp':
	      return v.toString();
	    case 'date':
	      return v.toISOString();
	    case 'number':
	    case 'string':
	    case 'boolean':
	    case 'array':
	    case 'object':
	      if (v instanceof _config2.default.Element) {
	        return v.ref;
	      }
	      return v;
	    case 'function':
	      app.callbacks[++app.uid] = v;
	      return app.uid.toString();
	    default:
	      return JSON.stringify(v);
	  }
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = App;
	
	var _differ = __webpack_require__(108);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * App constructor for Weex framework.
	 * @param {string} id
	 * @param {object} options
	 */
	/**
	 * @fileOverview
	 * Weex App constructor & definition
	 */
	
	function App(id, options) {
	  this.id = id;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.commonModules = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(id, this.options.bundleUrl, null, _config2.default.Listener);
	  this.differ = new _differ2.default(id);
	  this.uid = 0;
	}

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Differ = function () {
	  function Differ(id) {
	    _classCallCheck(this, Differ);
	
	    this.id = id;
	    this.map = [];
	    this.hooks = [];
	  }
	
	  _createClass(Differ, [{
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.map.length === 0;
	    }
	  }, {
	    key: 'append',
	    value: function append(type, depth, ref, handler) {
	      var _this = this;
	
	      if (!this.hasTimer) {
	        this.hasTimer = true;
	        setTimeout(function () {
	          _this.hasTimer = false;
	          _this.flush(true);
	        }, 0);
	      }
	      var map = this.map;
	      if (!map[depth]) {
	        map[depth] = {};
	      }
	      var group = map[depth];
	      if (!group[type]) {
	        group[type] = {};
	      }
	      if (type === 'element') {
	        if (!group[type][ref]) {
	          group[type][ref] = [];
	        }
	        group[type][ref].push(handler);
	      } else {
	        group[type][ref] = handler;
	      }
	    }
	  }, {
	    key: 'flush',
	    value: function flush(isTimeout) {
	      var map = this.map.slice();
	      this.map.length = 0;
	      map.forEach(function (group) {
	        callTypeMap(group, 'repeat');
	        callTypeMap(group, 'shown');
	        callTypeList(group, 'element');
	      });
	
	      var hooks = this.hooks.slice();
	      this.hooks.length = 0;
	      hooks.forEach(function (fn) {
	        fn();
	      });
	
	      if (!this.isEmpty()) {
	        this.flush();
	      }
	    }
	  }, {
	    key: 'then',
	    value: function then(fn) {
	      this.hooks.push(fn);
	    }
	  }]);
	
	  return Differ;
	}();
	
	exports.default = Differ;
	
	
	function callTypeMap(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    map[ref]();
	  }
	}
	
	function callTypeList(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    var list = map[ref];
	    list.forEach(function (handler) {
	      handler();
	    });
	  }
	}

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var instanceMap = exports.instanceMap = {};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _ctrl = __webpack_require__(86);
	
	var _map = __webpack_require__(109);
	
	var _dep = __webpack_require__(93);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Init config informations for Weex framework
	 * @param  {object} cfg
	 */
	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	  _config2.default.Listener = cfg.Listener;
	}
	
	/**
	 * Refresh a Weex instance with data.
	 *
	 * @param  {string} id
	 * @param  {object} data
	 */
	function refreshInstance(id, data) {
	  var instance = _map.instanceMap[id];
	  var result = void 0;
	  if (instance) {
	    result = (0, _ctrl.refresh)(instance, data);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}
	
	/**
	 * Destroy a Weex instance.
	 * @param  {string} id
	 */
	function destroyInstance(id) {
	  (0, _dep.resetTarget)();
	  var instance = _map.instanceMap[id];
	  if (!instance) {
	    return new Error('invalid instance id "' + id + '"');
	  }
	  (0, _ctrl.destroy)(instance);
	  delete _map.instanceMap[id];
	  return _map.instanceMap;
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	
	var _vm = __webpack_require__(88);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	/**
	 * Register the name of each native component.
	 * @param  {array} components array of name
	 */
	
	function registerComponents(components) {
	  if (Array.isArray(components)) {
	    components.forEach(function register(name) {
	      /* istanbul ignore if */
	      if (!name) {
	        return;
	      }
	      if (typeof name === 'string') {
	        nativeComponentMap[name] = true;
	      } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && typeof name.type === 'string') {
	        nativeComponentMap[name.type] = name;
	      }
	    });
	  }
	}
	
	/**
	 * Register the name and methods of each module.
	 * @param  {object} modules a object of modules
	 */
	function registerModules(modules) {
	  if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
	    (0, _register.initModules)(modules);
	  }
	}
	
	/**
	 * Register the name and methods of each api.
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(methods) {
	  if ((typeof methods === 'undefined' ? 'undefined' : _typeof(methods)) === 'object') {
	    (0, _register.initMethods)(_vm2.default, methods);
	  }
	}
	
	// @todo: Hack for this framework only. Will be re-designed or removed later.
	global.registerMethods = registerMethods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.receiveTasks = receiveTasks;
	
	var _map = __webpack_require__(109);
	
	var _ctrl = __webpack_require__(86);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var jsHandlers = {
	  fireEvent: function fireEvent(id) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    return _ctrl.fireEvent.apply(undefined, [_map.instanceMap[id]].concat(args));
	  },
	  callback: function callback(id) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }
	
	    return _ctrl.callback.apply(undefined, [_map.instanceMap[id]].concat(args));
	  }
	};
	
	/**
	 * Accept calls from native (event or callback).
	 *
	 * @param  {string} id
	 * @param  {array} tasks list with `method` and `args`
	 */
	function receiveTasks(id, tasks) {
	  var instance = _map.instanceMap[id];
	  if (instance && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(id);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return new Error('invalid instance id "' + id + '" or tasks');
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRoot = getRoot;
	
	var _map = __webpack_require__(109);
	
	var _ctrl = __webpack_require__(86);
	
	/**
	 * Get a whole element tree of an instance for debugging.
	 * @param  {string} id
	 * @return {object} a virtual dom tree
	 */
	function getRoot(id) {
	  var instance = _map.instanceMap[id];
	  var result = void 0;
	  if (instance) {
	    result = (0, _ctrl.getRootElement)(instance);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = init;
	var frameworks = void 0;
	
	var versionRegExp = /^\s*\/\/ *(\{[^\}]*\}) *\r?\n/;
	
	/**
	 * Detect a JS Bundle code and make sure which framework it's based to. Each JS
	 * Bundle should make sure that it starts with a line of JSON comment and is
	 * more that one line.
	 * @param  {string} code
	 * @return {object}
	 */
	function checkVersion(code) {
	  var info = void 0;
	  var result = versionRegExp.exec(code);
	  if (result) {
	    try {
	      info = JSON.parse(result[1]);
	    } catch (e) {}
	  }
	  return info;
	}
	
	var instanceMap = {};
	
	/**
	 * Check which framework a certain JS Bundle code based to. And create instance
	 * by this framework.
	 * @param {string} id
	 * @param {string} code
	 * @param {object} config
	 * @param {object} data
	 */
	function createInstance(id, code, config, data) {
	  var info = instanceMap[id];
	  if (!info) {
	    info = checkVersion(code) || {};
	    if (!frameworks[info.framework]) {
	      info.framework = 'Weex';
	    }
	    instanceMap[id] = info;
	    config = config || {};
	    config.bundleVersion = info.version;
	    console.debug('[JS Framework] create an ' + info.framework + '@' + config.bundleVersion + ' instance from ' + config.bundleVersion);
	    return frameworks[info.framework].createInstance(id, code, config, data);
	  }
	  return new Error('invalid instance id "' + id + '"');
	}
	
	var methods = {
	  createInstance: createInstance
	};
	
	/**
	 * Register methods which init each frameworks.
	 * @param {string} methodName
	 */
	function genInit(methodName) {
	  methods[methodName] = function () {
	    for (var name in frameworks) {
	      var framework = frameworks[name];
	      if (framework && framework[methodName]) {
	        framework[methodName].apply(framework, arguments);
	      }
	    }
	  };
	}
	
	/**
	 * Register methods which will be called for each instance.
	 * @param {string} methodName
	 */
	function genInstance(methodName) {
	  methods[methodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && frameworks[info.framework]) {
	      var _frameworks$info$fram;
	
	      return (_frameworks$info$fram = frameworks[info.framework])[methodName].apply(_frameworks$info$fram, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	/**
	 * Adapt some legacy method(s) which will be called for each instance. These
	 * methods should be deprecated and removed later.
	 * @param {string} methodName
	 * @param {string} nativeMethodName
	 */
	function adaptInstance(methodName, nativeMethodName) {
	  methods[nativeMethodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && frameworks[info.framework]) {
	      var _frameworks$info$fram2;
	
	      return (_frameworks$info$fram2 = frameworks[info.framework])[methodName].apply(_frameworks$info$fram2, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	function init(config) {
	  frameworks = config.frameworks || {};
	
	  // Init each framework by `init` method and `config` which contains three
	  // virtual-DOM Class: `Document`, `Element` & `Comment`, and a JS bridge method:
	  // `sendTasks(...args)`.
	  for (var name in frameworks) {
	    var framework = frameworks[name];
	    framework.init(config);
	  }
	
	  // @todo: The method `registerMethods` will be re-designed or removed later.
	  ;['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);
	
	  adaptInstance('receiveTasks', 'callJS');
	
	  return methods;
	}

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = {
		"name": "weex",
		"version": "0.4.0",
		"description": "A framework for building Mobile cross-platform UI",
		"license": "Apache-2.0",
		"repository": {
			"type": "git",
			"url": "git@github.com:alibaba/weex.git"
		},
		"homepage": "http://alibaba.github.io/weex/",
		"bugs": {
			"url": "https://github.com/alibaba/weex/issues"
		},
		"private": true,
		"keywords": [
			"weex",
			"hybrid",
			"webcomponent",
			"appframework",
			"mvvm",
			"javascript",
			"webkit",
			"v8",
			"jscore",
			"html5",
			"android",
			"ios",
			"yunos"
		],
		"engines": {
			"node": ">=4"
		},
		"scripts": {
			"postinstall": "bash ./bin/install-hooks.sh",
			"build:config": "node build/config.frameworks.js",
			"build:browser": "webpack --config build/webpack.browser.config.js",
			"build:common": "webpack --config build/webpack.common.config.js",
			"build:native": "webpack --config build/webpack.native.config.js",
			"build:examples": "webpack --config build/webpack.examples.config.js",
			"build:test": "webpack --config build/webpack.test.config.js",
			"dist:browser": "npm run build:browser && npm run build:common && bash ./bin/dist-browser.sh",
			"dist": "npm run dist:browser",
			"dev:browser": "webpack --watch --config build/webpack.browser.config.js",
			"dev:native": "webpack --watch --config build/webpack.native.config.js",
			"dev:examples": "webpack --watch --config build/webpack.examples.config.js",
			"dev:test": "webpack --watch --config build/webpack.test.config.js",
			"build": "npm run build:native && npm run build:browser && npm run build:examples && npm run build:test",
			"lint": "eslint html5",
			"test:unit": "mocha --compilers js:babel-core/register html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:cover": "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha -- --reporter dot html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:e2e": "npm run build:browser && node html5/test/e2e/runner.js",
			"test": "npm run build:config && npm run lint && npm run test:cover && npm run test:e2e",
			"serve": "serve ./ -p 12580",
			"clean:examples": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mexamples\\033[0m\" && rm -vrf examples/build/*",
			"clean:test": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mtest\\033[0m\" && rm -vrf test/build/*",
			"clean": "npm run clean:examples && npm run clean:test",
			"copy:js": "cp -vf ./dist/native.js ./android/sdk/assets/main.js",
			"copy:examples": "rm -rf ./android/playground/app/src/main/assets/* && cp -vrf ./examples/build/* ./android/playground/app/src/main/assets/",
			"copy": "npm run copy:js && npm run copy:examples"
		},
		"subversion": {
			"browser": "0.3.0",
			"framework": "0.16.18",
			"transformer": ">=0.1.5 <0.4"
		},
		"dependencies": {
			"animationjs": "^0.1.5",
			"core-js": "^2.4.0",
			"cubicbezier": "^0.1.1",
			"envd": "^0.1.1",
			"httpurl": "^0.1.1",
			"lazyimg": "^0.1.2",
			"modals": "^0.1.5",
			"scroll-to": "0.0.2",
			"semver": "^5.1.0",
			"weex-components": "^0.2.0"
		},
		"devDependencies": {
			"babel-cli": "~6.4.5",
			"babel-loader": "^6.2.4",
			"babel-plugin-transform-runtime": "^6.15.0",
			"babel-preset-es2015": "^6.9.0",
			"babel-runtime": "^6.11.6",
			"chai": "^3.5.0",
			"chromedriver": "^2.21.2",
			"cross-spawn": "^4.0.0",
			"css-loader": "^0.23.1",
			"eslint": "^2.11.1",
			"http-server": "^0.9.0",
			"isparta": "^4.0.0",
			"istanbul": "^0.4.3",
			"json-loader": "^0.5.4",
			"mocha": "^2.5.3",
			"nightwatch": "^0.9.4",
			"phantomjs-prebuilt": "^2.1.7",
			"selenium-server": "2.53.1",
			"serve": "^1.4.0",
			"sinon": "^1.17.4",
			"sinon-chai": "^2.8.0",
			"style-loader": "^0.13.1",
			"uglify-js": "^2.6.4",
			"webpack": "^1.13.1",
			"weex-loader": "^0.3.1"
		}
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$ = $;
	exports.$el = $el;
	exports.$vm = $vm;
	exports.$renderThen = $renderThen;
	exports.$scrollTo = $scrollTo;
	exports.$transition = $transition;
	exports.$getConfig = $getConfig;
	exports.$sendHttp = $sendHttp;
	exports.$openURL = $openURL;
	exports.$setTitle = $setTitle;
	exports.$call = $call;
	
	var _util = __webpack_require__(89);
	
	var _config = __webpack_require__(98);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @fileOverview The api for invoking with "$" prefix
	 */
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	/**
	 * ==========================================================
	 * common
	 * ==========================================================
	 */
	
	/**
	 * @deprecated use $vm instead
	 * find the vm by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	
	function $(id) {
	  console.warn('[JS Framework] Vm#$ is deprecated, please use Vm#$vm instead');
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	function addComponentMethods(app, el) {
	  if (el && el.type) {
	    (function () {
	      var component = nativeComponentMap[el.type];
	      if (component && component.methods) {
	        component.methods.forEach(function (method) {
	          el[method] = function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	              args[_key] = arguments[_key];
	            }
	
	            app.callTasks({
	              component: component.type,
	              ref: el.ref,
	              method: method,
	              args: args
	            });
	          };
	        });
	      }
	    })();
	  }
	  return el;
	}
	
	/**
	 * find the element by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Element}
	 */
	function $el(id) {
	  var info = this._ids[id];
	  if (info) {
	    return addComponentMethods(info.vm._app || {}, info.el);
	  }
	}
	
	/**
	 * find the vm of the custom component by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $vm(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	/**
	 * Fire when differ rendering finished
	 *
	 * @param  {Function} fn
	 */
	function $renderThen(fn) {
	  var app = this._app;
	  var differ = app.differ;
	  return differ.then(function () {
	    fn();
	  });
	}
	
	/**
	 * scroll an element specified by id into view,
	 * moreover specify a number of offset optionally
	 * @param  {string} id
	 * @param  {number} offset
	 */
	function $scrollTo(id, offset) {
	  console.warn('[JS Framework] Vm#$scrollTo is deprecated, ' + 'please use "require(\'@weex-module/dom\')' + '.scrollTo(el, options)" instead');
	  var el = this.$el(id);
	  if (el) {
	    var dom = this._app.requireModule('dom');
	    dom.scrollToElement(el.ref, { offset: offset });
	  }
	}
	
	/**
	 * perform transition animation on an element specified by id
	 * @param  {string}   id
	 * @param  {object}   options
	 * @param  {object}   options.styles
	 * @param  {object}   options.duration(ms)
	 * @param  {object}   [options.timingFunction]
	 * @param  {object}   [options.delay=0(ms)]
	 * @param  {Function} callback
	 */
	function $transition(id, options, callback) {
	  var _this = this;
	
	  var el = this.$el(id);
	  if (el && options && options.styles) {
	    var animation = this._app.requireModule('animation');
	    animation.transition(el.ref, options, function () {
	      _this._setStyle(el, options.styles);
	      callback && callback.apply(undefined, arguments);
	    });
	  }
	}
	
	/**
	 * get some config
	 * @return {object} some config for app instance
	 * @property {string} bundleUrl
	 * @property {boolean} debug
	 * @property {object} env
	 * @property {string} env.weexVersion(ex. 1.0.0)
	 * @property {string} env.appName(ex. TB/TM)
	 * @property {string} env.appVersion(ex. 5.0.0)
	 * @property {string} env.platform(ex. iOS/Android)
	 * @property {string} env.osVersion(ex. 7.0.0)
	 * @property {string} env.deviceModel **native only**
	 * @property {number} env.[deviceWidth=750]
	 * @property {number} env.deviceHeight
	 */
	function $getConfig(callback) {
	  var config = (0, _util.extend)({
	    env: global.WXEnvironment || {}
	  }, this._app.options);
	  if ((0, _util.typof)(callback) === 'function') {
	    console.warn('[JS Framework] the callback of Vm#$getConfig(callback) is deprecated, ' + 'this api now can directly RETURN config info.');
	    callback(config);
	  }
	  return config;
	}
	
	/**
	 * @deprecated
	 * request network via http protocol
	 * @param  {object}   params
	 * @param  {Function} callback
	 */
	function $sendHttp(params, callback) {
	  console.warn('[JS Framework] Vm#$sendHttp is deprecated, ' + 'please use "require(\'@weex-module/stream\')' + '.sendHttp(params, callback)" instead');
	  var stream = this._app.requireModule('stream');
	  stream.sendHttp(params, callback);
	}
	
	/**
	 * @deprecated
	 * open a url
	 * @param  {string} url
	 */
	function $openURL(url) {
	  console.warn('[JS Framework] Vm#$openURL is deprecated, ' + 'please use "require(\'@weex-module/event\')' + '.openURL(url)" instead');
	  var event = this._app.requireModule('event');
	  event.openURL(url);
	}
	
	/**
	 * @deprecated
	 * set a title for page
	 * @param  {string} title
	 */
	function $setTitle(title) {
	  console.warn('[JS Framework] Vm#$setTitle is deprecated, ' + 'please use "require(\'@weex-module/pageInfo\')' + '.setTitle(title)" instead');
	  var pageInfo = this._app.requireModule('pageInfo');
	  pageInfo.setTitle(title);
	}
	
	/**
	 * @deprecated use "require('@weex-module/moduleName') instead"
	 * invoke a native method by specifing the name of module and method
	 * @param  {string} moduleName
	 * @param  {string} methodName
	 * @param  {...*} the rest arguments
	 */
	function $call(moduleName, methodName) {
	  console.warn('[JS Framework] Vm#$call is deprecated, ' + 'please use "require(\'@weex-module/moduleName\')" instead');
	  var module = this._app.requireModule(moduleName);
	  if (module && module[methodName]) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	      args[_key2 - 2] = arguments[_key2];
	    }
	
	    module[methodName].apply(module, args);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzliNDYxYjhjMzhiNjA5OTc1MWIiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3NldFRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL29iamVjdEFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9hcnJheUZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3Zkb20vbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcnVudGltZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvdmFuaWxsYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvc3RhdGljL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb3JlL3dhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9kZXAuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb3JlL29ic2VydmVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvdm0vZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvdm0vZG9tLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NlbXZlci9zZW12ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBpL21ldGhvZHMuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsIm5hdGl2ZSIsInRyYW5zZm9ybWVyIiwibWV0aG9kTmFtZSIsImdsb2JhbCIsInJldCIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwidG9TdHJpbmciLCJmcmFtZXdvcmtWZXJzaW9uIiwidHJhbnNmb3JtZXJWZXJzaW9uIiwicmVnaXN0ZXJNZXRob2RzIiwiZXh0ZW5kIiwiZGVmIiwicmVtb3ZlIiwiaGFzT3duIiwiYmluZCIsInRvQXJyYXkiLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0YXJnZXQiLCJzcmMiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdCIsInNoaWZ0Iiwia2V5IiwibGVuZ3RoIiwib2JqIiwidmFsIiwiZW51bWVyYWJsZSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImFyciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImNhbGwiLCJmbiIsImN0eCIsImEiLCJsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJsaXN0Iiwic3RhcnQiLCJpIiwiQXJyYXkiLCJPQkpFQ1RfU1RSSU5HIiwic2V0VGltZW91dCIsInNldFRpbWVvdXROYXRpdmUiLCJ0aW1lb3V0TWFwIiwidGltZW91dElkIiwiY2IiLCJ0aW1lIiwic2V0VGltZW91dENhbGxiYWNrIiwiaWQiLCJXWEVudmlyb25tZW50IiwicGxhdGZvcm0iLCJQcm9taXNlIiwicmVxdWlyZSIsImNsYXNzb2YiLCJ0ZXN0IiwiY29mIiwiVEFHIiwiQVJHIiwidHJ5R2V0IiwiaXQiLCJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIk8iLCJUIiwiQiIsInVuZGVmaW5lZCIsImNhbGxlZSIsInNsaWNlIiwic3RvcmUiLCJ1aWQiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJuYW1lIiwiU0hBUkVEIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiaGlkZSIsImhhcyIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsInNhZmUiLCJpc0Z1bmN0aW9uIiwiam9pbiIsIlN0cmluZyIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImYiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJQIiwiQXR0cmlidXRlcyIsIlR5cGVFcnJvciIsImdldCIsImV4ZWMiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsIlMiLCJ2YWx1ZU9mIiwiYml0bWFwIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkYXQiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJwb2ludCIsImRvbmUiLCJ0b0ludGVnZXIiLCJkZWZpbmVkIiwidGhhdCIsInBvcyIsInMiLCJiIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiTElCUkFSWSIsIiRleHBvcnQiLCJyZWRlZmluZSIsIkl0ZXJhdG9ycyIsIiRpdGVyQ3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJnZXRQcm90b3R5cGVPZiIsIklURVJBVE9SIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJOQU1FIiwiQ29uc3RydWN0b3IiLCJuZXh0IiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsImtpbmQiLCJwcm90byIsInZhbHVlcyIsImVudHJpZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiRiIsIlBST1RPVFlQRSIsInR5cGUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiZXhwUHJvdG8iLCJvd24iLCJvdXQiLCJleHAiLCJVIiwiVyIsIlIiLCJhRnVuY3Rpb24iLCJjIiwiY3JlYXRlIiwiZGVzY3JpcHRvciIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJyZXN1bHQiLCJnZXRLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsIiRrZXlzIiwidG9JT2JqZWN0IiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJwdXNoIiwiSU9iamVjdCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9MZW5ndGgiLCJ0b0luZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwibWluIiwibWF4Iiwic2hhcmVkIiwiZG9jdW1lbnRFbGVtZW50IiwidGFnIiwic3RhdCIsInRvT2JqZWN0IiwiT2JqZWN0UHJvdG8iLCJjb25zdHJ1Y3RvciIsIiRpdGVyYXRvcnMiLCJ3a3MiLCJUT19TVFJJTkdfVEFHIiwiQXJyYXlWYWx1ZXMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb24iLCJhZGRUb1Vuc2NvcGFibGVzIiwic3RlcCIsIl9rIiwiQXJndW1lbnRzIiwiVU5TQ09QQUJMRVMiLCJBcnJheVByb3RvIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic3BlY2llc0NvbnN0cnVjdG9yIiwidGFzayIsInNldCIsIm1pY3JvdGFzayIsIlBST01JU0UiLCJwcm9jZXNzIiwiJFByb21pc2UiLCJpc05vZGUiLCJlbXB0eSIsIkludGVybmFsIiwiR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJwcm9taXNlIiwicmVzb2x2ZSIsIkZha2VQcm9taXNlIiwiUHJvbWlzZVJlamVjdGlvbkV2ZW50IiwidGhlbiIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIkMiLCJQcm9taXNlQ2FwYWJpbGl0eSIsInJlamVjdCIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwicGVyZm9ybSIsIm5vdGlmeSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicnVuIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImRvbWFpbiIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJlbnRlciIsImV4aXQiLCJvblVuaGFuZGxlZCIsImFicnVwdCIsImlzVW5oYW5kbGVkIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwid3JhcHBlciIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJ4IiwiaXRlciIsImFsbCIsIml0ZXJhYmxlIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmb3JiaWRkZW5GaWVsZCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyRm4iLCJpdGVyYXRvciIsImdldEl0ZXJhdG9yTWV0aG9kIiwiU1BFQ0lFUyIsIkQiLCJpbnZva2UiLCJodG1sIiwiY2VsIiwic2V0VGFzayIsInNldEltbWVkaWF0ZSIsImNsZWFyVGFzayIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJjb3VudGVyIiwicXVldWUiLCJPTlJFQURZU1RBVEVDSEFOR0UiLCJkZWZlciIsImNoYW5uZWwiLCJwb3J0IiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwibmV4dFRpY2siLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwiY2xlYXIiLCJ1biIsIm1hY3JvdGFzayIsIk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJoZWFkIiwibGFzdCIsImZsdXNoIiwicGFyZW50IiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJERVNDUklQVE9SUyIsIktFWSIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwibmF0aXZlTG9nIiwiTEVWRUxTIiwibGV2ZWxNYXAiLCJnZW5lcmF0ZUxldmVsTWFwIiwiZGVidWciLCJjaGVja0xldmVsIiwiZm9ybWF0IiwibG9nIiwiaW5mbyIsIndhcm4iLCJfX29yaV9fIiwiZm9yRWFjaCIsImxldmVsSW5kZXgiLCJsZXZlbCIsInR5cGVJbmRleCIsImxvZ0xldmVsIiwibWFwIiwidiIsInRvTG93ZXJDYXNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdPUFMiLCJwSUUiLCIkYXNzaWduIiwiQSIsIksiLCJrIiwiYUxlbiIsImdldFN5bWJvbHMiLCJpc0VudW0iLCJqIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic2V0UHJvdG90eXBlT2YiLCJtYWdpYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9fcHJvdG9fXyIsInBvbHlmaWxsIiwidG9TdHIiLCJpc0NhbGxhYmxlIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJhYnMiLCJtYXhTYWZlSW50ZWdlciIsInBvdyIsImxlbiIsImFycmF5TGlrZSIsIml0ZW1zIiwibWFwRm4iLCJrVmFsdWUiLCJjb25maWciLCJEb2N1bWVudCIsIkVsZW1lbnQiLCJDb21tZW50IiwiTGlzdGVuZXIiLCJmcmFtZXdvcmtzIiwic2VuZFRhc2tzIiwiY2FsbE5hdGl2ZSIsIk5vZGUiLCJERUZBVUxUX1RBR19OQU1FIiwiaW5zdGFuY2VNYXAiLCJuZXh0Tm9kZVJlZiIsInVybCIsIlVSTCIsIm5vZGVNYXAiLCJnZW5DYWxsVGFza3MiLCJjcmVhdGVEb2N1bWVudEVsZW1lbnQiLCJoYXNBZGRFbGVtZW50SGFuZGxlciIsImNhbGxBZGRFbGVtZW50IiwidGFza3MiLCJpc0FycmF5IiwicmV0dXJuVmFsdWUiLCJtZXRob2QiLCJyZWYiLCJqc29uIiwiZGVzdHJveSIsImJhdGNoZWQiLCJkb2NJZCIsIm93bmVyRG9jdW1lbnQiLCJyb2xlIiwiZGVwdGgiLCJfZG9jdW1lbnRFbGVtZW50IiwiYXBwZW5kQm9keSIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImRvYyIsInB1cmVDaGlsZHJlbiIsInBhcmVudE5vZGUiLCJjaGlsZHJlbiIsImJlZm9yZUluZGV4Iiwibm9kZVR5cGUiLCJsaW5rUGFyZW50IiwiY2hpbGQiLCJzZXRCb2R5Iiwibm9kZUlkIiwiY3JlYXRlQm9keSIsIl9yb290IiwiYm9keSIsInByb3BzIiwidGFnTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJ0ZXh0IiwiZmlyZUV2ZW50IiwiZG9tQ2hhbmdlcyIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJ1cGRhdGVFbGVtZW50IiwiZ2V0UmVmIiwiY2hhbmdlcyIsImF0dHJzIiwic2V0QXR0ciIsInNldFN0eWxlIiwibmV4dFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJhdHRyIiwiY2xhc3NTdHlsZSIsImluc2VydEluZGV4IiwicmVnaXN0ZXJOb2RlIiwiYWRkRWxlbWVudCIsIm1vdmVJbmRleCIsIm1vdmVFbGVtZW50IiwicHVyZUJlZm9yZSIsIm5leHRFbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJhZnRlciIsInByZXZpb3VzRWxlbWVudCIsInByZXNlcnZlZCIsInJlbW92ZUluZGV4IiwicmVtb3ZlRWxlbWVudCIsIm5ld0luZGV4IiwiY2hhbmdlU2libGluZyIsIm5ld0luZGV4QWZ0ZXIiLCJiZWZvcmVOZXciLCJhZnRlck5ldyIsInNpbGVudCIsInJlc2V0Q2xhc3NTdHlsZSIsInNldENsYXNzU3R5bGUiLCJzZXRTdHlsZXMiLCJ0b1N0eWxlIiwiYWRkRXZlbnQiLCJyZW1vdmVFdmVudCIsInRvSlNPTiIsImNyZWF0ZUFjdGlvbiIsInVwZGF0ZXMiLCJjcmVhdGVGaW5pc2giLCJjYWxsYmFjayIsInVwZGF0ZUZpbmlzaCIsInJlZnJlc2hGaW5pc2giLCJlbGVtZW50IiwiYWN0aW9ucyIsImFkZEFjdGlvbnMiLCJ0YXJnZXRSZWYiLCJwYXJlbnRSZWYiLCJWYW5pbGxhIiwiV2VleCIsImluaXQiLCJyZWdpc3RlckNvbXBvbmVudHMiLCJyZWdpc3Rlck1vZHVsZXMiLCJwcmVwYXJlSW5zdGFuY2UiLCJjcmVhdGVJbnN0YW5jZSIsInJlZnJlc2hJbnN0YW5jZSIsImRlc3Ryb3lJbnN0YW5jZSIsImdldFJvb3QiLCJyZWNlaXZlVGFza3MiLCJjZmciLCJjb21wb25lbnRzIiwibW9kdWxlcyIsImFwaXMiLCJvcHRpb25zIiwiY29kZSIsImJ1bmRsZVVybCIsImNhbGxiYWNrcyIsImxhc3RDYWxsYmFja0lkIiwiYWRkQ2FsbGJhY2siLCJmdW5jIiwiaGFuZGxlQ2FsbGJhY2siLCJmdW5jSWQiLCJpZkxhc3QiLCJqc0hhbmRsZXJzIiwicmVzdWx0cyIsInVuc2hpZnQiLCJpbnN0YW5jZSIsInJlcXVpcmVNb2R1bGUiLCJ1cGRhdGVBY3Rpb25zIiwiY2FsbFRhc2tzIiwiZ2V0TW9kdWxlIiwiY2xlYXJNb2R1bGVzIiwiaW5pdE1vZHVsZXMiLCJpbml0TWV0aG9kcyIsInJlcXVpcmVDdXN0b21Db21wb25lbnQiLCJyZWdpc3RlckN1c3RvbUNvbXBvbmVudCIsIm5hdGl2ZU1vZHVsZXMiLCJtb2R1bGVOYW1lIiwiaWZSZXBsYWNlIiwiVm0iLCJwIiwiYXBpTmFtZSIsImFwcCIsInByb3h5R2V0dGVyIiwicHJveHlTZXR0ZXIiLCJjdXN0b21Db21wb25lbnRNYXAiLCJyZWZyZXNoIiwiZ2V0Um9vdEVsZW1lbnQiLCJidW5kbGVEZWZpbmUiLCJidW5kbGVCb290c3RyYXAiLCJfZGF0YSIsImJ1bmRsZVZtIiwiYnVuZGxlUmVnaXN0ZXIiLCJidW5kbGVSZW5kZXIiLCJidW5kbGVSZXF1aXJlIiwiYnVuZGxlRG9jdW1lbnQiLCJidW5kbGVSZXF1aXJlTW9kdWxlIiwiZnVuY3Rpb25Cb2R5Iiwic3Vic3RyIiwidGltZXIiLCJ0aW1lckFQSXMiLCJzZXRJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsIm4iLCJjbGVhckludGVydmFsIiwicGFyZW50Vm0iLCJwYXJlbnRFbCIsIm1lcmdlZERhdGEiLCJleHRlcm5hbEV2ZW50cyIsIl9wYXJlbnQiLCJfcmVhbFBhcmVudCIsIl9hcHAiLCJfY2hpbGRyZW5WbXMiLCJfb3B0aW9ucyIsIl9tZXRob2RzIiwiX2NvbXB1dGVkIiwiY29tcHV0ZWQiLCJfY3NzIiwiX2lkcyIsIl92bUV2ZW50cyIsIl90eXBlIiwiJGVtaXQiLCJfaW5pdGVkIiwiX2NyZWF0ZWQiLCJyZWFkeSIsIl9wYXJlbnRFbCIsIiR3YXRjaCIsImRlbGV0ZSIsImlzUmVzZXJ2ZWQiLCJjcmVhdGVOZXdTZXQiLCJjYWNoZWQiLCJ0eXBvZiIsInJlbW92ZVdlZXhQcmVmaXgiLCJyZW1vdmVKU1N1cmZpeCIsInN0ciIsImhhc1Byb3RvIiwiX1NldCIsIlNldCIsIm1hdGNoIiwiYWRkIiwibmF0aXZlU2V0IiwiY2FjaGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsInJlcGxhY2UiLCJ0b1VwcGVyIiwiXyIsInRvVXBwZXJDYXNlIiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJzdWJzdHJpbmciLCJXRUVYX0NPTVBPTkVOVF9SRUciLCJXRUVYX01PRFVMRV9SRUciLCJOT1JNQUxfTU9EVUxFX1JFRyIsIkpTX1NVUkZJWF9SRUciLCJpc1dlZXhDb21wb25lbnQiLCJpc1dlZXhNb2R1bGUiLCJpc05vcm1hbE1vZHVsZSIsImlzTnBtTW9kdWxlIiwiaW5pdFN0YXRlIiwiaW5pdERhdGEiLCJpbml0Q29tcHV0ZWQiLCJ2bSIsIl93YXRjaGVycyIsIm5vb3AiLCJ1c2VyRGVmIiwibWFrZUNvbXB1dGVkR2V0dGVyIiwiZ2V0dGVyIiwib3duZXIiLCJ3YXRjaGVyIiwibGF6eSIsImNvbXB1dGVkR2V0dGVyIiwiZGlydHkiLCJldmFsdWF0ZSIsImRlcGVuZCIsIldhdGNoZXIiLCJleHBPckZuIiwiaXNGbiIsImV4cHJlc3Npb24iLCJhY3RpdmUiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImVudiIsIk5PREVfRU5WIiwicXVldWVkIiwic2hhbGxvdyIsImRlZXAiLCJ0cmF2ZXJzZSIsImNsZWFudXBEZXBzIiwiYWRkRGVwIiwiZGVwIiwiYWRkU3ViIiwicmVtb3ZlU3ViIiwidG1wIiwidXBkYXRlIiwib2xkVmFsdWUiLCJ0ZWFyZG93biIsIl9pc0JlaW5nRGVzdHJveWVkIiwiX3ZGb3JSZW1vdmluZyIsInNlZW5PYmplY3RzIiwic2VlbiIsImlzQSIsImlzTyIsIl9fb2JfXyIsImRlcElkIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwiSXRlbSIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb25zIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiRGVwIiwicHVzaFRhcmdldCIsInBvcFRhcmdldCIsInJlc2V0VGFyZ2V0Iiwic3VicyIsInRhcmdldFN0YWNrIiwiX3RhcmdldCIsInBvcCIsInN1YiIsImRlZmluZVJlYWN0aXZlIiwiZGVsIiwicHJveHkiLCJ1bnByb3h5IiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImF1Z21lbnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIm9ic2VydmVBcnJheSIsIndhbGsiLCJjb252ZXJ0IiwiYWRkVm0iLCJ2bXMiLCJyZW1vdmVWbSIsIm9iIiwiaXNFeHRlbnNpYmxlIiwiX2lzVnVlIiwicHJvcGVydHkiLCJzZXR0ZXIiLCJjaGlsZE9iIiwicmVhY3RpdmVHZXR0ZXIiLCJyZWFjdGl2ZVNldHRlciIsIm5ld1ZhbCIsIktFWV9XT1JEUyIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJvcmlnaW5hbCIsIm11dGF0b3IiLCJpbnNlcnRlZCIsIiRzZXQiLCIkcmVtb3ZlIiwiYnVpbGQiLCJvcHQiLCJ0ZW1wbGF0ZSIsImNvbXBpbGUiLCJfcmVhZHkiLCJkZXN0IiwibWV0YSIsImxhc3RTaWduYWwiLCJfc3RhdGljIiwidGFyZ2V0SXNGcmFnbWVudCIsImNvbXBpbGVGcmFnbWVudCIsInRhcmdldElzQ29udGVudCIsIl9jb250ZW50IiwidGFyZ2V0TmVlZENoZWNrUmVwZWF0IiwiY29tcGlsZVJlcGVhdCIsInRhcmdldE5lZWRDaGVja1Nob3duIiwiY29tcGlsZVNob3duIiwidHlwZUdldHRlciIsInRhcmdldE5lZWRDaGVja1R5cGUiLCJjb21waWxlVHlwZSIsImNvbXBvbmVudCIsInRhcmdldElzQ29tcG9zZWQiLCJjb21waWxlQ3VzdG9tQ29tcG9uZW50IiwiY29tcGlsZU5hdGl2ZUNvbXBvbmVudCIsInJlcGVhdCIsInNob3duIiwiZnJhZ0Jsb2NrIiwib2xkU3R5bGUiLCJ0cmFja0J5IiwiYmluZFJlcGVhdCIsIm5ld01ldGEiLCJiaW5kU2hvd24iLCJDdG9yIiwic3ViVm0iLCJfZXh0ZXJuYWxCaW5kaW5nIiwiY29tcGlsZUNoaWxkcmVuIiwiX3Jvb3RFbCIsImV2ZW50cyIsImFwcGVuZCIsInRyZWVNb2RlIiwiZXZlcnkiLCJrZXlOYW1lIiwidmFsdWVOYW1lIiwiY29tcGlsZUl0ZW0iLCJjb250ZXh0IiwibmV3Q29udGV4dCIsIm1lcmdlQ29udGV4dCIsIndhdGNoQmxvY2siLCJvbGRDaGlsZHJlbiIsIm9sZFZtcyIsIm9sZERhdGEiLCJ0cmFja01hcCIsInJldXNlZE1hcCIsInJldXNlZExpc3QiLCJ1cGRhdGVNYXJrIiwicmV1c2VkIiwiY2FsYyIsImRpZmZlciIsImxhdGVzdFZhbHVlIiwicmVjb3JkZWQiLCJibG9ja0lkIiwiYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zIiwiYmluZEVsZW1lbnQiLCJiaW5kU3ViVm0iLCJiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkIiwic2V0SWQiLCJ3YXRjaCIsIm5hdGl2ZUNvbXBvbmVudE1hcCIsIlNFVFRFUlMiLCJzdWJrZXkiLCJzZXRDbGFzcyIsImNsYXNzTGlzdCIsImJpbmRFdmVudHMiLCJyZXBlYXRJdGVtIiwicmVkdWNlIiwibWVyZ2VQcm9wcyIsIm1lcmdlQ2xhc3NTdHlsZSIsIm1lcmdlU3R5bGUiLCJfdm0iLCJjc3MiLCJjbGFzc05hbWUiLCJhZGRDbGFzc05hbWUiLCJuZXdJZCIsImJpbmREaXIiLCJzZXRFdmVudCIsInJlYWxWbSIsImJpbmRLZXkiLCJpbWFnZSIsImNvbnRhaW5lciIsInNsaWRlciIsImNlbGwiLCJjcmVhdGVCbG9jayIsImF0dGFjaFRhcmdldCIsIm1vdmVUYXJnZXQiLCJyZW1vdmVUYXJnZXQiLCJjcmVhdGVCbG9ja1N0YXJ0IiwiZW5kIiwiY3JlYXRlQmxvY2tFbmQiLCJsYXN0ZXN0QmxvY2tJZCIsImFuY2hvciIsInNpZ25hbCIsIm1vdmVCbG9jayIsImdyb3VwIiwidGVtcCIsInByZXNlcnZlQmxvY2siLCJyZW1vdmVCbG9jayIsIiRkaXNwYXRjaCIsIiRicm9hZGNhc3QiLCIkb24iLCIkb2ZmIiwiaW5pdEV2ZW50cyIsIm1peGluRXZlbnRzIiwiRXZ0IiwiZGV0YWlsIiwic2hvdWxkU3RvcCIsInN0b3AiLCJoYXNTdG9wcGVkIiwiaGFuZGxlckxpc3QiLCJldnQiLCJMSUZFX0NZQ0xFX1RZUEVTIiwidHlwZTEiLCJ0eXBlMiIsImJvb3RzdHJhcCIsImRlZmluZUZuIiwicmVnaXN0ZXIiLCJkb3duZ3JhZGUiLCJjbGVhbk5hbWUiLCJzYXRpc2ZpZXMiLCJkb3duZ3JhZGVSZXN1bHQiLCJjaGVjayIsImlzRG93bmdyYWRlIiwiZXJyb3JUeXBlIiwiZXJyb3JNZXNzYWdlIiwiU2VtVmVyIiwiTk9ERV9ERUJVRyIsIlNFTVZFUl9TUEVDX1ZFUlNJT04iLCJNQVhfTEVOR1RIIiwiTUFYX1NBRkVfSU5URUdFUiIsInJlIiwiTlVNRVJJQ0lERU5USUZJRVIiLCJOVU1FUklDSURFTlRJRklFUkxPT1NFIiwiTk9OTlVNRVJJQ0lERU5USUZJRVIiLCJNQUlOVkVSU0lPTiIsIk1BSU5WRVJTSU9OTE9PU0UiLCJQUkVSRUxFQVNFSURFTlRJRklFUiIsIlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UiLCJQUkVSRUxFQVNFIiwiUFJFUkVMRUFTRUxPT1NFIiwiQlVJTERJREVOVElGSUVSIiwiQlVJTEQiLCJGVUxMIiwiRlVMTFBMQUlOIiwiTE9PU0VQTEFJTiIsIkxPT1NFIiwiR1RMVCIsIlhSQU5HRUlERU5USUZJRVJMT09TRSIsIlhSQU5HRUlERU5USUZJRVIiLCJYUkFOR0VQTEFJTiIsIlhSQU5HRVBMQUlOTE9PU0UiLCJYUkFOR0UiLCJYUkFOR0VMT09TRSIsIkxPTkVUSUxERSIsIlRJTERFVFJJTSIsIlJlZ0V4cCIsInRpbGRlVHJpbVJlcGxhY2UiLCJUSUxERSIsIlRJTERFTE9PU0UiLCJMT05FQ0FSRVQiLCJDQVJFVFRSSU0iLCJjYXJldFRyaW1SZXBsYWNlIiwiQ0FSRVQiLCJDQVJFVExPT1NFIiwiQ09NUEFSQVRPUkxPT1NFIiwiQ09NUEFSQVRPUiIsIkNPTVBBUkFUT1JUUklNIiwiY29tcGFyYXRvclRyaW1SZXBsYWNlIiwiSFlQSEVOUkFOR0UiLCJIWVBIRU5SQU5HRUxPT1NFIiwiU1RBUiIsInBhcnNlIiwibG9vc2UiLCJlciIsInZhbGlkIiwiY2xlYW4iLCJ0cmltIiwibSIsInJhdyIsIm1ham9yIiwibWlub3IiLCJwYXRjaCIsInByZXJlbGVhc2UiLCJudW0iLCJjb21wYXJlIiwib3RoZXIiLCJjb21wYXJlTWFpbiIsImNvbXBhcmVQcmUiLCJjb21wYXJlSWRlbnRpZmllcnMiLCJpbmMiLCJyZWxlYXNlIiwiaWRlbnRpZmllciIsImRpZmYiLCJ2ZXJzaW9uMSIsInZlcnNpb24yIiwiZXEiLCJ2MSIsInYyIiwibnVtZXJpYyIsImFudW0iLCJibnVtIiwicmNvbXBhcmVJZGVudGlmaWVycyIsImNvbXBhcmVMb29zZSIsInJjb21wYXJlIiwic29ydCIsInJzb3J0IiwibmVxIiwiZ3RlIiwibHRlIiwiY21wIiwib3AiLCJDb21wYXJhdG9yIiwiY29tcCIsInNlbXZlciIsIkFOWSIsIm9wZXJhdG9yIiwiUmFuZ2UiLCJyYW5nZSIsInBhcnNlUmFuZ2UiLCJmaWx0ZXIiLCJjb21wcyIsImhyIiwiaHlwaGVuUmVwbGFjZSIsImNvbXBSZSIsInBhcnNlQ29tcGFyYXRvciIsInRvQ29tcGFyYXRvcnMiLCJyZXBsYWNlQ2FyZXRzIiwicmVwbGFjZVRpbGRlcyIsInJlcGxhY2VYUmFuZ2VzIiwicmVwbGFjZVN0YXJzIiwiaXNYIiwicmVwbGFjZVRpbGRlIiwiTSIsInByIiwicmVwbGFjZUNhcmV0IiwicmVwbGFjZVhSYW5nZSIsImd0bHQiLCJ4TSIsInhtIiwieHAiLCJhbnlYIiwiJDAiLCJmTSIsImZtIiwiZnAiLCJmcHIiLCJmYiIsInRvIiwidE0iLCJ0bSIsInRwIiwidHByIiwidGIiLCJ0ZXN0U2V0IiwiYWxsb3dlZCIsIm1heFNhdGlzZnlpbmciLCJtaW5TYXRpc2Z5aW5nIiwidmFsaWRSYW5nZSIsImx0ciIsIm91dHNpZGUiLCJndHIiLCJoaWxvIiwiZ3RmbiIsImx0ZWZuIiwibHRmbiIsImVjb21wIiwiY29tcGFyYXRvcnMiLCJoaWdoIiwibG93IiwiY29tcGFyYXRvciIsInBhcnNlZCIsIm5vcm1hbGl6ZVZlcnNpb24iLCJnZXRFcnJvciIsImlzVmFsaWQiLCJjcml0ZXJpYSIsImdldE1zZyIsIl9rZXkiLCJkZXZpY2VJbmZvIiwiY3VzdG9tRG93bmdyYWRlIiwiZFBsYXRmb3JtIiwiY09iaiIsImtleUxvd2VyIiwiaXNWZXJzaW9uIiwiaXNEZXZpY2VNb2RlbCIsImQiLCJfY3JpdGVyaWEiLCJmYWN0b3J5IiwiZGVmaW5pdGlvbiIsImNvbW1vbk1vZHVsZXMiLCJkZXN0cm95Vm0iLCJyZWZyZXNoRGF0YSIsImJsb2NrcyIsIndhdGNoZXJDb3VudCIsInZtQ291bnQiLCJzb21lIiwiY2FsbGJhY2tJZCIsImlmS2VlcEFsaXZlIiwibm9ybWFsaXplIiwiYXJnIiwidG9JU09TdHJpbmciLCJBcHAiLCJEaWZmZXIiLCJob29rcyIsImhhc1RpbWVyIiwiaXNUaW1lb3V0IiwiY2FsbFR5cGVNYXAiLCJjYWxsVHlwZUxpc3QiLCJpc0VtcHR5IiwidmVyc2lvblJlZ0V4cCIsImNoZWNrVmVyc2lvbiIsImZyYW1ld29yayIsImJ1bmRsZVZlcnNpb24iLCJnZW5Jbml0IiwiZ2VuSW5zdGFuY2UiLCJhZGFwdEluc3RhbmNlIiwibmF0aXZlTWV0aG9kTmFtZSIsIiQiLCIkZWwiLCIkdm0iLCIkcmVuZGVyVGhlbiIsIiRzY3JvbGxUbyIsIiR0cmFuc2l0aW9uIiwiJGdldENvbmZpZyIsIiRzZW5kSHR0cCIsIiRvcGVuVVJMIiwiJHNldFRpdGxlIiwiJGNhbGwiLCJhZGRDb21wb25lbnRNZXRob2RzIiwib2Zmc2V0IiwiZG9tIiwic2Nyb2xsVG9FbGVtZW50Iiwic3R5bGVzIiwiYW5pbWF0aW9uIiwidHJhbnNpdGlvbiIsIl9zZXRTdHlsZSIsInBhcmFtcyIsInN0cmVhbSIsInNlbmRIdHRwIiwib3BlblVSTCIsInBhZ2VJbmZvIiwic2V0VGl0bGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtB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QjtBQUNEO0FBQ0YsRSIsImZpbGUiOiJuYXRpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjOWI0NjFiOGMzOGI2MDk5NzUxYiIsImltcG9ydCAnLi4vc2hhcmVkJ1xuaW1wb3J0IHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSdcbmltcG9ydCB7IHN1YnZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2RlZmF1bHQvYXBpL21ldGhvZHMnXG5cbmNvbnN0IHsgbmF0aXZlLCB0cmFuc2Zvcm1lciB9ID0gc3VidmVyc2lvblxuXG4vLyByZWdpc3RlciBpbnN0YW5jZSBtYW5hZ2VtZW50IEFQSXNcbmZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBydW50aW1lKSB7XG4gIGdsb2JhbFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gcnVudGltZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIGlmIChyZXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihyZXQudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbi8vIHJlZ2lzdGVyIGZyYW1ld29yayBtZXRhIGluZm9cbmdsb2JhbC5mcmFtZXdvcmtWZXJzaW9uID0gbmF0aXZlXG5nbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID0gdHJhbnNmb3JtZXJcblxuLy8gcmVnaXN0ZXIgc3BlY2lhbCBtZXRob2RzIGZvciBXZWV4IGZyYW1ld29ya1xuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwiaW1wb3J0ICcuL3NldFRpbWVvdXQnXG5pbXBvcnQgJy4vcHJvbWlzZSdcbmltcG9ydCAnLi9jb25zb2xlJ1xuaW1wb3J0ICcuL29iamVjdEFzc2lnbidcbmltcG9ydCAnLi9vYmplY3RTZXRQcm90b3R5cGVPZidcbmltcG9ydCAnLi9hcnJheUZyb20nXG5cbmV4cG9ydCB7XG4gIGV4dGVuZCxcbiAgZGVmLFxuICByZW1vdmUsXG4gIGhhc093bixcbiAgYmluZCxcbiAgdG9BcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Rcbn0gZnJvbSAnLi91dGlscydcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQsIC4uLnNyYykge1xuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc3JjKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0ID0gc3JjLnNoaWZ0KClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaXJzdCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBmaXJzdFtrZXldXG4gICAgfVxuICAgIGlmIChzcmMubGVuZ3RoKSB7XG4gICAgICBleHRlbmQodGFyZ2V0LCAuLi5zcmMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LWxpa2V9IGxpc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIC0gc3RhcnQgaW5kZXhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0XG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheShpKVxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L3NoYXJlZC91dGlscy5qcyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogUG9seWZpbGwgYHNldFRpbWVvdXRgIG9uIEFuZHJvaWQgVjggdXNpbmcgbmF0aXZlIG1ldGhvZFxuICogYHNldFRpbWVvdXROYXRpdmUoY2FsbGJhY2tJZCwgdGltZSlgIGFuZCBKUyBtZXRob2RcbiAqIGBzZXRUaW1lb3V0Q2FsbGJhY2soY2FsbGJhY2tJZClgLlxuICogVGhpcyBwb2x5ZmlsbCBpcyBvbmx5IHVzZWQgaW4gdmlydHVhbC1ET00gZGlmZiAmIGZsdXNoIGFnb3JpdGhtLiBOb3RcbiAqIGFjY2Vzc2VkIGJ5IEpTIEJ1bmRsZSBjb2RlIChUaGUgdGltZXIgQVBJcyBwb2x5ZmlsbCBmb3IgSlMgQnVuZGxlIGlzIGluXG4gKiBgaHRtbDUvZGVmYXVsdC9hcHAvY3RybC5qc2ApLlxuICovXG5cbmNvbnN0IHtcbiAgc2V0VGltZW91dCxcbiAgc2V0VGltZW91dE5hdGl2ZVxufSA9IGdsb2JhbFxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIHNldFRpbWVvdXROYXRpdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc3QgdGltZW91dE1hcCA9IHt9XG4gIGxldCB0aW1lb3V0SWQgPSAwXG5cbiAgZ2xvYmFsLnNldFRpbWVvdXQgPSAoY2IsIHRpbWUpID0+IHtcbiAgICB0aW1lb3V0TWFwWysrdGltZW91dElkXSA9IGNiXG4gICAgc2V0VGltZW91dE5hdGl2ZSh0aW1lb3V0SWQudG9TdHJpbmcoKSwgdGltZSlcbiAgfVxuXG4gIGdsb2JhbC5zZXRUaW1lb3V0Q2FsbGJhY2sgPSAoaWQpID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVvdXRNYXBbaWRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aW1lb3V0TWFwW2lkXSgpXG4gICAgICBkZWxldGUgdGltZW91dE1hcFtpZF1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L3NoYXJlZC9zZXRUaW1lb3V0LmpzIiwiLy8gZml4IFByb21pc2UgUHJvYmxlbSBvbiBKU0NvbnRleHQgb2YgaU9TN344XG4vLyBAc2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzU4NjZcbmNvbnN0IHsgV1hFbnZpcm9ubWVudCB9ID0gZ2xvYmFsXG5pZiAoV1hFbnZpcm9ubWVudCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtID09PSAnaU9TJykge1xuICBnbG9iYWwuUHJvbWlzZSA9IG51bGxcbn1cbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UnKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvc2hhcmVkL3Byb21pc2UuanMiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ2YXIgJGl0ZXJhdG9ycyAgICA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJylcbiAgLCByZWRlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB3a3MgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCBJVEVSQVRPUiAgICAgID0gd2tzKCdpdGVyYXRvcicpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKVxuICAsIEFycmF5VmFsdWVzICAgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZVxuICAgICwga2V5O1xuICBpZihwcm90byl7XG4gICAgaWYoIXByb3RvW0lURVJBVE9SXSloaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmKCFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBmb3Ioa2V5IGluICRpdGVyYXRvcnMpaWYoIXByb3RvW2tleV0pcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qcyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBUaGlzIGZpbGUgd2lsbCBoYWNrIGBjb25zb2xlYCBtZXRob2RzIGJ5IGBXWEVudmlyb25tZW50LmxvZ0xldmVsYC5cbiAqIFNvIHdlIGNhbiBjb250cm9sIGhvdyBtYW55IGFuZCB3aGljaCBtZXNzYWdlcyB3aWxsIGJlIHNlbnQgYnkgY2hhbmdlIHRoZSBsb2cgbGV2ZWwuXG4gKiBBZGRpdGlvbmFsbHkgaW4gbmF0aXZlIHBsYXRmb3JtIHRoZSBtZXNzYWdlIGNvbnRlbnQgbXVzdCBiZSBwcmltaXRpdmUgdmFsdWVzIGFuZFxuICogdXNpbmcgYG5hdGl2ZUxvZyguLi5hcmdzLCBsb2dMZXZlbE1hcmspYCBzbyB3ZSBjcmVhdGUgYSBuZXcgYGNvbnNvbGVgIG9iamVjdCBpblxuICogZ2xvYmFsIGFkZCBhIGZvcm1hdCBwcm9jZXNzIGZvciBpdHMgbWV0aG9kcy5cbiAqL1xuXG5jb25zdCB7IGNvbnNvbGUsIG5hdGl2ZUxvZyB9ID0gZ2xvYmFsXG5jb25zdCBMRVZFTFMgPSBbJ29mZicsICdlcnJvcicsICd3YXJuJywgJ2luZm8nLCAnbG9nJywgJ2RlYnVnJ11cbmNvbnN0IGxldmVsTWFwID0ge31cblxuZ2VuZXJhdGVMZXZlbE1hcCgpXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgLy8gQW5kcm9pZFxuICAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSAvLyBpT1Ncbikge1xuICBnbG9iYWwuY29uc29sZSA9IHtcbiAgICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0RFQlVHJykgfVxuICAgIH0sXG4gICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2xvZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0xPRycpIH1cbiAgICB9LFxuICAgIGluZm86ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0lORk8nKSB9XG4gICAgfSxcbiAgICB3YXJuOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19XQVJOJykgfVxuICAgIH0sXG4gICAgZXJyb3I6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnZXJyb3InKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19FUlJPUicpIH1cbiAgICB9XG4gIH1cbn1cbmVsc2UgeyAvLyBIVE1MNVxuICBjb25zdCB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH0gPSBjb25zb2xlXG4gIGNvbnNvbGUuX19vcmlfXyA9IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfVxuICBjb25zb2xlLmRlYnVnID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnZGVidWcnKSkgeyBjb25zb2xlLl9fb3JpX18uZGVidWcuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgY29uc29sZS5fX29yaV9fLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5pbmZvID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IGNvbnNvbGUuX19vcmlfXy5pbmZvLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLndhcm4gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCd3YXJuJykpIHsgY29uc29sZS5fX29yaV9fLndhcm4uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUuZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IGNvbnNvbGUuX19vcmlfXy5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBtYXAgZm9yIHdoaWNoIHR5cGVzIG9mIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGluIGEgY2VydGFpbiBtZXNzYWdlIGxldmVsXG4gKiBhcyB0aGUgb3JkZXIgb2YgTEVWRUxTLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUxldmVsTWFwICgpIHtcbiAgTEVWRUxTLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBMRVZFTFMuaW5kZXhPZihsZXZlbClcbiAgICBsZXZlbE1hcFtsZXZlbF0gPSB7fVxuICAgIExFVkVMUy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgY29uc3QgdHlwZUluZGV4ID0gTEVWRUxTLmluZGV4T2YodHlwZSlcbiAgICAgIGlmICh0eXBlSW5kZXggPD0gbGV2ZWxJbmRleCkge1xuICAgICAgICBsZXZlbE1hcFtsZXZlbF1bdHlwZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGNlcnRhaW4gdHlwZSBvZiBtZXNzYWdlIHdpbGwgYmUgc2VudCBpbiBjdXJyZW50IGxvZyBsZXZlbCBvZiBlbnYuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNoZWNrTGV2ZWwgKHR5cGUpIHtcbiAgY29uc3QgbG9nTGV2ZWwgPSAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQubG9nTGV2ZWwpIHx8ICdsb2cnXG4gIHJldHVybiBsZXZlbE1hcFtsb2dMZXZlbF0gJiYgbGV2ZWxNYXBbbG9nTGV2ZWxdW3R5cGVdXG59XG5cbi8qKlxuICogQ29udmVydCBhbGwgbG9nIGFyZ3VtZW50cyBpbnRvIHByaW1pdGl2ZSB2YWx1ZXMuXG4gKiBAcGFyYW0gIHthcnJheX0gYXJnc1xuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdCAoYXJncykge1xuICByZXR1cm4gYXJncy5tYXAoKHYpID0+IHtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcbiAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHYgPSBTdHJpbmcodilcbiAgICB9XG4gICAgcmV0dXJuIHZcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L3NoYXJlZC9jb25zb2xlLmpzIiwiaW1wb3J0ICdjb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24nXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9zaGFyZWQvb2JqZWN0QXNzaWduLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uLzU1OTM1NTRcbmlmICghT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZiA9IChmdW5jdGlvbihPYmplY3QsIG1hZ2ljKSB7XG4gICAgdmFyIHNldDtcbiAgICBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgc2V0LmNhbGwoTywgcHJvdG8pO1xuICAgICAgcmV0dXJuIE87XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyB0aGlzIHdvcmtzIGFscmVhZHkgaW4gRmlyZWZveCBhbmQgU2FmYXJpXG4gICAgICBzZXQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsIG1hZ2ljKS5zZXQ7XG4gICAgICBzZXQuY2FsbCh7fSwgbnVsbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyBJRSA8IDExIGNhbm5vdCBiZSBzaGltbWVkXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUgIT09IHt9W21hZ2ljXSB8fFxuICAgICAgICAvLyBuZWl0aGVyIGNhbiBhbnkgYnJvd3NlciB0aGF0IGFjdHVhbGx5XG4gICAgICAgIC8vIGltcGxlbWVudGVkIF9fcHJvdG9fXyBjb3JyZWN0bHlcbiAgICAgICAgLy8gKGFsbCBidXQgb2xkIFY4IHdpbGwgcmV0dXJuIGhlcmUpXG4gICAgICAgIHtfX3Byb3RvX186IG51bGx9Ll9fcHJvdG9fXyA9PT0gdm9pZCAwXG4gICAgICAgIC8vIHRoaXMgY2FzZSBtZWFucyBudWxsIG9iamVjdHMgY2Fubm90IGJlIHBhc3NlZFxuICAgICAgICAvLyB0aHJvdWdoIHNldFByb3RvdHlwZU9mIGluIGEgcmVsaWFibGUgd2F5XG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIGhlcmUgYSAqKlNoYW0qKiBpcyBuZWVkZWQgaW5zdGVhZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIG5vZGVqcyAwLjggYW5kIDAuMTAgYXJlIChidWdneSBhbmQuLikgZmluZSBoZXJlXG4gICAgICAvLyBwcm9iYWJseSBDaHJvbWUgb3Igc29tZSBvbGQgTW9iaWxlIHN0b2NrIGJyb3dzZXJcbiAgICAgIHNldCA9IGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICAgIHRoaXNbbWFnaWNdID0gcHJvdG87XG4gICAgICB9O1xuICAgICAgLy8gcGxlYXNlIG5vdGUgdGhhdCB0aGlzIHdpbGwgKipub3QqKiB3b3JrXG4gICAgICAvLyBpbiB0aG9zZSBicm93c2VycyB0aGF0IGRvIG5vdCBpbmhlcml0XG4gICAgICAvLyBfX3Byb3RvX18gYnkgbWlzdGFrZSBmcm9tIE9iamVjdC5wcm90b3R5cGVcbiAgICAgIC8vIGluIHRoZXNlIGNhc2VzIHdlIHNob3VsZCBwcm9iYWJseSB0aHJvdyBhbiBlcnJvclxuICAgICAgLy8gb3IgYXQgbGVhc3QgYmUgaW5mb3JtZWQgYWJvdXQgdGhlIGlzc3VlXG4gICAgICBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9IHNldFByb3RvdHlwZU9mKFxuICAgICAgICBzZXRQcm90b3R5cGVPZih7fSwgbnVsbCksXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGVcbiAgICAgICkgaW5zdGFuY2VvZiBPYmplY3Q7XG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdHJ1ZSBtZWFucyBpdCB3b3JrcyBhcyBtZWFudFxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IGZhbHNlIG1lYW5zIGl0J3Mgbm90IDEwMCUgcmVsaWFibGVcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSB1bmRlZmluZWRcbiAgICAgIC8vIG9yXG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PSAgbnVsbCBtZWFucyBpdCdzIG5vdCBhIHBvbHlmaWxsXG4gICAgICAvLyB3aGljaCBtZWFucyBpdCB3b3JrcyBhcyBleHBlY3RlZFxuICAgICAgLy8gd2UgY2FuIGV2ZW4gZGVsZXRlIE9iamVjdC5wcm90b3R5cGUuX19wcm90b19fO1xuICAgIH1cbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2Y7XG4gIH0oT2JqZWN0LCAnX19wcm90b19fJykpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mLmpzIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gUHJvZHVjdGlvbiBzdGVwcyBvZiBFQ01BLTI2MiwgRWRpdGlvbiA2LCAyMi4xLjIuMVxuLy8gUmVmZXJlbmNlOiBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtYXJyYXkuZnJvbVxuaWYgKCFBcnJheS5mcm9tKSB7XG4gIGNvbnNvbGUubG9nKCdtYWtlIHBvbHlmaWxsJylcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gICAgfTtcbiAgICB2YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBudW1iZXIgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICBpZiAobnVtYmVyID09PSAwIHx8ICFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcbiAgICB9O1xuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBsZW4gPSB0b0ludGVnZXIodmFsdWUpO1xuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGxlbiwgMCksIG1heFNhZmVJbnRlZ2VyKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiB0aGUgZnJvbSBtZXRob2QgaXMgMS5cbiAgICByZXR1cm4gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICAgIC8vIDEuIExldCBDIGJlIHRoZSB0aGlzIHZhbHVlLlxuICAgICAgdmFyIEMgPSB0aGlzO1xuXG4gICAgICAvLyAyLiBMZXQgaXRlbXMgYmUgVG9PYmplY3QoYXJyYXlMaWtlKS5cbiAgICAgIHZhciBpdGVtcyA9IE9iamVjdChhcnJheUxpa2UpO1xuXG4gICAgICAvLyAzLiBSZXR1cm5JZkFicnVwdChpdGVtcykuXG4gICAgICBpZiAoYXJyYXlMaWtlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBJZiBtYXBmbiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG1hcHBpbmcgYmUgZmFsc2UuXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkO1xuICAgICAgdmFyIFQ7XG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA1LiBlbHNlXG4gICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgLy8gMTEuIExldCBsZW4gYmUgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgIC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgIC8vIDEzLiBhLiBMZXQgQSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgIC8vIDE0LiBhLiBFbHNlLCBMZXQgQSBiZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbik7XG5cbiAgICAgIC8vIDE2LiBMZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSAwO1xuICAgICAgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcbiAgICAgIHZhciBrVmFsdWU7XG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcbiAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgQVtrXSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKGtWYWx1ZSwgaykgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVtrXSA9IGtWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBrICs9IDE7XG4gICAgICB9XG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgIEEubGVuZ3RoID0gbGVuO1xuICAgICAgLy8gMjAuIFJldHVybiBBLlxuICAgICAgcmV0dXJuIEE7XG4gICAgfTtcbiAgfSgpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L3NoYXJlZC9hcnJheUZyb20uanMiLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFJlZ2lzdGVyIGZyYW1ld29yayhzKSBpbiBKUyBydW50aW1lLiBXZWV4IHN1cHBseSB0d28gbGF5ZXJzIGZvciAzcmQtcGFydHlcbiAqIGZyYW1ld29yayhzKTogb25lIGlzIHRoZSBpbnN0YW5jZSBtYW5hZ2VtZW50IGxheWVyLCBhbm90aGVyIGlzIHRoZVxuICogdmlydHVhbC1ET00gbGF5ZXIuXG4gKi9cblxuLy8gVGhpcyBjb25maWcgaXMgZ2VuZXJhdGVkIGJ5IGBucG0gcnVuIGJ1aWxkOmNvbmZpZ2AuXG4vLyBJdCB3aWxsIGNvbGxlY3QgYWxsIGBydW50aW1lL2ZyYW1ld29yay0qLmpzYCBmaWxlcyBhbmQgaW1wb3J0IGVhY2ggb2YgdGhlbS5cbi8vIFRoZSBmaWxlbmFtZSBpcyBhbHNvIHRoZSBmcmFtZXdvcmsgbmFtZS5cbmltcG9ydCB7IERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50IH0gZnJvbSAnLi4vdmRvbSdcbmltcG9ydCBMaXN0ZW5lciBmcm9tICcuLi92ZG9tL2xpc3RlbmVyJ1xuaW1wb3J0IGZyYW1ld29ya3MgZnJvbSAnLi9jb25maWcnXG5cbmltcG9ydCBpbml0IGZyb20gJy4vaW5pdCdcblxuY29uc3QgY29uZmlnID0ge1xuICBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCwgTGlzdGVuZXIsIGZyYW1ld29ya3MsXG4gIHNlbmRUYXNrcyAoLi4uYXJncykge1xuICAgIHJldHVybiBnbG9iYWwuY2FsbE5hdGl2ZSguLi5hcmdzKVxuICB9XG59XG5cbmNvbnN0IG1ldGhvZHMgPSBpbml0KGNvbmZpZylcblxuZXhwb3J0IGRlZmF1bHQgbWV0aG9kc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvcnVudGltZS9pbmRleC5qcyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogQSBzaW1wbGUgdmlydHVhbCBkb20gaW1wbGVtZW50YXRpb25cbiAqL1xuLy8gaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzJ1xuXG5jb25zdCBERUZBVUxUX1RBR19OQU1FID0gJ2RpdidcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlTWFwID0ge31cbmxldCBuZXh0Tm9kZVJlZiA9IDFcblxuZXhwb3J0IGZ1bmN0aW9uIERvY3VtZW50IChpZCwgdXJsLCBoYW5kbGVyLCBMaXN0ZW5lcikge1xuICBpZCA9IGlkID8gaWQudG9TdHJpbmcoKSA6ICcnXG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLlVSTCA9IHVybFxuXG4gIGluc3RhbmNlTWFwW2lkXSA9IHRoaXNcbiAgdGhpcy5ub2RlTWFwID0ge31cbiAgTGlzdGVuZXIgJiYgKHRoaXMubGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoaWQsIGhhbmRsZXIgfHwgZ2VuQ2FsbFRhc2tzKGlkKSkpXG4gIHRoaXMuY3JlYXRlRG9jdW1lbnRFbGVtZW50KClcbn1cblxuZnVuY3Rpb24gZ2VuQ2FsbFRhc2tzIChpZCkge1xuICAvLyBAdG9kbzogVGhlIGBjYWxsQWRkRWxlbWVudGAgQVBJIHNob3VsZCBiZSByZS1kZXNpZ24gaW1tZWRpYXRlbHlcbiAgLy8gYmVjYXVzZSBpdHMgcHVibGljIGFuZCBnbG9iYWwgYW5kIHdpdGhvdXQgY29uZmlnIG9wcG9ydHVuaXR5LlxuICBjb25zdCBoYXNBZGRFbGVtZW50SGFuZGxlciA9IHR5cGVvZiBjYWxsQWRkRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJ1xuICByZXR1cm4gKHRhc2tzKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgICAgdGFza3MgPSBbdGFza3NdXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0YXNrc1tpXVxuICAgICAgbGV0IHJldHVyblZhbHVlXG4gICAgICBpZiAoaGFzQWRkRWxlbWVudEhhbmRsZXIgJiYgdGFzay5tb2R1bGUgPT09ICdkb20nICYmIHRhc2subWV0aG9kID09PSAnYWRkRWxlbWVudCcpIHtcbiAgICAgICAgY29uc3QgW3JlZiwganNvbiwgaW5kZXhdID0gdGFzay5hcmdzXG4gICAgICAgIHJldHVyblZhbHVlID0gY2FsbEFkZEVsZW1lbnQoaWQsIHJlZiwganNvbiwgaW5kZXgsICctMScpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxsTmF0aXZlKGlkLCBbdGFza10sICctMScpXG4gICAgICB9XG4gICAgICBpZiAocmV0dXJuVmFsdWUgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgZGVsZXRlIHRoaXMubGlzdGVuZXJcbiAgZGVsZXRlIHRoaXMubm9kZU1hcFxuICBkZWxldGUgaW5zdGFuY2VNYXBbdGhpcy5pZF1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IGZhbHNlXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5saXN0ZW5lci5iYXRjaGVkID0gdHJ1ZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRG9jdW1lbnRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCgnZG9jdW1lbnQnKVxuICAgIGVsLmRvY0lkID0gdGhpcy5pZFxuICAgIGVsLm93bmVyRG9jdW1lbnQgPSB0aGlzXG4gICAgZWwucm9sZSA9ICdkb2N1bWVudEVsZW1lbnQnXG4gICAgZWwuZGVwdGggPSAwXG4gICAgZWwucmVmID0gJ19kb2N1bWVudEVsZW1lbnQnXG4gICAgdGhpcy5ub2RlTWFwLl9kb2N1bWVudEVsZW1lbnQgPSBlbFxuICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICBlbC5hcHBlbmRDaGlsZCA9IChub2RlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUpXG4gICAgfVxuICAgIGVsLmluc2VydEJlZm9yZSA9IChub2RlLCBiZWZvcmUpID0+IHtcbiAgICAgIGFwcGVuZEJvZHkodGhpcywgbm9kZSwgYmVmb3JlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudFxufVxuXG5mdW5jdGlvbiBhcHBlbmRCb2R5IChkb2MsIG5vZGUsIGJlZm9yZSkge1xuICBjb25zdCB7IGRvY3VtZW50RWxlbWVudCB9ID0gZG9jXG5cbiAgaWYgKGRvY3VtZW50RWxlbWVudC5wdXJlQ2hpbGRyZW4ubGVuZ3RoID4gMCB8fCBub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50RWxlbWVudC5jaGlsZHJlblxuICBjb25zdCBiZWZvcmVJbmRleCA9IGNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKVxuICBpZiAoYmVmb3JlSW5kZXggPCAwKSB7XG4gICAgY2hpbGRyZW4ucHVzaChub2RlKVxuICB9XG4gIGVsc2Uge1xuICAgIGNoaWxkcmVuLnNwbGljZShiZWZvcmVJbmRleCwgMCwgbm9kZSlcbiAgfVxuXG4gIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgaWYgKG5vZGUucm9sZSA9PT0gJ2JvZHknKSB7XG4gICAgICBub2RlLmRvY0lkID0gZG9jLmlkXG4gICAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIG5vZGUucGFyZW50Tm9kZSA9IGRvY3VtZW50RWxlbWVudFxuICAgICAgbGlua1BhcmVudChub2RlLCBkb2N1bWVudEVsZW1lbnQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IG5vZGVcbiAgICAgIH0pXG4gICAgICBzZXRCb2R5KGRvYywgbm9kZSlcbiAgICAgIG5vZGUuZG9jSWQgPSBkb2MuaWRcbiAgICAgIG5vZGUub3duZXJEb2N1bWVudCA9IGRvY1xuICAgICAgbGlua1BhcmVudChub2RlLCBkb2N1bWVudEVsZW1lbnQpXG4gICAgICBkZWxldGUgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdXG4gICAgfVxuICAgIGRvY3VtZW50RWxlbWVudC5wdXJlQ2hpbGRyZW4ucHVzaChub2RlKVxuICAgIGRvYy5saXN0ZW5lci5jcmVhdGVCb2R5KG5vZGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgbm9kZS5wYXJlbnROb2RlID0gZG9jdW1lbnRFbGVtZW50XG4gICAgZG9jLm5vZGVNYXBbbm9kZS5yZWZdID0gbm9kZVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvZHkgKGRvYywgZWwpIHtcbiAgZWwucm9sZSA9ICdib2R5J1xuICBlbC5kZXB0aCA9IDFcbiAgZGVsZXRlIGRvYy5ub2RlTWFwW2VsLm5vZGVJZF1cbiAgZWwucmVmID0gJ19yb290J1xuICBkb2Mubm9kZU1hcC5fcm9vdCA9IGVsXG4gIGRvYy5ib2R5ID0gZWxcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgaWYgKCF0aGlzLmJvZHkpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBFbGVtZW50KHR5cGUsIHByb3BzKVxuICAgIHNldEJvZHkodGhpcywgZWwpXG4gIH1cblxuICByZXR1cm4gdGhpcy5ib2R5XG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgRWxlbWVudCh0YWdOYW1lLCBwcm9wcylcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUNvbW1lbnQgPSBmdW5jdGlvbiAodGV4dCkge1xuICByZXR1cm4gbmV3IENvbW1lbnQodGV4dClcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmZpcmVFdmVudCA9IGZ1bmN0aW9uIChlbCwgdHlwZSwgZSwgZG9tQ2hhbmdlcykge1xuICBpZiAoIWVsKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZSA9IGUgfHwge31cbiAgZS50eXBlID0gdHlwZVxuICBlLnRhcmdldCA9IGVsXG4gIGUudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICBpZiAoZG9tQ2hhbmdlcykge1xuICAgIHVwZGF0ZUVsZW1lbnQoZWwsIGRvbUNoYW5nZXMpXG4gIH1cbiAgcmV0dXJuIGVsLmZpcmVFdmVudCh0eXBlLCBlKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICByZXR1cm4gdGhpcy5ub2RlTWFwW3JlZl1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudCAoZWwsIGNoYW5nZXMpIHtcbiAgY29uc3QgYXR0cnMgPSBjaGFuZ2VzLmF0dHJzIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBhdHRycykge1xuICAgIGVsLnNldEF0dHIobmFtZSwgYXR0cnNbbmFtZV0sIHRydWUpXG4gIH1cbiAgY29uc3Qgc3R5bGUgPSBjaGFuZ2VzLnN0eWxlIHx8IHt9XG4gIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZSkge1xuICAgIGVsLnNldFN0eWxlKG5hbWUsIHN0eWxlW25hbWVdLCB0cnVlKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlICgpIHtcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG4gIHRoaXMucGFyZW50Tm9kZSA9IG51bGxcbiAgdGhpcy5uZXh0U2libGluZyA9IG51bGxcbiAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsXG59XG5cbk5vZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRvYyA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdXG4gIGlmIChkb2MpIHtcbiAgICBkZWxldGUgdGhpcy5kb2NJZFxuICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFt0aGlzLm5vZGVJZF1cbiAgfVxuICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGNoaWxkLmRlc3Ryb3koKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRWxlbWVudCAodHlwZSA9IERFRkFVTFRfVEFHX05BTUUsIHByb3BzKSB7XG4gIHByb3BzID0gcHJvcHMgfHwge31cbiAgdGhpcy5ub2RlVHlwZSA9IDFcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5hdHRyID0gcHJvcHMuYXR0ciB8fCB7fVxuICB0aGlzLmNsYXNzU3R5bGUgPSBwcm9wcy5jbGFzc1N0eWxlIHx8IHt9XG4gIHRoaXMuc3R5bGUgPSBwcm9wcy5zdHlsZSB8fCB7fVxuICB0aGlzLmV2ZW50ID0ge31cbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuRWxlbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZENoaWxkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgLTEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4sIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24gKG5vZGUsIGJlZm9yZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChub2RlID09PSBiZWZvcmUgfHwgbm9kZS5uZXh0U2libGluZyA9PT0gYmVmb3JlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSksIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGJlZm9yZSksIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHB1cmVCZWZvcmUgPSBuZXh0RWxlbWVudChiZWZvcmUpXG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChub2RlLCBhZnRlcikge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChub2RlID09PSBhZnRlciB8fCBub2RlLnByZXZpb3VzU2libGluZyA9PT0gYWZ0ZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGluc2VydEluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwcmV2aW91c0VsZW1lbnQoYWZ0ZXIpKSArIDFcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGFmdGVyKSArIDEsIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwcmV2aW91c0VsZW1lbnQoYWZ0ZXIpKSArIDFcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSwgcHJlc2VydmVkKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZW1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZW1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbilcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRWxlbWVudChub2RlLnJlZilcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFwcmVzZXJ2ZWQpIHtcbiAgICBub2RlLmRlc3Ryb3koKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5kb2NJZCkge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgbGlzdGVuZXIucmVtb3ZlRWxlbWVudChub2RlLnJlZilcbiAgICB9KVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICBub2RlLmRlc3Ryb3koKVxuICB9KVxuICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDBcbiAgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoID0gMFxufVxuXG5mdW5jdGlvbiBuZXh0RWxlbWVudCAobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5uZXh0U2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzRWxlbWVudCAobm9kZSkge1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5rUGFyZW50IChub2RlLCBwYXJlbnQpIHtcbiAgbm9kZS5wYXJlbnROb2RlID0gcGFyZW50XG4gIGlmIChwYXJlbnQuZG9jSWQpIHtcbiAgICBub2RlLmRvY0lkID0gcGFyZW50LmRvY0lkXG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQubm9kZU1hcFtub2RlLm5vZGVJZF0gPSBub2RlXG4gICAgbm9kZS5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDFcbiAgfVxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGxpbmtQYXJlbnQoY2hpbGQsIG5vZGUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTm9kZSAoZG9jSWQsIG5vZGUpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbZG9jSWRdXG4gIGRvYy5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbn1cblxuZnVuY3Rpb24gaW5zZXJ0SW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgIG5ld0luZGV4ID0gMFxuICB9XG4gIGNvbnN0IGJlZm9yZSA9IGxpc3RbbmV3SW5kZXggLSAxXVxuICBjb25zdCBhZnRlciA9IGxpc3RbbmV3SW5kZXhdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4LCAwLCB0YXJnZXQpXG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSB0YXJnZXQpXG4gICAgdGFyZ2V0LnByZXZpb3VzU2libGluZyA9IGJlZm9yZVxuICAgIHRhcmdldC5uZXh0U2libGluZyA9IGFmdGVyXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IHRhcmdldClcbiAgfVxuICByZXR1cm4gbmV3SW5kZXhcbn1cblxuZnVuY3Rpb24gbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gIGxldCBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXhcbiAgaWYgKGluZGV4IDw9IG5ld0luZGV4KSB7XG4gICAgbmV3SW5kZXhBZnRlciA9IG5ld0luZGV4IC0gMVxuICB9XG4gIGNvbnN0IGJlZm9yZU5ldyA9IGxpc3RbbmV3SW5kZXhBZnRlciAtIDFdXG4gIGNvbnN0IGFmdGVyTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyXVxuICBsaXN0LnNwbGljZShuZXdJbmRleEFmdGVyLCAwLCB0YXJnZXQpXG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgYmVmb3JlTmV3ICYmIChiZWZvcmVOZXcubmV4dFNpYmxpbmcgPSB0YXJnZXQpXG4gICAgdGFyZ2V0LnByZXZpb3VzU2libGluZyA9IGJlZm9yZU5ld1xuICAgIHRhcmdldC5uZXh0U2libGluZyA9IGFmdGVyTmV3XG4gICAgYWZ0ZXJOZXcgJiYgKGFmdGVyTmV3LnByZXZpb3VzU2libGluZyA9IHRhcmdldClcbiAgfVxuICBpZiAoaW5kZXggPT09IG5ld0luZGV4QWZ0ZXIpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gbmV3SW5kZXhcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgY2hhbmdlU2libGluZykge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZih0YXJnZXQpXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGNvbnN0IGJlZm9yZSA9IGxpc3RbaW5kZXggLSAxXVxuICAgIGNvbnN0IGFmdGVyID0gbGlzdFtpbmRleCArIDFdXG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSBhZnRlcilcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlKVxuICB9XG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIHNpbGVudCkge1xuICBpZiAodGhpcy5hdHRyW2tleV0gPT09IHZhbHVlICYmIHNpbGVudCAhPT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmF0dHJba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0QXR0cih0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuc3R5bGVba2V5XSA9PT0gdmFsdWUgJiYgc2lsZW50ICE9PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG4gIHRoaXMuc3R5bGVba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0U3R5bGUodGhpcy5yZWYsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVzZXRDbGFzc1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNsYXNzU3R5bGUpIHtcbiAgICB0aGlzLmNsYXNzU3R5bGVba2V5XSA9ICcnXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0Q2xhc3NTdHlsZSA9IGZ1bmN0aW9uIChjbGFzc1N0eWxlKSB7XG4gIHRoaXMucmVzZXRDbGFzc1N0eWxlKClcbiAgZXh0ZW5kKHRoaXMuY2xhc3NTdHlsZSwgY2xhc3NTdHlsZSlcbiAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0U3R5bGVzKHRoaXMucmVmLCB0aGlzLnRvU3R5bGUoKSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdGhpcy5ldmVudFt0eXBlXSkge1xuICAgIHRoaXMuZXZlbnRbdHlwZV0gPSBoYW5kbGVyXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLmFkZEV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0aGlzLmV2ZW50W3R5cGVdKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRbdHlwZV1cbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnQodGhpcy5yZWYsIHR5cGUpXG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmZpcmVFdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBlKSB7XG4gIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmV2ZW50W3R5cGVdXG4gIGlmIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGhhbmRsZXIuY2FsbCh0aGlzLCBlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBleHRlbmQoe30sIHRoaXMuY2xhc3NTdHlsZSwgdGhpcy5zdHlsZSlcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgcmVmOiB0aGlzLnJlZi50b1N0cmluZygpLFxuICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICBhdHRyOiB0aGlzLmF0dHIsXG4gICAgc3R5bGU6IHRoaXMudG9TdHlsZSgpXG4gIH1cbiAgY29uc3QgZXZlbnQgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50KVxuICBpZiAoZXZlbnQubGVuZ3RoKSB7XG4gICAgcmVzdWx0LmV2ZW50ID0gZXZlbnRcbiAgfVxuICBpZiAodGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmVzdWx0LmNoaWxkcmVuID0gdGhpcy5wdXJlQ2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQudG9KU09OKCkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICc8JyArIHRoaXMudHlwZSArXG4gICAgJyBhdHRyPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmF0dHIpICtcbiAgICAnIHN0eWxlPScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnRvU3R5bGUoKSkgKyAnPicgK1xuICAgIHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvU3RyaW5nKCkpLmpvaW4oJycpICtcbiAgICAnPC8nICsgdGhpcy50eXBlICsgJz4nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50ICh2YWx1ZSkge1xuICB0aGlzLm5vZGVUeXBlID0gOFxuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy50eXBlID0gJ2NvbW1lbnQnXG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5Db21tZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuQ29tbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCEtLSAnICsgdGhpcy52YWx1ZSArICcgLS0+J1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvdmRvbS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RlbmVyIChpZCwgaGFuZGxlcikge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5iYXRjaGVkID0gZmFsc2VcbiAgdGhpcy51cGRhdGVzID0gW11cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICB9XG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdjcmVhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnVwZGF0ZUZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3VwZGF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVmcmVzaEZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3JlZnJlc2hGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBjb25zdCBib2R5ID0gZWxlbWVudC50b0pTT04oKVxuICBjb25zdCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW5cbiAgZGVsZXRlIGJvZHkuY2hpbGRyZW5cbiAgY29uc3QgYWN0aW9ucyA9IFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUJvZHknLCBbYm9keV0pXVxuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBhY3Rpb25zLnB1c2guYXBwbHkoYWN0aW9ucywgY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oJ2FkZEVsZW1lbnQnLCBbYm9keS5yZWYsIGNoaWxkLCAtMV0pXG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCByZWYsIGluZGV4KSB7XG4gIGlmICghKGluZGV4ID49IDApKSB7XG4gICAgaW5kZXggPSAtMVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW3JlZiwgZWxlbWVudC50b0pTT04oKSwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gcmVmLm1hcCgocikgPT4gY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JdKSlcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcmVmXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5tb3ZlRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXgpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ21vdmVFbGVtZW50JywgW3RhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlQXR0cnMnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKHJlZiwga2V5LCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICByZXN1bHRba2V5XSA9IHZhbHVlXG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKHJlZiwgc3R5bGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgc3R5bGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIChhY3Rpb25zLCBjYikge1xuICByZXR1cm4gY2IgJiYgY2IoKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSB0aGlzLnVwZGF0ZXNcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuXG4gIGlmICghQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgIGFjdGlvbnMgPSBbYWN0aW9uc11cbiAgfVxuXG4gIGlmICh0aGlzLmJhdGNoZWQpIHtcbiAgICB1cGRhdGVzLnB1c2guYXBwbHkodXBkYXRlcywgYWN0aW9ucylcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gaGFuZGxlcihhY3Rpb25zKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgcmV0dXJuIHsgbW9kdWxlOiAnZG9tJywgbWV0aG9kOiBuYW1lLCBhcmdzOiBhcmdzIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L3Zkb20vbGlzdGVuZXIuanMiLCIvLyBidWlsdCBieSBucG0gcnVuIGJ1aWxkOmNvbmZpZ1xuXG5pbXBvcnQgKiBhcyBWYW5pbGxhIGZyb20gJy4uL3ZhbmlsbGEnXG5pbXBvcnQgKiBhcyBXZWV4IGZyb20gJy4uL2RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVmFuaWxsYSxcbiAgV2VleFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvcnVudGltZS9jb25maWcuanMiLCJjb25zdCBjb25maWcgPSB7fVxuXG5jb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChjZmcpIHtcbiAgY29uZmlnLkRvY3VtZW50ID0gY2ZnLkRvY3VtZW50XG4gIGNvbmZpZy5FbGVtZW50ID0gY2ZnLkVsZW1lbnRcbiAgY29uZmlnLkNvbW1lbnQgPSBjZmcuQ29tbWVudFxuICBjb25maWcuc2VuZFRhc2tzID0gY2ZnLnNlbmRUYXNrc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzIChjb21wb25lbnRzKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVzIChtb2R1bGVzKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNZXRob2RzIChhcGlzKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUluc3RhbmNlIChpZCwgb3B0aW9ucywgZGF0YSkge31cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpZCwgY29kZSwgb3B0aW9ucywgZGF0YSkge1xuICBjb25zdCBkb2N1bWVudCA9IG5ldyBjb25maWcuRG9jdW1lbnQoaWQsIG9wdGlvbnMuYnVuZGxlVXJsKVxuICBjb25zdCBjYWxsYmFja3MgPSB7fVxuICBsZXQgbGFzdENhbGxiYWNrSWQgPSAwXG4gIGRvY3VtZW50LmFkZENhbGxiYWNrID0gZnVuYyA9PiB7XG4gICAgbGFzdENhbGxiYWNrSWQrK1xuICAgIGNhbGxiYWNrc1tsYXN0Q2FsbGJhY2tJZF0gPSBmdW5jXG4gICAgcmV0dXJuIGxhc3RDYWxsYmFja0lkXG4gIH1cbiAgZG9jdW1lbnQuaGFuZGxlQ2FsbGJhY2sgPSAoZnVuY0lkLCBkYXRhLCBpZkxhc3QpID0+IHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrc1tmdW5jSWRdXG4gICAgaWYgKGlmTGFzdCkge1xuICAgICAgZGVsZXRlIGNhbGxiYWNrc1tmdW5jSWRdXG4gICAgfVxuICAgIHJldHVybiBjYWxsYmFjayhkYXRhKVxuICB9XG4gIGluc3RhbmNlTWFwW2lkXSA9IGRvY3VtZW50XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBGdW5jdGlvbihcbiAgICAnRG9jdW1lbnQnLFxuICAgICdFbGVtZW50JyxcbiAgICAnQ29tbWVudCcsXG4gICAgJ3NlbmRUYXNrcycsXG4gICAgJ2lkJyxcbiAgICAnb3B0aW9ucycsXG4gICAgJ2RhdGEnLFxuICAgICdkb2N1bWVudCcsXG4gICAgY29kZVxuICApXG4gIHJldHVybiByZXN1bHQoXG4gICAgY29uZmlnLkRvY3VtZW50LFxuICAgIGNvbmZpZy5FbGVtZW50LFxuICAgIGNvbmZpZy5Db21tZW50LFxuICAgIGNvbmZpZy5zZW5kVGFza3MsXG4gICAgaWQsXG4gICAgb3B0aW9ucyxcbiAgICBkYXRhLFxuICAgIGRvY3VtZW50XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hJbnN0YW5jZSAoaWQsIGRhdGEpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95SW5zdGFuY2UgKGlkKSB7XG4gIGRlbGV0ZSBpbnN0YW5jZU1hcFtpZF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3QgKGlkKSB7XG4gIHJldHVybiBpbnN0YW5jZU1hcFtpZF0uYm9keS50b0pTT04oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVRhc2tzIChpZCwgdGFza3MpIHtcbiAgY29uc3QganNIYW5kbGVycyA9IHtcbiAgICBmaXJlRXZlbnQ6IChpZCwgcmVmLCB0eXBlLCBkYXRhLCBkb21DaGFuZ2VzKSA9PiB7XG4gICAgICBjb25zdCBkb2N1bWVudCA9IGluc3RhbmNlTWFwW2lkXVxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRSZWYocmVmKVxuICAgICAgcmV0dXJuIGRvY3VtZW50LmZpcmVFdmVudChlbCwgdHlwZSwgZGF0YSwgZG9tQ2hhbmdlcylcbiAgICB9LFxuXG4gICAgY2FsbGJhY2s6IChpZCwgZnVuY0lkLCBkYXRhLCBpZkxhc3QpID0+IHtcbiAgICAgIGNvbnN0IGRvY3VtZW50ID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgICByZXR1cm4gZG9jdW1lbnQuaGFuZGxlQ2FsbGJhY2soZnVuY0lkLCBkYXRhLCBpZkxhc3QpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZG9jdW1lbnQgPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKGRvY3VtZW50ICYmIEFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGpzSGFuZGxlcnNbdGFzay5tZXRob2RdXG4gICAgICBjb25zdCBhcmdzID0gWy4uLnRhc2suYXJnc11cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoaWQpXG4gICAgICAgIHJlc3VsdHMucHVzaChoYW5kbGVyKC4uLmFyZ3MpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvdmFuaWxsYS9pbmRleC5qcyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBXZWV4IGZyYW1ld29yayBlbnRyeS5cbiAqL1xuXG5leHBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJy4vc3RhdGljL2NyZWF0ZSdcbmV4cG9ydCB7IGluaXQsIHJlZnJlc2hJbnN0YW5jZSwgZGVzdHJveUluc3RhbmNlIH0gZnJvbSAnLi9zdGF0aWMvbGlmZSdcbmV4cG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50cywgcmVnaXN0ZXJNb2R1bGVzLCByZWdpc3Rlck1ldGhvZHMgfSBmcm9tICcuL3N0YXRpYy9yZWdpc3RlcidcbmV4cG9ydCB7IHJlY2VpdmVUYXNrcyB9IGZyb20gJy4vc3RhdGljL2JyaWRnZSdcbmV4cG9ydCB7IGdldFJvb3QgfSBmcm9tICcuL3N0YXRpYy9taXNjJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvZGVmYXVsdC9pbmRleC5qcyIsImltcG9ydCBBcHAgZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcbmltcG9ydCB7IGluaXQgYXMgaW5pdEFwcCB9IGZyb20gJy4uL2FwcC9jdHJsJ1xuaW1wb3J0IHsgcmVzZXRUYXJnZXQgfSBmcm9tICcuLi9jb3JlL2RlcCdcblxuLyoqXG4gKiBDcmVhdGUgYSBXZWV4IGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc10gb3B0aW9uIGBIQVNfTE9HYCBlbmFibGUgcHJpbnQgbG9nXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtkYXRhXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGlkLCBjb2RlLCBvcHRpb25zLCBkYXRhKSB7XG4gIHJlc2V0VGFyZ2V0KClcbiAgbGV0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIGxldCByZXN1bHRcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlID0gbmV3IEFwcChpZCwgb3B0aW9ucylcbiAgICBpbnN0YW5jZU1hcFtpZF0gPSBpbnN0YW5jZVxuICAgIHJlc3VsdCA9IGluaXRBcHAoaW5zdGFuY2UsIGNvZGUsIGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvY3JlYXRlLmpzIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IGluc3RhbmNlIGNvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7IHJlcXVpcmVNb2R1bGUgfSBmcm9tICcuL3JlZ2lzdGVyJ1xuaW1wb3J0IHsgdXBkYXRlQWN0aW9ucywgY2FsbFRhc2tzIH0gZnJvbSAnLi9jdHJsJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2luc3RhbmNlJ1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUucmVxdWlyZU1vZHVsZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiByZXF1aXJlTW9kdWxlKHRoaXMsIG5hbWUpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQXBwLnByb3RvdHlwZS51cGRhdGVBY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICB1cGRhdGVBY3Rpb25zKHRoaXMpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQXBwLnByb3RvdHlwZS5jYWxsVGFza3MgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgY2FsbFRhc2tzKHRoaXMsIHRhc2tzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvYXBwL2luZGV4LmpzIiwibGV0IG5hdGl2ZU1vZHVsZXMgPSB7fVxuXG4vLyBmb3IgdGVzdGluZ1xuXG4vKipcbiAqIGZvciB0ZXN0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbn1cblxuLyoqXG4gKiBmb3IgdGVzdGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNb2R1bGVzICgpIHtcbiAgbmF0aXZlTW9kdWxlcyA9IHt9XG59XG5cbi8vIGZvciBmcmFtZXdvcmtcblxuLyoqXG4gKiBpbml0IG1vZHVsZXMgZm9yIGFuIGFwcCBpbnN0YW5jZVxuICogdGhlIHNlY29uZCBwYXJhbSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGVkIG1ldGhvZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1vZHVsZXMgKG1vZHVsZXMsIGlmUmVwbGFjZSkge1xuICBmb3IgKGNvbnN0IG1vZHVsZU5hbWUgaW4gbW9kdWxlcykge1xuICAgIC8vIGluaXQgYG1vZHVsZXNbbW9kdWxlTmFtZV1bXWBcbiAgICBsZXQgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgICBpZiAoIW1ldGhvZHMpIHtcbiAgICAgIG1ldGhvZHMgPSB7fVxuICAgICAgbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXSA9IG1ldGhvZHNcbiAgICB9XG5cbiAgICAvLyBwdXNoIGVhY2ggbm9uLWV4aXN0ZWQgbmV3IG1ldGhvZFxuICAgIG1vZHVsZXNbbW9kdWxlTmFtZV0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWV0aG9kID0ge1xuICAgICAgICAgIG5hbWU6IG1ldGhvZFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbWV0aG9kc1ttZXRob2QubmFtZV0gfHwgaWZSZXBsYWNlKSB7XG4gICAgICAgIG1ldGhvZHNbbWV0aG9kLm5hbWVdID0gbWV0aG9kXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGluaXQgYXBwIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRNZXRob2RzIChWbSwgYXBpcykge1xuICBjb25zdCBwID0gVm0ucHJvdG90eXBlXG5cbiAgZm9yIChjb25zdCBhcGlOYW1lIGluIGFwaXMpIHtcbiAgICBpZiAoIXAuaGFzT3duUHJvcGVydHkoYXBpTmFtZSkpIHtcbiAgICAgIHBbYXBpTmFtZV0gPSBhcGlzW2FwaU5hbWVdXG4gICAgfVxuICB9XG59XG5cbi8vIGZvciBhcHBcblxuLyoqXG4gKiBnZXQgYSBtb2R1bGUgb2YgbWV0aG9kcyBmb3IgYW4gYXBwIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlTW9kdWxlIChhcHAsIG5hbWUpIHtcbiAgY29uc3QgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbmFtZV1cbiAgY29uc3QgdGFyZ2V0ID0ge31cbiAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIG1ldGhvZHMpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBtZXRob2ROYW1lLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBwcm94eUdldHRlcigpIHtcbiAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiBhcHAuY2FsbFRhc2tzKHtcbiAgICAgICAgICBtb2R1bGU6IG5hbWUsXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2ROYW1lLFxuICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHByb3h5U2V0dGVyKHZhbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBhcHAuY2FsbFRhc2tzKHtcbiAgICAgICAgICAgIG1vZHVsZTogbmFtZSxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kTmFtZSxcbiAgICAgICAgICAgIGFyZ3M6IFt2YWxdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHRhcmdldFxufVxuXG4vKipcbiAqIGdldCBhIGN1c3RvbSBjb21wb25lbnQgb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZUN1c3RvbUNvbXBvbmVudCAoYXBwLCBuYW1lKSB7XG4gIGNvbnN0IHsgY3VzdG9tQ29tcG9uZW50TWFwIH0gPSBhcHBcbiAgcmV0dXJuIGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXVxufVxuXG4vKipcbiAqIHJlZ2lzdGVyIGEgY3VzdG9tIGNvbXBvbmVudCBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUNvbXBvbmVudCAoYXBwLCBuYW1lLCBkZWYpIHtcbiAgY29uc3QgeyBjdXN0b21Db21wb25lbnRNYXAgfSA9IGFwcFxuXG4gIGlmIChjdXN0b21Db21wb25lbnRNYXBbbmFtZV0pIHtcbiAgICBjb25zb2xlLmVycm9yKGBbSlMgRnJhbWV3b3JrXSBkZWZpbmUgYSBjb21wb25lbnQoJHtuYW1lfSkgdGhhdCBhbHJlYWR5IGV4aXN0c2ApXG4gICAgcmV0dXJuXG4gIH1cblxuICBjdXN0b21Db21wb25lbnRNYXBbbmFtZV0gPSBkZWZcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvYXBwL3JlZ2lzdGVyLmpzIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBpbnN0YW5jZSBjb250cm9scyBmcm9tIG5hdGl2ZVxuICpcbiAqIC0gaW5pdCBidW5kbGVcbiAqIC0gZmlyZSBldmVudFxuICogLSBjYWxsYmFja1xuICogLSBkZXN0cm95XG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cbmV4cG9ydCB7IGluaXQgfSBmcm9tICcuL2luaXQnXG5cbmV4cG9ydCB7XG4gIHJlZnJlc2gsXG4gIGRlc3Ryb3ksXG4gIGdldFJvb3RFbGVtZW50LFxuICBmaXJlRXZlbnQsXG4gIGNhbGxiYWNrLFxuICB1cGRhdGVBY3Rpb25zLFxuICBjYWxsVGFza3Ncbn0gZnJvbSAnLi9taXNjJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qcyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cblxuaW1wb3J0IFZtIGZyb20gJy4uLy4uL3ZtJ1xuaW1wb3J0IHsgcmVtb3ZlV2VleFByZWZpeCB9IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQge1xuICBkZWZpbmVGbixcbiAgYm9vdHN0cmFwLFxuICByZWdpc3RlclxufSBmcm9tICcuLi9idW5kbGUnXG5pbXBvcnQgeyB1cGRhdGVBY3Rpb25zIH0gZnJvbSAnLi9taXNjJ1xuXG4vKipcbiAqIEluaXQgYW4gYXBwIGJ5IHJ1biBjb2RlIHdpdGdoIGRhdGFcbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoYXBwLCBjb2RlLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIEludGlhbGl6ZSBhbiBpbnN0YW5jZSB3aXRoOlxcbicsIGRhdGEpXG4gIGxldCByZXN1bHRcblxuICAvLyBwcmVwYXJlIGFwcCBlbnYgbWV0aG9kc1xuICBjb25zdCBidW5kbGVEZWZpbmUgPSAoLi4uYXJncykgPT4gZGVmaW5lRm4oYXBwLCAuLi5hcmdzKVxuICBjb25zdCBidW5kbGVCb290c3RyYXAgPSAobmFtZSwgY29uZmlnLCBfZGF0YSkgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcChhcHAsIG5hbWUsIGNvbmZpZywgX2RhdGEgfHwgZGF0YSlcbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLmNyZWF0ZUZpbmlzaCgpXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gQWZ0ZXIgaW50aWFsaXplZCBhbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgfVxuICBjb25zdCBidW5kbGVWbSA9IFZtXG4gIGNvbnN0IGJ1bmRsZVJlZ2lzdGVyID0gKC4uLmFyZ3MpID0+IHJlZ2lzdGVyKGFwcCwgLi4uYXJncylcbiAgY29uc3QgYnVuZGxlUmVuZGVyID0gKG5hbWUsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKGFwcCwgbmFtZSwge30sIF9kYXRhKVxuICB9XG4gIGNvbnN0IGJ1bmRsZVJlcXVpcmUgPSBuYW1lID0+IF9kYXRhID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAoYXBwLCBuYW1lLCB7fSwgX2RhdGEpXG4gIH1cbiAgY29uc3QgYnVuZGxlRG9jdW1lbnQgPSBhcHAuZG9jXG4gIGNvbnN0IGJ1bmRsZVJlcXVpcmVNb2R1bGUgPSBuYW1lID0+IGFwcC5yZXF1aXJlTW9kdWxlKHJlbW92ZVdlZXhQcmVmaXgobmFtZSkpXG5cbiAgLy8gcHJlcGFyZSBjb2RlXG4gIGxldCBmdW5jdGlvbkJvZHlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgY29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGBmdW5jdGlvbiAoKSB7Li4ufWAgLT4gYHsuLi59YFxuICAgIC8vIG5vdCB2ZXJ5IHN0cmljdFxuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKS5zdWJzdHIoMTIpXG4gIH1cbiAgZWxzZSBpZiAoY29kZSkge1xuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKVxuICB9XG5cbiAgLy8gcnVuIGNvZGUgYW5kIGdldCByZXN1bHRcbiAgY29uc3QgeyBXWEVudmlyb25tZW50IH0gPSBnbG9iYWxcbiAgaWYgKFdYRW52aXJvbm1lbnQgJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSAhPT0gJ1dlYicpIHtcbiAgICAvLyB0aW1lciBBUElzIHBvbHlmaWxsIGluIG5hdGl2ZVxuICAgIGNvbnN0IHRpbWVyID0gYXBwLnJlcXVpcmVNb2R1bGUoJ3RpbWVyJylcbiAgICBjb25zdCB0aW1lckFQSXMgPSB7XG4gICAgICBzZXRUaW1lb3V0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFyZ3NbMF0oLi4uYXJncy5zbGljZSgyKSlcbiAgICAgICAgfVxuICAgICAgICB0aW1lci5zZXRUaW1lb3V0KGhhbmRsZXIsIGFyZ3NbMV0pXG4gICAgICAgIHJldHVybiBhcHAudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBzZXRJbnRlcnZhbDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0SW50ZXJ2YWwoaGFuZGxlciwgYXJnc1sxXSlcbiAgICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIGNsZWFyVGltZW91dDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KG4pXG4gICAgICB9LFxuICAgICAgY2xlYXJJbnRlcnZhbDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJJbnRlcnZhbChuKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ2RlZmluZScsXG4gICAgICAncmVxdWlyZScsXG4gICAgICAnZG9jdW1lbnQnLFxuICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAncmVnaXN0ZXInLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICAgJ19fd2VleF9ib290c3RyYXBfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdfX3dlZXhfZG9jdW1lbnRfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdfX3dlZXhfcmVxdWlyZV9fJyxcbiAgICAgICdfX3dlZXhfdmlld21vZGVsX18nLFxuICAgICAgJ3NldFRpbWVvdXQnLFxuICAgICAgJ3NldEludGVydmFsJyxcbiAgICAgICdjbGVhclRpbWVvdXQnLFxuICAgICAgJ2NsZWFySW50ZXJ2YWwnLFxuICAgICAgZnVuY3Rpb25Cb2R5XG4gICAgKVxuXG4gICAgZm4oXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVSZXF1aXJlLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVSZWdpc3RlcixcbiAgICAgIGJ1bmRsZVJlbmRlcixcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlUmVxdWlyZU1vZHVsZSxcbiAgICAgIGJ1bmRsZVZtLFxuICAgICAgdGltZXJBUElzLnNldFRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuc2V0SW50ZXJ2YWwsXG4gICAgICB0aW1lckFQSXMuY2xlYXJUaW1lb3V0LFxuICAgICAgdGltZXJBUElzLmNsZWFySW50ZXJ2YWwpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9kb2N1bWVudF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9yZXF1aXJlX18nLFxuICAgICAgJ19fd2VleF92aWV3bW9kZWxfXycsXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVSZXF1aXJlTW9kdWxlLFxuICAgICAgYnVuZGxlVm0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanMiLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCBDb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdFN0YXRlXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBidWlsZFxufSBmcm9tICcuL2NvbXBpbGVyJ1xuaW1wb3J0IHtcbiAgc2V0LFxuICBkZWxcbn0gZnJvbSAnLi4vY29yZS9vYnNlcnZlcidcbmltcG9ydCB7XG4gIHdhdGNoXG59IGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0IHtcbiAgaW5pdEV2ZW50cyxcbiAgbWl4aW5FdmVudHNcbn0gZnJvbSAnLi9ldmVudHMnXG5cbi8qKlxuICogVmlld01vZGVsIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICAgIGNvbXBvbmVudCBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50Vm0gICB3aGljaCBjb250YWlucyBfYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RWwgICByb290IGVsZW1lbnQgb3IgZnJhZyBibG9ja1xuICogQHBhcmFtIHtvYmplY3R9IG1lcmdlZERhdGEgZXh0ZXJuYWwgZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzIGV4dGVybmFsIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWbSAoXG4gIHR5cGUsXG4gIG9wdGlvbnMsXG4gIHBhcmVudFZtLFxuICBwYXJlbnRFbCxcbiAgbWVyZ2VkRGF0YSxcbiAgZXh0ZXJuYWxFdmVudHNcbikge1xuICBwYXJlbnRWbSA9IHBhcmVudFZtIHx8IHt9XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudFZtLl9yZWFsUGFyZW50ID8gcGFyZW50Vm0uX3JlYWxQYXJlbnQgOiBwYXJlbnRWbVxuICB0aGlzLl9hcHAgPSBwYXJlbnRWbS5fYXBwIHx8IHt9XG4gIHBhcmVudFZtLl9jaGlsZHJlblZtcyAmJiBwYXJlbnRWbS5fY2hpbGRyZW5WbXMucHVzaCh0aGlzKVxuXG4gIGlmICghb3B0aW9ucyAmJiB0aGlzLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwKSB7XG4gICAgb3B0aW9ucyA9IHRoaXMuX2FwcC5jdXN0b21Db21wb25lbnRNYXBbdHlwZV1cbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge31cblxuICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLl9tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9XG4gIHRoaXMuX2NvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCB7fVxuICB0aGlzLl9jc3MgPSBvcHRpb25zLnN0eWxlIHx8IHt9XG4gIHRoaXMuX2lkcyA9IHt9XG4gIHRoaXMuX3ZtRXZlbnRzID0ge31cbiAgdGhpcy5fY2hpbGRyZW5WbXMgPSBbXVxuICB0aGlzLl90eXBlID0gdHlwZVxuXG4gIC8vIGJpbmQgZXZlbnRzIGFuZCBsaWZlY3ljbGVzXG4gIGluaXRFdmVudHModGhpcywgZXh0ZXJuYWxFdmVudHMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJpbml0XCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazppbml0JylcbiAgdGhpcy5faW5pdGVkID0gdHJ1ZVxuXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIGV4dGVuZCh0aGlzLl9kYXRhLCBtZXJnZWREYXRhKVxuICB9XG4gIGluaXRTdGF0ZSh0aGlzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiY3JlYXRlZFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6Y3JlYXRlZCcpXG4gIHRoaXMuX2NyZWF0ZWQgPSB0cnVlXG5cbiAgLy8gYmFja3dhcmQgb2xkIHJlYWR5IGVudHJ5XG4gIGlmIChvcHRpb25zLm1ldGhvZHMgJiYgb3B0aW9ucy5tZXRob2RzLnJlYWR5KSB7XG4gICAgY29uc29sZS53YXJuKCdcImV4cG9ydHMubWV0aG9kcy5yZWFkeVwiIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3BsZWFzZSB1c2UgXCJleHBvcnRzLmNyZWF0ZWRcIiBpbnN0ZWFkJylcbiAgICBvcHRpb25zLm1ldGhvZHMucmVhZHkuY2FsbCh0aGlzKVxuICB9XG5cbiAgaWYgKCF0aGlzLl9hcHAuZG9jKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBpZiBubyBwYXJlbnRFbGVtZW50IHRoZW4gc3BlY2lmeSB0aGUgZG9jdW1lbnRFbGVtZW50XG4gIHRoaXMuX3BhcmVudEVsID0gcGFyZW50RWwgfHwgdGhpcy5fYXBwLmRvYy5kb2N1bWVudEVsZW1lbnRcbiAgYnVpbGQodGhpcylcbn1cblxubWl4aW5FdmVudHMoVm0ucHJvdG90eXBlKVxuXG4vKipcbiAqIFdhdGNoIGFuIGZ1bmN0aW9uIGFuZCBiaW5kIGFsbCB0aGUgZGF0YSBhcHBlYXJlZCBpbiBpdC4gV2hlbiB0aGUgcmVsYXRlZFxuICogZGF0YSBjaGFuZ2VzLCB0aGUgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2l0aCBuZXcgdmFsdWUgYXMgMXN0IHBhcmFtLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5WbS5wcm90b3R5cGUuJHdhdGNoID0gZnVuY3Rpb24gKGZuLCBjYWxsYmFjaykge1xuICB3YXRjaCh0aGlzLCBmbiwgY2FsbGJhY2spXG59XG5cblZtLnNldCA9IHNldFxuVm0uZGVsZXRlID0gZGVsXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzIiwiZXhwb3J0IHtcbiAgZXh0ZW5kLFxuICBkZWYsXG4gIHJlbW92ZSxcbiAgaGFzT3duLFxuICBiaW5kLFxuICB0b0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdFxufSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMnXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIGNvbnN0IGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMClcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbmV4cG9ydCBjb25zdCBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9XG5cbmxldCBfU2V0XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBTZXQudG9TdHJpbmcoKS5tYXRjaCgvbmF0aXZlIGNvZGUvKSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldFxufVxuZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gIT09IHVuZGVmaW5lZFxuICB9XG4gIF9TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0aGlzLnNldFtrZXldID0gMVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG59XG5cbmV4cG9ydCB7IF9TZXQgfVxuXG4vKipcbiAqIFBvbHlmaWxsIGluIGlPUzcgYnkgbmF0aXZlIGJlY2F1c2UgdGhlIEphdmFTY3JpcHQgcG9seWZpbGwgaGFzIG1lbW9yeSBwcm9ibGVtLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdTZXQgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBpZiAodHlwZW9mIG5hdGl2ZVNldCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbmF0aXZlU2V0LmNyZWF0ZSgpXG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuICByZXR1cm4gbmV3IF9TZXQoKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIHRvVXBwZXIpXG59KVxuXG5mdW5jdGlvbiB0b1VwcGVyIChfLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJydcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSkudG9Mb3dlckNhc2UoKVxufVxuXG4vLyB3ZWV4IG5hbWUgcnVsZXNcblxuY29uc3QgV0VFWF9DT01QT05FTlRfUkVHID0gL15Ad2VleC1jb21wb25lbnRcXC8vXG5jb25zdCBXRUVYX01PRFVMRV9SRUcgPSAvXkB3ZWV4LW1vZHVsZVxcLy9cbmNvbnN0IE5PUk1BTF9NT0RVTEVfUkVHID0gL15cXC57MSwyfVxcLy9cbmNvbnN0IEpTX1NVUkZJWF9SRUcgPSAvXFwuanMkL1xuXG5leHBvcnQgY29uc3QgaXNXZWV4Q29tcG9uZW50ID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9DT01QT05FTlRfUkVHKVxuZXhwb3J0IGNvbnN0IGlzV2VleE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKFdFRVhfTU9EVUxFX1JFRylcbmV4cG9ydCBjb25zdCBpc05vcm1hbE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKE5PUk1BTF9NT0RVTEVfUkVHKVxuZXhwb3J0IGNvbnN0IGlzTnBtTW9kdWxlID0gbmFtZSA9PiAhaXNXZWV4Q29tcG9uZW50KG5hbWUpICYmICFpc1dlZXhNb2R1bGUobmFtZSkgJiYgIWlzTm9ybWFsTW9kdWxlKG5hbWUpXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXZWV4UHJlZml4IChzdHIpIHtcbiAgY29uc3QgcmVzdWx0ID0gc3RyLnJlcGxhY2UoV0VFWF9DT01QT05FTlRfUkVHLCAnJykucmVwbGFjZShXRUVYX01PRFVMRV9SRUcsICcnKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU1N1cmZpeCAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShKU19TVVJGSVhfUkVHLCAnJylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvdXRpbC9pbmRleC5qcyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBXYXRjaGVyIGZyb20gJy4vd2F0Y2hlcidcbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG5pbXBvcnQge1xuICBvYnNlcnZlLFxuICBwcm94eSxcbiAgdW5wcm94eVxufSBmcm9tICcuL29ic2VydmVyJ1xuaW1wb3J0IHtcbiAgaXNQbGFpbk9iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICB2bS5fd2F0Y2hlcnMgPSBbXVxuICBpbml0RGF0YSh2bSlcbiAgaW5pdENvbXB1dGVkKHZtKVxuICBpbml0TWV0aG9kcyh2bSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICBsZXQgZGF0YSA9IHZtLl9kYXRhXG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IHt9XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgcHJveHkodm0sIGtleXNbaV0pXG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdm0pXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSkge1xuICBjb25zdCBjb21wdXRlZCA9IHZtLl9jb21wdXRlZFxuICBpZiAoY29tcHV0ZWQpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICAgIGNvbnN0IHVzZXJEZWYgPSBjb21wdXRlZFtrZXldXG4gICAgICBjb25zdCBkZWYgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRlZi5nZXQgPSBtYWtlQ29tcHV0ZWRHZXR0ZXIodXNlckRlZiwgdm0pXG4gICAgICAgIGRlZi5zZXQgPSBub29wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWYuZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgICAgICA/IHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgICAgICA/IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgICA6IGJpbmQodXNlckRlZi5nZXQsIHZtKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgICBkZWYuc2V0ID0gdXNlckRlZi5zZXRcbiAgICAgICAgICA/IGJpbmQodXNlckRlZi5zZXQsIHZtKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIGRlZilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUNvbXB1dGVkR2V0dGVyIChnZXR0ZXIsIG93bmVyKSB7XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcihvd25lciwgZ2V0dGVyLCBudWxsLCB7XG4gICAgbGF6eTogdHJ1ZVxuICB9KVxuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICB3YXRjaGVyLmV2YWx1YXRlKClcbiAgICB9XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgIHdhdGNoZXIuZGVwZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtKSB7XG4gIGNvbnN0IG1ldGhvZHMgPSB2bS5fbWV0aG9kc1xuICBpZiAobWV0aG9kcykge1xuICAgIGZvciAobGV0IGtleSBpbiBtZXRob2RzKSB7XG4gICAgICB2bVtrZXldID0gbWV0aG9kc1trZXldXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9kZWZhdWx0L2NvcmUvc3RhdGUuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwLCB7IHB1c2hUYXJnZXQsIHBvcFRhcmdldCB9IGZyb20gJy4vZGVwJ1xuLy8gaW1wb3J0IHsgcHVzaFdhdGNoZXIgfSBmcm9tICcuL2JhdGNoZXInXG5pbXBvcnQge1xuICB3YXJuLFxuICByZW1vdmUsXG4gIGV4dGVuZCxcbiAgaXNPYmplY3QsXG4gIHBhcnNlUGF0aCxcbiAgY3JlYXRlTmV3U2V0XG4gIC8vIF9TZXQgYXMgU2V0XG59IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZXhwT3JGblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgICAgICAgICAgLSB7QXJyYXl9IGZpbHRlcnNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB0d29XYXlcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBkZWVwXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdXNlclxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHN5bmNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBsYXp5XG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwcmVQcm9jZXNzXVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcG9zdFByb2Nlc3NdXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXRjaGVyICh2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpIHtcbiAgLy8gbWl4IGluIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBleHRlbmQodGhpcywgb3B0aW9ucylcbiAgfVxuICBjb25zdCBpc0ZuID0gdHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbidcbiAgdGhpcy52bSA9IHZtXG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpXG4gIHRoaXMuZXhwcmVzc2lvbiA9IGV4cE9yRm5cbiAgdGhpcy5jYiA9IGNiXG4gIHRoaXMuaWQgPSArK3VpZCAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZVxuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdXG4gIHRoaXMubmV3RGVwcyA9IFtdXG4gIHRoaXMuZGVwSWRzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG4gIHRoaXMubmV3RGVwSWRzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAoaXNGbikge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGblxuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pXG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnRmFpbGVkIHdhdGNoaW5nIHBhdGg6ICcgKyBleHBPckZuICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpXG4gIC8vIHN0YXRlIGZvciBhdm9pZGluZyBmYWxzZSB0cmlnZ2VycyBmb3IgZGVlcCBhbmQgQXJyYXlcbiAgLy8gd2F0Y2hlcnMgZHVyaW5nIHZtLl9kaWdlc3QoKVxuICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcHVzaFRhcmdldCh0aGlzKVxuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodGhpcy52bSwgdGhpcy52bSlcbiAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICBpZiAodGhpcy5kZWVwKSB7XG4gICAgdHJhdmVyc2UodmFsdWUpXG4gIH1cbiAgcG9wVGFyZ2V0KClcbiAgdGhpcy5jbGVhbnVwRGVwcygpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtEZXB9IGRlcFxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIChkZXApIHtcbiAgY29uc3QgaWQgPSBkZXAuaWRcbiAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKVxuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcClcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGRlcCA9IHRoaXMuZGVwc1tpXVxuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcylcbiAgICB9XG4gIH1cbiAgbGV0IHRtcCA9IHRoaXMuZGVwSWRzXG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHNcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKVxuICB0bXAgPSB0aGlzLmRlcHNcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzXG4gIHRoaXMubmV3RGVwcyA9IHRtcFxuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMFxufVxuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNoYWxsb3dcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoc2hhbGxvdykge1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJ1bigpXG4gIH1cbiAgLy8gfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgLy8gICB0aGlzLnJ1bigpXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gIC8vICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgLy8gICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZFxuICAvLyAgICAgPyBzaGFsbG93XG4gIC8vICAgICAgID8gdGhpcy5zaGFsbG93XG4gIC8vICAgICAgIDogZmFsc2VcbiAgLy8gICAgIDogISFzaGFsbG93XG4gIC8vICAgdGhpcy5xdWV1ZWQgPSB0cnVlXG4gIC8vICAgcHVzaFdhdGNoZXIodGhpcylcbiAgLy8gfVxufVxuXG4vKipcbiAqIEJhdGNoZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBiYXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldCgpXG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkOyBidXQgb25seSBkbyBzbyBpZiB0aGlzIGlzIGFcbiAgICAgIC8vIG5vbi1zaGFsbG93IHVwZGF0ZSAoY2F1c2VkIGJ5IGEgdm0gZGlnZXN0KS5cbiAgICAgICgoaXNPYmplY3QodmFsdWUpIHx8IHRoaXMuZGVlcCkgJiYgIXRoaXMuc2hhbGxvdylcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgIH1cbiAgICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpXG4gIHRoaXMuZGlydHkgPSBmYWxzZVxufVxuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3ViY3JpYmVyIGxpc3QuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZCBvciBpcyBwZXJmb3JtaW5nIGEgdi1mb3JcbiAgICAvLyByZS1yZW5kZXIgKHRoZSB3YXRjaGVyIGxpc3QgaXMgdGhlbiBmaWx0ZXJlZCBieSB2LWZvcikuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkICYmICF0aGlzLnZtLl92Rm9yUmVtb3ZpbmcpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcylcbiAgICB9XG4gICAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy52bSA9IHRoaXMuY2IgPSB0aGlzLnZhbHVlID0gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUmVjcnVzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge1NldH0gc2VlblxuICovXG5cbmNvbnN0IHNlZW5PYmplY3RzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIGxldCBpLCBrZXlzLCBpc0EsIGlzT1xuICBpZiAoIXNlZW4pIHtcbiAgICBzZWVuID0gc2Vlbk9iamVjdHNcbiAgICBzZWVuLmNsZWFyKClcbiAgfVxuICBpc0EgPSBBcnJheS5pc0FycmF5KHZhbClcbiAgaXNPID0gaXNPYmplY3QodmFsKVxuICBpZiAoaXNBIHx8IGlzTykge1xuICAgIGlmICh2YWwuX19vYl9fKSB7XG4gICAgICBjb25zdCBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkXG4gICAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5hZGQoZGVwSWQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0EpIHtcbiAgICAgIGkgPSB2YWwubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxbaV0sIHNlZW4pXG4gICAgfSBlbHNlIGlmIChpc08pIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgICBpID0ga2V5cy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2VlbilcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvY29yZS93YXRjaGVyLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrK1xuICB0aGlzLnN1YnMgPSBbXVxufVxuXG4vLyB0aGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXG4vLyB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZCBhdCBhbnkgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsXG5sZXQgdGFyZ2V0U3RhY2sgPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRhcmdldCAoX3RhcmdldCkge1xuICBpZiAoRGVwLnRhcmdldCkgdGFyZ2V0U3RhY2sucHVzaChEZXAudGFyZ2V0KVxuICBEZXAudGFyZ2V0ID0gX3RhcmdldFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wVGFyZ2V0ICgpIHtcbiAgRGVwLnRhcmdldCA9IHRhcmdldFN0YWNrLnBvcCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFRhcmdldCAoKSB7XG4gIERlcC50YXJnZXQgPSBudWxsXG4gIHRhcmdldFN0YWNrID0gW11cbn1cblxuLyoqXG4gKiBBZGQgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yilcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yilcbn1cblxuLyoqXG4gKiBBZGQgc2VsZiBhcyBhIGRlcGVuZGVuY3kgdG8gdGhlIHRhcmdldCB3YXRjaGVyLlxuICovXG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBpZiAoRGVwLnRhcmdldCkge1xuICAgIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG4gIH1cbn1cblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIGNvbnN0IHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKVxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7IGFycmF5TWV0aG9kcyB9IGZyb20gJy4vYXJyYXknXG5pbXBvcnQge1xuICBkZWYsXG4gIHJlbW92ZSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGhhc1Byb3RvLFxuICBoYXNPd24sXG4gIGlzUmVzZXJ2ZWRcbn0gZnJvbSAnLi4vdXRpbCdcblxuY29uc3QgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaGVzIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmRlcCA9IG5ldyBEZXAoKVxuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCBhdWdtZW50ID0gaGFzUHJvdG9cbiAgICAgID8gcHJvdG9BdWdtZW50XG4gICAgICA6IGNvcHlBdWdtZW50XG4gICAgYXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpXG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKVxuICB9XG59XG5cbi8vIEluc3RhbmNlIG1ldGhvZHNcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggZWFjaCBwcm9wZXJ0eSBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gKG9iaikge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgdGhpcy5jb252ZXJ0KGtleSwgb2JqW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBhIHByb3BlcnR5IGludG8gZ2V0dGVyL3NldHRlciBzbyB3ZSBjYW4gZW1pdFxuICogdGhlIGV2ZW50cyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZC9jaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgZGVmaW5lUmVhY3RpdmUodGhpcy52YWx1ZSwga2V5LCB2YWwpXG59XG5cbi8qKlxuICogQWRkIGFuIG93bmVyIHZtLCBzbyB0aGF0IHdoZW4gJHNldC8kZGVsZXRlIG11dGF0aW9uc1xuICogaGFwcGVuIHdlIGNhbiBub3RpZnkgb3duZXIgdm1zIHRvIHByb3h5IHRoZSBrZXlzIGFuZFxuICogZGlnZXN0IHRoZSB3YXRjaGVycy4gVGhpcyBpcyBvbmx5IGNhbGxlZCB3aGVuIHRoZSBvYmplY3RcbiAqIGlzIG9ic2VydmVkIGFzIGFuIGluc3RhbmNlJ3Mgcm9vdCAkZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuYWRkVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgKHRoaXMudm1zIHx8ICh0aGlzLnZtcyA9IFtdKSkucHVzaCh2bSlcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gb3duZXIgdm0uIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIG9iamVjdCBpc1xuICogc3dhcHBlZCBvdXQgYXMgYW4gaW5zdGFuY2UncyAkZGF0YSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLnJlbW92ZVZtID0gZnVuY3Rpb24gKHZtKSB7XG4gIHJlbW92ZSh0aGlzLnZtcywgdm0pXG59XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcmNcbiAqL1xuXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQgKHRhcmdldCwgc3JjKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gIHRhcmdldC5fX3Byb3RvX18gPSBzcmNcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvXG4gKi9cblxuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7VnVlfSBbdm1dXG4gKiBAcmV0dXJuIHtPYnNlcnZlcnx1bmRlZmluZWR9XG4gKiBAc3RhdGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUgKHZhbHVlLCB2bSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVyblxuICB9XG4gIGxldCBvYlxuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICB9IGVsc2UgaWYgKFxuICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiZcbiAgICBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJlxuICAgICF2YWx1ZS5faXNWdWVcbiAgKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpXG4gIH1cbiAgaWYgKG9iICYmIHZtKSB7XG4gICAgb2IuYWRkVm0odm0pXG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlIChvYmosIGtleSwgdmFsKSB7XG4gIGNvbnN0IGRlcCA9IG5ldyBEZXAoKVxuXG4gIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSlcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXRcbiAgY29uc3Qgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0XG5cbiAgbGV0IGNoaWxkT2IgPSBvYnNlcnZlKHZhbClcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKVxuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yIChsZXQgZSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGUgPSB2YWx1ZVtpXVxuICAgICAgICAgICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbFxuICAgICAgfVxuICAgICAgY2hpbGRPYiA9IG9ic2VydmUobmV3VmFsKVxuICAgICAgZGVwLm5vdGlmeSgpXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQgKG9iaiwga2V5LCB2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmouc3BsaWNlKGtleSwgMSwgdmFsKVxuICB9XG4gIGlmIChoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgIHNldChvYmouX2RhdGEsIGtleSwgdmFsKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuICBpZiAoIW9iKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBvYi5jb252ZXJ0KGtleSwgdmFsKVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIGxldCBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IHZtID0gb2Iudm1zW2ldXG4gICAgICBwcm94eSh2bSwga2V5KVxuICAgICAgLy8gdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwgKG9iaiwga2V5KSB7XG4gIGlmICghaGFzT3duKG9iaiwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSBvYmpba2V5XVxuICBjb25zdCBvYiA9IG9iai5fX29iX19cblxuICBpZiAoIW9iKSB7XG4gICAgaWYgKG9iai5faXNWdWUpIHtcbiAgICAgIGRlbGV0ZSBvYmouX2RhdGFba2V5XVxuICAgICAgLy8gb2JqLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHVucHJveHkodm0sIGtleSlcbiAgICAgIC8vIHZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEtFWV9XT1JEUyA9IFsnJGluZGV4JywgJyR2YWx1ZScsICckZXZlbnQnXVxuZXhwb3J0IGZ1bmN0aW9uIHByb3h5ICh2bSwga2V5KSB7XG4gIGlmIChLRVlfV09SRFMuaW5kZXhPZihrZXkpID4gLTEgfHwgIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgICAgIHJldHVybiB2bS5fZGF0YVtrZXldXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgICAgIHZtLl9kYXRhW2tleV0gPSB2YWxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnByb3h5ICh2bSwga2V5KSB7XG4gIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgZGVsZXRlIHZtW2tleV1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvZGVmYXVsdC9jb3JlL29ic2VydmVyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgZGVmIH0gZnJvbSAnLi4vdXRpbCdcblxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZVxuZXhwb3J0IGNvbnN0IGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90bylcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xuXG47W1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXVxuLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgY29uc3Qgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF1cbiAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCBmdW5jdGlvbiBtdXRhdG9yICgpIHtcbiAgICAvLyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50czpcbiAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zdXJlLXdpdGgtYXJndW1lbnRzXG4gICAgbGV0IGkgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgY29uc3QgYXJncyA9IG5ldyBBcnJheShpKVxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICBjb25zdCBvYiA9IHRoaXMuX19vYl9fXG4gICAgbGV0IGluc2VydGVkXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZClcbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KVxufSlcblxuLyoqXG4gKiBTd2FwIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleCB3aXRoIGEgbmV3IHZhbHVlXG4gKiBhbmQgZW1pdHMgY29ycmVzcG9uZGluZyBldmVudC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHsqfSAtIHJlcGxhY2VkIGVsZW1lbnRcbiAqL1xuXG5kZWYoXG4gIGFycmF5UHJvdG8sXG4gICckc2V0JyxcbiAgZnVuY3Rpb24gJHNldCAoaW5kZXgsIHZhbCkge1xuICAgIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBpbmRleCArIDFcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxLCB2YWwpWzBdXG4gIH1cbilcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gcmVtb3ZlIHRoZSBlbGVtZW50IGF0IGdpdmVuIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5kZWYoXG4gIGFycmF5UHJvdG8sXG4gICckcmVtb3ZlJyxcbiAgZnVuY3Rpb24gJHJlbW92ZSAoaW5kZXgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2YoaW5kZXgpXG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvY29yZS9hcnJheS5qcyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIHRlbXBsYXRlIHBhcnNlciAmIGRhdGEtYmluZGluZyBwcm9jZXNzXG4gKi9cblxuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdERhdGEsXG4gIGluaXRDb21wdXRlZFxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYmluZEVsZW1lbnQsXG4gIHNldElkLFxuICBiaW5kU3ViVm0sXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQsXG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyxcbiAgd2F0Y2hcbn0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQge1xuICBjcmVhdGVCbG9jayxcbiAgY3JlYXRlQm9keSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgYXR0YWNoVGFyZ2V0LFxuICBtb3ZlVGFyZ2V0LFxuICByZW1vdmVUYXJnZXRcbn0gZnJvbSAnLi9kb20taGVscGVyJ1xuXG4vKipcbiAqIGJ1aWxkKClcbiAqICAgY29tcGlsZSh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICBpZiAodHlwZSBpcyBjb250ZW50KSBjcmVhdGUgY29udGVudE5vZGVcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1mb3IpIGZvcmVhY2ggLT4gY3JlYXRlIGNvbnRleHRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0Rm9yLCBwYXJlbnROb2RlKTogZGlmZihsaXN0KSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWlmKSBhc3NlcnRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0SWYsIHBhcmVudE5vZGUpOiB0b2dnbGUoc2hvd24pIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBkeW5hbWljKVxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXREeW5hbWljVHlwZSwgcGFyZW50Tm9kZSk6IHdhdGNoKHR5cGUpIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBjdXN0b20pXG4gKiAgICAgICBhZGRDaGlsZFZtKHZtLCBwYXJlbnRWbSlcbiAqICAgICAgIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBuYXRpdmUpXG4gKiAgICAgICBzZXQoZGlycyk6IHVwZGF0ZShpZC9hdHRyL3N0eWxlL2NsYXNzKSBvbmNoYW5nZVxuICogICAgICAgYXBwZW5kKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkICh2bSkge1xuICBjb25zdCBvcHQgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCB0ZW1wbGF0ZSA9IG9wdC50ZW1wbGF0ZSB8fCB7fVxuXG4gIGlmIChvcHQucmVwbGFjZSkge1xuICAgIGlmICh0ZW1wbGF0ZS5jaGlsZHJlbiAmJiB0ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuWzBdLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZSh2bSwgdGVtcGxhdGUuY2hpbGRyZW4sIHZtLl9wYXJlbnRFbClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY29tcGlsZSh2bSwgdGVtcGxhdGUsIHZtLl9wYXJlbnRFbClcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwicmVhZHlcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB2bS5fcmVhZHkgPSB0cnVlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudHMgYnkgY2hpbGQgb3IgY2hpbGRyZW4gYW5kIGFwcGVuZCB0byBwYXJlbnQgZWxlbWVudHMuXG4gKiBSb290IGVsZW1lbnQgaW5mbyB3b3VsZCBiZSBtZXJnZWQgaWYgaGFzLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlIGFuIGFycmF5XG4gKiBpZiB0aGUgcm9vdCBlbGVtZW50IHdpdGggb3B0aW9ucy5yZXBsYWNlIGhhcyBub3Qgb25seSBvbmUgY2hpbGQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuXG4gIGlmIChhcHAubGFzdFNpZ25hbCA9PT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0YXJnZXQuYXR0ciAmJiB0YXJnZXQuYXR0ci5oYXNPd25Qcm9wZXJ0eSgnc3RhdGljJykpIHtcbiAgICB2bS5fc3RhdGljID0gdHJ1ZVxuICB9XG5cbiAgaWYgKHRhcmdldElzRnJhZ21lbnQodGFyZ2V0KSkge1xuICAgIGNvbXBpbGVGcmFnbWVudCh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIG1ldGEgPSBtZXRhIHx8IHt9XG4gIGlmICh0YXJnZXRJc0NvbnRlbnQodGFyZ2V0KSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJjb250ZW50XCIgYmxvY2sgYnknLCB0YXJnZXQpXG4gICAgdm0uX2NvbnRlbnQgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0YXJnZXROZWVkQ2hlY2tSZXBlYXQodGFyZ2V0LCBtZXRhKSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJyZXBlYXRcIiBsb2dpYyBieScsIHRhcmdldClcbiAgICBpZiAoZGVzdC50eXBlID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFRoZSByb290IGVsZW1lbnQgZG9lc1xcJ3Qgc3VwcG9ydCBgcmVwZWF0YCBkaXJlY3RpdmUhJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb21waWxlUmVwZWF0KHZtLCB0YXJnZXQsIGRlc3QpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGlmICh0YXJnZXROZWVkQ2hlY2tTaG93bih0YXJnZXQsIG1ldGEpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcImlmXCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgaWYgKGRlc3QudHlwZSA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBUaGUgcm9vdCBlbGVtZW50IGRvZXNcXCd0IHN1cHBvcnQgYGlmYCBkaXJlY3RpdmUhJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb21waWxlU2hvd24odm0sIHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgdHlwZUdldHRlciA9IG1ldGEudHlwZSB8fCB0YXJnZXQudHlwZVxuICBpZiAodGFyZ2V0TmVlZENoZWNrVHlwZSh0eXBlR2V0dGVyLCBtZXRhKSkge1xuICAgIGNvbXBpbGVUeXBlKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXJcbiAgY29uc3QgY29tcG9uZW50ID0gdGFyZ2V0SXNDb21wb3NlZCh2bSwgdGFyZ2V0LCB0eXBlKVxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBjb21wb3NlZCBjb21wb25lbnQgYnknLCB0YXJnZXQpXG4gICAgY29tcGlsZUN1c3RvbUNvbXBvbmVudCh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBuYXRpdmUgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICBjb21waWxlTmF0aXZlQ29tcG9uZW50KHZtLCB0YXJnZXQsIGRlc3QsIHR5cGUpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IGlzIGEgZnJhZ21lbnQgKGFuIGFycmF5KS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzRnJhZ21lbnQgKHRhcmdldCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IHR5cGUgaXMgY29udGVudC9zbG90LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0SXNDb250ZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC50eXBlID09PSAnY29udGVudCcgfHwgdGFyZ2V0LnR5cGUgPT09ICdzbG90J1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBsaXN0LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrUmVwZWF0ICh0YXJnZXQsIG1ldGEpIHtcbiAgcmV0dXJuICFtZXRhLmhhc093blByb3BlcnR5KCdyZXBlYXQnKSAmJiB0YXJnZXQucmVwZWF0XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGJvb2xlYW4gdmFsdWUuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXROZWVkQ2hlY2tTaG93biAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgnc2hvd24nKSAmJiB0YXJnZXQuc2hvd25cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgZHluYW1pYyB0eXBlLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ3xmdW5jdGlvbn0gdHlwZUdldHRlclxuICogQHBhcmFtICB7b2JqZWN0fSAgICAgICAgICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXROZWVkQ2hlY2tUeXBlICh0eXBlR2V0dGVyLCBtZXRhKSB7XG4gIHJldHVybiAodHlwZW9mIHR5cGVHZXR0ZXIgPT09ICdmdW5jdGlvbicpICYmICFtZXRhLmhhc093blByb3BlcnR5KCd0eXBlJylcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGtpbmQgb2YgY29tcG9uZW50IGlzIGNvbXBvc2VkLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29tcG9zZWQgKHZtLCB0YXJnZXQsIHR5cGUpIHtcbiAgbGV0IGNvbXBvbmVudFxuICBpZiAodm0uX2FwcCAmJiB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcCkge1xuICAgIGNvbXBvbmVudCA9IHZtLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwW3R5cGVdXG4gIH1cbiAgaWYgKHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnQgPSB2bS5fb3B0aW9ucy5jb21wb25lbnRzW3R5cGVdXG4gIH1cbiAgaWYgKHRhcmdldC5jb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQgPSBjb21wb25lbnQgfHwge31cbiAgfVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cbi8qKlxuICogQ29tcGlsZSBhIGxpc3Qgb2YgdGFyZ2V0cy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUZyYWdtZW50ICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICB0YXJnZXQuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjb21waWxlKHZtLCBjaGlsZCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICB9KVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCByZXBlYXQgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVSZXBlYXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgY29uc3QgcmVwZWF0ID0gdGFyZ2V0LnJlcGVhdFxuICBjb25zdCBvbGRTdHlsZSA9IHR5cGVvZiByZXBlYXQgPT09ICdmdW5jdGlvbidcbiAgbGV0IGdldHRlciA9IHJlcGVhdC5nZXR0ZXIgfHwgcmVwZWF0LmV4cHJlc3Npb24gfHwgcmVwZWF0XG4gIGlmICh0eXBlb2YgZ2V0dGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgZ2V0dGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfVxuICB9XG4gIGNvbnN0IGtleSA9IHJlcGVhdC5rZXkgfHwgJyRpbmRleCdcbiAgY29uc3QgdmFsdWUgPSByZXBlYXQudmFsdWUgfHwgJyR2YWx1ZSdcbiAgY29uc3QgdHJhY2tCeSA9IHJlcGVhdC50cmFja0J5IHx8IHRhcmdldC50cmFja0J5IHx8XG4gICAgKHRhcmdldC5hdHRyICYmIHRhcmdldC5hdHRyLnRyYWNrQnkpXG5cbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gIGZyYWdCbG9jay5jaGlsZHJlbiA9IFtdXG4gIGZyYWdCbG9jay5kYXRhID0gW11cbiAgZnJhZ0Jsb2NrLnZtcyA9IFtdXG5cbiAgYmluZFJlcGVhdCh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIHsgZ2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZSB9KVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCBpZiBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVTaG93biAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBuZXdNZXRhID0geyBzaG93bjogdHJ1ZSB9XG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuXG4gIGlmIChkZXN0LmVsZW1lbnQgJiYgZGVzdC5jaGlsZHJlbikge1xuICAgIGRlc3QuY2hpbGRyZW4ucHVzaChmcmFnQmxvY2spXG4gIH1cblxuICBpZiAobWV0YS5yZXBlYXQpIHtcbiAgICBuZXdNZXRhLnJlcGVhdCA9IG1ldGEucmVwZWF0XG4gIH1cblxuICBiaW5kU2hvd24odm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCBkeW5hbWljIGNvbXBvbmVudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgZGVzdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gdHlwZUdldHRlclxuICovXG5mdW5jdGlvbiBjb21waWxlVHlwZSAodm0sIHRhcmdldCwgZGVzdCwgdHlwZUdldHRlciwgbWV0YSkge1xuICBjb25zdCB0eXBlID0gdHlwZUdldHRlci5jYWxsKHZtKVxuICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZSB9LCBtZXRhKVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgd2F0Y2godm0sIHR5cGVHZXR0ZXIsICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld01ldGEgPSBleHRlbmQoeyB0eXBlOiB2YWx1ZSB9LCBtZXRhKVxuICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxuICB9KVxuXG4gIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBjb21wb3NlZCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVDdXN0b21Db21wb25lbnQgKHZtLCBjb21wb25lbnQsIHRhcmdldCwgZGVzdCwgdHlwZSwgbWV0YSkge1xuICBjb25zdCBDdG9yID0gdm0uY29uc3RydWN0b3JcbiAgY29uc3Qgc3ViVm0gPSBuZXcgQ3Rvcih0eXBlLCBjb21wb25lbnQsIHZtLCBkZXN0LCB1bmRlZmluZWQsIHtcbiAgICAnaG9vazppbml0JzogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHZtLl9zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5fc3RhdGljID0gdm0uX3N0YXRpY1xuICAgICAgfVxuICAgICAgc2V0SWQodm0sIG51bGwsIHRhcmdldC5pZCwgdGhpcylcbiAgICAgIC8vIGJpbmQgdGVtcGxhdGUgZWFybGllciBiZWNhdXNlIG9mIGxpZmVjeWNsZSBpc3N1ZXNcbiAgICAgIHRoaXMuX2V4dGVybmFsQmluZGluZyA9IHtcbiAgICAgICAgcGFyZW50OiB2bSxcbiAgICAgICAgdGVtcGxhdGU6IHRhcmdldFxuICAgICAgfVxuICAgIH0sXG4gICAgJ2hvb2s6Y3JlYXRlZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGJpbmRTdWJWbSh2bSwgdGhpcywgdGFyZ2V0LCBtZXRhLnJlcGVhdClcbiAgICB9LFxuICAgICdob29rOnJlYWR5JzogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpIHtcbiAgICAgICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0YXJnZXQsIHRoaXMuX2NvbnRlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkKHZtLCBzdWJWbSwgdGFyZ2V0LCBkZXN0KVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGVsZW1lbnQgZnJvbSB0ZW1wbGF0ZSBhbmQgYXR0YWNoIHRvIHRoZSBkZXN0IGlmIG5lZWRlZC5cbiAqIFRoZSB0aW1lIHRvIGF0dGFjaCBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIG1vZGUgc3RhdHVzIGlzIG5vZGUgb3IgdHJlZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlTmF0aXZlQ29tcG9uZW50ICh2bSwgdGVtcGxhdGUsIGRlc3QsIHR5cGUpIHtcbiAgYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zKHRlbXBsYXRlKVxuXG4gIGxldCBlbGVtZW50XG4gIGlmIChkZXN0LnJlZiA9PT0gJ19kb2N1bWVudEVsZW1lbnQnKSB7XG4gICAgLy8gaWYgaXRzIHBhcmVudCBpcyBkb2N1bWVudEVsZW1lbnQgdGhlbiBpdCdzIGEgYm9keVxuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gY3JlYXRlIGJvZHkgZm9yICR7dHlwZX1gKVxuICAgIGVsZW1lbnQgPSBjcmVhdGVCb2R5KHZtLCB0eXBlKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gY3JlYXRlIGVsZW1lbnQgZm9yICR7dHlwZX1gKVxuICAgIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHZtLCB0eXBlKVxuICB9XG5cbiAgaWYgKCF2bS5fcm9vdEVsKSB7XG4gICAgdm0uX3Jvb3RFbCA9IGVsZW1lbnRcbiAgICAvLyBiaW5kIGV2ZW50IGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgY29uc3QgYmluZGluZyA9IHZtLl9leHRlcm5hbEJpbmRpbmcgfHwge31cbiAgICBjb25zdCB0YXJnZXQgPSBiaW5kaW5nLnRlbXBsYXRlXG4gICAgY29uc3QgcGFyZW50Vm0gPSBiaW5kaW5nLnBhcmVudFxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmV2ZW50cyAmJiBwYXJlbnRWbSAmJiBlbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IHR5cGUgaW4gdGFyZ2V0LmV2ZW50cykge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gcGFyZW50Vm1bdGFyZ2V0LmV2ZW50c1t0eXBlXV1cbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50KHR5cGUsIGJpbmQoaGFuZGxlciwgcGFyZW50Vm0pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmluZEVsZW1lbnQodm0sIGVsZW1lbnQsIHRlbXBsYXRlKVxuXG4gIGlmICh0ZW1wbGF0ZS5hdHRyICYmIHRlbXBsYXRlLmF0dHIuYXBwZW5kKSB7IC8vIGJhY2t3YXJkLCBhcHBlbmQgcHJvcCBpbiBhdHRyXG4gICAgdGVtcGxhdGUuYXBwZW5kID0gdGVtcGxhdGUuYXR0ci5hcHBlbmRcbiAgfVxuXG4gIGlmICh0ZW1wbGF0ZS5hcHBlbmQpIHsgLy8gZ2l2ZSB0aGUgYXBwZW5kIGF0dHJpYnV0ZSBmb3IgaW9zIGFkYXB0YXRpb25cbiAgICBlbGVtZW50LmF0dHIgPSBlbGVtZW50LmF0dHIgfHwge31cbiAgICBlbGVtZW50LmF0dHIuYXBwZW5kID0gdGVtcGxhdGUuYXBwZW5kXG4gIH1cblxuICBjb25zdCB0cmVlTW9kZSA9IHRlbXBsYXRlLmFwcGVuZCA9PT0gJ3RyZWUnXG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cbiAgaWYgKGFwcC5sYXN0U2lnbmFsICE9PSAtMSAmJiAhdHJlZU1vZGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGFwcGVuZCBzaW5nbGUgbm9kZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEpIHtcbiAgICBjb21waWxlQ2hpbGRyZW4odm0sIHRlbXBsYXRlLCBlbGVtZW50KVxuICB9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgdHJlZU1vZGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGFwcGVuZCB3aG9sZSB0cmVlIGZvcicsIGVsZW1lbnQpXG4gICAgYXBwLmxhc3RTaWduYWwgPSBhdHRhY2hUYXJnZXQodm0sIGVsZW1lbnQsIGRlc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgYWxsIGNoaWxkcmVuIHRvIGEgY2VydGFpbiBwYXJlbnQgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVDaGlsZHJlbiAodm0sIHRlbXBsYXRlLCBkZXN0KSB7XG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cbiAgY29uc3QgY2hpbGRyZW4gPSB0ZW1wbGF0ZS5jaGlsZHJlblxuICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgY2hpbGRyZW4uZXZlcnkoKGNoaWxkKSA9PiB7XG4gICAgICBjb21waWxlKHZtLCBjaGlsZCwgZGVzdClcbiAgICAgIHJldHVybiBhcHAubGFzdFNpZ25hbCAhPT0gLTFcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGxpc3QgdXBkYXRlIGFuZCByZWZyZXNoIHRoZSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcmFnQmxvY2sge3ZtcywgZGF0YSwgY2hpbGRyZW59XG4gKiBAcGFyYW0ge29iamVjdH0gaW5mbyAgICAgIHtnZXR0ZXIsIGtleSwgdmFsdWUsIHRyYWNrQnksIG9sZFN0eWxlfVxuICovXG5mdW5jdGlvbiBiaW5kUmVwZWF0ICh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIGluZm8pIHtcbiAgY29uc3Qgdm1zID0gZnJhZ0Jsb2NrLnZtc1xuICBjb25zdCBjaGlsZHJlbiA9IGZyYWdCbG9jay5jaGlsZHJlblxuICBjb25zdCB7IGdldHRlciwgdHJhY2tCeSwgb2xkU3R5bGUgfSA9IGluZm9cbiAgY29uc3Qga2V5TmFtZSA9IGluZm8ua2V5XG4gIGNvbnN0IHZhbHVlTmFtZSA9IGluZm8udmFsdWVcblxuICBmdW5jdGlvbiBjb21waWxlSXRlbSAoaXRlbSwgaW5kZXgsIGNvbnRleHQpIHtcbiAgICBsZXQgbWVyZ2VkRGF0YVxuICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgbWVyZ2VkRGF0YSA9IGl0ZW1cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgaWYgKCFtZXJnZWREYXRhLmhhc093blByb3BlcnR5KCdJTkRFWCcpKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lcmdlZERhdGEsICdJTkRFWCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gXCJJTkRFWFwiIGluIHJlcGVhdCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAgICAgICAncGxlYXNlIHVzZSBcIiRpbmRleFwiIGluc3RlYWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIEVhY2ggbGlzdCBpdGVtIG11c3QgYmUgYW4gb2JqZWN0IGluIG9sZC1zdHlsZSByZXBlYXQsICdcbiAgICAgICAgICArICdwbGVhc2UgdXNlIGByZXBlYXQ9e3t2IGluIGxpc3R9fWAgaW5zdGVhZC4nKVxuICAgICAgICBtZXJnZWREYXRhID0ge31cbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtZXJnZWREYXRhID0ge31cbiAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgbWVyZ2VkRGF0YVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgIH1cbiAgICBjb25zdCBuZXdDb250ZXh0ID0gbWVyZ2VDb250ZXh0KGNvbnRleHQsIG1lcmdlZERhdGEpXG4gICAgdm1zLnB1c2gobmV3Q29udGV4dClcbiAgICBjb21waWxlKG5ld0NvbnRleHQsIHRhcmdldCwgZnJhZ0Jsb2NrLCB7IHJlcGVhdDogaXRlbSB9KVxuICB9XG5cbiAgY29uc3QgbGlzdCA9IHdhdGNoQmxvY2sodm0sIGZyYWdCbG9jaywgZ2V0dGVyLCAncmVwZWF0JyxcbiAgICAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gdGhlIFwicmVwZWF0XCIgaXRlbSBoYXMgY2hhbmdlZCcsIGRhdGEpXG4gICAgICBpZiAoIWZyYWdCbG9jayB8fCAhZGF0YSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBjaGlsZHJlbi5zbGljZSgpXG4gICAgICBjb25zdCBvbGRWbXMgPSB2bXMuc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkRGF0YSA9IGZyYWdCbG9jay5kYXRhLnNsaWNlKClcbiAgICAgIC8vIDEuIGNvbGxlY3QgYWxsIG5ldyByZWZzIHRyYWNrIGJ5XG4gICAgICBjb25zdCB0cmFja01hcCA9IHt9XG4gICAgICBjb25zdCByZXVzZWRNYXAgPSB7fVxuICAgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IChvbGRTdHlsZSA/IGl0ZW1ba2V5TmFtZV0gOiBpbmRleClcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChrZXkgPT0gbnVsbCB8fCBrZXkgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdHJhY2tNYXBba2V5XSA9IGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDIuIHJlbW92ZSB1bnVzZWQgZWxlbWVudCBmb3JlYWNoIG9sZCBpdGVtXG4gICAgICBjb25zdCByZXVzZWRMaXN0ID0gW11cbiAgICAgIG9sZERhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGlmICh0cmFja01hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmV1c2VkTWFwW2tleV0gPSB7XG4gICAgICAgICAgICBpdGVtLCBpbmRleCwga2V5LFxuICAgICAgICAgICAgdGFyZ2V0OiBvbGRDaGlsZHJlbltpbmRleF0sXG4gICAgICAgICAgICB2bTogb2xkVm1zW2luZGV4XVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXVzZWRMaXN0LnB1c2goaXRlbSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZW1vdmVUYXJnZXQodm0sIG9sZENoaWxkcmVuW2luZGV4XSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gMy4gY3JlYXRlIG5ldyBlbGVtZW50IGZvcmVhY2ggbmV3IGl0ZW1cbiAgICAgIGNoaWxkcmVuLmxlbmd0aCA9IDBcbiAgICAgIHZtcy5sZW5ndGggPSAwXG4gICAgICBmcmFnQmxvY2suZGF0YSA9IGRhdGEuc2xpY2UoKVxuICAgICAgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmsgPSBmcmFnQmxvY2suc3RhcnRcblxuICAgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IChvbGRTdHlsZSA/IGl0ZW1ba2V5TmFtZV0gOiBpbmRleClcbiAgICAgICAgY29uc3QgcmV1c2VkID0gcmV1c2VkTWFwW2tleV1cbiAgICAgICAgaWYgKHJldXNlZCkge1xuICAgICAgICAgIGlmIChyZXVzZWQuaXRlbSA9PT0gcmV1c2VkTGlzdFswXSkge1xuICAgICAgICAgICAgcmV1c2VkTGlzdC5zaGlmdCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV1c2VkTGlzdC4kcmVtb3ZlKHJldXNlZC5pdGVtKVxuICAgICAgICAgICAgbW92ZVRhcmdldCh2bSwgcmV1c2VkLnRhcmdldCwgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmssIHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNoaWxkcmVuLnB1c2gocmV1c2VkLnRhcmdldClcbiAgICAgICAgICB2bXMucHVzaChyZXVzZWQudm0pXG4gICAgICAgICAgaWYgKG9sZFN0eWxlKSB7XG4gICAgICAgICAgICByZXVzZWQudm0gPSBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV1c2VkLnZtW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldXNlZC52bVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgICAgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmsgPSByZXVzZWQudGFyZ2V0XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29tcGlsZUl0ZW0oaXRlbSwgaW5kZXgsIHZtKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBkZWxldGUgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmtcbiAgICB9XG4gIClcblxuICBmcmFnQmxvY2suZGF0YSA9IGxpc3Quc2xpY2UoMClcbiAgbGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB2bSlcbiAgfSlcbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgZGlzcGxheSB1cGRhdGUgYW5kIGFkZC9yZW1vdmUgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gYmluZFNob3duICh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpIHtcbiAgY29uc3QgZGlzcGxheSA9IHdhdGNoQmxvY2sodm0sIGZyYWdCbG9jaywgdGFyZ2V0LnNob3duLCAnc2hvd24nLFxuICAgIChkaXNwbGF5KSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSB0aGUgXCJpZlwiIGl0ZW0gd2FzIGNoYW5nZWQnLCBkaXNwbGF5KVxuXG4gICAgICBpZiAoIWZyYWdCbG9jayB8fCAhIWZyYWdCbG9jay5kaXNwbGF5ID09PSAhIWRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmcmFnQmxvY2suZGlzcGxheSA9ICEhZGlzcGxheVxuICAgICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlVGFyZ2V0KHZtLCBmcmFnQmxvY2ssIHRydWUpXG4gICAgICB9XG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgaWYgKGRpc3BsYXkpIHtcbiAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIGNhbGMgdmFsdWUgY2hhbmdlcyBhbmQgYXBwZW5kIGNlcnRhaW4gdHlwZSBhY3Rpb24gdG8gZGlmZmVyLlxuICogSXQgaXMgdXNlZCBmb3IgaWYgb3IgcmVwZWF0IGRhdGEtYmluZGluZyBnZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgIGZyYWdCbG9ja1xuICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGNcbiAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICogQHJldHVybiB7YW55fSAgICAgIGluaXQgdmFsdWUgb2YgY2FsY1xuICovXG5mdW5jdGlvbiB3YXRjaEJsb2NrICh2bSwgZnJhZ0Jsb2NrLCBjYWxjLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGRpZmZlciA9IHZtICYmIHZtLl9hcHAgJiYgdm0uX2FwcC5kaWZmZXJcbiAgY29uc3QgY29uZmlnID0ge31cbiAgY29uc3QgZGVwdGggPSAoZnJhZ0Jsb2NrLmVsZW1lbnQuZGVwdGggfHwgMCkgKyAxXG5cbiAgcmV0dXJuIHdhdGNoKHZtLCBjYWxjLCAodmFsdWUpID0+IHtcbiAgICBjb25maWcubGF0ZXN0VmFsdWUgPSB2YWx1ZVxuICAgIGlmIChkaWZmZXIgJiYgIWNvbmZpZy5yZWNvcmRlZCkge1xuICAgICAgZGlmZmVyLmFwcGVuZCh0eXBlLCBkZXB0aCwgZnJhZ0Jsb2NrLmJsb2NrSWQsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGF0ZXN0VmFsdWUgPSBjb25maWcubGF0ZXN0VmFsdWVcbiAgICAgICAgaGFuZGxlcihsYXRlc3RWYWx1ZSlcbiAgICAgICAgY29uZmlnLnJlY29yZGVkID0gZmFsc2VcbiAgICAgICAgY29uZmlnLmxhdGVzdFZhbHVlID0gdW5kZWZpbmVkXG4gICAgICB9KVxuICAgIH1cbiAgICBjb25maWcucmVjb3JkZWQgPSB0cnVlXG4gIH0pXG59XG5cbi8qKlxuICogQ2xvbmUgYSBjb250ZXh0IGFuZCBtZXJnZSBjZXJ0YWluIGRhdGEuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBtZXJnZWREYXRhXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1lcmdlQ29udGV4dCAoY29udGV4dCwgbWVyZ2VkRGF0YSkge1xuICBjb25zdCBuZXdDb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShjb250ZXh0KVxuICBuZXdDb250ZXh0Ll9kYXRhID0gbWVyZ2VkRGF0YVxuICBpbml0RGF0YShuZXdDb250ZXh0KVxuICBpbml0Q29tcHV0ZWQobmV3Q29udGV4dClcbiAgbmV3Q29udGV4dC5fcmVhbFBhcmVudCA9IGNvbnRleHRcbiAgaWYgKGNvbnRleHQuX3N0YXRpYykge1xuICAgIG5ld0NvbnRleHQuX3N0YXRpYyA9IGNvbnRleHQuX3N0YXRpY1xuICB9XG4gIHJldHVybiBuZXdDb250ZXh0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9kZWZhdWx0L3ZtL2NvbXBpbGVyLmpzIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBEaXJlY3RpdmUgUGFyc2VyXG4gKi9cblxuaW1wb3J0IHsgYmluZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG5pbXBvcnQgV2F0Y2hlciBmcm9tICcuLi9jb3JlL3dhdGNoZXInXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IHBhcnNlUGF0aCB9IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IHsgbmF0aXZlQ29tcG9uZW50TWFwIH0gPSBjb25maWdcblxuY29uc3QgU0VUVEVSUyA9IHtcbiAgYXR0cjogJ3NldEF0dHInLFxuICBzdHlsZTogJ3NldFN0eWxlJyxcbiAgZXZlbnQ6ICdhZGRFdmVudCdcbn1cblxuLyoqXG4gKiBhcHBseSB0aGUgbmF0aXZlIGNvbXBvbmVudCdzIG9wdGlvbnMoc3BlY2lmaWVkIGJ5IHRlbXBsYXRlLnR5cGUpXG4gKiB0byB0aGUgdGVtcGxhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyAodGVtcGxhdGUpIHtcbiAgY29uc3QgeyB0eXBlIH0gPSB0ZW1wbGF0ZVxuICBjb25zdCBvcHRpb25zID0gbmF0aXZlQ29tcG9uZW50TWFwW3R5cGVdXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0ZW1wbGF0ZVtrZXldID09IG51bGwpIHtcbiAgICAgICAgdGVtcGxhdGVba2V5XSA9IG9wdGlvbnNba2V5XVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwb2YodGVtcGxhdGVba2V5XSkgPT09ICdvYmplY3QnICYmXG4gICAgICAgIHR5cG9mKG9wdGlvbnNba2V5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3Via2V5IGluIG9wdGlvbnNba2V5XSkge1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZVtrZXldW3N1YmtleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcGxhdGVba2V5XVtzdWJrZXldID0gb3B0aW9uc1trZXldW3N1YmtleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBpZCwgYXR0ciwgY2xhc3NuYW1lcywgc3R5bGUsIGV2ZW50cyB0byBhbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kRWxlbWVudCAodm0sIGVsLCB0ZW1wbGF0ZSkge1xuICBzZXRJZCh2bSwgZWwsIHRlbXBsYXRlLmlkLCB2bSlcbiAgc2V0QXR0cih2bSwgZWwsIHRlbXBsYXRlLmF0dHIpXG4gIHNldENsYXNzKHZtLCBlbCwgdGVtcGxhdGUuY2xhc3NMaXN0KVxuICBzZXRTdHlsZSh2bSwgZWwsIHRlbXBsYXRlLnN0eWxlKVxuICBiaW5kRXZlbnRzKHZtLCBlbCwgdGVtcGxhdGUuZXZlbnRzKVxufVxuXG4vKipcbiAqIGJpbmQgYWxsIHByb3BzIHRvIHN1YiB2bSBhbmQgYmluZCBhbGwgc3R5bGUsIGV2ZW50cyB0byB0aGUgcm9vdCBlbGVtZW50XG4gKiBvZiB0aGUgc3ViIHZtIGlmIGl0IGRvZXNuJ3QgaGF2ZSBhIHJlcGxhY2VkIG11bHRpLW5vZGUgZnJhZ21lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdWJWbSAodm0sIHN1YlZtLCB0ZW1wbGF0ZSwgcmVwZWF0SXRlbSkge1xuICBzdWJWbSA9IHN1YlZtIHx8IHt9XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUgfHwge31cblxuICBjb25zdCBvcHRpb25zID0gc3ViVm0uX29wdGlvbnMgfHwge31cblxuICAvLyBiaW5kIHByb3BzXG4gIGxldCBwcm9wcyA9IG9wdGlvbnMucHJvcHNcblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBwcm9wcyA9IHByb3BzLnJlZHVjZSgocmVzdWx0LCB2YWx1ZSkgPT4ge1xuICAgICAgcmVzdWx0W3ZhbHVlXSA9IHRydWVcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LCB7fSlcbiAgfVxuXG4gIG1lcmdlUHJvcHMocmVwZWF0SXRlbSwgcHJvcHMsIHZtLCBzdWJWbSlcbiAgbWVyZ2VQcm9wcyh0ZW1wbGF0ZS5hdHRyLCBwcm9wcywgdm0sIHN1YlZtKVxufVxuXG4vKipcbiAqIG1lcmdlIGNsYXNzIGFuZCBzdHlsZXMgZnJvbSB2bSB0byBzdWIgdm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkICh2bSwgc3ViVm0sIHRlbXBsYXRlLCB0YXJnZXQgPSB7fSkge1xuICBtZXJnZUNsYXNzU3R5bGUodGVtcGxhdGUuY2xhc3NMaXN0LCB2bSwgc3ViVm0pXG4gIG1lcmdlU3R5bGUodGVtcGxhdGUuc3R5bGUsIHZtLCBzdWJWbSlcblxuICAvLyBiaW5kIHN1YlZtIHRvIHRoZSB0YXJnZXQgZWxlbWVudFxuICBpZiAodGFyZ2V0LmNoaWxkcmVuKSB7XG4gICAgdGFyZ2V0LmNoaWxkcmVuW3RhcmdldC5jaGlsZHJlbi5sZW5ndGggLSAxXS5fdm0gPSBzdWJWbVxuICB9XG4gIGVsc2Uge1xuICAgIHRhcmdldC5fdm0gPSBzdWJWbVxuICB9XG59XG5cbi8qKlxuICogQmluZCBwcm9wcyBmcm9tIHZtIHRvIHN1YiB2bSBhbmQgd2F0Y2ggdGhlaXIgdXBkYXRlcy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VQcm9wcyAodGFyZ2V0LCBwcm9wcywgdm0sIHN1YlZtKSB7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgaWYgKCFwcm9wcyB8fCBwcm9wc1trZXldKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gd2F0Y2godm0sIHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHN1YlZtW2tleV0gPSB2XG4gICAgICAgIH0pXG4gICAgICAgIHN1YlZtW2tleV0gPSByZXR1cm5WYWx1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN1YlZtW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJpbmQgc3R5bGUgZnJvbSB2bSB0byBzdWIgdm0gYW5kIHdhdGNoIHRoZWlyIHVwZGF0ZXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlU3R5bGUgKHRhcmdldCwgdm0sIHN1YlZtKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgdilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCByZXR1cm5WYWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc3ViVm0uX3Jvb3RFbCkge1xuICAgICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQmluZCBjbGFzcyAmIHN0eWxlIGZyb20gdm0gdG8gc3ViIHZtIGFuZCB3YXRjaCB0aGVpciB1cGRhdGVzLlxuICovXG5mdW5jdGlvbiBtZXJnZUNsYXNzU3R5bGUgKHRhcmdldCwgdm0sIHN1YlZtKSB7XG4gIGNvbnN0IGNzcyA9IHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLnN0eWxlIHx8IHt9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghc3ViVm0uX3Jvb3RFbCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gJ0BvcmlnaW5hbFJvb3RFbCdcbiAgY3NzW2NsYXNzTmFtZV0gPSBzdWJWbS5fcm9vdEVsLmNsYXNzU3R5bGVcblxuICBmdW5jdGlvbiBhZGRDbGFzc05hbWUgKGxpc3QsIG5hbWUpIHtcbiAgICBpZiAodHlwb2YobGlzdCkgPT09ICdhcnJheScpIHtcbiAgICAgIGxpc3QudW5zaGlmdChuYW1lKVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgdGFyZ2V0LCB2ID0+IHtcbiAgICAgIGFkZENsYXNzTmFtZSh2LCBjbGFzc05hbWUpXG4gICAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdilcbiAgICB9KVxuICAgIGFkZENsYXNzTmFtZSh2YWx1ZSwgY2xhc3NOYW1lKVxuICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB2YWx1ZSlcbiAgfVxuICBlbHNlIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgIGFkZENsYXNzTmFtZSh0YXJnZXQsIGNsYXNzTmFtZSlcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogYmluZCBpZCB0byBhbiBlbGVtZW50XG4gKiBlYWNoIGlkIGlzIHVuaXF1ZSBpbiBhIHdob2xlIHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRJZCAodm0sIGVsLCBpZCwgdGFyZ2V0KSB7XG4gIGNvbnN0IG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtYXAsIHtcbiAgICB2bToge1xuICAgICAgdmFsdWU6IHRhcmdldCxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9LFxuICAgIGVsOiB7XG4gICAgICBnZXQ6ICgpID0+IGVsIHx8IHRhcmdldC5fcm9vdEVsLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH1cbiAgfSlcblxuICBpZiAodHlwZW9mIGlkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IGlkXG4gICAgaWQgPSBoYW5kbGVyLmNhbGwodm0pXG4gICAgaWYgKGlkKSB7XG4gICAgICB2bS5faWRzW2lkXSA9IG1hcFxuICAgIH1cbiAgICB3YXRjaCh2bSwgaGFuZGxlciwgKG5ld0lkKSA9PiB7XG4gICAgICBpZiAobmV3SWQpIHtcbiAgICAgICAgdm0uX2lkc1tuZXdJZF0gPSBtYXBcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGVsc2UgaWYgKGlkICYmIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcbiAgICB2bS5faWRzW2lkXSA9IG1hcFxuICB9XG59XG5cbi8qKlxuICogYmluZCBhdHRyIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0QXR0ciAodm0sIGVsLCBhdHRyKSB7XG4gIGJpbmREaXIodm0sIGVsLCAnYXR0cicsIGF0dHIpXG59XG5cbmZ1bmN0aW9uIHNldENsYXNzU3R5bGUgKGVsLCBjc3MsIGNsYXNzTGlzdCkge1xuICBjb25zdCBjbGFzc1N0eWxlID0ge31cbiAgY29uc3QgbGVuZ3RoID0gY2xhc3NMaXN0Lmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdHlsZSA9IGNzc1tjbGFzc0xpc3RbaV1dXG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgICAgICBjbGFzc1N0eWxlW2tleV0gPSBzdHlsZVtrZXldXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsLnNldENsYXNzU3R5bGUoY2xhc3NTdHlsZSlcbn1cblxuLyoqXG4gKiBiaW5kIGNsYXNzbmFtZXMgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRDbGFzcyAodm0sIGVsLCBjbGFzc0xpc3QpIHtcbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkgJiYgIWNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICBlbC5zZXRDbGFzc1N0eWxlKHt9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qgc3R5bGUgPSB2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIGNsYXNzTGlzdCwgdiA9PiB7XG4gICAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdilcbiAgICB9KVxuICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCB2YWx1ZSlcbiAgfVxuICBlbHNlIHtcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgY2xhc3NMaXN0KVxuICB9XG59XG5cbi8qKlxuICogYmluZCBzdHlsZSB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlICh2bSwgZWwsIHN0eWxlKSB7XG4gIGJpbmREaXIodm0sIGVsLCAnc3R5bGUnLCBzdHlsZSlcbn1cblxuLyoqXG4gKiBhZGQgYW4gZXZlbnQgdHlwZSBhbmQgaGFuZGxlciB0byBhbiBlbGVtZW50IGFuZCBnZW5lcmF0ZSBhIGRvbSB1cGRhdGVcbiAqL1xuZnVuY3Rpb24gc2V0RXZlbnQgKHZtLCBlbCwgdHlwZSwgaGFuZGxlcikge1xuICBlbC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHZtKSlcbn1cblxuLyoqXG4gKiBhZGQgYWxsIGV2ZW50cyBvZiBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJpbmRFdmVudHMgKHZtLCBlbCwgZXZlbnRzKSB7XG4gIGlmICghZXZlbnRzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cylcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgIGxldCBoYW5kbGVyID0gZXZlbnRzW2tleV1cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBoYW5kbGVyID0gdm1baGFuZGxlcl1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFRoZSBtZXRob2QgXCIke2hhbmRsZXJ9XCIgaXMgbm90IGRlZmluZWQuYClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVhbFZtID0gdm0uX3JlYWxQYXJlbnQgPyB2bS5fcmVhbFBhcmVudCA6IHZtXG4gICAgc2V0RXZlbnQocmVhbFZtLCBlbCwga2V5LCBoYW5kbGVyKVxuICB9XG59XG5cbi8qKlxuICogc2V0IGEgc2VyaWVzIG9mIG1lbWJlcnMgYXMgYSBraW5kIG9mIGFuIGVsZW1lbnRcbiAqIGZvciBleGFtcGxlOiBzdHlsZSwgYXR0ciwgLi4uXG4gKiBpZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbiB0aGVuIGJpbmQgdGhlIGRhdGEgY2hhbmdlc1xuICovXG5mdW5jdGlvbiBiaW5kRGlyICh2bSwgZWwsIG5hbWUsIGRhdGEpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJpbmRLZXkodm0sIGVsLCBuYW1lLCBrZXksIHZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsW1NFVFRFUlNbbmFtZV1dKGtleSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBkYXRhIGNoYW5nZXMgdG8gYSBjZXJ0YWluIGtleSB0byBhIG5hbWUgc2VyaWVzIGluIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEtleSAodm0sIGVsLCBuYW1lLCBrZXksIGNhbGMpIHtcbiAgY29uc3QgbWV0aG9kTmFtZSA9IFNFVFRFUlNbbmFtZV1cbiAgLy8gd2F0Y2ggdGhlIGNhbGMsIGFuZCByZXR1cm5zIGEgdmFsdWUgYnkgY2FsYy5jYWxsKClcbiAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gICAgaWYgKGRpZmZlcikge1xuICAgICAgZGlmZmVyLmFwcGVuZCgnZWxlbWVudCcsIGVsLmRlcHRoLCBlbC5yZWYsIGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9KVxuXG4gIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG59XG5cbi8qKlxuICogd2F0Y2ggYSBjYWxjIGZ1bmN0aW9uIGFuZCBjYWxsYmFjayBpZiB0aGUgY2FsYyB2YWx1ZSBjaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaCAodm0sIGNhbGMsIGNhbGxiYWNrKSB7XG4gIGlmICh2bS5fc3RhdGljKSB7XG4gICAgcmV0dXJuICgodHlwZW9mIGNhbGMgPT09ICdmdW5jdGlvbicpID8gY2FsYyA6IHBhcnNlUGF0aChjYWxjKSkuY2FsbCh2bSwgdm0pXG4gIH1cbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHZtLCBjYWxjLCBmdW5jdGlvbiAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgJiYgdmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbGJhY2sodmFsdWUpXG4gIH0pXG5cbiAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvdm0vZGlyZWN0aXZlLmpzIiwiLy8gQHRvZG86IEl0IHNob3VsZCBiZSByZWdpc3RlcmVkIGJ5IG5hdGl2ZSBmcm9tIGByZWdpc3RlckNvbXBvbmVudHMoKWAuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hdGl2ZUNvbXBvbmVudE1hcDoge1xuICAgIHRleHQ6IHRydWUsXG4gICAgaW1hZ2U6IHRydWUsXG4gICAgY29udGFpbmVyOiB0cnVlLFxuICAgIHNsaWRlcjoge1xuICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICBhcHBlbmQ6ICd0cmVlJ1xuICAgIH0sXG4gICAgY2VsbDoge1xuICAgICAgdHlwZTogJ2NlbGwnLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvY29uZmlnLmpzIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IERvY3VtZW50ICYgRWxlbWVudCBIZWxwZXJzLlxuICpcbiAqIHJlcXVpcmVkOlxuICogRG9jdW1lbnQjOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb21tZW50LCBnZXRSZWZcbiAqIEVsZW1lbnQjOiBhcHBlbmRDaGlsZCwgaW5zZXJ0QmVmb3JlLCByZW1vdmVDaGlsZCwgbmV4dFNpYmxpbmdcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvZHkgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keSAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVCb2R5KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBmcmFnIGJsb2NrIGZvciBhbiBlbGVtZW50LlxuICogVGhlIGZyYWcgYmxvY2sgaGFzIGEgc3RhcnRlciwgZW5kZXIgYW5kIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2NrICh2bSwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJsb2NrU3RhcnQodm0pXG4gIGNvbnN0IGVuZCA9IGNyZWF0ZUJsb2NrRW5kKHZtKVxuICBjb25zdCBibG9ja0lkID0gbGFzdGVzdEJsb2NrSWQrK1xuICBpZiAoZWxlbWVudC5lbGVtZW50KSB7XG4gICAgbGV0IHVwZGF0ZU1hcmsgPSBlbGVtZW50LnVwZGF0ZU1hcmtcbiAgICBpZiAodXBkYXRlTWFyaykge1xuICAgICAgaWYgKHVwZGF0ZU1hcmsuZWxlbWVudCkge1xuICAgICAgICB1cGRhdGVNYXJrID0gdXBkYXRlTWFyay5lbmRcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihlbmQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoc3RhcnQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LnVwZGF0ZU1hcmsgPSBlbmRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBlbGVtZW50LmVuZClcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoZW5kLCBlbGVtZW50LmVuZClcbiAgICB9XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlbWVudFxuICB9XG4gIGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhcnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbmQpXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCwgZWxlbWVudCwgYmxvY2tJZCB9XG59XG5cbmxldCBsYXN0ZXN0QmxvY2tJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIHN0YXJ0ZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrU3RhcnQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0VuZCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ2VuZCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGFyZ2V0IHRvIGEgY2VydGFpbiBkZXN0IHVzaW5nIGFwcGVuZENoaWxkIGJ5IGRlZmF1bHQuXG4gKiBJZiB0aGUgZGVzdCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBpbnNlcnQgYmVmb3JlIHRoZSBlbmRlci5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gYXR0YWNoIHRoZSBzdGFydGVyIGFuZCBlbmRlciBpbiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBkZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUYXJnZXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgaWYgKGRlc3QuZWxlbWVudCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IGRlc3QuZW5kXG4gICAgY29uc3QgYWZ0ZXIgPSBkZXN0LnVwZGF0ZU1hcmtcbiAgICAvLyBwdXNoIG5ldyB0YXJnZXQgZm9yIHdhdGNoIGxpc3QgdXBkYXRlIGxhdGVyXG4gICAgaWYgKGRlc3QuY2hpbGRyZW4pIHtcbiAgICAgIGRlc3QuY2hpbGRyZW4ucHVzaCh0YXJnZXQpXG4gICAgfVxuICAgIC8vIGZvciBjaGVjayByZXBlYXQgY2FzZVxuICAgIGlmIChhZnRlcikge1xuICAgICAgY29uc3Qgc2lnbmFsID0gbW92ZVRhcmdldCh2bSwgdGFyZ2V0LCBhZnRlcilcbiAgICAgIGRlc3QudXBkYXRlTWFyayA9IHRhcmdldC5lbGVtZW50ID8gdGFyZ2V0LmVuZCA6IHRhcmdldFxuICAgICAgcmV0dXJuIHNpZ25hbFxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuc3RhcnQsIGJlZm9yZSlcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LmVuZCwgYmVmb3JlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgYmVmb3JlKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LnN0YXJ0KVxuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuZW5kKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmFwcGVuZENoaWxkKHRhcmdldClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRhcmdldCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuIFRoZSB0YXJnZXQgbWF5YmUgYmxvY2sgb3IgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIGFmdGVyKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJldHVybiBtb3ZlQmxvY2sodGFyZ2V0LCBhZnRlcilcbiAgfVxuICByZXR1cm4gbW92ZUVsZW1lbnQodGFyZ2V0LCBhZnRlcilcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnQgKGVsZW1lbnQsIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGFsbCBlbGVtZW50cyBvZiB0aGUgYmxvY2sgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlQmxvY2sgKGZyYWdCbG9jaywgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnRcbiAgICBsZXQgc2lnbmFsXG4gICAgY29uc3QgZ3JvdXAgPSBbZWxdXG5cbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgICAgIGdyb3VwLnB1c2goZWwpXG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBhZnRlclxuICAgIGdyb3VwLmV2ZXJ5KChlbCkgPT4ge1xuICAgICAgc2lnbmFsID0gcGFyZW50Lmluc2VydEFmdGVyKGVsLCB0ZW1wKVxuICAgICAgdGVtcCA9IGVsXG4gICAgICByZXR1cm4gc2lnbmFsICE9PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2lnbmFsXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGFyZ2V0IGZyb20gRE9NIHRyZWUuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGNhbGwgX3JlbW92ZUJsb2NrXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCAodm0sIHRhcmdldCwgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJlbW92ZUJsb2NrKHRhcmdldCwgcHJlc2VydmVCbG9jaylcbiAgfVxuICBlbHNlIHtcbiAgICByZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxuICBpZiAodGFyZ2V0Ll92bSkge1xuICAgIHRhcmdldC5fdm0uJGVtaXQoJ2hvb2s6ZGVzdHJveWVkJylcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50ICh0YXJnZXQpIHtcbiAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZyYWcgYmxvY2suXG4gKiBUaGUgc2Vjb25kIHBhcmFtIGRlY2lkZXMgd2hldGhlciB0aGUgYmxvY2sgc2VsZiBzaG91bGQgYmUgcmVtb3ZlZCB0b28uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtCb29sZWFufSBwcmVzZXJ2ZUJsb2NrPWZhbHNlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJsb2NrIChmcmFnQmxvY2ssIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnQubmV4dFNpYmxpbmdcblxuICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICByZXN1bHQucHVzaChlbClcbiAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gIH1cblxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5zdGFydClcbiAgfVxuICByZXN1bHQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICByZW1vdmVFbGVtZW50KGVsKVxuICB9KVxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5lbmQpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvdm0vZG9tLWhlbHBlci5qcyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogRXZlcnl0aGluZyBhYm91dCBjb21wb25lbnQgZXZlbnQgd2hpY2ggaW5jbHVkZXMgZXZlbnQgb2JqZWN0LCBldmVudCBsaXN0ZW5lcixcbiAqIGV2ZW50IGVtaXR0ZXIgYW5kIGxpZmVjeWNsZSBob29rcy5cbiAqL1xuXG4vKipcbiAqIEV2ZW50IG9iamVjdCBkZWZpbml0aW9uLiBBbiBldmVudCBvYmplY3QgaGFzIGB0eXBlYCwgYHRpbWVzdGFtcGAgYW5kXG4gKiBgZGV0YWlsYCBmcm9tIHdoaWNoIGEgY29tcG9uZW50IGVtaXQuIFRoZSBldmVudCBvYmplY3QgY291bGQgYmUgZGlzcGF0Y2hlZCB0b1xuICogcGFyZW50cyBvciBicm9hZGNhc3RlZCB0byBjaGlsZHJlbiBleGNlcHQgYHRoaXMuc3RvcCgpYCBpcyBjYWxsZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHthbnl9ICAgIGRldGFpbFxuICovXG5mdW5jdGlvbiBFdnQgKHR5cGUsIGRldGFpbCkge1xuICBpZiAoZGV0YWlsIGluc3RhbmNlb2YgRXZ0KSB7XG4gICAgcmV0dXJuIGRldGFpbFxuICB9XG5cbiAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIHRoaXMuZGV0YWlsID0gZGV0YWlsXG4gIHRoaXMudHlwZSA9IHR5cGVcblxuICBsZXQgc2hvdWxkU3RvcCA9IGZhbHNlXG5cbiAgLyoqXG4gICAqIHN0b3AgZGlzcGF0Y2ggYW5kIGJyb2FkY2FzdFxuICAgKi9cbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3VsZFN0b3AgPSB0cnVlXG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgaWYgaXQgY2FuJ3QgYmUgZGlzcGF0Y2hlZCBvciBicm9hZGNhc3RlZFxuICAgKi9cbiAgdGhpcy5oYXNTdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzaG91bGRTdG9wXG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IGJ1dCBub3QgYnJvYWRjYXN0IGRvd24gb3IgZGlzcGF0Y2ggdXAuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge2FueX0gICAgZGV0YWlsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZW1pdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdXG4gIGlmIChoYW5kbGVyTGlzdCkge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEVtaXQgYW4gZXZlbnQgYW5kIGRpc3BhdGNoIGl0IHVwLlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0gIHthbnl9ICAgIGRldGFpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gJGRpc3BhdGNoICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50LiRkaXNwYXRjaCkge1xuICAgIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2godHlwZSwgZXZ0KVxuICB9XG59XG5cbi8qKlxuICogRW1pdCBhbiBldmVudCBhbmQgYnJvYWRjYXN0IGl0IGRvd24uXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge2FueX0gICAgZGV0YWlsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkYnJvYWRjYXN0ICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9jaGlsZHJlblZtcykge1xuICAgIHRoaXMuX2NoaWxkcmVuVm1zLmZvckVhY2goKHN1YlZtKSA9PiB7XG4gICAgICBzdWJWbS4kYnJvYWRjYXN0KHR5cGUsIGV2dClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVyLlxuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV0gfHwgW11cbiAgaGFuZGxlckxpc3QucHVzaChoYW5kbGVyKVxuICBldmVudHNbdHlwZV0gPSBoYW5kbGVyTGlzdFxuXG4gIC8vIGZpeGVkIG9sZCB2ZXJzaW9uIGxpZmVjeWNsZSBkZXNpZ25cbiAgaWYgKHR5cGUgPT09ICdob29rOnJlYWR5JyAmJiB0aGlzLl9yZWFkeSkge1xuICAgIHRoaXMuJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVyLlxuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb2ZmICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGlmICghaGFuZGxlcikge1xuICAgIGRlbGV0ZSBldmVudHNbdHlwZV1cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoIWhhbmRsZXJMaXN0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaGFuZGxlckxpc3QuJHJlbW92ZShoYW5kbGVyKVxufVxuXG5jb25zdCBMSUZFX0NZQ0xFX1RZUEVTID0gWydpbml0JywgJ2NyZWF0ZWQnLCAncmVhZHknLCAnZGVzdHJveWVkJ11cblxuLyoqXG4gKiBJbml0IGV2ZW50czpcbiAqIDEuIGxpc3RlbiBgZXZlbnRzYCBpbiBjb21wb25lbnQgb3B0aW9ucyAmIGBleHRlcm5hbEV2ZW50c2AuXG4gKiAyLiBiaW5kIGxpZmVjeWNsZSBob29rcy5cbiAqIEBwYXJhbSAge1ZtfSAgICAgdm1cbiAqIEBwYXJhbSAge29iamVjdH0gZXh0ZXJuYWxFdmVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRFdmVudHMgKHZtLCBleHRlcm5hbEV2ZW50cykge1xuICBjb25zdCBvcHRpb25zID0gdm0uX29wdGlvbnMgfHwge31cbiAgY29uc3QgZXZlbnRzID0gb3B0aW9ucy5ldmVudHMgfHwge31cbiAgZm9yIChjb25zdCB0eXBlMSBpbiBldmVudHMpIHtcbiAgICB2bS4kb24odHlwZTEsIGV2ZW50c1t0eXBlMV0pXG4gIH1cbiAgZm9yIChjb25zdCB0eXBlMiBpbiBleHRlcm5hbEV2ZW50cykge1xuICAgIHZtLiRvbih0eXBlMiwgZXh0ZXJuYWxFdmVudHNbdHlwZTJdKVxuICB9XG4gIExJRkVfQ1lDTEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIHZtLiRvbihgaG9vazoke3R5cGV9YCwgb3B0aW9uc1t0eXBlXSlcbiAgfSlcbn1cblxuLyoqXG4gKiBCaW5kIGV2ZW50IHJlbGF0ZWQgbWV0aG9kcyB0byBWaWV3TW9kZWwgaW5zdGFuY2UuXG4gKiBAcGFyYW0gIHtWbX0gdm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluRXZlbnRzICh2bSkge1xuICB2bS4kZW1pdCA9ICRlbWl0XG4gIHZtLiRkaXNwYXRjaCA9ICRkaXNwYXRjaFxuICB2bS4kYnJvYWRjYXN0ID0gJGJyb2FkY2FzdFxuICB2bS4kb24gPSAkb25cbiAgdm0uJG9mZiA9ICRvZmZcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvdm0vZXZlbnRzLmpzIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBhcGkgdGhhdCBpbnZva2VkIGJ5IGpzIGJ1bmRsZSBjb2RlXG4gKlxuICogLSBkZWZpbmUobmFtZSwgZmFjdG9yeSk6IGRlZmluZSBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSBib290c3RyYXAodHlwZSwgY29uZmlnLCBkYXRhKTogcmVxdWlyZSBhIGNlcnRhaW4gdHlwZSAmXG4gKiAgICAgICAgIHJlbmRlciB3aXRoIChvcHRpb25hbCkgZGF0YVxuICpcbiAqIGRlcHJlY2F0ZWQ6XG4gKiAtIHJlZ2lzdGVyKHR5cGUsIG9wdGlvbnMpOiByZWdpc3RlciBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSByZW5kZXIodHlwZSwgZGF0YSk6IHJlbmRlciBieSBhIGNlcnRhaW4gdHlwZSB3aXRoIChvcHRpb25hbCkgZGF0YVxuICogLSByZXF1aXJlKHR5cGUpKGRhdGEpOiByZXF1aXJlIGEgdHlwZSB0aGVuIHJlbmRlciB3aXRoIGRhdGFcbiAqL1xuXG5leHBvcnQgeyBib290c3RyYXAgfSBmcm9tICcuL2Jvb3RzdHJhcCdcbmV4cG9ydCB7IGRlZmluZUZuLCByZWdpc3RlciB9IGZyb20gJy4vZGVmaW5lJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2luZGV4LmpzIiwiaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgVm0gZnJvbSAnLi4vLi4vdm0nXG5pbXBvcnQgKiBhcyBkb3duZ3JhZGUgZnJvbSAnLi4vZG93bmdyYWRlJ1xuaW1wb3J0IHtcbiAgcmVxdWlyZUN1c3RvbUNvbXBvbmVudFxufSBmcm9tICcuLi9yZWdpc3RlcidcbmltcG9ydCB7XG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzV2VleENvbXBvbmVudCxcbiAgaXNOcG1Nb2R1bGUsXG4gIHJlbW92ZVdlZXhQcmVmaXgsXG4gIHJlbW92ZUpTU3VyZml4XG59IGZyb20gJy4uLy4uL3V0aWwnXG5cbi8qKlxuICogYm9vdHN0cmFwIGFwcCBmcm9tIGEgY2VydGFpbiBjdXN0b20gY29tcG9uZW50IHdpdGggY29uZmlnICYgZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwIChhcHAsIG5hbWUsIGNvbmZpZywgZGF0YSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBib290c3RyYXAgZm9yICR7bmFtZX1gKVxuXG4gIC8vIDEuIHZhbGlkYXRlIGN1c3RvbSBjb21wb25lbnQgbmFtZSBmaXJzdFxuICBsZXQgY2xlYW5OYW1lXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gIH1cbiAgZWxzZSBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgIC8vIGNoZWNrIGlmIGRlZmluZSBieSBvbGQgJ2RlZmluZScgbWV0aG9kXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFyZXF1aXJlQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgSXQncyBub3QgYSBjb21wb25lbnQ6ICR7bmFtZX1gKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBXcm9uZyBjb21wb25lbnQgbmFtZTogJHtuYW1lfWApXG4gIH1cblxuICAvLyAyLiB2YWxpZGF0ZSBjb25maWd1cmF0aW9uXG4gIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG4gIC8vIDIuMSB0cmFuc2Zvcm1lciB2ZXJzaW9uIGNoZWNrXG4gIGlmICh0eXBlb2YgY29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbiA9PT0gJ3N0cmluZycgJiZcbiAgICB0eXBlb2YgZ2xvYmFsLnRyYW5zZm9ybWVyVmVyc2lvbiA9PT0gJ3N0cmluZycgJiZcbiAgICAhc2VtdmVyLnNhdGlzZmllcyhjb25maWcudHJhbnNmb3JtZXJWZXJzaW9uLFxuICAgICAgZ2xvYmFsLnRyYW5zZm9ybWVyVmVyc2lvbikpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBKUyBCdW5kbGUgdmVyc2lvbjogJHtjb25maWcudHJhbnNmb3JtZXJWZXJzaW9ufSBgICtcbiAgICAgIGBub3QgY29tcGF0aWJsZSB3aXRoICR7Z2xvYmFsLnRyYW5zZm9ybWVyVmVyc2lvbn1gKVxuICB9XG4gIC8vIDIuMiBkb3duZ3JhZGUgdmVyc2lvbiBjaGVja1xuICBjb25zdCBkb3duZ3JhZGVSZXN1bHQgPSBkb3duZ3JhZGUuY2hlY2soY29uZmlnLmRvd25ncmFkZSlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChkb3duZ3JhZGVSZXN1bHQuaXNEb3duZ3JhZGUpIHtcbiAgICBhcHAuY2FsbFRhc2tzKFt7XG4gICAgICBtb2R1bGU6ICdpbnN0YW5jZVdyYXAnLFxuICAgICAgbWV0aG9kOiAnZXJyb3InLFxuICAgICAgYXJnczogW1xuICAgICAgICBkb3duZ3JhZGVSZXN1bHQuZXJyb3JUeXBlLFxuICAgICAgICBkb3duZ3JhZGVSZXN1bHQuY29kZSxcbiAgICAgICAgZG93bmdyYWRlUmVzdWx0LmVycm9yTWVzc2FnZVxuICAgICAgXVxuICAgIH1dKVxuICAgIHJldHVybiBuZXcgRXJyb3IoYERvd25ncmFkZVske2Rvd25ncmFkZVJlc3VsdC5jb2RlfV06ICR7ZG93bmdyYWRlUmVzdWx0LmVycm9yTWVzc2FnZX1gKVxuICB9XG5cbiAgLy8gMy4gY3JlYXRlIGEgbmV3IFZtIHdpdGggY3VzdG9tIGNvbXBvbmVudCBuYW1lIGFuZCBkYXRhXG4gIGFwcC52bSA9IG5ldyBWbShjbGVhbk5hbWUsIG51bGwsIHsgX2FwcDogYXBwIH0sIG51bGwsIGRhdGEpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvYm9vdHN0cmFwLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWQ7XG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKVxuICAgICAgICAgIHJldHVybiBudW07XG4gICAgICB9XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSk7XG5cbiAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXTtcbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYWpvciArICcuJyArIHRoaXMubWlub3IgKyAnLicgKyB0aGlzLnBhdGNoO1xuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICB0aGlzLnZlcnNpb24gKz0gJy0nICsgdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKTtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5sb29zZSwgb3RoZXIpO1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZU1haW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZVByZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIC0xO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAwO1xuXG4gIHZhciBpID0gMDtcbiAgZG8ge1xuICAgIHZhciBhID0gdGhpcy5wcmVyZWxlYXNlW2ldO1xuICAgIHZhciBiID0gb3RoZXIucHJlcmVsZWFzZVtpXTtcbiAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYik7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMDtcbiAgICBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgZWxzZSBpZiAoYSA9PT0gYilcbiAgICAgIGNvbnRpbnVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYik7XG4gIH0gd2hpbGUgKCsraSk7XG59O1xuXG4vLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4vLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG5TZW1WZXIucHJvdG90eXBlLmluYyA9IGZ1bmN0aW9uKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAvLyBwcmVwYXRjaC5cbiAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWFqb3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgIGlmICh0aGlzLm1pbm9yICE9PSAwIHx8IHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlub3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnBhdGNoKys7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgLy8gMS4wLjAgXCJwcmVcIiB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgIGNhc2UgJ3ByZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rKztcbiAgICAgICAgICAgIGkgPSAtMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IC0xKSAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMCk7XG4gICAgICB9XG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlWzBdID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpXG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICcgKyByZWxlYXNlKTtcbiAgfVxuICB0aGlzLmZvcm1hdCgpO1xuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmluYyA9IGluYztcbmZ1bmN0aW9uIGluYyh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mKGxvb3NlKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyID0gbG9vc2U7XG4gICAgbG9vc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvbjtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuZnVuY3Rpb24gZGlmZih2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdjEgPSBwYXJzZSh2ZXJzaW9uMSk7XG4gICAgdmFyIHYyID0gcGFyc2UodmVyc2lvbjIpO1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ByZScra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdwcmVyZWxlYXNlJztcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuY29tcGFyZUlkZW50aWZpZXJzID0gY29tcGFyZUlkZW50aWZpZXJzO1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC87XG5mdW5jdGlvbiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKTtcbiAgdmFyIGJudW0gPSBudW1lcmljLnRlc3QoYik7XG5cbiAgaWYgKGFudW0gJiYgYm51bSkge1xuICAgIGEgPSArYTtcbiAgICBiID0gK2I7XG4gIH1cblxuICByZXR1cm4gKGFudW0gJiYgIWJudW0pID8gLTEgOlxuICAgICAgICAgKGJudW0gJiYgIWFudW0pID8gMSA6XG4gICAgICAgICBhIDwgYiA/IC0xIDpcbiAgICAgICAgIGEgPiBiID8gMSA6XG4gICAgICAgICAwO1xufVxuXG5leHBvcnRzLnJjb21wYXJlSWRlbnRpZmllcnMgPSByY29tcGFyZUlkZW50aWZpZXJzO1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSk7XG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvcjtcbmZ1bmN0aW9uIG1ham9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvcjtcbn1cblxuZXhwb3J0cy5taW5vciA9IG1pbm9yO1xuZnVuY3Rpb24gbWlub3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yO1xufVxuXG5leHBvcnRzLnBhdGNoID0gcGF0Y2g7XG5mdW5jdGlvbiBwYXRjaChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2g7XG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKGIpO1xufVxuXG5leHBvcnRzLmNvbXBhcmVMb29zZSA9IGNvbXBhcmVMb29zZTtcbmZ1bmN0aW9uIGNvbXBhcmVMb29zZShhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIHRydWUpO1xufVxuXG5leHBvcnRzLnJjb21wYXJlID0gcmNvbXBhcmU7XG5mdW5jdGlvbiByY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShiLCBhLCBsb29zZSk7XG59XG5cbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5mdW5jdGlvbiBzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5yc29ydCA9IHJzb3J0O1xuZnVuY3Rpb24gcnNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMucmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5ndCA9IGd0O1xuZnVuY3Rpb24gZ3QoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMDtcbn1cblxuZXhwb3J0cy5sdCA9IGx0O1xuZnVuY3Rpb24gbHQoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDwgMDtcbn1cblxuZXhwb3J0cy5lcSA9IGVxO1xuZnVuY3Rpb24gZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwO1xufVxuXG5leHBvcnRzLm5lcSA9IG5lcTtcbmZ1bmN0aW9uIG5lcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgIT09IDA7XG59XG5cbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZnVuY3Rpb24gZ3RlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwO1xufVxuXG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmZ1bmN0aW9uIGx0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMDtcbn1cblxuZXhwb3J0cy5jbXAgPSBjbXA7XG5mdW5jdGlvbiBjbXAoYSwgb3AsIGIsIGxvb3NlKSB7XG4gIHZhciByZXQ7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICc9PT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhID09PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSAhPT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyc6IGNhc2UgJz0nOiBjYXNlICc9PSc6IHJldCA9IGVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnIT0nOiByZXQgPSBuZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+JzogcmV0ID0gZ3QoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+PSc6IHJldCA9IGd0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzwnOiByZXQgPSBsdChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzw9JzogcmV0ID0gbHRlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvcGVyYXRvcjogJyArIG9wKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnRzLkNvbXBhcmF0b3IgPSBDb21wYXJhdG9yO1xuZnVuY3Rpb24gQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICBpZiAoY29tcC5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gY29tcDtcbiAgICBlbHNlXG4gICAgICBjb21wID0gY29tcC52YWx1ZTtcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSlcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuXG4gIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHRoaXMucGFyc2UoY29tcCk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICBlbHNlXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uO1xuXG4gIGRlYnVnKCdjb21wJywgdGhpcyk7XG59XG5cbnZhciBBTlkgPSB7fTtcbkNvbXBhcmF0b3IucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oY29tcCkge1xuICB2YXIgciA9IHRoaXMubG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBtID0gY29tcC5tYXRjaChyKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjb21wYXJhdG9yOiAnICsgY29tcCk7XG5cbiAgdGhpcy5vcGVyYXRvciA9IG1bMV07XG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpXG4gICAgdGhpcy5vcGVyYXRvciA9ICcnO1xuXG4gIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICBpZiAoIW1bMl0pXG4gICAgdGhpcy5zZW12ZXIgPSBBTlk7XG4gIGVsc2VcbiAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5sb29zZSk7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMubG9vc2UpO1xufTtcblxuXG5leHBvcnRzLlJhbmdlID0gUmFuZ2U7XG5mdW5jdGlvbiBSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgaWYgKChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSAmJiByYW5nZS5sb29zZSA9PT0gbG9vc2UpXG4gICAgcmV0dXJuIHJhbmdlO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5nZSkpXG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHRoaXMubG9vc2UgPSBsb29zZTtcblxuICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICB0aGlzLnJhdyA9IHJhbmdlO1xuICB0aGlzLnNldCA9IHJhbmdlLnNwbGl0KC9cXHMqXFx8XFx8XFxzKi8pLm1hcChmdW5jdGlvbihyYW5nZSkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmFuZ2UocmFuZ2UudHJpbSgpKTtcbiAgfSwgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKGMpIHtcbiAgICAvLyB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCByZWxldmFudCBmb3Igd2hhdGV2ZXIgcmVhc29uXG4gICAgcmV0dXJuIGMubGVuZ3RoO1xuICB9KTtcblxuICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgU2VtVmVyIFJhbmdlOiAnICsgcmFuZ2UpO1xuICB9XG5cbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuUmFuZ2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJhbmdlID0gdGhpcy5zZXQubWFwKGZ1bmN0aW9uKGNvbXBzKSB7XG4gICAgcmV0dXJuIGNvbXBzLmpvaW4oJyAnKS50cmltKCk7XG4gIH0pLmpvaW4oJ3x8JykudHJpbSgpO1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS5wYXJzZVJhbmdlID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgdmFyIGxvb3NlID0gdGhpcy5sb29zZTtcbiAgcmFuZ2UgPSByYW5nZS50cmltKCk7XG4gIGRlYnVnKCdyYW5nZScsIHJhbmdlLCBsb29zZSk7XG4gIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICB2YXIgaHIgPSBsb29zZSA/IHJlW0hZUEhFTlJBTkdFTE9PU0VdIDogcmVbSFlQSEVOUkFOR0VdO1xuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UpO1xuICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSk7XG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpO1xuICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UsIHJlW0NPTVBBUkFUT1JUUklNXSk7XG5cbiAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtUSUxERVRSSU1dLCB0aWxkZVRyaW1SZXBsYWNlKTtcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpO1xuXG4gIC8vIG5vcm1hbGl6ZSBzcGFjZXNcbiAgcmFuZ2UgPSByYW5nZS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKTtcblxuICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSB0cmltbWVkIGFuZFxuICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gIHZhciBjb21wUmUgPSBsb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIHNldCA9IHJhbmdlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpLnNwbGl0KC9cXHMrLyk7XG4gIGlmICh0aGlzLmxvb3NlKSB7XG4gICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uKGNvbXApIHtcbiAgICAgIHJldHVybiAhIWNvbXAubWF0Y2goY29tcFJlKTtcbiAgICB9KTtcbiAgfVxuICBzZXQgPSBzZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KTtcblxuICByZXR1cm4gc2V0O1xufTtcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuZXhwb3J0cy50b0NvbXBhcmF0b3JzID0gdG9Db21wYXJhdG9ycztcbmZ1bmN0aW9uIHRvQ29tcGFyYXRvcnMocmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5zZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gY29tcC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICB9KTtcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjb21wJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygneHJhbmdlJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpO1xuICBkZWJ1Zygnc3RhcnMnLCBjb21wKTtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbmZ1bmN0aW9uIGlzWChpZCkge1xuICByZXR1cm4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonO1xufVxuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMFxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSkge1xuICB2YXIgciA9IGxvb3NlID8gcmVbVElMREVMT09TRV0gOiByZVtUSUxERV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKVxuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9IGVsc2VcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjBcbmZ1bmN0aW9uIHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgbG9vc2UpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJyk7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBsb29zZSk7XG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSkge1xuICBjb21wID0gY29tcC50cmltKCk7XG4gIHZhciByID0gbG9vc2UgPyByZVtYUkFOR0VMT09TRV0gOiByZVtYUkFOR0VdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHhNID0gaXNYKE0pO1xuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKTtcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocCk7XG4gICAgdmFyIGFueVggPSB4cDtcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WClcbiAgICAgIGd0bHQgPSAnJztcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pXG4gICAgICAgIG0gPSAwO1xuICAgICAgaWYgKHhwKVxuICAgICAgICBwID0gMDtcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAvLyA+MS4yLjMgPT4gPj0gMS4yLjRcbiAgICAgICAgZ3RsdCA9ICc+PSc7XG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCc7XG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0ID0gZ3RsdCArIE0gKyAnLicgKyBtICsgJy4nICsgcDtcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmZ1bmN0aW9uIHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgbG9vc2UpO1xuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbU1RBUl0sICcnKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjBcbmZ1bmN0aW9uIGh5cGhlblJlcGxhY2UoJDAsXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG5cbiAgaWYgKGlzWChmTSkpXG4gICAgZnJvbSA9ICcnO1xuICBlbHNlIGlmIChpc1goZm0pKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWChmcCkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJztcbiAgZWxzZVxuICAgIGZyb20gPSAnPj0nICsgZnJvbTtcblxuICBpZiAoaXNYKHRNKSlcbiAgICB0byA9ICcnO1xuICBlbHNlIGlmIChpc1godG0pKVxuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1godHApKVxuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnO1xuICBlbHNlIGlmICh0cHIpXG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByO1xuICBlbHNlXG4gICAgdG8gPSAnPD0nICsgdG87XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKTtcbn1cblxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbikpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiB0ZXN0U2V0KHNldCwgdmVyc2lvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKTtcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyO1xuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5zYXRpc2ZpZXMgPSBzYXRpc2ZpZXM7XG5mdW5jdGlvbiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbik7XG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtYXhTYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gcmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLm1pblNhdGlzZnlpbmcgPSBtaW5TYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWluU2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLnZhbGlkUmFuZ2UgPSB2YWxpZFJhbmdlO1xuZnVuY3Rpb24gdmFsaWRSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnJhbmdlIHx8ICcqJztcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyO1xuZnVuY3Rpb24gbHRyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBsb29zZSk7XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyO1xuZnVuY3Rpb24gZ3RyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBsb29zZSk7XG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGU7XG5mdW5jdGlvbiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBsb29zZSkge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdmFyIGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcDtcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3Q7XG4gICAgICBsdGVmbiA9IGx0ZTtcbiAgICAgIGx0Zm4gPSBsdDtcbiAgICAgIGNvbXAgPSAnPic7XG4gICAgICBlY29tcCA9ICc+PSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdDtcbiAgICAgIGx0ZWZuID0gZ3RlO1xuICAgICAgbHRmbiA9IGd0O1xuICAgICAgY29tcCA9ICc8JztcbiAgICAgIGVjb21wID0gJzw9JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpO1xuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNpZmVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldO1xuXG4gICAgdmFyIGhpZ2ggPSBudWxsO1xuICAgIHZhciBsb3cgPSBudWxsO1xuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcGFyYXRvci5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgICBjb21wYXJhdG9yID0gbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKVxuICAgICAgfVxuICAgICAgaGlnaCA9IGhpZ2ggfHwgY29tcGFyYXRvcjtcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yO1xuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgaGlnaCA9IGNvbXBhcmF0b3I7XG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGxvdy5vcGVyYXRvciA9PT0gZWNvbXAgJiYgbHRmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZTtcbmZ1bmN0aW9uIHByZXJlbGVhc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2VtdmVyL3NlbXZlci5qcyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlcnNpb24gc3RyaW5nLlxuICogQHBhcmFtICB7U3RyaW5nfSBWZXJzaW9uLiBpZTogMSwgMS4wLCAxLjAuMFxuICogQHJldHVybiB7U3RyaW5nfSBWZXJzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVWZXJzaW9uICh2KSB7XG4gIGNvbnN0IGlzVmFsaWQgPSBzZW12ZXIudmFsaWQodilcbiAgaWYgKGlzVmFsaWQpIHtcbiAgICByZXR1cm4gdlxuICB9XG5cbiAgdiA9IHR5cGVvZiAodikgPT09ICdzdHJpbmcnID8gdiA6ICcnXG4gIGNvbnN0IHNwbGl0ID0gdi5zcGxpdCgnLicpXG4gIGxldCBpID0gMFxuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIHdoaWxlIChpIDwgMykge1xuICAgIGNvbnN0IHMgPSB0eXBlb2YgKHNwbGl0W2ldKSA9PT0gJ3N0cmluZycgJiYgc3BsaXRbaV0gPyBzcGxpdFtpXSA6ICcwJ1xuICAgIHJlc3VsdC5wdXNoKHMpXG4gICAgaSsrXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJy4nKVxufVxuXG4vKipcbiAqIEdldCBpbmZvcm1hdGlvbnMgZnJvbSBkaWZmZXJlbnQgZXJyb3Iga2V5LiBMaWtlOlxuICogLSBjb2RlXG4gKiAtIGVycm9yTWVzc2FnZVxuICogLSBlcnJvclR5cGVcbiAqIC0gaXNEb3duZ3JhZGVcbiAqIEBwYXJhbSAge3N0cmluZ30ga2V5XG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtICB7c3RyaW5nfSBjcml0ZXJpYVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3IgKGtleSwgdmFsLCBjcml0ZXJpYSkge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgaXNEb3duZ3JhZGU6IHRydWUsXG4gICAgZXJyb3JUeXBlOiAxLFxuICAgIGNvZGU6IDEwMDBcbiAgfVxuICBjb25zdCBnZXRNc2cgPSBmdW5jdGlvbiAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gICAgcmV0dXJuICdEb3duZ3JhZGVbJyArIGtleSArICddIDo6IGRldmljZUluZm8gJ1xuICAgICAgKyB2YWwgKyAnIG1hdGNoZWQgY3JpdGVyaWEgJyArIGNyaXRlcmlhXG4gIH1cbiAgY29uc3QgX2tleSA9IGtleS50b0xvd2VyQ2FzZSgpXG5cbiAgcmVzdWx0LmVycm9yTWVzc2FnZSA9IGdldE1zZyhrZXksIHZhbCwgY3JpdGVyaWEpXG5cbiAgaWYgKF9rZXkuaW5kZXhPZignb3N2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMVxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignYXBwdmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDJcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ3dlZXh2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwM1xuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignZGV2aWNlbW9kZWwnKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDA0XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogV0VFWCBmcmFtZXdvcmsgaW5wdXQoZGV2aWNlSW5mbylcbiAqIHtcbiAqICAgcGxhdGZvcm06ICdpT1MnIG9yICdhbmRyb2lkJ1xuICogICBvc1ZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGFwcFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIHdlZXhWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICBkRGV2aWNlTW9kZWw6ICdNT0RFTF9OQU1FJ1xuICogfVxuICpcbiAqIGRvd25ncmFkZSBjb25maWcoY29uZmlnKVxuICoge1xuICogICBpb3M6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9LFxuICogICBhbmRyb2lkOiB7XG4gKiAgICAgb3NWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBhcHBWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICB3ZWV4VmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgZGV2aWNlTW9kZWw6IFsnbW9kZWxBJywgJ21vZGVsQicsIC4uLl1cbiAqICAgfVxuICogfVxuICpcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRldmljZUluZm8gV2VleCBTREsgZnJhbWV3b3JrIGlucHV0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyAgICAgdXNlciBpbnB1dFxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIHsgaXNEb3duZ3JhZGU6IHRydWUvZmFsc2UsIGVycm9yTWVzc2FnZS4uLiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVjayAoY29uZmlnLCBkZXZpY2VJbmZvKSB7XG4gIGRldmljZUluZm8gPSBkZXZpY2VJbmZvIHx8IGdsb2JhbC5XWEVudmlyb25tZW50XG4gIGRldmljZUluZm8gPSBpc1BsYWluT2JqZWN0KGRldmljZUluZm8pID8gZGV2aWNlSW5mbyA6IHt9XG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogZmFsc2UgLy8gZGVmYXV0bCBpcyBwYXNzXG4gIH1cblxuICBpZiAodHlwb2YoY29uZmlnKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxldCBjdXN0b21Eb3duZ3JhZGUgPSBjb25maWcuY2FsbCh0aGlzLCBkZXZpY2VJbmZvLCB7XG4gICAgICBzZW12ZXI6IHNlbXZlcixcbiAgICAgIG5vcm1hbGl6ZVZlcnNpb246IHRoaXMubm9ybWFsaXplVmVyc2lvblxuICAgIH0pXG5cbiAgICBjdXN0b21Eb3duZ3JhZGUgPSAhIWN1c3RvbURvd25ncmFkZVxuXG4gICAgcmVzdWx0ID0gY3VzdG9tRG93bmdyYWRlID8gdGhpcy5nZXRFcnJvcignY3VzdG9tJywgJycsICdjdXN0b20gcGFyYW1zJykgOiByZXN1bHRcbiAgfVxuICBlbHNlIHtcbiAgICBjb25maWcgPSBpc1BsYWluT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fVxuXG4gICAgY29uc3QgcGxhdGZvcm0gPSBkZXZpY2VJbmZvLnBsYXRmb3JtIHx8ICd1bmtub3cnXG4gICAgY29uc3QgZFBsYXRmb3JtID0gcGxhdGZvcm0udG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGNPYmogPSBjb25maWdbZFBsYXRmb3JtXSB8fCB7fVxuXG4gICAgZm9yIChjb25zdCBpIGluIGRldmljZUluZm8pIHtcbiAgICAgIGNvbnN0IGtleSA9IGlcbiAgICAgIGNvbnN0IGtleUxvd2VyID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHZhbCA9IGRldmljZUluZm9baV1cbiAgICAgIGNvbnN0IGlzVmVyc2lvbiA9IGtleUxvd2VyLmluZGV4T2YoJ3ZlcnNpb24nKSA+PSAwXG4gICAgICBjb25zdCBpc0RldmljZU1vZGVsID0ga2V5TG93ZXIuaW5kZXhPZignZGV2aWNlbW9kZWwnKSA+PSAwXG4gICAgICBjb25zdCBjcml0ZXJpYSA9IGNPYmpbaV1cblxuICAgICAgaWYgKGNyaXRlcmlhICYmIGlzVmVyc2lvbikge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5ub3JtYWxpemVWZXJzaW9uKGNyaXRlcmlhKVxuICAgICAgICBjb25zdCBkID0gdGhpcy5ub3JtYWxpemVWZXJzaW9uKGRldmljZUluZm9baV0pXG5cbiAgICAgICAgaWYgKHNlbXZlci5zYXRpc2ZpZXMoZCwgYykpIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0RldmljZU1vZGVsKSB7XG4gICAgICAgIGNvbnN0IF9jcml0ZXJpYSA9IHR5cG9mKGNyaXRlcmlhKSA9PT0gJ2FycmF5JyA/IGNyaXRlcmlhIDogW2NyaXRlcmlhXVxuICAgICAgICBpZiAoX2NyaXRlcmlhLmluZGV4T2YodmFsKSA+PSAwKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRFcnJvcihrZXksIHZhbCwgY3JpdGVyaWEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvYXBwL2Rvd25ncmFkZS5qcyIsImltcG9ydCB7XG4gIGlzV2VleENvbXBvbmVudCxcbiAgaXNXZWV4TW9kdWxlLFxuICBpc05vcm1hbE1vZHVsZSxcbiAgaXNOcG1Nb2R1bGUsXG4gIHJlbW92ZVdlZXhQcmVmaXgsXG4gIHJlbW92ZUpTU3VyZml4XG59IGZyb20gJy4uLy4uL3V0aWwnXG5pbXBvcnQge1xuICByZWdpc3RlckN1c3RvbUNvbXBvbmVudCxcbiAgcmVxdWlyZUN1c3RvbUNvbXBvbmVudCxcbiAgaW5pdE1vZHVsZXNcbn0gZnJvbSAnLi4vcmVnaXN0ZXInXG5cbi8qKlxuICogZGVmaW5lKG5hbWUsIGZhY3RvcnkpIGZvciBwcmltYXJ5IHVzYWdlXG4gKiBvclxuICogZGVmaW5lKG5hbWUsIGRlcHMsIGZhY3RvcnkpIGZvciBjb21wYXRpYmlsaXR5XG4gKiBOb3RpY2U6IERPIE5PVCB1c2UgZnVuY3Rpb24gZGVmaW5lKCkge30sXG4gKiBpdCB3aWxsIGNhdXNlIGVycm9yIGFmdGVyIGJ1aWxkZWQgYnkgd2VicGFja1xuICovXG5leHBvcnQgY29uc3QgZGVmaW5lRm4gPSBmdW5jdGlvbiAoYXBwLCBuYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCAke25hbWV9YClcblxuICAvLyBhZGFwdCBhcmdzOlxuICAvLyAxLiBuYW1lLCBkZXBzW10sIGZhY3RvcnkoKVxuICAvLyAyLiBuYW1lLCBmYWN0b3J5KClcbiAgLy8gMy4gbmFtZSwgZGVmaW5pdGlvbnt9XG4gIGxldCBmYWN0b3J5LCBkZWZpbml0aW9uXG4gIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICBkZWZpbml0aW9uID0gYXJnc1sxXVxuICB9XG4gIGVsc2Uge1xuICAgIGRlZmluaXRpb24gPSBhcmdzWzBdXG4gIH1cbiAgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZmFjdG9yeSA9IGRlZmluaXRpb25cbiAgICBkZWZpbml0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gcmVzb2x2ZSBkZWZpbml0aW9uIGZyb20gZmFjdG9yeVxuICBpZiAoZmFjdG9yeSkge1xuICAgIGNvbnN0IHIgPSAobmFtZSkgPT4ge1xuICAgICAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiByZXF1aXJlQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lKVxuICAgICAgfVxuICAgICAgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiBhcHAucmVxdWlyZU1vZHVsZShjbGVhbk5hbWUpXG4gICAgICB9XG4gICAgICBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkgfHwgaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAgICAgcmV0dXJuIGFwcC5jb21tb25Nb2R1bGVzW2NsZWFuTmFtZV1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbSA9IHsgZXhwb3J0czoge319XG4gICAgZmFjdG9yeShyLCBtLmV4cG9ydHMsIG0pXG4gICAgZGVmaW5pdGlvbiA9IG0uZXhwb3J0c1xuICB9XG5cbiAgLy8gYXBwbHkgZGVmaW5pdGlvblxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lLCBkZWZpbml0aW9uKVxuICB9XG4gIGVsc2UgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgIGNvbnN0IGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICBpbml0TW9kdWxlcyh7IFtjbGVhbk5hbWVdOiBkZWZpbml0aW9uIH0pXG4gIH1cbiAgZWxzZSBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkpIHtcbiAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgIGFwcC5jb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBkZWZpbml0aW9uXG4gIH1cbiAgZWxzZSBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgIGlmIChkZWZpbml0aW9uLnRlbXBsYXRlIHx8XG4gICAgICAgIGRlZmluaXRpb24uc3R5bGUgfHxcbiAgICAgICAgZGVmaW5pdGlvbi5tZXRob2RzKSB7XG4gICAgICAvLyBkb3duZ3JhZGUgdG8gb2xkIGRlZmluZSBtZXRob2QgKGRlZmluZSgnY29tcG9uZW50TmFtZScsIGZhY3RvcnkpKVxuICAgICAgLy8gdGhlIGV4cG9ydHMgY29udGFpbiBvbmUga2V5IG9mIHRlbXBsYXRlLCBzdHlsZSBvciBtZXRob2RzXG4gICAgICAvLyBidXQgaXQgaGFzIHJpc2shISFcbiAgICAgIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lLCBkZWZpbml0aW9uKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGFwcC5jb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyIChhcHAsIHR5cGUsIG9wdGlvbnMpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBSZWdpc3RlciBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50KGFwcCwgdHlwZSwgb3B0aW9ucylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanMiLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGluc3RhbmNlIGNvbnRyb2xzIGZyb20gbmF0aXZlXG4gKlxuICogLSBmaXJlIGV2ZW50XG4gKiAtIGNhbGxiYWNrXG4gKiAtIHJlZnJlc2hcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5pbXBvcnQgeyBleHRlbmQsIHR5cG9mIH0gZnJvbSAnLi4vLi4vdXRpbCdcbmltcG9ydCByZW5kZXJlciBmcm9tICcuLi8uLi9jb25maWcnXG5cbi8qKlxuICogUmVmcmVzaCBhbiBhcHAgd2l0aCBkYXRhIHRvIGl0cyByb290IGNvbXBvbmVudCBvcHRpb25zLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEBwYXJhbSAge2FueX0gICAgZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaCAoYXBwLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFJlZnJlc2ggd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2VbJHthcHAuaWR9XWApXG4gIGNvbnN0IHZtID0gYXBwLnZtXG4gIGlmICh2bSAmJiBkYXRhKSB7XG4gICAgLy8gYXBwLmRvYy5jbG9zZSgpXG4gICAgaWYgKHR5cGVvZiB2bS5yZWZyZXNoRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdm0ucmVmcmVzaERhdGEoZGF0YSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHRlbmQodm0sIGRhdGEpXG4gICAgfVxuICAgIHVwZGF0ZUFjdGlvbnMoYXBwKVxuICAgIGFwcC5kb2MubGlzdGVuZXIucmVmcmVzaEZpbmlzaCgpXG4gICAgLy8gYXBwLmRvYy5vcGVuKClcbiAgICByZXR1cm5cbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGRhdGEgXCIke2RhdGF9XCJgKVxufVxuXG4vKipcbiAqIERlc3Ryb3kgYW4gYXBwLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3kgKGFwcCkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBEZXN0b3J5IGFuIGluc3RhbmNlKCR7YXBwLmlkfSlgKVxuXG4gIGlmIChhcHAudm0pIHtcbiAgICBkZXN0cm95Vm0oYXBwLnZtKVxuICB9XG5cbiAgYXBwLmlkID0gJydcbiAgYXBwLm9wdGlvbnMgPSBudWxsXG4gIGFwcC5ibG9ja3MgPSBudWxsXG4gIGFwcC52bSA9IG51bGxcbiAgYXBwLmRvYy5kZXN0cm95KClcbiAgYXBwLmRvYyA9IG51bGxcbiAgYXBwLmN1c3RvbUNvbXBvbmVudE1hcCA9IG51bGxcbiAgYXBwLmNvbW1vbk1vZHVsZXMgPSBudWxsXG4gIGFwcC5jYWxsYmFja3MgPSBudWxsXG59XG5cbi8qKlxuICogRGVzdHJveSBhbiBWbS5cbiAqIEBwYXJhbSB7b2JqZWN0fSB2bVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveVZtICh2bSkge1xuICBkZWxldGUgdm0uX2FwcFxuICBkZWxldGUgdm0uX2NvbXB1dGVkXG4gIGRlbGV0ZSB2bS5fY3NzXG4gIGRlbGV0ZSB2bS5fZGF0YVxuICBkZWxldGUgdm0uX2lkc1xuICBkZWxldGUgdm0uX21ldGhvZHNcbiAgZGVsZXRlIHZtLl9vcHRpb25zXG4gIGRlbGV0ZSB2bS5fcGFyZW50XG4gIGRlbGV0ZSB2bS5fcGFyZW50RWxcbiAgZGVsZXRlIHZtLl9yb290RWxcblxuICAvLyByZW1vdmUgYWxsIHdhdGNoZXJzXG4gIGlmICh2bS5fd2F0Y2hlcnMpIHtcbiAgICBsZXQgd2F0Y2hlckNvdW50ID0gdm0uX3dhdGNoZXJzLmxlbmd0aFxuICAgIHdoaWxlICh3YXRjaGVyQ291bnQtLSkge1xuICAgICAgdm0uX3dhdGNoZXJzW3dhdGNoZXJDb3VudF0udGVhcmRvd24oKVxuICAgIH1cbiAgICBkZWxldGUgdm0uX3dhdGNoZXJzXG4gIH1cblxuICAvLyBkZXN0cm95IGNoaWxkIHZtcyByZWN1cnNpdmVseVxuICBpZiAodm0uX2NoaWxkcmVuVm1zKSB7XG4gICAgbGV0IHZtQ291bnQgPSB2bS5fY2hpbGRyZW5WbXMubGVuZ3RoXG4gICAgd2hpbGUgKHZtQ291bnQtLSkge1xuICAgICAgZGVzdHJveVZtKHZtLl9jaGlsZHJlblZtc1t2bUNvdW50XSlcbiAgICB9XG4gICAgZGVsZXRlIHZtLl9jaGlsZHJlblZtc1xuICB9XG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJkZXN0cm95ZWRcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6ZGVzdHJveWVkJylcblxuICBkZWxldGUgdm0uX3R5cGVcbiAgZGVsZXRlIHZtLl92bUV2ZW50c1xufVxuXG4vKipcbiAqIEdldCBhIEpTT04gb2JqZWN0IHRvIGRlc2NyaWJlIHRoZSBkb2N1bWVudCBib2R5LlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RFbGVtZW50IChhcHApIHtcbiAgY29uc3QgZG9jID0gYXBwLmRvYyB8fCB7fVxuICBjb25zdCBib2R5ID0gZG9jLmJvZHkgfHwge31cbiAgcmV0dXJuIGJvZHkudG9KU09OID8gYm9keS50b0pTT04oKSA6IHt9XG59XG5cbi8qKlxuICogRmlyZSBhbiBldmVudCBmcm9tIHJlbmRlcmVyLiBUaGUgZXZlbnQgaGFzIHR5cGUsIGFuIGV2ZW50IG9iamVjdCBhbmQgYW5cbiAqIGVsZW1lbnQgcmVmLiBJZiB0aGUgZXZlbnQgY29tZXMgd2l0aCBzb21lIHZpcnR1YWwtRE9NIGNoYW5nZXMsIGl0IHNob3VsZFxuICogaGF2ZSBvbmUgbW9yZSBwYXJhbWV0ZXIgdG8gZGVzY3JpYmUgdGhlIGNoYW5nZXMuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHBhcmFtICB7c3RyaW5nfSByZWZcbiAqIEBwYXJhbSAge3R5cGV9ICAgdHlwZVxuICogQHBhcmFtICB7b2JqZWN0fSBlXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRvbUNoYW5nZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcmVFdmVudCAoYXBwLCByZWYsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gRmlyZSBhIFwiJHt0eXBlfVwiIGV2ZW50IG9uIGFuIGVsZW1lbnQoJHtyZWZ9KSBpbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVmKSkge1xuICAgIHJlZi5zb21lKChyZWYpID0+IHtcbiAgICAgIHJldHVybiBhcHAuZmlyZUV2ZW50KHJlZiwgdHlwZSwgZSkgIT09IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBlbCA9IGFwcC5kb2MuZ2V0UmVmKHJlZilcbiAgaWYgKGVsKSB7XG4gICAgLy8gYXBwLmRvYy5jbG9zZSgpXG4gICAgY29uc3QgcmVzdWx0ID0gYXBwLmRvYy5maXJlRXZlbnQoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpXG4gICAgdXBkYXRlQWN0aW9ucyhhcHApXG4gICAgYXBwLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIC8vIGFwcC5kb2Mub3BlbigpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZWxlbWVudCByZWZlcmVuY2UgXCIke3JlZn1cImApXG59XG5cbi8qKlxuICogTWFrZSBhIGNhbGxiYWNrIGZvciBhIGNlcnRhaW4gYXBwLlxuICogQHBhcmFtICB7b2JqZWN0fSAgIGFwcFxuICogQHBhcmFtICB7bnVtYmVyfSAgIGNhbGxiYWNrSWRcbiAqIEBwYXJhbSAge2FueX0gICAgICBkYXRhXG4gKiBAcGFyYW0gIHtib29sZWFufSAgaWZLZWVwQWxpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrIChhcHAsIGNhbGxiYWNrSWQsIGRhdGEsIGlmS2VlcEFsaXZlKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIEludm9rZSBhIGNhbGxiYWNrKCR7Y2FsbGJhY2tJZH0pIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlKCR7YXBwLmlkfSlgKVxuICBjb25zdCBjYWxsYmFjayA9IGFwcC5jYWxsYmFja3NbY2FsbGJhY2tJZF1cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGFwcC5kb2MuY2xvc2UoKVxuICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgaWYgKHR5cGVvZiBpZktlZXBBbGl2ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgaWZLZWVwQWxpdmUgPT09IGZhbHNlKSB7XG4gICAgICBhcHAuY2FsbGJhY2tzW2NhbGxiYWNrSWRdID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIHVwZGF0ZUFjdGlvbnMoYXBwKVxuICAgIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICAvLyBhcHAuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgY2FsbGJhY2sgaWQgXCIke2NhbGxiYWNrSWR9XCJgKVxufVxuXG4vKipcbiAqIENvbGxlY3QgYWxsIHZpcnR1YWwtRE9NIG11dGF0aW9ucyB0b2dldGhlciBhbmQgc2VuZCB0aGVtIHRvIHJlbmRlcmVyLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFjdGlvbnMgKGFwcCkge1xuICBhcHAuZGlmZmVyLmZsdXNoKClcbiAgY29uc3QgdGFza3MgPSBbXVxuICBpZiAoYXBwLmRvYyAmJiBhcHAuZG9jLmxpc3RlbmVyICYmIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlcy5sZW5ndGgpIHtcbiAgICB0YXNrcy5wdXNoKC4uLmFwcC5kb2MubGlzdGVuZXIudXBkYXRlcylcbiAgICBhcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZXMgPSBbXVxuICB9XG4gIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbFRhc2tzKGFwcCwgdGFza3MpXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsIGFsbCB0YXNrcyBmcm9tIGFuIGFwcCB0byByZW5kZXJlciAobmF0aXZlKS5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcGFyYW0gIHthcnJheX0gIHRhc2tzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsVGFza3MgKGFwcCwgdGFza3MpIHtcbiAgaWYgKHR5cG9mKHRhc2tzKSAhPT0gJ2FycmF5Jykge1xuICAgIHRhc2tzID0gW3Rhc2tzXVxuICB9XG5cbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suYXJncyA9IHRhc2suYXJncy5tYXAoYXJnID0+IG5vcm1hbGl6ZShhcmcsIGFwcCkpXG4gIH0pXG5cbiAgcmV0dXJuIHJlbmRlcmVyLnNlbmRUYXNrcyhhcHAuaWQsIHRhc2tzLCAnLTEnKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZhbHVlLiBTcGVjaWFsbHksIGlmIHRoZSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCB0aGVuIGdlbmVyYXRlIGEgZnVuY3Rpb24gaWRcbiAqIGFuZCBzYXZlIGl0IHRvIGBhcHAuY2FsbGJhY2tzYCwgYXQgbGFzdCByZXR1cm4gdGhlIGZ1bmN0aW9uIGlkLlxuICogQHBhcmFtICB7YW55fSAgICAgICAgdlxuICogQHBhcmFtICB7b2JqZWN0fSAgICAgYXBwXG4gKiBAcmV0dXJuIHtwcmltaXRpdmV9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAodiwgYXBwKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBvZih2KVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgY2FzZSAnbnVsbCc6XG4gICAgICByZXR1cm4gJydcbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoKVxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHYudG9JU09TdHJpbmcoKVxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdhcnJheSc6XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2IGluc3RhbmNlb2YgcmVuZGVyZXIuRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdi5yZWZcbiAgICAgIH1cbiAgICAgIHJldHVybiB2XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgYXBwLmNhbGxiYWNrc1srK2FwcC51aWRdID0gdlxuICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodilcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IEFwcCBjb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgRGlmZmVyIGZyb20gJy4vZGlmZmVyJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uL2NvbmZpZydcblxuLyoqXG4gKiBBcHAgY29uc3RydWN0b3IgZm9yIFdlZXggZnJhbWV3b3JrLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAgKGlkLCBvcHRpb25zKSB7XG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0ge31cbiAgdGhpcy5jb21tb25Nb2R1bGVzID0ge31cbiAgdGhpcy5jYWxsYmFja3MgPSB7fVxuICB0aGlzLmRvYyA9IG5ldyByZW5kZXJlci5Eb2N1bWVudChcbiAgICBpZCxcbiAgICB0aGlzLm9wdGlvbnMuYnVuZGxlVXJsLFxuICAgIG51bGwsXG4gICAgcmVuZGVyZXIuTGlzdGVuZXJcbiAgKVxuICB0aGlzLmRpZmZlciA9IG5ldyBEaWZmZXIoaWQpXG4gIHRoaXMudWlkID0gMFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvZGVmYXVsdC9hcHAvaW5zdGFuY2UuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWZmZXIge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm1hcCA9IFtdXG4gICAgdGhpcy5ob29rcyA9IFtdXG4gIH1cbiAgaXNFbXB0eSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmxlbmd0aCA9PT0gMFxuICB9XG4gIGFwcGVuZCAodHlwZSwgZGVwdGgsIHJlZiwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5oYXNUaW1lcikge1xuICAgICAgdGhpcy5oYXNUaW1lciA9IHRydWVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc1RpbWVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5mbHVzaCh0cnVlKVxuICAgICAgfSwgMClcbiAgICB9XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBcbiAgICBpZiAoIW1hcFtkZXB0aF0pIHtcbiAgICAgIG1hcFtkZXB0aF0gPSB7fVxuICAgIH1cbiAgICBjb25zdCBncm91cCA9IG1hcFtkZXB0aF1cbiAgICBpZiAoIWdyb3VwW3R5cGVdKSB7XG4gICAgICBncm91cFt0eXBlXSA9IHt9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIGlmICghZ3JvdXBbdHlwZV1bcmVmXSkge1xuICAgICAgICBncm91cFt0eXBlXVtyZWZdID0gW11cbiAgICAgIH1cbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0ucHVzaChoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBoYW5kbGVyXG4gICAgfVxuICB9XG4gIGZsdXNoIChpc1RpbWVvdXQpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcC5zbGljZSgpXG4gICAgdGhpcy5tYXAubGVuZ3RoID0gMFxuICAgIG1hcC5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdyZXBlYXQnKVxuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdzaG93bicpXG4gICAgICBjYWxsVHlwZUxpc3QoZ3JvdXAsICdlbGVtZW50JylcbiAgICB9KVxuXG4gICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLnNsaWNlKClcbiAgICB0aGlzLmhvb2tzLmxlbmd0aCA9IDBcbiAgICBob29rcy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgZm4oKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aGlzLmZsdXNoKClcbiAgICB9XG4gIH1cbiAgdGhlbiAoZm4pIHtcbiAgICB0aGlzLmhvb2tzLnB1c2goZm4pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFR5cGVNYXAgKGdyb3VwLCB0eXBlKSB7XG4gIGNvbnN0IG1hcCA9IGdyb3VwW3R5cGVdXG4gIGZvciAoY29uc3QgcmVmIGluIG1hcCkge1xuICAgIG1hcFtyZWZdKClcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZUxpc3QgKGdyb3VwLCB0eXBlKSB7XG4gIGNvbnN0IG1hcCA9IGdyb3VwW3R5cGVdXG4gIGZvciAoY29uc3QgcmVmIGluIG1hcCkge1xuICAgIGNvbnN0IGxpc3QgPSBtYXBbcmVmXVxuICAgIGxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4geyBoYW5kbGVyKCkgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvZGVmYXVsdC9hcHAvZGlmZmVyLmpzIiwiZXhwb3J0IGNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL21hcC5qcyIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtcbiAgcmVmcmVzaCxcbiAgZGVzdHJveVxufSBmcm9tICcuLi9hcHAvY3RybCdcbmltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5pbXBvcnQgeyByZXNldFRhcmdldCB9IGZyb20gJy4uL2NvcmUvZGVwJ1xuXG4vKipcbiAqIEluaXQgY29uZmlnIGluZm9ybWF0aW9ucyBmb3IgV2VleCBmcmFtZXdvcmtcbiAqIEBwYXJhbSAge29iamVjdH0gY2ZnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChjZmcpIHtcbiAgY29uZmlnLkRvY3VtZW50ID0gY2ZnLkRvY3VtZW50XG4gIGNvbmZpZy5FbGVtZW50ID0gY2ZnLkVsZW1lbnRcbiAgY29uZmlnLkNvbW1lbnQgPSBjZmcuQ29tbWVudFxuICBjb25maWcuc2VuZFRhc2tzID0gY2ZnLnNlbmRUYXNrc1xuICBjb25maWcuTGlzdGVuZXIgPSBjZmcuTGlzdGVuZXJcbn1cblxuLyoqXG4gKiBSZWZyZXNoIGEgV2VleCBpbnN0YW5jZSB3aXRoIGRhdGEuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoSW5zdGFuY2UgKGlkLCBkYXRhKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaWRdXG4gIGxldCByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gcmVmcmVzaChpbnN0YW5jZSwgZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogRGVzdHJveSBhIFdlZXggaW5zdGFuY2UuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95SW5zdGFuY2UgKGlkKSB7XG4gIHJlc2V0VGFyZ2V0KClcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICBkZXN0cm95KGluc3RhbmNlKVxuICBkZWxldGUgaW5zdGFuY2VNYXBbaWRdXG4gIHJldHVybiBpbnN0YW5jZU1hcFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbGlmZS5qcyIsImltcG9ydCBWbSBmcm9tICcuLi92bSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtcbiAgaW5pdE1vZHVsZXMsXG4gIGluaXRNZXRob2RzXG59IGZyb20gJy4uL2FwcC9yZWdpc3RlcidcblxuY29uc3Qge1xuICBuYXRpdmVDb21wb25lbnRNYXBcbn0gPSBjb25maWdcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgbmFtZSBvZiBlYWNoIG5hdGl2ZSBjb21wb25lbnQuXG4gKiBAcGFyYW0gIHthcnJheX0gY29tcG9uZW50cyBhcnJheSBvZiBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudHMgKGNvbXBvbmVudHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29tcG9uZW50cykpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gcmVnaXN0ZXIgKG5hbWUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYXRpdmVDb21wb25lbnRNYXBbbmFtZV0gPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG5hbWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmF0aXZlQ29tcG9uZW50TWFwW25hbWUudHlwZV0gPSBuYW1lXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBuYW1lIGFuZCBtZXRob2RzIG9mIGVhY2ggbW9kdWxlLlxuICogQHBhcmFtICB7b2JqZWN0fSBtb2R1bGVzIGEgb2JqZWN0IG9mIG1vZHVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlcyAobW9kdWxlcykge1xuICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdvYmplY3QnKSB7XG4gICAgaW5pdE1vZHVsZXMobW9kdWxlcylcbiAgfVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBuYW1lIGFuZCBtZXRob2RzIG9mIGVhY2ggYXBpLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcGlzIGEgb2JqZWN0IG9mIGFwaXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyAobWV0aG9kcykge1xuICBpZiAodHlwZW9mIG1ldGhvZHMgPT09ICdvYmplY3QnKSB7XG4gICAgaW5pdE1ldGhvZHMoVm0sIG1ldGhvZHMpXG4gIH1cbn1cblxuLy8gQHRvZG86IEhhY2sgZm9yIHRoaXMgZnJhbWV3b3JrIG9ubHkuIFdpbGwgYmUgcmUtZGVzaWduZWQgb3IgcmVtb3ZlZCBsYXRlci5cbmdsb2JhbC5yZWdpc3Rlck1ldGhvZHMgPSByZWdpc3Rlck1ldGhvZHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL3JlZ2lzdGVyLmpzIiwiaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcbmltcG9ydCB7XG4gIGZpcmVFdmVudCxcbiAgY2FsbGJhY2tcbn0gZnJvbSAnLi4vYXBwL2N0cmwnXG5cbmNvbnN0IGpzSGFuZGxlcnMgPSB7XG4gIGZpcmVFdmVudDogKGlkLCAuLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIGZpcmVFdmVudChpbnN0YW5jZU1hcFtpZF0sIC4uLmFyZ3MpXG4gIH0sXG4gIGNhbGxiYWNrOiAoaWQsIC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gY2FsbGJhY2soaW5zdGFuY2VNYXBbaWRdLCAuLi5hcmdzKVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0IGNhbGxzIGZyb20gbmF0aXZlIChldmVudCBvciBjYWxsYmFjaykuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7YXJyYXl9IHRhc2tzIGxpc3Qgd2l0aCBgbWV0aG9kYCBhbmQgYGFyZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVGFza3MgKGlkLCB0YXNrcykge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBpZiAoaW5zdGFuY2UgJiYgQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW11cbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0ganNIYW5kbGVyc1t0YXNrLm1ldGhvZF1cbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4udGFzay5hcmdzXVxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChpZClcbiAgICAgICAgcmVzdWx0cy5wdXNoKGhhbmRsZXIoLi4uYXJncykpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiIG9yIHRhc2tzYClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL2JyaWRnZS5qcyIsImltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5pbXBvcnQge1xuICBnZXRSb290RWxlbWVudFxufSBmcm9tICcuLi9hcHAvY3RybCdcblxuLyoqXG4gKiBHZXQgYSB3aG9sZSBlbGVtZW50IHRyZWUgb2YgYW4gaW5zdGFuY2UgZm9yIGRlYnVnZ2luZy5cbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge29iamVjdH0gYSB2aXJ0dWFsIGRvbSB0cmVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290IChpZCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IGdldFJvb3RFbGVtZW50KGluc3RhbmNlKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL21pc2MuanMiLCJsZXQgZnJhbWV3b3Jrc1xuXG5jb25zdCB2ZXJzaW9uUmVnRXhwID0gL15cXHMqXFwvXFwvICooXFx7W15cXH1dKlxcfSkgKlxccj9cXG4vXG5cbi8qKlxuICogRGV0ZWN0IGEgSlMgQnVuZGxlIGNvZGUgYW5kIG1ha2Ugc3VyZSB3aGljaCBmcmFtZXdvcmsgaXQncyBiYXNlZCB0by4gRWFjaCBKU1xuICogQnVuZGxlIHNob3VsZCBtYWtlIHN1cmUgdGhhdCBpdCBzdGFydHMgd2l0aCBhIGxpbmUgb2YgSlNPTiBjb21tZW50IGFuZCBpc1xuICogbW9yZSB0aGF0IG9uZSBsaW5lLlxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNoZWNrVmVyc2lvbiAoY29kZSkge1xuICBsZXQgaW5mb1xuICBjb25zdCByZXN1bHQgPSB2ZXJzaW9uUmVnRXhwLmV4ZWMoY29kZSlcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICBpbmZvID0gSlNPTi5wYXJzZShyZXN1bHRbMV0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiBpbmZvXG59XG5cbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuLyoqXG4gKiBDaGVjayB3aGljaCBmcmFtZXdvcmsgYSBjZXJ0YWluIEpTIEJ1bmRsZSBjb2RlIGJhc2VkIHRvLiBBbmQgY3JlYXRlIGluc3RhbmNlXG4gKiBieSB0aGlzIGZyYW1ld29yay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlIChpZCwgY29kZSwgY29uZmlnLCBkYXRhKSB7XG4gIGxldCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gIGlmICghaW5mbykge1xuICAgIGluZm8gPSBjaGVja1ZlcnNpb24oY29kZSkgfHwge31cbiAgICBpZiAoIWZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICBpbmZvLmZyYW1ld29yayA9ICdXZWV4J1xuICAgIH1cbiAgICBpbnN0YW5jZU1hcFtpZF0gPSBpbmZvXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9XG4gICAgY29uZmlnLmJ1bmRsZVZlcnNpb24gPSBpbmZvLnZlcnNpb25cbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjcmVhdGUgYW4gJHtpbmZvLmZyYW1ld29ya31AJHtjb25maWcuYnVuZGxlVmVyc2lvbn0gaW5zdGFuY2UgZnJvbSAke2NvbmZpZy5idW5kbGVWZXJzaW9ufWApXG4gICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdLmNyZWF0ZUluc3RhbmNlKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxufVxuXG5jb25zdCBtZXRob2RzID0ge1xuICBjcmVhdGVJbnN0YW5jZVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIG1ldGhvZHMgd2hpY2ggaW5pdCBlYWNoIGZyYW1ld29ya3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBnZW5Jbml0IChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gICAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgICBpZiAoZnJhbWV3b3JrICYmIGZyYW1ld29ya1ttZXRob2ROYW1lXSkge1xuICAgICAgICBmcmFtZXdvcmtbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlciBtZXRob2RzIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqL1xuZnVuY3Rpb24gZ2VuSW5zdGFuY2UgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgaWQgPSBhcmdzWzBdXG4gICAgY29uc3QgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICAgIGlmIChpbmZvICYmIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdKSB7XG4gICAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya11bbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG59XG5cbi8qKlxuICogQWRhcHQgc29tZSBsZWdhY3kgbWV0aG9kKHMpIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGluc3RhbmNlLiBUaGVzZVxuICogbWV0aG9kcyBzaG91bGQgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBsYXRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmF0aXZlTWV0aG9kTmFtZVxuICovXG5mdW5jdGlvbiBhZGFwdEluc3RhbmNlIChtZXRob2ROYW1lLCBuYXRpdmVNZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbmF0aXZlTWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0IChjb25maWcpIHtcbiAgZnJhbWV3b3JrcyA9IGNvbmZpZy5mcmFtZXdvcmtzIHx8IHt9XG5cbiAgLy8gSW5pdCBlYWNoIGZyYW1ld29yayBieSBgaW5pdGAgbWV0aG9kIGFuZCBgY29uZmlnYCB3aGljaCBjb250YWlucyB0aHJlZVxuICAvLyB2aXJ0dWFsLURPTSBDbGFzczogYERvY3VtZW50YCwgYEVsZW1lbnRgICYgYENvbW1lbnRgLCBhbmQgYSBKUyBicmlkZ2UgbWV0aG9kOlxuICAvLyBgc2VuZFRhc2tzKC4uLmFyZ3MpYC5cbiAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICBjb25zdCBmcmFtZXdvcmsgPSBmcmFtZXdvcmtzW25hbWVdXG4gICAgZnJhbWV3b3JrLmluaXQoY29uZmlnKVxuICB9XG5cbiAgLy8gQHRvZG86IFRoZSBtZXRob2QgYHJlZ2lzdGVyTWV0aG9kc2Agd2lsbCBiZSByZS1kZXNpZ25lZCBvciByZW1vdmVkIGxhdGVyLlxuICA7IFsncmVnaXN0ZXJDb21wb25lbnRzJywgJ3JlZ2lzdGVyTW9kdWxlcycsICdyZWdpc3Rlck1ldGhvZHMnXS5mb3JFYWNoKGdlbkluaXQpXG5cbiAgOyBbJ2Rlc3Ryb3lJbnN0YW5jZScsICdyZWZyZXNoSW5zdGFuY2UnLCAncmVjZWl2ZVRhc2tzJywgJ2dldFJvb3QnXS5mb3JFYWNoKGdlbkluc3RhbmNlKVxuXG4gIGFkYXB0SW5zdGFuY2UoJ3JlY2VpdmVUYXNrcycsICdjYWxsSlMnKVxuXG4gIHJldHVybiBtZXRob2RzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9ydW50aW1lL2luaXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYW1lXCI6IFwid2VleFwiLFxuXHRcInZlcnNpb25cIjogXCIwLjQuMFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiQSBmcmFtZXdvcmsgZm9yIGJ1aWxkaW5nIE1vYmlsZSBjcm9zcy1wbGF0Zm9ybSBVSVwiLFxuXHRcImxpY2Vuc2VcIjogXCJBcGFjaGUtMi4wXCIsXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJnaXRAZ2l0aHViLmNvbTphbGliYWJhL3dlZXguZ2l0XCJcblx0fSxcblx0XCJob21lcGFnZVwiOiBcImh0dHA6Ly9hbGliYWJhLmdpdGh1Yi5pby93ZWV4L1wiLFxuXHRcImJ1Z3NcIjoge1xuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvd2VleC9pc3N1ZXNcIlxuXHR9LFxuXHRcInByaXZhdGVcIjogdHJ1ZSxcblx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XCJ3ZWV4XCIsXG5cdFx0XCJoeWJyaWRcIixcblx0XHRcIndlYmNvbXBvbmVudFwiLFxuXHRcdFwiYXBwZnJhbWV3b3JrXCIsXG5cdFx0XCJtdnZtXCIsXG5cdFx0XCJqYXZhc2NyaXB0XCIsXG5cdFx0XCJ3ZWJraXRcIixcblx0XHRcInY4XCIsXG5cdFx0XCJqc2NvcmVcIixcblx0XHRcImh0bWw1XCIsXG5cdFx0XCJhbmRyb2lkXCIsXG5cdFx0XCJpb3NcIixcblx0XHRcInl1bm9zXCJcblx0XSxcblx0XCJlbmdpbmVzXCI6IHtcblx0XHRcIm5vZGVcIjogXCI+PTRcIlxuXHR9LFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwicG9zdGluc3RhbGxcIjogXCJiYXNoIC4vYmluL2luc3RhbGwtaG9va3Muc2hcIixcblx0XHRcImJ1aWxkOmNvbmZpZ1wiOiBcIm5vZGUgYnVpbGQvY29uZmlnLmZyYW1ld29ya3MuanNcIixcblx0XHRcImJ1aWxkOmJyb3dzZXJcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suYnJvd3Nlci5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOmNvbW1vblwiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5jb21tb24uY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpuYXRpdmVcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2submF0aXZlLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGQ6ZXhhbXBsZXNcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suZXhhbXBsZXMuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDp0ZXN0XCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLnRlc3QuY29uZmlnLmpzXCIsXG5cdFx0XCJkaXN0OmJyb3dzZXJcIjogXCJucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbnBtIHJ1biBidWlsZDpjb21tb24gJiYgYmFzaCAuL2Jpbi9kaXN0LWJyb3dzZXIuc2hcIixcblx0XHRcImRpc3RcIjogXCJucG0gcnVuIGRpc3Q6YnJvd3NlclwiLFxuXHRcdFwiZGV2OmJyb3dzZXJcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay5icm93c2VyLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2Om5hdGl2ZVwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLm5hdGl2ZS5jb25maWcuanNcIixcblx0XHRcImRldjpleGFtcGxlc1wiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmV4YW1wbGVzLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2OnRlc3RcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay50ZXN0LmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGRcIjogXCJucG0gcnVuIGJ1aWxkOm5hdGl2ZSAmJiBucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbnBtIHJ1biBidWlsZDpleGFtcGxlcyAmJiBucG0gcnVuIGJ1aWxkOnRlc3RcIixcblx0XHRcImxpbnRcIjogXCJlc2xpbnQgaHRtbDVcIixcblx0XHRcInRlc3Q6dW5pdFwiOiBcIm1vY2hhIC0tY29tcGlsZXJzIGpzOmJhYmVsLWNvcmUvcmVnaXN0ZXIgaHRtbDUvdGVzdC91bml0LyovKi5qcyBodG1sNS90ZXN0L3VuaXQvKi8qLyouanNcIixcblx0XHRcInRlc3Q6Y292ZXJcIjogXCJiYWJlbC1ub2RlIG5vZGVfbW9kdWxlcy9pc3BhcnRhL2Jpbi9pc3BhcnRhIGNvdmVyIC0tcmVwb3J0IHRleHQgbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gLS1yZXBvcnRlciBkb3QgaHRtbDUvdGVzdC91bml0LyovKi5qcyBodG1sNS90ZXN0L3VuaXQvKi8qLyouanNcIixcblx0XHRcInRlc3Q6ZTJlXCI6IFwibnBtIHJ1biBidWlsZDpicm93c2VyICYmIG5vZGUgaHRtbDUvdGVzdC9lMmUvcnVubmVyLmpzXCIsXG5cdFx0XCJ0ZXN0XCI6IFwibnBtIHJ1biBidWlsZDpjb25maWcgJiYgbnBtIHJ1biBsaW50ICYmIG5wbSBydW4gdGVzdDpjb3ZlciAmJiBucG0gcnVuIHRlc3Q6ZTJlXCIsXG5cdFx0XCJzZXJ2ZVwiOiBcInNlcnZlIC4vIC1wIDEyNTgwXCIsXG5cdFx0XCJjbGVhbjpleGFtcGxlc1wiOiBcImVjaG8gXFxcIlxcXFwwMzNbMzY7MW1bQ2xlYW5dXFxcXDAzM1swbSBcXFxcMDMzWzMzbWV4YW1wbGVzXFxcXDAzM1swbVxcXCIgJiYgcm0gLXZyZiBleGFtcGxlcy9idWlsZC8qXCIsXG5cdFx0XCJjbGVhbjp0ZXN0XCI6IFwiZWNobyBcXFwiXFxcXDAzM1szNjsxbVtDbGVhbl1cXFxcMDMzWzBtIFxcXFwwMzNbMzNtdGVzdFxcXFwwMzNbMG1cXFwiICYmIHJtIC12cmYgdGVzdC9idWlsZC8qXCIsXG5cdFx0XCJjbGVhblwiOiBcIm5wbSBydW4gY2xlYW46ZXhhbXBsZXMgJiYgbnBtIHJ1biBjbGVhbjp0ZXN0XCIsXG5cdFx0XCJjb3B5OmpzXCI6IFwiY3AgLXZmIC4vZGlzdC9uYXRpdmUuanMgLi9hbmRyb2lkL3Nkay9hc3NldHMvbWFpbi5qc1wiLFxuXHRcdFwiY29weTpleGFtcGxlc1wiOiBcInJtIC1yZiAuL2FuZHJvaWQvcGxheWdyb3VuZC9hcHAvc3JjL21haW4vYXNzZXRzLyogJiYgY3AgLXZyZiAuL2V4YW1wbGVzL2J1aWxkLyogLi9hbmRyb2lkL3BsYXlncm91bmQvYXBwL3NyYy9tYWluL2Fzc2V0cy9cIixcblx0XHRcImNvcHlcIjogXCJucG0gcnVuIGNvcHk6anMgJiYgbnBtIHJ1biBjb3B5OmV4YW1wbGVzXCJcblx0fSxcblx0XCJzdWJ2ZXJzaW9uXCI6IHtcblx0XHRcImJyb3dzZXJcIjogXCIwLjMuMFwiLFxuXHRcdFwiZnJhbWV3b3JrXCI6IFwiMC4xNi4xOFwiLFxuXHRcdFwidHJhbnNmb3JtZXJcIjogXCI+PTAuMS41IDwwLjRcIlxuXHR9LFxuXHRcImRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJhbmltYXRpb25qc1wiOiBcIl4wLjEuNVwiLFxuXHRcdFwiY29yZS1qc1wiOiBcIl4yLjQuMFwiLFxuXHRcdFwiY3ViaWNiZXppZXJcIjogXCJeMC4xLjFcIixcblx0XHRcImVudmRcIjogXCJeMC4xLjFcIixcblx0XHRcImh0dHB1cmxcIjogXCJeMC4xLjFcIixcblx0XHRcImxhenlpbWdcIjogXCJeMC4xLjJcIixcblx0XHRcIm1vZGFsc1wiOiBcIl4wLjEuNVwiLFxuXHRcdFwic2Nyb2xsLXRvXCI6IFwiMC4wLjJcIixcblx0XHRcInNlbXZlclwiOiBcIl41LjEuMFwiLFxuXHRcdFwid2VleC1jb21wb25lbnRzXCI6IFwiXjAuMi4wXCJcblx0fSxcblx0XCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYmFiZWwtY2xpXCI6IFwifjYuNC41XCIsXG5cdFx0XCJiYWJlbC1sb2FkZXJcIjogXCJeNi4yLjRcIixcblx0XHRcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZVwiOiBcIl42LjE1LjBcIixcblx0XHRcImJhYmVsLXByZXNldC1lczIwMTVcIjogXCJeNi45LjBcIixcblx0XHRcImJhYmVsLXJ1bnRpbWVcIjogXCJeNi4xMS42XCIsXG5cdFx0XCJjaGFpXCI6IFwiXjMuNS4wXCIsXG5cdFx0XCJjaHJvbWVkcml2ZXJcIjogXCJeMi4yMS4yXCIsXG5cdFx0XCJjcm9zcy1zcGF3blwiOiBcIl40LjAuMFwiLFxuXHRcdFwiY3NzLWxvYWRlclwiOiBcIl4wLjIzLjFcIixcblx0XHRcImVzbGludFwiOiBcIl4yLjExLjFcIixcblx0XHRcImh0dHAtc2VydmVyXCI6IFwiXjAuOS4wXCIsXG5cdFx0XCJpc3BhcnRhXCI6IFwiXjQuMC4wXCIsXG5cdFx0XCJpc3RhbmJ1bFwiOiBcIl4wLjQuM1wiLFxuXHRcdFwianNvbi1sb2FkZXJcIjogXCJeMC41LjRcIixcblx0XHRcIm1vY2hhXCI6IFwiXjIuNS4zXCIsXG5cdFx0XCJuaWdodHdhdGNoXCI6IFwiXjAuOS40XCIsXG5cdFx0XCJwaGFudG9tanMtcHJlYnVpbHRcIjogXCJeMi4xLjdcIixcblx0XHRcInNlbGVuaXVtLXNlcnZlclwiOiBcIjIuNTMuMVwiLFxuXHRcdFwic2VydmVcIjogXCJeMS40LjBcIixcblx0XHRcInNpbm9uXCI6IFwiXjEuMTcuNFwiLFxuXHRcdFwic2lub24tY2hhaVwiOiBcIl4yLjguMFwiLFxuXHRcdFwic3R5bGUtbG9hZGVyXCI6IFwiXjAuMTMuMVwiLFxuXHRcdFwidWdsaWZ5LWpzXCI6IFwiXjIuNi40XCIsXG5cdFx0XCJ3ZWJwYWNrXCI6IFwiXjEuMTMuMVwiLFxuXHRcdFwid2VleC1sb2FkZXJcIjogXCJeMC4zLjFcIlxuXHR9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZS5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFRoZSBhcGkgZm9yIGludm9raW5nIHdpdGggXCIkXCIgcHJlZml4XG4gKi9cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwXG59ID0gY29uZmlnXG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogY29tbW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgJHZtIGluc3RlYWRcbiAqIGZpbmQgdGhlIHZtIGJ5IGlkXG4gKiBOb3RlOiB0aGVyZSBpcyBvbmx5IG9uZSBpZCBpbiB3aG9sZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1ZtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gJCAoaWQpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgVm0jJHZtIGluc3RlYWQnKVxuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLnZtXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ29tcG9uZW50TWV0aG9kcyAoYXBwLCBlbCkge1xuICBpZiAoZWwgJiYgZWwudHlwZSkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5hdGl2ZUNvbXBvbmVudE1hcFtlbC50eXBlXVxuICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50Lm1ldGhvZHMpIHtcbiAgICAgIGNvbXBvbmVudC5tZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgICBlbFttZXRob2RdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICBhcHAuY2FsbFRhc2tzKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LnR5cGUsXG4gICAgICAgICAgICByZWY6IGVsLnJlZixcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlbFxufVxuXG4vKipcbiAqIGZpbmQgdGhlIGVsZW1lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRlbCAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gYWRkQ29tcG9uZW50TWV0aG9kcyhpbmZvLnZtLl9hcHAgfHwge30sIGluZm8uZWwpXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSB2bSBvZiB0aGUgY3VzdG9tIGNvbXBvbmVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR2bSAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogRmlyZSB3aGVuIGRpZmZlciByZW5kZXJpbmcgZmluaXNoZWRcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRyZW5kZXJUaGVuIChmbikge1xuICBjb25zdCBhcHAgPSB0aGlzLl9hcHBcbiAgY29uc3QgZGlmZmVyID0gYXBwLmRpZmZlclxuICByZXR1cm4gZGlmZmVyLnRoZW4oKCkgPT4ge1xuICAgIGZuKClcbiAgfSlcbn1cblxuLyoqXG4gKiBzY3JvbGwgYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWQgaW50byB2aWV3LFxuICogbW9yZW92ZXIgc3BlY2lmeSBhIG51bWJlciBvZiBvZmZzZXQgb3B0aW9uYWxseVxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7bnVtYmVyfSBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzY3JvbGxUbyAoaWQsIG9mZnNldCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzY3JvbGxUbyBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2RvbVxcJyknICtcbiAgICAgICAgICAnLnNjcm9sbFRvKGVsLCBvcHRpb25zKVwiIGluc3RlYWQnKVxuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwpIHtcbiAgICBjb25zdCBkb20gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZG9tJylcbiAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLnJlZiwgeyBvZmZzZXQ6IG9mZnNldCB9KVxuICB9XG59XG5cbi8qKlxuICogcGVyZm9ybSB0cmFuc2l0aW9uIGFuaW1hdGlvbiBvbiBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZFxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9uc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuc3R5bGVzXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5kdXJhdGlvbihtcylcbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy50aW1pbmdGdW5jdGlvbl1cbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy5kZWxheT0wKG1zKV1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHRyYW5zaXRpb24gKGlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnN0eWxlcykge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKVxuICAgIGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLnJlZiwgb3B0aW9ucywgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKGVsLCBvcHRpb25zLnN0eWxlcylcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGdldCBzb21lIGNvbmZpZ1xuICogQHJldHVybiB7b2JqZWN0fSBzb21lIGNvbmZpZyBmb3IgYXBwIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYnVuZGxlVXJsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRlYnVnXG4gKiBAcHJvcGVydHkge29iamVjdH0gZW52XG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LndlZXhWZXJzaW9uKGV4LiAxLjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwTmFtZShleC4gVEIvVE0pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcFZlcnNpb24oZXguIDUuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5wbGF0Zm9ybShleC4gaU9TL0FuZHJvaWQpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52Lm9zVmVyc2lvbihleC4gNy4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmRldmljZU1vZGVsICoqbmF0aXZlIG9ubHkqKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5bZGV2aWNlV2lkdGg9NzUwXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5kZXZpY2VIZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRDb25maWcgKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGV4dGVuZCh7XG4gICAgZW52OiBnbG9iYWwuV1hFbnZpcm9ubWVudCB8fCB7fVxuICB9LCB0aGlzLl9hcHAub3B0aW9ucylcbiAgaWYgKHR5cG9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gdGhlIGNhbGxiYWNrIG9mIFZtIyRnZXRDb25maWcoY2FsbGJhY2spIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3RoaXMgYXBpIG5vdyBjYW4gZGlyZWN0bHkgUkVUVVJOIGNvbmZpZyBpbmZvLicpXG4gICAgY2FsbGJhY2soY29uZmlnKVxuICB9XG4gIHJldHVybiBjb25maWdcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogcmVxdWVzdCBuZXR3b3JrIHZpYSBodHRwIHByb3RvY29sXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZW5kSHR0cCAocGFyYW1zLCBjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZW5kSHR0cCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3N0cmVhbVxcJyknICtcbiAgICAgICAgICAnLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKVxuICBzdHJlYW0uc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogb3BlbiBhIHVybFxuICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRvcGVuVVJMICh1cmwpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkb3BlblVSTCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2V2ZW50XFwnKScgK1xuICAgICAgICAgICcub3BlblVSTCh1cmwpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGV2ZW50ID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2V2ZW50JylcbiAgZXZlbnQub3BlblVSTCh1cmwpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHNldCBhIHRpdGxlIGZvciBwYWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2V0VGl0bGUgKHRpdGxlKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNldFRpdGxlIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvcGFnZUluZm9cXCcpJyArXG4gICAgICAgICAgJy5zZXRUaXRsZSh0aXRsZSlcIiBpbnN0ZWFkJylcbiAgY29uc3QgcGFnZUluZm8gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgncGFnZUluZm8nKVxuICBwYWdlSW5mby5zZXRUaXRsZSh0aXRsZSlcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXCJyZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZScpIGluc3RlYWRcIlxuICogaW52b2tlIGEgbmF0aXZlIG1ldGhvZCBieSBzcGVjaWZpbmcgdGhlIG5hbWUgb2YgbW9kdWxlIGFuZCBtZXRob2RcbiAqIEBwYXJhbSAge3N0cmluZ30gbW9kdWxlTmFtZVxuICogQHBhcmFtICB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gIHsuLi4qfSB0aGUgcmVzdCBhcmd1bWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRjYWxsIChtb2R1bGVOYW1lLCBtZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGNhbGwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9tb2R1bGVOYW1lXFwnKVwiIGluc3RlYWQnKVxuICBjb25zdCBtb2R1bGUgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZShtb2R1bGVOYW1lKVxuICBpZiAobW9kdWxlICYmIG1vZHVsZVttZXRob2ROYW1lXSkge1xuICAgIG1vZHVsZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9kZWZhdWx0L2FwaS9tZXRob2RzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==