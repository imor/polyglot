'use strict';

var Polyglot = require('./lib/main.js').Polyglot;

var obj = new Polyglot("SomeBook");

console.log(obj.find_best("random fen"));
console.log(obj.find_first("invalid fen"));
var fen = "rnbqkbnr/p1pppppp/8/8/P6P/R1p5/1P1PPPP1/1NBQKBNR b Kkq - 0 4";
console.log("Polyglot hash for fen " + fen + " is: " + obj.hash(fen));
