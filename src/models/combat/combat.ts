import { AbilityScoreType } from "../base/abilityScore";
import { ICombatant } from "./combatant";
import { Round } from "./round";

export class Combat {
    combatants: Array<ICombatant>;
    rounds: Array<Round>;

    constructor() {
        this.combatants = [];
        this.rounds = [];
    }

    sortByInitiative() {
        this.combatants.sort( (a, b) => {
            let check = a.initiative - b.initiative;

            if (check == 0) {
                return a.abilityCheck(AbilityScoreType.Dexterity) - b.abilityCheck(AbilityScoreType.Dexterity);
            }

            return check;
        });
    }
    
    addCombatant(combatant: ICombatant ) {
        combatant.rollInitiative();
        this.combatants.push(combatant);
        this.sortByInitiative();
    }
}

export function demoCombat() {
    let combat = new Combat();
}