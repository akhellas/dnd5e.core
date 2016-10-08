import { Race, Dwarf } from "./races";
import { Class, Fighter } from "./classes";

import * as abilityScores from "./abilityScores";
import * as enumerations from "./enumerations";

export class Character {
    name: string;
    surname: string;
    playerName: string;

    race: Race;

    classes: Array<Class>;

    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    speed: number;
    size: enumerations.CreatureSize;
    age: number;

    alignment: enumerations.Alignment;

    constructor(name: string = "", race: Race = new Dwarf, characterClass: Class = new Fighter) {
        this.name = name;
        this.race = race;
        this.classes = [characterClass];
    }

    get level() {
        return this.classes
                   .map(x => { return x.level; })
                   .reduce((a, b) => { return a + b ; });
    }

    print() {
        console.log("\nDnD 5E Character Sheet");
        console.log(`Name: ${this.name} ${this.surname}`)
        console.log(this);
        console.log("\n");
    }
}