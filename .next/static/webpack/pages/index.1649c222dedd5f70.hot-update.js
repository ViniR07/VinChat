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

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar SUPABASE_API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzMDU5NCwiZXhwIjoxOTU4OTA2NTk0fQ.YM105BCPMAwKQHJTsZarKFFvw0JyL4fl_DMjYkTN4ds\";\nvar SUPABASE_URL = \"https://hvwecieyitwycexeynyd.supabase.co\";\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(SUPABASE_URL, SUPABASE_API_KEY);\nvar getMensagens = function() {\n    return supabaseClient.from(\"mensagens\").select(\"*\").order('id', {\n        ascending: false\n    }).then(function(param) {\n        var data = param.data;\n        return data;\n    });\n};\nvar setMensagem = function(textoMensagem, usuario) {\n    return supabaseClient.from(\"mensagens\").insert({\n        de: usuario,\n        texto: textoMensagem\n    }).then(function(param) {\n        var data = param.data;\n        return data[0];\n    });\n};\nvar deletaMensagem = function(mensagemId) {\n    return supabaseClient.from(\"mensagens\").delete().match({\n        id: mensagemId\n    }).then(function(dados) {\n        return dados;\n    });\n};\n// Simulando um websocked\nvar escutaEmTempoReal = function(adicionaMensagem) {\n    return supabaseClient.from('mensagens').on('INSERT', function(dados) {\n        adicionaMensagem(dados.new);\n    }).subscribe();\n};\nvar githubLogin = function() {\n    var _ref = _asyncToGenerator(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var user;\n        return C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return supabaseClient.auth.signIn({\n                        provider: 'github'\n                    });\n                case 2:\n                    user = _ctx.sent;\n                    console.log(user);\n                    return _ctx.abrupt(\"return\", user);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function githubLogin() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar githubLogout = function() {\n    var _ref = _asyncToGenerator(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var error;\n        return C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return supabaseClient.auth.signOut();\n                case 2:\n                    error = _ctx.sent.error;\n                    console.log(error);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function githubLogout() {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction checkUser() {\n    return _checkUser.apply(this, arguments);\n}\nfunction _checkUser() {\n    _checkUser = _asyncToGenerator(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    return _ctx.abrupt(\"return\", supabaseClient.auth.user());\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _checkUser.apply(this, arguments);\n}\nvar api = {\n    getMensagens: getMensagens,\n    setMensagem: setMensagem,\n    deletaMensagem: deletaMensagem,\n    escutaEmTempoReal: escutaEmTempoReal,\n    githubLogin: githubLogin,\n    githubLogout: githubLogout\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWTtJQUNaTyxXQUFXLEVBQVhBLFdBQVc7SUFDUk0sY0FBYyxFQUFkQSxjQUFjO0lBQ2RNLGlCQUFpQixFQUFqQkEsaUJBQWlCO0lBQ2pCSyxXQUFXLEVBQVhBLFdBQVc7SUFDWE8sWUFBWSxFQUFaQSxZQUFZO0FBQ2hCLENBQUM7QUFFRCwrREFBZUksR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9pbmRleC5qcz8xYWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmNvbnN0IFNVUEFCQVNFX0FQSV9LRVkgPVxyXG5cdFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnliMnhsSWpvaVlXNXZiaUlzSW1saGRDSTZNVFkwTXpNek1EVTVOQ3dpWlhod0lqb3hPVFU0T1RBMk5UazBmUS5ZTTEwNUJDUE1Bd0tRSEpUc1phcktGRnZ3MEp5TDRmbF9ETWpZa1RONGRzXCI7XHJcbmNvbnN0IFNVUEFCQVNFX1VSTCA9IFwiaHR0cHM6Ly9odndlY2lleWl0d3ljZXhleW55ZC5zdXBhYmFzZS5jb1wiO1xyXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBQkFTRV9VUkwsIFNVUEFCQVNFX0FQSV9LRVkpO1xyXG5cclxuY29uc3QgZ2V0TWVuc2FnZW5zID0gKCkgPT4ge1xyXG5cdHJldHVybiBzdXBhYmFzZUNsaWVudFxyXG5cdFx0LmZyb20oXCJtZW5zYWdlbnNcIilcclxuXHRcdC5zZWxlY3QoXCIqXCIpXHJcbiAgICAgICAgLm9yZGVyKCdpZCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG5cdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiBkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IHNldE1lbnNhZ2VtID0gKHRleHRvTWVuc2FnZW0sIHVzdWFyaW8pID0+IHtcclxuXHRyZXR1cm4gc3VwYWJhc2VDbGllbnRcclxuXHRcdC5mcm9tKFwibWVuc2FnZW5zXCIpXHJcblx0XHQuaW5zZXJ0KHsgZGU6IHVzdWFyaW8sIHRleHRvOiB0ZXh0b01lbnNhZ2VtIH0pXHJcblx0XHQudGhlbigoeyBkYXRhIH0pID0+IGRhdGFbMF0pO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRhTWVuc2FnZW0gPSAobWVuc2FnZW1JZCkgPT4ge1xyXG5cdHJldHVybiBzdXBhYmFzZUNsaWVudFxyXG4gICAgICAgICAgICAuZnJvbShcIm1lbnNhZ2Vuc1wiKVxyXG4gICAgICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAgICAgLm1hdGNoKHsgaWQ6IG1lbnNhZ2VtSWQgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhZG9zKSA9PiBkYWRvcyk7XHJcbn07XHJcblxyXG4vLyBTaW11bGFuZG8gdW0gd2Vic29ja2VkXHJcbmNvbnN0IGVzY3V0YUVtVGVtcG9SZWFsID0gKGFkaWNpb25hTWVuc2FnZW0pID0+IHtcclxuICAgIHJldHVybiBzdXBhYmFzZUNsaWVudFxyXG4gICAgICAgICAgICAuZnJvbSgnbWVuc2FnZW5zJylcclxuICAgICAgICAgICAgLm9uKCdJTlNFUlQnLCAoZGFkb3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGFkaWNpb25hTWVuc2FnZW0oZGFkb3MubmV3KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZ2l0aHViTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgc3VwYWJhc2VDbGllbnQuYXV0aC5zaWduSW4oe1xyXG4gICAgICAgIHByb3ZpZGVyOiAnZ2l0aHViJyxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuY29uc3QgZ2l0aHViTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VDbGllbnQuYXV0aC5zaWduT3V0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNlcigpIHtcclxuICAgIHJldHVybiBzdXBhYmFzZUNsaWVudC5hdXRoLnVzZXIoKTsgICAgICAgIFxyXG59XHJcblxyXG5jb25zdCBhcGkgPSB7XHJcblx0Z2V0TWVuc2FnZW5zLFxyXG5cdHNldE1lbnNhZ2VtLFxyXG4gICAgZGVsZXRhTWVuc2FnZW0sXHJcbiAgICBlc2N1dGFFbVRlbXBvUmVhbCxcclxuICAgIGdpdGh1YkxvZ2luLFxyXG4gICAgZ2l0aHViTG9nb3V0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiU1VQQUJBU0VfQVBJX0tFWSIsIlNVUEFCQVNFX1VSTCIsInN1cGFiYXNlQ2xpZW50IiwiZ2V0TWVuc2FnZW5zIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwidGhlbiIsImRhdGEiLCJzZXRNZW5zYWdlbSIsInRleHRvTWVuc2FnZW0iLCJ1c3VhcmlvIiwiaW5zZXJ0IiwiZGUiLCJ0ZXh0byIsImRlbGV0YU1lbnNhZ2VtIiwibWVuc2FnZW1JZCIsImRlbGV0ZSIsIm1hdGNoIiwiaWQiLCJkYWRvcyIsImVzY3V0YUVtVGVtcG9SZWFsIiwiYWRpY2lvbmFNZW5zYWdlbSIsIm9uIiwibmV3Iiwic3Vic2NyaWJlIiwiZ2l0aHViTG9naW4iLCJ1c2VyIiwiYXV0aCIsInNpZ25JbiIsInByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsImdpdGh1YkxvZ291dCIsImVycm9yIiwic2lnbk91dCIsImNoZWNrVXNlciIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/index.js\n");

/***/ })

});