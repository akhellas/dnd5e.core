import { IAbilityScore } from "./abilityScores";
import { ISkill } from "./skills";
import { IHitPoints } from "./hitPoints";

export interface ICharacter {
    name: string;
    player: string;
    classes: Array<string>;
    level: number;
    background: string;
    race: string;
    alignment: string;
    experiencePoints: number;



    //skills
    acrobatics: ISkill;
    animalHandling: ISkill;
    arcana: ISkill;
    athletics: ISkill;
    deception: ISkill;
    history: ISkill;
    insight: ISkill;
    intimidation: ISkill;
    investigation: ISkill;
    medicine: ISkill;
    nature: ISkill;
    perception: ISkill;
    performance: ISkill;
    persuasion: ISkill;
    religion: ISkill;
    sleightOfHand: ISkill;
    stealth: ISkill;
    survival: ISkill;

    speed: number;

    hitPoints: IHitPoints;

    readonly armorClass: number;
    readonly initiative: number;

    abilityCheck(abilityScore: IAbilityScore, difficultyCheck: number): boolean;
    savingThrow(abilityScore: IAbilityScore, difficultyCheck: number): boolean;
    skillCheck(skill: ISkill, difficultyCheck: number): boolean;
}

