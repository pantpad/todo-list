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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst DOM = (function () {\n\n    //RECURRENT DOM ELEMENTS\n    //TASKS DOM ELEMENTS\n    const currentProject = document.getElementById('project-name');\n    //PROJECTS DOM ELEMENTS\n    const projectsTab = document.querySelector('.projects-tab');\n    const projectForm = document.querySelector('.add-project-form');\n    const projectInput = document.getElementById('form-input');\n    const colorInput = document.getElementById('color-selection');\n\n    const add = document.querySelector('.add-project');\n    const save = document.getElementById('save-form');\n    const cancel = document.getElementById('cancel-form');\n\n\n    //PROJECTS\n    function loadProjects() {\n        projectsTab.textContent = '';\n\n        _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.forEach(project => {\n            //create li\n            const newProject = document.createElement('li');\n            newProject.className = 'project';\n            //add icon\n            const icon = document.createElement('i');\n            icon.className = project.icon ?? `circle`;\n            icon.style.backgroundColor = project.color;\n            //add a\n            const aTag = document.createElement('a');\n            aTag.textContent = project.name;\n            //append to li\n            newProject.appendChild(icon);\n            newProject.appendChild(aTag);\n\n            //add event listener to each project\n            newProject.addEventListener('click',(e) => taskTitle(project.name));\n\n            //append to ul\n            projectsTab.appendChild(newProject);\n        });\n    }\n\n    //PROJECTS EVENTLISTENERS\n\n    //event listeners for creating a new project\n    function newProjectEventListeners() {\n        add.addEventListener('click', (e) => { showProjectForm(e) });\n\n        save.addEventListener('click', (e) => { processProjectInput(e) });\n\n        cancel.addEventListener('click', (e) => { hideProjectForm(e) });\n\n        function showProjectForm(e) {\n            e.preventDefault();\n            projectForm.classList.remove('hidden');\n\n            document.getElementById('form-input').focus();\n        }\n\n        function hideProjectForm() {\n            projectInput.value = '';\n            projectForm.classList.add('hidden');\n        }\n\n        function processProjectInput(e) {\n            e.preventDefault();\n            _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(projectInput.value,colorInput.value);\n            hideProjectForm();\n        }\n\n    }\n\n    function taskTitle(projectName){\n        currentProject.textContent = projectName; \n    }\n\n    function runEventListeners() {\n        newProjectEventListeners();\n    }\n\n    runEventListeners();\n\n    return { loadProjects };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nconst projects = (() => {\n\n    let projectList = [];\n\n    function Project(name,icon,color){\n        return {name,icon,color};\n    }\n\n    const home = Project('Home','fa-solid fa-inbox');\n    projectList.push(home);\n\n    const today = Project('Today','fa-solid fa-calendar-day');\n    projectList.push(today);\n\n    const week = Project('This Week','fa-solid fa-calendar-week');\n    projectList.push(week);\n\n    function addProject(name,color){\n        const project = Project(name,null,color);\n        projectList.push(project);\n        _DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects();\n    }\n\n    return {projectList,addProject}\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

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