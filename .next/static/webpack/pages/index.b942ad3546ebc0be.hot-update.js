/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./pages/index.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./pages/index.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Font face for ColfaxAI */\\n@font-face {\\n  font-family: \\\"ColfaxAI\\\";\\n  src:\\n    url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff2) format(\\\"woff2\\\"),\\n    url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff) format(\\\"woff\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n\\n@font-face {\\n  font-family: \\\"ColfaxAI\\\";\\n  src:\\n    url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff2) format(\\\"woff2\\\"),\\n    url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff) format(\\\"woff\\\");\\n  font-weight: bold;\\n  font-style: normal;\\n}\\n\\n/* Global styles */\\n\\n.index_heading1__J8_Cn {\\n  font-size: 2.5rem; /* Larger text for prominence */\\n  text-align: center;\\n  margin: 20px 0;\\n  font-weight: bold;\\n  color: #202123;\\n  text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1); /* Add text shadow */\\n}\\n\\n/* Chat container */\\n.index_chatContainer__FZ4yR {\\n  max-width: 600px;\\n  width: 90%;\\n  margin: 20px auto;\\n  padding: 20px;\\n  border-radius: 15px; /* Rounded corners */\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Floating effect */\\n  background-color: #ffffff;\\n  overflow-y: auto;\\n  max-height: 70vh;\\n}\\n\\n.index_userMessage__FICEZ,\\n.index_assistantMessage__PdOKQ {\\n  padding: 12px 16px;\\n  margin-bottom: 12px;\\n  border-radius: 10px;\\n  word-wrap: break-word;\\n  font-size: 14px;\\n  line-height: 1.5;\\n  animation: index_fadeIn__mpoTp 0.3s ease; /* Fade-in animation for messages */\\n}\\n\\n@keyframes index_fadeIn__mpoTp {\\n  from {\\n    opacity: 0;\\n    transform: translateY(10px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n}\\n\\n.index_userMessage__FICEZ {\\n  align-self: flex-end;\\n  background-color: #daf8e3;\\n  box-shadow: 0 2px 6px rgba(16, 163, 127, 0.3); /* Add shadow for depth */\\n}\\n\\n.index_assistantMessage__PdOKQ {\\n  align-self: flex-start;\\n  background-color: #f1f1f1;\\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */\\n}\\n\\n/* Buttons container */\\n/* Buttons Container */\\n/* Buttons Container */\\n.index_verticalButtonsContainer__XO_nD {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  display: flex;\\n  flex-direction: column; /* Stack buttons vertically */\\n  align-items: center;\\n  padding: 10px 0;\\n  background-color: #ffffff;\\n  border-top: 1px solid #eaeaea;\\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1); /* Light shadow for buttons container */\\n  z-index: 10; /* Ensure buttons stay on top of other content */\\n}\\n\\n/* General Button Style */\\n.index_button__w0Hpc {\\n  width: 90%; /* Buttons take up most of the container width */\\n  max-width: 280px; /* Set a max width for larger screens */\\n  padding: 12px 16px;\\n  font-size: 16px;\\n  font-weight: bold;\\n  text-align: center;\\n  color: #fff;\\n  border: none;\\n  border-radius: 20px; /* Smooth rounded corners */\\n  cursor: pointer;\\n  margin-bottom: 8px; /* Add consistent spacing between buttons */\\n  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Smooth hover effects */\\n}\\n\\n/* Complexity Buttons */\\n.index_complexityButton__1QG4F {\\n  background: linear-gradient(to right, #10a37f, #0d8c6e); /* Green gradient */\\n  box-shadow: 0 4px 8px rgba(16, 163, 127, 0.2); /* Subtle shadow */\\n}\\n\\n.index_complexityButton__1QG4F:hover {\\n  transform: scale(1.05); /* Slightly enlarge on hover */\\n  box-shadow: 0 6px 12px rgba(16, 163, 127, 0.3); /* Enhance shadow on hover */\\n}\\n\\n/* Clear Button */\\n.index_clearButton__IaYf0 {\\n  background: linear-gradient(to right, #f44336, #e53935); /* Red gradient */\\n  box-shadow: 0 4px 8px rgba(244, 67, 54, 0.2); /* Subtle shadow */\\n}\\n\\n.index_clearButton__IaYf0:hover {\\n  transform: scale(1.05); /* Slightly enlarge on hover */\\n  box-shadow: 0 6px 12px rgba(244, 67, 54, 0.3); /* Enhance shadow on hover */\\n}\\n\\n/* Chat Container */\\n.index_chatContainer__FZ4yR {\\n  max-width: 600px;\\n  width: 90%;\\n  margin: 20px auto;\\n  padding: 20px;\\n  border-radius: 15px; /* Rounded corners */\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Floating effect */\\n  background-color: #ffffff;\\n  overflow-y: auto;\\n  max-height: calc(100vh - 220px); /* Adjust height to accommodate buttons */\\n  padding-bottom: 120px; /* Add padding to prevent content from being hidden */\\n}\\n\\n/* Responsive Adjustments */\\n@media (max-width: 768px) {\\n  .index_button__w0Hpc {\\n    padding: 10px 14px; /* Reduce padding for mobile */\\n    font-size: 14px; /* Smaller font size for mobile */\\n  }\\n\\n  .index_verticalButtonsContainer__XO_nD {\\n    padding: 8px 0; /* Adjust padding for smaller screens */\\n  }\\n\\n  .index_chatContainer__FZ4yR {\\n    max-height: calc(100vh - 160px); /* Reduce chat container height to avoid overlap */\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://pages/index.module.css\"],\"names\":[],\"mappings\":\"AAAA,2BAA2B;AAC3B;EACE,uBAAuB;EACvB;;6EAE2E;EAC3E,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB;;0EAEwE;EACxE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,kBAAkB;;AAElB;EACE,iBAAiB,EAAE,+BAA+B;EAClD,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,cAAc;EACd,2CAA2C,EAAE,oBAAoB;AACnE;;AAEA,mBAAmB;AACnB;EACE,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,mBAAmB,EAAE,oBAAoB;EACzC,yCAAyC,EAAE,oBAAoB;EAC/D,yBAAyB;EACzB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,wCAA2B,EAAE,mCAAmC;AAClE;;AAEA;EACE;IACE,UAAU;IACV,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,6CAA6C,EAAE,yBAAyB;AAC1E;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,wCAAwC,EAAE,kBAAkB;AAC9D;;AAEA,sBAAsB;AACtB,sBAAsB;AACtB,sBAAsB;AACtB;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;EACb,sBAAsB,EAAE,6BAA6B;EACrD,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,6BAA6B;EAC7B,yCAAyC,EAAE,uCAAuC;EAClF,WAAW,EAAE,gDAAgD;AAC/D;;AAEA,yBAAyB;AACzB;EACE,UAAU,EAAE,gDAAgD;EAC5D,gBAAgB,EAAE,uCAAuC;EACzD,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mBAAmB,EAAE,2BAA2B;EAChD,eAAe;EACf,kBAAkB,EAAE,2CAA2C;EAC/D,qDAAqD,EAAE,yBAAyB;AAClF;;AAEA,uBAAuB;AACvB;EACE,uDAAuD,EAAE,mBAAmB;EAC5E,6CAA6C,EAAE,kBAAkB;AACnE;;AAEA;EACE,sBAAsB,EAAE,8BAA8B;EACtD,8CAA8C,EAAE,4BAA4B;AAC9E;;AAEA,iBAAiB;AACjB;EACE,uDAAuD,EAAE,iBAAiB;EAC1E,4CAA4C,EAAE,kBAAkB;AAClE;;AAEA;EACE,sBAAsB,EAAE,8BAA8B;EACtD,6CAA6C,EAAE,4BAA4B;AAC7E;;AAEA,mBAAmB;AACnB;EACE,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,mBAAmB,EAAE,oBAAoB;EACzC,yCAAyC,EAAE,oBAAoB;EAC/D,yBAAyB;EACzB,gBAAgB;EAChB,+BAA+B,EAAE,yCAAyC;EAC1E,qBAAqB,EAAE,qDAAqD;AAC9E;;AAEA,2BAA2B;AAC3B;EACE;IACE,kBAAkB,EAAE,8BAA8B;IAClD,eAAe,EAAE,iCAAiC;EACpD;;EAEA;IACE,cAAc,EAAE,uCAAuC;EACzD;;EAEA;IACE,+BAA+B,EAAE,kDAAkD;EACrF;AACF\",\"sourcesContent\":[\"/* Font face for ColfaxAI */\\n@font-face {\\n  font-family: \\\"ColfaxAI\\\";\\n  src:\\n    url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff2) format(\\\"woff2\\\"),\\n    url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff) format(\\\"woff\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n\\n@font-face {\\n  font-family: \\\"ColfaxAI\\\";\\n  src:\\n    url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff2) format(\\\"woff2\\\"),\\n    url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff) format(\\\"woff\\\");\\n  font-weight: bold;\\n  font-style: normal;\\n}\\n\\n/* Global styles */\\n\\n.heading1 {\\n  font-size: 2.5rem; /* Larger text for prominence */\\n  text-align: center;\\n  margin: 20px 0;\\n  font-weight: bold;\\n  color: #202123;\\n  text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1); /* Add text shadow */\\n}\\n\\n/* Chat container */\\n.chatContainer {\\n  max-width: 600px;\\n  width: 90%;\\n  margin: 20px auto;\\n  padding: 20px;\\n  border-radius: 15px; /* Rounded corners */\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Floating effect */\\n  background-color: #ffffff;\\n  overflow-y: auto;\\n  max-height: 70vh;\\n}\\n\\n.userMessage,\\n.assistantMessage {\\n  padding: 12px 16px;\\n  margin-bottom: 12px;\\n  border-radius: 10px;\\n  word-wrap: break-word;\\n  font-size: 14px;\\n  line-height: 1.5;\\n  animation: fadeIn 0.3s ease; /* Fade-in animation for messages */\\n}\\n\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n    transform: translateY(10px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n}\\n\\n.userMessage {\\n  align-self: flex-end;\\n  background-color: #daf8e3;\\n  box-shadow: 0 2px 6px rgba(16, 163, 127, 0.3); /* Add shadow for depth */\\n}\\n\\n.assistantMessage {\\n  align-self: flex-start;\\n  background-color: #f1f1f1;\\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */\\n}\\n\\n/* Buttons container */\\n/* Buttons Container */\\n/* Buttons Container */\\n.verticalButtonsContainer {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  display: flex;\\n  flex-direction: column; /* Stack buttons vertically */\\n  align-items: center;\\n  padding: 10px 0;\\n  background-color: #ffffff;\\n  border-top: 1px solid #eaeaea;\\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1); /* Light shadow for buttons container */\\n  z-index: 10; /* Ensure buttons stay on top of other content */\\n}\\n\\n/* General Button Style */\\n.button {\\n  width: 90%; /* Buttons take up most of the container width */\\n  max-width: 280px; /* Set a max width for larger screens */\\n  padding: 12px 16px;\\n  font-size: 16px;\\n  font-weight: bold;\\n  text-align: center;\\n  color: #fff;\\n  border: none;\\n  border-radius: 20px; /* Smooth rounded corners */\\n  cursor: pointer;\\n  margin-bottom: 8px; /* Add consistent spacing between buttons */\\n  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Smooth hover effects */\\n}\\n\\n/* Complexity Buttons */\\n.complexityButton {\\n  background: linear-gradient(to right, #10a37f, #0d8c6e); /* Green gradient */\\n  box-shadow: 0 4px 8px rgba(16, 163, 127, 0.2); /* Subtle shadow */\\n}\\n\\n.complexityButton:hover {\\n  transform: scale(1.05); /* Slightly enlarge on hover */\\n  box-shadow: 0 6px 12px rgba(16, 163, 127, 0.3); /* Enhance shadow on hover */\\n}\\n\\n/* Clear Button */\\n.clearButton {\\n  background: linear-gradient(to right, #f44336, #e53935); /* Red gradient */\\n  box-shadow: 0 4px 8px rgba(244, 67, 54, 0.2); /* Subtle shadow */\\n}\\n\\n.clearButton:hover {\\n  transform: scale(1.05); /* Slightly enlarge on hover */\\n  box-shadow: 0 6px 12px rgba(244, 67, 54, 0.3); /* Enhance shadow on hover */\\n}\\n\\n/* Chat Container */\\n.chatContainer {\\n  max-width: 600px;\\n  width: 90%;\\n  margin: 20px auto;\\n  padding: 20px;\\n  border-radius: 15px; /* Rounded corners */\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Floating effect */\\n  background-color: #ffffff;\\n  overflow-y: auto;\\n  max-height: calc(100vh - 220px); /* Adjust height to accommodate buttons */\\n  padding-bottom: 120px; /* Add padding to prevent content from being hidden */\\n}\\n\\n/* Responsive Adjustments */\\n@media (max-width: 768px) {\\n  .button {\\n    padding: 10px 14px; /* Reduce padding for mobile */\\n    font-size: 14px; /* Smaller font size for mobile */\\n  }\\n\\n  .verticalButtonsContainer {\\n    padding: 8px 0; /* Adjust padding for smaller screens */\\n  }\\n\\n  .chatContainer {\\n    max-height: calc(100vh - 160px); /* Reduce chat container height to avoid overlap */\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"heading1\": \"index_heading1__J8_Cn\",\n\t\"chatContainer\": \"index_chatContainer__FZ4yR\",\n\t\"userMessage\": \"index_userMessage__FICEZ\",\n\t\"assistantMessage\": \"index_assistantMessage__PdOKQ\",\n\t\"fadeIn\": \"index_fadeIn__mpoTp\",\n\t\"verticalButtonsContainer\": \"index_verticalButtonsContainer__XO_nD\",\n\t\"button\": \"index_button__w0Hpc\",\n\t\"complexityButton\": \"index_complexityButton__1QG4F\",\n\t\"clearButton\": \"index_clearButton__IaYf0\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vcGFnZXMvaW5kZXgubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0Esb0ZBQW9GLDhCQUE4Qiw4S0FBOEssd0JBQXdCLHVCQUF1QixHQUFHLGdCQUFnQiw4QkFBOEIsd0tBQXdLLHNCQUFzQix1QkFBdUIsR0FBRyxtREFBbUQsdUJBQXVCLHVEQUF1RCxtQkFBbUIsc0JBQXNCLG1CQUFtQixpREFBaUQsd0JBQXdCLHVEQUF1RCxxQkFBcUIsZUFBZSxzQkFBc0Isa0JBQWtCLHlCQUF5QixvRUFBb0UsbURBQW1ELHFCQUFxQixxQkFBcUIsR0FBRyxnRUFBZ0UsdUJBQXVCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLG9CQUFvQixxQkFBcUIsOENBQThDLHVDQUF1QyxvQ0FBb0MsVUFBVSxpQkFBaUIsa0NBQWtDLEtBQUssUUFBUSxpQkFBaUIsK0JBQStCLEtBQUssR0FBRywrQkFBK0IseUJBQXlCLDhCQUE4QixtREFBbUQsNkJBQTZCLG9DQUFvQywyQkFBMkIsOEJBQThCLDhDQUE4QyxzQkFBc0IsdUhBQXVILG9CQUFvQixjQUFjLFlBQVksYUFBYSxrQkFBa0IsNEJBQTRCLHNEQUFzRCxvQkFBb0IsOEJBQThCLGtDQUFrQywrQ0FBK0MseURBQXlELG9EQUFvRCxzREFBc0QsZ0JBQWdCLHVFQUF1RSwrREFBK0Qsb0JBQW9CLHNCQUFzQix1QkFBdUIsZ0JBQWdCLGlCQUFpQix5QkFBeUIsZ0RBQWdE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QWtCLHlCQUF5QixvRUFBb0UsbURBQW1ELHFCQUFxQixxQ0FBcUMscUVBQXFFLHlEQUF5RCw2REFBNkQsYUFBYSwwQkFBMEIsc0RBQXNELHVDQUF1QyxpQ0FBaUMsc0JBQXNCLDZDQUE2QyxzQkFBc0IsdUNBQXVDLHdEQUF3RCxHQUFHLG1CQUFtQjtBQUNuelY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgubW9kdWxlLmNzcz8yOWY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGb250IGZhY2UgZm9yIENvbGZheEFJICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNvbGZheEFJXFxcIjtcXG4gIHNyYzpcXG4gICAgdXJsKGh0dHBzOi8vY2RuLm9wZW5haS5jb20vQVBJL2ZvbnRzL0NvbGZheEFJUmVndWxhci53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoaHR0cHM6Ly9jZG4ub3BlbmFpLmNvbS9BUEkvZm9udHMvQ29sZmF4QUlSZWd1bGFyLndvZmYpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNvbGZheEFJXFxcIjtcXG4gIHNyYzpcXG4gICAgdXJsKGh0dHBzOi8vY2RuLm9wZW5haS5jb20vQVBJL2ZvbnRzL0NvbGZheEFJQm9sZC53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoaHR0cHM6Ly9jZG4ub3BlbmFpLmNvbS9BUEkvZm9udHMvQ29sZmF4QUlCb2xkLndvZmYpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5cXG4uaW5kZXhfaGVhZGluZzFfX0o4X0NuIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtOyAvKiBMYXJnZXIgdGV4dCBmb3IgcHJvbWluZW5jZSAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMjAyMTIzO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogQWRkIHRleHQgc2hhZG93ICovXFxufVxcblxcbi8qIENoYXQgY29udGFpbmVyICovXFxuLmluZGV4X2NoYXRDb250YWluZXJfX0ZaNHlSIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXFxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogRmxvYXRpbmcgZWZmZWN0ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi5pbmRleF91c2VyTWVzc2FnZV9fRklDRVosXFxuLmluZGV4X2Fzc2lzdGFudE1lc3NhZ2VfX1BkT0tRIHtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGFuaW1hdGlvbjogaW5kZXhfZmFkZUluX19tcG9UcCAwLjNzIGVhc2U7IC8qIEZhZGUtaW4gYW5pbWF0aW9uIGZvciBtZXNzYWdlcyAqL1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGluZGV4X2ZhZGVJbl9fbXBvVHAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4uaW5kZXhfdXNlck1lc3NhZ2VfX0ZJQ0VaIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZjhlMztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDE2LCAxNjMsIDEyNywgMC4zKTsgLyogQWRkIHNoYWRvdyBmb3IgZGVwdGggKi9cXG59XFxuXFxuLmluZGV4X2Fzc2lzdGFudE1lc3NhZ2VfX1BkT0tRIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogU3VidGxlIHNoYWRvdyAqL1xcbn1cXG5cXG4vKiBCdXR0b25zIGNvbnRhaW5lciAqL1xcbi8qIEJ1dHRvbnMgQ29udGFpbmVyICovXFxuLyogQnV0dG9ucyBDb250YWluZXIgKi9cXG4uaW5kZXhfdmVydGljYWxCdXR0b25zQ29udGFpbmVyX19YT19uRCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgYnV0dG9ucyB2ZXJ0aWNhbGx5ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAgYm94LXNoYWRvdzogMCAtMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIExpZ2h0IHNoYWRvdyBmb3IgYnV0dG9ucyBjb250YWluZXIgKi9cXG4gIHotaW5kZXg6IDEwOyAvKiBFbnN1cmUgYnV0dG9ucyBzdGF5IG9uIHRvcCBvZiBvdGhlciBjb250ZW50ICovXFxufVxcblxcbi8qIEdlbmVyYWwgQnV0dG9uIFN0eWxlICovXFxuLmluZGV4X2J1dHRvbl9fdzBIcGMge1xcbiAgd2lkdGg6IDkwJTsgLyogQnV0dG9ucyB0YWtlIHVwIG1vc3Qgb2YgdGhlIGNvbnRhaW5lciB3aWR0aCAqL1xcbiAgbWF4LXdpZHRoOiAyODBweDsgLyogU2V0IGEgbWF4IHdpZHRoIGZvciBsYXJnZXIgc2NyZWVucyAqL1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IC8qIFNtb290aCByb3VuZGVkIGNvcm5lcnMgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgLyogQWRkIGNvbnNpc3RlbnQgc3BhY2luZyBiZXR3ZWVuIGJ1dHRvbnMgKi9cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlOyAvKiBTbW9vdGggaG92ZXIgZWZmZWN0cyAqL1xcbn1cXG5cXG4vKiBDb21wbGV4aXR5IEJ1dHRvbnMgKi9cXG4uaW5kZXhfY29tcGxleGl0eUJ1dHRvbl9fMVFHNEYge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTBhMzdmLCAjMGQ4YzZlKTsgLyogR3JlZW4gZ3JhZGllbnQgKi9cXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDE2LCAxNjMsIDEyNywgMC4yKTsgLyogU3VidGxlIHNoYWRvdyAqL1xcbn1cXG5cXG4uaW5kZXhfY29tcGxleGl0eUJ1dHRvbl9fMVFHNEY6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogU2xpZ2h0bHkgZW5sYXJnZSBvbiBob3ZlciAqL1xcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDE2LCAxNjMsIDEyNywgMC4zKTsgLyogRW5oYW5jZSBzaGFkb3cgb24gaG92ZXIgKi9cXG59XFxuXFxuLyogQ2xlYXIgQnV0dG9uICovXFxuLmluZGV4X2NsZWFyQnV0dG9uX19JYVlmMCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNDQzMzYsICNlNTM5MzUpOyAvKiBSZWQgZ3JhZGllbnQgKi9cXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpOyAvKiBTdWJ0bGUgc2hhZG93ICovXFxufVxcblxcbi5pbmRleF9jbGVhckJ1dHRvbl9fSWFZZjA6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogU2xpZ2h0bHkgZW5sYXJnZSBvbiBob3ZlciAqL1xcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjMpOyAvKiBFbmhhbmNlIHNoYWRvdyBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBDaGF0IENvbnRhaW5lciAqL1xcbi5pbmRleF9jaGF0Q29udGFpbmVyX19GWjR5UiB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEZsb2F0aW5nIGVmZmVjdCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjIwcHgpOyAvKiBBZGp1c3QgaGVpZ2h0IHRvIGFjY29tbW9kYXRlIGJ1dHRvbnMgKi9cXG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDsgLyogQWRkIHBhZGRpbmcgdG8gcHJldmVudCBjb250ZW50IGZyb20gYmVpbmcgaGlkZGVuICovXFxufVxcblxcbi8qIFJlc3BvbnNpdmUgQWRqdXN0bWVudHMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5pbmRleF9idXR0b25fX3cwSHBjIHtcXG4gICAgcGFkZGluZzogMTBweCAxNHB4OyAvKiBSZWR1Y2UgcGFkZGluZyBmb3IgbW9iaWxlICovXFxuICAgIGZvbnQtc2l6ZTogMTRweDsgLyogU21hbGxlciBmb250IHNpemUgZm9yIG1vYmlsZSAqL1xcbiAgfVxcblxcbiAgLmluZGV4X3ZlcnRpY2FsQnV0dG9uc0NvbnRhaW5lcl9fWE9fbkQge1xcbiAgICBwYWRkaW5nOiA4cHggMDsgLyogQWRqdXN0IHBhZGRpbmcgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgfVxcblxcbiAgLmluZGV4X2NoYXRDb250YWluZXJfX0ZaNHlSIHtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTsgLyogUmVkdWNlIGNoYXQgY29udGFpbmVyIGhlaWdodCB0byBhdm9pZCBvdmVybGFwICovXFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9pbmRleC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtFQUN2Qjs7NkVBRTJFO0VBQzNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkI7OzBFQUV3RTtFQUN4RSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxpQkFBaUIsRUFBRSwrQkFBK0I7RUFDbEQsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLDJDQUEyQyxFQUFFLG9CQUFvQjtBQUNuRTs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUUsb0JBQW9CO0VBQ3pDLHlDQUF5QyxFQUFFLG9CQUFvQjtFQUMvRCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3Q0FBMkIsRUFBRSxtQ0FBbUM7QUFDbEU7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsNkNBQTZDLEVBQUUseUJBQXlCO0FBQzFFOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix3Q0FBd0MsRUFBRSxrQkFBa0I7QUFDOUQ7O0FBRUEsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEI7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLHNCQUFzQixFQUFFLDZCQUE2QjtFQUNyRCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IseUNBQXlDLEVBQUUsdUNBQXVDO0VBQ2xGLFdBQVcsRUFBRSxnREFBZ0Q7QUFDL0Q7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsVUFBVSxFQUFFLGdEQUFnRDtFQUM1RCxnQkFBZ0IsRUFBRSx1Q0FBdUM7RUFDekQsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUUsMkJBQTJCO0VBQ2hELGVBQWU7RUFDZixrQkFBa0IsRUFBRSwyQ0FBMkM7RUFDL0QscURBQXFELEVBQUUseUJBQXlCO0FBQ2xGOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLHVEQUF1RCxFQUFFLG1CQUFtQjtFQUM1RSw2Q0FBNkMsRUFBRSxrQkFBa0I7QUFDbkU7O0FBRUE7RUFDRSxzQkFBc0IsRUFBRSw4QkFBOEI7RUFDdEQsOENBQThDLEVBQUUsNEJBQTRCO0FBQzlFOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHVEQUF1RCxFQUFFLGlCQUFpQjtFQUMxRSw0Q0FBNEMsRUFBRSxrQkFBa0I7QUFDbEU7O0FBRUE7RUFDRSxzQkFBc0IsRUFBRSw4QkFBOEI7RUFDdEQsNkNBQTZDLEVBQUUsNEJBQTRCO0FBQzdFOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUIsRUFBRSxvQkFBb0I7RUFDekMseUNBQXlDLEVBQUUsb0JBQW9CO0VBQy9ELHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsK0JBQStCLEVBQUUseUNBQXlDO0VBQzFFLHFCQUFxQixFQUFFLHFEQUFxRDtBQUM5RTs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGtCQUFrQixFQUFFLDhCQUE4QjtJQUNsRCxlQUFlLEVBQUUsaUNBQWlDO0VBQ3BEOztFQUVBO0lBQ0UsY0FBYyxFQUFFLHVDQUF1QztFQUN6RDs7RUFFQTtJQUNFLCtCQUErQixFQUFFLGtEQUFrRDtFQUNyRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZvbnQgZmFjZSBmb3IgQ29sZmF4QUkgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29sZmF4QUlcXFwiO1xcbiAgc3JjOlxcbiAgICB1cmwoaHR0cHM6Ly9jZG4ub3BlbmFpLmNvbS9BUEkvZm9udHMvQ29sZmF4QUlSZWd1bGFyLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChodHRwczovL2Nkbi5vcGVuYWkuY29tL0FQSS9mb250cy9Db2xmYXhBSVJlZ3VsYXIud29mZikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29sZmF4QUlcXFwiO1xcbiAgc3JjOlxcbiAgICB1cmwoaHR0cHM6Ly9jZG4ub3BlbmFpLmNvbS9BUEkvZm9udHMvQ29sZmF4QUlCb2xkLndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChodHRwczovL2Nkbi5vcGVuYWkuY29tL0FQSS9mb250cy9Db2xmYXhBSUJvbGQud29mZikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcblxcbi5oZWFkaW5nMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTsgLyogTGFyZ2VyIHRleHQgZm9yIHByb21pbmVuY2UgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzIwMjEyMztcXG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEFkZCB0ZXh0IHNoYWRvdyAqL1xcbn1cXG5cXG4vKiBDaGF0IGNvbnRhaW5lciAqL1xcbi5jaGF0Q29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXFxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogRmxvYXRpbmcgZWZmZWN0ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcblxcbi51c2VyTWVzc2FnZSxcXG4uYXNzaXN0YW50TWVzc2FnZSB7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7IC8qIEZhZGUtaW4gYW5pbWF0aW9uIGZvciBtZXNzYWdlcyAqL1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcblxcbi51c2VyTWVzc2FnZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWY4ZTM7XFxuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgxNiwgMTYzLCAxMjcsIDAuMyk7IC8qIEFkZCBzaGFkb3cgZm9yIGRlcHRoICovXFxufVxcblxcbi5hc3Npc3RhbnRNZXNzYWdlIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogU3VidGxlIHNoYWRvdyAqL1xcbn1cXG5cXG4vKiBCdXR0b25zIGNvbnRhaW5lciAqL1xcbi8qIEJ1dHRvbnMgQ29udGFpbmVyICovXFxuLyogQnV0dG9ucyBDb250YWluZXIgKi9cXG4udmVydGljYWxCdXR0b25zQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBidXR0b25zIHZlcnRpY2FsbHkgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XFxuICBib3gtc2hhZG93OiAwIC0ycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogTGlnaHQgc2hhZG93IGZvciBidXR0b25zIGNvbnRhaW5lciAqL1xcbiAgei1pbmRleDogMTA7IC8qIEVuc3VyZSBidXR0b25zIHN0YXkgb24gdG9wIG9mIG90aGVyIGNvbnRlbnQgKi9cXG59XFxuXFxuLyogR2VuZXJhbCBCdXR0b24gU3R5bGUgKi9cXG4uYnV0dG9uIHtcXG4gIHdpZHRoOiA5MCU7IC8qIEJ1dHRvbnMgdGFrZSB1cCBtb3N0IG9mIHRoZSBjb250YWluZXIgd2lkdGggKi9cXG4gIG1heC13aWR0aDogMjgwcHg7IC8qIFNldCBhIG1heCB3aWR0aCBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4OyAvKiBTbW9vdGggcm91bmRlZCBjb3JuZXJzICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7IC8qIEFkZCBjb25zaXN0ZW50IHNwYWNpbmcgYmV0d2VlbiBidXR0b25zICovXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTsgLyogU21vb3RoIGhvdmVyIGVmZmVjdHMgKi9cXG59XFxuXFxuLyogQ29tcGxleGl0eSBCdXR0b25zICovXFxuLmNvbXBsZXhpdHlCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTBhMzdmLCAjMGQ4YzZlKTsgLyogR3JlZW4gZ3JhZGllbnQgKi9cXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDE2LCAxNjMsIDEyNywgMC4yKTsgLyogU3VidGxlIHNoYWRvdyAqL1xcbn1cXG5cXG4uY29tcGxleGl0eUJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBTbGlnaHRseSBlbmxhcmdlIG9uIGhvdmVyICovXFxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMTYsIDE2MywgMTI3LCAwLjMpOyAvKiBFbmhhbmNlIHNoYWRvdyBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBDbGVhciBCdXR0b24gKi9cXG4uY2xlYXJCdXR0b24ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjQ0MzM2LCAjZTUzOTM1KTsgLyogUmVkIGdyYWRpZW50ICovXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKTsgLyogU3VidGxlIHNoYWRvdyAqL1xcbn1cXG5cXG4uY2xlYXJCdXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogU2xpZ2h0bHkgZW5sYXJnZSBvbiBob3ZlciAqL1xcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjMpOyAvKiBFbmhhbmNlIHNoYWRvdyBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBDaGF0IENvbnRhaW5lciAqL1xcbi5jaGF0Q29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXFxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogRmxvYXRpbmcgZWZmZWN0ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMjBweCk7IC8qIEFkanVzdCBoZWlnaHQgdG8gYWNjb21tb2RhdGUgYnV0dG9ucyAqL1xcbiAgcGFkZGluZy1ib3R0b206IDEyMHB4OyAvKiBBZGQgcGFkZGluZyB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBoaWRkZW4gKi9cXG59XFxuXFxuLyogUmVzcG9uc2l2ZSBBZGp1c3RtZW50cyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTRweDsgLyogUmVkdWNlIHBhZGRpbmcgZm9yIG1vYmlsZSAqL1xcbiAgICBmb250LXNpemU6IDE0cHg7IC8qIFNtYWxsZXIgZm9udCBzaXplIGZvciBtb2JpbGUgKi9cXG4gIH1cXG5cXG4gIC52ZXJ0aWNhbEJ1dHRvbnNDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA4cHggMDsgLyogQWRqdXN0IHBhZGRpbmcgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgfVxcblxcbiAgLmNoYXRDb250YWluZXIge1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpOyAvKiBSZWR1Y2UgY2hhdCBjb250YWluZXIgaGVpZ2h0IHRvIGF2b2lkIG92ZXJsYXAgKi9cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGluZzFcIjogXCJpbmRleF9oZWFkaW5nMV9fSjhfQ25cIixcblx0XCJjaGF0Q29udGFpbmVyXCI6IFwiaW5kZXhfY2hhdENvbnRhaW5lcl9fRlo0eVJcIixcblx0XCJ1c2VyTWVzc2FnZVwiOiBcImluZGV4X3VzZXJNZXNzYWdlX19GSUNFWlwiLFxuXHRcImFzc2lzdGFudE1lc3NhZ2VcIjogXCJpbmRleF9hc3Npc3RhbnRNZXNzYWdlX19QZE9LUVwiLFxuXHRcImZhZGVJblwiOiBcImluZGV4X2ZhZGVJbl9fbXBvVHBcIixcblx0XCJ2ZXJ0aWNhbEJ1dHRvbnNDb250YWluZXJcIjogXCJpbmRleF92ZXJ0aWNhbEJ1dHRvbnNDb250YWluZXJfX1hPX25EXCIsXG5cdFwiYnV0dG9uXCI6IFwiaW5kZXhfYnV0dG9uX193MEhwY1wiLFxuXHRcImNvbXBsZXhpdHlCdXR0b25cIjogXCJpbmRleF9jb21wbGV4aXR5QnV0dG9uX18xUUc0RlwiLFxuXHRcImNsZWFyQnV0dG9uXCI6IFwiaW5kZXhfY2xlYXJCdXR0b25fX0lhWWYwXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./pages/index.module.css\n"));

/***/ })

});