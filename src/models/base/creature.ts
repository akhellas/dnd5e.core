import { IAbilityScore } from "./abilityScore";
import { ISkill, ISkills } from "./skill";
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
    type: CreatureType;
    tags: Array<string>;
    size: CreatureSize;
    alignment: string;
    
    //ability scores
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;

    //skills
    skills: ISkills;

    acrobatics?: number;
    animalHandling?: number;
    arcana?: number;
    athletics?: number;
    deception?: number;
    history?: number;
    insight?: number;
    intimidation?: number;
    investigation?: number;
    medicine?: number;
    nature?: number;
    perception?: ISkill;
    performance?: ISkill;
    persuasion?: ISkill;
    religion?: ISkill;
    sleightOfHand?: ISkill;
    stealth?: ISkill;
    survival?: ISkill;
    
    speed: number;
    burrowSpeed?: number;
    climbSpeed?: number;
    flySpeed?: number;
    swimSpeed?: number;

    HP: IHitPoints;

    AC: number;
    initiativeModifier: number;
    initiative: number;
}