export { };
function megszamlalasTetele(vizsgalandoTomb: Array<number>): number {
    let darab: number = 0;
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % 2 == 0) {
            darab++
        }
    }
    return darab;
}