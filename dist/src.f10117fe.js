// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/util/_dom.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
/**
 * Takes an array and performs map.  Joins at the end because string linterals.
 */

var mapDOM = function mapDOM(arr, f) {
  return arr.map(f).join("");
};

exports["default"] = {
  mapDOM: mapDOM
};
},{}],"src/util/_js.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var prop = function prop(_prop) {
  return function (obj) {
    return obj[_prop];
  };
};

exports["default"] = {
  prop: prop
};
},{}],"src/util/_maybe.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var Maybe =
/** @class */
function () {
  function Maybe(value) {
    this._value = value;
  }

  Maybe.from = function (value) {
    return new Maybe(value);
  };

  Maybe.prototype.isNothing = function () {
    return this._value === null || this._value === undefined;
  };

  Maybe.prototype.get = function (prop) {
    var _this = this;

    return this.map(function () {
      return _this._value[prop];
    });
  }; // takes "." separated nested props


  Maybe.prototype.getPath = function (prop) {
    var _this = this;

    return Maybe.from(prop.split(".")).map(function (_a) {
      var first = _a[0],
          rest = _a.slice(1);

      return rest.length > 0 ? Maybe.from(_this._value[first]).getPath(rest.join(".")).join() : Maybe.from(_this._value).get(first).join();
    });
  };

  Maybe.prototype.map = function (f) {
    if (this.isNothing()) {
      return Maybe.from(null);
    }

    return Maybe.from(f(this._value));
  }; // Unwraps a layer of Maybes


  Maybe.prototype.join = function () {
    return this._value;
  };

  Maybe.prototype.chain = function (f) {
    return this._value.map(f).join();
  };

  Maybe.prototype.orElse = function (fallback) {
    if (this.isNothing()) {
      return Maybe.from(fallback);
    }

    return this;
  };

  return Maybe;
}();

exports["default"] = Maybe;
},{}],"src/util/_.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var _dom_1 = __importDefault(require("./_dom"));

var _js_1 = __importDefault(require("./_js"));

var _maybe_1 = __importDefault(require("./_maybe"));

exports.Maybe = _maybe_1["default"];
exports["default"] = __assign({}, _dom_1["default"], _js_1["default"]);
},{"./_dom":"src/util/_dom.ts","./_js":"src/util/_js.ts","./_maybe":"src/util/_maybe.ts"}],"src/models/board.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var Board =
/** @class */
function () {
  function Board(boardString) {
    if (boardString === void 0) {
      boardString = '';
    }

    this._grid = [];

    this._parseGrid(boardString);
  }

  Board.fromGrid = function (grid) {
    var newBoard = new Board();
    newBoard.grid = grid;
    return newBoard;
  };

  Board.prototype._parseGrid = function (boardString) {
    this.grid = boardString.split(/\r?\n/).filter(function (el) {
      return el !== "";
    }).map(function (row, y) {
      return row.split('').map(function (cell, x) {
        return {
          value: cell,
          x: x,
          y: y,
          selected: false
        };
      });
    });
  };

  Object.defineProperty(Board.prototype, "grid", {
    get: function get() {
      return this._grid;
    },
    set: function set(val) {
      this._grid = val;
    },
    enumerable: true,
    configurable: true
  });

  Board.prototype.getStone = function (x, y) {
    return this._grid[y][x];
  };

  Board.prototype.removeStone = function (x, y) {
    this._grid[y][x].value = "0";
    return Board.fromGrid(this.grid);
  };

  Board.prototype.selectStone = function (x, y) {
    this._grid.forEach(function (row) {
      return row.forEach(function (stone) {
        return stone.selected = false;
      });
    });

    this.getStone(x, y).selected = true;
    return Board.fromGrid(this.grid);
  };

  return Board;
}();

exports["default"] = Board;
},{}],"src/models/MoveList.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var MoveList =
/** @class */
function () {
  function MoveList(moves) {
    if (moves === void 0) {
      moves = [];
    }

    this._moves = [];
    this._moves = moves;
  }

  Object.defineProperty(MoveList.prototype, "moves", {
    get: function get() {
      return this._moves;
    },
    enumerable: true,
    configurable: true
  });

  MoveList.prototype.addMove = function (m) {
    return new MoveList(this.moves.concat([m]));
  };

  MoveList.prototype.removeMove = function (m) {
    return new MoveList(this.moves.filter(function (el) {
      return el !== m;
    }).slice());
  };

  MoveList.prototype.removeIndex = function (index) {
    return new MoveList(this.moves.splice(index, 1).slice());
  };

  return MoveList;
}();

exports["default"] = MoveList;
},{}],"src/render/render.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var _1 = __importDefault(require("../util/_"));

exports.render = function (template) {
  return function (container, data) {
    container.innerHTML = template(data);
  };
};

exports.renderMyBoard = function (data) {
  return exports.renderBoard(document.querySelector('.board'), data);
};

exports.renderBoard = exports.render(function (board) {
  function getCellClass(cell) {
    var cellString = 'cell';

    if (cell.value === '0') {
      cellString = 'cell cell_empty';
    }

    if (cell.value === '1') {
      cellString = 'cell cell_filled';
    }

    if (cell.selected) {
      cellString += ' cell_selected';
    }

    return cellString;
  }

  return "" + _1["default"].mapDOM(board.grid, function (row) {
    return "<div class=\"row\">\n                " + _1["default"].mapDOM(row, function (cell) {
      return "<div class=\"" + getCellClass(cell) + "\" data-x=\"" + cell.x + "\" data-y=\"" + cell.y + "\">\n                        " + cell.x + "," + cell.y + "\n                    </div>";
    }) + "\n            </div>";
  });
});

exports.renderMyMoveList = function (data) {
  return exports.renderMoveList(document.querySelector('.move-list'), data);
};

exports.renderMoveList = exports.render(function (moveList) {
  return "" + _1["default"].mapDOM(moveList, function (el) {
    return "<p>(" + el.fromX + "," + el.fromY + ") => (" + el.toX + "," + el.toY + ")</p>";
  });
});
},{"../util/_":"src/util/_.ts"}],"src/state/State.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var target = {
  registerRenderFunction: function registerRenderFunction(func) {
    this.render = func;
  }
};
var stateHandler = {
  set: function set(state, prop, value) {
    // console.log(`Setting ${prop} to: `, value);
    state[prop] = value;
    state.render();
    return true;
  }
};
exports["default"] = new Proxy(target, stateHandler);
},{}],"src/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

require("./styles/main.scss");

var _1 = require("./util/_");

var board_1 = __importDefault(require("./models/board"));

var MoveList_1 = __importDefault(require("./models/MoveList"));

var render_1 = require("./render/render");

var State_1 = __importDefault(require("./state/State"));

var grid = "\nxxx111xxx\nxxx111xxx\nxx11111xx\n111111111\n111101111\n111111111\nxx11111xx\nxxx111xxx\nxxx111xxx\n";

function renderAllTheThings() {
  _1.Maybe.from(State_1["default"]).get("gameBoard").map(render_1.renderMyBoard);

  _1.Maybe.from(State_1["default"]).getPath("possibleMoves.moves").map(render_1.renderMyMoveList);
}

State_1["default"].registerRenderFunction(renderAllTheThings);
State_1["default"].gameBoard = new board_1["default"](grid);
State_1["default"].possibleMoves = new MoveList_1["default"]();
document.querySelector('.board').addEventListener('click', function (event) {
  var _a = event.target.dataset,
      x = _a.x,
      y = _a.y;

  if (x && y) {
    State_1["default"].gameBoard = State_1["default"].gameBoard.selectStone(x, y);
  }
});
},{"./styles/main.scss":"src/styles/main.scss","./util/_":"src/util/_.ts","./models/board":"src/models/board.ts","./models/MoveList":"src/models/MoveList.ts","./render/render":"src/render/render.ts","./state/State":"src/state/State.ts"}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50347" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map