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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _FormularioChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormularioChat */ \"./src/components/FormularioChat.js\");\n/* harmony import */ var _ListaMensagens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListaMensagens */ \"./src/components/ListaMensagens.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatMain() {\n    var handleDeletaMensagem = function handleDeletaMensagem(mensagemId) {\n        _api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].deletaMensagem(mensagemId).then(function() {\n            _api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getMensagens().then(function(mensagens) {\n                setListaMensagens(mensagens);\n            });\n        });\n    };\n    _s();\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var username = roteamento.query.username;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]), listaMensagens = ref[0], setListaMensagens = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        _api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getMensagens().then(function(dados) {\n            return setListaMensagens(dados);\n        });\n        var subscription = _api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].escutaEmTempoReal(function(novaMensagem) {\n            //Para reusar um valor de referência array/objeto passar função para o setState\n            // Para pegar o valor atual do estado\n            setListaMensagens(function(valoratual) {\n                return [\n                    novaMensagem\n                ].concat(_toConsumableArray(valoratual));\n            });\n        });\n        return function() {\n            subscription.unsubscribe();\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            position: \"relative\",\n            display: \"flex\",\n            flex: 1,\n            height: \"80%\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.secondary[800],\n            flexDirection: \"column\",\n            borderRadius: \"5px\",\n            padding: \"16px\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListaMensagens__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                mensagens: listaMensagens,\n                filtraMensagens: handleDeletaMensagem,\n                username: username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\ChatMain.js\",\n                lineNumber: 53,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormularioChat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                username: username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\ChatMain.js\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\ChatMain.js\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, this));\n}\n_s(ChatMain, \"58RMFBWYXdF/o0pjkfaFQrb/Bcg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ChatMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatMain);\nvar _c;\n$RefreshReg$(_c, \"ChatMain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0TWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNEO0FBQ0k7QUFDQTtBQUNOO0FBQ2Y7QUFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVsQ1EsUUFBUSxHQUFHLENBQUM7UUFxQlJDLG9CQUFvQixHQUE3QixRQUFRLENBQUNBLG9CQUFvQixDQUFDQyxVQUFVLEVBQUUsQ0FBQztRQUM3Q0wsMkRBQWtCLENBQUNLLFVBQVUsRUFBRUUsSUFBSSxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQzFDUCx5REFBZ0IsR0FBR08sSUFBSSxDQUFDLFFBQVEsQ0FBUEUsU0FBUyxFQUFLLENBQUM7Z0JBQ3ZDQyxpQkFBaUIsQ0FBQ0QsU0FBUztZQUM1QixDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7O0lBMUJELEdBQUssQ0FBQ0UsVUFBVSxHQUFHWixzREFBUztJQUM1QixHQUFLLENBQUNhLFFBQVEsR0FBR0QsVUFBVSxDQUFDRSxLQUFLLENBQUNELFFBQVE7SUFFMUMsR0FBSyxDQUF1Q1YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFoRFksY0FBYyxHQUF1QlosR0FBWSxLQUFqQ1EsaUJBQWlCLEdBQUlSLEdBQVk7SUFFeERELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDaEJELHlEQUFnQixHQUFHTyxJQUFJLENBQUMsUUFBUSxDQUFQUSxLQUFLO1lBQUtMLE1BQU0sQ0FBTkEsaUJBQWlCLENBQUNLLEtBQUs7O1FBQzFELEdBQUssQ0FBQ0MsWUFBWSxHQUFHaEIsOERBQXFCLENBQUMsUUFBUSxDQUFQa0IsWUFBWSxFQUFLLENBQUM7WUFDN0QsRUFBK0U7WUFDL0UsRUFBcUM7WUFDckNSLGlCQUFpQixDQUFDLFFBQVEsQ0FBUFMsVUFBVSxFQUFLLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxDQUFDRDtvQkFBQUEsWUFBWTtnQkFBZSxDQUFDLENBQTdCLE1BQTZCLG9CQUFYQyxVQUFVO1lBQ3BDLENBQUM7UUFDRixDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQ2JILFlBQVksQ0FBQ0ksV0FBVztRQUN6QixDQUFDO0lBQ0YsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQVdGLE1BQU0sNkVBQ1B6QixxREFBRztRQUNIMEIsVUFBVSxFQUFFLENBQUM7WUFDWkMsUUFBUSxFQUFFLENBQVU7WUFDcEJDLE9BQU8sRUFBRSxDQUFNO1lBQ2ZDLElBQUksRUFBRSxDQUFDO1lBQ1BDLE1BQU0sRUFBRSxDQUFLO1lBQ2JDLGVBQWUsRUFBRTlCLHFFQUFxQztZQUN0RGtDLGFBQWEsRUFBRSxDQUFRO1lBQ3ZCQyxZQUFZLEVBQUUsQ0FBSztZQUNuQkMsT0FBTyxFQUFFLENBQU07WUFDZkMsUUFBUSxFQUFFLENBQVE7UUFDbkIsQ0FBQzs7d0ZBRUFuQyx1REFBYztnQkFDZFcsU0FBUyxFQUFFSyxjQUFjO2dCQUN6Qm9CLGVBQWUsRUFBRTlCLG9CQUFvQjtnQkFDckNRLFFBQVEsRUFBRUEsUUFBUTs7Ozs7O3dGQUdsQmYsdURBQWM7Z0JBQUNlLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7Ozs7O0FBR3JDLENBQUM7R0FyRFFULFFBQVE7O1FBQ0dKLGtEQUFTOzs7S0FEcEJJLFFBQVE7QUF1RGpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdE1haW4uanM/ZGFkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanNvbic7XHJcbmltcG9ydCBGb3JtdWxhcmlvQ2hhdCBmcm9tIFwiLi9Gb3JtdWxhcmlvQ2hhdFwiO1xyXG5pbXBvcnQgTGlzdGFNZW5zYWdlbnMgZnJvbSBcIi4vTGlzdGFNZW5zYWdlbnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDaGF0TWFpbigpIHtcclxuXHRjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgdXNlcm5hbWUgPSByb3RlYW1lbnRvLnF1ZXJ5LnVzZXJuYW1lO1xyXG5cclxuXHRjb25zdCBbbGlzdGFNZW5zYWdlbnMsIHNldExpc3RhTWVuc2FnZW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRhcGkuZ2V0TWVuc2FnZW5zKCkudGhlbigoZGFkb3MpID0+IHNldExpc3RhTWVuc2FnZW5zKGRhZG9zKSk7XHJcblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSBhcGkuZXNjdXRhRW1UZW1wb1JlYWwoKG5vdmFNZW5zYWdlbSkgPT4ge1xyXG5cdFx0XHQvL1BhcmEgcmV1c2FyIHVtIHZhbG9yIGRlIHJlZmVyw6puY2lhIGFycmF5L29iamV0byBwYXNzYXIgZnVuw6fDo28gcGFyYSBvIHNldFN0YXRlXHJcblx0XHRcdC8vIFBhcmEgcGVnYXIgbyB2YWxvciBhdHVhbCBkbyBlc3RhZG9cclxuXHRcdFx0c2V0TGlzdGFNZW5zYWdlbnMoKHZhbG9yYXR1YWwpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gW25vdmFNZW5zYWdlbSwgLi4udmFsb3JhdHVhbF07XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0c3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR9O1xyXG5cdH0sIFtdKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRhTWVuc2FnZW0obWVuc2FnZW1JZCkge1xyXG5cdFx0YXBpLmRlbGV0YU1lbnNhZ2VtKG1lbnNhZ2VtSWQpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRhcGkuZ2V0TWVuc2FnZW5zKCkudGhlbigobWVuc2FnZW5zKSA9PiB7XHJcblx0XHRcdFx0c2V0TGlzdGFNZW5zYWdlbnMobWVuc2FnZW5zKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdGZsZXg6IDEsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjgwJVwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnlbODAwXSxcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRwYWRkaW5nOiBcIjE2cHhcIixcclxuXHRcdFx0XHRvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PExpc3RhTWVuc2FnZW5zXHJcblx0XHRcdFx0bWVuc2FnZW5zPXtsaXN0YU1lbnNhZ2Vuc31cclxuXHRcdFx0XHRmaWx0cmFNZW5zYWdlbnM9e2hhbmRsZURlbGV0YU1lbnNhZ2VtfVxyXG5cdFx0XHRcdHVzZXJuYW1lPXt1c2VybmFtZX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxGb3JtdWxhcmlvQ2hhdCB1c2VybmFtZT17dXNlcm5hbWV9IC8+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0TWFpbjtcclxuIl0sIm5hbWVzIjpbIkJveCIsImFwcENvbmZpZyIsIkZvcm11bGFyaW9DaGF0IiwiTGlzdGFNZW5zYWdlbnMiLCJ1c2VSb3V0ZXIiLCJhcGkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXRNYWluIiwiaGFuZGxlRGVsZXRhTWVuc2FnZW0iLCJtZW5zYWdlbUlkIiwiZGVsZXRhTWVuc2FnZW0iLCJ0aGVuIiwiZ2V0TWVuc2FnZW5zIiwibWVuc2FnZW5zIiwic2V0TGlzdGFNZW5zYWdlbnMiLCJyb3RlYW1lbnRvIiwidXNlcm5hbWUiLCJxdWVyeSIsImxpc3RhTWVuc2FnZW5zIiwiZGFkb3MiLCJzdWJzY3JpcHRpb24iLCJlc2N1dGFFbVRlbXBvUmVhbCIsIm5vdmFNZW5zYWdlbSIsInZhbG9yYXR1YWwiLCJ1bnN1YnNjcmliZSIsInN0eWxlU2hlZXQiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4IiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm92ZXJmbG93IiwiZmlsdHJhTWVuc2FnZW5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ChatMain.js\n");

/***/ }),

/***/ "./src/pages/chat.js":
/*!***************************!*\
  !*** ./src/pages/chat.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _components_ChatHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ChatHeader */ \"./src/components/ChatHeader.js\");\n/* harmony import */ var _public_bg2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/bg2.jpg */ \"./public/bg2.jpg\");\n/* harmony import */ var _components_ChatMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChatMain */ \"./src/components/ChatMain.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var resizeFrame = function resizeFrame(e) {\n        var active = drag.active, x = drag.x, y = drag.y;\n        if (active) {\n            var xDiff = Math.abs(x - e.clientX);\n            var yDiff = Math.abs(y - e.clientY);\n            var newW = x > e.clientX ? dims.w - xDiff : dims.w + xDiff;\n            var newH = y > e.clientY ? dims.h + yDiff : dims.h - yDiff;\n            setDrag(_objectSpread({}, drag, {\n                x: e.clientX,\n                y: e.clientY\n            }));\n            setDims({\n                w: newW,\n                h: newH\n            });\n        }\n    };\n    var stopResize = function stopResize() {\n        setDrag(_objectSpread({}, drag, {\n            active: false\n        }));\n    };\n    _s();\n    // possibilitando redimensionar o container\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        active: false,\n        x: \"\",\n        y: \"\"\n    }), drag = ref[0], setDrag = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        w: 500,\n        h: 600\n    }), dims = ref1[0], setDims = ref1[1];\n    var startResize = function(e) {\n        setDrag({\n            active: true,\n            x: e.clientX,\n            y: e.clientY\n        });\n    };\n    var boxStyle = {\n        maxWidth: \"\".concat(dims.w, \"px\"),\n        height: \"\".concat(dims.h, \"px\")\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundPosition: \"center\",\n            backgroundImage: \"url(\".concat(_public_bg2_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src, \")\"),\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            backdropFilter: \"blur( 4px )\",\n            transition: \".5s all\"\n        },\n        onMouseMove: resizeFrame,\n        onMouseUp: stopResize,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                borderRadius: \"5px\",\n                backgroundColor: \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.secondary[900], \"ca\"),\n                maxWidth: boxStyle.maxWidth,\n                height: boxStyle.height,\n                minWidth: \"350px\",\n                minHeight: \"400px\",\n                padding: \"32px\",\n                position: \"relative\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                    name: \"FaCropAlt\",\n                    size: \"2ch\",\n                    onMouseDown: startResize,\n                    styleSheet: {\n                        position: \"absolute\",\n                        top: \"0\",\n                        right: \"0\",\n                        filter: \"invert(100%)\",\n                        cursor: drag.active ? \"grabbing\" : \"grab\",\n                        opacity: \".3\",\n                        display: {\n                            md: \"inherit\",\n                            sm: \"none\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n                    lineNumber: 82,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n                    lineNumber: 96,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatMain__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    username: username\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n                    lineNumber: 97,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n            lineNumber: 67,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\chat.js\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, this));\n};\n_s(ChatPage, \"N+JgiOseohQU8Z0Bz673k2Os7+8=\");\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDVDtBQUNFO0FBQ1E7QUFDVDtBQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsUUFBUSxDQUFDUSxRQUFRLEdBQUcsQ0FBQztRQXlCMUJDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLENBQUNDLENBQUMsRUFBRSxDQUFDO1FBQ3hCLEdBQUssQ0FBR0MsTUFBTSxHQUFXQyxJQUFJLENBQXJCRCxNQUFNLEVBQUVFLENBQUMsR0FBUUQsSUFBSSxDQUFiQyxDQUFDLEVBQUVDLENBQUMsR0FBS0YsSUFBSSxDQUFWRSxDQUFDO1FBQ3BCLEVBQUUsRUFBRUgsTUFBTSxFQUFFLENBQUM7WUFDWixHQUFLLENBQUNJLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxHQUFHLENBQUNKLENBQUMsR0FBR0gsQ0FBQyxDQUFDUSxPQUFPO1lBQ3BDLEdBQUssQ0FBQ0MsS0FBSyxHQUFHSCxJQUFJLENBQUNDLEdBQUcsQ0FBQ0gsQ0FBQyxHQUFHSixDQUFDLENBQUNVLE9BQU87WUFDcEMsR0FBSyxDQUFDQyxJQUFJLEdBQUdSLENBQUMsR0FBR0gsQ0FBQyxDQUFDUSxPQUFPLEdBQUdJLElBQUksQ0FBQ0MsQ0FBQyxHQUFHUixLQUFLLEdBQUdPLElBQUksQ0FBQ0MsQ0FBQyxHQUFHUixLQUFLO1lBQzVELEdBQUssQ0FBQ1MsSUFBSSxHQUFHVixDQUFDLEdBQUdKLENBQUMsQ0FBQ1UsT0FBTyxHQUFHRSxJQUFJLENBQUNHLENBQUMsR0FBR04sS0FBSyxHQUFHRyxJQUFJLENBQUNHLENBQUMsR0FBR04sS0FBSztZQUU1RE8sT0FBTyxtQkFBTWQsSUFBSTtnQkFBRUMsQ0FBQyxFQUFFSCxDQUFDLENBQUNRLE9BQU87Z0JBQUVKLENBQUMsRUFBRUosQ0FBQyxDQUFDVSxPQUFPOztZQUM3Q08sT0FBTyxDQUFDLENBQUM7Z0JBQUNKLENBQUMsRUFBRUYsSUFBSTtnQkFBRUksQ0FBQyxFQUFFRCxJQUFJO1lBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0YsQ0FBQztRQUVRSSxVQUFVLEdBQW5CLFFBQVEsQ0FBQ0EsVUFBVSxHQUFHLENBQUM7UUFDdEJGLE9BQU8sbUJBQU1kLElBQUk7WUFBRUQsTUFBTSxFQUFFLEtBQUs7O0lBQ2pDLENBQUM7O0lBckNELEVBQTJDO0lBQzNDLEdBQUssQ0FBbUJSLEdBSXRCLEdBSnNCQSwrQ0FBUSxDQUFDLENBQUM7UUFDakNRLE1BQU0sRUFBRSxLQUFLO1FBQ2JFLENBQUMsRUFBRSxDQUFFO1FBQ0xDLENBQUMsRUFBRSxDQUFFO0lBQ04sQ0FBQyxHQUpNRixJQUFJLEdBQWFULEdBSXRCLEtBSld1QixPQUFPLEdBQUl2QixHQUl0QjtJQUNGLEdBQUssQ0FBbUJBLElBR3RCLEdBSHNCQSwrQ0FBUSxDQUFDLENBQUM7UUFDakNvQixDQUFDLEVBQUUsR0FBRztRQUNORSxDQUFDLEVBQUUsR0FBRztJQUNQLENBQUMsR0FITUgsSUFBSSxHQUFhbkIsSUFHdEIsS0FIV3dCLE9BQU8sR0FBSXhCLElBR3RCO0lBQ0YsR0FBSyxDQUFDMEIsV0FBVyxHQUFHLFFBQVEsQ0FBUG5CLENBQUMsRUFBSyxDQUFDO1FBQzNCZ0IsT0FBTyxDQUFDLENBQUM7WUFDUmYsTUFBTSxFQUFFLElBQUk7WUFDWkUsQ0FBQyxFQUFFSCxDQUFDLENBQUNRLE9BQU87WUFDWkosQ0FBQyxFQUFFSixDQUFDLENBQUNVLE9BQU87UUFDYixDQUFDO0lBQ0YsQ0FBQztJQUNELEdBQUssQ0FBQ1UsUUFBUSxHQUFHLENBQUM7UUFDakJDLFFBQVEsRUFBRyxHQUFTLE1BQUUsQ0FBVFQsSUFBSSxDQUFDQyxDQUFDLEVBQUMsQ0FBRTtRQUN0QlMsTUFBTSxFQUFHLEdBQVMsTUFBRSxDQUFUVixJQUFJLENBQUNHLENBQUMsRUFBQyxDQUFFO0lBQ3JCLENBQUM7SUFtQkQsTUFBTSw2RUFDSnpCLHFEQUFHO1FBQ0hpQyxVQUFVLEVBQUUsQ0FBQztZQUNaQyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxVQUFVLEVBQUUsQ0FBUTtZQUNwQkMsY0FBYyxFQUFFLENBQVE7WUFDeEJDLGtCQUFrQixFQUFFLENBQVE7WUFDNUJDLGVBQWUsRUFBRyxDQUFJLE1BQVksTUFBQyxDQUFYaEMsMkRBQVMsRUFBQyxDQUFDO1lBQ25Da0MsZ0JBQWdCLEVBQUUsQ0FBVztZQUM3QkMsY0FBYyxFQUFFLENBQU87WUFDdkJDLG1CQUFtQixFQUFFLENBQVU7WUFDL0JDLGNBQWMsRUFBRSxDQUFhO1lBQzdCQyxVQUFVLEVBQUUsQ0FBUztRQUN0QixDQUFDO1FBQ0RDLFdBQVcsRUFBRXBDLFdBQVc7UUFDeEJxQyxTQUFTLEVBQUVsQixVQUFVOzhGQUVwQjVCLHFEQUFHO1lBQ0hpQyxVQUFVLEVBQUUsQ0FBQztnQkFDWkMsT0FBTyxFQUFFLENBQU07Z0JBQ2ZhLGFBQWEsRUFBRSxDQUFRO2dCQUN2QkMsSUFBSSxFQUFFLENBQUM7Z0JBQ1BDLFlBQVksRUFBRSxDQUFLO2dCQUNuQkMsZUFBZSxFQUFHLEdBQXdDLE1BQUUsQ0FBeEM5QyxxRUFBcUMsRUFBQyxDQUFFO2dCQUM1RDJCLFFBQVEsRUFBRUQsUUFBUSxDQUFDQyxRQUFRO2dCQUMzQkMsTUFBTSxFQUFFRixRQUFRLENBQUNFLE1BQU07Z0JBQ3ZCc0IsUUFBUSxFQUFFLENBQU87Z0JBQ2pCQyxTQUFTLEVBQUUsQ0FBTztnQkFDbEJDLE9BQU8sRUFBRSxDQUFNO2dCQUNmQyxRQUFRLEVBQUUsQ0FBVTtZQUNyQixDQUFDOzs0RkFFQXhELHNEQUFJO29CQUNKeUQsSUFBSSxFQUFDLENBQVc7b0JBQ2hCQyxJQUFJLEVBQUMsQ0FBSztvQkFDVkMsV0FBVyxFQUFFL0IsV0FBVztvQkFDeEJJLFVBQVUsRUFBRSxDQUFDO3dCQUNad0IsUUFBUSxFQUFFLENBQVU7d0JBQ3BCSSxHQUFHLEVBQUUsQ0FBRzt3QkFDUkMsS0FBSyxFQUFFLENBQUc7d0JBQ1ZDLE1BQU0sRUFBRSxDQUFjO3dCQUN0QkMsTUFBTSxFQUFFcEQsSUFBSSxDQUFDRCxNQUFNLEdBQUcsQ0FBVSxZQUFHLENBQU07d0JBQ3pDc0QsT0FBTyxFQUFFLENBQUk7d0JBQ2IvQixPQUFPLEVBQUUsQ0FBQzs0QkFBQ2dDLEVBQUUsRUFBRSxDQUFTOzRCQUFFQyxFQUFFLEVBQUUsQ0FBTTt3QkFBQyxDQUFDO29CQUN2QyxDQUFDOzs7Ozs7NEZBRUQ5RCw4REFBVTs7Ozs7NEZBQ1ZFLDREQUFRO29CQUFDNkQsUUFBUSxFQUFFQSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0dBN0Z1QjVELFFBQVE7S0FBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC5qcz9kMGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSWNvbiB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnLmpzb25cIjtcclxuaW1wb3J0IENoYXRIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdEhlYWRlclwiO1xyXG5pbXBvcnQgYmdJbWcgZnJvbSBcIi4uLy4uL3B1YmxpYy9iZzIuanBnXCI7XHJcbmltcG9ydCBDaGF0TWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGF0TWFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcblxyXG5cclxuXHQvLyBwb3NzaWJpbGl0YW5kbyByZWRpbWVuc2lvbmFyIG8gY29udGFpbmVyXHJcblx0Y29uc3QgW2RyYWcsIHNldERyYWddID0gdXNlU3RhdGUoe1xyXG5cdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdHg6IFwiXCIsXHJcblx0XHR5OiBcIlwiLFxyXG5cdH0pO1xyXG5cdGNvbnN0IFtkaW1zLCBzZXREaW1zXSA9IHVzZVN0YXRlKHtcclxuXHRcdHc6IDUwMCxcclxuXHRcdGg6IDYwMCxcclxuXHR9KTtcclxuXHRjb25zdCBzdGFydFJlc2l6ZSA9IChlKSA9PiB7XHJcblx0XHRzZXREcmFnKHtcclxuXHRcdFx0YWN0aXZlOiB0cnVlLFxyXG5cdFx0XHR4OiBlLmNsaWVudFgsXHJcblx0XHRcdHk6IGUuY2xpZW50WSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Y29uc3QgYm94U3R5bGUgPSB7XHJcblx0XHRtYXhXaWR0aDogYCR7ZGltcy53fXB4YCxcclxuXHRcdGhlaWdodDogYCR7ZGltcy5ofXB4YCxcclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiByZXNpemVGcmFtZShlKSB7XHJcblx0XHRjb25zdCB7IGFjdGl2ZSwgeCwgeSB9ID0gZHJhZztcclxuXHRcdGlmIChhY3RpdmUpIHtcclxuXHRcdFx0Y29uc3QgeERpZmYgPSBNYXRoLmFicyh4IC0gZS5jbGllbnRYKTtcclxuXHRcdFx0Y29uc3QgeURpZmYgPSBNYXRoLmFicyh5IC0gZS5jbGllbnRZKTtcclxuXHRcdFx0Y29uc3QgbmV3VyA9IHggPiBlLmNsaWVudFggPyBkaW1zLncgLSB4RGlmZiA6IGRpbXMudyArIHhEaWZmO1xyXG5cdFx0XHRjb25zdCBuZXdIID0geSA+IGUuY2xpZW50WSA/IGRpbXMuaCArIHlEaWZmIDogZGltcy5oIC0geURpZmY7XHJcblxyXG5cdFx0XHRzZXREcmFnKHsgLi4uZHJhZywgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfSk7XHJcblx0XHRcdHNldERpbXMoeyB3OiBuZXdXLCBoOiBuZXdIIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc3RvcFJlc2l6ZSgpIHtcclxuXHRcdHNldERyYWcoeyAuLi5kcmFnLCBhY3RpdmU6IGZhbHNlIH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3hcclxuXHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke2JnSW1nLnNyY30pYCxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG5cdFx0XHRcdGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoIDRweCApXCIsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIuNXMgYWxsXCIsXHJcblx0XHRcdH19XHJcblx0XHRcdG9uTW91c2VNb3ZlPXtyZXNpemVGcmFtZX1cclxuXHRcdFx0b25Nb3VzZVVwPXtzdG9wUmVzaXplfVxyXG5cdFx0PlxyXG5cdFx0XHQ8Qm94XHJcblx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cdFx0XHRcdFx0ZmxleDogMSxcclxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYCR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnlbOTAwXX1jYWAsXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogYm94U3R5bGUubWF4V2lkdGgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IGJveFN0eWxlLmhlaWdodCxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiBcIjM1MHB4XCIsXHJcblx0XHRcdFx0XHRtaW5IZWlnaHQ6IFwiNDAwcHhcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFwiMzJweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEljb25cclxuXHRcdFx0XHRcdG5hbWU9XCJGYUNyb3BBbHRcIlxyXG5cdFx0XHRcdFx0c2l6ZT1cIjJjaFwiXHJcblx0XHRcdFx0XHRvbk1vdXNlRG93bj17c3RhcnRSZXNpemV9XHJcblx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRcdHJpZ2h0OiBcIjBcIixcclxuXHRcdFx0XHRcdFx0ZmlsdGVyOiBcImludmVydCgxMDAlKVwiLFxyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IGRyYWcuYWN0aXZlID8gXCJncmFiYmluZ1wiIDogXCJncmFiXCIsXHJcblx0XHRcdFx0XHRcdG9wYWNpdHk6IFwiLjNcIixcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogeyBtZDogXCJpbmhlcml0XCIsIHNtOiBcIm5vbmVcIiB9LFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDaGF0SGVhZGVyIC8+XHJcblx0XHRcdFx0PENoYXRNYWluIHVzZXJuYW1lPXt1c2VybmFtZX0gLz5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJJY29uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFwcENvbmZpZyIsIkNoYXRIZWFkZXIiLCJiZ0ltZyIsIkNoYXRNYWluIiwiQ2hhdFBhZ2UiLCJyZXNpemVGcmFtZSIsImUiLCJhY3RpdmUiLCJkcmFnIiwieCIsInkiLCJ4RGlmZiIsIk1hdGgiLCJhYnMiLCJjbGllbnRYIiwieURpZmYiLCJjbGllbnRZIiwibmV3VyIsImRpbXMiLCJ3IiwibmV3SCIsImgiLCJzZXREcmFnIiwic2V0RGltcyIsInN0b3BSZXNpemUiLCJzdGFydFJlc2l6ZSIsImJveFN0eWxlIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsInNyYyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJiYWNrZHJvcEZpbHRlciIsInRyYW5zaXRpb24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJwb3NpdGlvbiIsIm5hbWUiLCJzaXplIiwib25Nb3VzZURvd24iLCJ0b3AiLCJyaWdodCIsImZpbHRlciIsImN1cnNvciIsIm9wYWNpdHkiLCJtZCIsInNtIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/chat.js\n");

/***/ })

});