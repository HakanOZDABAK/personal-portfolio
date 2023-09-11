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

/***/ "(app-pages-browser)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/cg */ \"(app-pages-browser)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Java and React Camp\",\n        location: \"In Youtube\",\n        description: \"In the 2021, I finished nearly 30 hours Java & React camp in Youtube. It given by Engin Demiroğ. I have learned about Java Back-End development and React-Redux Front-End development\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlineLightBulb),\n        date: \"2021\"\n    },\n    {\n        title: \"Highschool Student\",\n        location: \"Antalya, Turkey\",\n        description: \"I graduated after 5(4+1 Preparatory Class) years of studying and I become second in Formal Education with 3.41 GPA. I studied Electrical-Electronics Engineering.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuGraduationCap),\n        date: \"2018-2023\"\n    },\n    {\n        title: \"Intern Engineer\",\n        location: \"Bursa, Turkey\",\n        description: \"I worked as a intern engineer for 3 months. I learned teamwork and engineering stufs.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__.CgWorkAlt),\n        date: \"2022\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Emotions Classification\",\n        description: \"In this project, i use Keras for classification of three face emonitions\",\n        tags: [\n            \"Python\",\n            \"Keras\",\n            \"Classification\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Emotions_Classification\"\n    },\n    {\n        title: \"E-Commerce App\",\n        description: \"Making E-Commerce Website at React with Redux and UI Libraries\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"Semantic-UI\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/E-Commerce\"\n    },\n    {\n        title: \"Users and Items API Service\",\n        description: \"I designed a Back-End service for Users registration and Items add.\",\n        tags: [\n            \"Python\",\n            \"FastAPI\",\n            \"API\",\n            \"Authorization\",\n            \"Routing\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Users_Items_API\"\n    },\n    {\n        title: \"Patient Registration System\",\n        description: \"I created Patient Registration System as hospital's using\",\n        tags: [\n            \"Java\",\n            \"Java Swing\",\n            \"GUI\"\n        ],\n        live: \"https://react-multi-step-form-psi.vercel.app/\",\n        repo: \"https://github.com/HakanOZDABAK/Patient-Registration-System\"\n    },\n    {\n        title: \"Java Springboot User Candidate Database\",\n        description: \"Like my last project, I created user candidate system but at this time I developed it at Back-end side\",\n        tags: [\n            \"Java\",\n            \"SpringBoot\",\n            \"Back-End\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Java-Springboot-User-Candidate-Database\"\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Python\",\n    \"FastAPI\",\n    \"Java\",\n    \"Java Swing\",\n    \"SpringBoot\",\n    \"Redux\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNNO0FBQ0c7QUFPN0MsTUFBTUksUUFBUTtJQUNuQjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsa0JBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1YLDBEQUFtQixDQUFDRyw4REFBa0JBO1FBQzVDVSxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNWCwwREFBbUIsQ0FBQ0UsMkRBQWVBO1FBQ3pDVyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNWCwwREFBbUIsQ0FBQ0MscURBQVNBO1FBQ25DWSxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsZUFBZTtJQUMxQjtRQUNFTixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVU7WUFBUztTQUFpQjtRQUUzQ0MsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVM7U0FBYztRQUN2Q0MsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFVO1lBQVc7WUFBTTtZQUFnQjtTQUFVO1FBQzVEQyxNQUFNO0lBQ1I7SUFDQTtRQUNFUixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVE7WUFBYTtTQUFNO1FBQ2xDRSxNQUFNO1FBQ05ELE1BQU07SUFDUjtJQUNBO1FBQ0VSLE9BQU87UUFDUEUsYUFDRTtRQUNGSyxNQUFNO1lBQ0o7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1FLGFBQWE7SUFDeEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZGF0YS50cz8xNmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2dXb3JrQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XHJcbmltcG9ydCB7IEx1R3JhZHVhdGlvbkNhcCB9IGZyb20gXCJyZWFjdC1pY29ucy9sdVwiO1xyXG5pbXBvcnQgeyBIaU91dGxpbmVMaWdodEJ1bGIgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHJlc3RJbWcgZnJvbSBcIkAvcHVibGljL3Jlc3Rjb3VudHJpZXMucG5nXCI7XHJcbmltcG9ydCBuZXRmaWxtc0ltZyBmcm9tIFwiQC9wdWJsaWMvbmV0ZmlsbXMucG5nXCI7XHJcbmltcG9ydCBnZXRpckltZyBmcm9tIFwiQC9wdWJsaWMvZ2V0aXIucG5nXCI7XHJcbmltcG9ydCBtdWx0aXN0ZXBJbWcgZnJvbSBcIkAvcHVibGljL211bHRpc3RlcC5wbmdcIjtcclxuaW1wb3J0IGVjb21tZXJjZUltZyBmcm9tIFwiQC9wdWJsaWMvZWNvbW1lcmNlLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSG9tZVwiLFxyXG4gICAgaGFzaDogXCIjaG9tZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBYm91dFwiLFxyXG4gICAgaGFzaDogXCIjYWJvdXRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUHJvamVjdHNcIixcclxuICAgIGhhc2g6IFwiI3Byb2plY3RzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNraWxsc1wiLFxyXG4gICAgaGFzaDogXCIjc2tpbGxzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkV4cGVyaWVuY2VcIixcclxuICAgIGhhc2g6IFwiI2V4cGVyaWVuY2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29udGFjdFwiLFxyXG4gICAgaGFzaDogXCIjY29udGFjdFwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXNEYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkphdmEgYW5kIFJlYWN0IENhbXBcIixcclxuICAgIGxvY2F0aW9uOiBcIkluIFlvdXR1YmVcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkluIHRoZSAyMDIxLCBJIGZpbmlzaGVkIG5lYXJseSAzMCBob3VycyBKYXZhICYgUmVhY3QgY2FtcCBpbiBZb3V0dWJlLiBJdCBnaXZlbiBieSBFbmdpbiBEZW1pcm/Eny4gSSBoYXZlIGxlYXJuZWQgYWJvdXQgSmF2YSBCYWNrLUVuZCBkZXZlbG9wbWVudCBhbmQgUmVhY3QtUmVkdXggRnJvbnQtRW5kIGRldmVsb3BtZW50XCIsXHJcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEhpT3V0bGluZUxpZ2h0QnVsYiksXHJcbiAgICBkYXRlOiBcIjIwMjFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkhpZ2hzY2hvb2wgU3R1ZGVudFwiLFxyXG4gICAgbG9jYXRpb246IFwiQW50YWx5YSwgVHVya2V5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJIGdyYWR1YXRlZCBhZnRlciA1KDQrMSBQcmVwYXJhdG9yeSBDbGFzcykgeWVhcnMgb2Ygc3R1ZHlpbmcgYW5kIEkgYmVjb21lIHNlY29uZCBpbiBGb3JtYWwgRWR1Y2F0aW9uIHdpdGggMy40MSBHUEEuIEkgc3R1ZGllZCBFbGVjdHJpY2FsLUVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nLlwiLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChMdUdyYWR1YXRpb25DYXApLFxyXG4gICAgZGF0ZTogXCIyMDE4LTIwMjNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkludGVybiBFbmdpbmVlclwiLFxyXG4gICAgbG9jYXRpb246IFwiQnVyc2EsIFR1cmtleVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSSB3b3JrZWQgYXMgYSBpbnRlcm4gZW5naW5lZXIgZm9yIDMgbW9udGhzLiBJIGxlYXJuZWQgdGVhbXdvcmsgYW5kIGVuZ2luZWVyaW5nIHN0dWZzLlwiLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChDZ1dvcmtBbHQpLFxyXG4gICAgZGF0ZTogXCIyMDIyXCIsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0RhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRW1vdGlvbnMgQ2xhc3NpZmljYXRpb25cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkluIHRoaXMgcHJvamVjdCwgaSB1c2UgS2VyYXMgZm9yIGNsYXNzaWZpY2F0aW9uIG9mIHRocmVlIGZhY2UgZW1vbml0aW9uc1wiLFxyXG4gICAgdGFnczogW1wiUHl0aG9uXCIsIFwiS2VyYXNcIiwgXCJDbGFzc2lmaWNhdGlvblwiXSxcclxuXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYWthbk9aREFCQUsvRW1vdGlvbnNfQ2xhc3NpZmljYXRpb25cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkUtQ29tbWVyY2UgQXBwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJNYWtpbmcgRS1Db21tZXJjZSBXZWJzaXRlIGF0IFJlYWN0IHdpdGggUmVkdXggYW5kIFVJIExpYnJhcmllc1wiLFxyXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIlNlbWFudGljLVVJXCJdLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFrYW5PWkRBQkFLL0UtQ29tbWVyY2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlVzZXJzIGFuZCBJdGVtcyBBUEkgU2VydmljZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSSBkZXNpZ25lZCBhIEJhY2stRW5kIHNlcnZpY2UgZm9yIFVzZXJzIHJlZ2lzdHJhdGlvbiBhbmQgSXRlbXMgYWRkLlwiLFxyXG4gICAgdGFnczogW1wiUHl0aG9uXCIsIFwiRmFzdEFQSVwiLCBcIkFQSVwiLFwiQXV0aG9yaXphdGlvblwiLFwiUm91dGluZ1wiXSxcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hha2FuT1pEQUJBSy9Vc2Vyc19JdGVtc19BUElcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBhdGllbnQgUmVnaXN0cmF0aW9uIFN5c3RlbVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSSBjcmVhdGVkIFBhdGllbnQgUmVnaXN0cmF0aW9uIFN5c3RlbSBhcyBob3NwaXRhbCdzIHVzaW5nXCIsXHJcbiAgICB0YWdzOiBbXCJKYXZhXCIsIFwiSmF2YSBTd2luZ1wiLFwiR1VJXCJdLFxyXG4gICAgbGl2ZTogXCJodHRwczovL3JlYWN0LW11bHRpLXN0ZXAtZm9ybS1wc2kudmVyY2VsLmFwcC9cIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hha2FuT1pEQUJBSy9QYXRpZW50LVJlZ2lzdHJhdGlvbi1TeXN0ZW1cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkphdmEgU3ByaW5nYm9vdCBVc2VyIENhbmRpZGF0ZSBEYXRhYmFzZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTGlrZSBteSBsYXN0IHByb2plY3QsIEkgY3JlYXRlZCB1c2VyIGNhbmRpZGF0ZSBzeXN0ZW0gYnV0IGF0IHRoaXMgdGltZSBJIGRldmVsb3BlZCBpdCBhdCBCYWNrLWVuZCBzaWRlXCIsXHJcbiAgICB0YWdzOiBbXHJcbiAgICAgIFwiSmF2YVwiLFxyXG4gICAgICBcIlNwcmluZ0Jvb3RcIixcclxuICAgICAgXCJCYWNrLUVuZFwiXHJcbiAgICBdLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFrYW5PWkRBQkFLL0phdmEtU3ByaW5nYm9vdC1Vc2VyLUNhbmRpZGF0ZS1EYXRhYmFzZVwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzRGF0YSA9IFtcclxuICBcIkhUTUxcIixcclxuICBcIkNTU1wiLFxyXG4gIFwiSmF2YVNjcmlwdFwiLFxyXG4gIFwiVHlwZVNjcmlwdFwiLFxyXG4gIFwiUmVhY3RcIixcclxuICBcIk5leHQuanNcIixcclxuICBcIlB5dGhvblwiLFxyXG4gIFwiRmFzdEFQSVwiLFxyXG4gIFwiSmF2YVwiLFxyXG4gIFwiSmF2YSBTd2luZ1wiLFxyXG4gIFwiU3ByaW5nQm9vdFwiLFxyXG4gIFwiUmVkdXhcIixcclxuXSBhcyBjb25zdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2dXb3JrQWx0IiwiTHVHcmFkdWF0aW9uQ2FwIiwiSGlPdXRsaW5lTGlnaHRCdWxiIiwibGlua3MiLCJuYW1lIiwiaGFzaCIsImV4cGVyaWVuY2VzRGF0YSIsInRpdGxlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImljb24iLCJjcmVhdGVFbGVtZW50IiwiZGF0ZSIsInByb2plY3RzRGF0YSIsInRhZ3MiLCJyZXBvIiwibGl2ZSIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/data.ts\n"));

/***/ })

});