import { Die, RollPolicy } from "./dice";

export enum AbilityScoreType {
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma
}

export interface IAbilityScore {
    type: AbilityScoreType;
    value: number;
    proficient: boolean;

    readonly modifier: number;
}

export class AbilityScore implements IAbilityScore {
    type: AbilityScoreType;
    value: number;
    proficient: boolean;

    constructor(type: AbilityScoreType) {
        this.type = type;
    }

    get modifier() : number {
        return Math.floor((this.value) - 10 /2);
    }

    static roll() : number {
        return Die.roll(6, 4, RollPolicy.Max, 3);
    }
}
