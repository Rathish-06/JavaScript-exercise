// Returning a value from a function

var getMessage;
var getMyMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

getMyMessage=function(){
    return "This is my custom message!";
}
response = getMessage();

console.log(response);