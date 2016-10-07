import * as races from "./races";

export class Character {
    name: string;
    race: races.Race;

    constructor(name?: string) {
        this.name = name;

        console.log("Created character with name: " + this.name);
    }
}