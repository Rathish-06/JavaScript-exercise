// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));
//Using indexOf to Find "go"
var message = "We choose to go to the Moon!";

var startIndex = message.indexOf("go");
console.log("Index of 'go':", startIndex);


//Using indexOf and substr to Display "choose"
var message = "We choose to go to the Moon!";

var moonIndex = message.lastIndexOf("oo");
console.log("Index of 'oo' in 'Moon':", moonIndex);