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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/cg */ \"(app-pages-browser)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Java and React Camp\",\n        location: \"In Youtube\",\n        description: \"In the 2021, I finished nearly 30 hours Java & React camp in Youtube. It given by Engin Demiroğ. I have learned about Java Back-End development and React-Redux Front-End development\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_1__.HiOutlineLightBulb),\n        date: \"2021\"\n    },\n    {\n        title: \"Intern Engineer\",\n        location: \"Adana, Turkey\",\n        description: \"I worked as a intern engineer for 1 months. I learned how to make PLC setup and how to use PLC.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_2__.CgWorkAlt),\n        date: \"2021\"\n    },\n    {\n        title: \"Intern Engineer\",\n        location: \"Antalya, Turkey\",\n        description: \"I worked as a intern engineer for 1 months. I learned MatPlotLib and Pandas libraries in Python.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_2__.CgWorkAlt),\n        date: \"2022\"\n    },\n    {\n        title: \"Highschool Student\",\n        location: \"Antalya, Turkey\",\n        description: \"I graduated after 5(4+1 Preparatory Class) years of studying and I become second in Formal Education with 3.41 GPA. I studied Electrical-Electronics Engineering.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_3__.LuGraduationCap),\n        date: \"2018-2023\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Emotions Classification\",\n        description: \"In this project, i use Keras for classification of three face emonitions\",\n        tags: [\n            \"Python\",\n            \"Keras\",\n            \"Classification\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Emotions_Classification\"\n    },\n    {\n        title: \"E-Commerce App\",\n        description: \"Making E-Commerce Website at React with Redux and UI Libraries\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"Semantic-UI\"\n        ],\n        imgageUrl: \"publicworking_progress.png\",\n        repo: \"https://github.com/HakanOZDABAK/E-Commerce\"\n    },\n    {\n        title: \"Users and Items API Service\",\n        description: \"I designed a Back-End service for Users registration and Items add.\",\n        tags: [\n            \"Python\",\n            \"FastAPI\",\n            \"API\",\n            \"Authorization\",\n            \"Routing\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Users_Items_API\"\n    },\n    {\n        title: \"Patient Registration System\",\n        description: \"I created Patient Registration System as hospital's using\",\n        tags: [\n            \"Java\",\n            \"Java Swing\",\n            \"GUI\"\n        ],\n        live: \"https://react-multi-step-form-psi.vercel.app/\",\n        repo: \"https://github.com/HakanOZDABAK/Patient-Registration-System\"\n    },\n    {\n        title: \"Java Springboot User Candidate Database\",\n        description: \"Like my last project, I created user candidate system but at this time I developed it at Back-end side\",\n        tags: [\n            \"Java\",\n            \"SpringBoot\",\n            \"Back-End\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Java-Springboot-User-Candidate-Database\"\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Python\",\n    \"FastAPI\",\n    \"Java\",\n    \"Java Swing\",\n    \"SpringBoot\",\n    \"Redux\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNNO0FBQ0c7QUFPN0MsTUFBTUksUUFBUTtJQUNuQjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsa0JBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1YLDBEQUFtQixDQUFDRyw4REFBa0JBO1FBQzVDVSxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNWCwwREFBbUIsQ0FBQ0MscURBQVNBO1FBQ25DWSxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNWCwwREFBbUIsQ0FBQ0MscURBQVNBO1FBQ25DWSxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNWCwwREFBbUIsQ0FBQ0UsMkRBQWVBO1FBQ3pDVyxNQUFNO0lBQ1I7Q0FHRCxDQUFVO0FBRUosTUFBTUMsZUFBZTtJQUMxQjtRQUNFTixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVU7WUFBUztTQUFpQjtRQUUzQ0MsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVM7U0FBYztRQUN2Q0UsV0FBVTtRQUNWRCxNQUFNO0lBQ1I7SUFDQTtRQUNFUixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVU7WUFBVztZQUFNO1lBQWdCO1NBQVU7UUFDNURDLE1BQU07SUFDUjtJQUNBO1FBQ0VSLE9BQU87UUFDUEUsYUFDRTtRQUNGSyxNQUFNO1lBQUM7WUFBUTtZQUFhO1NBQU07UUFDbENHLE1BQU07UUFDTkYsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFDSjtZQUNBO1lBQ0E7U0FDRDtRQUNEQyxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUcsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxDQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9kYXRhLnRzPzE2ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDZ1dvcmtBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcclxuaW1wb3J0IHsgTHVHcmFkdWF0aW9uQ2FwIH0gZnJvbSBcInJlYWN0LWljb25zL2x1XCI7XHJcbmltcG9ydCB7IEhpT3V0bGluZUxpZ2h0QnVsYiB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgcmVzdEltZyBmcm9tIFwiQC9wdWJsaWMvcmVzdGNvdW50cmllcy5wbmdcIjtcclxuaW1wb3J0IG5ldGZpbG1zSW1nIGZyb20gXCJAL3B1YmxpYy9uZXRmaWxtcy5wbmdcIjtcclxuaW1wb3J0IGdldGlySW1nIGZyb20gXCJAL3B1YmxpYy9nZXRpci5wbmdcIjtcclxuaW1wb3J0IG11bHRpc3RlcEltZyBmcm9tIFwiQC9wdWJsaWMvbXVsdGlzdGVwLnBuZ1wiO1xyXG5pbXBvcnQgZWNvbW1lcmNlSW1nIGZyb20gXCJAL3B1YmxpYy9lY29tbWVyY2UucG5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3MgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJIb21lXCIsXHJcbiAgICBoYXNoOiBcIiNob21lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkFib3V0XCIsXHJcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxyXG4gICAgaGFzaDogXCIjcHJvamVjdHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2tpbGxzXCIsXHJcbiAgICBoYXNoOiBcIiNza2lsbHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRXhwZXJpZW5jZVwiLFxyXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb250YWN0XCIsXHJcbiAgICBoYXNoOiBcIiNjb250YWN0XCIsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlc0RhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSmF2YSBhbmQgUmVhY3QgQ2FtcFwiLFxyXG4gICAgbG9jYXRpb246IFwiSW4gWW91dHViZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSW4gdGhlIDIwMjEsIEkgZmluaXNoZWQgbmVhcmx5IDMwIGhvdXJzIEphdmEgJiBSZWFjdCBjYW1wIGluIFlvdXR1YmUuIEl0IGdpdmVuIGJ5IEVuZ2luIERlbWlyb8SfLiBJIGhhdmUgbGVhcm5lZCBhYm91dCBKYXZhIEJhY2stRW5kIGRldmVsb3BtZW50IGFuZCBSZWFjdC1SZWR1eCBGcm9udC1FbmQgZGV2ZWxvcG1lbnRcIixcclxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGlPdXRsaW5lTGlnaHRCdWxiKSxcclxuICAgIGRhdGU6IFwiMjAyMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSW50ZXJuIEVuZ2luZWVyXCIsXHJcbiAgICBsb2NhdGlvbjogXCJBZGFuYSwgVHVya2V5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJIHdvcmtlZCBhcyBhIGludGVybiBlbmdpbmVlciBmb3IgMSBtb250aHMuIEkgbGVhcm5lZCBob3cgdG8gbWFrZSBQTEMgc2V0dXAgYW5kIGhvdyB0byB1c2UgUExDLlwiLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChDZ1dvcmtBbHQpLFxyXG4gICAgZGF0ZTogXCIyMDIxXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJJbnRlcm4gRW5naW5lZXJcIixcclxuICAgIGxvY2F0aW9uOiBcIkFudGFseWEsIFR1cmtleVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSSB3b3JrZWQgYXMgYSBpbnRlcm4gZW5naW5lZXIgZm9yIDEgbW9udGhzLiBJIGxlYXJuZWQgTWF0UGxvdExpYiBhbmQgUGFuZGFzIGxpYnJhcmllcyBpbiBQeXRob24uXCIsXHJcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KENnV29ya0FsdCksXHJcbiAgICBkYXRlOiBcIjIwMjJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkhpZ2hzY2hvb2wgU3R1ZGVudFwiLFxyXG4gICAgbG9jYXRpb246IFwiQW50YWx5YSwgVHVya2V5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJIGdyYWR1YXRlZCBhZnRlciA1KDQrMSBQcmVwYXJhdG9yeSBDbGFzcykgeWVhcnMgb2Ygc3R1ZHlpbmcgYW5kIEkgYmVjb21lIHNlY29uZCBpbiBGb3JtYWwgRWR1Y2F0aW9uIHdpdGggMy40MSBHUEEuIEkgc3R1ZGllZCBFbGVjdHJpY2FsLUVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nLlwiLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChMdUdyYWR1YXRpb25DYXApLFxyXG4gICAgZGF0ZTogXCIyMDE4LTIwMjNcIixcclxuICB9LFxyXG5cclxuXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHNEYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkVtb3Rpb25zIENsYXNzaWZpY2F0aW9uXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJbiB0aGlzIHByb2plY3QsIGkgdXNlIEtlcmFzIGZvciBjbGFzc2lmaWNhdGlvbiBvZiB0aHJlZSBmYWNlIGVtb25pdGlvbnNcIixcclxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcIktlcmFzXCIsIFwiQ2xhc3NpZmljYXRpb25cIl0sXHJcblxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vSGFrYW5PWkRBQkFLL0Vtb3Rpb25zX0NsYXNzaWZpY2F0aW9uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJFLUNvbW1lcmNlIEFwcFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTWFraW5nIEUtQ29tbWVyY2UgV2Vic2l0ZSBhdCBSZWFjdCB3aXRoIFJlZHV4IGFuZCBVSSBMaWJyYXJpZXNcIixcclxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJTZW1hbnRpYy1VSVwiXSxcclxuICAgIGltZ2FnZVVybDpcInB1YmxpY1xcd29ya2luZ19wcm9ncmVzcy5wbmdcIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hha2FuT1pEQUJBSy9FLUNvbW1lcmNlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJVc2VycyBhbmQgSXRlbXMgQVBJIFNlcnZpY2VcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgZGVzaWduZWQgYSBCYWNrLUVuZCBzZXJ2aWNlIGZvciBVc2VycyByZWdpc3RyYXRpb24gYW5kIEl0ZW1zIGFkZC5cIixcclxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcIkZhc3RBUElcIiwgXCJBUElcIixcIkF1dGhvcml6YXRpb25cIixcIlJvdXRpbmdcIl0sXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYWthbk9aREFCQUsvVXNlcnNfSXRlbXNfQVBJXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQYXRpZW50IFJlZ2lzdHJhdGlvbiBTeXN0ZW1cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgY3JlYXRlZCBQYXRpZW50IFJlZ2lzdHJhdGlvbiBTeXN0ZW0gYXMgaG9zcGl0YWwncyB1c2luZ1wiLFxyXG4gICAgdGFnczogW1wiSmF2YVwiLCBcIkphdmEgU3dpbmdcIixcIkdVSVwiXSxcclxuICAgIGxpdmU6IFwiaHR0cHM6Ly9yZWFjdC1tdWx0aS1zdGVwLWZvcm0tcHNpLnZlcmNlbC5hcHAvXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYWthbk9aREFCQUsvUGF0aWVudC1SZWdpc3RyYXRpb24tU3lzdGVtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJKYXZhIFNwcmluZ2Jvb3QgVXNlciBDYW5kaWRhdGUgRGF0YWJhc2VcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxpa2UgbXkgbGFzdCBwcm9qZWN0LCBJIGNyZWF0ZWQgdXNlciBjYW5kaWRhdGUgc3lzdGVtIGJ1dCBhdCB0aGlzIHRpbWUgSSBkZXZlbG9wZWQgaXQgYXQgQmFjay1lbmQgc2lkZVwiLFxyXG4gICAgdGFnczogW1xyXG4gICAgICBcIkphdmFcIixcclxuICAgICAgXCJTcHJpbmdCb290XCIsXHJcbiAgICAgIFwiQmFjay1FbmRcIlxyXG4gICAgXSxcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hha2FuT1pEQUJBSy9KYXZhLVNwcmluZ2Jvb3QtVXNlci1DYW5kaWRhdGUtRGF0YWJhc2VcIixcclxuICB9LFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNraWxsc0RhdGEgPSBbXHJcbiAgXCJIVE1MXCIsXHJcbiAgXCJDU1NcIixcclxuICBcIkphdmFTY3JpcHRcIixcclxuICBcIlR5cGVTY3JpcHRcIixcclxuICBcIlJlYWN0XCIsXHJcbiAgXCJOZXh0LmpzXCIsXHJcbiAgXCJQeXRob25cIixcclxuICBcIkZhc3RBUElcIixcclxuICBcIkphdmFcIixcclxuICBcIkphdmEgU3dpbmdcIixcclxuICBcIlNwcmluZ0Jvb3RcIixcclxuICBcIlJlZHV4XCIsXHJcbl0gYXMgY29uc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNnV29ya0FsdCIsIkx1R3JhZHVhdGlvbkNhcCIsIkhpT3V0bGluZUxpZ2h0QnVsYiIsImxpbmtzIiwibmFtZSIsImhhc2giLCJleHBlcmllbmNlc0RhdGEiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImRhdGUiLCJwcm9qZWN0c0RhdGEiLCJ0YWdzIiwicmVwbyIsImltZ2FnZVVybCIsImxpdmUiLCJza2lsbHNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/data.ts\n"));

/***/ })

});