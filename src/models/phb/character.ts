import { ICreature } from "../base/creature";

export interface ICharacter extends ICreature {
    player: string;
    classes: Array<string>;
    level: number;
    background: string;
    race: string;
    
    experiencePoints: number;
}