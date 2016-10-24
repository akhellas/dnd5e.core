import { AbilityScoreType } from "../base/abilityScore";
import { ICombatant } from "./combatant";
import { Round } from "./round";


export class Combat {
    compatants: Array<ICombatant>;
    rounds: Array<Round>;

    constructor() {
        this.rounds = [];

    }

    addRound() {
        this.rounds.push(new Round(this));
        
    }

    rollInitiative() {
        for (let compatant of this.compatants) {
            compatant.rollInitiative();
        }

        this.compatants.sort( (a, b) => {
            let check = a.initiative - b.initiative;

            if (check == 0) {
                return a.abilityCheck(AbilityScoreType.Dexterity) - b.abilityCheck(AbilityScoreType.Dexterity);
            }

            return check;
        });
    }

    start() {
        this.rollInitiative();

    }
}