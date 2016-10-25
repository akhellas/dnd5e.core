"use strict";
(function (SkillType) {
    SkillType[SkillType["Acrobatics"] = 0] = "Acrobatics";
    SkillType[SkillType["AnimalHandling"] = 1] = "AnimalHandling";
    SkillType[SkillType["Arcana"] = 2] = "Arcana";
    SkillType[SkillType["Athletics"] = 3] = "Athletics";
    SkillType[SkillType["Deception"] = 4] = "Deception";
    SkillType[SkillType["History"] = 5] = "History";
    SkillType[SkillType["Insight"] = 6] = "Insight";
    SkillType[SkillType["Intimidation"] = 7] = "Intimidation";
    SkillType[SkillType["Investigation"] = 8] = "Investigation";
    SkillType[SkillType["Medicine"] = 9] = "Medicine";
    SkillType[SkillType["Nature"] = 10] = "Nature";
    SkillType[SkillType["Perception"] = 11] = "Perception";
    SkillType[SkillType["Performance"] = 12] = "Performance";
    SkillType[SkillType["Persuasion"] = 13] = "Persuasion";
    SkillType[SkillType["Religion"] = 14] = "Religion";
    SkillType[SkillType["SleightOfHand"] = 15] = "SleightOfHand";
    SkillType[SkillType["Stealth"] = 16] = "Stealth";
    SkillType[SkillType["Survival"] = 17] = "Survival";
})(exports.SkillType || (exports.SkillType = {}));
var SkillType = exports.SkillType;
var Skill = (function () {
    function Skill() {
    }
    return Skill;
}());
exports.Skill = Skill;
