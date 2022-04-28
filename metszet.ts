export { };

function metszetMuvelet(vizsgalandoTomb1: Array<number>, vizsgalandoTomb2: Array<number>): Array<number> {
    let metszet: Array<number> = [];
    for (let i = 0; i < vizsgalandoTomb1.length; i++) {
        for (let j = 0; j < vizsgalandoTomb2.length; j++) {
            if (vizsgalandoTomb1[i] == vizsgalandoTomb2[j]) {
                let szerepelE: boolean = false;
                for (let k = 0; k < metszet.length; k++) {
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