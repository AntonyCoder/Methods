import Character from "../Characters";
import Zombie from "../Zombie";

test('should get correct object', () => {
    const zombie = new Zombie('Anton', 'Zombie');
    const expected = {
        name: 'Anton',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(zombie).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Zombie('A', 'Zombie');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Zombie('LongNameOfCharacter', 'Zombie');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});

test('Проверка на работу метода levelUp', () => {
    const zombie = new Zombie('Anton');
    zombie.levelUp();
    const expected = {
        name: 'Anton',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    }
    expect(zombie).toEqual(expected);
});

test('Проверка метода damage', () =>{
const zombie = new Zombie('Anton');
zombie.damage(50);
const expected = {
    name: 'Anton',
    type: 'Zombie',
    health: 55,
    level: 1,
    attack: 40,
    defence: 10,
}
expect(zombie).toEqual(expected);
});

test('Проверка на выброс ошибки в методе levelUp', () => {
expect(() => {
    const zombie = new Zombie('Anton');
    zombie.health = -50;
    zombie.levelUp();
}).toThrow('Нельзя повысить уровень умершего');
});