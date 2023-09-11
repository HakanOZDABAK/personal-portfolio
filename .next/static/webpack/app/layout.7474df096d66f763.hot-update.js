"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"(app-pages-browser)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Bootcamp Education\",\n        location: \"In home\",\n        description: \"In the last year of my education, i want to learn new stuffs and i decided to start learning to React. I finished the course after 4 months of studying.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlineLightBulb),\n        date: \"2023\"\n    },\n    {\n        title: \"Highschool Student\",\n        location: \"Antalya, Turkey\",\n        description: \"I graduated after 4 years of studying. I studied Electrical-Electronics Engineering.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuGraduationCap),\n        date: \"2019-2023\"\n    },\n    {\n        title: \"Intern Engineer\",\n        location: \"Bursa, Turkey\",\n        description: \"I worked as a intern engineer for 3 months. I learned teamwork and engineering stufs.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__.CgWorkAlt),\n        date: \"2022\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Emotions Classification\",\n        description: \"In this project, i use Keras for classification of three face emonitions\",\n        tags: [\n            \"Python\",\n            \"Keras\",\n            \"Classification\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Emotions_Classification\"\n    },\n    {\n        title: \"E-Commerce App\",\n        description: \"Making E-Commerce Website at React with Redux and UI Libraries\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"Semantic-UI\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/E-Commerce\"\n    },\n    {\n        title: \"Users and Items API Service\",\n        description: \"I designed a Back-End service for Users registration and Items add.\",\n        tags: [\n            \"Python\",\n            \"FastAPI\",\n            \"API\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Users_Items_API\"\n    },\n    {\n        title: \"Patient Registration System\",\n        description: \"I created Patient Registration System as hospital's using\",\n        tags: [\n            \"Java\",\n            \"Java Swing\"\n        ],\n        live: \"https://react-multi-step-form-psi.vercel.app/\",\n        repo: \"https://github.com/ersinydnn/react-multi-step-form\"\n    },\n    {\n        title: \"Netfilms App\",\n        description: \"This is my biggest and fullest application. I use NextJS in this project and i learned so many this about NextJS. I understand NextJS routing system in this project. By the way this is not my app, i re-create this app.\",\n        tags: [\n            \"React\",\n            \"React-Hooks\",\n            \"Next.js\",\n            \"Styled-Components\",\n            \"Responsive\"\n        ],\n        live: \"https://netfilms-chi.vercel.app/\",\n        repo: \"https://github.com/ersinydnn/netflims-app\"\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"Tailwind\",\n    \"Python\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNNO0FBQ0c7QUFPN0MsTUFBTUksUUFBUTtJQUNuQjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsa0JBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1YLDBEQUFtQixDQUFDRyw4REFBa0JBO1FBQzVDVSxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNWCwwREFBbUIsQ0FBQ0UsMkRBQWVBO1FBQ3pDVyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNWCwwREFBbUIsQ0FBQ0MscURBQVNBO1FBQ25DWSxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsZUFBZTtJQUMxQjtRQUNFTixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVU7WUFBUztTQUFpQjtRQUUzQ0MsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVM7U0FBYztRQUN2Q0MsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFVO1lBQVc7U0FBTTtRQUNsQ0MsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFRO1NBQWE7UUFDNUJFLE1BQU07UUFDTkQsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFDSjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREUsTUFBTTtRQUNORCxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUUsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGEudHM/MTZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENnV29ya0FsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBMdUdyYWR1YXRpb25DYXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvbHVcIjtcclxuaW1wb3J0IHsgSGlPdXRsaW5lTGlnaHRCdWxiIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCByZXN0SW1nIGZyb20gXCJAL3B1YmxpYy9yZXN0Y291bnRyaWVzLnBuZ1wiO1xyXG5pbXBvcnQgbmV0ZmlsbXNJbWcgZnJvbSBcIkAvcHVibGljL25ldGZpbG1zLnBuZ1wiO1xyXG5pbXBvcnQgZ2V0aXJJbWcgZnJvbSBcIkAvcHVibGljL2dldGlyLnBuZ1wiO1xyXG5pbXBvcnQgbXVsdGlzdGVwSW1nIGZyb20gXCJAL3B1YmxpYy9tdWx0aXN0ZXAucG5nXCI7XHJcbmltcG9ydCBlY29tbWVyY2VJbWcgZnJvbSBcIkAvcHVibGljL2Vjb21tZXJjZS5wbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkhvbWVcIixcclxuICAgIGhhc2g6IFwiI2hvbWVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQWJvdXRcIixcclxuICAgIGhhc2g6IFwiI2Fib3V0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlByb2plY3RzXCIsXHJcbiAgICBoYXNoOiBcIiNwcm9qZWN0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTa2lsbHNcIixcclxuICAgIGhhc2g6IFwiI3NraWxsc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJFeHBlcmllbmNlXCIsXHJcbiAgICBoYXNoOiBcIiNleHBlcmllbmNlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNvbnRhY3RcIixcclxuICAgIGhhc2g6IFwiI2NvbnRhY3RcIixcclxuICB9LFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzRGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJCb290Y2FtcCBFZHVjYXRpb25cIixcclxuICAgIGxvY2F0aW9uOiBcIkluIGhvbWVcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkluIHRoZSBsYXN0IHllYXIgb2YgbXkgZWR1Y2F0aW9uLCBpIHdhbnQgdG8gbGVhcm4gbmV3IHN0dWZmcyBhbmQgaSBkZWNpZGVkIHRvIHN0YXJ0IGxlYXJuaW5nIHRvIFJlYWN0LiBJIGZpbmlzaGVkIHRoZSBjb3Vyc2UgYWZ0ZXIgNCBtb250aHMgb2Ygc3R1ZHlpbmcuXCIsXHJcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEhpT3V0bGluZUxpZ2h0QnVsYiksXHJcbiAgICBkYXRlOiBcIjIwMjNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkhpZ2hzY2hvb2wgU3R1ZGVudFwiLFxyXG4gICAgbG9jYXRpb246IFwiQW50YWx5YSwgVHVya2V5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJIGdyYWR1YXRlZCBhZnRlciA0IHllYXJzIG9mIHN0dWR5aW5nLiBJIHN0dWRpZWQgRWxlY3RyaWNhbC1FbGVjdHJvbmljcyBFbmdpbmVlcmluZy5cIixcclxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTHVHcmFkdWF0aW9uQ2FwKSxcclxuICAgIGRhdGU6IFwiMjAxOS0yMDIzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJJbnRlcm4gRW5naW5lZXJcIixcclxuICAgIGxvY2F0aW9uOiBcIkJ1cnNhLCBUdXJrZXlcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgd29ya2VkIGFzIGEgaW50ZXJuIGVuZ2luZWVyIGZvciAzIG1vbnRocy4gSSBsZWFybmVkIHRlYW13b3JrIGFuZCBlbmdpbmVlcmluZyBzdHVmcy5cIixcclxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2dXb3JrQWx0KSxcclxuICAgIGRhdGU6IFwiMjAyMlwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHNEYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkVtb3Rpb25zIENsYXNzaWZpY2F0aW9uXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJbiB0aGlzIHByb2plY3QsIGkgdXNlIEtlcmFzIGZvciBjbGFzc2lmaWNhdGlvbiBvZiB0aHJlZSBmYWNlIGVtb25pdGlvbnNcIixcclxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcIktlcmFzXCIsIFwiQ2xhc3NpZmljYXRpb25cIl0sXHJcblxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFrYW5PWkRBQkFLL0Vtb3Rpb25zX0NsYXNzaWZpY2F0aW9uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJFLUNvbW1lcmNlIEFwcFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTWFraW5nIEUtQ29tbWVyY2UgV2Vic2l0ZSBhdCBSZWFjdCB3aXRoIFJlZHV4IGFuZCBVSSBMaWJyYXJpZXNcIixcclxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJTZW1hbnRpYy1VSVwiXSxcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hha2FuT1pEQUJBSy9FLUNvbW1lcmNlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJVc2VycyBhbmQgSXRlbXMgQVBJIFNlcnZpY2VcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgZGVzaWduZWQgYSBCYWNrLUVuZCBzZXJ2aWNlIGZvciBVc2VycyByZWdpc3RyYXRpb24gYW5kIEl0ZW1zIGFkZC5cIixcclxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcIkZhc3RBUElcIiwgXCJBUElcIl0sXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYWthbk9aREFCQUsvVXNlcnNfSXRlbXNfQVBJXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQYXRpZW50IFJlZ2lzdHJhdGlvbiBTeXN0ZW1cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgY3JlYXRlZCBQYXRpZW50IFJlZ2lzdHJhdGlvbiBTeXN0ZW0gYXMgaG9zcGl0YWwncyB1c2luZ1wiLFxyXG4gICAgdGFnczogW1wiSmF2YVwiLCBcIkphdmEgU3dpbmdcIl0sXHJcbiAgICBsaXZlOiBcImh0dHBzOi8vcmVhY3QtbXVsdGktc3RlcC1mb3JtLXBzaS52ZXJjZWwuYXBwL1wiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vZXJzaW55ZG5uL3JlYWN0LW11bHRpLXN0ZXAtZm9ybVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTmV0ZmlsbXMgQXBwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGlzIGlzIG15IGJpZ2dlc3QgYW5kIGZ1bGxlc3QgYXBwbGljYXRpb24uIEkgdXNlIE5leHRKUyBpbiB0aGlzIHByb2plY3QgYW5kIGkgbGVhcm5lZCBzbyBtYW55IHRoaXMgYWJvdXQgTmV4dEpTLiBJIHVuZGVyc3RhbmQgTmV4dEpTIHJvdXRpbmcgc3lzdGVtIGluIHRoaXMgcHJvamVjdC4gQnkgdGhlIHdheSB0aGlzIGlzIG5vdCBteSBhcHAsIGkgcmUtY3JlYXRlIHRoaXMgYXBwLlwiLFxyXG4gICAgdGFnczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiUmVhY3QtSG9va3NcIixcclxuICAgICAgXCJOZXh0LmpzXCIsXHJcbiAgICAgIFwiU3R5bGVkLUNvbXBvbmVudHNcIixcclxuICAgICAgXCJSZXNwb25zaXZlXCIsXHJcbiAgICBdLFxyXG4gICAgbGl2ZTogXCJodHRwczovL25ldGZpbG1zLWNoaS52ZXJjZWwuYXBwL1wiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vZXJzaW55ZG5uL25ldGZsaW1zLWFwcFwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzRGF0YSA9IFtcclxuICBcIkhUTUxcIixcclxuICBcIkNTU1wiLFxyXG4gIFwiSmF2YVNjcmlwdFwiLFxyXG4gIFwiVHlwZVNjcmlwdFwiLFxyXG4gIFwiUmVhY3RcIixcclxuICBcIk5leHQuanNcIixcclxuICBcIk5vZGUuanNcIixcclxuICBcIkdpdFwiLFxyXG4gIFwiVGFpbHdpbmRcIixcclxuICBcIlB5dGhvblwiLFxyXG5dIGFzIGNvbnN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDZ1dvcmtBbHQiLCJMdUdyYWR1YXRpb25DYXAiLCJIaU91dGxpbmVMaWdodEJ1bGIiLCJsaW5rcyIsIm5hbWUiLCJoYXNoIiwiZXhwZXJpZW5jZXNEYXRhIiwidGl0bGUiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJkYXRlIiwicHJvamVjdHNEYXRhIiwidGFncyIsInJlcG8iLCJsaXZlIiwic2tpbGxzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/data.ts\n"));

/***/ })

});