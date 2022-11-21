// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
console.log(functions);

test('isPhoneNumber true 1', () => {
    expect(functions.isPhoneNumber("(125) 234-1394")).toBe(true);
});

test('isPhoneNumber true 2', () => {
    expect(functions.isPhoneNumber("(345) 381-4134")).toBe(true);
});

test('isPhoneNumber false 1', () => {
    expect(functions.isPhoneNumber("12343113")).toBe(false);
});

test('isPhoneNumber false 2', () => {
    expect(functions.isPhoneNumber("2343")).toBe(false);
});

test('isEmail true 1', () => {
    expect(functions.isEmail("asdf@gmail.com")).toBe(true);
});

test('isEmail true 2', () => {
    expect(functions.isEmail("johndoe@gmail.com")).toBe(true);
});

test('isEmail false 1', () => {
    expect(functions.isEmail("asdf")).toBe(false);
});

test('isEmail false 2', () => {
    expect(functions.isEmail("asdf@gmail)")).toBe(false);
});

test('isDate true 1', () => {
    expect(functions.isDate("1/1/1999")).toBe(true);
});

test('isDate true 2', () => {
    expect(functions.isDate("2/2/2000")).toBe(true);
});

test('isDate false 1', () => {
    expect(functions.isDate("0/0/00000")).toBe(false);
});

test('isDate false 2', () => {
    expect(functions.isDate("/1/1999")).toBe(false);
});

test('isStrongPassword true 1', () => {
    expect(functions.isStrongPassword("asjflkaj3")).toBe(true);
});

test('isStrongPassword true 2', () => {
    expect(functions.isStrongPassword("ae31333")).toBe(true);
});

test('isStrongPassword false 1', () => {
    expect(functions.isStrongPassword("333")).toBe(false);
});

test('isStrongPassword false 2', () => {
    expect(functions.isStrongPassword("as")).toBe(false);
});

test('isHexColor true 1', () => {
    expect(functions.isHexColor("#FFF")).toBe(true);
});

test('isHexColor true 2', () => {
    expect(functions.isHexColor("#31E")).toBe(true);
});

test('isHexColor false 1', () => {
    expect(functions.isHexColor("0")).toBe(false);
});

test('isHexColor false 2', () => {
    expect(functions.isHexColor("#FFFFFFFFFFFF")).toBe(false);
});