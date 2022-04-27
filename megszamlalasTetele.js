"use strict";
exports.__esModule = true;
function megszamlalasTetele(vizsgalandoTomb) {
    var darab = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 2 == 0) {
            darab++;
        }
    }
    return darab;
}
