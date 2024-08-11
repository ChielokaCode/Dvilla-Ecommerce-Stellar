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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var _emotion_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/server */ \"@emotion/server\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"@emotion/react/jsx-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server__WEBPACK_IMPORTED_MODULE_0__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__]);\n([_emotion_server__WEBPACK_IMPORTED_MODULE_0__, _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    // Emotion Critical SSR Styles\n    static async getInitialProps(ctx) {\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n        const critical = (0,_emotion_server__WEBPACK_IMPORTED_MODULE_0__.extractCritical)(initialProps.html);\n        initialProps.html = critical.html;\n        initialProps.styles = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n            children: [\n                initialProps.styles,\n                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"style\", {\n                    \"data-emotion-css\": critical.ids.join(\" \"),\n                    dangerouslySetInnerHTML: {\n                        __html: critical.css\n                    }\n                })\n            ]\n        });\n        return initialProps;\n    }\n    render() {\n        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"link\", {\n                            rel: \"shortcut icon\",\n                            href: \"/favicon.ico\"\n                        }),\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"/site.webmanifest\"\n                        }),\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"meta\", {\n                            name: \"msapplication-config\",\n                            content: \"/browserconfig.xml\"\n                        }),\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            sizes: \"180x180\",\n                            href: \"/favicons/apple-touch-icon.png\"\n                        }),\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"32x32\",\n                            href: \"/assests/image/dvilla.png\"\n                        }),\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"16x16\",\n                            href: \"/assests/image/dvilla.png\"\n                        }),\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"link\", {\n                            rel: \"mask-icon\",\n                            href: \"/favicons/safari-pinned-tab.svg\",\n                            color: \"#7e5da8\"\n                        }),\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"meta\", {\n                            name: \"msapplication-TileColor\",\n                            content: \"#7e5da8\"\n                        }),\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"meta\", {\n                            name: \"theme-color\",\n                            content: \"#ffffff\"\n                        })\n                    ]\n                }),\n                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"body\", {\n                    children: [\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),\n                        (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})\n                    ]\n                })\n            ]\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpRDtBQVEzQjtBQUFBO0FBTVAsTUFBTVksbUJBQW1CWCxzREFBUUE7SUFDOUM7SUFDQSxhQUFhWSxnQkFBZ0JDLEdBQW9CLEVBQWlDO1FBQ2hGLE1BQU1DLGVBQWUsTUFBTWQsb0VBQXdCLENBQUNhO1FBQ3BELE1BQU1FLFdBQVdoQixnRUFBZUEsQ0FBQ2UsYUFBYUUsSUFBSTtRQUNsREYsYUFBYUUsSUFBSSxHQUFHRCxTQUFTQyxJQUFJO1FBQ2pDRixhQUFhRyxNQUFNLEdBQ2pCUCxnRUFBQUEsQ0FBQUYsZ0VBQUFBLEVBQUE7WUFBQVUsVUFBQTtnQkFDR0osYUFBYUcsTUFBTTtnQkFDcEJYLCtEQUFBQSxDQUFBO29CQUNFLG9CQUFrQlMsU0FBU0ksR0FBRyxDQUFDQyxJQUFJLENBQUM7b0JBQ3BDQyx5QkFBeUI7d0JBQUVDLFFBQVFQLFNBQVNRLEdBQUFBO29CQUFJO2dCQUFFO2FBQ2xEO1FBQUE7UUFJTixPQUFPVDtJQUNUO0lBRUFVLFNBQVM7UUFDUCxPQUNFZCxnRUFBQUEsQ0FBQ1IsK0NBQUlBLEVBQUE7WUFBQ3VCLE1BQUs7WUFBSVAsVUFBQTtnQkFDYlIsZ0VBQUFBLENBQUNULCtDQUFJQSxFQUFBO29CQUFBaUIsVUFBQTt3QkFHSFosK0RBQUFBLENBQUE7NEJBQU1vQixLQUFJOzRCQUFnQkMsTUFBSzt3QkFBYzt3QkFDN0NyQiwrREFBQUEsQ0FBQTs0QkFBTW9CLEtBQUk7NEJBQVdDLE1BQUs7d0JBQW1CO3dCQUM3Q3JCLCtEQUFBQSxDQUFBOzRCQUFNc0IsTUFBSzs0QkFBdUJDLFNBQVE7d0JBQW9CO3dCQUM5RHZCLCtEQUFBQSxDQUFBOzRCQUFNb0IsS0FBSTs0QkFBbUJJLE9BQU07NEJBQVVILE1BQUs7d0JBQWdDO3dCQUNsRnJCLCtEQUFBQSxDQUFBOzRCQUFNb0IsS0FBSTs0QkFBT0ssTUFBSzs0QkFBWUQsT0FBTTs0QkFBUUgsTUFBSzt3QkFBMkI7d0JBQ2hGckIsK0RBQUFBLENBQUE7NEJBQU1vQixLQUFJOzRCQUFPSyxNQUFLOzRCQUFZRCxPQUFNOzRCQUFRSCxNQUFLO3dCQUEyQjt3QkFDaEZyQiwrREFBQUEsQ0FBQTs0QkFBTW9CLEtBQUk7NEJBQVlDLE1BQUs7NEJBQWtDSyxPQUFNO3dCQUFTO3dCQUM1RTFCLCtEQUFBQSxDQUFBOzRCQUFNc0IsTUFBSzs0QkFBMEJDLFNBQVE7d0JBQVM7d0JBQ3REdkIsK0RBQUFBLENBQUE7NEJBQU1zQixNQUFLOzRCQUFjQyxTQUFRO3dCQUFTO3FCQUFHO2dCQUFBO2dCQUcvQ25CLGdFQUFBQSxDQUFBO29CQUFBUSxVQUFBO3dCQUNFWiwrREFBQUEsQ0FBQ0gsK0NBQUlBLEVBQUE7d0JBQ0xHLCtEQUFBQSxDQUFDRixxREFBVUEsRUFBQTtxQkFBRztnQkFBQTthQUNUO1FBQUE7SUFHYjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29yb2Jhbi1kYXBwLWJvaWxlcnBsYXRlLy4vc3JjL3BhZ2VzL19kb2N1bWVudC50c3g/MTg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRyYWN0Q3JpdGljYWwgfSBmcm9tICdAZW1vdGlvbi9zZXJ2ZXInXG5pbXBvcnQgRG9jdW1lbnQsIHtcbiAgdHlwZSBEb2N1bWVudENvbnRleHQsXG4gIHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIEhlYWQsXG4gIEh0bWwsXG4gIE1haW4sXG4gIE5leHRTY3JpcHQsXG59IGZyb20gJ25leHQvZG9jdW1lbnQnXG5cbmV4cG9ydCB0eXBlIE5ld0RvY3VtZW50SW5pdGlhbFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIGlkczogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudDxOZXdEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAvLyBFbW90aW9uIENyaXRpY2FsIFNTUiBTdHlsZXNcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6IERvY3VtZW50Q29udGV4dCk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIGNvbnN0IGNyaXRpY2FsID0gZXh0cmFjdENyaXRpY2FsKGluaXRpYWxQcm9wcy5odG1sKVxuICAgIGluaXRpYWxQcm9wcy5odG1sID0gY3JpdGljYWwuaHRtbFxuICAgIGluaXRpYWxQcm9wcy5zdHlsZXMgPSAoXG4gICAgICA8PlxuICAgICAgICB7aW5pdGlhbFByb3BzLnN0eWxlc31cbiAgICAgICAgPHN0eWxlXG4gICAgICAgICAgZGF0YS1lbW90aW9uLWNzcz17Y3JpdGljYWwuaWRzLmpvaW4oJyAnKX1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNyaXRpY2FsLmNzcyB9fVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIGluaXRpYWxQcm9wc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgey8qIFRPRE8gTWFuaWZlc3QgJiBGYXZpY29ucyAqL31cbiAgICAgICAgICB7LyogVElQOiBHZW5lcmF0ZSBpdCBhdCBodHRwczovL3JlYWxmYXZpY29uZ2VuZXJhdG9yLm5ldC8gKi99XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIiBjb250ZW50PVwiL2Jyb3dzZXJjb25maWcueG1sXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9hc3Nlc3RzL2ltYWdlL2R2aWxsYS5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvYXNzZXN0cy9pbWFnZS9kdmlsbGEucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL2Zhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzdlNWRhOFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiM3ZTVkYThcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV4dHJhY3RDcml0aWNhbCIsIkRvY3VtZW50IiwiSGVhZCIsIkh0bWwiLCJNYWluIiwiTmV4dFNjcmlwdCIsImpzeCIsIl9qc3giLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeHMiLCJfanN4cyIsIk15RG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJpbml0aWFsUHJvcHMiLCJjcml0aWNhbCIsImh0bWwiLCJzdHlsZXMiLCJjaGlsZHJlbiIsImlkcyIsImpvaW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNzcyIsInJlbmRlciIsImxhbmciLCJyZWwiLCJocmVmIiwibmFtZSIsImNvbnRlbnQiLCJzaXplcyIsInR5cGUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "@emotion/react/jsx-runtime":
/*!*********************************************!*\
  !*** external "@emotion/react/jsx-runtime" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@emotion/react/jsx-runtime");;

/***/ }),

/***/ "@emotion/server":
/*!**********************************!*\
  !*** external "@emotion/server" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@emotion/server");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();