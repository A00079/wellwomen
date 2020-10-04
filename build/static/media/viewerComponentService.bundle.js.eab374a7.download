(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("lodash"), require("santa-components"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "lodash", "santa-components", "reactDOM"], factory);
	else if(typeof exports === 'object')
		exports["viewerComponentService"] = factory(require("react"), require("prop-types"), require("lodash"), require("santa-components"), require("react-dom"));
	else
		root["viewerComponentService"] = factory(root["React"], root["prop-types"], root["_"], root["santaComponents"], root["ReactDOM"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__31__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		41: 0,
/******/ 		38: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"43":"wixui.AddressInput","44":"wixui.BarChart","45":"wixui.BoltComponent","46":"wixui.Captcha","47":"wixui.CustomElement","48":"wixui.ImageX","49":"wixui.LineShareButton","50":"wixui.MusicPlayer","51":"wixui.Pagination","52":"wixui.ProgressBar","53":"wixui.RatingsDisplay","54":"wixui.RatingsInput","55":"wixui.RichTextBox","56":"wixui.SearchBox","57":"wixui.SelectionTagsList","58":"wixui.SignatureInput","59":"wixui.Slider","60":"wixui.StylableButton","61":"wixui.StylableHorizontalMenu","62":"wixui.StylableLine","63":"wixui.Tags","64":"wixui.TimePicker","65":"wixui.ToggleSwitch","66":"wixui.VideoPlayer"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-ui-santa/1.1350.0/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	/* runtime version: 3.10.0 */
/******/ 	function StylableRuntime(exports){
/******/ 	exports = exports || {};
/******/ 	function require(){return exports;};
/******/
/******/ 	(function(){/* source: cached-node-renderer.ts */
/******/ 	exports.CacheStyleNodeRenderer = void 0;
/******/ 	var CacheStyleNodeRenderer = /** @class */ (function () {
/******/ 	    function CacheStyleNodeRenderer(options) {
/******/ 	        var _this = this;
/******/ 	        this.options = options;
/******/ 	        this.create = function (stylesheet, key) {
/******/ 	            var node = _this.options.createElement('style');
/******/ 	            node.textContent = stylesheet.$css || '';
/******/ 	            node.setAttribute(_this.options.attrKey, key);
/******/ 	            node.setAttribute('st-depth', stylesheet.$depth + '');
/******/ 	            return node;
/******/ 	        };
/******/ 	        this.hasKey = function (node) { return node.hasAttribute(_this.options.attrKey); };
/******/ 	        this.update = function (stylesheet, node) {
/******/ 	            if (node.textContent !== stylesheet.$css) {
/******/ 	                node.textContent = stylesheet.$css || '';
/******/ 	            }
/******/ 	            return node;
/******/ 	        };
/******/ 	        this.renderKey = function (stylesheet) { return stylesheet.$id; };
/******/ 	    }
/******/ 	    return CacheStyleNodeRenderer;
/******/ 	}());
/******/ 	exports.CacheStyleNodeRenderer = CacheStyleNodeRenderer;
/******/ 	}());
/******/ 	(function(){/* source: keyed-list-renderer.ts */
/******/ 	exports.createDOMListRenderer = void 0;
/******/ 	function createDOMListRenderer(nodeRenderer) {
/******/ 	    var first;
/******/ 	    var nodes = {};
/******/ 	    var setNode = function (dataItem, node) { return (nodes[nodeRenderer.renderKey(dataItem)] = node); };
/******/ 	    var renderNode = function (dataItem) {
/******/ 	        var key = nodeRenderer.renderKey(dataItem);
/******/ 	        var node = nodes[key];
/******/ 	        return node
/******/ 	            ? nodeRenderer.update(dataItem, node)
/******/ 	            : setNode(dataItem, nodeRenderer.create(dataItem, key));
/******/ 	    };
/******/ 	    var render = function (container, data) {
/******/ 	        if (data === void 0) { data = []; }
/******/ 	        if (data.length) {
/******/ 	            var node = void 0;
/******/ 	            var next = first;
/******/ 	            for (var i = 0; i < data.length; i++) {
/******/ 	                node = renderNode(data[i]);
/******/ 	                if (node !== next) {
/******/ 	                    container.insertBefore(node, next || null);
/******/ 	                }
/******/ 	                else {
/******/ 	                    next = node.nextElementSibling;
/******/ 	                }
/******/ 	            }
/******/ 	            first = nodes[nodeRenderer.renderKey(data[0])];
/******/ 	            while (node.nextElementSibling) {
/******/ 	                if (nodeRenderer.hasKey(node.nextElementSibling)) {
/******/ 	                    container.removeChild(node.nextElementSibling);
/******/ 	                }
/******/ 	                else {
/******/ 	                    break;
/******/ 	                }
/******/ 	            }
/******/ 	        }
/******/ 	        else {
/******/ 	            while (first) {
/******/ 	                var next = first.nextElementSibling;
/******/ 	                container.removeChild(first);
/******/ 	                first = next && nodeRenderer.hasKey(next) ? next : undefined;
/******/ 	            }
/******/ 	        }
/******/ 	    };
/******/ 	    return { render: render, nodes: nodes };
/******/ 	}
/******/ 	exports.createDOMListRenderer = createDOMListRenderer;
/******/ 	}());
/******/ 	(function(){/* source: css-runtime-renderer.ts */
/******/ 	exports.$ = exports.RuntimeRenderer = void 0;
/******/ 	var cached_node_renderer_1 = require("./cached-node-renderer");
/******/ 	var keyed_list_renderer_1 = require("./keyed-list-renderer");
/******/ 	var RuntimeRenderer = /** @class */ (function () {
/******/ 	    function RuntimeRenderer() {
/******/ 	        var _this = this;
/******/ 	        this.styles = [];
/******/ 	        this.stylesMap = {};
/******/ 	        this.renderer = null;
/******/ 	        this.window = null;
/******/ 	        this.id = null;
/******/ 	        this.update = function () {
/******/ 	            if (_this.renderer) {
/******/ 	                _this.renderer.render(_this.window.document.head, _this.styles);
/******/ 	            }
/******/ 	        };
/******/ 	    }
/******/ 	    RuntimeRenderer.prototype.init = function (_window) {
/******/ 	        if (this.window || !_window) {
/******/ 	            return;
/******/ 	        }
/******/ 	        _window.__stylable_renderer_global_counter =
/******/ 	            _window.__stylable_renderer_global_counter || 0;
/******/ 	        this.id = _window.__stylable_renderer_global_counter++;
/******/ 	        this.window = _window;
/******/ 	        this.renderer = keyed_list_renderer_1.createDOMListRenderer(new cached_node_renderer_1.CacheStyleNodeRenderer({
/******/ 	            attrKey: 'st-id' + (this.id ? '-' + this.id : ''),
/******/ 	            createElement: _window.document.createElement.bind(_window.document),
/******/ 	        }));
/******/ 	        this.update();
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.onRegister = function () {
/******/ 	        if (this.window) {
/******/ 	            this.window.requestAnimationFrame(this.update);
/******/ 	        }
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.register = function (stylesheet) {
/******/ 	        var registered = this.stylesMap[stylesheet.$id];
/******/ 	        if (registered) {
/******/ 	            this.removeStyle(registered);
/******/ 	        }
/******/ 	        var i = this.findDepthIndex(stylesheet.$depth);
/******/ 	        this.styles.splice(i + 1, 0, stylesheet);
/******/ 	        this.stylesMap[stylesheet.$id] = stylesheet;
/******/ 	        this.onRegister();
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.removeStyle = function (stylesheet) {
/******/ 	        var i = this.styles.indexOf(stylesheet);
/******/ 	        if (~i) {
/******/ 	            this.styles.splice(i, 1);
/******/ 	        }
/******/ 	        delete this.stylesMap[stylesheet.$id];
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.findDepthIndex = function (depth) {
/******/ 	        var index = this.styles.length;
/******/ 	        while (index--) {
/******/ 	            var stylesheet = this.styles[index];
/******/ 	            if (stylesheet.$depth <= depth) {
/******/ 	                return index;
/******/ 	            }
/******/ 	        }
/******/ 	        return index;
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.getStyles = function (ids, sortIndexes) {
/******/ 	        var _this = this;
/******/ 	        return this.sortStyles(ids.map(function (id) { return _this.stylesMap[id]; }), sortIndexes);
/******/ 	    };
/******/ 	    RuntimeRenderer.prototype.sortStyles = function (styles, sortIndexes) {
/******/ 	        var _this = this;
/******/ 	        if (sortIndexes === void 0) { sortIndexes = false; }
/******/ 	        var s = styles.slice();
/******/ 	        if (sortIndexes) {
/******/ 	            s.sort(function (a, b) {
/******/ 	                return _this.styles.indexOf(a) - _this.styles.indexOf(b);
/******/ 	            });
/******/ 	        }
/******/ 	        s.sort(function (a, b) {
/******/ 	            return a.$depth - b.$depth;
/******/ 	        });
/******/ 	        return s;
/******/ 	    };
/******/ 	    return RuntimeRenderer;
/******/ 	}());
/******/ 	exports.RuntimeRenderer = RuntimeRenderer;
/******/ 	// The $ export is a convention with the webpack plugin if changed both needs a change
/******/ 	exports.$ = new RuntimeRenderer();
/******/ 	}());
/******/ 	(function(){/* source: css-runtime-stylesheet.ts */
/******/ 	exports.createRenderable = exports.create = void 0;
/******/ 	var stateMiddleDelimiter = '-';
/******/ 	var booleanStateDelimiter = '--';
/******/ 	var stateWithParamDelimiter = '---';
/******/ 	function create(namespace, exports, css, depth, id, renderer) {
/******/ 	    var stylesheet = {
/******/ 	        namespace: namespace,
/******/ 	        classes: exports.classes,
/******/ 	        keyframes: exports.keyframes,
/******/ 	        vars: exports.vars,
/******/ 	        stVars: exports.stVars,
/******/ 	        cssStates: cssStates,
/******/ 	        style: style,
/******/ 	        st: style,
/******/ 	        $id: id,
/******/ 	        $depth: depth,
/******/ 	        $css: css,
/******/ 	    };
/******/ 	    if (renderer) {
/******/ 	        renderer.register(stylesheet);
/******/ 	    }
/******/ 	    function cssStates(stateMapping) {
/******/ 	        var classNames = [];
/******/ 	        for (var stateName in stateMapping) {
/******/ 	            var stateValue = stateMapping[stateName];
/******/ 	            var stateClass = createStateClass(stateName, stateValue);
/******/ 	            if (stateClass) {
/******/ 	                classNames.push(stateClass);
/******/ 	            }
/******/ 	        }
/******/ 	        return classNames.join(' ');
/******/ 	    }
/******/ 	    function createBooleanStateClassName(stateName) {
/******/ 	        return "" + namespace + booleanStateDelimiter + stateName;
/******/ 	    }
/******/ 	    function createStateWithParamClassName(stateName, param) {
/******/ 	        return "" + namespace + stateWithParamDelimiter + stateName + stateMiddleDelimiter + param.length + stateMiddleDelimiter + param.replace(/\s/gm, '_');
/******/ 	    }
/******/ 	    function createStateClass(stateName, stateValue) {
/******/ 	        if (stateValue === false ||
/******/ 	            stateValue === undefined ||
/******/ 	            stateValue === null ||
/******/ 	            stateValue !== stateValue // check NaN
/******/ 	        ) {
/******/ 	            return '';
/******/ 	        }
/******/ 	        if (stateValue === true) {
/******/ 	            // boolean state
/******/ 	            return createBooleanStateClassName(stateName);
/******/ 	        }
/******/ 	        var valueAsString = stateValue.toString();
/******/ 	        return createStateWithParamClassName(stateName, valueAsString);
/******/ 	    }
/******/ 	    function style() {
/******/ 	        var classNames = [];
/******/ 	        for (var i = 0; i < arguments.length; i++) {
/******/ 	            // eslint-disable-next-line prefer-rest-params
/******/ 	            var item = arguments[i];
/******/ 	            if (item) {
/******/ 	                if (typeof item === 'string') {
/******/ 	                    classNames[classNames.length] = item;
/******/ 	                }
/******/ 	                else if (i === 1) {
/******/ 	                    for (var stateName in item) {
/******/ 	                        var stateValue = item[stateName];
/******/ 	                        var stateClass = createStateClass(stateName, stateValue);
/******/ 	                        if (stateClass) {
/******/ 	                            classNames[classNames.length] = stateClass;
/******/ 	                        }
/******/ 	                    }
/******/ 	                }
/******/ 	            }
/******/ 	        }
/******/ 	        return classNames.join(' ');
/******/ 	    }
/******/ 	    return stylesheet;
/******/ 	}
/******/ 	exports.create = create;
/******/ 	function createRenderable(css, depth, id) {
/******/ 	    return { $css: css, $depth: depth, $id: id, $theme: true };
/******/ 	}
/******/ 	exports.createRenderable = createRenderable;
/******/ 	}());;
/******/ 	return exports;
/******/ 	};
/******/ 	(typeof self !== 'undefined' ? self : this)["__stylable3_runtime__"] = __webpack_require__.stylable = (typeof self !== 'undefined' ? self : this)["__stylable3_runtime__"] || StylableRuntime();
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1445);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!**************************************************************************************!*\
  !*** external {"amd":"react","commonjs":"react","commonjs2":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/*!**********************************************************************************************************!*\
  !*** external {"amd":"prop-types","commonjs":"prop-types","commonjs2":"prop-types","root":"prop-types"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 115:
/*!**********************!*\
  !*** ./overrides.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createOverrideMap = function createOverrideMap(requireFn) {
  return requireFn.keys().map(requireFn).reduce(function (overridesMap, compOverrideMetadata) {
    overridesMap[compOverrideMetadata.overrideViewerType] = compOverrideMetadata;
    return overridesMap;
  }, {});
};

var componentOverrides = createOverrideMap(__webpack_require__(116));

function getOverrides() {
  return componentOverrides;
}

module.exports = {
  getOverrides: getOverrides
};

/***/ }),

/***/ 116:
/*!************************************************!*\
  !*** ./components sync componentOverride\.js$ ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 116;

/***/ }),

/***/ 1445:
/*!**************************************!*\
  !*** ./components-service/viewer.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var BaseService = __webpack_require__(/*! ./base-service */ 156);

var compsToPackages = {
  'wixui.RichTextBox': function wixuiRichTextBox() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.RichTextBox */ 55).then(__webpack_require__.bind(null, /*! ../legacy/components/RichTextBox */ 679))]);
  },
  'wixui.ToggleSwitch': function wixuiToggleSwitch() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.ToggleSwitch */ 65).then(__webpack_require__.bind(null, /*! ../legacy/components/ToggleSwitch */ 678))]);
  },
  'wixui.Slider': function wixuiSlider() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.Slider */ 59).then(__webpack_require__.bind(null, /*! ../components/Slider */ 728))]);
  },
  'wixui.SearchBox': function wixuiSearchBox() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.SearchBox */ 56).then(__webpack_require__.bind(null, /*! ../components/SearchBox */ 733))]);
  },
  'wixui.Captcha': function wixuiCaptcha() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.Captcha */ 46).then(__webpack_require__.bind(null, /*! ../components/Captcha */ 722))]);
  },
  'wixui.Pagination': function wixuiPagination() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.Pagination */ 51).then(__webpack_require__.bind(null, /*! ../components/Pagination */ 717))]);
  },
  'wixui.AddressInput': function wixuiAddressInput() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.AddressInput */ 43).then(__webpack_require__.bind(null, /*! ../components/AddressInput */ 736))]);
  },
  'wixui.StylableLine': function wixuiStylableLine() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.StylableLine */ 62).then(__webpack_require__.bind(null, /*! ../components/StylableLine */ 748))]);
  },
  'wixui.Tags': function wixuiTags() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.Tags */ 63).then(__webpack_require__.bind(null, /*! ../components/Tags */ 719))]);
  },
  'wixui.RatingsInput': function wixuiRatingsInput() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.RatingsInput */ 54).then(__webpack_require__.bind(null, /*! ../components/RatingsInput */ 720))]);
  },
  'wixui.TimePicker': function wixuiTimePicker() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.TimePicker */ 64).then(__webpack_require__.bind(null, /*! ../components/TimePicker */ 741))]);
  },
  'wixui.RatingsDisplay': function wixuiRatingsDisplay() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.RatingsDisplay */ 53).then(__webpack_require__.bind(null, /*! ../components/RatingsDisplay */ 723))]);
  },
  'wixui.VideoPlayer': function wixuiVideoPlayer() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.VideoPlayer */ 66).then(__webpack_require__.bind(null, /*! ../components/VideoPlayer */ 713))]);
  },
  'wixui.LineShareButton': function wixuiLineShareButton() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.LineShareButton */ 49).then(__webpack_require__.bind(null, /*! ../components/LineShareButton */ 745))]);
  },
  'wixui.MusicPlayer': function wixuiMusicPlayer() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.MusicPlayer */ 50).then(__webpack_require__.bind(null, /*! ../components/MusicPlayer */ 658))]);
  },
  'wixui.StylableButton': function wixuiStylableButton() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.StylableButton */ 60).then(__webpack_require__.bind(null, /*! ../components/StylableButton */ 750))]);
  },
  'wixui.ProgressBar': function wixuiProgressBar() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.ProgressBar */ 52).then(__webpack_require__.bind(null, /*! ../components/ProgressBar */ 730))]);
  },
  'wixui.BarChart': function wixuiBarChart() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.BarChart */ 44).then(__webpack_require__.bind(null, /*! ../components/BarChart */ 725))]);
  },
  'wixui.CustomElementComponent': function wixuiCustomElementComponent() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.CustomElement */ 47).then(__webpack_require__.bind(null, /*! ../components/CustomElement */ 789))]);
  },
  'wixui.SignatureInput': function wixuiSignatureInput() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.SignatureInput */ 58).then(__webpack_require__.bind(null, /*! ../components/SignatureInput */ 787))]);
  },
  'wixui.SelectionTagsList': function wixuiSelectionTagsList() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.SelectionTagsList */ 57).then(__webpack_require__.bind(null, /*! ../components/SelectionTagsList */ 792))]);
  },
  'wixui.StylableHorizontalMenu': function wixuiStylableHorizontalMenu() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.StylableHorizontalMenu */ 61).then(__webpack_require__.bind(null, /*! ../components/StylableHorizontalMenu */ 794))]);
  },
  'wixui.ImageX': function wixuiImageX() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.ImageX */ 48).then(__webpack_require__.bind(null, /*! ../components/ImageX */ 797))]);
  },
  'wixui.BoltComponent': function wixuiBoltComponent() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.BoltComponent */ 45).then(__webpack_require__.bind(null, /*! ../components/BoltComponent */ 801))]);
  }
};
module.exports = new BaseService(compsToPackages);

/***/ }),

/***/ 156:
/*!********************************************!*\
  !*** ./components-service/base-service.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../overrides */ 115),
    getOverrides = _require.getOverrides;

function BaseService(_compsToPackages) {
  var compsToPackages = _compsToPackages;
  var overrides = getOverrides();

  function setWebpackPublicPath(baseUrl) {
    /**
     * NOTE: it could done without reg-exp, like this:
     *
     * const withEndSlash = baseUrl[baseUrl.length - 1] === '/';
     * __webpack_public_path__ = withEndSlash ? baseUrl + '/' : `${baseUrl}/`;
     *
     * but it some cases `baseUrl` may come with /// or even //// slashes at the end
     */
    __webpack_require__.p = (baseUrl + "/").replace(/\/+$/g, '/'); // eslint-disable-line
  }

  function loadComponent(componentType) {
    if (overrides[componentType]) {
      componentType = overrides[componentType].newComponentViewerType;
    }

    if (!exists(componentType)) {
      return Promise.reject(new Error("no such component " + componentType));
    }

    return compsToPackages[componentType]()["catch"](function (e) {
      //fix for ie11, doesn't load components
      console.error('coudn\'t load ' + componentType, e);
      return [{
        "default": {
          componentType: componentType,
          component: function component() {
            return null;
          },
          santaComponent: function santaComponent() {
            return null;
          },
          skin: {}
        }
      }];
    });
  }

  function exists(componentType, runningExperiments) {
    return !!compsToPackages[componentType] || overrides[componentType] && runningExperiments && runningExperiments[overrides[componentType].viewerExperimentKey] === 'new';
  }

  function loadAll(baseUrl) {
    setWebpackPublicPath(baseUrl);
    return Promise.all(Object.keys(compsToPackages).map(loadComponent));
  }

  function load(componentType, baseUrl) {
    setWebpackPublicPath(baseUrl);
    return loadComponent(componentType);
  }

  return {
    exists: exists,
    loadAll: loadAll,
    load: load
  };
}

module.exports = BaseService;

/***/ }),

/***/ 3:
/*!*************************************************************************************!*\
  !*** external {"amd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 31:
/*!****************************************************************************************************!*\
  !*** external {"amd":"reactDOM","commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__31__;

/***/ }),

/***/ 4:
/*!*********************************************************************************************************************************!*\
  !*** external {"amd":"santa-components","commonjs":"santa-components","commonjs2":"santa-components","root":"santaComponents"} ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/*! exports used: HOC, SantaComponentHelperMethods, constants, mixins, santaTypesDefinitions, utils */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ })

/******/ });
});
//# sourceMappingURL=viewerComponentService.bundle.js.map