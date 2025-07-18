//logical operators

const country = true;
const englishLanguage = true;
const hasLessThan50millionPopulation = true;
const island = false;

console.log(country && englishLanguage && hasLessThan50millionPopulation && !island); // true

if (country && englishLanguage && hasLessThan50millionPopulation && !island) {
    console.log("You should live in Portugal");
}
else {
    console.log("You should not live in Potugal");
}