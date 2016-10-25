"use strict";
(function (CreatureSize) {
    CreatureSize[CreatureSize["Tiny"] = 0] = "Tiny";
    CreatureSize[CreatureSize["Smalll"] = 1] = "Smalll";
    CreatureSize[CreatureSize["Medium"] = 2] = "Medium";
    CreatureSize[CreatureSize["Large"] = 3] = "Large";
    CreatureSize[CreatureSize["Huge"] = 4] = "Huge";
    CreatureSize[CreatureSize["Gargantuan"] = 5] = "Gargantuan";
})(exports.CreatureSize || (exports.CreatureSize = {}));
var CreatureSize = exports.CreatureSize;
(function (CreatureType) {
    CreatureType[CreatureType["Aberration"] = 0] = "Aberration";
    CreatureType[CreatureType["Beast"] = 1] = "Beast";
    CreatureType[CreatureType["Celestial"] = 2] = "Celestial";
    CreatureType[CreatureType["Construct"] = 3] = "Construct";
    CreatureType[CreatureType["Dragon"] = 4] = "Dragon";
    CreatureType[CreatureType["Elemental"] = 5] = "Elemental";
    CreatureType[CreatureType["Fey"] = 6] = "Fey";
    CreatureType[CreatureType["Fiend"] = 7] = "Fiend";
    CreatureType[CreatureType["Giant"] = 8] = "Giant";
    CreatureType[CreatureType["Humanoid"] = 9] = "Humanoid";
    CreatureType[CreatureType["Monstrosity"] = 10] = "Monstrosity";
    CreatureType[CreatureType["Ooze"] = 11] = "Ooze";
    CreatureType[CreatureType["Plant"] = 12] = "Plant";
    CreatureType[CreatureType["Undead"] = 13] = "Undead";
})(exports.CreatureType || (exports.CreatureType = {}));
var CreatureType = exports.CreatureType;
(function (Alignment) {
    Alignment[Alignment["LG"] = 0] = "LG";
    Alignment[Alignment["NG"] = 1] = "NG";
    Alignment[Alignment["CG"] = 2] = "CG";
    Alignment[Alignment["LN"] = 3] = "LN";
    Alignment[Alignment["N"] = 4] = "N";
    Alignment[Alignment["CN"] = 5] = "CN";
    Alignment[Alignment["LE"] = 6] = "LE";
    Alignment[Alignment["NE"] = 7] = "NE";
    Alignment[Alignment["CE"] = 8] = "CE";
})(exports.Alignment || (exports.Alignment = {}));
var Alignment = exports.Alignment;
