"use strict";
exports.__esModule = true;
function atlagSzamitasTetele(vizsgalandoTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        osszeg += vizsgalandoTomb[i];
    }
    return osszeg / vizsgalandoTomb.length;
}
