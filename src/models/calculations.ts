import { Die } from "./phb/dice";

import { ICharacter } from "./phb/characters";

export class Calculations {

    static initiative(character: ICharacter) : number {
        return character.dexterity.modifier
    }
}