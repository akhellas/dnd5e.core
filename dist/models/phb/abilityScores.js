"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var enumerations_1 = require("./enumerations");
var dice_1 = require("./dice");
var AbilityScore = (function () {
    function AbilityScore(name, value) {
        this.name = name;
        this.value = value;
    }
    AbilityScore.prototype.modifier = function () {
        return Math.floor((this.value) - 10 / 2);
    };
    AbilityScore.roll = function () {
        return dice_1.Die.roll(6, 4, enumerations_1.RollPolicy.Max, 3);
    };
    return AbilityScore;
}());
exports.AbilityScore = AbilityScore;
var Strength = (function (_super) {
    __extends(Strength, _super);
    function Strength(value) {
        _super.call(this, "Strength", value);
    }
    return Strength;
}(AbilityScore));
exports.Strength = Strength;
var Dexterity = (function (_super) {
    __extends(Dexterity, _super);
    function Dexterity(value) {
        _super.call(this, "Strength", value);
    }
    return Dexterity;
}(AbilityScore));
exports.Dexterity = Dexterity;
