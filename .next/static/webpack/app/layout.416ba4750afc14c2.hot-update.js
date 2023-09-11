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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/cg */ \"(app-pages-browser)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _public_restcountries_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/restcountries.png */ \"(app-pages-browser)/./public/restcountries.png\");\n/* harmony import */ var _public_netfilms_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/netfilms.png */ \"(app-pages-browser)/./public/netfilms.png\");\n/* harmony import */ var _public_getir_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/getir.png */ \"(app-pages-browser)/./public/getir.png\");\n/* harmony import */ var _public_multistep_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/multistep.png */ \"(app-pages-browser)/./public/multistep.png\");\n/* harmony import */ var _public_ecommerce_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/ecommerce.png */ \"(app-pages-browser)/./public/ecommerce.png\");\n\n\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Bootcamp Education\",\n        location: \"In home\",\n        description: \"In the last year of my education, i want to learn new stuffs and i decided to start learning to React. I finished the course after 4 months of studying.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiOutlineLightBulb),\n        date: \"2023\"\n    },\n    {\n        title: \"Highschool Student\",\n        location: \"Antalya, Turkey\",\n        description: \"I graduated after 4 years of studying. I studied Electrical-Electronics Engineering.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_7__.LuGraduationCap),\n        date: \"2019-2023\"\n    },\n    {\n        title: \"Intern Engineer\",\n        location: \"Bursa, Turkey\",\n        description: \"I worked as a intern engineer for 3 months. I learned teamwork and engineering stufs.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_8__.CgWorkAlt),\n        date: \"2022\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Emotions Classification\",\n        description: \"In this project, i use Keras for classification of three face emonitions\",\n        tags: [\n            \"Python\",\n            \"Keras\",\n            \"Classification\"\n        ],\n        imageUrl: _public_restcountries_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        repo: \"https://github.com/HakanOZDABAK/Emotions_Classification\"\n    },\n    {\n        title: \"E-Commerce App\",\n        description: \"This project is a Frontend Mentor challenge. I use ReactJS and Tailwind CSS. Also in this project, i improve my skills at responsive design.\",\n        tags: [\n            \"React\",\n            \"Next.js\",\n            \"Responsive\",\n            \"Tailwind\"\n        ],\n        imageUrl: _public_ecommerce_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        live: \"https://e-commerce-app-nine-peach.vercel.app/\",\n        repo: \"https://github.com/ersinydnn/e-commerce-app\"\n    },\n    {\n        title: \"Getir-Clone\",\n        description: \"Getir is the largest ordering compaies in Turkey. I re-create Getir's home page in this project. This is the first project that i use TailwindCSS.\",\n        tags: [\n            \"React\",\n            \"Next.js\",\n            \"Tailwind\"\n        ],\n        imageUrl: _public_getir_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        live: \"https://getir-clone-react-tailwind-delta.vercel.app/\",\n        repo: \"https://github.com/ersinydnn/getir-clone---react-tailwind\"\n    },\n    {\n        title: \"Multi-Step Form\",\n        description: \"React Hooks like useState, useEffect; i learned them in this project. Also i use Styled Components.\",\n        tags: [\n            \"React\",\n            \"React-Hooks\",\n            \"Next.js\",\n            \"Tailwind\"\n        ],\n        imageUrl: _public_multistep_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        live: \"https://react-multi-step-form-psi.vercel.app/\",\n        repo: \"https://github.com/ersinydnn/react-multi-step-form\"\n    },\n    {\n        title: \"Netfilms App\",\n        description: \"This is my biggest and fullest application. I use NextJS in this project and i learned so many this about NextJS. I understand NextJS routing system in this project. By the way this is not my app, i re-create this app.\",\n        tags: [\n            \"React\",\n            \"React-Hooks\",\n            \"Next.js\",\n            \"Styled-Components\",\n            \"Responsive\"\n        ],\n        imageUrl: _public_netfilms_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        live: \"https://netfilms-chi.vercel.app/\",\n        repo: \"https://github.com/ersinydnn/netflims-app\"\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"Tailwind\",\n    \"Python\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ007QUFDRztBQUNIO0FBQ0Q7QUFDTjtBQUNRO0FBQ0E7QUFFM0MsTUFBTVMsUUFBUTtJQUNuQjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsa0JBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1oQiwwREFBbUIsQ0FBQ0csOERBQWtCQTtRQUM1Q2UsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWhCLDBEQUFtQixDQUFDRSwyREFBZUE7UUFDekNnQixNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNaEIsMERBQW1CLENBQUNDLHFEQUFTQTtRQUNuQ2lCLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxlQUFlO0lBQzFCO1FBQ0VOLE9BQU87UUFDUEUsYUFDRTtRQUNGSyxNQUFNO1lBQUM7WUFBVTtZQUFTO1NBQWlCO1FBQzNDQyxVQUFVakIsaUVBQU9BO1FBQ2pCa0IsTUFBTTtJQUNSO0lBQ0E7UUFDRVQsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVc7WUFBYztTQUFXO1FBQ3BEQyxVQUFVYiw2REFBWUE7UUFDdEJlLE1BQU07UUFDTkQsTUFBTTtJQUNSO0lBQ0E7UUFDRVQsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVc7U0FBVztRQUN0Q0MsVUFBVWYseURBQVFBO1FBQ2xCaUIsTUFBTTtRQUNORCxNQUFNO0lBQ1I7SUFDQTtRQUNFVCxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVM7WUFBZTtZQUFXO1NBQVc7UUFDckRDLFVBQVVkLDZEQUFZQTtRQUN0QmdCLE1BQU07UUFDTkQsTUFBTTtJQUNSO0lBQ0E7UUFDRVQsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFDSjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsVUFBVWhCLDREQUFXQTtRQUNyQmtCLE1BQU07UUFDTkQsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1FLGFBQWE7SUFDeEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxDQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9kYXRhLnRzPzE2ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDZ1dvcmtBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcclxuaW1wb3J0IHsgTHVHcmFkdWF0aW9uQ2FwIH0gZnJvbSBcInJlYWN0LWljb25zL2x1XCI7XHJcbmltcG9ydCB7IEhpT3V0bGluZUxpZ2h0QnVsYiB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgcmVzdEltZyBmcm9tIFwiQC9wdWJsaWMvcmVzdGNvdW50cmllcy5wbmdcIjtcclxuaW1wb3J0IG5ldGZpbG1zSW1nIGZyb20gXCJAL3B1YmxpYy9uZXRmaWxtcy5wbmdcIjtcclxuaW1wb3J0IGdldGlySW1nIGZyb20gXCJAL3B1YmxpYy9nZXRpci5wbmdcIjtcclxuaW1wb3J0IG11bHRpc3RlcEltZyBmcm9tIFwiQC9wdWJsaWMvbXVsdGlzdGVwLnBuZ1wiO1xyXG5pbXBvcnQgZWNvbW1lcmNlSW1nIGZyb20gXCJAL3B1YmxpYy9lY29tbWVyY2UucG5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbGlua3MgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJIb21lXCIsXHJcbiAgICBoYXNoOiBcIiNob21lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkFib3V0XCIsXHJcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxyXG4gICAgaGFzaDogXCIjcHJvamVjdHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2tpbGxzXCIsXHJcbiAgICBoYXNoOiBcIiNza2lsbHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRXhwZXJpZW5jZVwiLFxyXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb250YWN0XCIsXHJcbiAgICBoYXNoOiBcIiNjb250YWN0XCIsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlc0RhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQm9vdGNhbXAgRWR1Y2F0aW9uXCIsXHJcbiAgICBsb2NhdGlvbjogXCJJbiBob21lXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJbiB0aGUgbGFzdCB5ZWFyIG9mIG15IGVkdWNhdGlvbiwgaSB3YW50IHRvIGxlYXJuIG5ldyBzdHVmZnMgYW5kIGkgZGVjaWRlZCB0byBzdGFydCBsZWFybmluZyB0byBSZWFjdC4gSSBmaW5pc2hlZCB0aGUgY291cnNlIGFmdGVyIDQgbW9udGhzIG9mIHN0dWR5aW5nLlwiLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChIaU91dGxpbmVMaWdodEJ1bGIpLFxyXG4gICAgZGF0ZTogXCIyMDIzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJIaWdoc2Nob29sIFN0dWRlbnRcIixcclxuICAgIGxvY2F0aW9uOiBcIkFudGFseWEsIFR1cmtleVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSSBncmFkdWF0ZWQgYWZ0ZXIgNCB5ZWFycyBvZiBzdHVkeWluZy4gSSBzdHVkaWVkIEVsZWN0cmljYWwtRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcuXCIsXHJcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEx1R3JhZHVhdGlvbkNhcCksXHJcbiAgICBkYXRlOiBcIjIwMTktMjAyM1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSW50ZXJuIEVuZ2luZWVyXCIsXHJcbiAgICBsb2NhdGlvbjogXCJCdXJzYSwgVHVya2V5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJIHdvcmtlZCBhcyBhIGludGVybiBlbmdpbmVlciBmb3IgMyBtb250aHMuIEkgbGVhcm5lZCB0ZWFtd29yayBhbmQgZW5naW5lZXJpbmcgc3R1ZnMuXCIsXHJcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KENnV29ya0FsdCksXHJcbiAgICBkYXRlOiBcIjIwMjJcIixcclxuICB9LFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJFbW90aW9ucyBDbGFzc2lmaWNhdGlvblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSW4gdGhpcyBwcm9qZWN0LCBpIHVzZSBLZXJhcyBmb3IgY2xhc3NpZmljYXRpb24gb2YgdGhyZWUgZmFjZSBlbW9uaXRpb25zXCIsXHJcbiAgICB0YWdzOiBbXCJQeXRob25cIiwgXCJLZXJhc1wiLCBcIkNsYXNzaWZpY2F0aW9uXCJdLFxyXG4gICAgaW1hZ2VVcmw6IHJlc3RJbWcsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYWthbk9aREFCQUsvRW1vdGlvbnNfQ2xhc3NpZmljYXRpb25cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkUtQ29tbWVyY2UgQXBwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGlzIHByb2plY3QgaXMgYSBGcm9udGVuZCBNZW50b3IgY2hhbGxlbmdlLiBJIHVzZSBSZWFjdEpTIGFuZCBUYWlsd2luZCBDU1MuIEFsc28gaW4gdGhpcyBwcm9qZWN0LCBpIGltcHJvdmUgbXkgc2tpbGxzIGF0IHJlc3BvbnNpdmUgZGVzaWduLlwiLFxyXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJOZXh0LmpzXCIsIFwiUmVzcG9uc2l2ZVwiLCBcIlRhaWx3aW5kXCJdLFxyXG4gICAgaW1hZ2VVcmw6IGVjb21tZXJjZUltZyxcclxuICAgIGxpdmU6IFwiaHR0cHM6Ly9lLWNvbW1lcmNlLWFwcC1uaW5lLXBlYWNoLnZlcmNlbC5hcHAvXCIsXHJcbiAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9lcnNpbnlkbm4vZS1jb21tZXJjZS1hcHBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdldGlyLUNsb25lXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJHZXRpciBpcyB0aGUgbGFyZ2VzdCBvcmRlcmluZyBjb21wYWllcyBpbiBUdXJrZXkuIEkgcmUtY3JlYXRlIEdldGlyJ3MgaG9tZSBwYWdlIGluIHRoaXMgcHJvamVjdC4gVGhpcyBpcyB0aGUgZmlyc3QgcHJvamVjdCB0aGF0IGkgdXNlIFRhaWx3aW5kQ1NTLlwiLFxyXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJOZXh0LmpzXCIsIFwiVGFpbHdpbmRcIl0sXHJcbiAgICBpbWFnZVVybDogZ2V0aXJJbWcsXHJcbiAgICBsaXZlOiBcImh0dHBzOi8vZ2V0aXItY2xvbmUtcmVhY3QtdGFpbHdpbmQtZGVsdGEudmVyY2VsLmFwcC9cIixcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2Vyc2lueWRubi9nZXRpci1jbG9uZS0tLXJlYWN0LXRhaWx3aW5kXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNdWx0aS1TdGVwIEZvcm1cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlJlYWN0IEhvb2tzIGxpa2UgdXNlU3RhdGUsIHVzZUVmZmVjdDsgaSBsZWFybmVkIHRoZW0gaW4gdGhpcyBwcm9qZWN0LiBBbHNvIGkgdXNlIFN0eWxlZCBDb21wb25lbnRzLlwiLFxyXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJSZWFjdC1Ib29rc1wiLCBcIk5leHQuanNcIiwgXCJUYWlsd2luZFwiXSxcclxuICAgIGltYWdlVXJsOiBtdWx0aXN0ZXBJbWcsXHJcbiAgICBsaXZlOiBcImh0dHBzOi8vcmVhY3QtbXVsdGktc3RlcC1mb3JtLXBzaS52ZXJjZWwuYXBwL1wiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vZXJzaW55ZG5uL3JlYWN0LW11bHRpLXN0ZXAtZm9ybVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTmV0ZmlsbXMgQXBwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGlzIGlzIG15IGJpZ2dlc3QgYW5kIGZ1bGxlc3QgYXBwbGljYXRpb24uIEkgdXNlIE5leHRKUyBpbiB0aGlzIHByb2plY3QgYW5kIGkgbGVhcm5lZCBzbyBtYW55IHRoaXMgYWJvdXQgTmV4dEpTLiBJIHVuZGVyc3RhbmQgTmV4dEpTIHJvdXRpbmcgc3lzdGVtIGluIHRoaXMgcHJvamVjdC4gQnkgdGhlIHdheSB0aGlzIGlzIG5vdCBteSBhcHAsIGkgcmUtY3JlYXRlIHRoaXMgYXBwLlwiLFxyXG4gICAgdGFnczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiUmVhY3QtSG9va3NcIixcclxuICAgICAgXCJOZXh0LmpzXCIsXHJcbiAgICAgIFwiU3R5bGVkLUNvbXBvbmVudHNcIixcclxuICAgICAgXCJSZXNwb25zaXZlXCIsXHJcbiAgICBdLFxyXG4gICAgaW1hZ2VVcmw6IG5ldGZpbG1zSW1nLFxyXG4gICAgbGl2ZTogXCJodHRwczovL25ldGZpbG1zLWNoaS52ZXJjZWwuYXBwL1wiLFxyXG4gICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vZXJzaW55ZG5uL25ldGZsaW1zLWFwcFwiLFxyXG4gIH0sXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzRGF0YSA9IFtcclxuICBcIkhUTUxcIixcclxuICBcIkNTU1wiLFxyXG4gIFwiSmF2YVNjcmlwdFwiLFxyXG4gIFwiVHlwZVNjcmlwdFwiLFxyXG4gIFwiUmVhY3RcIixcclxuICBcIk5leHQuanNcIixcclxuICBcIk5vZGUuanNcIixcclxuICBcIkdpdFwiLFxyXG4gIFwiVGFpbHdpbmRcIixcclxuICBcIlB5dGhvblwiLFxyXG5dIGFzIGNvbnN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDZ1dvcmtBbHQiLCJMdUdyYWR1YXRpb25DYXAiLCJIaU91dGxpbmVMaWdodEJ1bGIiLCJyZXN0SW1nIiwibmV0ZmlsbXNJbWciLCJnZXRpckltZyIsIm11bHRpc3RlcEltZyIsImVjb21tZXJjZUltZyIsImxpbmtzIiwibmFtZSIsImhhc2giLCJleHBlcmllbmNlc0RhdGEiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImRhdGUiLCJwcm9qZWN0c0RhdGEiLCJ0YWdzIiwiaW1hZ2VVcmwiLCJyZXBvIiwibGl2ZSIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/data.ts\n"));

/***/ })

});