export { };
function kivalogatasTetele(vizsgalandoTomb: Array<number>): Array<number> {
    let kivalogatottSzamok: Array<number> = [];
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 2 == 0) {
            kivalogatottSzamok.push(vizsgalandoTomb[i]);
        }
    }
    return kivalogatottSzamok;
}