(function () {
  "use strict";
  var __webpack_modules__ = ({
    "./src/regular named export dynamic/moduleA.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "namedA": function () { return namedA; },
          "namedWithImportedValue": function () { return namedWithImportedValue; }
        });
        const namedA = 'a';
        const namedWithImportedValue = async () => {
          const moduleC = await __webpack_require__.e("dynamicImportChunk").then(__webpack_require__.bind(__webpack_require__, "./src/regular named export dynamic/moduleC.js"));
          return moduleC.default + ' dynamic';
        };
      })
  });
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  __webpack_require__.m = __webpack_modules__;
  !function () {
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  }();
  !function () {
    __webpack_require__.f = {};
    __webpack_require__.e = function (chunkId) {
      return Promise.all(Object.keys(__webpack_require__.f).reduce(function (promises, key) {
        __webpack_require__.f[key](chunkId, promises);
        return promises;
      }, []));
    };
  }();
  !function () {
    __webpack_require__.u = function (chunkId) {
      return "" + chunkId + ".js";
    };
  }();
  !function () {
    __webpack_require__.g = (function () {
      if (typeof globalThis === 'object') return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if (typeof window === 'object') return window;
      }
    })();
  }();
  !function () {
    __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
  }();
  !function () {
    var inProgress = {};
    var dataWebpackPrefix = "circ-deps-repro-minimal:";
    __webpack_require__.l = function (url, done, key, chunkId) {
      if (inProgress[url]) { inProgress[url].push(done); return; }
      var script, needAttach;
      if (key !== undefined) {
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          var s = scripts[i];
          if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
        }
      }
      if (!script) {
        needAttach = true;
        script = document.createElement('script');
        script.charset = 'utf-8';
        script.timeout = 120;
        if (__webpack_require__.nc) {
          script.setAttribute("nonce", __webpack_require__.nc);
        }
        script.setAttribute("data-webpack", dataWebpackPrefix + key);
        script.src = url;
      }
      inProgress[url] = [done];
      var onScriptComplete = function (prev, event) {
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        var doneFns = inProgress[url];
        delete inProgress[url];
        script.parentNode && script.parentNode.removeChild(script);
        doneFns && doneFns.forEach(function (fn) { return fn(event); });
        if (prev) return prev(event);
      }
      var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
      script.onerror = onScriptComplete.bind(null, script.onerror);
      script.onload = onScriptComplete.bind(null, script.onload);
      needAttach && document.head.appendChild(script);
    };
  }();
  !function () {
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  }();
  !function () {
    var scriptUrl;
    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    var document = __webpack_require__.g.document;
    if (!scriptUrl && document) {
      if (document.currentScript)
        scriptUrl = document.currentScript.src;
      if (!scriptUrl) {
        var scripts = document.getElementsByTagName("script");
        if (scripts.length) scriptUrl = scripts[scripts.length - 1].src
      }
    }
    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    __webpack_require__.p = scriptUrl;
  }();
  !function () {
    var installedChunks = {
      "main": 0
    };
    __webpack_require__.f.j = function (chunkId, promises) {
      var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
      if (installedChunkData !== 0) {
        if (installedChunkData) {
          promises.push(installedChunkData[2]);
        } else {
          if (true) {
            var promise = new Promise(function (resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
            promises.push(installedChunkData[2] = promise);
            var url = __webpack_require__.p + __webpack_require__.u(chunkId);
            var error = new Error();
            var loadingEnded = function (event) {
              if (__webpack_require__.o(installedChunks, chunkId)) {
                installedChunkData = installedChunks[chunkId];
                if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
                if (installedChunkData) {
                  var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                  var realSrc = event && event.target && event.target.src;
                  error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                  error.name = 'ChunkLoadError';
                  error.type = errorType;
                  error.request = realSrc;
                  installedChunkData[1](error);
                }
              }
            };
            __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
          } else installedChunks[chunkId] = 0;
        }
      }
    };
    var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
      var chunkIds = data[0];
      var moreModules = data[1];
      var runtime = data[2];
      var moduleId, chunkId, i = 0;
      if (chunkIds.some(function (id) { return installedChunks[id] !== 0; })) {
        for (moduleId in moreModules) {
          if (__webpack_require__.o(moreModules, moduleId)) {
            __webpack_require__.m[moduleId] = moreModules[moduleId];
          }
        }
        if (runtime) var result = runtime(__webpack_require__);
      }
      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      for (; i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          installedChunks[chunkId][0]();
        }
        installedChunks[chunkId] = 0;
      }
    }
    var chunkLoadingGlobal = self["webpackChunkcirc_deps_repro_minimal"] = self["webpackChunkcirc_deps_repro_minimal"] || [];
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
  }();
  var __webpack_exports__ = {};
  !function () {
    __webpack_require__.r(__webpack_exports__);
    var _moduleA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/regular named export dynamic/moduleA.js");
    (0, _moduleA__WEBPACK_IMPORTED_MODULE_0__.namedWithImportedValue)().then((value) => {
      console.log({ namedA: _moduleA__WEBPACK_IMPORTED_MODULE_0__.namedA, namedWithImportedValueResolved: value })
    })
  }();
})()
  ;