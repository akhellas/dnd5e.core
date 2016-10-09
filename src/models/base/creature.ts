import { IAbilityScore } from "./abilityScore";
import { ISkill } from "./skill";
import { IHitPoints } from "./hitPoints";

export enum CreatureSize {
    Tiny,
    Smalll,
    Medium,
    Large,
    Huge,
    Gargantuan
}

export enum CreatureType {
    Aberration,
    Beast,
    Celestial,
    Construct,
    Dragon,
    Elemental,
    Fey,
    Fiend,
    Giant,
    Humanoid,
    Monstrosity,
    Ooze,
    Plant,
    Undead
}

export enum Alignment {
    LG,
    NG,
    CG,
    LN,
    N,
    CN,
    LE,
    NE,
    CE
}

export interface ICreature {
    name: string;
    size: CreatureSize;
    alignment: string;
    
    //ability scores
    strength: IAbilityScore;
    dexterity: IAbilityScore;
    constitution: IAbilityScore;
    intelligence: IAbilityScore;
    wisdom: IAbilityScore;
    charisma: IAbilityScore;

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

    armorClass: number;
    initiative: number;
}