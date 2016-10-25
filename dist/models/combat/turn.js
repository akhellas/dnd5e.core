"use strict";
var Turn = (function () {
    function Turn(round) {
        this.round = round;
    }
    Object.defineProperty(Turn.prototype, "compatant", {
        get: function () {
            var index = this.round.combat.rounds.indexOf(this.round);
            return this.round.combat.compatants[index];
        },
        enumerable: true,
        configurable: true
    });
    return Turn;
}());
exports.Turn = Turn;
