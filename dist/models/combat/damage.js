"use strict";
(function (DamageType) {
    DamageType[DamageType["Acid"] = 0] = "Acid";
    DamageType[DamageType["Bludgeoning"] = 1] = "Bludgeoning";
    DamageType[DamageType["Cold"] = 2] = "Cold";
    DamageType[DamageType["Fire"] = 3] = "Fire";
    DamageType[DamageType["Force"] = 4] = "Force";
    DamageType[DamageType["Lightning"] = 5] = "Lightning";
    DamageType[DamageType["Necrotic"] = 6] = "Necrotic";
    DamageType[DamageType["Pierching"] = 7] = "Pierching";
    DamageType[DamageType["Poison"] = 8] = "Poison";
    DamageType[DamageType["Psychic"] = 9] = "Psychic";
    DamageType[DamageType["Radiant"] = 10] = "Radiant";
    DamageType[DamageType["Slashing"] = 11] = "Slashing";
    DamageType[DamageType["Thunder"] = 12] = "Thunder";
})(exports.DamageType || (exports.DamageType = {}));
var DamageType = exports.DamageType;
var Damage = (function () {
    function Damage(type, die, number, bonus) {
        this.type = type;
        this.die = die;
        this.number = number;
        this.bonus = bonus;
    }
    Damage.prototype.toString = function () {
        return this.number + "d" + this.die + "+" + this.bonus + " " + DamageType[this.type].toLowerCase() + " damage";
    };
    return Damage;
}());
exports.Damage = Damage;
function demoDamage() {
    var ssDmg = new Damage(DamageType.Pierching, 6, 1, 5);
    console.log("Short Sword Damage Demo: " + ssDmg);
}
exports.demoDamage = demoDamage;
