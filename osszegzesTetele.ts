export { };

function osszegzesTetele(vizsgaltTomb: Array<number>): number {
    let osszeg: number = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}