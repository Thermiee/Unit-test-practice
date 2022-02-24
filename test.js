const stringLength = require ('./task1.js');
const reverseString = require ('./task2.js');
const calculator = require ('./task3.js');
const capitalizeFirstLetter = require ('./task4.js');

describe('Task 1', () => {
    test('string length', () => {
        expect(stringLength.stringLength("")).toBe(0);
    });

    test('string length expanded must be between 1 and 10', () => {
        expect(stringLength.stringLength2("football")).toBe(8);
    });
});

describe('Task 2', () => {
    test('reverse string', () => {
        expect(reverseString.reverseString("messi")).toMatch("issem");
    });
});

describe('Task 3', () => {
    const app = new calculator();
    describe('add', () => {
        test('2 + 2', () => {
            expect(app.add(2 , 2)).toBe(4);
        });
    });

    describe('subtract', () => {
        test('4 - 2', () => {
            expect(app.subtract(4 , 2)).toBe(2);
        });
    });

    describe('divide', () => {
        test('2 / 2', () => {
            expect(app.divide(2 , 2)).toBe(1);
        });
    });

    describe('multiply', () => {
        test('2 * 2', () => {          
            expect(app.multiply(2 , 2)).toBe(4);
        });
    });
});

describe('Task 4', () => {
    test('Capitalize First Character of string', () => {
        expect(capitalizeFirstLetter.capitalizeFirstLetter("microverse")).toMatch("Microverse");
    });
});