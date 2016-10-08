import { Combat } from "./combat";

export class Round {
    combat: Combat;

    constructor(combat: Combat) {
        this.combat = combat;
    }

    get index() {
        return this.combat.rounds.indexOf(this);
    }

    start() {
        console.log(`Round ${this.combat.rounds.length} started !`);

    }

    end() {
        //check for ending effects
    }
}