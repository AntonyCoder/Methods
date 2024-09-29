import Character from "../Characters";
import Undead from "../Undead";

test('should get correct object', () => {
    const undead = new Undead('Anton', 'Undead');
    const expected = {
        name: 'Anton',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(undead).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Undead('A', 'Undead');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Undead('LongNameOfCharacter', 'Undead');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});

test('Проверка на работу метода levelUp', () => {
    const undead = new Undead('Anton');
    undead.levelUp();
    const expected = {
        name: 'Anton',
        type: 'Undead',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    }
    expect(undead).toEqual(expected);
});

test('Проверка метода damage', () =>{
const undead = new Undead('Anton');
undead.damage(50);
const expected = {
    name: 'Anton',
    type: 'Undead',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
}
expect(undead).toEqual(expected);
});

test('Проверка на выброс ошибки в методе levelUp', () => {
expect(() => {
    const undead = new Undead('Anton');
    undead.health = -50;
    undead.levelUp();
}).toThrow('Нельзя повысить уровень умершего');
});