export enum RollPolicy {
    Max,
    Min,
    Sum
}

export class Die {
    name: string;
    value: number;

    constructor(name?: string, value?: number) {
        this.name = name;
        this.value = value;
    }

    static roll(die: number = 20, times: number = 1, policy: RollPolicy = RollPolicy.Sum, include: number = 1) : number {
        let result = 0;
        let rolls: Array<number> = [];
        for (let index = 0; index < times; index ++) {
            rolls.push(Math.floor((Math.random() * die) + 1));
        }

        rolls.sort();

        if (policy == RollPolicy.Max) {
            rolls.reverse();
        }

        let included = policy == RollPolicy.Sum ? rolls.slice(0) : rolls.slice(0, include);
        
        result = included.reduce( (a, b) => { return a + b; });

        console.log(`Roll ${times}d${die} : ${rolls} (${RollPolicy[policy]} ${include}) => ${result}`);
        return result;
    }
}

