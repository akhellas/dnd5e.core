"use strict";
var abilityScore_1 = require("../base/abilityScore");
var round_1 = require("./round");
var Combat = (function () {
    function Combat() {
        this.rounds = [];
    }
    Combat.prototype.addRound = function () {
        this.rounds.push(new round_1.Round(this));
    };
    Combat.prototype.rollInitiative = function () {
        for (var _i = 0, _a = this.compatants; _i < _a.length; _i++) {
            var compatant = _a[_i];
            compatant.rollInitiative();
        }
        this.compatants.sort(function (a, b) {
            var check = a.initiative - b.initiative;
            if (check == 0) {
                return a.abilityCheck(abilityScore_1.AbilityScoreType.Dexterity) - b.abilityCheck(abilityScore_1.AbilityScoreType.Dexterity);
            }
            return check;
        });
    };
    Combat.prototype.start = function () {
        this.rollInitiative();
    };
    return Combat;
}());
exports.Combat = Combat;
