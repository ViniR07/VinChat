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

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar SUPABASE_API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzMDU5NCwiZXhwIjoxOTU4OTA2NTk0fQ.YM105BCPMAwKQHJTsZarKFFvw0JyL4fl_DMjYkTN4ds\";\nvar SUPABASE_URL = \"https://hvwecieyitwycexeynyd.supabase.co\";\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(SUPABASE_URL, SUPABASE_API_KEY);\nvar getMensagens = function() {\n    return supabaseClient.from(\"mensagens\").select(\"*\").order('id', {\n        ascending: ascending\n    }).then(function(param) {\n        var data = param.data;\n        return data;\n    });\n};\nvar setMensagem = function(textoMensagem, usuario) {\n    return supabaseClient.from(\"mensagens\").insert({\n        de: usuario,\n        texto: textoMensagem\n    }).then(function(param) {\n        var data = param.data;\n        return data[0];\n    });\n};\nvar deletaMensagem = function(mensagemId) {\n    return supabaseClient.from(\"mensagens\").delete().match({\n        id: mensagemId\n    }).then(function(dados) {\n        return dados;\n    });\n};\nvar api = {\n    getMensagens: getMensagens,\n    setMensagem: setMensagem,\n    deletaMensagem: deletaMensagem\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9EO0FBRXBELEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQ3JCLENBQXFKO0FBQ3RKLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQTBDO0FBQy9ELEdBQUssQ0FBQ0MsY0FBYyxHQUFHSCxtRUFBWSxDQUFDRSxZQUFZLEVBQUVELGdCQUFnQjtBQUVsRSxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUMzQixNQUFNLENBQUNELGNBQWMsQ0FDbkJFLElBQUksQ0FBQyxDQUFXLFlBQ2hCQyxNQUFNLENBQUMsQ0FBRyxJQUNKQyxLQUFLLENBQUMsQ0FBSSxLQUFFLENBQUM7UUFBQ0MsU0FBUyxFQUFUQSxTQUFTO0lBQUEsQ0FBQyxFQUM5QkMsSUFBSSxDQUFDLFFBQVE7WUFBTEMsSUFBSSxTQUFKQSxJQUFJO1FBQU9BLE1BQU0sQ0FBTkEsSUFBSTs7QUFDMUIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQVEsQ0FBUEMsYUFBYSxFQUFFQyxPQUFPLEVBQUssQ0FBQztJQUNoRCxNQUFNLENBQUNWLGNBQWMsQ0FDbkJFLElBQUksQ0FBQyxDQUFXLFlBQ2hCUyxNQUFNLENBQUMsQ0FBQztRQUFDQyxFQUFFLEVBQUVGLE9BQU87UUFBRUcsS0FBSyxFQUFFSixhQUFhO0lBQUMsQ0FBQyxFQUM1Q0gsSUFBSSxDQUFDLFFBQVE7WUFBTEMsSUFBSSxTQUFKQSxJQUFJO1FBQU9BLE1BQU0sQ0FBTkEsSUFBSSxDQUFDLENBQUM7O0FBQzVCLENBQUM7QUFFRCxHQUFLLENBQUNPLGNBQWMsR0FBRyxRQUFRLENBQVBDLFVBQVUsRUFBSyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2YsY0FBYyxDQUNURSxJQUFJLENBQUMsQ0FBVyxZQUNoQmMsTUFBTSxHQUNOQyxLQUFLLENBQUMsQ0FBQztRQUFDQyxFQUFFLEVBQUVILFVBQVU7SUFBQyxDQUFDLEVBQ3hCVCxJQUFJLENBQUMsUUFBUSxDQUFQYSxLQUFLO1FBQUtBLE1BQU0sQ0FBTkEsS0FBSzs7QUFDbEMsQ0FBQztBQUVELEdBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQUM7SUFDWm5CLFlBQVksRUFBWkEsWUFBWTtJQUNaTyxXQUFXLEVBQVhBLFdBQVc7SUFDUk0sY0FBYyxFQUFkQSxjQUFjO0FBQ2xCLENBQUM7QUFFRCwrREFBZU0sR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9pbmRleC5qcz8xYWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmNvbnN0IFNVUEFCQVNFX0FQSV9LRVkgPVxyXG5cdFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnliMnhsSWpvaVlXNXZiaUlzSW1saGRDSTZNVFkwTXpNek1EVTVOQ3dpWlhod0lqb3hPVFU0T1RBMk5UazBmUS5ZTTEwNUJDUE1Bd0tRSEpUc1phcktGRnZ3MEp5TDRmbF9ETWpZa1RONGRzXCI7XHJcbmNvbnN0IFNVUEFCQVNFX1VSTCA9IFwiaHR0cHM6Ly9odndlY2lleWl0d3ljZXhleW55ZC5zdXBhYmFzZS5jb1wiO1xyXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBQkFTRV9VUkwsIFNVUEFCQVNFX0FQSV9LRVkpO1xyXG5cclxuY29uc3QgZ2V0TWVuc2FnZW5zID0gKCkgPT4ge1xyXG5cdHJldHVybiBzdXBhYmFzZUNsaWVudFxyXG5cdFx0LmZyb20oXCJtZW5zYWdlbnNcIilcclxuXHRcdC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLm9yZGVyKCdpZCcsIHsgYXNjZW5kaW5nfSlcclxuXHRcdC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRNZW5zYWdlbSA9ICh0ZXh0b01lbnNhZ2VtLCB1c3VhcmlvKSA9PiB7XHJcblx0cmV0dXJuIHN1cGFiYXNlQ2xpZW50XHJcblx0XHQuZnJvbShcIm1lbnNhZ2Vuc1wiKVxyXG5cdFx0Lmluc2VydCh7IGRlOiB1c3VhcmlvLCB0ZXh0bzogdGV4dG9NZW5zYWdlbSB9KVxyXG5cdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiBkYXRhWzBdKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0YU1lbnNhZ2VtID0gKG1lbnNhZ2VtSWQpID0+IHtcclxuXHRyZXR1cm4gc3VwYWJhc2VDbGllbnRcclxuICAgICAgICAgICAgLmZyb20oXCJtZW5zYWdlbnNcIilcclxuICAgICAgICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgIC5tYXRjaCh7IGlkOiBtZW5zYWdlbUlkIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYWRvcykgPT4gZGFkb3MpO1xyXG59O1xyXG5cclxuY29uc3QgYXBpID0ge1xyXG5cdGdldE1lbnNhZ2VucyxcclxuXHRzZXRNZW5zYWdlbSxcclxuICAgIGRlbGV0YU1lbnNhZ2VtLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiU1VQQUJBU0VfQVBJX0tFWSIsIlNVUEFCQVNFX1VSTCIsInN1cGFiYXNlQ2xpZW50IiwiZ2V0TWVuc2FnZW5zIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwidGhlbiIsImRhdGEiLCJzZXRNZW5zYWdlbSIsInRleHRvTWVuc2FnZW0iLCJ1c3VhcmlvIiwiaW5zZXJ0IiwiZGUiLCJ0ZXh0byIsImRlbGV0YU1lbnNhZ2VtIiwibWVuc2FnZW1JZCIsImRlbGV0ZSIsIm1hdGNoIiwiaWQiLCJkYWRvcyIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/index.js\n");

/***/ })

});