"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n\n\n\nfunction Title({ children , tag  }) {\n    const Tag = tag;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"754f53b3826dd5aa\",\n                        [\n                            tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"754f53b3826dd5aa\",\n                dynamic: [\n                    tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${tag}.__jsx-style-dynamic-selector{font-size:24px;\nfont-weigth:600;\ncolor:${_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]}}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\nTitle.defaultProps = {\n    tag: \"h1\"\n};\n// function HomePage() {\n// \treturn (\n// \t\t<div>\n//             <GlobalStyle />\n// \t\t\t<Title>Fala meu parceiro</Title>\n// \t\t\t<Title tag=\"h2\" >Bem vindo ao Vini Matrix</Title>\n// \t\t</div>\n// \t);\n// }\n// export default HomePage;\nfunction PaginaInicial() {\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('ViniR07');\n    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function handleChange(e) {\n        setUsername(e.target.value);\n        console.log(`https://github.com/${username}.png`);\n    }\n    function handleSubmit(e) {\n        e.preventDefault();\n        roteamento.push('/chat');\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n                backgroundRepeat: \"no-repeat\",\n                backgroundSize: \"cover\",\n                backgroundBlendMode: \"multiply\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\",\n                    flexDirection: {\n                        xs: \"column\",\n                        sm: \"row\"\n                    },\n                    width: \"100%\",\n                    maxWidth: \"700px\",\n                    borderRadius: \"5px\",\n                    padding: \"32px\",\n                    margin: \"16px\",\n                    boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            width: {\n                                xs: \"100%\",\n                                sm: \"50%\"\n                            },\n                            textAlign: \"center\",\n                            marginBottom: \"32px\"\n                        },\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                tag: \"h2\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                                lineNumber: 100,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: \"32px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                                lineNumber: 101,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800]\n                                    }\n                                },\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                                lineNumber: 111,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                                lineNumber: 128,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            maxWidth: \"300px\",\n                            padding: \"16px\",\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800],\n                            border: \"1px solid\",\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],\n                            borderRadius: \"10px\",\n                            flex: 1,\n                            minHeight: \"240px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: \"50%\",\n                                    marginBottom: \"16px\"\n                                },\n                                src: `https://github.com/${username}.png` ? `https://github.com/${username}.png` : './assets/default.jpg'\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                                lineNumber: 162,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                    padding: \"3px 10px\",\n                                    borderRadius: \"1000px\"\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                                lineNumber: 169,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                        lineNumber: 146,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\index.js\",\n            lineNumber: 55,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FBTTs0QkFDcEIyQixJQUFJLEVBQUUsQ0FBQzs0QkFDUEMsU0FBUyxFQUFFLENBQU87d0JBQ25CLENBQUM7O3dHQUVBckUsdURBQUs7Z0NBQ0wwQixVQUFVLEVBQUUsQ0FBQztvQ0FDWmUsWUFBWSxFQUFFLENBQUs7b0NBQ25CTSxZQUFZLEVBQUUsQ0FBTTtnQ0FDckIsQ0FBQztnQ0FDRHVCLEdBQUcsR0FBRyxtQkFBbUIsRUFBRXhELFFBQVEsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLEVBQUVBLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBc0I7Ozs7Ozt3R0FFekdiLHNEQUFJO2dDQUNKZ0QsT0FBTyxFQUFDLENBQU87Z0NBQ2Z2QixVQUFVLEVBQUUsQ0FBQztvQ0FDWndCLEtBQUssRUFBRTlDLG9FQUFvQztvQ0FDM0MwQixlQUFlLEVBQ2QxQixvRUFBb0M7b0NBQ3JDc0MsT0FBTyxFQUFFLENBQVU7b0NBQ25CRCxZQUFZLEVBQUUsQ0FBUTtnQ0FDdkIsQ0FBQzswQ0FFQTNCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1lcnNhby1yZWFjdC00Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dEZpZWxkLCBJbWFnZSwgVGV4dCB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVGl0bGUoeyBjaGlsZHJlbiwgdGFnIH0pIHtcclxuXHRjb25zdCBUYWcgPSB0YWc7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxUYWc+e2NoaWxkcmVufTwvVGFnPlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdCR7dGFnfSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWd0aDogNjAwO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXX07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5UaXRsZS5kZWZhdWx0UHJvcHMgPSB7XHJcblx0dGFnOiBcImgxXCIsXHJcbn07XHJcblxyXG4vLyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuLy8gXHRyZXR1cm4gKFxyXG4vLyBcdFx0PGRpdj5cclxuLy8gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbi8vIFx0XHRcdDxUaXRsZT5GYWxhIG1ldSBwYXJjZWlybzwvVGl0bGU+XHJcbi8vIFx0XHRcdDxUaXRsZSB0YWc9XCJoMlwiID5CZW0gdmluZG8gYW8gVmluaSBNYXRyaXg8L1RpdGxlPlxyXG4vLyBcdFx0PC9kaXY+XHJcbi8vIFx0KTtcclxuLy8gfVxyXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJ1ZpbmlSMDcnKTtcclxuICAgIGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2ApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJvdGVhbWVudG8ucHVzaCgnL2NoYXQnKTtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0XHRcdFwidXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKVwiLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuXHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdHhzOiBcImNvbHVtblwiLFxyXG5cdFx0XHRcdFx0XHRcdHNtOiBcInJvd1wiLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XHRcdG1heFdpZHRoOiBcIjcwMHB4XCIsXHJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCIzMnB4XCIsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcdGJveFNoYWRvdzogXCIwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKVwiLFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0ey8qIEZvcm11bMOhcmlvICovfVxyXG5cdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRhcz1cImZvcm1cIlxyXG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgc206IFwiNTAlXCIgfSxcclxuXHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjMycHhcIixcclxuXHRcdFx0XHRcdFx0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRpdGxlIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXRsZT5cclxuXHRcdFx0XHRcdFx0PFRleHRcclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiYm9keTNcIlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7YXBwQ29uZmlnLm5hbWV9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRmdWxsV2lkdGhcclxuXHRcdFx0XHRcdFx0XHR0ZXh0RmllbGRDb2xvcnM9e3tcclxuXHRcdFx0XHRcdFx0XHRcdG5ldXRyYWw6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dENvbG9yOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9yOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9ySGlnaGxpZ2h0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkVudHJhclwiXHJcblx0XHRcdFx0XHRcdFx0ZnVsbFdpZHRoXHJcblx0XHRcdFx0XHRcdFx0YnV0dG9uQ29sb3JzPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250cmFzdENvbG9yOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuXHRcdFx0XHRcdFx0XHRcdG1haW5Db2xvckxpZ2h0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuXHRcdFx0XHRcdFx0XHRcdG1haW5Db2xvclN0cm9uZzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0ey8qIEZvcm11bMOhcmlvICovfVxyXG5cclxuXHRcdFx0XHRcdHsvKiBQaG90byBBcmVhICovfVxyXG5cdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0XHRcdG1heFdpZHRoOiBcIjMwMHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlxyXG5cdFx0XHRcdFx0XHRcdFx0YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogXCIxcHggc29saWRcIixcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0ZmxleDogMSxcclxuXHRcdFx0XHRcdFx0XHRtaW5IZWlnaHQ6IFwiMjQwcHhcIixcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgID8gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgIDogJy4vYXNzZXRzL2RlZmF1bHQuanBnJ31cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PFRleHRcclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiYm9keTRcIlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4IDEwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxMDAwcHhcIixcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e3VzZXJuYW1lfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdHsvKiBQaG90byBBcmVhICovfVxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIkltYWdlIiwiVGV4dCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXBwQ29uZmlnIiwiVGl0bGUiLCJjaGlsZHJlbiIsInRhZyIsIlRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJkZWZhdWx0UHJvcHMiLCJQYWdpbmFJbmljaWFsIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInJvdGVhbWVudG8iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJhcyIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsIm9uU3VibWl0IiwidmFyaWFudCIsImNvbG9yIiwibmFtZSIsImZ1bGxXaWR0aCIsInRleHRGaWVsZENvbG9ycyIsIm5ldXRyYWwiLCJ0ZXh0Q29sb3IiLCJtYWluQ29sb3IiLCJtYWluQ29sb3JIaWdobGlnaHQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwidHlwZSIsImxhYmVsIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Chatcord - Matrix","theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"#3F9142","600":"#2F8132","700":"#207227","800":"#0E5814","900":"#05400A","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();