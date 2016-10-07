import { Character } from "./models/phb/characters";
import * as races from "./models/phb/races";

function generate(name: string) {
    let character = new Character();
    character.race = new races.Race();

    console.log(character);

    return character;
}