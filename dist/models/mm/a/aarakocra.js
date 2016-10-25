"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var monster_1 = require("../monster");
var Aarakocra = (function (_super) {
    __extends(Aarakocra, _super);
    function Aarakocra() {
        _super.call(this);
    }
    return Aarakocra;
}(monster_1.Monster));
exports.Aarakocra = Aarakocra;
var AarakocraSimple = (function () {
    function AarakocraSimple() {
        this.size = "Medium";
        this.type = "Humanoid";
        this.tags = ["aarakocra"];
        this.alignment = "NG";
        this.ac = 12;
        this.hp = 13;
        this.hd = "3d8";
        this.speed = 20;
        this.flySpeed = 50;
        this.STR = 10;
        this.DEX = 14;
        this.CON = 10;
        this.INT = 11;
        this.WIS = 12;
        this.CHA = 11;
        this.perception = 5;
        this.passivePerception = 15;
        this.languages = ["Auran"];
        this.CR = 0.25;
    }
    return AarakocraSimple;
}());
exports.AarakocraSimple = AarakocraSimple;
