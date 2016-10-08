export interface Trait {

}

export class ProficiencyTrait implements Trait {
    weapons: Array<string>;

    constructor(weapons: Array<string> = []) {
        this.weapons = weapons;
    }
}