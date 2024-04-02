"use strict";
//storing a person name in a variable
let personName = "Fari Idrees";
//printing a person name in lowercase
console.log("Lowercase:", personName.toLowerCase());
//printing a person name in uppercase
console.log("Uppercase:", personName.toUpperCase());
//printing a person name in titlecase
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
