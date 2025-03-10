function solve(){

    const array1 = [1, "a", new Date("09 March 2025 15:38:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);

}
solve();