"use strict";
(function (RollPolicy) {
    RollPolicy[RollPolicy["Max"] = 0] = "Max";
    RollPolicy[RollPolicy["Min"] = 1] = "Min";
    RollPolicy[RollPolicy["Sum"] = 2] = "Sum";
})(exports.RollPolicy || (exports.RollPolicy = {}));
var RollPolicy = exports.RollPolicy;
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
(function (CreatureSize) {
    CreatureSize[CreatureSize["Medium"] = 0] = "Medium";
    CreatureSize[CreatureSize["Small"] = 1] = "Small";
    CreatureSize[CreatureSize["Big"] = 2] = "Big";
    CreatureSize[CreatureSize["Huge"] = 3] = "Huge";
})(exports.CreatureSize || (exports.CreatureSize = {}));
var CreatureSize = exports.CreatureSize;
