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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar SUPABASE_API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzMDU5NCwiZXhwIjoxOTU4OTA2NTk0fQ.YM105BCPMAwKQHJTsZarKFFvw0JyL4fl_DMjYkTN4ds\";\nvar SUPABASE_URL = \"https://hvwecieyitwycexeynyd.supabase.co\";\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(SUPABASE_URL, SUPABASE_API_KEY);\nvar getMensagens = function() {\n    return supabaseClient.from(\"mensagens\").select(\"*\").then(function(param) {\n        var data = param.data;\n        return data;\n    });\n};\nvar setMensagem = function(textoMensagem, usuario) {\n    return supabaseClient.from(\"mensagens\").insert({\n        de: usuario,\n        texto: textoMensagem\n    }).then(function(param) {\n        var data = param.data;\n        return data[0];\n    });\n};\nvar deletaMensagem = function(mensagemId) {\n    return supabaseClient.from(\"mensagens\").delete().match({\n        id: mensagemId\n    });\n};\nvar api = {\n    getMensagens: getMensagens,\n    setMensagem: setMensagem\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9EO0FBRXBELEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQ3JCLENBQXFKO0FBQ3RKLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQTBDO0FBQy9ELEdBQUssQ0FBQ0MsY0FBYyxHQUFHSCxtRUFBWSxDQUFDRSxZQUFZLEVBQUVELGdCQUFnQjtBQUVsRSxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUMzQixNQUFNLENBQUNELGNBQWMsQ0FDbkJFLElBQUksQ0FBQyxDQUFXLFlBQ2hCQyxNQUFNLENBQUMsQ0FBRyxJQUNWQyxJQUFJLENBQUMsUUFBUTtZQUFMQyxJQUFJLFNBQUpBLElBQUk7UUFBT0EsTUFBTSxDQUFOQSxJQUFJOztBQUMxQixDQUFDO0FBRUQsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFBUSxDQUFQQyxhQUFhLEVBQUVDLE9BQU8sRUFBSyxDQUFDO0lBQ2hELE1BQU0sQ0FBQ1IsY0FBYyxDQUNuQkUsSUFBSSxDQUFDLENBQVcsWUFDaEJPLE1BQU0sQ0FBQyxDQUFDO1FBQUNDLEVBQUUsRUFBRUYsT0FBTztRQUFFRyxLQUFLLEVBQUVKLGFBQWE7SUFBQyxDQUFDLEVBQzVDSCxJQUFJLENBQUMsUUFBUTtZQUFMQyxJQUFJLFNBQUpBLElBQUk7UUFBT0EsTUFBTSxDQUFOQSxJQUFJLENBQUMsQ0FBQzs7QUFDNUIsQ0FBQztBQUVELEdBQUssQ0FBQ08sY0FBYyxHQUFHLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7SUFDdkMsTUFBTSxDQUFDYixjQUFjLENBQ1RFLElBQUksQ0FBQyxDQUFXLFlBQ2hCWSxNQUFNLEdBQ05DLEtBQUssQ0FBQyxDQUFDO1FBQUNDLEVBQUUsRUFBRUgsVUFBVTtJQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELEdBQUssQ0FBQ0ksR0FBRyxHQUFHLENBQUM7SUFDWmhCLFlBQVksRUFBWkEsWUFBWTtJQUNaSyxXQUFXLEVBQVhBLFdBQVc7QUFDWixDQUFDO0FBRUQsK0RBQWVXLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcGkvaW5kZXguanM/MWFkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5jb25zdCBTVVBBQkFTRV9BUElfS0VZID1cclxuXHRcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16TXpNRFU1TkN3aVpYaHdJam94T1RVNE9UQTJOVGswZlEuWU0xMDVCQ1BNQXdLUUhKVHNaYXJLRkZ2dzBKeUw0ZmxfRE1qWWtUTjRkc1wiO1xyXG5jb25zdCBTVVBBQkFTRV9VUkwgPSBcImh0dHBzOi8vaHZ3ZWNpZXlpdHd5Y2V4ZXlueWQuc3VwYWJhc2UuY29cIjtcclxuY29uc3Qgc3VwYWJhc2VDbGllbnQgPSBjcmVhdGVDbGllbnQoU1VQQUJBU0VfVVJMLCBTVVBBQkFTRV9BUElfS0VZKTtcclxuXHJcbmNvbnN0IGdldE1lbnNhZ2VucyA9ICgpID0+IHtcclxuXHRyZXR1cm4gc3VwYWJhc2VDbGllbnRcclxuXHRcdC5mcm9tKFwibWVuc2FnZW5zXCIpXHJcblx0XHQuc2VsZWN0KFwiKlwiKVxyXG5cdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiBkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IHNldE1lbnNhZ2VtID0gKHRleHRvTWVuc2FnZW0sIHVzdWFyaW8pID0+IHtcclxuXHRyZXR1cm4gc3VwYWJhc2VDbGllbnRcclxuXHRcdC5mcm9tKFwibWVuc2FnZW5zXCIpXHJcblx0XHQuaW5zZXJ0KHsgZGU6IHVzdWFyaW8sIHRleHRvOiB0ZXh0b01lbnNhZ2VtIH0pXHJcblx0XHQudGhlbigoeyBkYXRhIH0pID0+IGRhdGFbMF0pO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRhTWVuc2FnZW0gPSAobWVuc2FnZW1JZCkgPT4ge1xyXG5cdHJldHVybiBzdXBhYmFzZUNsaWVudFxyXG4gICAgICAgICAgICAuZnJvbShcIm1lbnNhZ2Vuc1wiKVxyXG4gICAgICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAgICAgLm1hdGNoKHsgaWQ6IG1lbnNhZ2VtSWQgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhcGkgPSB7XHJcblx0Z2V0TWVuc2FnZW5zLFxyXG5cdHNldE1lbnNhZ2VtLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiU1VQQUJBU0VfQVBJX0tFWSIsIlNVUEFCQVNFX1VSTCIsInN1cGFiYXNlQ2xpZW50IiwiZ2V0TWVuc2FnZW5zIiwiZnJvbSIsInNlbGVjdCIsInRoZW4iLCJkYXRhIiwic2V0TWVuc2FnZW0iLCJ0ZXh0b01lbnNhZ2VtIiwidXN1YXJpbyIsImluc2VydCIsImRlIiwidGV4dG8iLCJkZWxldGFNZW5zYWdlbSIsIm1lbnNhZ2VtSWQiLCJkZWxldGUiLCJtYXRjaCIsImlkIiwiYXBpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/index.js\n");

/***/ })

});