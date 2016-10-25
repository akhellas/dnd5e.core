import { IDamage } from "./damage";

export interface IAction {
    name: String;
    description: String;
}

export class Action implements IAction {
    name: String;
    description: String;
    movement: Number;
    damage: Array<IDamage>;

    constructor(name: string) {
        this.name = name;
    }
}

function actions() {

    let actions: Array<Action> = [];

    let dash = new Action("Dash");

    let attack = new Action("Attack");

}