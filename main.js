/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ \"./src/createProject.js\");\n\n\n\nconst UI = (function () {\n\n    function loadProjects(){\n        const projectsTab = document.querySelector('.projects-tab');\n        projectsTab.textContent = '';\n        \n        _projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.forEach(project => {\n            \n            //create li\n            const newProject = document.createElement('li');\n            newProject.className = 'project';\n            //add icon\n            const icon = document.createElement('i');\n            icon.className = 'fa-solid fa-list';\n            //add a\n            const aTag = document.createElement('a');\n            aTag.textContent = project.name;\n            //append to li\n            newProject.appendChild(icon);\n            newProject.appendChild(aTag);\n            //append to ul\n            projectsTab.appendChild(newProject);\n        });\n    }\n\n    _createProject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].runProjectEventListeners();\n\n    return {loadProjects};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\nconst createProject = (function () {\n\n    //event listeners for creating a new project\n    const runProjectEventListeners = () => {\n        const add = document.querySelector('.add-project');\n        add.addEventListener('click', (e) => {showProjectForm(e)});\n\n        const save = document.getElementById('save-form');\n        save.addEventListener('click', (e) => {processProjectInput(e)});\n\n        const cancel = document.getElementById('cancel-form');\n        cancel.addEventListener('click',(e) => {hideProjectForm(e)});\n    }\n\n    function showProjectForm(e){\n        e.preventDefault();\n        const projectForm = document.querySelector('.add-project-form');\n        projectForm.classList.remove('hidden');\n\n        document.getElementById('form-input').focus();\n    }\n\n    function hideProjectForm(){\n        const projectForm = document.querySelector('.add-project-form');\n        const projectInput = document.getElementById('form-input');\n\n        projectInput.value = '';\n        projectForm.classList.add('hidden');\n    }\n\n    function processProjectInput(e){\n        e.preventDefault();\n        let projectName = document.getElementById('form-input').value;\n        _projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(projectName);\n        hideProjectForm();\n    }\n\n    return{runProjectEventListeners}\n})();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/createProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\n\nconst projects = (() => {\n\n    let projectList = [];\n\n    function Project(name){\n        return {name};\n    }\n\n    function addProject(name){\n        const project = Project(name);\n        projectList.push(project);\n        _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects();\n    }\n\n    return {projectList,addProject}\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;