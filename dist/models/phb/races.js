"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var enumerations = require("./enumerations");
var traits_1 = require("./traits");
var Race = (function () {
    function Race() {
        this.traits = [];
    }
    Race.prototype.apply = function (character) {
        character.size = enumerations.CreatureSize.Medium;
    };
    return Race;
}());
exports.Race = Race;
var Dwarf = (function (_super) {
    __extends(Dwarf, _super);
    function Dwarf() {
        _super.call(this);
        var dpt = new traits_1.ProficiencyTrait(["battleaxe, handaxe, throwing hammer, warhammer"]);
        this.traits.push(dpt);
    }
    Dwarf.prototype.apply = function (character) {
        _super.prototype.apply.call(this, character);
        character.speed = 25;
    };
    return Dwarf;
}(Race));
exports.Dwarf = Dwarf;
var HillDwarf = (function (_super) {
    __extends(HillDwarf, _super);
    function HillDwarf() {
        _super.call(this);
    }
    HillDwarf.prototype.apply = function (character) {
        _super.prototype.apply.call(this, character);
    };
    return HillDwarf;
}(Dwarf));
exports.HillDwarf = HillDwarf;
var MountainDwarf = (function (_super) {
    __extends(MountainDwarf, _super);
    function MountainDwarf() {
        _super.call(this);
    }
    MountainDwarf.prototype.apply = function (character) {
        _super.prototype.apply.call(this, character);
    };
    return MountainDwarf;
}(Dwarf));
exports.MountainDwarf = MountainDwarf;
