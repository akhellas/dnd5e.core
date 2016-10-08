"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var enumerations = require("./enumerations");
var Race = (function () {
    function Race(name) {
        this.name = name;
        this.traits = [];
    }
    return Race;
}());
exports.Race = Race;
var Dwarf = (function (_super) {
    __extends(Dwarf, _super);
    function Dwarf(name) {
        if (name === void 0) { name = "Dwarf"; }
        _super.call(this, name);
    }
    Dwarf.apply = function (character) {
        character.size = enumerations.CreatureSize.Medium;
        character.speed = 25;
    };
    return Dwarf;
}(Race));
exports.Dwarf = Dwarf;
