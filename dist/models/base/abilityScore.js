"use strict";
var dice_1 = require("./dice");
(function (AbilityScoreType) {
    AbilityScoreType[AbilityScoreType["Strength"] = 0] = "Strength";
    AbilityScoreType[AbilityScoreType["Dexterity"] = 1] = "Dexterity";
    AbilityScoreType[AbilityScoreType["Constitution"] = 2] = "Constitution";
    AbilityScoreType[AbilityScoreType["Intelligence"] = 3] = "Intelligence";
    AbilityScoreType[AbilityScoreType["Wisdom"] = 4] = "Wisdom";
    AbilityScoreType[AbilityScoreType["Charisma"] = 5] = "Charisma";
})(exports.AbilityScoreType || (exports.AbilityScoreType = {}));
var AbilityScoreType = exports.AbilityScoreType;
var AbilityScore = (function () {
    function AbilityScore(type) {
        this.type = type;
    }
    Object.defineProperty(AbilityScore.prototype, "modifier", {
        get: function () {
            return Math.floor((this.value) - 10 / 2);
        },
        enumerable: true,
        configurable: true
    });
    AbilityScore.roll = function () {
        return dice_1.Die.roll(6, 4, dice_1.RollPolicy.Max, 3);
    };
    return AbilityScore;
}());
exports.AbilityScore = AbilityScore;
