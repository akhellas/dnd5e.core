import { AbilityScoreType } from "./abilityScores";

export enum SkillType {
    Acrobatics,
    AnimalHandling,
    Arcana,
    Athletics,
    Deception,
    History,
    Insight,
    Intimidation,
    Investigation,
    Medicine,
    Nature,
    Perception,
    Performance,
    Persuasion,
    Religion,
    SleightOfHand,
    Stealth,
    Survival
}

export interface ISkill {
    type: SkillType;
    abilityScore: AbilityScoreType;
    proficient: boolean;
}

export class Skill implements ISkill {
    type: SkillType;
    proficient: boolean;
    abilityScore: AbilityScoreType;
}