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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./ttt-view */ \"./src/ttt-view.js\");// require appropriate file\nconst Game = __webpack_require__(/*! ./ttt-game */ \"./src/ttt-game.js\");// require appropriate file\n\nwindow.Game = Game;\nwindow.View = View;\n\n  $(() => {\n    // Your code here\n    let game = new Game();\n    let $el = $(\".ttt\");\n    new View(game, $el)\n  });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ttt-game.js":
/*!*************************!*\
  !*** ./src/ttt-game.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n    constructor() {\n        this.currentPlayer = \"x\";\n    }\n\n    switchPlayer() {\n        this.currentPlayer = this.currentPlayer === \"x\" ? \"o\" : \"x\"; \n    }\n    // alternate player moves\n    \n    playMove($tile, checkwon) {\n        // change tile color\n        // add x or o text to tile\n        // switch player\n        if ($tile.text() === \"\") {\n            $tile.text(this.currentPlayer);\n\n            //callback to methods in ttt-view\n            checkwon(this.currentPlayer);\n\n            this.switchPlayer();\n        }\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/ttt-game.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./ttt-game */ \"./src/ttt-game.js\")\n\nconst CONSTANTS = {\n  BOARD_DIM: 3,\n}\n\nclass View {\n  constructor(game, $el) {\n    this.game = game;\n    this.$el = $el;\n    this.dim = CONSTANTS.BOARD_DIM;\n    this.setupBoard();\n    this.bindEvents();\n    this.hasDiagMatch();\n    this.hasRowMatch();\n    this.hasColumnMatch();\n  }\n\n  // draw condition: all tiles are filled\n  // win condition: 3 in a row/column/diagonal of same mark\n  playerWon(player) {\n    \n    // return true if player has 3 in row/col/diag\n  }\n\n  hasDiagMatch(player){\n    let board = [];\n\n    $(\".tile\").each((index, el) => {\n      board.push($(el).text());\n    })\n    // alert(board[0] === \"\" ? \"empty\" : board[0])\n\n    const board2D = [];\n    while(board.length) { \n      board2D.push(board.splice(0,this.dim)); \n    }\n\n    // check left to right\n    let leftRight = true;\n    for (let i = 0; i < this.dim; i++) {\n      if (board2D[i][i] !== player) { leftRight = false }\n    }\n\n    // check right to left\n    let col = this.dim - 1;\n    let rightLeft = true;\n    for (let i = 0; i < this.dim; i++) {\n      if (board2D[i][col] !== player) { rightLeft = false }\n      col--;\n    }\n\n    // for(let i = 0; i < 3; i++){\n    //   for(let j = 0; j < 3; j++) {\n    //     if (i === j) {\n    //       if (board2D[i][j] !== player) {\n    //         leftRight = false;\n    //       }\n    //     }\n\n    //     if (board2D.length - i - 1 === j){\n    //       if (board2D[i][j] !== player) {\n    //         rightLeft = false;\n    //       }\n    //     }\n    //   }\n    // }\n\n    return (leftRight || rightLeft);\n  }\n\n  hasRowMatch(player){\n    let board = [];\n    $(\".tile\").each((index, el) => {\n      board.push($(el).text());\n    })\n\n    const board2D = [];\n    \n    \n    while (board.length) {\n      // board2D.push(board.splice(0, 3));\n      if (board.splice(0,3).every(markCheck => markCheck === player)) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  hasColumnMatch(player) {\n    let board = [];\n    $(\".tile\").each((index, el) => {\n      board.push($(el).text());\n    })\n\n    const board2D = [];\n    while (board.length) {\n      board2D.push(board.splice(0, this.dim));\n    }\n\n    let transposed = board2D[0].map((_, colIndex) => board2D.map(row => row[colIndex]));\n\n    for(let i = 0; i < transposed.length; i++) {\n      if (transposed[i].every(mark => mark === player)) {\n        return true;\n      }\n    }\n    return false;\n\n    // while (transposed.length) {\n    //   // board2D.push(board.splice(0, 3));\n    //   if (board.splice(0,3).every(markCheck => markCheck === player)) {\n    //     return true;\n    //   }\n    // }\n    // return false;\n  }\n\n  bindEvents() {\n    $(\"li\").on(\"click\", event => {\n      const $target = $(event.target);\n      $target.addClass(\"clicked\");\n      this.game.playMove($target, p => {\n        if (this.hasDiagMatch(p) || this.hasRowMatch(p) || this.hasColumnMatch(p)) {\n          alert(p + \" won!\")\n        } \n      });\n      let tiles = [];\n      $(\"li\").each((index, el) => {\n        if ($(el).text().length > 0){\n          tiles.push($(el).text());\n        }\n      })\n      if (tiles.length === this.dim * this.dim) {\n        alert(\"It is a draw!\")\n      }\n    })\n  }\n\n  makeMove($square) {\n    this.game.playMove();\n  }\n\n  setupBoard() {\n    const $newUl = $('<ul></ul>');\n    for (let i  = 0; i < this.dim * this.dim; i++){\n      const $square = $(\"<li></li>\");\n      $square.addClass(\"tile\");\n      $newUl.append($square);\n    }\n    this.$el.append($newUl);\n  }\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ })

/******/ });