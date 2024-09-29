import Character from "../Characters";
import Magician from "../Magician";

test('should get correct object', () => {
    const magician = new Magician('Anton', 'Magician');
    const expected = {
        name: 'Anton',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(magician).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Magician('A');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Magician('LongNameOfCharacter');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});

test('Проверка на работу метода levelUp', () => {
    const magician = new Magician('Anton');
    magician.levelUp();
    const expected = {
        name: 'Anton',
        type: 'Magician',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    }
    expect(magician).toEqual(expected);
});

test('Проверка метода damage', () =>{
const magician = new Magician('Anton');
magician.damage(50);
const expected = {
    name: 'Anton',
    type: 'Magician',
    health: 70,
    level: 1,
    attack: 10,
    defence: 40,
}
expect(magician).toEqual(expected);
});

test('Проверка на выброс ошибки в методе levelUp', () => {
expect(() => {
    const magician = new Magician('Anton');
    magician.health = -50;
    magician.levelUp();
}).toThrow('Нельзя повысить уровень умершего');
});