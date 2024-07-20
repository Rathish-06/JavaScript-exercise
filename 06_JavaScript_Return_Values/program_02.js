// Using an argument to determine the return value

var getHelloTo;
var fullMessage;

getHelloTo = function (name) {
    return "Hello to " + name;
};

fullMessage = getHelloTo("Kandra");

console.log(fullMessage);

