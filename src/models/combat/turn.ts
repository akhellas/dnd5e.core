import { Round } from "./round";
import { ICombatant } from "./combatant";

export class Turn {
    round: Round;

    constructor (round: Round) {
        this.round = round;
    }

    get compatant() : ICombatant {
        let index = this.round.combat.rounds.indexOf(this.round);
        return this.round.combat.compatants[index];
    }
}