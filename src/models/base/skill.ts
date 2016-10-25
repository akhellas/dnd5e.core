import { AbilityScoreType } from "./abilityScore";
import { ICreature } from "./creature";
import { Die, RollPolicy } from "./dice";

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

export interface ISkills {
    Acrobatics: number;
    AnimalHandling: number;
    Arcana: number;
    Athletics: number;
    Deception: number;
    History: number;
    Insight: number;
    Intimidation: number;
    Investigation: number;
    Medicine: number;
    Nature: number;
    Perception: number;
    Performance: number;
    Persuasion: number;
    Religion: number;
    SleightOfHand: number;
    Stealth: number;
    Survival: number;
}

export function skillCheck(creature: ICreature, skill: SkillType, difficultyCheck: number, withAdvantage: boolean = false): boolean {
    let roll = Die.roll(20, withAdvantage ? 2 : 1, RollPolicy.Max);
    return false;
}