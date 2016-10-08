import { Round } from "./round";
import { ICompatant } from "./compatant";

export class Turn {
    round: Round;

    constructor (round: Round) {
        this.round = round;
    }

    get compatant() : ICompatant {
        let index = this.round.combat.rounds.indexOf(this.round);
        return this.round.combat.compatants[index];
    }
}