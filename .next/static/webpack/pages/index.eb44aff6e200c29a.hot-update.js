"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar SUPABASE_API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzMDU5NCwiZXhwIjoxOTU4OTA2NTk0fQ.YM105BCPMAwKQHJTsZarKFFvw0JyL4fl_DMjYkTN4ds\";\nvar SUPABASE_URL = \"https://hvwecieyitwycexeynyd.supabase.co\";\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(SUPABASE_URL, SUPABASE_API_KEY);\nvar getMensagens = function() {\n    return supabaseClient.from(\"mensagens\").select(\"*\").order(\"id\", {\n        ascending: false\n    }).then(function(param) {\n        var data = param.data;\n        return data;\n    });\n};\nvar setMensagem = function(textoMensagem, usuario) {\n    return supabaseClient.from(\"mensagens\").insert({\n        de: usuario,\n        texto: textoMensagem\n    }).then(function(param) {\n        var data = param.data;\n        return data[0];\n    });\n};\nvar deletaMensagem = function(mensagemId) {\n    return supabaseClient.from(\"mensagens\").delete().match({\n        id: mensagemId\n    }).then(function(dados) {\n        return dados;\n    });\n};\n// Simulando um websocked\nvar escutaEmTempoReal = function(adicionaMensagem) {\n    return supabaseClient.from(\"mensagens\").on(\"INSERT\", function(dados) {\n        adicionaMensagem(dados.new);\n    }).subscribe();\n};\nfunction checkUser() {\n    return supabaseClient.auth.user();\n    return user;\n}\nvar githubLogin = function() {\n    var _ref = _asyncToGenerator(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var user;\n        return C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return supabaseClient.auth.signIn({\n                        provider: \"github\"\n                    });\n                case 2:\n                    user = _ctx.sent;\n                    return _ctx.abrupt(\"return\", user);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function githubLogin() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar githubLogout = function() {\n    var _ref = _asyncToGenerator(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var error;\n        return C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return supabaseClient.auth.signOut();\n                case 2:\n                    error = _ctx.sent.error;\n                    throw new Error(error);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function githubLogout() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar api = {\n    getMensagens: getMensagens,\n    setMensagem: setMensagem,\n    deletaMensagem: deletaMensagem,\n    escutaEmTempoReal: escutaEmTempoReal,\n    githubLogin: githubLogin,\n    githubLogout: githubLogout,\n    checkUser: checkUser\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixFQUFqQkEsaUJBQWlCO0lBQ2pCUSxXQUFXLEVBQVhBLFdBQVc7SUFDWEcsWUFBWSxFQUFaQSxZQUFZO0lBQ1pOLFNBQVMsRUFBVEEsU0FBUztBQUNWLENBQUM7QUFFRCwrREFBZVUsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvaW5kZXguanM/ZTY5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5jb25zdCBTVVBBQkFTRV9BUElfS0VZID1cclxuXHRcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5YjJ4bElqb2lZVzV2YmlJc0ltbGhkQ0k2TVRZME16TXpNRFU1TkN3aVpYaHdJam94T1RVNE9UQTJOVGswZlEuWU0xMDVCQ1BNQXdLUUhKVHNaYXJLRkZ2dzBKeUw0ZmxfRE1qWWtUTjRkc1wiO1xyXG5jb25zdCBTVVBBQkFTRV9VUkwgPSBcImh0dHBzOi8vaHZ3ZWNpZXlpdHd5Y2V4ZXlueWQuc3VwYWJhc2UuY29cIjtcclxuY29uc3Qgc3VwYWJhc2VDbGllbnQgPSBjcmVhdGVDbGllbnQoU1VQQUJBU0VfVVJMLCBTVVBBQkFTRV9BUElfS0VZKTtcclxuXHJcbmNvbnN0IGdldE1lbnNhZ2VucyA9ICgpID0+IHtcclxuXHRyZXR1cm4gc3VwYWJhc2VDbGllbnRcclxuXHRcdC5mcm9tKFwibWVuc2FnZW5zXCIpXHJcblx0XHQuc2VsZWN0KFwiKlwiKVxyXG5cdFx0Lm9yZGVyKFwiaWRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcblx0XHQudGhlbigoeyBkYXRhIH0pID0+IGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0TWVuc2FnZW0gPSAodGV4dG9NZW5zYWdlbSwgdXN1YXJpbykgPT4ge1xyXG5cdHJldHVybiBzdXBhYmFzZUNsaWVudFxyXG5cdFx0LmZyb20oXCJtZW5zYWdlbnNcIilcclxuXHRcdC5pbnNlcnQoeyBkZTogdXN1YXJpbywgdGV4dG86IHRleHRvTWVuc2FnZW0gfSlcclxuXHRcdC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YVswXSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGFNZW5zYWdlbSA9IChtZW5zYWdlbUlkKSA9PiB7XHJcblx0cmV0dXJuIHN1cGFiYXNlQ2xpZW50XHJcblx0XHQuZnJvbShcIm1lbnNhZ2Vuc1wiKVxyXG5cdFx0LmRlbGV0ZSgpXHJcblx0XHQubWF0Y2goeyBpZDogbWVuc2FnZW1JZCB9KVxyXG5cdFx0LnRoZW4oKGRhZG9zKSA9PiBkYWRvcyk7XHJcbn07XHJcblxyXG4vLyBTaW11bGFuZG8gdW0gd2Vic29ja2VkXHJcbmNvbnN0IGVzY3V0YUVtVGVtcG9SZWFsID0gKGFkaWNpb25hTWVuc2FnZW0pID0+IHtcclxuXHRyZXR1cm4gc3VwYWJhc2VDbGllbnRcclxuXHRcdC5mcm9tKFwibWVuc2FnZW5zXCIpXHJcblx0XHQub24oXCJJTlNFUlRcIiwgKGRhZG9zKSA9PiB7XHJcblx0XHRcdGFkaWNpb25hTWVuc2FnZW0oZGFkb3MubmV3KTtcclxuXHRcdH0pXHJcblx0XHQuc3Vic2NyaWJlKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVja1VzZXIoKSB7XHJcblx0cmV0dXJuIHN1cGFiYXNlQ2xpZW50LmF1dGgudXNlcigpO1xyXG5cdHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5jb25zdCBnaXRodWJMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCB1c2VyID0gYXdhaXQgc3VwYWJhc2VDbGllbnQuYXV0aC5zaWduSW4oe1xyXG5cdFx0cHJvdmlkZXI6IFwiZ2l0aHViXCIsXHJcblx0fSk7XHJcblx0cmV0dXJuIHVzZXI7XHJcbn07XHJcblxyXG5jb25zdCBnaXRodWJMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VDbGllbnQuYXV0aC5zaWduT3V0KCk7XHJcblx0dGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxufTtcclxuXHJcbmNvbnN0IGFwaSA9IHtcclxuXHRnZXRNZW5zYWdlbnMsXHJcblx0c2V0TWVuc2FnZW0sXHJcblx0ZGVsZXRhTWVuc2FnZW0sXHJcblx0ZXNjdXRhRW1UZW1wb1JlYWwsXHJcblx0Z2l0aHViTG9naW4sXHJcblx0Z2l0aHViTG9nb3V0LFxyXG5cdGNoZWNrVXNlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX0FQSV9LRVkiLCJTVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUNsaWVudCIsImdldE1lbnNhZ2VucyIsImZyb20iLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsInRoZW4iLCJkYXRhIiwic2V0TWVuc2FnZW0iLCJ0ZXh0b01lbnNhZ2VtIiwidXN1YXJpbyIsImluc2VydCIsImRlIiwidGV4dG8iLCJkZWxldGFNZW5zYWdlbSIsIm1lbnNhZ2VtSWQiLCJkZWxldGUiLCJtYXRjaCIsImlkIiwiZGFkb3MiLCJlc2N1dGFFbVRlbXBvUmVhbCIsImFkaWNpb25hTWVuc2FnZW0iLCJvbiIsIm5ldyIsInN1YnNjcmliZSIsImNoZWNrVXNlciIsImF1dGgiLCJ1c2VyIiwiZ2l0aHViTG9naW4iLCJzaWduSW4iLCJwcm92aWRlciIsImdpdGh1YkxvZ291dCIsImVycm9yIiwic2lnbk91dCIsIkVycm9yIiwiYXBpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/index.js\n");

/***/ })

});