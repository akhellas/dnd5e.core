import { Character } from "./characters";
import * as enumerations from "./enumerations";
import { Trait } from "./traits";

export class Race {
    name: string;
    traits: Array<Trait>;

    constructor(name?: string) {
        this.name = name;
        this.traits = [];
    }
}

export class Dwarf extends Race {
    constructor(name: string = "Dwarf") {
        super(name);
    }

    static apply(character: Character) {
        character.size = enumerations.CreatureSize.Medium;
        character.speed = 25;
    }
}