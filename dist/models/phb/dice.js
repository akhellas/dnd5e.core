"use strict";
var enumerations_1 = require("./enumerations");
var Die = (function () {
    function Die(name, value) {
        this.name = name;
        this.value = value;
    }
    Die.roll = function (die, times, policy, include) {
        if (die === void 0) { die = 20; }
        if (times === void 0) { times = 1; }
        if (policy === void 0) { policy = enumerations_1.RollPolicy.Sum; }
        if (include === void 0) { include = 1; }
        var result = 0;
        var rolls = [];
        for (var index = 0; index < times; index++) {
            rolls.push(Math.floor((Math.random() * die) + 1));
        }
        rolls.sort();
        if (policy == enumerations_1.RollPolicy.Max) {
            rolls.reverse();
        }
        var included = policy == enumerations_1.RollPolicy.Sum ? rolls.slice(0) : rolls.slice(0, include);
        result = included.reduce(function (a, b) { return a + b; });
        console.log("Roll " + times + "d" + die + " : " + rolls + " (" + enumerations_1.RollPolicy[policy] + " " + include + ") => " + result);
        return result;
    };
    return Die;
}());
exports.Die = Die;
