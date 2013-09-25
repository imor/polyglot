'use strict';

var Polyglot = require('polyglot-chess').Polyglot;

var obj = new Polyglot();

var fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
console.log("Polyglot hash for fen " + fen + " is: " + obj.hash(fen));
console.log("Best move in the book is: " + obj.find(fen, "book.bin", true));
console.log("Random move in the book is: " + obj.find(fen, "book.bin", false));
