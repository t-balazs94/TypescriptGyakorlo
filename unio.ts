export { };

function unioMuvelet(vizsgalandoTomb1: Array<number>, vizsgalandoTomb2: Array<number>): Array<number> {
    let unio: Array<number> = [];
    for (let i = 0; i < vizsgalandoTomb1.length; i++) {
        let szerepelE: boolean = false;
        for (let j = 0; j < unio.length; j++) {
            if (vizsgalandoTomb1[i] == unio[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            unio.push(vizsgalandoTomb1[i]);
        }
    }
    for (let i = 0; i < vizsgalandoTomb2.length; i++) {
        let szerepelE: boolean = false;
        for (let j = 0; j < unio.length; j++) {
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