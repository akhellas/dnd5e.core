import { CreatureSize, CreatureType, Alignment } from "../base/creature";
import { IAbilityScore, AbilityScoreType } from "../base/abilityScore";
import { IHitPoints } from "../base/hitPoints";
import { SkillType, ISkill } from "../base/skill";
import { IAction } from "./action";

export interface ICombatant {
    name: string;
    type: CreatureType;
    tags: Array<string>;
    size: CreatureSize;
    alignment: string;
    
    //ability scores
    Strength: IAbilityScore;
    Dexterity: IAbilityScore;
    Constitution: IAbilityScore;
    Intelligence: IAbilityScore;
    Wisdom: IAbilityScore;
    Charisma: IAbilityScore;

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

    HP: IHitPoints;

    AC: number;
    initiativeModifier: number;
    initiative: number;

    actions: Array<IAction>;

    rollInitiative(): void;

    abilityCheck(abilityScore: AbilityScoreType): number;
    savingThrow(abilityScore: AbilityScoreType): boolean;
    skillCheck(skill: SkillType, difficultyCheck: number): boolean;

    //actions
    // move(distance: number): void;
    // attack(weapon: string, targets: Array<ICombatant>): number;
    // cast(spell: string, targets: Array<ICombatant>): number;
    // dash(distance: number): void;
    // disengage(distance: number): void;
    // dodge(): void;
    // help(target: ICombatant): void;
    // hide(): boolean;
    // ready(trigger: string, action: IAction, targets: Array<ICombatant>): boolean;
    // search(): boolean;
    // use(object: string): void;
}