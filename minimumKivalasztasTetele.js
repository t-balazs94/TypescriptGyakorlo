"use strict";
exports.__esModule = true;
function minimumKivTetele(vizsgalandoTomb) {
    var minimumErtek = vizsgalandoTomb[0];
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] < minimumErtek) {
            minimumErtek = vizsgalandoTomb[i];
        }
    }
    return minimumErtek;
}
