Polyglot
========
Polyglot is a node module to search moves in polyglot format opening books.

## Installation
Make sure you have [node.js](http://nodejs.org/) installed. Then do:

    $ npm install polyglot-chess

## Example
```js
var Polyglot = require('polyglot-chess').Polyglot;

var obj = new Polyglot();

var fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
console.log("Polyglot hash for fen " + fen + " is: " + obj.hash(fen));
console.log("Best move in the book is: " + obj.find(fen, "book.bin", true));
console.log("Random move in the book is: " + obj.find(fen, "book.bin", false));
```

## API

### Functions
Polyglot exposes following functions -

#### find(fen, bookFile, findBest)
find takes a book file path and a polyglot format hash and looks up the hash in
the book file. If findBest is true it returns the best move according to the
weight otherwise it returns a random move with the given hash.

#### hash(fen)
hash takes a fen string and returns its polyglot hash.

## Contributing
Fork, pick an issue to fix from [issues](https://github.com/imor/polyglot/issues)
or add a missing feature and send a pull request.

## Credits
This work is derivative of the excellent [stockfish](https://github.com/mcostalba/Stockfish)
polyglot book source code.

## License
Polyglot is released under the MIT License. See the bundled LICENSE file for
details.
