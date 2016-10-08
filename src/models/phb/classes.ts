export class Class {
    name: string;
    level: number;

    constructor(name?: string) {
        this.level = 1;
    }
}

export class Barbarian extends Class {
    constructor() {
        super("Barbarian");
    }
}

export class Fighter extends Class {
    constructor() {
        super("Fighter");
    }
}