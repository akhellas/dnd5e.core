import { RollPolicy } from "./enumerations";
import { Die } from "./dice";

export class AbilityScore {
    name: string;
    value: number;

    constructor(name?: string, value?: number) {
        this.name = name;
        this.value = value;
    }

    modifier() {
        return Math.floor((this.value) - 10 /2);
    }

    static roll() : number {
        return Die.roll(6, 4, RollPolicy.Max, 3);
    }
}

export class Strength extends AbilityScore {
    constructor(value?: number) {
        super("Strength", value);
    }
}

export class Dexterity extends AbilityScore {
    constructor(value?: number) {
        super("Strength", value);
    }
}