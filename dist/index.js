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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html, body {\n  height: 100vh;\n  margin: 0; }\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ddd;\n  color: #333;\n  font-family: Avenir; }\n\n.row {\n  display: flex;\n  margin: 2px 0; }\n\n.cell {\n  margin: 0 2px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  color: #888;\n  cursor: pointer; }\n\n.cell_empty {\n  border-radius: 50%;\n  border: 2px solid #333;\n  background: #333; }\n\n.cell_filled {\n  border-radius: 50%;\n  border: 2px solid #333;\n  background: #3A32ED; }\n\n.cell_invalid {\n  border-radius: 50%;\n  border: 2px solid #333;\n  border-color: transparent;\n  background: transparent; }\n\n.cell_selected {\n  border-color: #ED3A32;\n  background: #9490f5;\n  color: #333; }\n\n.cell_highlighted {\n  border-color: chartreuse; }\n\n.move-list {\n  position: fixed;\n  bottom: 1em;\n  left: 1em;\n  background: white;\n  padding: 8px;\n  border-radius: 4px;\n  list-style: none;\n  font-family: monospace;\n  font-size: 18px; }\n\n.selected-move-list {\n  left: auto;\n  right: 1em; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: BOARD_CONTAINER, MOVE_LIST, SELECTED_MOVE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_CONTAINER", function() { return BOARD_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_LIST", function() { return MOVE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_MOVE_LIST", function() { return SELECTED_MOVE_LIST; });
const BOARD_CONTAINER = '.board';
const MOVE_LIST = '.move-list';
const SELECTED_MOVE_LIST = '.selected-move-list';


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/_ */ "./src/util/_.ts");
/* harmony import */ var _ui_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/handlers */ "./src/ui/handlers.ts");
/* harmony import */ var _logic_moveFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/moveFilters */ "./src/logic/moveFilters.ts");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/board */ "./src/models/board.ts");
/* harmony import */ var _models_MoveList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/MoveList */ "./src/models/MoveList.ts");
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render/render */ "./src/render/render.ts");
/* harmony import */ var _state_State__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/State */ "./src/state/State.ts");








const grid = `
xxx111xxx
xxx111xxx
xx11111xx
111111111
111101111
111111111
xx11110xx
xxx111xxx
xxx101xxx
`;
function renderAllTheThings() {
    _util___WEBPACK_IMPORTED_MODULE_1__["Maybe"].from(_state_State__WEBPACK_IMPORTED_MODULE_7__["default"])
        .get('gameBoard')
        .map(_logic_moveFilters__WEBPACK_IMPORTED_MODULE_3__["assembleCartesianJumpMoves"])
        .get('moves')
        .map(_render_render__WEBPACK_IMPORTED_MODULE_6__["renderMyMoveList"]);
    _util___WEBPACK_IMPORTED_MODULE_1__["Maybe"].from(_state_State__WEBPACK_IMPORTED_MODULE_7__["default"])
        .getPath('gameBoard.grid')
        .map(_models_board__WEBPACK_IMPORTED_MODULE_4__["getSelected"])
        .map(Object(_logic_moveFilters__WEBPACK_IMPORTED_MODULE_3__["assembleCartesianMovesFromSelected"])(_state_State__WEBPACK_IMPORTED_MODULE_7__["default"].gameBoard))
        .get('moves')
        .map(_render_render__WEBPACK_IMPORTED_MODULE_6__["renderSelectedMoveList"]);
    _util___WEBPACK_IMPORTED_MODULE_1__["Maybe"].from(_state_State__WEBPACK_IMPORTED_MODULE_7__["default"])
        .get('gameBoard')
        .map(_render_render__WEBPACK_IMPORTED_MODULE_6__["renderMyBoard"]);
}
_state_State__WEBPACK_IMPORTED_MODULE_7__["default"].registerRenderFunction(renderAllTheThings);
_state_State__WEBPACK_IMPORTED_MODULE_7__["default"].gameBoard = new _models_board__WEBPACK_IMPORTED_MODULE_4__["default"](grid);
_state_State__WEBPACK_IMPORTED_MODULE_7__["default"].possibleMoves = new _models_MoveList__WEBPACK_IMPORTED_MODULE_5__["default"]();
_state_State__WEBPACK_IMPORTED_MODULE_7__["default"].possibleMovesFromSelected = [];
Object(_ui_handlers__WEBPACK_IMPORTED_MODULE_2__["default"])();


/***/ }),

/***/ "./src/logic/moveFilters.ts":
/*!**********************************!*\
  !*** ./src/logic/moveFilters.ts ***!
  \**********************************/
/*! exports provided: moveIsValid, assembleMovesList, assembleMovesFromSelected, assembleCartesianMovesFromSelected, assembleCartesianJumpMoves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveIsValid", function() { return moveIsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assembleMovesList", function() { return assembleMovesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assembleMovesFromSelected", function() { return assembleMovesFromSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assembleCartesianMovesFromSelected", function() { return assembleCartesianMovesFromSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assembleCartesianJumpMoves", function() { return assembleCartesianJumpMoves; });
/* harmony import */ var _util___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/_ */ "./src/util/_.ts");
/* harmony import */ var _models_MoveList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/MoveList */ "./src/models/MoveList.ts");
/* harmony import */ var _models_Geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Geometry */ "./src/models/Geometry.ts");
/* harmony import */ var _models_Move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Move */ "./src/models/Move.ts");




const moveIsValid = (moveFunc) => (board) => (position) => {
    const { x: toX, y: toY } = moveFunc(position.x, position.y);
    const { x: toToX, y: toToY } = moveFunc(toX, toY);
    const nextCell = _util___WEBPACK_IMPORTED_MODULE_0__["Maybe"].from(board)
        .get(`grid`)
        .get(`${toY}`)
        .get(`${toX}`)
        .get(`value`)
        .join();
    const nextNextCell = _util___WEBPACK_IMPORTED_MODULE_0__["Maybe"].from(board)
        .get(`grid`)
        .get(`${toToY}`)
        .get(`${toToX}`)
        .get(`value`)
        .join();
    if (nextCell === "1" && nextNextCell === "0") {
        return true;
    }
    return false;
};
const assembleMovesList = (geometry) => (board) => {
    const moves = Object.keys(geometry).map(moveName => {
        return board.grid.map(row => {
            return row.map(cell => {
                if (cell.value === "1") {
                    if (moveIsValid(geometry[moveName])(board)(cell)) {
                        const { x: toX, y: toY } = geometry[moveName](cell.x, cell.y);
                        return new _models_Move__WEBPACK_IMPORTED_MODULE_3__["default"]({ x: cell.x, y: cell.y }, geometry[moveName](toX, toY));
                    }
                }
            });
        });
    });
    const flattenedMoves = moves.flat(2).filter(el => typeof el !== 'undefined');
    return new _models_MoveList__WEBPACK_IMPORTED_MODULE_1__["default"](flattenedMoves);
};
const assembleMovesFromSelected = (geometry) => (board) => (selectedStone) => {
    const { x, y } = selectedStone;
    const moves = new _models_MoveList__WEBPACK_IMPORTED_MODULE_1__["default"](Object.values(geometry).map(moveFunc => {
        if (moveIsValid(moveFunc)(board)(selectedStone)) {
            const { x: toX, y: toY } = moveFunc(x, y);
            return new _models_Move__WEBPACK_IMPORTED_MODULE_3__["default"](selectedStone, moveFunc(toX, toY));
        }
    }));
    const filteredMoves = moves.moves.filter(move => typeof move !== 'undefined');
    return new _models_MoveList__WEBPACK_IMPORTED_MODULE_1__["default"](filteredMoves);
};
const assembleCartesianMovesFromSelected = assembleMovesFromSelected(_models_Geometry__WEBPACK_IMPORTED_MODULE_2__["cartesian"]);
const assembleCartesianJumpMoves = assembleMovesList(_models_Geometry__WEBPACK_IMPORTED_MODULE_2__["cartesian"]);


/***/ }),

/***/ "./src/models/Geometry.ts":
/*!********************************!*\
  !*** ./src/models/Geometry.ts ***!
  \********************************/
/*! exports provided: cartesian, hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesian", function() { return cartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/**
 * Geometry:
 * An interface for how the board knows what movements are possible on the board
 */
const cartesian = {
    up: (x, y) => ({ x, y: y + 1 }),
    down: (x, y) => ({ x, y: y - 1 }),
    left: (x, y) => ({ x: x - 1, y }),
    right: (x, y) => ({ x: x + 1, y }),
};
// TODO: NEED TO TEST BELOW
const hex = {
    upLeft: (x, y) => ({ x: x - 1, y: y - 1 }),
    upRight: (x, y) => ({ x, y: y - 1 }),
    left: (x, y) => ({ x: x - 1, y }),
    right: (x, y) => ({ x: x + 1, y }),
    downLeft: (x, y) => ({ x, y: y + 1 }),
    downRight: (x, y) => ({ x: x + 1, y: y + 1 }),
};


/***/ }),

/***/ "./src/models/Move.ts":
/*!****************************!*\
  !*** ./src/models/Move.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Move; });
class Move {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}


/***/ }),

/***/ "./src/models/MoveList.ts":
/*!********************************!*\
  !*** ./src/models/MoveList.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoveList; });
class MoveList {
    constructor(moves = []) {
        this._moves = [];
        this._moves = moves;
    }
    get moves() {
        return this._moves;
    }
    addMove(m) {
        return new MoveList([...this.moves, m]);
    }
    removeMove(m) {
        return new MoveList([...this.moves.filter(el => el !== m)]);
    }
    removeIndex(index) {
        return new MoveList([...this.moves.splice(index, 1)]);
    }
}


/***/ }),

/***/ "./src/models/board.ts":
/*!*****************************!*\
  !*** ./src/models/board.ts ***!
  \*****************************/
/*! exports provided: default, getSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelected", function() { return getSelected; });
class Board {
    constructor(boardString = '') {
        this._grid = [];
        this._parseGrid(boardString);
    }
    static fromGrid(grid) {
        const newBoard = new Board();
        newBoard.grid = grid;
        return newBoard;
    }
    _parseGrid(boardString) {
        this.grid = boardString.split(/\r?\n/)
            .filter(el => el !== "")
            .map((row, y) => {
            return row.split('')
                .map((cell, x) => ({
                value: cell,
                x,
                y,
                selected: false,
                highlighted: false,
            }));
        });
    }
    set grid(val) {
        this._grid = val;
    }
    get grid() {
        return this._grid;
    }
    getStone(x, y) {
        return this._grid[y][x];
    }
    removeStone(x, y) {
        this._grid[y][x].value = "0";
        return Board.fromGrid(this.grid);
    }
    selectStone(x, y) {
        this._grid.forEach(row => row.forEach(stone => stone.selected = false));
        this.getStone(x, y).selected = true;
        return Board.fromGrid(this.grid);
    }
}
const getSelected = (grid) => {
    return grid.flat(2).find(el => el.selected);
};


/***/ }),

/***/ "./src/render/render.ts":
/*!******************************!*\
  !*** ./src/render/render.ts ***!
  \******************************/
/*! exports provided: render, renderMyBoard, renderBoard, renderMoveList, renderMyMoveList, renderSelectedMoveList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMyBoard", function() { return renderMyBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderBoard", function() { return renderBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMoveList", function() { return renderMoveList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMyMoveList", function() { return renderMyMoveList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSelectedMoveList", function() { return renderSelectedMoveList; });
/* harmony import */ var _util___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/_ */ "./src/util/_.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");


const render = (template) => {
    return (container, data) => {
        container.innerHTML = template(data);
    };
};
const renderMyBoard = (data) => renderBoard(document.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_CONTAINER"]), data);
const renderBoard = render((board) => {
    function getCellClass(cell) {
        let cellString = 'cell';
        if (cell.value === '0') {
            cellString = 'cell cell_empty';
        }
        if (cell.value === '1') {
            cellString = 'cell cell_filled';
        }
        if (cell.selected) {
            cellString += ' cell_selected';
        }
        if (cell.highlighted) {
            cellString += ' cell_highlighted';
        }
        return cellString;
    }
    return `${_util___WEBPACK_IMPORTED_MODULE_0__["default"].mapDOM(board.grid, (row) => `<div class="row">
                ${_util___WEBPACK_IMPORTED_MODULE_0__["default"].mapDOM(row, (cell) => (`<div class="${getCellClass(cell)}" data-x="${cell.x}" data-y="${cell.y}">
                        ${cell.x},${cell.y}
                    </div>`))}
            </div>`)}`;
});
const renderMoveList = render((moveList) => {
    return moveList.length > 0 ?
        `${_util___WEBPACK_IMPORTED_MODULE_0__["default"].mapDOM(moveList, (el) => (`<li class="move-list__item">(${el.from.x},${el.from.y}) => (${el.to.x},${el.to.y})</li>`))}`
        :
            `<li class="move-list__item">No moves</li>`;
});
const renderMyMoveList = (data) => renderMoveList(document.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVE_LIST"]), data);
const renderSelectedMoveList = (data) => renderMoveList(document.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__["SELECTED_MOVE_LIST"]), data);


/***/ }),

/***/ "./src/state/State.ts":
/*!****************************!*\
  !*** ./src/state/State.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const target = {
    registerRenderFunction(func) {
        this.render = func;
    },
    gameBoard: null,
    possibleMoves: null,
    possibleMovesFromSelected: null,
};
const stateHandler = {
    set(state, prop, value) {
        // console.log(`Setting ${prop} to: `, value);
        state[prop] = value;
        state.render();
        return true;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (new Proxy(target, stateHandler));


/***/ }),

/***/ "./src/state/changers.ts":
/*!*******************************!*\
  !*** ./src/state/changers.ts ***!
  \*******************************/
/*! exports provided: selectStone, highlightValidMoves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStone", function() { return selectStone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightValidMoves", function() { return highlightValidMoves; });
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/board */ "./src/models/board.ts");
/* harmony import */ var _util___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/_ */ "./src/util/_.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./State */ "./src/state/State.ts");
/* harmony import */ var _logic_moveFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/moveFilters */ "./src/logic/moveFilters.ts");




const changeState = (property) => (value) => {
    _State__WEBPACK_IMPORTED_MODULE_2__["default"][property] = value;
};
/**
 * Board changers
 */
const changeBoard = changeState('gameBoard');
const selectStone = (x, y) => {
    if (_State__WEBPACK_IMPORTED_MODULE_2__["default"].gameBoard.getStone(x, y).value === "1") {
        highlightValidMoves(x, y);
        console.log('third');
        changeBoard(_State__WEBPACK_IMPORTED_MODULE_2__["default"].gameBoard.selectStone(x, y));
    }
};
const highlightValidMoves = (x, y) => {
    console.log('first');
    //clear board highlights
    _util___WEBPACK_IMPORTED_MODULE_1__["Maybe"].from(_State__WEBPACK_IMPORTED_MODULE_2__["default"])
        .get('gameBoard')
        .map((gameBoard) => {
        gameBoard.grid.forEach(row => row.forEach(cell => cell.highlighted = false));
    });
    console.log('second');
    _util___WEBPACK_IMPORTED_MODULE_1__["Maybe"].from(_State__WEBPACK_IMPORTED_MODULE_2__["default"])
        .getPath('gameBoard.grid')
        .map(_models_board__WEBPACK_IMPORTED_MODULE_0__["getSelected"])
        .map(Object(_logic_moveFilters__WEBPACK_IMPORTED_MODULE_3__["assembleCartesianMovesFromSelected"])(_State__WEBPACK_IMPORTED_MODULE_2__["default"].gameBoard))
        .map((moveList) => {
        moveList.moves.forEach((move) => {
            const { x, y } = move.to;
            _State__WEBPACK_IMPORTED_MODULE_2__["default"].gameBoard.grid[y][x].highlighted = true;
        });
    });
};


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/ui/handlers.ts":
/*!****************************!*\
  !*** ./src/ui/handlers.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_changers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/changers */ "./src/state/changers.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");


const handlers = {
    registerBoardClicks() {
        document.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_CONTAINER"]).addEventListener('click', event => {
            let { x, y } = event.target.dataset;
            if (x && y) {
                Object(_state_changers__WEBPACK_IMPORTED_MODULE_0__["selectStone"])(+x, +y);
            }
        });
    }
};
function registerHandlers() {
    Object.keys(handlers)
        .forEach((handlerName) => handlers[handlerName]());
}
/* harmony default export */ __webpack_exports__["default"] = (registerHandlers);


/***/ }),

/***/ "./src/util/_.ts":
/*!***********************!*\
  !*** ./src/util/_.ts ***!
  \***********************/
/*! exports provided: default, Maybe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_dom */ "./src/util/_dom.ts");
/* harmony import */ var _js_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_js.ts */ "./src/util/_js.ts");
/* harmony import */ var _maybe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_maybe */ "./src/util/_maybe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Maybe", function() { return _maybe__WEBPACK_IMPORTED_MODULE_2__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (Object.assign({}, _dom__WEBPACK_IMPORTED_MODULE_0__["default"], _js_ts__WEBPACK_IMPORTED_MODULE_1__["default"]));



/***/ }),

/***/ "./src/util/_dom.ts":
/*!**************************!*\
  !*** ./src/util/_dom.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Takes an array and performs map.  Joins at the end because string linterals.
 */
const mapDOM = (arr, f) => {
    return arr.map(f).join("");
};
/* harmony default export */ __webpack_exports__["default"] = ({
    mapDOM,
});


/***/ }),

/***/ "./src/util/_js.ts":
/*!*************************!*\
  !*** ./src/util/_js.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const prop = (prop) => (obj) => obj[prop];
/* harmony default export */ __webpack_exports__["default"] = ({
    prop,
});


/***/ }),

/***/ "./src/util/_maybe.ts":
/*!****************************!*\
  !*** ./src/util/_maybe.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Maybe; });
class Maybe {
    constructor(value) {
        this._value = value;
    }
    static from(value) {
        return new Maybe(value);
    }
    isNothing() {
        return (this._value === null || this._value === undefined);
    }
    get(prop) {
        return this.map(() => this._value[prop]);
    }
    // takes "." separated nested props
    getPath(prop) {
        return Maybe.from(prop.split("."))
            .map(([first, ...rest]) => rest.length > 0
            ?
                Maybe.from(this._value[first]).getPath(rest.join(".")).join()
            :
                Maybe.from(this._value).get(first).join());
    }
    map(f) {
        if (this.isNothing()) {
            return Maybe.from(null);
        }
        return Maybe.from(f(this._value));
    }
    // Unwraps a layer of Maybes
    join() {
        return this._value;
    }
    chain(f) {
        return this._value.map(f).join();
    }
    orElse(fallback) {
        if (this.isNothing()) {
            return Maybe.from(fallback);
        }
        return this;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naWMvbW92ZUZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9HZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL01vdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Nb3ZlTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS9TdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvY2hhbmdlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MDUzYyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvXy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9fZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL19qcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9fbWF5YmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ0hGO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1mYW1pbHk6IEF2ZW5pcjsgfVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMnB4IDA7IH1cXG5cXG4uY2VsbCB7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGNvbG9yOiAjODg4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNlbGxfZW1wdHkge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXG4gIGJhY2tncm91bmQ6ICMzMzM7IH1cXG5cXG4uY2VsbF9maWxsZWQge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXG4gIGJhY2tncm91bmQ6ICMzQTMyRUQ7IH1cXG5cXG4uY2VsbF9pbnZhbGlkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2VsbF9zZWxlY3RlZCB7XFxuICBib3JkZXItY29sb3I6ICNFRDNBMzI7XFxuICBiYWNrZ3JvdW5kOiAjOTQ5MGY1O1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4uY2VsbF9oaWdobGlnaHRlZCB7XFxuICBib3JkZXItY29sb3I6IGNoYXJ0cmV1c2U7IH1cXG5cXG4ubW92ZS1saXN0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMWVtO1xcbiAgbGVmdDogMWVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMThweDsgfVxcblxcbi5zZWxlY3RlZC1tb3ZlLWxpc3Qge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAxZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEJPQVJEX0NPTlRBSU5FUiA9ICcuYm9hcmQnO1xuZXhwb3J0IGNvbnN0IE1PVkVfTElTVCA9ICcubW92ZS1saXN0JztcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9NT1ZFX0xJU1QgPSAnLnNlbGVjdGVkLW1vdmUtbGlzdCc7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBNYXliZSB9IGZyb20gJy4vdXRpbC9fJztcbmltcG9ydCByZWdpc3RlckhhbmRsZXJzIGZyb20gJy4vdWkvaGFuZGxlcnMnO1xuaW1wb3J0IHsgYXNzZW1ibGVDYXJ0ZXNpYW5KdW1wTW92ZXMsIGFzc2VtYmxlQ2FydGVzaWFuTW92ZXNGcm9tU2VsZWN0ZWQgfSBmcm9tICcuL2xvZ2ljL21vdmVGaWx0ZXJzJztcbmltcG9ydCBCb2FyZCwgeyBnZXRTZWxlY3RlZCB9IGZyb20gXCIuL21vZGVscy9ib2FyZFwiO1xuaW1wb3J0IE1vdmVMaXN0IGZyb20gJy4vbW9kZWxzL01vdmVMaXN0JztcbmltcG9ydCB7IHJlbmRlck15Qm9hcmQsIHJlbmRlck15TW92ZUxpc3QsIHJlbmRlclNlbGVjdGVkTW92ZUxpc3QgfSBmcm9tICcuL3JlbmRlci9yZW5kZXInO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUvU3RhdGUnO1xuY29uc3QgZ3JpZCA9IGBcbnh4eDExMXh4eFxueHh4MTExeHh4XG54eDExMTExeHhcbjExMTExMTExMVxuMTExMTAxMTExXG4xMTExMTExMTFcbnh4MTExMTB4eFxueHh4MTExeHh4XG54eHgxMDF4eHhcbmA7XG5mdW5jdGlvbiByZW5kZXJBbGxUaGVUaGluZ3MoKSB7XG4gICAgTWF5YmUuZnJvbShTdGF0ZSlcbiAgICAgICAgLmdldCgnZ2FtZUJvYXJkJylcbiAgICAgICAgLm1hcChhc3NlbWJsZUNhcnRlc2lhbkp1bXBNb3ZlcylcbiAgICAgICAgLmdldCgnbW92ZXMnKVxuICAgICAgICAubWFwKHJlbmRlck15TW92ZUxpc3QpO1xuICAgIE1heWJlLmZyb20oU3RhdGUpXG4gICAgICAgIC5nZXRQYXRoKCdnYW1lQm9hcmQuZ3JpZCcpXG4gICAgICAgIC5tYXAoZ2V0U2VsZWN0ZWQpXG4gICAgICAgIC5tYXAoYXNzZW1ibGVDYXJ0ZXNpYW5Nb3Zlc0Zyb21TZWxlY3RlZChTdGF0ZS5nYW1lQm9hcmQpKVxuICAgICAgICAuZ2V0KCdtb3ZlcycpXG4gICAgICAgIC5tYXAocmVuZGVyU2VsZWN0ZWRNb3ZlTGlzdCk7XG4gICAgTWF5YmUuZnJvbShTdGF0ZSlcbiAgICAgICAgLmdldCgnZ2FtZUJvYXJkJylcbiAgICAgICAgLm1hcChyZW5kZXJNeUJvYXJkKTtcbn1cblN0YXRlLnJlZ2lzdGVyUmVuZGVyRnVuY3Rpb24ocmVuZGVyQWxsVGhlVGhpbmdzKTtcblN0YXRlLmdhbWVCb2FyZCA9IG5ldyBCb2FyZChncmlkKTtcblN0YXRlLnBvc3NpYmxlTW92ZXMgPSBuZXcgTW92ZUxpc3QoKTtcblN0YXRlLnBvc3NpYmxlTW92ZXNGcm9tU2VsZWN0ZWQgPSBbXTtcbnJlZ2lzdGVySGFuZGxlcnMoKTtcbiIsImltcG9ydCB7IE1heWJlIH0gZnJvbSAnLi4vdXRpbC9fJztcbmltcG9ydCBNb3ZlTGlzdCBmcm9tIFwiLi4vbW9kZWxzL01vdmVMaXN0XCI7XG5pbXBvcnQgeyBjYXJ0ZXNpYW4gfSBmcm9tICcuLi9tb2RlbHMvR2VvbWV0cnknO1xuaW1wb3J0IE1vdmUgZnJvbSBcIi4uL21vZGVscy9Nb3ZlXCI7XG5leHBvcnQgY29uc3QgbW92ZUlzVmFsaWQgPSAobW92ZUZ1bmMpID0+IChib2FyZCkgPT4gKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyB4OiB0b1gsIHk6IHRvWSB9ID0gbW92ZUZ1bmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgY29uc3QgeyB4OiB0b1RvWCwgeTogdG9Ub1kgfSA9IG1vdmVGdW5jKHRvWCwgdG9ZKTtcbiAgICBjb25zdCBuZXh0Q2VsbCA9IE1heWJlLmZyb20oYm9hcmQpXG4gICAgICAgIC5nZXQoYGdyaWRgKVxuICAgICAgICAuZ2V0KGAke3RvWX1gKVxuICAgICAgICAuZ2V0KGAke3RvWH1gKVxuICAgICAgICAuZ2V0KGB2YWx1ZWApXG4gICAgICAgIC5qb2luKCk7XG4gICAgY29uc3QgbmV4dE5leHRDZWxsID0gTWF5YmUuZnJvbShib2FyZClcbiAgICAgICAgLmdldChgZ3JpZGApXG4gICAgICAgIC5nZXQoYCR7dG9Ub1l9YClcbiAgICAgICAgLmdldChgJHt0b1RvWH1gKVxuICAgICAgICAuZ2V0KGB2YWx1ZWApXG4gICAgICAgIC5qb2luKCk7XG4gICAgaWYgKG5leHRDZWxsID09PSBcIjFcIiAmJiBuZXh0TmV4dENlbGwgPT09IFwiMFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IGFzc2VtYmxlTW92ZXNMaXN0ID0gKGdlb21ldHJ5KSA9PiAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBtb3ZlcyA9IE9iamVjdC5rZXlzKGdlb21ldHJ5KS5tYXAobW92ZU5hbWUgPT4ge1xuICAgICAgICByZXR1cm4gYm9hcmQuZ3JpZC5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIHJldHVybiByb3cubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLnZhbHVlID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobW92ZUlzVmFsaWQoZ2VvbWV0cnlbbW92ZU5hbWVdKShib2FyZCkoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeDogdG9YLCB5OiB0b1kgfSA9IGdlb21ldHJ5W21vdmVOYW1lXShjZWxsLngsIGNlbGwueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1vdmUoeyB4OiBjZWxsLngsIHk6IGNlbGwueSB9LCBnZW9tZXRyeVttb3ZlTmFtZV0odG9YLCB0b1kpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBmbGF0dGVuZWRNb3ZlcyA9IG1vdmVzLmZsYXQoMikuZmlsdGVyKGVsID0+IHR5cGVvZiBlbCAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgIHJldHVybiBuZXcgTW92ZUxpc3QoZmxhdHRlbmVkTW92ZXMpO1xufTtcbmV4cG9ydCBjb25zdCBhc3NlbWJsZU1vdmVzRnJvbVNlbGVjdGVkID0gKGdlb21ldHJ5KSA9PiAoYm9hcmQpID0+IChzZWxlY3RlZFN0b25lKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBzZWxlY3RlZFN0b25lO1xuICAgIGNvbnN0IG1vdmVzID0gbmV3IE1vdmVMaXN0KE9iamVjdC52YWx1ZXMoZ2VvbWV0cnkpLm1hcChtb3ZlRnVuYyA9PiB7XG4gICAgICAgIGlmIChtb3ZlSXNWYWxpZChtb3ZlRnVuYykoYm9hcmQpKHNlbGVjdGVkU3RvbmUpKSB7XG4gICAgICAgICAgICBjb25zdCB7IHg6IHRvWCwgeTogdG9ZIH0gPSBtb3ZlRnVuYyh4LCB5KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW92ZShzZWxlY3RlZFN0b25lLCBtb3ZlRnVuYyh0b1gsIHRvWSkpO1xuICAgICAgICB9XG4gICAgfSkpO1xuICAgIGNvbnN0IGZpbHRlcmVkTW92ZXMgPSBtb3Zlcy5tb3Zlcy5maWx0ZXIobW92ZSA9PiB0eXBlb2YgbW92ZSAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgIHJldHVybiBuZXcgTW92ZUxpc3QoZmlsdGVyZWRNb3Zlcyk7XG59O1xuZXhwb3J0IGNvbnN0IGFzc2VtYmxlQ2FydGVzaWFuTW92ZXNGcm9tU2VsZWN0ZWQgPSBhc3NlbWJsZU1vdmVzRnJvbVNlbGVjdGVkKGNhcnRlc2lhbik7XG5leHBvcnQgY29uc3QgYXNzZW1ibGVDYXJ0ZXNpYW5KdW1wTW92ZXMgPSBhc3NlbWJsZU1vdmVzTGlzdChjYXJ0ZXNpYW4pO1xuIiwiLyoqXG4gKiBHZW9tZXRyeTpcbiAqIEFuIGludGVyZmFjZSBmb3IgaG93IHRoZSBib2FyZCBrbm93cyB3aGF0IG1vdmVtZW50cyBhcmUgcG9zc2libGUgb24gdGhlIGJvYXJkXG4gKi9cbmV4cG9ydCBjb25zdCBjYXJ0ZXNpYW4gPSB7XG4gICAgdXA6ICh4LCB5KSA9PiAoeyB4LCB5OiB5ICsgMSB9KSxcbiAgICBkb3duOiAoeCwgeSkgPT4gKHsgeCwgeTogeSAtIDEgfSksXG4gICAgbGVmdDogKHgsIHkpID0+ICh7IHg6IHggLSAxLCB5IH0pLFxuICAgIHJpZ2h0OiAoeCwgeSkgPT4gKHsgeDogeCArIDEsIHkgfSksXG59O1xuLy8gVE9ETzogTkVFRCBUTyBURVNUIEJFTE9XXG5leHBvcnQgY29uc3QgaGV4ID0ge1xuICAgIHVwTGVmdDogKHgsIHkpID0+ICh7IHg6IHggLSAxLCB5OiB5IC0gMSB9KSxcbiAgICB1cFJpZ2h0OiAoeCwgeSkgPT4gKHsgeCwgeTogeSAtIDEgfSksXG4gICAgbGVmdDogKHgsIHkpID0+ICh7IHg6IHggLSAxLCB5IH0pLFxuICAgIHJpZ2h0OiAoeCwgeSkgPT4gKHsgeDogeCArIDEsIHkgfSksXG4gICAgZG93bkxlZnQ6ICh4LCB5KSA9PiAoeyB4LCB5OiB5ICsgMSB9KSxcbiAgICBkb3duUmlnaHQ6ICh4LCB5KSA9PiAoeyB4OiB4ICsgMSwgeTogeSArIDEgfSksXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZSB7XG4gICAgY29uc3RydWN0b3IoZnJvbSwgdG8pIHtcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVMaXN0IHtcbiAgICBjb25zdHJ1Y3Rvcihtb3ZlcyA9IFtdKSB7XG4gICAgICAgIHRoaXMuX21vdmVzID0gW107XG4gICAgICAgIHRoaXMuX21vdmVzID0gbW92ZXM7XG4gICAgfVxuICAgIGdldCBtb3ZlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVzO1xuICAgIH1cbiAgICBhZGRNb3ZlKG0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb3ZlTGlzdChbLi4udGhpcy5tb3ZlcywgbV0pO1xuICAgIH1cbiAgICByZW1vdmVNb3ZlKG0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb3ZlTGlzdChbLi4udGhpcy5tb3Zlcy5maWx0ZXIoZWwgPT4gZWwgIT09IG0pXSk7XG4gICAgfVxuICAgIHJlbW92ZUluZGV4KGluZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgTW92ZUxpc3QoWy4uLnRoaXMubW92ZXMuc3BsaWNlKGluZGV4LCAxKV0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcihib2FyZFN0cmluZyA9ICcnKSB7XG4gICAgICAgIHRoaXMuX2dyaWQgPSBbXTtcbiAgICAgICAgdGhpcy5fcGFyc2VHcmlkKGJvYXJkU3RyaW5nKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21HcmlkKGdyaWQpIHtcbiAgICAgICAgY29uc3QgbmV3Qm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICAgICAgbmV3Qm9hcmQuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHJldHVybiBuZXdCb2FyZDtcbiAgICB9XG4gICAgX3BhcnNlR3JpZChib2FyZFN0cmluZykge1xuICAgICAgICB0aGlzLmdyaWQgPSBib2FyZFN0cmluZy5zcGxpdCgvXFxyP1xcbi8pXG4gICAgICAgICAgICAuZmlsdGVyKGVsID0+IGVsICE9PSBcIlwiKVxuICAgICAgICAgICAgLm1hcCgocm93LCB5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcm93LnNwbGl0KCcnKVxuICAgICAgICAgICAgICAgIC5tYXAoKGNlbGwsIHgpID0+ICh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGNlbGwsXG4gICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRlZDogZmFsc2UsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXQgZ3JpZCh2YWwpIHtcbiAgICAgICAgdGhpcy5fZ3JpZCA9IHZhbDtcbiAgICB9XG4gICAgZ2V0IGdyaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkO1xuICAgIH1cbiAgICBnZXRTdG9uZSh4LCB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncmlkW3ldW3hdO1xuICAgIH1cbiAgICByZW1vdmVTdG9uZSh4LCB5KSB7XG4gICAgICAgIHRoaXMuX2dyaWRbeV1beF0udmFsdWUgPSBcIjBcIjtcbiAgICAgICAgcmV0dXJuIEJvYXJkLmZyb21HcmlkKHRoaXMuZ3JpZCk7XG4gICAgfVxuICAgIHNlbGVjdFN0b25lKHgsIHkpIHtcbiAgICAgICAgdGhpcy5fZ3JpZC5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChzdG9uZSA9PiBzdG9uZS5zZWxlY3RlZCA9IGZhbHNlKSk7XG4gICAgICAgIHRoaXMuZ2V0U3RvbmUoeCwgeSkuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gQm9hcmQuZnJvbUdyaWQodGhpcy5ncmlkKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoZ3JpZCkgPT4ge1xuICAgIHJldHVybiBncmlkLmZsYXQoMikuZmluZChlbCA9PiBlbC5zZWxlY3RlZCk7XG59O1xuIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbC9fJztcbmltcG9ydCB7IE1PVkVfTElTVCwgQk9BUkRfQ09OVEFJTkVSLCBTRUxFQ1RFRF9NT1ZFX0xJU1QgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgIHJldHVybiAoY29udGFpbmVyLCBkYXRhKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB0ZW1wbGF0ZShkYXRhKTtcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCByZW5kZXJNeUJvYXJkID0gKGRhdGEpID0+IHJlbmRlckJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQk9BUkRfQ09OVEFJTkVSKSwgZGF0YSk7XG5leHBvcnQgY29uc3QgcmVuZGVyQm9hcmQgPSByZW5kZXIoKGJvYXJkKSA9PiB7XG4gICAgZnVuY3Rpb24gZ2V0Q2VsbENsYXNzKGNlbGwpIHtcbiAgICAgICAgbGV0IGNlbGxTdHJpbmcgPSAnY2VsbCc7XG4gICAgICAgIGlmIChjZWxsLnZhbHVlID09PSAnMCcpIHtcbiAgICAgICAgICAgIGNlbGxTdHJpbmcgPSAnY2VsbCBjZWxsX2VtcHR5JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VsbC52YWx1ZSA9PT0gJzEnKSB7XG4gICAgICAgICAgICBjZWxsU3RyaW5nID0gJ2NlbGwgY2VsbF9maWxsZWQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjZWxsU3RyaW5nICs9ICcgY2VsbF9zZWxlY3RlZCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwuaGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgIGNlbGxTdHJpbmcgKz0gJyBjZWxsX2hpZ2hsaWdodGVkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2VsbFN0cmluZztcbiAgICB9XG4gICAgcmV0dXJuIGAke18ubWFwRE9NKGJvYXJkLmdyaWQsIChyb3cpID0+IGA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgJHtfLm1hcERPTShyb3csIChjZWxsKSA9PiAoYDxkaXYgY2xhc3M9XCIke2dldENlbGxDbGFzcyhjZWxsKX1cIiBkYXRhLXg9XCIke2NlbGwueH1cIiBkYXRhLXk9XCIke2NlbGwueX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Y2VsbC54fSwke2NlbGwueX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCkpfVxuICAgICAgICAgICAgPC9kaXY+YCl9YDtcbn0pO1xuZXhwb3J0IGNvbnN0IHJlbmRlck1vdmVMaXN0ID0gcmVuZGVyKChtb3ZlTGlzdCkgPT4ge1xuICAgIHJldHVybiBtb3ZlTGlzdC5sZW5ndGggPiAwID9cbiAgICAgICAgYCR7Xy5tYXBET00obW92ZUxpc3QsIChlbCkgPT4gKGA8bGkgY2xhc3M9XCJtb3ZlLWxpc3RfX2l0ZW1cIj4oJHtlbC5mcm9tLnh9LCR7ZWwuZnJvbS55fSkgPT4gKCR7ZWwudG8ueH0sJHtlbC50by55fSk8L2xpPmApKX1gXG4gICAgICAgIDpcbiAgICAgICAgICAgIGA8bGkgY2xhc3M9XCJtb3ZlLWxpc3RfX2l0ZW1cIj5ObyBtb3ZlczwvbGk+YDtcbn0pO1xuZXhwb3J0IGNvbnN0IHJlbmRlck15TW92ZUxpc3QgPSAoZGF0YSkgPT4gcmVuZGVyTW92ZUxpc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihNT1ZFX0xJU1QpLCBkYXRhKTtcbmV4cG9ydCBjb25zdCByZW5kZXJTZWxlY3RlZE1vdmVMaXN0ID0gKGRhdGEpID0+IHJlbmRlck1vdmVMaXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNURURfTU9WRV9MSVNUKSwgZGF0YSk7XG4iLCJjb25zdCB0YXJnZXQgPSB7XG4gICAgcmVnaXN0ZXJSZW5kZXJGdW5jdGlvbihmdW5jKSB7XG4gICAgICAgIHRoaXMucmVuZGVyID0gZnVuYztcbiAgICB9LFxuICAgIGdhbWVCb2FyZDogbnVsbCxcbiAgICBwb3NzaWJsZU1vdmVzOiBudWxsLFxuICAgIHBvc3NpYmxlTW92ZXNGcm9tU2VsZWN0ZWQ6IG51bGwsXG59O1xuY29uc3Qgc3RhdGVIYW5kbGVyID0ge1xuICAgIHNldChzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFNldHRpbmcgJHtwcm9wfSB0bzogYCwgdmFsdWUpO1xuICAgICAgICBzdGF0ZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICBzdGF0ZS5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm94eSh0YXJnZXQsIHN0YXRlSGFuZGxlcik7XG4iLCJpbXBvcnQgeyBnZXRTZWxlY3RlZCB9IGZyb20gXCIuLi9tb2RlbHMvYm9hcmRcIjtcbmltcG9ydCB7IE1heWJlIH0gZnJvbSAnLi4vdXRpbC9fJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL1N0YXRlJztcbmltcG9ydCB7IGFzc2VtYmxlQ2FydGVzaWFuTW92ZXNGcm9tU2VsZWN0ZWQgfSBmcm9tIFwiLi4vbG9naWMvbW92ZUZpbHRlcnNcIjtcbmNvbnN0IGNoYW5nZVN0YXRlID0gKHByb3BlcnR5KSA9PiAodmFsdWUpID0+IHtcbiAgICBTdGF0ZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn07XG4vKipcbiAqIEJvYXJkIGNoYW5nZXJzXG4gKi9cbmNvbnN0IGNoYW5nZUJvYXJkID0gY2hhbmdlU3RhdGUoJ2dhbWVCb2FyZCcpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFN0b25lID0gKHgsIHkpID0+IHtcbiAgICBpZiAoU3RhdGUuZ2FtZUJvYXJkLmdldFN0b25lKHgsIHkpLnZhbHVlID09PSBcIjFcIikge1xuICAgICAgICBoaWdobGlnaHRWYWxpZE1vdmVzKHgsIHkpO1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcmQnKTtcbiAgICAgICAgY2hhbmdlQm9hcmQoU3RhdGUuZ2FtZUJvYXJkLnNlbGVjdFN0b25lKHgsIHkpKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFZhbGlkTW92ZXMgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdmaXJzdCcpO1xuICAgIC8vY2xlYXIgYm9hcmQgaGlnaGxpZ2h0c1xuICAgIE1heWJlLmZyb20oU3RhdGUpXG4gICAgICAgIC5nZXQoJ2dhbWVCb2FyZCcpXG4gICAgICAgIC5tYXAoKGdhbWVCb2FyZCkgPT4ge1xuICAgICAgICBnYW1lQm9hcmQuZ3JpZC5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChjZWxsID0+IGNlbGwuaGlnaGxpZ2h0ZWQgPSBmYWxzZSkpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdzZWNvbmQnKTtcbiAgICBNYXliZS5mcm9tKFN0YXRlKVxuICAgICAgICAuZ2V0UGF0aCgnZ2FtZUJvYXJkLmdyaWQnKVxuICAgICAgICAubWFwKGdldFNlbGVjdGVkKVxuICAgICAgICAubWFwKGFzc2VtYmxlQ2FydGVzaWFuTW92ZXNGcm9tU2VsZWN0ZWQoU3RhdGUuZ2FtZUJvYXJkKSlcbiAgICAgICAgLm1hcCgobW92ZUxpc3QpID0+IHtcbiAgICAgICAgbW92ZUxpc3QubW92ZXMuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBtb3ZlLnRvO1xuICAgICAgICAgICAgU3RhdGUuZ2FtZUJvYXJkLmdyaWRbeV1beF0uaGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBzZWxlY3RTdG9uZSB9IGZyb20gXCIuLi9zdGF0ZS9jaGFuZ2Vyc1wiO1xuaW1wb3J0IHsgQk9BUkRfQ09OVEFJTkVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuY29uc3QgaGFuZGxlcnMgPSB7XG4gICAgcmVnaXN0ZXJCb2FyZENsaWNrcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihCT0FSRF9DT05UQUlORVIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IHsgeCwgeSB9ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgICAgICBpZiAoeCAmJiB5KSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0U3RvbmUoK3gsICt5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcnMoKSB7XG4gICAgT2JqZWN0LmtleXMoaGFuZGxlcnMpXG4gICAgICAgIC5mb3JFYWNoKChoYW5kbGVyTmFtZSkgPT4gaGFuZGxlcnNbaGFuZGxlck5hbWVdKCkpO1xufVxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJIYW5kbGVycztcbiIsImltcG9ydCBfZG9tIGZyb20gJy4vX2RvbSc7XG5pbXBvcnQgX2pzIGZyb20gJy4vX2pzLnRzJztcbmltcG9ydCBNYXliZSBmcm9tICcuL19tYXliZSc7XG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKHt9LCBfZG9tLCBfanMpO1xuZXhwb3J0IHsgTWF5YmUgfTtcbiIsIi8qKlxuICogVGFrZXMgYW4gYXJyYXkgYW5kIHBlcmZvcm1zIG1hcC4gIEpvaW5zIGF0IHRoZSBlbmQgYmVjYXVzZSBzdHJpbmcgbGludGVyYWxzLlxuICovXG5jb25zdCBtYXBET00gPSAoYXJyLCBmKSA9PiB7XG4gICAgcmV0dXJuIGFyci5tYXAoZikuam9pbihcIlwiKTtcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWFwRE9NLFxufTtcbiIsImNvbnN0IHByb3AgPSAocHJvcCkgPT4gKG9iaikgPT4gb2JqW3Byb3BdO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3AsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF5YmUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWF5YmUodmFsdWUpO1xuICAgIH1cbiAgICBpc05vdGhpbmcoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fdmFsdWUgPT09IG51bGwgfHwgdGhpcy5fdmFsdWUgPT09IHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGdldChwcm9wKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcCgoKSA9PiB0aGlzLl92YWx1ZVtwcm9wXSk7XG4gICAgfVxuICAgIC8vIHRha2VzIFwiLlwiIHNlcGFyYXRlZCBuZXN0ZWQgcHJvcHNcbiAgICBnZXRQYXRoKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIE1heWJlLmZyb20ocHJvcC5zcGxpdChcIi5cIikpXG4gICAgICAgICAgICAubWFwKChbZmlyc3QsIC4uLnJlc3RdKSA9PiByZXN0Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICBNYXliZS5mcm9tKHRoaXMuX3ZhbHVlW2ZpcnN0XSkuZ2V0UGF0aChyZXN0LmpvaW4oXCIuXCIpKS5qb2luKClcbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBNYXliZS5mcm9tKHRoaXMuX3ZhbHVlKS5nZXQoZmlyc3QpLmpvaW4oKSk7XG4gICAgfVxuICAgIG1hcChmKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTm90aGluZygpKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF5YmUuZnJvbShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF5YmUuZnJvbShmKHRoaXMuX3ZhbHVlKSk7XG4gICAgfVxuICAgIC8vIFVud3JhcHMgYSBsYXllciBvZiBNYXliZXNcbiAgICBqb2luKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIGNoYWluKGYpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlLm1hcChmKS5qb2luKCk7XG4gICAgfVxuICAgIG9yRWxzZShmYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5pc05vdGhpbmcoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE1heWJlLmZyb20oZmFsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=