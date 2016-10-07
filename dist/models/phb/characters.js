"use strict";
var Character = (function () {
    function Character(name) {
        this.name = name;
        console.log("Created character with name: " + this.name);
    }
    return Character;
}());
exports.Character = Character;
