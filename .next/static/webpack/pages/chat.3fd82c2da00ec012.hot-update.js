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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _FormularioChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormularioChat */ \"./src/components/FormularioChat.js\");\n/* harmony import */ var _ListaMensagens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListaMensagens */ \"./src/components/ListaMensagens.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatMain() {\n    var handleDeletaMensagem = function handleDeletaMensagem(mensagemId) {\n        _api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].deletaMensagem(mensagemId).then(function() {\n            _api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getMensagens().then(function(mensagens) {\n                setListaMensagens(mensagens);\n            });\n        });\n    };\n    _s();\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var username = roteamento.query.username;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]), listaMensagens = ref[0], setListaMensagens = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        _api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getMensagens().then(function(dados) {\n            return setListaMensagens(dados);\n        });\n        var subscription = _api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].escutaEmTempoReal(function(novaMensagem) {\n            //Para reusar um valor de referência array/objeto passar função para o setState\n            // Para pegar o valor atual do estado\n            setListaMensagens(function(valoratual) {\n                return [\n                    novaMensagem\n                ].concat(_toConsumableArray(valoratual));\n            });\n        });\n        return function() {\n            subscription.unsubscribe();\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            position: \"relative\",\n            display: \"flex\",\n            flex: 1,\n            height: \"80%\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.secondary[800],\n            flexDirection: \"column\",\n            borderRadius: \"5px\",\n            padding: \"16px\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListaMensagens__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                mensagens: listaMensagens,\n                filtraMensagens: handleDeletaMensagem,\n                username: username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\ChatMain.js\",\n                lineNumber: 52,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormularioChat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                username: username\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\ChatMain.js\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\ChatMain.js\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, this));\n}\n_s(ChatMain, \"58RMFBWYXdF/o0pjkfaFQrb/Bcg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ChatMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatMain);\nvar _c;\n$RefreshReg$(_c, \"ChatMain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0TWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNEO0FBQ0k7QUFDQTtBQUNOO0FBQ2Y7QUFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVsQ1EsUUFBUSxHQUFHLENBQUM7UUFxQlhDLG9CQUFvQixHQUE3QixRQUFRLENBQUNBLG9CQUFvQixDQUFDQyxVQUFVLEVBQUUsQ0FBQztRQUMxQ0wsMkRBQWtCLENBQUNLLFVBQVUsRUFBRUUsSUFBSSxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQzFDUCx5REFBZ0IsR0FBR08sSUFBSSxDQUFDLFFBQVEsQ0FBUEUsU0FBUyxFQUFLLENBQUM7Z0JBQ3ZDQyxpQkFBaUIsQ0FBQ0QsU0FBUztZQUM1QixDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7O0lBMUJELEdBQUssQ0FBQ0UsVUFBVSxHQUFHWixzREFBUztJQUM1QixHQUFLLENBQUNhLFFBQVEsR0FBR0QsVUFBVSxDQUFDRSxLQUFLLENBQUNELFFBQVE7SUFFMUMsR0FBSyxDQUF1Q1YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFoRFksY0FBYyxHQUF1QlosR0FBWSxLQUFqQ1EsaUJBQWlCLEdBQUlSLEdBQVk7SUFFeERELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDaEJELHlEQUFnQixHQUFHTyxJQUFJLENBQUMsUUFBUSxDQUFQUSxLQUFLO1lBQUtMLE1BQU0sQ0FBTkEsaUJBQWlCLENBQUNLLEtBQUs7O1FBQzFELEdBQUssQ0FBQ0MsWUFBWSxHQUFHaEIsOERBQXFCLENBQUMsUUFBUSxDQUFQa0IsWUFBWSxFQUFLLENBQUM7WUFDN0QsRUFBK0U7WUFDL0UsRUFBcUM7WUFDckNSLGlCQUFpQixDQUFDLFFBQVEsQ0FBUFMsVUFBVSxFQUFLLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxDQUFDRDtvQkFBQUEsWUFBWTtnQkFBZSxDQUFDLENBQTdCLE1BQTZCLG9CQUFYQyxVQUFVO1lBQ3BDLENBQUM7UUFDRixDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQ2JILFlBQVksQ0FBQ0ksV0FBVztRQUN6QixDQUFDO0lBQ0YsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQVVMLE1BQU0sNkVBQ0p6QixxREFBRztRQUNIMEIsVUFBVSxFQUFFLENBQUM7WUFDWkMsUUFBUSxFQUFFLENBQVU7WUFDcEJDLE9BQU8sRUFBRSxDQUFNO1lBQ2ZDLElBQUksRUFBRSxDQUFDO1lBQ1BDLE1BQU0sRUFBRSxDQUFLO1lBQ2JDLGVBQWUsRUFBRTlCLHFFQUFxQztZQUN0RGtDLGFBQWEsRUFBRSxDQUFRO1lBQ3ZCQyxZQUFZLEVBQUUsQ0FBSztZQUNuQkMsT0FBTyxFQUFFLENBQU07WUFDZkMsUUFBUSxFQUFFLENBQVE7UUFDbkIsQ0FBQzs7d0ZBRUFuQyx1REFBYztnQkFDZFcsU0FBUyxFQUFFSyxjQUFjO2dCQUN6Qm9CLGVBQWUsRUFBRTlCLG9CQUFvQjtnQkFDckNRLFFBQVEsRUFBRUEsUUFBUTs7Ozs7O3dGQUdsQmYsdURBQWM7Z0JBQUNlLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7Ozs7O0FBR3JDLENBQUM7R0FwRFFULFFBQVE7O1FBQ0dKLGtEQUFTOzs7S0FEcEJJLFFBQVE7QUFzRGpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdE1haW4uanM/ZGFkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnLmpzb25cIjtcclxuaW1wb3J0IEZvcm11bGFyaW9DaGF0IGZyb20gXCIuL0Zvcm11bGFyaW9DaGF0XCI7XHJcbmltcG9ydCBMaXN0YU1lbnNhZ2VucyBmcm9tIFwiLi9MaXN0YU1lbnNhZ2Vuc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENoYXRNYWluKCkge1xyXG5cdGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB1c2VybmFtZSA9IHJvdGVhbWVudG8ucXVlcnkudXNlcm5hbWU7XHJcblxyXG5cdGNvbnN0IFtsaXN0YU1lbnNhZ2Vucywgc2V0TGlzdGFNZW5zYWdlbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0YXBpLmdldE1lbnNhZ2VucygpLnRoZW4oKGRhZG9zKSA9PiBzZXRMaXN0YU1lbnNhZ2VucyhkYWRvcykpO1xyXG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gYXBpLmVzY3V0YUVtVGVtcG9SZWFsKChub3ZhTWVuc2FnZW0pID0+IHtcclxuXHRcdFx0Ly9QYXJhIHJldXNhciB1bSB2YWxvciBkZSByZWZlcsOqbmNpYSBhcnJheS9vYmpldG8gcGFzc2FyIGZ1bsOnw6NvIHBhcmEgbyBzZXRTdGF0ZVxyXG5cdFx0XHQvLyBQYXJhIHBlZ2FyIG8gdmFsb3IgYXR1YWwgZG8gZXN0YWRvXHJcblx0XHRcdHNldExpc3RhTWVuc2FnZW5zKCh2YWxvcmF0dWFsKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIFtub3ZhTWVuc2FnZW0sIC4uLnZhbG9yYXR1YWxdO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZURlbGV0YU1lbnNhZ2VtKG1lbnNhZ2VtSWQpIHtcclxuXHRcdGFwaS5kZWxldGFNZW5zYWdlbShtZW5zYWdlbUlkKS50aGVuKCgpID0+IHtcclxuXHRcdFx0YXBpLmdldE1lbnNhZ2VucygpLnRoZW4oKG1lbnNhZ2VucykgPT4ge1xyXG5cdFx0XHRcdHNldExpc3RhTWVuc2FnZW5zKG1lbnNhZ2Vucyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveFxyXG5cdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRmbGV4OiAxLFxyXG5cdFx0XHRcdGhlaWdodDogXCI4MCVcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5WzgwMF0sXHJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcblx0XHRcdFx0cGFkZGluZzogXCIxNnB4XCIsXHJcblx0XHRcdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxMaXN0YU1lbnNhZ2Vuc1xyXG5cdFx0XHRcdG1lbnNhZ2Vucz17bGlzdGFNZW5zYWdlbnN9XHJcblx0XHRcdFx0ZmlsdHJhTWVuc2FnZW5zPXtoYW5kbGVEZWxldGFNZW5zYWdlbX1cclxuXHRcdFx0XHR1c2VybmFtZT17dXNlcm5hbWV9XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8Rm9ybXVsYXJpb0NoYXQgdXNlcm5hbWU9e3VzZXJuYW1lfSAvPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdE1haW47XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJhcHBDb25maWciLCJGb3JtdWxhcmlvQ2hhdCIsIkxpc3RhTWVuc2FnZW5zIiwidXNlUm91dGVyIiwiYXBpIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGF0TWFpbiIsImhhbmRsZURlbGV0YU1lbnNhZ2VtIiwibWVuc2FnZW1JZCIsImRlbGV0YU1lbnNhZ2VtIiwidGhlbiIsImdldE1lbnNhZ2VucyIsIm1lbnNhZ2VucyIsInNldExpc3RhTWVuc2FnZW5zIiwicm90ZWFtZW50byIsInVzZXJuYW1lIiwicXVlcnkiLCJsaXN0YU1lbnNhZ2VucyIsImRhZG9zIiwic3Vic2NyaXB0aW9uIiwiZXNjdXRhRW1UZW1wb1JlYWwiLCJub3ZhTWVuc2FnZW0iLCJ2YWxvcmF0dWFsIiwidW5zdWJzY3JpYmUiLCJzdHlsZVNoZWV0IiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmxleCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJvdmVyZmxvdyIsImZpbHRyYU1lbnNhZ2VucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ChatMain.js\n");

/***/ })

});