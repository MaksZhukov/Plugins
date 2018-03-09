describe("Custom Array Functions", function() {
    var inputArrayTest = [2, 6, 7, 1, 6],
        inputArrayTestWithChar = [2, 3, 6, 1, '3'];
    it("Method take must return first element form array " + customArrayFunctions.foreach(inputArrayTest, (index, element) => { return element; }), function() {
        expect(customArrayFunctions.take(inputArrayTest, 1)).toEqual([2]);
    });
    it("Method take take first argument instead of an array another type", function() {
        expect(customArrayFunctions.take(5, 1)).toBe(false);
    });
    it("Method skip take first argument instead of an array another type", function() {
        expect(customArrayFunctions.skip(5, 1)).toBe(false);
    });
    it("Method map take first argument instead of an array another type", function() {
        expect(customArrayFunctions.map(5, 1)).toBe(false);
    });
    it("Method reduce take first argument instead of an array another type", function() {
        expect(customArrayFunctions.reduce("r", 1, 1)).toBe(false);
    });
    it("Method filter take first argument instead of an array another type", function() {
        expect(customArrayFunctions.filter({}, 1)).toBe(false);
    });
    it("Method foreach take first argument instead of an array another type", function() {
        expect(customArrayFunctions.foreach(5, 1)).toBe(false);
    });
    it("Method reduce takes an array not only from numbers", function() {
        expect(customArrayFunctions.reduce(inputArrayTestWithChar, (index, element) => { return element; }, 1)).toBe(false);
    });
    it("Method take do not take arguments", function() {
        expect(customArrayFunctions.take()).toBe(false);
    });
});