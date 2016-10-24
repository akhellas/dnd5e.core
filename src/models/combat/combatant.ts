import { ICreature } from "../base/creature";
import { IAbilityScore, AbilityScoreType } from "../base/abilityScore";
import { SkillType } from "../base/skill";

export interface ICombatant {
    isPlayer: boolean;
    isSpecial: boolean;
    initiative: number;

    rollInitiative(): number;

    abilityCheck(abilityScore: AbilityScoreType): number;
    // savingThrow(abilityScore: AbilityScoreType): boolean;
    // skillCheck(skill: SkillType, difficultyCheck: number): boolean;
}

// export class GenericCompatant implements ICreature, ICompatant {

//     // ICreature
//     name: string;
//     strength: IAbilityScore;
//     dexterity: IAbilityScore;
//     constitution: IAbilityScore;
//     intelligence: IAbilityScore;
//     wisdom: IAbilityScore;
//     charisma: IAbilityScore;

//     isPlayer: boolean;
//     isSpecial: boolean;
//     initiative: number;

//     rollInitiative(): number {
//         return 1;
//     }
// }