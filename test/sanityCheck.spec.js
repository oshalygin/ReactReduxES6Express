import expect from "expect";

describe("Sanity Check", () => {
    it("Simple mathematicla calculation", () => {
        const expected = 5;

        let firstValue = 3;
        let secondValue = 2;
        let actual = firstValue + secondValue;

        expect(actual).toEqual(expected);
    });
});