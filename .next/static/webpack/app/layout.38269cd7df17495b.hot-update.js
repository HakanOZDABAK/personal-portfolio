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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/cg */ \"(app-pages-browser)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _public_netfilms_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/netfilms.png */ \"(app-pages-browser)/./public/netfilms.png\");\n/* harmony import */ var _public_multistep_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/multistep.png */ \"(app-pages-browser)/./public/multistep.png\");\n/* harmony import */ var _public_ecommerce_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/ecommerce.png */ \"(app-pages-browser)/./public/ecommerce.png\");\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Bootcamp Education\",\n        location: \"In home\",\n        description: \"In the last year of my education, i want to learn new stuffs and i decided to start learning to React. I finished the course after 4 months of studying.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiOutlineLightBulb),\n        date: \"2023\"\n    },\n    {\n        title: \"Highschool Student\",\n        location: \"Antalya, Turkey\",\n        description: \"I graduated after 4 years of studying. I studied Electrical-Electronics Engineering.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_5__.LuGraduationCap),\n        date: \"2019-2023\"\n    },\n    {\n        title: \"Intern Engineer\",\n        location: \"Bursa, Turkey\",\n        description: \"I worked as a intern engineer for 3 months. I learned teamwork and engineering stufs.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__.CgWorkAlt),\n        date: \"2022\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Emotions Classification\",\n        description: \"In this project, i use Keras for classification of three face emonitions\",\n        tags: [\n            \"Python\",\n            \"Keras\",\n            \"Classification\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Emotions_Classification\"\n    },\n    {\n        title: \"E-Commerce App\",\n        description: \"This project is a Frontend Mentor challenge. I use ReactJS and Tailwind CSS. Also in this project, i improve my skills at responsive design.\",\n        tags: [\n            \"React\",\n            \"Next.js\",\n            \"Responsive\",\n            \"Tailwind\"\n        ],\n        imageUrl: _public_ecommerce_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        live: \"https://e-commerce-app-nine-peach.vercel.app/\",\n        repo: \"https://github.com/ersinydnn/e-commerce-app\"\n    },\n    {\n        title: \"Users and Items API Service\",\n        description: \"I designed a Back-End service for Users registration and Items add.\",\n        tags: [\n            \"Python\",\n            \"FastAPI\",\n            \"API\"\n        ],\n        repo: \"https://github.com/HakanOZDABAK/Users_Items_API\"\n    },\n    {\n        title: \"Multi-Step Form\",\n        description: \"React Hooks like useState, useEffect; i learned them in this project. Also i use Styled Components.\",\n        tags: [\n            \"React\",\n            \"React-Hooks\",\n            \"Next.js\",\n            \"Tailwind\"\n        ],\n        imageUrl: _public_multistep_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        live: \"https://react-multi-step-form-psi.vercel.app/\",\n        repo: \"https://github.com/ersinydnn/react-multi-step-form\"\n    },\n    {\n        title: \"Netfilms App\",\n        description: \"This is my biggest and fullest application. I use NextJS in this project and i learned so many this about NextJS. I understand NextJS routing system in this project. By the way this is not my app, i re-create this app.\",\n        tags: [\n            \"React\",\n            \"React-Hooks\",\n            \"Next.js\",\n            \"Styled-Components\",\n            \"Responsive\"\n        ],\n        imageUrl: _public_netfilms_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        live: \"https://netfilms-chi.vercel.app/\",\n        repo: \"https://github.com/ersinydnn/netflims-app\"\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"Tailwind\",\n    \"Python\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNNO0FBQ0c7QUFFSjtBQUVFO0FBQ0E7QUFFM0MsTUFBTU8sUUFBUTtJQUNuQjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsa0JBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1kLDBEQUFtQixDQUFDRyw4REFBa0JBO1FBQzVDYSxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNZCwwREFBbUIsQ0FBQ0UsMkRBQWVBO1FBQ3pDYyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNZCwwREFBbUIsQ0FBQ0MscURBQVNBO1FBQ25DZSxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsZUFBZTtJQUMxQjtRQUNFTixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVU7WUFBUztTQUFpQjtRQUUzQ0MsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVc7WUFBYztTQUFXO1FBQ3BERSxVQUFVZCw2REFBWUE7UUFDdEJlLE1BQU07UUFDTkYsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFVO1lBQVc7U0FBTTtRQUNsQ0MsTUFBTTtJQUNSO0lBQ0E7UUFDRVIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQWU7WUFBVztTQUFXO1FBQ3JERSxVQUFVZiw2REFBWUE7UUFDdEJnQixNQUFNO1FBQ05GLE1BQU07SUFDUjtJQUNBO1FBQ0VSLE9BQU87UUFDUEUsYUFDRTtRQUNGSyxNQUFNO1lBQ0o7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBQ0RFLFVBQVVoQiw0REFBV0E7UUFDckJpQixNQUFNO1FBQ05GLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNRyxhQUFhO0lBQ3hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZGF0YS50cz8xNmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2dXb3JrQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XHJcbmltcG9ydCB7IEx1R3JhZHVhdGlvbkNhcCB9IGZyb20gXCJyZWFjdC1pY29ucy9sdVwiO1xyXG5pbXBvcnQgeyBIaU91dGxpbmVMaWdodEJ1bGIgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHJlc3RJbWcgZnJvbSBcIkAvcHVibGljL3Jlc3Rjb3VudHJpZXMucG5nXCI7XHJcbmltcG9ydCBuZXRmaWxtc0ltZyBmcm9tIFwiQC9wdWJsaWMvbmV0ZmlsbXMucG5nXCI7XHJcbmltcG9ydCBnZXRpckltZyBmcm9tIFwiQC9wdWJsaWMvZ2V0aXIucG5nXCI7XHJcbmltcG9ydCBtdWx0aXN0ZXBJbWcgZnJvbSBcIkAvcHVibGljL211bHRpc3RlcC5wbmdcIjtcclxuaW1wb3J0IGVjb21tZXJjZUltZyBmcm9tIFwiQC9wdWJsaWMvZWNvbW1lcmNlLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSG9tZVwiLFxyXG4gICAgaGFzaDogXCIjaG9tZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBYm91dFwiLFxyXG4gICAgaGFzaDogXCIjYWJvdXRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUHJvamVjdHNcIixcclxuICAgIGhhc2g6IFwiI3Byb2plY3RzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNraWxsc1wiLFxyXG4gICAgaGFzaDogXCIjc2tpbGxzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkV4cGVyaWVuY2VcIixcclxuICAgIGhhc2g6IFwiI2V4cGVyaWVuY2VcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29udGFjdFwiLFxyXG4gICAgaGFzaDogXCIjY29udGFjdFwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXNEYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJvb3RjYW1wIEVkdWNhdGlvblwiLFxyXG4gICAgbG9jYXRpb246IFwiSW4gaG9tZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSW4gdGhlIGxhc3QgeWVhciBvZiBteSBlZHVjYXRpb24sIGkgd2FudCB0byBsZWFybiBuZXcgc3R1ZmZzIGFuZCBpIGRlY2lkZWQgdG8gc3RhcnQgbGVhcm5pbmcgdG8gUmVhY3QuIEkgZmluaXNoZWQgdGhlIGNvdXJzZSBhZnRlciA0IG1vbnRocyBvZiBzdHVkeWluZy5cIixcclxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGlPdXRsaW5lTGlnaHRCdWxiKSxcclxuICAgIGRhdGU6IFwiMjAyM1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSGlnaHNjaG9vbCBTdHVkZW50XCIsXHJcbiAgICBsb2NhdGlvbjogXCJBbnRhbHlhLCBUdXJrZXlcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgZ3JhZHVhdGVkIGFmdGVyIDQgeWVhcnMgb2Ygc3R1ZHlpbmcuIEkgc3R1ZGllZCBFbGVjdHJpY2FsLUVsZWN0cm9uaWNzIEVuZ2luZWVyaW5nLlwiLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChMdUdyYWR1YXRpb25DYXApLFxyXG4gICAgZGF0ZTogXCIyMDE5LTIwMjNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkludGVybiBFbmdpbmVlclwiLFxyXG4gICAgbG9jYXRpb246IFwiQnVyc2EsIFR1cmtleVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSSB3b3JrZWQgYXMgYSBpbnRlcm4gZW5naW5lZXIgZm9yIDMgbW9udGhzLiBJIGxlYXJuZWQgdGVhbXdvcmsgYW5kIGVuZ2luZWVyaW5nIHN0dWZzLlwiLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChDZ1dvcmtBbHQpLFxyXG4gICAgZGF0ZTogXCIyMDIyXCIsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0RhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRW1vdGlvbnMgQ2xhc3NpZmljYXRpb25cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkluIHRoaXMgcHJvamVjdCwgaSB1c2UgS2VyYXMgZm9yIGNsYXNzaWZpY2F0aW9uIG9mIHRocmVlIGZhY2UgZW1vbml0aW9uc1wiLFxyXG4gICAgdGFnczogW1wiUHl0aG9uXCIsIFwiS2VyYXNcIiwgXCJDbGFzc2lmaWNhdGlvblwiXSxcclxuXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYWthbk9aREFCQUsvRW1vdGlvbnNfQ2xhc3NpZmljYXRpb25cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkUtQ29tbWVyY2UgQXBwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGlzIHByb2plY3QgaXMgYSBGcm9udGVuZCBNZW50b3IgY2hhbGxlbmdlLiBJIHVzZSBSZWFjdEpTIGFuZCBUYWlsd2luZCBDU1MuIEFsc28gaW4gdGhpcyBwcm9qZWN0LCBpIGltcHJvdmUgbXkgc2tpbGxzIGF0IHJlc3BvbnNpdmUgZGVzaWduLlwiLFxyXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJOZXh0LmpzXCIsIFwiUmVzcG9uc2l2ZVwiLCBcIlRhaWx3aW5kXCJdLFxyXG4gICAgaW1hZ2VVcmw6IGVjb21tZXJjZUltZyxcclxuICAgIGxpdmU6IFwiaHR0cHM6Ly9lLWNvbW1lcmNlLWFwcC1uaW5lLXBlYWNoLnZlcmNlbC5hcHAvXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9lcnNpbnlkbm4vZS1jb21tZXJjZS1hcHBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlVzZXJzIGFuZCBJdGVtcyBBUEkgU2VydmljZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSSBkZXNpZ25lZCBhIEJhY2stRW5kIHNlcnZpY2UgZm9yIFVzZXJzIHJlZ2lzdHJhdGlvbiBhbmQgSXRlbXMgYWRkLlwiLFxyXG4gICAgdGFnczogW1wiUHl0aG9uXCIsIFwiRmFzdEFQSVwiLCBcIkFQSVwiXSxcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hha2FuT1pEQUJBSy9Vc2Vyc19JdGVtc19BUElcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk11bHRpLVN0ZXAgRm9ybVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUmVhY3QgSG9va3MgbGlrZSB1c2VTdGF0ZSwgdXNlRWZmZWN0OyBpIGxlYXJuZWQgdGhlbSBpbiB0aGlzIHByb2plY3QuIEFsc28gaSB1c2UgU3R5bGVkIENvbXBvbmVudHMuXCIsXHJcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIlJlYWN0LUhvb2tzXCIsIFwiTmV4dC5qc1wiLCBcIlRhaWx3aW5kXCJdLFxyXG4gICAgaW1hZ2VVcmw6IG11bHRpc3RlcEltZyxcclxuICAgIGxpdmU6IFwiaHR0cHM6Ly9yZWFjdC1tdWx0aS1zdGVwLWZvcm0tcHNpLnZlcmNlbC5hcHAvXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9lcnNpbnlkbm4vcmVhY3QtbXVsdGktc3RlcC1mb3JtXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJOZXRmaWxtcyBBcHBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgaXMgbXkgYmlnZ2VzdCBhbmQgZnVsbGVzdCBhcHBsaWNhdGlvbi4gSSB1c2UgTmV4dEpTIGluIHRoaXMgcHJvamVjdCBhbmQgaSBsZWFybmVkIHNvIG1hbnkgdGhpcyBhYm91dCBOZXh0SlMuIEkgdW5kZXJzdGFuZCBOZXh0SlMgcm91dGluZyBzeXN0ZW0gaW4gdGhpcyBwcm9qZWN0LiBCeSB0aGUgd2F5IHRoaXMgaXMgbm90IG15IGFwcCwgaSByZS1jcmVhdGUgdGhpcyBhcHAuXCIsXHJcbiAgICB0YWdzOiBbXHJcbiAgICAgIFwiUmVhY3RcIixcclxuICAgICAgXCJSZWFjdC1Ib29rc1wiLFxyXG4gICAgICBcIk5leHQuanNcIixcclxuICAgICAgXCJTdHlsZWQtQ29tcG9uZW50c1wiLFxyXG4gICAgICBcIlJlc3BvbnNpdmVcIixcclxuICAgIF0sXHJcbiAgICBpbWFnZVVybDogbmV0ZmlsbXNJbWcsXHJcbiAgICBsaXZlOiBcImh0dHBzOi8vbmV0ZmlsbXMtY2hpLnZlcmNlbC5hcHAvXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9lcnNpbnlkbm4vbmV0ZmxpbXMtYXBwXCIsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHNEYXRhID0gW1xyXG4gIFwiSFRNTFwiLFxyXG4gIFwiQ1NTXCIsXHJcbiAgXCJKYXZhU2NyaXB0XCIsXHJcbiAgXCJUeXBlU2NyaXB0XCIsXHJcbiAgXCJSZWFjdFwiLFxyXG4gIFwiTmV4dC5qc1wiLFxyXG4gIFwiTm9kZS5qc1wiLFxyXG4gIFwiR2l0XCIsXHJcbiAgXCJUYWlsd2luZFwiLFxyXG4gIFwiUHl0aG9uXCIsXHJcbl0gYXMgY29uc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNnV29ya0FsdCIsIkx1R3JhZHVhdGlvbkNhcCIsIkhpT3V0bGluZUxpZ2h0QnVsYiIsIm5ldGZpbG1zSW1nIiwibXVsdGlzdGVwSW1nIiwiZWNvbW1lcmNlSW1nIiwibGlua3MiLCJuYW1lIiwiaGFzaCIsImV4cGVyaWVuY2VzRGF0YSIsInRpdGxlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImljb24iLCJjcmVhdGVFbGVtZW50IiwiZGF0ZSIsInByb2plY3RzRGF0YSIsInRhZ3MiLCJyZXBvIiwiaW1hZ2VVcmwiLCJsaXZlIiwic2tpbGxzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/data.ts\n"));

/***/ })

});