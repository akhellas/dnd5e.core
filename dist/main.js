"use strict";
function hello(compiler) {
    console.log("Hello from " + compiler);
}
hello("TypeScript");
var characters_1 = require("./models/phb/characters");
var races = require("./models/phb/races");
function generate(name) {
    var character = new characters_1.Character(name);
    character.race = new races.Race("");
    console.log(character);
    return character;
}
generate("Aramil");
