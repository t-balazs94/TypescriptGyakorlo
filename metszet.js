"use strict";
exports.__esModule = true;
function metszetMuvelet(vizsgalandoTomb1, vizsgalandoTomb2) {
    var metszet = [];
    for (var i = 0; i < vizsgalandoTomb1.length; i++) {
        for (var j = 0; j < vizsgalandoTomb2.length; j++) {
            if (vizsgalandoTomb1[i] == vizsgalandoTomb2[j]) {
                var szerepelE = false;
                for (var k = 0; k < metszet.length; k++) {
                    if (vizsgalandoTomb1[i] == metszet[k]) {
                        szerepelE = true;
                    }
                }
                if (szerepelE == false) {
                    metszet.push(vizsgalandoTomb1[i]);
                }
            }
        }
    }
    return metszet;
}
