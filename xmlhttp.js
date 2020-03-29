var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
var theUrl = "<link>";

xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json");

module.exports = xmlhttp;