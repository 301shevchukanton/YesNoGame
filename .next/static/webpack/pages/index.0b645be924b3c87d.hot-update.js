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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            role: \"system\",\n            content: \"Do you want a new situation?\"\n        }\n    ]);\n    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Scroll to the bottom of the chat container whenever chatHistory changes\n        if (chatContainerRef.current) {\n            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;\n        }\n    }, [\n        chatHistory\n    ]);\n    const sendMessage = async (complexity)=>{\n        // Append user message to chat history\n        const message = \"сформувати ситуаційну головоломку \".concat(complexity, \" складності з відповіддю яка б була повністю логічна в теперешній час. Текст має читатись легко і бути високої якості. Надайте вихідні дані у форматі: \\nСитуація: {ситуація з нового рядка} \\n\\nВідповідь: {відповідь}\");\n        setChatHistory((prev)=>[\n                ...prev,\n                {\n                    role: \"user\",\n                    content: \"Нова ситуація -${complexity}\"\n                }\n            ]);\n        // Send the user's message to the server\n        const response = await fetch(\"/api/generate?endpoint=chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message\n            })\n        });\n        const data = await response.json();\n        if (data.success) {\n            // Open a connection to receive streamed responses\n            const eventSource = new EventSource(\"/api/generate?endpoint=stream\");\n            eventSource.onmessage = function(event1) {\n                // Parse the event data, which is a JSON string\n                const parsedData = JSON.parse(event1.data);\n                // Check if the last message in the chat history is from the assistant\n                setChatHistory((prevChatHistory)=>{\n                    const newChatHistory = [\n                        ...prevChatHistory\n                    ];\n                    if (newChatHistory.length > 0 && newChatHistory[newChatHistory.length - 1].role === \"assistant\") {\n                        // If so, append the new chunk to the existing assistant message content\n                        newChatHistory[newChatHistory.length - 1].content += parsedData;\n                    } else {\n                        // Otherwise, add a new assistant message to the chat history\n                        newChatHistory.push({\n                            role: \"assistant\",\n                            content: parsedData\n                        });\n                    }\n                    return newChatHistory;\n                });\n            };\n            eventSource.onerror = function() {\n                eventSource.close();\n            };\n        }\n    };\n    const clearChat = async ()=>{\n        // Clear the chat history in the client state\n        setChatHistory([\n            {\n                role: \"system\",\n                content: \"You are a helpful assistant.\"\n            }\n        ]);\n        // Reset the chat history on the server\n        await fetch(\"/api/generate?endpoint=reset\", {\n            method: \"POST\"\n        });\n    };\n    const Complexity = {\n        EASY: \"легкої\",\n        MEDIUM: \"середньої\",\n        HARD: \"складної\"\n    };\n    function handleComplexityInput(complexity) {\n        // Check if the provided complexity is valid\n        if (!Object.values(Complexity).includes(complexity)) {\n            console.error(\"Invalid complexity level provided.\");\n            return;\n        }\n        // Prevent the default form submission or action\n        event.preventDefault();\n        // Send the message\n        sendMessage(complexity);\n        // Clear the message input or any related field\n        setMessage(\"\");\n    }\n    const onSubmitEasy = (event1)=>{\n        handleComplexityInput(Complexity.EASY);\n    };\n    const onSubmitMedium = (event1)=>{\n        handleComplexityInput(Complexity.MEDIUM);\n    };\n    const onSubmitHard = (event1)=>{\n        handleComplexityInput(Complexity.HARD);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Yes/No Game generator\"\n                }, void 0, false, {\n                    fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().heading1),\n                children: \"Yes/No Game generator\"\n            }, void 0, false, {\n                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatContainer),\n                ref: chatContainerRef,\n                children: chatHistory.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: msg.role === \"user\" ? (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().userMessage) : (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().assistantMessage),\n                        children: msg.content\n                    }, index, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageInputContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmitEasy,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGroup),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputSubmit),\n                                type: \"submit\",\n                                value: \"New puzle - Easy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmitMedium,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGroup),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputSubmit),\n                                type: \"submit\",\n                                value: \"New puzle - Medium\"\n                            }, void 0, false, {\n                                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                                lineNumber: 133,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmitHard,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGroup),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputSubmit),\n                                type: \"submit\",\n                                value: \"New puzle - Hard\"\n                            }, void 0, false, {\n                                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputButton),\n                        type: \"button\",\n                        onClick: clearChat,\n                        children: \"Clear\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                        lineNumber: 142,\n                        columnNumber: 10\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/antonshevchuk/Documents/yesnogame/YesNoGame-next/pages/index.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"muIJri5H/bMKBMSRlwQotB4ND84=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2I7R0FwSndCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NoYXRIaXN0b3J5LCBzZXRDaGF0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXG4gICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIkRvIHlvdSB3YW50IGEgbmV3IHNpdHVhdGlvbj9cIiB9LFxuICBdKTtcbiAgY29uc3QgY2hhdENvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBjaGF0IGNvbnRhaW5lciB3aGVuZXZlciBjaGF0SGlzdG9yeSBjaGFuZ2VzXG4gICAgaWYgKGNoYXRDb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgY2hhdENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvcCA9XG4gICAgICAgIGNoYXRDb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9LCBbY2hhdEhpc3RvcnldKTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChjb21wbGV4aXR5KSA9PiB7XG4gICAgLy8gQXBwZW5kIHVzZXIgbWVzc2FnZSB0byBjaGF0IGhpc3RvcnlcbiAgICBjb25zdCBtZXNzYWdlID0gYNGB0YTQvtGA0LzRg9Cy0LDRgtC4INGB0LjRgtGD0LDRhtGW0LnQvdGDINCz0L7Qu9C+0LLQvtC70L7QvNC60YMgJHtjb21wbGV4aXR5fSDRgdC60LvQsNC00L3QvtGB0YLRliDQtyDQstGW0LTQv9C+0LLRltC00LTRjiDRj9C60LAg0LEg0LHRg9C70LAg0L/QvtCy0L3RltGB0YLRjiDQu9C+0LPRltGH0L3QsCDQsiDRgtC10L/QtdGA0LXRiNC90ZbQuSDRh9Cw0YEuINCi0LXQutGB0YIg0LzQsNGUINGH0LjRgtCw0YLQuNGB0Ywg0LvQtdCz0LrQviDRliDQsdGD0YLQuCDQstC40YHQvtC60L7RlyDRj9C60L7RgdGC0ZYuINCd0LDQtNCw0LnRgtC1INCy0LjRhdGW0LTQvdGWINC00LDQvdGWINGDINGE0L7RgNC80LDRgtGWOiBcXG7QodC40YLRg9Cw0YbRltGPOiB70YHQuNGC0YPQsNGG0ZbRjyDQtyDQvdC+0LLQvtCz0L4g0YDRj9C00LrQsH0gXFxuXFxu0JLRltC00L/QvtCy0ZbQtNGMOiB70LLRltC00L/QvtCy0ZbQtNGMfWA7XG4gICAgc2V0Q2hhdEhpc3RvcnkoKHByZXYpID0+IFsuLi5wcmV2LCB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBcItCd0L7QstCwINGB0LjRgtGD0LDRhtGW0Y8gLSR7Y29tcGxleGl0eX1cIiB9XSk7XG5cbiAgICAvLyBTZW5kIHRoZSB1c2VyJ3MgbWVzc2FnZSB0byB0aGUgc2VydmVyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGU/ZW5kcG9pbnQ9Y2hhdFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2UgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIC8vIE9wZW4gYSBjb25uZWN0aW9uIHRvIHJlY2VpdmUgc3RyZWFtZWQgcmVzcG9uc2VzXG4gICAgICBjb25zdCBldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZShcIi9hcGkvZ2VuZXJhdGU/ZW5kcG9pbnQ9c3RyZWFtXCIpO1xuICAgICAgZXZlbnRTb3VyY2Uub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBldmVudCBkYXRhLCB3aGljaCBpcyBhIEpTT04gc3RyaW5nXG4gICAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBsYXN0IG1lc3NhZ2UgaW4gdGhlIGNoYXQgaGlzdG9yeSBpcyBmcm9tIHRoZSBhc3Npc3RhbnRcbiAgICAgICAgc2V0Q2hhdEhpc3RvcnkoKHByZXZDaGF0SGlzdG9yeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0NoYXRIaXN0b3J5ID0gWy4uLnByZXZDaGF0SGlzdG9yeV07XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV3Q2hhdEhpc3RvcnkubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgbmV3Q2hhdEhpc3RvcnlbbmV3Q2hhdEhpc3RvcnkubGVuZ3RoIC0gMV0ucm9sZSA9PT0gXCJhc3Npc3RhbnRcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gSWYgc28sIGFwcGVuZCB0aGUgbmV3IGNodW5rIHRvIHRoZSBleGlzdGluZyBhc3Npc3RhbnQgbWVzc2FnZSBjb250ZW50XG4gICAgICAgICAgICBuZXdDaGF0SGlzdG9yeVtuZXdDaGF0SGlzdG9yeS5sZW5ndGggLSAxXS5jb250ZW50ICs9IHBhcnNlZERhdGE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgYWRkIGEgbmV3IGFzc2lzdGFudCBtZXNzYWdlIHRvIHRoZSBjaGF0IGhpc3RvcnlcbiAgICAgICAgICAgIG5ld0NoYXRIaXN0b3J5LnB1c2goeyByb2xlOiBcImFzc2lzdGFudFwiLCBjb250ZW50OiBwYXJzZWREYXRhIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3Q2hhdEhpc3Rvcnk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGV2ZW50U291cmNlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV2ZW50U291cmNlLmNsb3NlKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGVhckNoYXQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gQ2xlYXIgdGhlIGNoYXQgaGlzdG9yeSBpbiB0aGUgY2xpZW50IHN0YXRlXG4gICAgc2V0Q2hhdEhpc3RvcnkoW1xuICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIllvdSBhcmUgYSBoZWxwZnVsIGFzc2lzdGFudC5cIiB9LFxuICAgIF0pO1xuXG4gICAgLy8gUmVzZXQgdGhlIGNoYXQgaGlzdG9yeSBvbiB0aGUgc2VydmVyXG4gICAgYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlP2VuZHBvaW50PXJlc2V0XCIsIHsgbWV0aG9kOiBcIlBPU1RcIiB9KTtcbiAgfTtcbiAgXG4gIGNvbnN0IENvbXBsZXhpdHkgPSB7XG4gIEVBU1k6IFwi0LvQtdCz0LrQvtGXXCIsXG4gIE1FRElVTTogXCLRgdC10YDQtdC00L3RjNC+0ZdcIixcbiAgSEFSRDogXCLRgdC60LvQsNC00L3QvtGXXCIsXG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29tcGxleGl0eUlucHV0KGNvbXBsZXhpdHkpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIGNvbXBsZXhpdHkgaXMgdmFsaWRcbiAgICBpZiAoIU9iamVjdC52YWx1ZXMoQ29tcGxleGl0eSkuaW5jbHVkZXMoY29tcGxleGl0eSkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGNvbXBsZXhpdHkgbGV2ZWwgcHJvdmlkZWQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIG9yIGFjdGlvblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIC8vIFNlbmQgdGhlIG1lc3NhZ2VcbiAgICBzZW5kTWVzc2FnZShjb21wbGV4aXR5KTtcblxuICAgIC8vIENsZWFyIHRoZSBtZXNzYWdlIGlucHV0IG9yIGFueSByZWxhdGVkIGZpZWxkXG4gICAgc2V0TWVzc2FnZShcIlwiKTtcbn1cblxuICBjb25zdCBvblN1Ym1pdEVhc3kgPSAoZXZlbnQpID0+IHtcbiAgIGhhbmRsZUNvbXBsZXhpdHlJbnB1dChDb21wbGV4aXR5LkVBU1kpO1xuICB9O1xuICBjb25zdCBvblN1Ym1pdE1lZGl1bSA9IChldmVudCkgPT4ge1xuICAgaGFuZGxlQ29tcGxleGl0eUlucHV0KENvbXBsZXhpdHkuTUVESVVNKTtcbiAgfTtcbiAgY29uc3Qgb25TdWJtaXRIYXJkID0gKGV2ZW50KSA9PiB7XG4gICBoYW5kbGVDb21wbGV4aXR5SW5wdXQoQ29tcGxleGl0eS5IQVJEKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlllcy9ObyBHYW1lIGdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZzF9Plllcy9ObyBHYW1lIGdlbmVyYXRvcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9IHJlZj17Y2hhdENvbnRhaW5lclJlZn0+XG4gICAgICAgIHtjaGF0SGlzdG9yeS5tYXAoKG1zZywgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgbXNnLnJvbGUgPT09IFwidXNlclwiID8gc3R5bGVzLnVzZXJNZXNzYWdlIDogc3R5bGVzLmFzc2lzdGFudE1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bXNnLmNvbnRlbnR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VJbnB1dENvbnRhaW5lcn0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEVhc3l9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0U3VibWl0fSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXcgcHV6bGUgLSBFYXN5XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRNZWRpdW19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0U3VibWl0fSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXcgcHV6bGUgLSBNZWRpdW1cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhcmR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0U3VibWl0fSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXcgcHV6bGUgLSBIYXJkXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0QnV0dG9ufVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJDaGF0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIkhvbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImNoYXRIaXN0b3J5Iiwic2V0Q2hhdEhpc3RvcnkiLCJyb2xlIiwiY29udGVudCIsImNoYXRDb250YWluZXJSZWYiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Iiwic2VuZE1lc3NhZ2UiLCJjb21wbGV4aXR5IiwicHJldiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJldmVudFNvdXJjZSIsIkV2ZW50U291cmNlIiwib25tZXNzYWdlIiwiZXZlbnQiLCJwYXJzZWREYXRhIiwicGFyc2UiLCJwcmV2Q2hhdEhpc3RvcnkiLCJuZXdDaGF0SGlzdG9yeSIsImxlbmd0aCIsInB1c2giLCJvbmVycm9yIiwiY2xvc2UiLCJjbGVhckNoYXQiLCJDb21wbGV4aXR5IiwiRUFTWSIsIk1FRElVTSIsIkhBUkQiLCJoYW5kbGVDb21wbGV4aXR5SW5wdXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJlcnJvciIsInByZXZlbnREZWZhdWx0Iiwib25TdWJtaXRFYXN5Iiwib25TdWJtaXRNZWRpdW0iLCJvblN1Ym1pdEhhcmQiLCJkaXYiLCJ0aXRsZSIsImgxIiwiY2xhc3NOYW1lIiwiaGVhZGluZzEiLCJjaGF0Q29udGFpbmVyIiwicmVmIiwibWFwIiwibXNnIiwiaW5kZXgiLCJ1c2VyTWVzc2FnZSIsImFzc2lzdGFudE1lc3NhZ2UiLCJtZXNzYWdlSW5wdXRDb250YWluZXIiLCJmb3JtIiwib25TdWJtaXQiLCJidXR0b25Hcm91cCIsImlucHV0IiwiaW5wdXRTdWJtaXQiLCJ0eXBlIiwidmFsdWUiLCJidXR0b24iLCJpbnB1dEJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});