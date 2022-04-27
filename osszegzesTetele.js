"use strict";
exports.__esModule = true;
function osszegzesTetele(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}
