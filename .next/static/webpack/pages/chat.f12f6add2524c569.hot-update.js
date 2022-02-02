"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/components/ChatMain.js":
/*!************************************!*\
  !*** ./src/components/ChatMain.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _FormularioChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormularioChat */ \"./src/components/FormularioChat.js\");\n/* harmony import */ var _ListaMensagens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListaMensagens */ \"./src/components/ListaMensagens.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatMain(param) {\n    var username = param.username;\n    var handleDeletaMensagem = function handleDeletaMensagem(mensagemId) {\n        _api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deletaMensagem(mensagemId).then(function() {\n            _api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getMensagens().then(function(mensagens) {\n                setListaMensagens(mensagens);\n            });\n        });\n    };\n    _s();\n    var ref = _slicedToArray(useState([]), 2), listaMensagens = ref[0], setListaMensagens = ref[1];\n    useEffect(function() {\n        _api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getMensagens().then(function(dados) {\n            return setListaMensagens(dados);\n        });\n        var subscription = _api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].escutaEmTempoReal(function(novaMensagem) {\n            //Para reusar um valor de referência array/objeto passar função para o setState\n            // Para pegar o valor atual do estado\n            setListaMensagens(function(valoratual) {\n                return [\n                    novaMensagem\n                ].concat(_toConsumableArray(valoratual));\n            });\n        });\n        return function() {\n            subscription.unsubscribe();\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            position: \"relative\",\n            display: \"flex\",\n            flex: 1,\n            height: \"80%\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.secondary[800],\n            flexDirection: \"column\",\n            borderRadius: \"5px\",\n            padding: \"16px\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListaMensagens__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                mensagens: listaMensagens,\n                filtraMensagens: handleDeletaMensagem,\n                username: username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\ChatMain.js\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormularioChat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                username: username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\ChatMain.js\",\n                lineNumber: 55,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\ChatMain.js\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, this));\n}\n_s(ChatMain, \"++TKC46bGWFf3aEd7fnJcecQSQ0=\");\n_c = ChatMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatMain);\nvar _c;\n$RefreshReg$(_c, \"ChatMain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0TWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBDO0FBQ0Q7QUFDSTtBQUNBO0FBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFZkssUUFBUSxDQUFDLEtBQVksRUFBRSxDQUFDO1FBQWJDLFFBQVEsR0FBVixLQUFZLENBQVZBLFFBQVE7UUFtQmZDLG9CQUFvQixHQUE3QixRQUFRLENBQUNBLG9CQUFvQixDQUFDQyxVQUFVLEVBQUUsQ0FBQztRQUM3Q0osMkRBQWtCLENBQUNJLFVBQVUsRUFBRUUsSUFBSSxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQzFDTix5REFBZ0IsR0FBR00sSUFBSSxDQUFDLFFBQVEsQ0FBUEUsU0FBUyxFQUFLLENBQUM7Z0JBQ3ZDQyxpQkFBaUIsQ0FBQ0QsU0FBUztZQUM1QixDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7O0lBeEJELEdBQUssQ0FBdUNFLEdBQVksa0JBQVpBLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBaERDLGNBQWMsR0FBdUJELEdBQVksS0FBakNELGlCQUFpQixHQUFJQyxHQUFZO0lBR3hERSxTQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDaEJaLHlEQUFnQixHQUFHTSxJQUFJLENBQUMsUUFBUSxDQUFQTyxLQUFLO1lBQUtKLE1BQU0sQ0FBTkEsaUJBQWlCLENBQUNJLEtBQUs7O1FBQzFELEdBQUssQ0FBQ0MsWUFBWSxHQUFHZCw4REFBcUIsQ0FBQyxRQUFRLENBQVBnQixZQUFZLEVBQUssQ0FBQztZQUM3RCxFQUErRTtZQUMvRSxFQUFxQztZQUNyQ1AsaUJBQWlCLENBQUMsUUFBUSxDQUFQUSxVQUFVLEVBQUssQ0FBQztnQkFDbEMsTUFBTSxDQUFDLENBQUNEO29CQUFBQSxZQUFZO2dCQUFlLENBQUMsQ0FBN0IsTUFBNkIsb0JBQVhDLFVBQVU7WUFDcEMsQ0FBQztRQUNGLENBQUM7UUFFRCxNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDYkgsWUFBWSxDQUFDSSxXQUFXO1FBQ3pCLENBQUM7SUFDRixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBV0YsTUFBTSw2RUFDUHRCLHFEQUFHO1FBQ0h1QixVQUFVLEVBQUUsQ0FBQztZQUNaQyxRQUFRLEVBQUUsQ0FBVTtZQUNwQkMsT0FBTyxFQUFFLENBQU07WUFDZkMsSUFBSSxFQUFFLENBQUM7WUFDUEMsTUFBTSxFQUFFLENBQUs7WUFDYkMsZUFBZSxFQUFFM0IscUVBQXFDO1lBQ3REK0IsYUFBYSxFQUFFLENBQVE7WUFDdkJDLFlBQVksRUFBRSxDQUFLO1lBQ25CQyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxRQUFRLEVBQUUsQ0FBUTtRQUNuQixDQUFDOzt3RkFFQWhDLHVEQUFjO2dCQUNkUyxTQUFTLEVBQUVHLGNBQWM7Z0JBQ3pCcUIsZUFBZSxFQUFFN0Isb0JBQW9CO2dCQUNyQ0QsUUFBUSxFQUFFQSxRQUFROzs7Ozs7d0ZBR2xCSix1REFBYztnQkFBQ0ksUUFBUSxFQUFFQSxRQUFROzs7Ozs7Ozs7Ozs7QUFHckMsQ0FBQztHQW5EUUQsUUFBUTtLQUFSQSxRQUFRO0FBcURqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRNYWluLmpzP2RhZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBza3luZXh1aS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzb24nO1xyXG5pbXBvcnQgRm9ybXVsYXJpb0NoYXQgZnJvbSBcIi4vRm9ybXVsYXJpb0NoYXRcIjtcclxuaW1wb3J0IExpc3RhTWVuc2FnZW5zIGZyb20gXCIuL0xpc3RhTWVuc2FnZW5zXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hhdE1haW4oeyB1c2VybmFtZSB9KSB7XHJcblx0Y29uc3QgW2xpc3RhTWVuc2FnZW5zLCBzZXRMaXN0YU1lbnNhZ2Vuc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGFwaS5nZXRNZW5zYWdlbnMoKS50aGVuKChkYWRvcykgPT4gc2V0TGlzdGFNZW5zYWdlbnMoZGFkb3MpKTtcclxuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IGFwaS5lc2N1dGFFbVRlbXBvUmVhbCgobm92YU1lbnNhZ2VtKSA9PiB7XHJcblx0XHRcdC8vUGFyYSByZXVzYXIgdW0gdmFsb3IgZGUgcmVmZXLDqm5jaWEgYXJyYXkvb2JqZXRvIHBhc3NhciBmdW7Dp8OjbyBwYXJhIG8gc2V0U3RhdGVcclxuXHRcdFx0Ly8gUGFyYSBwZWdhciBvIHZhbG9yIGF0dWFsIGRvIGVzdGFkb1xyXG5cdFx0XHRzZXRMaXN0YU1lbnNhZ2VucygodmFsb3JhdHVhbCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBbbm92YU1lbnNhZ2VtLCAuLi52YWxvcmF0dWFsXTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdH07XHJcblx0fSwgW10pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGFNZW5zYWdlbShtZW5zYWdlbUlkKSB7XHJcblx0XHRhcGkuZGVsZXRhTWVuc2FnZW0obWVuc2FnZW1JZCkudGhlbigoKSA9PiB7XHJcblx0XHRcdGFwaS5nZXRNZW5zYWdlbnMoKS50aGVuKChtZW5zYWdlbnMpID0+IHtcclxuXHRcdFx0XHRzZXRMaXN0YU1lbnNhZ2VucyhtZW5zYWdlbnMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHRcdDxCb3hcclxuXHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0ZmxleDogMSxcclxuXHRcdFx0XHRoZWlnaHQ6IFwiODAlXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnNlY29uZGFyeVs4MDBdLFxyXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG5cdFx0XHRcdHBhZGRpbmc6IFwiMTZweFwiLFxyXG5cdFx0XHRcdG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8TGlzdGFNZW5zYWdlbnNcclxuXHRcdFx0XHRtZW5zYWdlbnM9e2xpc3RhTWVuc2FnZW5zfVxyXG5cdFx0XHRcdGZpbHRyYU1lbnNhZ2Vucz17aGFuZGxlRGVsZXRhTWVuc2FnZW19XHJcblx0XHRcdFx0dXNlcm5hbWU9e3VzZXJuYW1lfVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PEZvcm11bGFyaW9DaGF0IHVzZXJuYW1lPXt1c2VybmFtZX0gLz5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRNYWluO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiYXBwQ29uZmlnIiwiRm9ybXVsYXJpb0NoYXQiLCJMaXN0YU1lbnNhZ2VucyIsImFwaSIsIkNoYXRNYWluIiwidXNlcm5hbWUiLCJoYW5kbGVEZWxldGFNZW5zYWdlbSIsIm1lbnNhZ2VtSWQiLCJkZWxldGFNZW5zYWdlbSIsInRoZW4iLCJnZXRNZW5zYWdlbnMiLCJtZW5zYWdlbnMiLCJzZXRMaXN0YU1lbnNhZ2VucyIsInVzZVN0YXRlIiwibGlzdGFNZW5zYWdlbnMiLCJ1c2VFZmZlY3QiLCJkYWRvcyIsInN1YnNjcmlwdGlvbiIsImVzY3V0YUVtVGVtcG9SZWFsIiwibm92YU1lbnNhZ2VtIiwidmFsb3JhdHVhbCIsInVuc3Vic2NyaWJlIiwic3R5bGVTaGVldCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImZsZXgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInNlY29uZGFyeSIsImZsZXhEaXJlY3Rpb24iLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJmaWx0cmFNZW5zYWdlbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ChatMain.js\n");

/***/ }),

/***/ "./src/pages/chat.js":
/*!***************************!*\
  !*** ./src/pages/chat.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n/* harmony import */ var _components_BotaoAbreStickers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BotaoAbreStickers */ \"./src/components/BotaoAbreStickers.js\");\n/* harmony import */ var _components_ChatHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ChatHeader */ \"./src/components/ChatHeader.js\");\n/* harmony import */ var _components_ListaMensagens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ListaMensagens */ \"./src/components/ListaMensagens.js\");\n/* harmony import */ var _public_bg2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/bg2.jpg */ \"./public/bg2.jpg\");\n/* harmony import */ var _components_FormularioChat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FormularioChat */ \"./src/components/FormularioChat.js\");\n/* harmony import */ var _components_ChatMain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ChatMain */ \"./src/components/ChatMain.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var resizeFrame = function resizeFrame(e) {\n        var active = drag.active, x = drag.x, y = drag.y;\n        if (active) {\n            var xDiff = Math.abs(x - e.clientX);\n            var yDiff = Math.abs(y - e.clientY);\n            var newW = x > e.clientX ? dims.w - xDiff : dims.w + xDiff;\n            var newH = y > e.clientY ? dims.h + yDiff : dims.h - yDiff;\n            setDrag(_objectSpread({}, drag, {\n                x: e.clientX,\n                y: e.clientY\n            }));\n            setDims({\n                w: newW,\n                h: newH\n            });\n        }\n    };\n    var stopResize = function stopResize() {\n        setDrag(_objectSpread({}, drag, {\n            active: false\n        }));\n    };\n    _s();\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var username = roteamento.query.username;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaMensagens = ref[0], setListaMensagens = ref[1];\n    // possibilitando redimensionar o container\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        active: false,\n        x: \"\",\n        y: \"\"\n    }), drag = ref1[0], setDrag = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        w: 500,\n        h: 600\n    }), dims = ref2[0], setDims = ref2[1];\n    var startResize = function(e) {\n        setDrag({\n            active: true,\n            x: e.clientX,\n            y: e.clientY\n        });\n    };\n    var boxStyle = {\n        maxWidth: \"\".concat(dims.w, \"px\"),\n        height: \"\".concat(dims.h, \"px\")\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundPosition: \"center\",\n            backgroundImage: \"url(\".concat(_public_bg2_jpg__WEBPACK_IMPORTED_MODULE_9__[\"default\"].src, \")\"),\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            backdropFilter: \"blur( 4px )\",\n            transition: \".5s all\"\n        },\n        onMouseMove: resizeFrame,\n        onMouseUp: stopResize,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                borderRadius: \"5px\",\n                backgroundColor: \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.secondary[900], \"ca\"),\n                maxWidth: boxStyle.maxWidth,\n                height: boxStyle.height,\n                minWidth: \"350px\",\n                minHeight: \"400px\",\n                padding: \"32px\",\n                position: \"relative\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                    name: \"FaCropAlt\",\n                    size: \"2ch\",\n                    onMouseDown: startResize,\n                    styleSheet: {\n                        position: \"absolute\",\n                        top: \"0\",\n                        right: \"0\",\n                        filter: \"invert(100%)\",\n                        cursor: drag.active ? \"grabbing\" : \"grab\",\n                        opacity: \".3\",\n                        display: {\n                            md: \"inherit\",\n                            sm: \"none\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n                    lineNumber: 89,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatHeader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n                    lineNumber: 103,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatMain__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n                    lineNumber: 104,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n            lineNumber: 74,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, this));\n};\n_s(ChatPage, \"kSao0s6GpSTuKcVgXiJDW4Hb3sE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBQyxDQUFXO29CQUNoQkMsSUFBSSxFQUFDLENBQUs7b0JBQ1ZDLFdBQVcsRUFBRS9CLFdBQVc7b0JBQ3hCSSxVQUFVLEVBQUUsQ0FBQzt3QkFDWndCLFFBQVEsRUFBRSxDQUFVO3dCQUNwQkksR0FBRyxFQUFFLENBQUc7d0JBQ1JDLEtBQUssRUFBRSxDQUFHO3dCQUNWQyxNQUFNLEVBQUUsQ0FBYzt3QkFDdEJDLE1BQU0sRUFBRXpELElBQUksQ0FBQ0QsTUFBTSxHQUFHLENBQVUsWUFBRyxDQUFNO3dCQUN6QzJELE9BQU8sRUFBRSxDQUFJO3dCQUNiL0IsT0FBTyxFQUFFLENBQUM7NEJBQUNnQyxFQUFFLEVBQUUsQ0FBUzs0QkFBRUMsRUFBRSxFQUFFLENBQU07d0JBQUMsQ0FBQztvQkFDdkMsQ0FBQzs7Ozs7OzRGQUVEckUsOERBQVU7Ozs7OzRGQUNWSSw2REFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQUliLENBQUM7R0EvRnVCQyxRQUFROztRQUNaVCxrREFBUzs7O0tBRExTLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXQuanM/ZDBmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHRGaWVsZCwgSWNvbiB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnLmpzb25cIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7IEJ1dHRvblNlbmRTdGlja2VyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm90YW9BYnJlU3RpY2tlcnNcIjtcclxuaW1wb3J0IENoYXRIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdEhlYWRlclwiO1xyXG5pbXBvcnQgTGlzdGFNZW5zYWdlbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdGFNZW5zYWdlbnNcIjtcclxuaW1wb3J0IGJnSW1nIGZyb20gXCIuLi8uLi9wdWJsaWMvYmcyLmpwZ1wiO1xyXG5pbXBvcnQgRm9ybXVsYXJpb0NoYXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybXVsYXJpb0NoYXRcIjtcclxuaW1wb3J0IENoYXRNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXRNYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuXHRjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgdXNlcm5hbWUgPSByb3RlYW1lbnRvLnF1ZXJ5LnVzZXJuYW1lO1xyXG5cdGNvbnN0IFtsaXN0YU1lbnNhZ2Vucywgc2V0TGlzdGFNZW5zYWdlbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHQvLyBwb3NzaWJpbGl0YW5kbyByZWRpbWVuc2lvbmFyIG8gY29udGFpbmVyXHJcblx0Y29uc3QgW2RyYWcsIHNldERyYWddID0gdXNlU3RhdGUoe1xyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdHg6IFwiXCIsXHJcblx0XHR5OiBcIlwiLFxyXG5cdH0pO1xyXG5cdGNvbnN0IFtkaW1zLCBzZXREaW1zXSA9IHVzZVN0YXRlKHtcclxuXHRcdHc6IDUwMCxcclxuXHRcdGg6IDYwMCxcclxuXHR9KTtcclxuXHRjb25zdCBzdGFydFJlc2l6ZSA9IChlKSA9PiB7XHJcblx0XHRzZXREcmFnKHtcclxuXHRcdFx0YWN0aXZlOiB0cnVlLFxyXG5cdFx0XHR4OiBlLmNsaWVudFgsXHJcblx0XHRcdHk6IGUuY2xpZW50WSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Y29uc3QgYm94U3R5bGUgPSB7XHJcblx0XHRtYXhXaWR0aDogYCR7ZGltcy53fXB4YCxcclxuXHRcdGhlaWdodDogYCR7ZGltcy5ofXB4YCxcclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiByZXNpemVGcmFtZShlKSB7XHJcblx0XHRjb25zdCB7IGFjdGl2ZSwgeCwgeSB9ID0gZHJhZztcclxuXHRcdGlmIChhY3RpdmUpIHtcclxuXHRcdFx0Y29uc3QgeERpZmYgPSBNYXRoLmFicyh4IC0gZS5jbGllbnRYKTtcclxuXHRcdFx0Y29uc3QgeURpZmYgPSBNYXRoLmFicyh5IC0gZS5jbGllbnRZKTtcclxuXHRcdFx0Y29uc3QgbmV3VyA9IHggPiBlLmNsaWVudFggPyBkaW1zLncgLSB4RGlmZiA6IGRpbXMudyArIHhEaWZmO1xyXG5cdFx0XHRjb25zdCBuZXdIID0geSA+IGUuY2xpZW50WSA/IGRpbXMuaCArIHlEaWZmIDogZGltcy5oIC0geURpZmY7XHJcblxyXG5cdFx0XHRzZXREcmFnKHsgLi4uZHJhZywgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfSk7XHJcblx0XHRcdHNldERpbXMoeyB3OiBuZXdXLCBoOiBuZXdIIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc3RvcFJlc2l6ZSgpIHtcclxuXHRcdHNldERyYWcoeyAuLi5kcmFnLCBhY3RpdmU6IGZhbHNlIH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3hcclxuXHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke2JnSW1nLnNyY30pYCxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG5cdFx0XHRcdGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoIDRweCApXCIsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIuNXMgYWxsXCIsXHJcblx0XHRcdH19XHJcblx0XHRcdG9uTW91c2VNb3ZlPXtyZXNpemVGcmFtZX1cclxuXHRcdFx0b25Nb3VzZVVwPXtzdG9wUmVzaXplfVxyXG5cdFx0PlxyXG5cdFx0XHQ8Qm94XHJcblx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cdFx0XHRcdFx0ZmxleDogMSxcclxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYCR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnlbOTAwXX1jYWAsXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogYm94U3R5bGUubWF4V2lkdGgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IGJveFN0eWxlLmhlaWdodCxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiBcIjM1MHB4XCIsXHJcblx0XHRcdFx0XHRtaW5IZWlnaHQ6IFwiNDAwcHhcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFwiMzJweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEljb25cclxuXHRcdFx0XHRcdG5hbWU9XCJGYUNyb3BBbHRcIlxyXG5cdFx0XHRcdFx0c2l6ZT1cIjJjaFwiXHJcblx0XHRcdFx0XHRvbk1vdXNlRG93bj17c3RhcnRSZXNpemV9XHJcblx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRcdHJpZ2h0OiBcIjBcIixcclxuXHRcdFx0XHRcdFx0ZmlsdGVyOiBcImludmVydCgxMDAlKVwiLFxyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IGRyYWcuYWN0aXZlID8gXCJncmFiYmluZ1wiIDogXCJncmFiXCIsXHJcblx0XHRcdFx0XHRcdG9wYWNpdHk6IFwiLjNcIixcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogeyBtZDogXCJpbmhlcml0XCIsIHNtOiBcIm5vbmVcIiB9LFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDaGF0SGVhZGVyIC8+XHJcblx0XHRcdFx0PENoYXRNYWluIC8+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dEZpZWxkIiwiSWNvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhcHBDb25maWciLCJhcGkiLCJCdXR0b25TZW5kU3RpY2tlciIsIkNoYXRIZWFkZXIiLCJMaXN0YU1lbnNhZ2VucyIsImJnSW1nIiwiRm9ybXVsYXJpb0NoYXQiLCJDaGF0TWFpbiIsIkNoYXRQYWdlIiwicmVzaXplRnJhbWUiLCJlIiwiYWN0aXZlIiwiZHJhZyIsIngiLCJ5IiwieERpZmYiLCJNYXRoIiwiYWJzIiwiY2xpZW50WCIsInlEaWZmIiwiY2xpZW50WSIsIm5ld1ciLCJkaW1zIiwidyIsIm5ld0giLCJoIiwic2V0RHJhZyIsInNldERpbXMiLCJzdG9wUmVzaXplIiwicm90ZWFtZW50byIsInVzZXJuYW1lIiwicXVlcnkiLCJsaXN0YU1lbnNhZ2VucyIsInNldExpc3RhTWVuc2FnZW5zIiwic3RhcnRSZXNpemUiLCJib3hTdHlsZSIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ0cmFuc2l0aW9uIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJuYW1lIiwic2l6ZSIsIm9uTW91c2VEb3duIiwidG9wIiwicmlnaHQiLCJmaWx0ZXIiLCJjdXJzb3IiLCJvcGFjaXR5IiwibWQiLCJzbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chat.js\n");

/***/ })

});