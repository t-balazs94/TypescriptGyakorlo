"use strict";
exports.__esModule = true;
function univerzalisTombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTomb;
}
