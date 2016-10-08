export class Class {
    level: number;

    constructor() {
        this.level = 1;
    }
}

export class Barbarian extends Class {
    constructor() {
        super();
    }
}

export class Fighter extends Class {
    constructor() {
        super();
    }
}