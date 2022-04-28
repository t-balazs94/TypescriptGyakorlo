"use strict";
exports.__esModule = true;
function unioMuvelet(vizsgalandoTomb1, vizsgalandoTomb2) {
    var unio = [];
    for (var i = 0; i < vizsgalandoTomb1.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < unio.length; j++) {
            if (vizsgalandoTomb1[i] == unio[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            unio.push(vizsgalandoTomb1[i]);
        }
    }
    for (var i = 0; i < vizsgalandoTomb2.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < unio.length; j++) {
            if (vizsgalandoTomb2[i] == unio[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            unio.push(vizsgalandoTomb2[i]);
        }
    }
    return unio;
}
