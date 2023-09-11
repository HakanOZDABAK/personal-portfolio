"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/project.tsx":
/*!********************************!*\
  !*** ./components/project.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Project(param) {\n    let { title, description, tags, imageUrl, repo } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: ref,\n        offset: [\n            \"0 1\",\n            \"1.33 1\"\n        ]\n    });\n    const scaleProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.8,\n        1\n    ]);\n    const opacityProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.6,\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        ref: ref,\n        style: {\n            scale: scaleProgess,\n            opacity: opacityProgess\n        },\n        className: \"group mb-3 sm:mb-8 last:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-[-1rem] pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-2xl font-semibold\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2 leading-relaxed text-gray-700 dark:text-white/70\",\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-3 mt-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"bg-white p-4  w-[3rem] h-[3rem] text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60\",\n                                href: repo,\n                                target: \"_blank\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaGithubSquare, {}, void 0, false, {\n                                    fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-wrap mt-4 gap-2 sm:mt-auto\",\n                            children: tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-black/[0.7] hover:bg-gray-500 px-3 py-1 text-[0.7rem] uppercase tracking-wider  text-white rounded-full dark:text-white/70\",\n                                    children: tag\n                                }, index, false, {\n                                    fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: imageUrl,\n                    alt: \"Project I worked on\",\n                    quality: 100,\n                    className: \"absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl   transition    group-hover:scale-[1.04]   group-hover:-translate-x-3   group-hover:translate-y-3   group-hover:-rotate-2      group-even:group-hover:translate-x-3   group-even:group-hover:translate-y-3   group-even:group-hover:rotate-2      group-even:right-[initial] group-even:-left-40\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projelerim\\\\home\\\\components\\\\project.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"bUn7Yqu7iysk+L6Z0DhRIR4HchU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvamVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRStCO0FBRUE7QUFDaUM7QUFDaEI7QUFLaEQsU0FBU00sUUFBUSxLQU1GO1FBTkUsRUFDZkMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLElBQUksRUFDSkMsUUFBUSxFQUNSQyxJQUFJLEVBQ1MsR0FORTs7SUFPZixNQUFNQyxNQUFNWiw2Q0FBTUEsQ0FBaUI7SUFDbkMsTUFBTSxFQUFFYSxlQUFlLEVBQUUsR0FBR1Ysd0RBQVNBLENBQUM7UUFDcENXLFFBQVFGO1FBQ1JHLFFBQVE7WUFBQztZQUFPO1NBQVM7SUFDM0I7SUFDQSxNQUFNQyxlQUFlWiwyREFBWUEsQ0FBQ1MsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFLO0tBQUU7SUFDbkUsTUFBTUksaUJBQWlCYiwyREFBWUEsQ0FBQ1MsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFLO0tBQUU7SUFFckUscUJBQ0UsOERBQUNYLGlEQUFNQSxDQUFDZ0IsR0FBRztRQUNUTixLQUFLQTtRQUNMTyxPQUFPO1lBQ0xDLE9BQU9KO1lBQ1BLLFNBQVNKO1FBQ1g7UUFDQUssV0FBVTtrQkFFViw0RUFBQ0M7WUFBUUQsV0FBVTs7OEJBQ2pCLDhEQUFDSjtvQkFBSUksV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFHRixXQUFVO3NDQUEwQmY7Ozs7OztzQ0FDeEMsOERBQUNXOzRCQUFJSSxXQUFVO3NDQUNiLDRFQUFDRztnQ0FBRUgsV0FBVTswQ0FDVmQ7Ozs7Ozs7Ozs7O3NDQUlMLDhEQUFDVTs0QkFBSUksV0FBVTtzQ0FDYiw0RUFBQ0k7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLE1BQU1oQjtnQ0FDTkcsUUFBTzswQ0FFUCw0RUFBQ1QsMERBQWNBOzs7Ozs7Ozs7Ozs7Ozs7c0NBR25CLDhEQUFDdUI7NEJBQUdOLFdBQVU7c0NBQ1hiLEtBQUtvQixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2QsOERBQUNDO29DQUNDVixXQUFVOzhDQUdUUTttQ0FGSUM7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUWIsOERBQUM5QixtREFBS0E7b0JBQ0pnQyxLQUFLdkI7b0JBQ0x3QixLQUFJO29CQUNKQyxTQUFTO29CQUNUYixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCcEI7R0ExRVNoQjs7UUFRcUJILG9EQUFTQTtRQUloQkMsdURBQVlBO1FBQ1ZBLHVEQUFZQTs7O0tBYjVCRTtBQTRFVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3QudHN4PzdjZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcHJvamVjdHNEYXRhIH0gZnJvbSBcIkAvbGliL2RhdGFcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBGYUdpdGh1YlNxdWFyZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBBaUZpbGxFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuXHJcbnR5cGUgUHJvamVjdFByb3BzID0gKHR5cGVvZiBwcm9qZWN0c0RhdGEpW251bWJlcl07XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0KHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICB0YWdzLFxyXG4gIGltYWdlVXJsLFxyXG4gIHJlcG8sXHJcbn06IFByb2plY3RQcm9wcykge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7XHJcbiAgICB0YXJnZXQ6IHJlZixcclxuICAgIG9mZnNldDogW1wiMCAxXCIsIFwiMS4zMyAxXCJdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHNjYWxlUHJvZ2VzcyA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAuOCwgMV0pO1xyXG4gIGNvbnN0IG9wYWNpdHlQcm9nZXNzID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMC42LCAxXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBzY2FsZTogc2NhbGVQcm9nZXNzLFxyXG4gICAgICAgIG9wYWNpdHk6IG9wYWNpdHlQcm9nZXNzLFxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJncm91cCBtYi0zIHNtOm1iLTggbGFzdDptYi0wXCJcclxuICAgID5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgbWF4LXctWzQycmVtXSBib3JkZXIgYm9yZGVyLWJsYWNrLzUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc206cHItOCByZWxhdGl2ZSBzbTpoLVsyMHJlbV0gaG92ZXI6YmctZ3JheS0yMDAgdHJhbnNpdGlvbiBzbTpncm91cC1ldmVuOnBsLTggZGFyazp0ZXh0LXdoaXRlIGRhcms6Ymctd2hpdGUvMTAgZGFyazpob3ZlcjpiZy13aGl0ZS8yMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWy0xcmVtXSBwdC00IHBiLTcgcHgtNSBzbTpwbC0xMCBzbTpwci0yIHNtOnB0LTEwIHNtOm1heC13LVs1MCVdIGZsZXggZmxleC1jb2wgaC1mdWxsIHNtOmdyb3VwLWV2ZW46bWwtWzE4cmVtXVwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj57dGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC13aGl0ZS83MFwiPlxyXG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIG10LTFcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgIHctWzNyZW1dIGgtWzNyZW1dIHRleHQtZ3JheS03MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1bMS4zNXJlbV0gcm91bmRlZC1mdWxsIGZvY3VzOnNjYWxlLVsxLjE1XSBob3ZlcjpzY2FsZS1bMS4xNV0gaG92ZXI6dGV4dC1ncmF5LTk1MCBhY3RpdmU6c2NhbGUtMTA1IHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXIgYm9yZGVyQmxhY2sgZGFyazpiZy13aGl0ZS8xMCBkYXJrOnRleHQtd2hpdGUvNjBcIlxyXG4gICAgICAgICAgICAgIGhyZWY9e3JlcG99XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGYUdpdGh1YlNxdWFyZSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtdC00IGdhcC0yIHNtOm10LWF1dG9cIj5cclxuICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay9bMC43XSBob3ZlcjpiZy1ncmF5LTUwMCBweC0zIHB5LTEgdGV4dC1bMC43cmVtXSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGRhcms6dGV4dC13aGl0ZS83MFwiXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICBhbHQ9XCJQcm9qZWN0IEkgd29ya2VkIG9uXCJcclxuICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGhpZGRlbiBzbTpibG9jayB0b3AtOCAtcmlnaHQtNDAgdy1bMjguMjVyZW1dIHJvdW5kZWQtdC1sZyBzaGFkb3ctMnhsXHJcbiAgICAgICAgdHJhbnNpdGlvbiBcclxuICAgICAgICBncm91cC1ob3ZlcjpzY2FsZS1bMS4wNF1cclxuICAgICAgICBncm91cC1ob3ZlcjotdHJhbnNsYXRlLXgtM1xyXG4gICAgICAgIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTNcclxuICAgICAgICBncm91cC1ob3Zlcjotcm90YXRlLTJcclxuXHJcbiAgICAgICAgZ3JvdXAtZXZlbjpncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0zXHJcbiAgICAgICAgZ3JvdXAtZXZlbjpncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0zXHJcbiAgICAgICAgZ3JvdXAtZXZlbjpncm91cC1ob3Zlcjpyb3RhdGUtMlxyXG5cclxuICAgICAgICBncm91cC1ldmVuOnJpZ2h0LVtpbml0aWFsXSBncm91cC1ldmVuOi1sZWZ0LTQwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsIkltYWdlIiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwiRmFHaXRodWJTcXVhcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJpbWFnZVVybCIsInJlcG8iLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJzY2FsZVByb2dlc3MiLCJvcGFjaXR5UHJvZ2VzcyIsImRpdiIsInN0eWxlIiwic2NhbGUiLCJvcGFjaXR5IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgzIiwicCIsImEiLCJocmVmIiwidWwiLCJtYXAiLCJ0YWciLCJpbmRleCIsImxpIiwic3JjIiwiYWx0IiwicXVhbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/project.tsx\n"));

/***/ })

});