/**********************************************
* JavaScript for Beginners
* JS101 - JSON Demo
*
* BASICS   : JSON Format
* STRINGIFY: Javascript to JSON
* PARSE    : JSON to JavaScript
**********************************************/

// Think of a simple JavaScript object with data (property values)
const book = new Object({ title : "1984", author: "George Orwell"});
console.log("\n --------- ")
console.log(typeof book);
console.log(book);

/*
// You can also have a collection of these object
const myBooks = [
    new Object({ title : "1984", author: "George Orwell"}),
    new Object({ title : "Becoming", author: "Michelle Obama"}),
    new Object({ title : "Snow Crash", author: "Neal Stephenson"}),
    new Object({ title : "Predictably Irrational", author: "Dan Ariely"}) 
];