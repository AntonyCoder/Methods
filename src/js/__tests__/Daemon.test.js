import Character from "../Characters";
import Daemon from "../Daemon";

test('should get correct object', () => {
    const daemon = new Daemon('Anton', 'Daemon');
    const expected = {
        name: 'Anton',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(daemon).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Daemon('A', 'Daemon');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Daemon('LongNameOfCharacter', 'Daemon');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});

test('Проверка на работу метода levelUp', () => {
    const daemon = new Daemon('Anton');
    daemon.levelUp();
    const expected = {
        name: 'Anton',
        type: 'Daemon',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    }
    expect(daemon).toEqual(expected);
});

test('Проверка метода damage', () =>{
const daemon = new Daemon('Anton');
daemon.damage(50);
const expected = {
    name: 'Anton',
    type: 'Daemon',
    health: 70,
    level: 1,
    attack: 10,
    defence: 40,
}
expect(daemon).toEqual(expected);
});

test('Проверка на выброс ошибки в методе levelUp', () => {
expect(() => {
    const daemon = new Daemon('Anton');
    daemon.health = -50;
    daemon.levelUp();
}).toThrow('Нельзя повысить уровень умершего');
});