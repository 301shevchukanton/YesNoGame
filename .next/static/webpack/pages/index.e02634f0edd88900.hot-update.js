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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            role: \"system\",\n            content: \"Do you want a new situation?\"\n        }\n    ]);\n    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Scroll to the bottom of the chat container whenever chatHistory changes\n        if (chatContainerRef.current) {\n            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;\n        }\n    }, [\n        chatHistory\n    ]);\n    const sendMessage = async (complexity)=>{\n        // Append user message to chat history\n        const message = \"Сформуй ситуаційну головоломку складності \".concat(complexity, ' для гри \"Так/Ні\". Текст має бути логічним, інтригуючим і читатися легко. Відповідь повинна бути нестандартною, але повністю логічною, щоб учасники могли дійти до неї через запитання \"так/ні\". Формат: \\nСитуація: [текст ситуації, що викликає здивування або цікавість].  \\nВідповідь: [логічне пояснення ситуації]. \\n\\nПриклад:  \\nСитуація: Чоловік зайшов у кафе, замовив склянку води і несподівано отримав постріл у груди.  \\nВідповідь: Чоловік заїкався. Він попросив склянку води, щоб впоратися з заїканням, але бармен вирішив допомогти іншою методою – налякати його пострілом (він стріляв холостими).\\n');\n        setChatHistory((prev)=>[\n                ...prev,\n                {\n                    role: \"user\",\n                    content: \"Нова ситуація - \".concat(complexity, \" складності\")\n                }\n            ]);\n        // Send the user's message to the server\n        const response = await fetch(\"/api/generate?endpoint=chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message\n            })\n        });\n        const data = await response.json();\n        if (data.success) {\n            // Open a connection to receive streamed responses\n            const eventSource = new EventSource(\"/api/generate?endpoint=stream\");\n            eventSource.onmessage = function(event1) {\n                // Parse the event data, which is a JSON string\n                const parsedData = JSON.parse(event1.data);\n                // Check if the last message in the chat history is from the assistant\n                setChatHistory((prevChatHistory)=>{\n                    const newChatHistory = [\n                        ...prevChatHistory\n                    ];\n                    if (newChatHistory.length > 0 && newChatHistory[newChatHistory.length - 1].role === \"assistant\") {\n                        // If so, append the new chunk to the existing assistant message content\n                        newChatHistory[newChatHistory.length - 1].content += parsedData;\n                    } else {\n                        // Otherwise, add a new assistant message to the chat history\n                        newChatHistory.push({\n                            role: \"assistant\",\n                            content: parsedData\n                        });\n                    }\n                    return newChatHistory;\n                });\n            };\n            eventSource.onerror = function() {\n                eventSource.close();\n            };\n        }\n    };\n    const clearChat = async ()=>{\n        // Clear the chat history in the client state\n        setChatHistory([\n            {\n                role: \"system\",\n                content: \"You are a helpful assistant.\"\n            }\n        ]);\n        // Reset the chat history on the server\n        await fetch(\"/api/generate?endpoint=reset\", {\n            method: \"POST\"\n        });\n    };\n    const Complexity = {\n        EASY: \"легкої\",\n        MEDIUM: \"середньої\",\n        HARD: \"складної\"\n    };\n    function handleComplexityInput(complexity) {\n        // Check if the provided complexity is valid\n        if (!Object.values(Complexity).includes(complexity)) {\n            console.error(\"Invalid complexity level provided\");\n            return;\n        }\n        // Prevent the default form submission or action\n        event.preventDefault();\n        // Send the message\n        sendMessage(complexity);\n        // Clear the message input or any related field\n        setMessage(\"\");\n    }\n    const onSubmitEasy = (event1)=>{\n        handleComplexityInput(Complexity.EASY);\n    };\n    const onSubmitMedium = (event1)=>{\n        handleComplexityInput(Complexity.MEDIUM);\n    };\n    const onSubmitHard = (event1)=>{\n        handleComplexityInput(Complexity.HARD);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        className: \"jsx-bf94c0d48000f7eb\",\n                        children: \"Yes/No Game generator\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        id: \"bf94c0d48000f7eb\",\n                        children: 'body{background:-webkit-linear-gradient(top,#f7f8fa,#fff);background:-moz-linear-gradient(top,#f7f8fa,#fff);background:-o-linear-gradient(top,#f7f8fa,#fff);background:linear-gradient(to bottom,#f7f8fa,#fff);font-size:16px;line-height:24px;color:#353740;font-family:\"ColfaxAI\",Helvetica,sans-serif;margin:0;padding:0}'\n                    }, void 0, false, void 0, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading1),\n                children: \"Yes/No Game generator\"\n            }, void 0, false, {\n                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatContainer),\n                ref: chatContainerRef,\n                children: chatHistory.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: msg.role === \"user\" ? (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().userMessage) : (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().assistantMessage),\n                        children: [\n                            msg.role === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Наступна:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                                lineNumber: 140,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Генератор:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                                lineNumber: 142,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: msg.content\n                            }, void 0, false, {\n                                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().verticalButtonsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button), \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().complexityButton)),\n                        onClick: ()=>handleComplexityInput(Complexity.EASY),\n                        children: \"New Puzzle - Easy\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 150,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button), \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().complexityButton)),\n                        onClick: ()=>handleComplexityInput(Complexity.MEDIUM),\n                        children: \"New Puzzle - Medium\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 156,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button), \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().complexityButton)),\n                        onClick: ()=>handleComplexityInput(Complexity.HARD),\n                        children: \"New Puzzle - Hard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 162,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button), \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().clearButton)),\n                        onClick: clearChat,\n                        children: \"Clear\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 168,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                lineNumber: 149,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"muIJri5H/bMKBMSRlwQotB4ND84=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7Ozs7O2tDQUdELDhEQUFDMEI7d0JBQ0NaLFdBQVcsR0FBb0J2RCxPQUFqQkEsaUVBQWEsRUFBQyxLQUFzQixPQUFuQkEsc0VBQWtCO3dCQUNqRHFFLFNBQVNoQztrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0g7R0E3S3dCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NoYXRIaXN0b3J5LCBzZXRDaGF0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXG4gICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIkRvIHlvdSB3YW50IGEgbmV3IHNpdHVhdGlvbj9cIiB9LFxuICBdKTtcbiAgY29uc3QgY2hhdENvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBjaGF0IGNvbnRhaW5lciB3aGVuZXZlciBjaGF0SGlzdG9yeSBjaGFuZ2VzXG4gICAgaWYgKGNoYXRDb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgY2hhdENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvcCA9XG4gICAgICAgIGNoYXRDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9LCBbY2hhdEhpc3RvcnldKTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChjb21wbGV4aXR5KSA9PiB7XG4gICAgLy8gQXBwZW5kIHVzZXIgbWVzc2FnZSB0byBjaGF0IGhpc3RvcnlcbiAgICBjb25zdCBtZXNzYWdlID0gYNCh0YTQvtGA0LzRg9C5INGB0LjRgtGD0LDRhtGW0LnQvdGDINCz0L7Qu9C+0LLQvtC70L7QvNC60YMg0YHQutC70LDQtNC90L7RgdGC0ZYgJHtjb21wbGV4aXR5fSDQtNC70Y8g0LPRgNC4IFwi0KLQsNC6L9Cd0ZZcIi4g0KLQtdC60YHRgiDQvNCw0ZQg0LHRg9GC0Lgg0LvQvtCz0ZbRh9C90LjQvCwg0ZbQvdGC0YDQuNCz0YPRjtGH0LjQvCDRliDRh9C40YLQsNGC0LjRgdGPINC70LXQs9C60L4uINCS0ZbQtNC/0L7QstGW0LTRjCDQv9C+0LLQuNC90L3QsCDQsdGD0YLQuCDQvdC10YHRgtCw0L3QtNCw0YDRgtC90L7Rjiwg0LDQu9C1INC/0L7QstC90ZbRgdGC0Y4g0LvQvtCz0ZbRh9C90L7Rjiwg0YnQvtCxINGD0YfQsNGB0L3QuNC60Lgg0LzQvtCz0LvQuCDQtNGW0LnRgtC4INC00L4g0L3QtdGXINGH0LXRgNC10Lcg0LfQsNC/0LjRgtCw0L3QvdGPIFwi0YLQsNC6L9C90ZZcIi4g0KTQvtGA0LzQsNGCOiBcbtCh0LjRgtGD0LDRhtGW0Y86IFvRgtC10LrRgdGCINGB0LjRgtGD0LDRhtGW0ZcsINGJ0L4g0LLQuNC60LvQuNC60LDRlCDQt9C00LjQstGD0LLQsNC90L3RjyDQsNCx0L4g0YbRltC60LDQstGW0YHRgtGMXS4gIFxu0JLRltC00L/QvtCy0ZbQtNGMOiBb0LvQvtCz0ZbRh9C90LUg0L/QvtGP0YHQvdC10L3QvdGPINGB0LjRgtGD0LDRhtGW0ZddLiBcblxu0J/RgNC40LrQu9Cw0LQ6ICBcbtCh0LjRgtGD0LDRhtGW0Y86INCn0L7Qu9C+0LLRltC6INC30LDQudGI0L7QsiDRgyDQutCw0YTQtSwg0LfQsNC80L7QstC40LIg0YHQutC70Y/QvdC60YMg0LLQvtC00Lgg0ZYg0L3QtdGB0L/QvtC00ZbQstCw0L3QviDQvtGC0YDQuNC80LDQsiDQv9C+0YHRgtGA0ZbQuyDRgyDQs9GA0YPQtNC4LiAgXG7QktGW0LTQv9C+0LLRltC00Yw6INCn0L7Qu9C+0LLRltC6INC30LDRl9C60LDQstGB0Y8uINCS0ZbQvSDQv9C+0L/RgNC+0YHQuNCyINGB0LrQu9GP0L3QutGDINCy0L7QtNC4LCDRidC+0LEg0LLQv9C+0YDQsNGC0LjRgdGPINC3INC30LDRl9C60LDQvdC90Y/QvCwg0LDQu9C1INCx0LDRgNC80LXQvSDQstC40YDRltGI0LjQsiDQtNC+0L/QvtC80L7Qs9GC0Lgg0ZbQvdGI0L7RjiDQvNC10YLQvtC00L7RjiDigJMg0L3QsNC70Y/QutCw0YLQuCDQudC+0LPQviDQv9C+0YHRgtGA0ZbQu9C+0LwgKNCy0ZbQvSDRgdGC0YDRltC70Y/QsiDRhdC+0LvQvtGB0YLQuNC80LgpLlxuYDtcbiAgICBzZXRDaGF0SGlzdG9yeSgocHJldikgPT4gWy4uLnByZXYsIHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IGDQndC+0LLQsCDRgdC40YLRg9Cw0YbRltGPIC0gJHtjb21wbGV4aXR5fSDRgdC60LvQsNC00L3QvtGB0YLRlmAgfV0pO1xuXG4gICAgLy8gU2VuZCB0aGUgdXNlcidzIG1lc3NhZ2UgdG8gdGhlIHNlcnZlclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlP2VuZHBvaW50PWNoYXRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAvLyBPcGVuIGEgY29ubmVjdGlvbiB0byByZWNlaXZlIHN0cmVhbWVkIHJlc3BvbnNlc1xuICAgICAgY29uc3QgZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoXCIvYXBpL2dlbmVyYXRlP2VuZHBvaW50PXN0cmVhbVwiKTtcbiAgICAgIGV2ZW50U291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBQYXJzZSB0aGUgZXZlbnQgZGF0YSwgd2hpY2ggaXMgYSBKU09OIHN0cmluZ1xuICAgICAgICBjb25zdCBwYXJzZWREYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGFzdCBtZXNzYWdlIGluIHRoZSBjaGF0IGhpc3RvcnkgaXMgZnJvbSB0aGUgYXNzaXN0YW50XG4gICAgICAgIHNldENoYXRIaXN0b3J5KChwcmV2Q2hhdEhpc3RvcnkpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdDaGF0SGlzdG9yeSA9IFsuLi5wcmV2Q2hhdEhpc3RvcnldO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG5ld0NoYXRIaXN0b3J5Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIG5ld0NoYXRIaXN0b3J5W25ld0NoYXRIaXN0b3J5Lmxlbmd0aCAtIDFdLnJvbGUgPT09IFwiYXNzaXN0YW50XCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIElmIHNvLCBhcHBlbmQgdGhlIG5ldyBjaHVuayB0byB0aGUgZXhpc3RpbmcgYXNzaXN0YW50IG1lc3NhZ2UgY29udGVudFxuICAgICAgICAgICAgbmV3Q2hhdEhpc3RvcnlbbmV3Q2hhdEhpc3RvcnkubGVuZ3RoIC0gMV0uY29udGVudCArPSBwYXJzZWREYXRhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGFkZCBhIG5ldyBhc3Npc3RhbnQgbWVzc2FnZSB0byB0aGUgY2hhdCBoaXN0b3J5XG4gICAgICAgICAgICBuZXdDaGF0SGlzdG9yeS5wdXNoKHsgcm9sZTogXCJhc3Npc3RhbnRcIiwgY29udGVudDogcGFyc2VkRGF0YSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld0NoYXRIaXN0b3J5O1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBldmVudFNvdXJjZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBldmVudFNvdXJjZS5jbG9zZSgpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJDaGF0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIENsZWFyIHRoZSBjaGF0IGhpc3RvcnkgaW4gdGhlIGNsaWVudCBzdGF0ZVxuICAgIHNldENoYXRIaXN0b3J5KFtcbiAgICAgIHsgcm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogXCJZb3UgYXJlIGEgaGVscGZ1bCBhc3Npc3RhbnQuXCIgfSxcbiAgICBdKTtcblxuICAgIC8vIFJlc2V0IHRoZSBjaGF0IGhpc3Rvcnkgb24gdGhlIHNlcnZlclxuICAgIGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZT9lbmRwb2ludD1yZXNldFwiLCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XG4gIH07XG4gIFxuICBjb25zdCBDb21wbGV4aXR5ID0ge1xuICBFQVNZOiBcItC70LXQs9C60L7Rl1wiLFxuICBNRURJVU06IFwi0YHQtdGA0LXQtNC90YzQvtGXXCIsXG4gIEhBUkQ6IFwi0YHQutC70LDQtNC90L7Rl1wiLFxuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbXBsZXhpdHlJbnB1dChjb21wbGV4aXR5KSB7XG4gIC8vIENoZWNrIGlmIHRoZSBwcm92aWRlZCBjb21wbGV4aXR5IGlzIHZhbGlkXG4gICAgaWYgKCFPYmplY3QudmFsdWVzKENvbXBsZXhpdHkpLmluY2x1ZGVzKGNvbXBsZXhpdHkpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBjb21wbGV4aXR5IGxldmVsIHByb3ZpZGVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIG9yIGFjdGlvblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIC8vIFNlbmQgdGhlIG1lc3NhZ2VcbiAgICBzZW5kTWVzc2FnZShjb21wbGV4aXR5KTtcblxuICAgIC8vIENsZWFyIHRoZSBtZXNzYWdlIGlucHV0IG9yIGFueSByZWxhdGVkIGZpZWxkXG4gICAgc2V0TWVzc2FnZShcIlwiKTtcbn1cblxuICBjb25zdCBvblN1Ym1pdEVhc3kgPSAoZXZlbnQpID0+IHtcbiAgIGhhbmRsZUNvbXBsZXhpdHlJbnB1dChDb21wbGV4aXR5LkVBU1kpO1xuICB9O1xuICBjb25zdCBvblN1Ym1pdE1lZGl1bSA9IChldmVudCkgPT4ge1xuICAgaGFuZGxlQ29tcGxleGl0eUlucHV0KENvbXBsZXhpdHkuTUVESVVNKTtcbiAgfTtcbiAgY29uc3Qgb25TdWJtaXRIYXJkID0gKGV2ZW50KSA9PiB7XG4gICBoYW5kbGVDb21wbGV4aXR5SW5wdXQoQ29tcGxleGl0eS5IQVJEKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlllcy9ObyBHYW1lIGdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIGJvZHkge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y3ZjhmYSwgI2ZmZmZmZik7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGNvbG9yOiAjMzUzNzQwO1xuICAgICAgZm9udC1mYW1pbHk6IFwiQ29sZmF4QUlcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nMX0+WWVzL05vIEdhbWUgZ2VuZXJhdG9yPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdENvbnRhaW5lcn0gcmVmPXtjaGF0Q29udGFpbmVyUmVmfT5cbiAgICAgICAge2NoYXRIaXN0b3J5Lm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBtc2cucm9sZSA9PT0gXCJ1c2VyXCIgPyBzdHlsZXMudXNlck1lc3NhZ2UgOiBzdHlsZXMuYXNzaXN0YW50TWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttc2cucm9sZSA9PT0gXCJ1c2VyXCIgPyAoXG4gICAgICAgICAgICAgIDxzdHJvbmc+0J3QsNGB0YLRg9C/0L3QsDo8L3N0cm9uZz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzdHJvbmc+0JPQtdC90LXRgNCw0YLQvtGAOjwvc3Ryb25nPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxwPnttc2cuY29udGVudH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52ZXJ0aWNhbEJ1dHRvbnNDb250YWluZXJ9PlxuICA8YnV0dG9uXG4gICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy5jb21wbGV4aXR5QnV0dG9ufWB9XG4gICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29tcGxleGl0eUlucHV0KENvbXBsZXhpdHkuRUFTWSl9XG4gID5cbiAgICBOZXcgUHV6emxlIC0gRWFzeVxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtzdHlsZXMuY29tcGxleGl0eUJ1dHRvbn1gfVxuICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBsZXhpdHlJbnB1dChDb21wbGV4aXR5Lk1FRElVTSl9XG4gID5cbiAgICBOZXcgUHV6emxlIC0gTWVkaXVtXG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uXG4gICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy5jb21wbGV4aXR5QnV0dG9ufWB9XG4gICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29tcGxleGl0eUlucHV0KENvbXBsZXhpdHkuSEFSRCl9XG4gID5cbiAgICBOZXcgUHV6emxlIC0gSGFyZFxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtzdHlsZXMuY2xlYXJCdXR0b259YH1cbiAgICBvbkNsaWNrPXtjbGVhckNoYXR9XG4gID5cbiAgICBDbGVhclxuICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwic3R5bGVzIiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY2hhdEhpc3RvcnkiLCJzZXRDaGF0SGlzdG9yeSIsInJvbGUiLCJjb250ZW50IiwiY2hhdENvbnRhaW5lclJlZiIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJzZW5kTWVzc2FnZSIsImNvbXBsZXhpdHkiLCJwcmV2IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2UiLCJvbm1lc3NhZ2UiLCJldmVudCIsInBhcnNlZERhdGEiLCJwYXJzZSIsInByZXZDaGF0SGlzdG9yeSIsIm5ld0NoYXRIaXN0b3J5IiwibGVuZ3RoIiwicHVzaCIsIm9uZXJyb3IiLCJjbG9zZSIsImNsZWFyQ2hhdCIsIkNvbXBsZXhpdHkiLCJFQVNZIiwiTUVESVVNIiwiSEFSRCIsImhhbmRsZUNvbXBsZXhpdHlJbnB1dCIsIk9iamVjdCIsInZhbHVlcyIsImluY2x1ZGVzIiwiY29uc29sZSIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJvblN1Ym1pdEVhc3kiLCJvblN1Ym1pdE1lZGl1bSIsIm9uU3VibWl0SGFyZCIsImRpdiIsInRpdGxlIiwiaDEiLCJjbGFzc05hbWUiLCJoZWFkaW5nMSIsImNoYXRDb250YWluZXIiLCJyZWYiLCJtYXAiLCJtc2ciLCJpbmRleCIsInVzZXJNZXNzYWdlIiwiYXNzaXN0YW50TWVzc2FnZSIsInN0cm9uZyIsInAiLCJ2ZXJ0aWNhbEJ1dHRvbnNDb250YWluZXIiLCJidXR0b24iLCJjb21wbGV4aXR5QnV0dG9uIiwib25DbGljayIsImNsZWFyQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});