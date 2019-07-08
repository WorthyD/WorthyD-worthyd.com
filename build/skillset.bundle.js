/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("(void 0)(\"interfaces/skill\", [], function (exports_1, context_1) {\r\n    \"use strict\";\r\n    var __moduleName = context_1 && context_1.id;\r\n    var SkillType;\r\n    return {\r\n        setters: [],\r\n        execute: function () {\r\n            (function (SkillType) {\r\n                SkillType[SkillType[\"Language\"] = 0] = \"Language\";\r\n                SkillType[SkillType[\"Application\"] = 1] = \"Application\";\r\n                SkillType[SkillType[\"Framework\"] = 2] = \"Framework\";\r\n            })(SkillType || (SkillType = {}));\r\n            exports_1(\"SkillType\", SkillType);\r\n        }\r\n    };\r\n});\r\n(void 0)(\"data/skills\", [\"interfaces/skill\"], function (exports_2, context_2) {\r\n    \"use strict\";\r\n    var __moduleName = context_2 && context_2.id;\r\n    var skill_1, MySkills;\r\n    return {\r\n        setters: [\r\n            function (skill_1_1) {\r\n                skill_1 = skill_1_1;\r\n            }\r\n        ],\r\n        execute: function () {\r\n            exports_2(\"MySkills\", MySkills = [\r\n                { name: 'Test 1', content: 'Lorem Ipsum', icon: '', interest: 0, skill: 0, type: skill_1.SkillType.Language },\r\n                { name: 'Test 2', content: 'Lorem Ipsum', icon: '', interest: 0, skill: 0, type: skill_1.SkillType.Framework }\r\n            ]);\r\n        }\r\n    };\r\n});\r\n(void 0)(\"pages/skillset\", [], function (exports_3, context_3) {\r\n    \"use strict\";\r\n    var __moduleName = context_3 && context_3.id;\r\n    var SkillSetPage;\r\n    return {\r\n        setters: [],\r\n        execute: function () {\r\n            SkillSetPage = (function () {\r\n                function SkillSetPage() {\r\n                    console.log('building');\r\n                }\r\n                return SkillSetPage;\r\n            }());\r\n            exports_3(\"SkillSetPage\", SkillSetPage);\r\n        }\r\n    };\r\n});\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BhZ2VzL3NraWxsc2V0LnRzPzlmOWMiXSwic291cmNlc0NvbnRlbnQiOlsiU3lzdGVtLnJlZ2lzdGVyKFwiaW50ZXJmYWNlcy9za2lsbFwiLCBbXSwgZnVuY3Rpb24gKGV4cG9ydHNfMSwgY29udGV4dF8xKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX21vZHVsZU5hbWUgPSBjb250ZXh0XzEgJiYgY29udGV4dF8xLmlkO1xyXG4gICAgdmFyIFNraWxsVHlwZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0dGVyczogW10sXHJcbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24gKFNraWxsVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgU2tpbGxUeXBlW1NraWxsVHlwZVtcIkxhbmd1YWdlXCJdID0gMF0gPSBcIkxhbmd1YWdlXCI7XHJcbiAgICAgICAgICAgICAgICBTa2lsbFR5cGVbU2tpbGxUeXBlW1wiQXBwbGljYXRpb25cIl0gPSAxXSA9IFwiQXBwbGljYXRpb25cIjtcclxuICAgICAgICAgICAgICAgIFNraWxsVHlwZVtTa2lsbFR5cGVbXCJGcmFtZXdvcmtcIl0gPSAyXSA9IFwiRnJhbWV3b3JrXCI7XHJcbiAgICAgICAgICAgIH0pKFNraWxsVHlwZSB8fCAoU2tpbGxUeXBlID0ge30pKTtcclxuICAgICAgICAgICAgZXhwb3J0c18xKFwiU2tpbGxUeXBlXCIsIFNraWxsVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcblN5c3RlbS5yZWdpc3RlcihcImRhdGEvc2tpbGxzXCIsIFtcImludGVyZmFjZXMvc2tpbGxcIl0sIGZ1bmN0aW9uIChleHBvcnRzXzIsIGNvbnRleHRfMikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19tb2R1bGVOYW1lID0gY29udGV4dF8yICYmIGNvbnRleHRfMi5pZDtcclxuICAgIHZhciBza2lsbF8xLCBNeVNraWxscztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0dGVyczogW1xyXG4gICAgICAgICAgICBmdW5jdGlvbiAoc2tpbGxfMV8xKSB7XHJcbiAgICAgICAgICAgICAgICBza2lsbF8xID0gc2tpbGxfMV8xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBleGVjdXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4cG9ydHNfMihcIk15U2tpbGxzXCIsIE15U2tpbGxzID0gW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnVGVzdCAxJywgY29udGVudDogJ0xvcmVtIElwc3VtJywgaWNvbjogJycsIGludGVyZXN0OiAwLCBza2lsbDogMCwgdHlwZTogc2tpbGxfMS5Ta2lsbFR5cGUuTGFuZ3VhZ2UgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1Rlc3QgMicsIGNvbnRlbnQ6ICdMb3JlbSBJcHN1bScsIGljb246ICcnLCBpbnRlcmVzdDogMCwgc2tpbGw6IDAsIHR5cGU6IHNraWxsXzEuU2tpbGxUeXBlLkZyYW1ld29yayB9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG5TeXN0ZW0ucmVnaXN0ZXIoXCJwYWdlcy9za2lsbHNldFwiLCBbXSwgZnVuY3Rpb24gKGV4cG9ydHNfMywgY29udGV4dF8zKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX21vZHVsZU5hbWUgPSBjb250ZXh0XzMgJiYgY29udGV4dF8zLmlkO1xyXG4gICAgdmFyIFNraWxsU2V0UGFnZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0dGVyczogW10sXHJcbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBTa2lsbFNldFBhZ2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gU2tpbGxTZXRQYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdidWlsZGluZycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNraWxsU2V0UGFnZTtcclxuICAgICAgICAgICAgfSgpKTtcclxuICAgICAgICAgICAgZXhwb3J0c18zKFwiU2tpbGxTZXRQYWdlXCIsIFNraWxsU2V0UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NjcmlwdHMvcGFnZXMvc2tpbGxzZXQudHNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);