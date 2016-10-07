function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");

import { Character } from "./models/phb/characters";
import * as races from "./models/phb/races";

function generate(name: string) {
    let character = new Character(name);
    character.race = new races.Race("");

    console.log(character);

    return character;
}

generate("Aramil");