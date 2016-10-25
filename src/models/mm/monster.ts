import { ICreature, CreatureType, CreatureSize } from "../base/creature";
import { IAbilityScore, AbilityScoreType } from "../base/abilityScore";
import { ISkill } from "../base/skill";
import { IHitPoints } from "../base/hitPoints";

import { ICombatant } from "../combat/combatant";
import { IAction } from "../combat/action";

export interface IMonster extends ICombatant {

}

export class Monster implements IMonster {
    initiative: number;
    initiativeModifier: number;
    actions: Array<IAction>;

    constructor() {
        this.actions = [];
    }

    rollInitiative(): void {

    }

    abilityCheck(abilityScore: AbilityScoreType): number {

    }

    savingThrow(abilityScore: AbilityScoreType): boolean {

    }

    skillCheck(skill: SkillType, difficultyCheck: number): boolean {

    }
}