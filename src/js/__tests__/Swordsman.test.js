import Character from "../Characters";
import Swordsman from "../Swordsman";

test('should get correct object', () => {
    const swordsman = new Swordsman('Anton', 'Swordsman');
    const expected = {
        name: 'Anton',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(swordsman).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Swordsman('A', 'Swordsman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Swordsman('LongNameOfCharacter', 'Swordsman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});

test('Проверка на работу метода levelUp', () => {
    const swordsman = new Swordsman('Anton');
    swordsman.levelUp();
    const expected = {
        name: 'Anton',
        type: 'Swordsman',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    }
    expect(swordsman).toEqual(expected);
});

test('Проверка метода damage', () =>{
const swordsman = new Swordsman('Anton');
swordsman.damage(50);
const expected = {
    name: 'Anton',
    type: 'Swordsman',
    health: 55,
    level: 1,
    attack: 40,
    defence: 10,
}
expect(swordsman).toEqual(expected);
});

test('Проверка на выброс ошибки в методе levelUp', () => {
expect(() => {
    const swordsman = new Swordsman('Anton');
    swordsman.health = -50;
    swordsman.levelUp();
}).toThrow('Нельзя повысить уровень умершего');
});