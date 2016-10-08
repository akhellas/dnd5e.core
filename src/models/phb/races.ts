import { Character } from "./characters";
import * as enumerations from "./enumerations";
import { Trait, ProficiencyTrait } from "./traits";

export class Race {
    traits: Array<Trait>;

    constructor() {
        this.traits = [];
    }

    apply(character: Character) {
        character.size = enumerations.CreatureSize.Medium;
    }
}

export class Dwarf extends Race {
    constructor() {
        super();

        let dpt = new ProficiencyTrait(["battleaxe, handaxe, throwing hammer, warhammer"]);

        this.traits.push(dpt);
    }
    
    apply(character: Character) {
        super.apply(character);

        character.speed = 25;
    }
}

export class HillDwarf extends Dwarf {
    constructor() {
        super();
    }

    apply(character: Character) {
        super.apply(character);
    }
}

export class MountainDwarf extends Dwarf {
    constructor() {
        super();
    }
    
    apply(character: Character) {
        super.apply(character);
    }
}