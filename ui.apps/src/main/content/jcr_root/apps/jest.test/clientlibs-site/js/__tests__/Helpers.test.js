require('../Helpers');
var Helpers = window.JestTest.Helpers;

beforeAll(() => {
    Helpers = window.JestTest.Helpers;
});

afterAll(() => {
    Helpers = {};
});

it('it should calculate additions as expected 1 + 2 = 3', () => {
    expect(Helpers.add(1, 2)).toEqual(3);
});

it('it should calculate additions as expected 0 + 2 = 2', () => {
    expect(Helpers.add(0, 2)).toEqual(2);
});

it('it should calculate divisions as expected 0 / 2 = 0', () => {
    expect(Helpers.divide(0, 2)).toEqual(0);
});