import { ICreature, CreatureType, CreatureSize } from "../base/creature";
import { IAbilityScore } from "../base/abilityScore";
import { ISkill } from "../base/skill";
import { IHitPoints } from "../base/hitPoints";
import { ICombatant } from "../combat/combatant";

export interface IMonster extends ICreature {

}

export class Monster implements IMonster {
    name: string;
    type: CreatureType;
    tags: Array<string>;
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
    acrobatics?: ISkill;
    animalHandling?: ISkill;
    arcana?: ISkill;
    athletics?: ISkill;
    deception?: ISkill;
    history?: ISkill;
    insight?: ISkill;
    intimidation?: ISkill;
    investigation?: ISkill;
    medicine?: ISkill;
    nature?: ISkill;
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

    hitPoints: IHitPoints;

    armorClass: number;
    initiative: number;

    constructor() {
        this.tags = [];
    }
}