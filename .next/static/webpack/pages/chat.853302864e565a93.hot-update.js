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

/***/ "./src/components/FormularioChat.js":
/*!******************************************!*\
  !*** ./src/components/FormularioChat.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _BotaoAbreStickers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BotaoAbreStickers */ \"./src/components/BotaoAbreStickers.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FormularioChat(param) {\n    var username = param.username;\n    var handleNovaMensagem = function handleNovaMensagem(novaMensagem) {\n        if (novaMensagem) _api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].setMensagem(novaMensagem, username).then();\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), mensagem = ref[0], setMensagem = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"form\",\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                value: mensagem,\n                placeholder: \"Insira sua mensagem aqui...\",\n                type: \"textarea\",\n                onChange: function(e) {\n                    return setMensagem(e.target.value);\n                },\n                onKeyPress: function(e) {\n                    if (e.key === \"Enter\" && e.shiftKey === false) {\n                        e.preventDefault();\n                        handleNovaMensagem(mensagem);\n                    }\n                },\n                styleSheet: {\n                    width: \"100%\",\n                    border: \"0\",\n                    resize: \"none\",\n                    borderRadius: \"5px\",\n                    padding: \"15px 55px 5px 15px\",\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[800],\n                    marginRight: \"12px\",\n                    color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[200]\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\FormularioChat.js\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                type: \"submit\",\n                onClick: function(e) {\n                    e.preventDefault();\n                    handleNovaMensagem(mensagem);\n                },\n                name: \"FaPlaneArrival\",\n                size: \"3.2ch\",\n                styleSheet: {\n                    position: \"absolute\",\n                    right: \"75px\",\n                    bottom: \"20px\",\n                    color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[300],\n                    cursor: \"pointer\",\n                    transition: \".5s\",\n                    hover: {\n                        color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[200]\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\FormularioChat.js\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BotaoAbreStickers__WEBPACK_IMPORTED_MODULE_3__.BotaoAbreStickers, {\n                onStickerClick: function(sticker) {\n                    handleNovaMensagem(\":sticker:\".concat(sticker));\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\FormularioChat.js\",\n                lineNumber: 68,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\components\\\\FormularioChat.js\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, this));\n}\n_s(FormularioChat, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = FormularioChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormularioChat);\nvar _c;\n$RefreshReg$(_c, \"FormularioChat\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9jb21wb25lbnRzL0Zvcm11bGFyaW9DaGF0LmpzPzAzNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Qm94LCBUZXh0RmllbGQsIFRleHQsIEljb259IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQm90YW9BYnJlU3RpY2tlcnMgfSBmcm9tICcuL0JvdGFvQWJyZVN0aWNrZXJzJztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanNvbic7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpJztcclxuXHJcbmZ1bmN0aW9uIEZvcm11bGFyaW9DaGF0KHsgdXNlcm5hbWUgfSkge1xyXG5cdGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZU5vdmFNZW5zYWdlbShub3ZhTWVuc2FnZW0pIHtcclxuXHRcdGlmIChub3ZhTWVuc2FnZW0pIGFwaS5zZXRNZW5zYWdlbShub3ZhTWVuc2FnZW0sIHVzZXJuYW1lKS50aGVuKCk7XHJcblx0fVxyXG5cclxuICAgIHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdGFzPVwiZm9ybVwiXHJcblx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcblx0XHRcdFx0Ly8gb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHR2YWx1ZT17bWVuc2FnZW19XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxyXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0YXJlYVwiXHJcblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRNZW5zYWdlbShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0b25LZXlQcmVzcz17KGUpID0+IHtcclxuXHRcdFx0XHRcdGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGUuc2hpZnRLZXkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0aGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9fVxyXG5cdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0XHRcdGJvcmRlcjogXCIwXCIsXHJcblx0XHRcdFx0XHRyZXNpemU6IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogXCIxNXB4IDU1cHggNXB4IDE1cHhcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG5cdFx0XHRcdFx0bWFyZ2luUmlnaHQ6IFwiMTJweFwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PEljb25cclxuXHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0aGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHRcdG5hbWU9XCJGYVBsYW5lQXJyaXZhbFwiXHJcblx0XHRcdFx0c2l6ZT1cIjMuMmNoXCJcclxuXHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjIwcHhcIixcclxuXHRcdFx0XHRcdGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMzAwXCJdLFxyXG5cdFx0XHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IFwiLjVzXCIsXHJcblx0XHRcdFx0XHRob3Zlcjoge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjIwMFwiXSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxCb3Rhb0FicmVTdGlja2Vyc1xyXG5cdFx0XHRcdG9uU3RpY2tlckNsaWNrPXsoc3RpY2tlcikgPT4ge1xyXG5cdFx0XHRcdFx0aGFuZGxlTm92YU1lbnNhZ2VtKGA6c3RpY2tlcjoke3N0aWNrZXJ9YCk7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm11bGFyaW9DaGF0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb3giLCJUZXh0RmllbGQiLCJUZXh0IiwiSWNvbiIsIkJvdGFvQWJyZVN0aWNrZXJzIiwiYXBwQ29uZmlnIiwiYXBpIiwiRm9ybXVsYXJpb0NoYXQiLCJ1c2VybmFtZSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsInNldE1lbnNhZ2VtIiwidGhlbiIsIm1lbnNhZ2VtIiwiYXMiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsIm9uQ2xpY2siLCJuYW1lIiwic2l6ZSIsInJpZ2h0IiwiYm90dG9tIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsImhvdmVyIiwib25TdGlja2VyQ2xpY2siLCJzdGlja2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FormularioChat.js\n");

/***/ })

});