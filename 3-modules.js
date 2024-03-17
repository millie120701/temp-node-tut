// Modules encapsulated code (only share minimum)
// CommonJS, every file is module (by default)
// in order to share 4-names names we need to put module.exports in the 4-names
// Then use require here

const names = require("./4-names"); //always use ./ or ../ if folder up
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
