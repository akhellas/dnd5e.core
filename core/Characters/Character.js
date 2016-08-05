class Character {
    constructor() {
        this._name = '';
        this._xp = 0;
        this._race = null;
        this._classes = [];
    }

    addClass(characterClass) {
        this._classes.push(characterClass);
    }
}

export default Character