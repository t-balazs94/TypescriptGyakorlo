export { };
function maxKivTetele(vizsgalandoTomb: Array<number>): number {
    let maxErtek: number = vizsgalandoTomb[0];
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] > maxErtek) {
            maxErtek = vizsgalandoTomb[i];
        }
    }
    return maxErtek;
}