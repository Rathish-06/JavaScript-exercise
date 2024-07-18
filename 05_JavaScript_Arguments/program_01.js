// Relying on a variable outside of the function
 
var message;
var showMessage;

message = "The universe is vast!";
showMessage();
  
showMessage = function () {
    console.log(message);
};

showMessage();