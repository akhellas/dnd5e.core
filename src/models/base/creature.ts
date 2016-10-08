import { IAbilityScore } from "./abilityScore";

export interface ICreature {
    name: string;
    
    //ability scores
    strength: IAbilityScore;
    dexterity: IAbilityScore;
    constitution: IAbilityScore;
    intelligence: IAbilityScore;
    wisdom: IAbilityScore;
    charisma: IAbilityScore;
}