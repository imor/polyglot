'use strict';

var polyglotInternal = require('../build/Release/polyglot');
var Chess = require('chess.js').Chess;

var Polyglot = function() {
    var pieceTypes = {
        bp: 0,
        wp: 1,
        bn: 2,
        wn: 3,
        bb: 4,
        wb: 5,
        br: 6,
        wr: 7,
        bq: 8,
        wq: 9,
        bk: 10,
        wk: 11
    };

    var files = "abcdefgh";

    this.polyglotInternal = polyglotInternal;
    Polyglot.prototype.find = function(fen, bookFile, findBest) {
        var self = this;
        var game = new Chess(fen);
        var key = self.hash(fen);
        return self.polyglotInternal.find(key, bookFile, findBest);
    };

    Polyglot.prototype.hash = function(fen) {
        var self = this;
        var game = new Chess(fen);
        var result = game.validate_fen(fen);
        if (!result.valid) {
            throw result.error;
        }
        //Calculate piece offsets
        var pieceOffsets = [];
        for (var file = 0;file < 8;file++) {
            for (var rank = 1;rank <= 8;rank++) {
                var piece = game.get(files[file] + rank);
                if (piece) {
                    pieceOffsets.push(64 * pieceTypes[piece.color + piece.type] + 8 * (rank - 1) + file);
                }
            }
        }
        //Calculate castling offsets
        var castlingOffsets = [];
        var fenTokens = game.fen().split(' ');
        var castlingField = fenTokens[2];
        if (castlingField.indexOf('K') != -1) {
            castlingOffsets.push(0);
        }
        if (castlingField.indexOf('Q') != -1) {
            castlingOffsets.push(1);
        }
        if (castlingField.indexOf('k') != -1) {
            castlingOffsets.push(2);
        }
        if (castlingField.indexOf('q') != -1) {
            castlingOffsets.push(3);
        }
        //Calculate enpassant offsets
        var epOffset = -1;
        var fenEpSquare = fenTokens[3];
        if (fenEpSquare !== '-') {
            fenEpSquare = fenEpSquare[0] + (game.turn() === 'w' ? '5' : '4');
            var epSquareIndex = files.indexOf(fenEpSquare[0]);
            if (epSquareIndex > 0) {
                var leftPiece = game.get(files[epSquareIndex - 1] + fenEpSquare[1]);
                if (leftPiece && leftPiece.type === 'p' &&
                    leftPiece.color === game.turn()) {
                    epOffset = epSquareIndex;
                }
            }
            if (epSquareIndex < 7) {
                var rightPiece = game.get(files[epSquareIndex + 1] + fenEpSquare[1]);
                if (rightPiece && rightPiece.type === 'p' &&
                    rightPiece.color === game.turn()) {
                    epOffset = epSquareIndex;
                }
            }
        }
        //Calculate white turn
        var isWhitesTurn = game.turn() === 'w';
        return self.polyglotInternal.hash(pieceOffsets, castlingOffsets, epOffset, isWhitesTurn);
    };
};

module.exports = Polyglot;
