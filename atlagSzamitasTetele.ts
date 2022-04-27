export { };
function atlagSzamitasTetele(vizsgalandoTomb: Array<number>): number {
    let osszeg: number = 0;
    for (let i = 0; i < vizsgalandoTomb.length; i++) {
        osszeg += vizsgalandoTomb[i];
    }
    return osszeg / vizsgalandoTomb.length;
}