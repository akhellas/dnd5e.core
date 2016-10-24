import { Monster } from "../monster";

export class Aarakocra extends Monster {
    constructor() {
        super();
    }
}

export class AarakocraSimple {
    size: string = "Medium";
    type: string = "Humanoid";
    tags: Array<string> = ["aarakocra"];
    alignment: string = "NG";
    ac: number = 12;
    hp: number = 13;
    hd: string ="3d8";
    speed: number = 20;
    flySpeed: number = 50;

    STR: number = 10;
    DEX: number = 14;
    CON: number = 10;
    INT: number = 11;
    WIS: number = 12;
    CHA: number = 11;

    perception: number = 5;
    passivePerception: number = 15;
    languages: Array<string> = ["Auran"];
    
    CR: number = 0.25;
    xp: 50;
}