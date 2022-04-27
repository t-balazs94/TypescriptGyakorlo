"use strict";
exports.__esModule = true;
function kivalogatasTetele(vizsgalandoTomb) {
    var kivalogatottSzamok = [];
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 2 == 0) {
            kivalogatottSzamok.push(vizsgalandoTomb[i]);
        }
    }
    return kivalogatottSzamok;
}
