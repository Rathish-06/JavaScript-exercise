// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

//Creating a getBig Function
var getBig = function (str) {
    return str.toUpperCase();
};

// Testing getBig function
var planet = "Jupiter";
var bigPlanet = getBig(planet);
console.log(planet + " becomes " + bigPlanet);  // Output: Jupiter becomes JUPITER


//creating a getSmall Function
var getSmall = function (str) {
    return str.toLowerCase();
};

// Testing getSmall function
var country = "FRANCE";
var smallCountry = getSmall(country);
console.log(country + " becomes " + smallCountry);  // Output: FRANCE becomes france
