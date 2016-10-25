"use strict";
var Round = (function () {
    function Round(combat) {
        this.combat = combat;
    }
    Object.defineProperty(Round.prototype, "index", {
        get: function () {
            return this.combat.rounds.indexOf(this);
        },
        enumerable: true,
        configurable: true
    });
    Round.prototype.start = function () {
        console.log("Round " + this.combat.rounds.length + " started !");
    };
    Round.prototype.end = function () {
        //check for ending effects
    };
    return Round;
}());
exports.Round = Round;
