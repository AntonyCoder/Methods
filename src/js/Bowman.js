import Character from "./Characters";

export default class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 25;
    }
}