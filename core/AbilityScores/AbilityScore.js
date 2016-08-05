class AbilityScore {
    constructor(value = 0) {
        this._value = value;
    }

    set value (value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    get modifier() {
        let mod = (this._value - 10) / 2;
        return this._value < 10 ? Math.ceil(mod) : Math.floor(mod);
    }
}

export default AbilityScore