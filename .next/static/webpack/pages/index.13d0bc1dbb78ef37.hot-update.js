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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar SUPABASE_API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzMDU5NCwiZXhwIjoxOTU4OTA2NTk0fQ.YM105BCPMAwKQHJTsZarKFFvw0JyL4fl_DMjYkTN4ds\";\nvar SUPABASE_URL = \"https://hvwecieyitwycexeynyd.supabase.co\";\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(SUPABASE_URL, SUPABASE_API_KEY);\nvar getMensagens = function() {\n    return supabaseClient.from(\"mensagens\").select(\"*\").order(\"id\", {\n        ascending: false\n    }).then(function(param) {\n        var data = param.data;\n        return data;\n    });\n};\nvar setMensagem = function(textoMensagem, usuario) {\n    return supabaseClient.from(\"mensagens\").insert({\n        de: usuario,\n        texto: textoMensagem\n    }).then(function(param) {\n        var data = param.data;\n        return data[0];\n    });\n};\nvar deletaMensagem = function(mensagemId) {\n    return supabaseClient.from(\"mensagens\").delete().match({\n        id: mensagemId\n    }).then(function(dados) {\n        return dados;\n    });\n};\n// Simulando um websocked\nvar escutaEmTempoReal = function(adicionaMensagem) {\n    return supabaseClient.from(\"mensagens\").on(\"INSERT\", function(dados) {\n        adicionaMensagem(dados.new);\n    }).subscribe();\n};\nfunction checkUser() {\n    return _checkUser.apply(this, arguments);\n}\nfunction _checkUser() {\n    _checkUser = _asyncToGenerator(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return supabaseClient.auth.user();\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _checkUser.apply(this, arguments);\n}\nvar githubLogin = function() {\n    var _ref = _asyncToGenerator(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var user;\n        return C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return supabaseClient.auth.signIn({\n                        provider: \"github\"\n                    });\n                case 2:\n                    user = _ctx.sent;\n                    return _ctx.abrupt(\"return\", user);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function githubLogin() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar githubLogout = function() {\n    var _ref = _asyncToGenerator(C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var error;\n        return C_Users_vini_OneDrive_Documentos_Alura_imersao_react_4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return supabaseClient.auth.signOut();\n                case 2:\n                    error = _ctx.sent.error;\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function githubLogout() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar api = {\n    getMensagens: getMensagens,\n    setMensagem: setMensagem,\n    deletaMensagem: deletaMensagem,\n    escutaEmTempoReal: escutaEmTempoReal,\n    githubLogin: githubLogin,\n    githubLogout: githubLogout,\n    checkUser: checkUser\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQ3JCLENBQXFKO0FBQ3RKLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQTBDO0FBQy9ELEdBQUssQ0FBQ0MsY0FBYyxHQUFHSCxtRUFBWSxDQUFDRSxZQUFZLEVBQUVELGdCQUFnQjtBQUVsRSxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUMzQixNQUFNLENBQUNELGNBQWMsQ0FDbkJFLElBQUksQ0FBQyxDQUFXLFlBQ2hCQyxNQUFNLENBQUMsQ0FBRyxJQUNWQyxLQUFLLENBQUMsQ0FBSSxLQUFFLENBQUM7UUFBQ0MsU0FBUyxFQUFFLEtBQUs7SUFBQyxDQUFDLEVBQ2hDQyxJQUFJLENBQUMsUUFBUTtZQUFMQyxJQUFJLFNBQUpBLElBQUk7UUFBT0EsTUFBTSxDQUFOQSxJQUFJOztBQUMxQixDQUFDO0FBRUQsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFBUSxDQUFQQyxhQUFhLEVBQUVDLE9BQU8sRUFBSyxDQUFDO0lBQ2hELE1BQU0sQ0FBQ1YsY0FBYyxDQUNuQkUsSUFBSSxDQUFDLENBQVcsWUFDaEJTLE1BQU0sQ0FBQyxDQUFDO1FBQUNDLEVBQUUsRUFBRUYsT0FBTztRQUFFRyxLQUFLLEVBQUVKLGFBQWE7SUFBQyxDQUFDLEVBQzVDSCxJQUFJLENBQUMsUUFBUTtZQUFMQyxJQUFJLFNBQUpBLElBQUk7UUFBT0EsTUFBTSxDQUFOQSxJQUFJLENBQUMsQ0FBQzs7QUFDNUIsQ0FBQztBQUVELEdBQUssQ0FBQ08sY0FBYyxHQUFHLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7SUFDdkMsTUFBTSxDQUFDZixjQUFjLENBQ25CRSxJQUFJLENBQUMsQ0FBVyxZQUNoQmMsTUFBTSxHQUNOQyxLQUFLLENBQUMsQ0FBQztRQUFDQyxFQUFFLEVBQUVILFVBQVU7SUFBQyxDQUFDLEVBQ3hCVCxJQUFJLENBQUMsUUFBUSxDQUFQYSxLQUFLO1FBQUtBLE1BQU0sQ0FBTkEsS0FBSzs7QUFDeEIsQ0FBQztBQUVELEVBQXlCO0FBQ3pCLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsUUFBUSxDQUFQQyxnQkFBZ0IsRUFBSyxDQUFDO0lBQ2hELE1BQU0sQ0FBQ3JCLGNBQWMsQ0FDbkJFLElBQUksQ0FBQyxDQUFXLFlBQ2hCb0IsRUFBRSxDQUFDLENBQVEsU0FBRSxRQUFRLENBQVBILEtBQUssRUFBSyxDQUFDO1FBQ3pCRSxnQkFBZ0IsQ0FBQ0YsS0FBSyxDQUFDSSxHQUFHO0lBQzNCLENBQUMsRUFDQUMsU0FBUztBQUNaLENBQUM7U0FFY0MsU0FBUztXQUFUQSxVQUFTOztTQUFUQSxVQUFTO0lBQVRBLFVBQVMsdUxBQXhCLFFBQVEsV0FBbUIsQ0FBQzs7Ozs7MkJBQ2R6QixjQUFjLENBQUMwQixJQUFJLENBQUNDLElBQUk7Ozs7Ozs7O0lBQ3RDLENBQUM7V0FGY0YsVUFBUzs7QUFJeEIsR0FBSyxDQUFDRyxXQUFXO21NQUFHLFFBQVEsV0FBSSxDQUFDO1lBQzFCRCxJQUFJOzs7OzsyQkFBUzNCLGNBQWMsQ0FBQzBCLElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUM7d0JBQzlDQyxRQUFRLEVBQUUsQ0FBUTtvQkFDbkIsQ0FBQzs7b0JBRktILElBQUk7aURBR0hBLElBQUk7Ozs7OztJQUNaLENBQUM7b0JBTEtDLFdBQVc7Ozs7QUFPakIsR0FBSyxDQUFDRyxZQUFZO21NQUFHLFFBQVEsV0FBSSxDQUFDO1lBQ3pCQyxLQUFLOzs7OzsyQkFBV2hDLGNBQWMsQ0FBQzBCLElBQUksQ0FBQ08sT0FBTzs7b0JBQTNDRCxLQUFLLGFBQUxBLEtBQUs7Ozs7OztJQUNkLENBQUM7b0JBRktELFlBQVk7Ozs7QUFJbEIsR0FBSyxDQUFDRyxHQUFHLEdBQUcsQ0FBQztJQUNaakMsWUFBWSxFQUFaQSxZQUFZO0lBQ1pPLFdBQVcsRUFBWEEsV0FBVztJQUNYTSxjQUFjLEVBQWRBLGNBQWM7SUFDZE0saUJBQWlCLEVBQWpCQSxpQkFBaUI7SUFDakJRLFdBQVcsRUFBWEEsV0FBVztJQUNYRyxZQUFZLEVBQVpBLFlBQVk7SUFDWk4sU0FBUyxFQUFUQSxTQUFTO0FBQ1YsQ0FBQztBQUVELCtEQUFlUyxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9pbmRleC5qcz9lNjk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcclxuXHJcbmNvbnN0IFNVUEFCQVNFX0FQSV9LRVkgPVxyXG5cdFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnliMnhsSWpvaVlXNXZiaUlzSW1saGRDSTZNVFkwTXpNek1EVTVOQ3dpWlhod0lqb3hPVFU0T1RBMk5UazBmUS5ZTTEwNUJDUE1Bd0tRSEpUc1phcktGRnZ3MEp5TDRmbF9ETWpZa1RONGRzXCI7XHJcbmNvbnN0IFNVUEFCQVNFX1VSTCA9IFwiaHR0cHM6Ly9odndlY2lleWl0d3ljZXhleW55ZC5zdXBhYmFzZS5jb1wiO1xyXG5jb25zdCBzdXBhYmFzZUNsaWVudCA9IGNyZWF0ZUNsaWVudChTVVBBQkFTRV9VUkwsIFNVUEFCQVNFX0FQSV9LRVkpO1xyXG5cclxuY29uc3QgZ2V0TWVuc2FnZW5zID0gKCkgPT4ge1xyXG5cdHJldHVybiBzdXBhYmFzZUNsaWVudFxyXG5cdFx0LmZyb20oXCJtZW5zYWdlbnNcIilcclxuXHRcdC5zZWxlY3QoXCIqXCIpXHJcblx0XHQub3JkZXIoXCJpZFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuXHRcdC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRNZW5zYWdlbSA9ICh0ZXh0b01lbnNhZ2VtLCB1c3VhcmlvKSA9PiB7XHJcblx0cmV0dXJuIHN1cGFiYXNlQ2xpZW50XHJcblx0XHQuZnJvbShcIm1lbnNhZ2Vuc1wiKVxyXG5cdFx0Lmluc2VydCh7IGRlOiB1c3VhcmlvLCB0ZXh0bzogdGV4dG9NZW5zYWdlbSB9KVxyXG5cdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiBkYXRhWzBdKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0YU1lbnNhZ2VtID0gKG1lbnNhZ2VtSWQpID0+IHtcclxuXHRyZXR1cm4gc3VwYWJhc2VDbGllbnRcclxuXHRcdC5mcm9tKFwibWVuc2FnZW5zXCIpXHJcblx0XHQuZGVsZXRlKClcclxuXHRcdC5tYXRjaCh7IGlkOiBtZW5zYWdlbUlkIH0pXHJcblx0XHQudGhlbigoZGFkb3MpID0+IGRhZG9zKTtcclxufTtcclxuXHJcbi8vIFNpbXVsYW5kbyB1bSB3ZWJzb2NrZWRcclxuY29uc3QgZXNjdXRhRW1UZW1wb1JlYWwgPSAoYWRpY2lvbmFNZW5zYWdlbSkgPT4ge1xyXG5cdHJldHVybiBzdXBhYmFzZUNsaWVudFxyXG5cdFx0LmZyb20oXCJtZW5zYWdlbnNcIilcclxuXHRcdC5vbihcIklOU0VSVFwiLCAoZGFkb3MpID0+IHtcclxuXHRcdFx0YWRpY2lvbmFNZW5zYWdlbShkYWRvcy5uZXcpO1xyXG5cdFx0fSlcclxuXHRcdC5zdWJzY3JpYmUoKTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNlcigpIHtcclxuXHRyZXR1cm4gYXdhaXQgc3VwYWJhc2VDbGllbnQuYXV0aC51c2VyKCk7XHJcbn1cclxuXHJcbmNvbnN0IGdpdGh1YkxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBzdXBhYmFzZUNsaWVudC5hdXRoLnNpZ25Jbih7XHJcblx0XHRwcm92aWRlcjogXCJnaXRodWJcIixcclxuXHR9KTtcclxuXHRyZXR1cm4gdXNlcjtcclxufTtcclxuXHJcbmNvbnN0IGdpdGh1YkxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUNsaWVudC5hdXRoLnNpZ25PdXQoKTtcclxufTtcclxuXHJcbmNvbnN0IGFwaSA9IHtcclxuXHRnZXRNZW5zYWdlbnMsXHJcblx0c2V0TWVuc2FnZW0sXHJcblx0ZGVsZXRhTWVuc2FnZW0sXHJcblx0ZXNjdXRhRW1UZW1wb1JlYWwsXHJcblx0Z2l0aHViTG9naW4sXHJcblx0Z2l0aHViTG9nb3V0LFxyXG5cdGNoZWNrVXNlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX0FQSV9LRVkiLCJTVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUNsaWVudCIsImdldE1lbnNhZ2VucyIsImZyb20iLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsInRoZW4iLCJkYXRhIiwic2V0TWVuc2FnZW0iLCJ0ZXh0b01lbnNhZ2VtIiwidXN1YXJpbyIsImluc2VydCIsImRlIiwidGV4dG8iLCJkZWxldGFNZW5zYWdlbSIsIm1lbnNhZ2VtSWQiLCJkZWxldGUiLCJtYXRjaCIsImlkIiwiZGFkb3MiLCJlc2N1dGFFbVRlbXBvUmVhbCIsImFkaWNpb25hTWVuc2FnZW0iLCJvbiIsIm5ldyIsInN1YnNjcmliZSIsImNoZWNrVXNlciIsImF1dGgiLCJ1c2VyIiwiZ2l0aHViTG9naW4iLCJzaWduSW4iLCJwcm92aWRlciIsImdpdGh1YkxvZ291dCIsImVycm9yIiwic2lnbk91dCIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/index.js\n");

/***/ })

});