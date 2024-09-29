import Character from "../Characters";
import Bowman from "../Bowman";

test('should get correct object', () => {
    const bowman = new Bowman('Anton', 'Bowman');
    const expected = {
        name: 'Anton',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(bowman).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Bowman('A', 'Bowman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Bowman('LongNameOfCharacter', 'Bowman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});

test('Проверка на работу метода levelUp', () => {
        const bowman = new Bowman('Anton');
        bowman.levelUp();
        const expected = {
            name: 'Anton',
            type: 'Bowman',
            health: 100,
            level: 2,
            attack: 30,
            defence: 30,
        }
        expect(bowman).toEqual(expected);
});

test('Проверка метода damage', () =>{
    const bowman = new Bowman('Anton');
    bowman.damage(50);
    const expected = {
        name: 'Anton',
        type: 'Bowman',
        health: 62.5,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(bowman).toEqual(expected);
});

test('Проверка на выброс ошибки в методе levelUp', () => {
    expect(() => {
        const bowman = new Bowman('Anton');
        bowman.health = -50;
        bowman.levelUp();
    }).toThrow('Нельзя повысить уровень умершего');
});
