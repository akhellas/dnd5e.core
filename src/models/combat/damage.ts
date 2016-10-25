export enum DamageType {
    Acid,
    Bludgeoning,
    Cold,
    Fire,
    Force,
    Lightning,
    Necrotic,
    Pierching,
    Poison,
    Psychic,
    Radiant,
    Slashing,
    Thunder
}

export interface IDamage {
    type: DamageType;
    die: Number;
    number: Number;
    bonus: Number;
}

export class Damage implements IDamage {
    type: DamageType;
    die: Number;
    number: Number;
    bonus: Number;

    constructor (type: DamageType, die: Number, number: Number, bonus: Number) {
        this.type = type;
        this.die = die;
        this.number = number;
        this.bonus = bonus;
    }

    toString() : String {
        return `${this.number}d${this.die}+${this.bonus} ${DamageType[this.type].toLowerCase()} damage`;
    }
}

export function demoDamage() {
    let ssDmg = new Damage(DamageType.Pierching, 6, 1, 5);
    console.log("Short Sword Damage: " + ssDmg);
}