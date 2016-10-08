"use strict";
var phb = require("./models/phb/phb");
function generate() {
    var character = new phb.Character("Bruenor");
    character.print();
}
exports.generate = generate;
