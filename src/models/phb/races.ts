import * as enumerations from "./enumerations";
import { Trait, ProficiencyTrait } from "./traits";

export class Race {
    traits: Array<Trait>;

    constructor() {
        this.traits = [];
    }


}

export class Dwarf extends Race {
    constructor() {
        super();
    }
}
