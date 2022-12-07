/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("const enableWebcamButton = document.getElementById('webcamButton');\nconst video = document.getElementById('webcam'); // Stream.\n\nenableWebcamButton.addEventListener('click', enableCam);\nfunction enableCam(event) {\n  console.log(`start video`);\n  // getUsermedia parameters to force video but not audio.\n  const constraints = {\n    video: true\n  };\n\n  // Activate the webcam stream.\n  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {\n    video.srcObject = stream;\n    // video.addEventListener('loadeddata', predictWebcam);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJlbmFibGVXZWJjYW1CdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmlkZW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZW5hYmxlQ2FtIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY29uc3RyYWludHMiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwic3RyZWFtIiwic3JjT2JqZWN0Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0X3dlYnBhY2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbmFibGVXZWJjYW1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViY2FtQnV0dG9uJyk7XG5jb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJjYW0nKTsgIC8vIFN0cmVhbS5cblxuZW5hYmxlV2ViY2FtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5hYmxlQ2FtKTtcblxuZnVuY3Rpb24gZW5hYmxlQ2FtKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGBzdGFydCB2aWRlb2ApO1xuICAvLyBnZXRVc2VybWVkaWEgcGFyYW1ldGVycyB0byBmb3JjZSB2aWRlbyBidXQgbm90IGF1ZGlvLlxuICBjb25zdCBjb25zdHJhaW50cyA9IHtcbiAgICB2aWRlbzogdHJ1ZVxuICB9O1xuXG4gIC8vIEFjdGl2YXRlIHRoZSB3ZWJjYW0gc3RyZWFtLlxuICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cykudGhlbihmdW5jdGlvbihzdHJlYW0pIHtcbiAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgLy8gdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIHByZWRpY3RXZWJjYW0pO1xuICB9KTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsa0JBQWtCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUNsRSxNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUU7O0FBRWxERixrQkFBa0IsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxTQUFTLENBQUM7QUFFdkQsU0FBU0EsU0FBUyxDQUFDQyxLQUFLLEVBQUU7RUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLGFBQVksQ0FBQztFQUMxQjtFQUNBLE1BQU1DLFdBQVcsR0FBRztJQUNsQk4sS0FBSyxFQUFFO0VBQ1QsQ0FBQzs7RUFFRDtFQUNBTyxTQUFTLENBQUNDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDSCxXQUFXLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLFVBQVNDLE1BQU0sRUFBRTtJQUNyRVgsS0FBSyxDQUFDWSxTQUFTLEdBQUdELE1BQU07SUFDeEI7RUFDRixDQUFDLENBQUM7QUFDSiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0X3dlYnBhY2svLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;