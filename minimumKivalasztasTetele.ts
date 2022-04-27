export { };
function minimumKivTetele(vizsgalandoTomb: Array<number>): number {
    let minimumErtek: number = vizsgalandoTomb[0];
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] < minimumErtek) {
            minimumErtek = vizsgalandoTomb[i];
        }
    }
    return minimumErtek;
}