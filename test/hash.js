'use strict';
/* global suite:true, test:true */
var assert = require('assert');
var Polyglot = require('../lib/main.js');
var polyglot = new Polyglot();

suite('Polyglot', function() {
    suite('#hash()', function() {
        test('of fen rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1 should be 5060803636482931868', function() {
            assert.equal(polyglot.hash('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'), '5060803636482931868');
        });
        test('of fen rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1 should be 9384546495678726550', function() {
            assert.equal(polyglot.hash('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1'), '9384546495678726550');
        });
        test('of fen rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2 should be 528813709611831216', function() {
            assert.equal(polyglot.hash('rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2'), '528813709611831216');
        });
        test('of fen rnbqkbnr/ppp1pppp/8/3pP3/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2 should be 7363297126586722772', function() {
            assert.equal(polyglot.hash('rnbqkbnr/ppp1pppp/8/3pP3/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2'), '7363297126586722772');
        });
        test('of fen rnbqkbnr/ppp1p1pp/8/3pPp2/8/8/PPPP1PPP/RNBQKBNR w KQkq f6 0 3 should be 2496273314520498040', function() {
            assert.equal(polyglot.hash('rnbqkbnr/ppp1p1pp/8/3pPp2/8/8/PPPP1PPP/RNBQKBNR w KQkq f6 0 3'), '2496273314520498040');
        });
        test('of fen rnbqkbnr/ppp1p1pp/8/3pPp2/8/8/PPPPKPPP/RNBQ1BNR b kq - 0 3 should be 7289745035295343297', function() {
            assert.equal(polyglot.hash('rnbqkbnr/ppp1p1pp/8/3pPp2/8/8/PPPPKPPP/RNBQ1BNR b kq - 0 3'), '7289745035295343297');
        });
        test('of fen rnbq1bnr/ppp1pkpp/8/3pPp2/8/8/PPPPKPPP/RNBQ1BNR w - - 0 4 should be 71445182323015129', function() {
            assert.equal(polyglot.hash('rnbq1bnr/ppp1pkpp/8/3pPp2/8/8/PPPPKPPP/RNBQ1BNR w - - 0 4'), '71445182323015129');
        });
        test('of fen rnbqkbnr/p1pppppp/8/8/PpP4P/8/1P1PPPP1/RNBQKBNR b KQkq c3 0 3 should be 4359805404264691255', function() {
            assert.equal(polyglot.hash('rnbqkbnr/p1pppppp/8/8/PpP4P/8/1P1PPPP1/RNBQKBNR b KQkq c3 0 3'), '4359805404264691255');
        });
        test('of fen rnbqkbnr/p1pppppp/8/8/P6P/R1p5/1P1PPPP1/1NBQKBNR b Kkq - 0 4 should be 6647202560273257824', function() {
            assert.equal(polyglot.hash('rnbqkbnr/p1pppppp/8/8/P6P/R1p5/1P1PPPP1/1NBQKBNR b Kkq - 0 4'), '6647202560273257824');
        });
    });
});
