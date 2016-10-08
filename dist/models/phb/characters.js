"use strict";
var races_1 = require("./races");
var classes_1 = require("./classes");
var Character = (function () {
    function Character(name, race, characterClass) {
        if (name === void 0) { name = ""; }
        if (race === void 0) { race = new races_1.Dwarf; }
        if (characterClass === void 0) { characterClass = new classes_1.Fighter; }
        this.name = name;
        this.race = race;
        this.classes = [characterClass];
        race.apply(this);
    }
    Object.defineProperty(Character.prototype, "level", {
        get: function () {
            return this.classes
                .map(function (x) { return x.level; })
                .reduce(function (a, b) { return a + b; });
        },
        enumerable: true,
        configurable: true
    });
    Character.prototype.print = function () {
        console.log("\nDnD 5E Character Sheet\n");
        console.log("Name: " + this.name + " " + this.surname);
        console.log(this);
        console.log(this.race.traits);
        console.log("\n");
    };
    return Character;
}());
exports.Character = Character;
