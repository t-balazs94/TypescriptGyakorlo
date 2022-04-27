"use strict";
exports.__esModule = true;
function maxKivTetele(vizsgalandoTomb) {
    var maxErtek = vizsgalandoTomb[0];
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] > maxErtek) {
            maxErtek = vizsgalandoTomb[i];
        }
    }
    return maxErtek;
}
