describe("Custom Array Functions", function() {
    var inputArrayTest = [2, 6, 7, 1, 6],
        inputArrayTestWithChar = [2, 3, 6, 1, 'f'];
    it("Method 'take' must return first element form array", function() {
        expect(customArrayFunctions.take(inputArrayTest, 1)).toEqual([2]);
    });
    it("Method 'take' takes first argument boolean", function() {
        expect(customArrayFunctions.take(false, 1)).toEqual(undefined);
    });
    it("Method 'skip' takes first argument number", function() {
        expect(customArrayFunctions.skip(5, 1)).toEqual(undefined);
    });
    it("Method 'map' takes first argument string", function() {
        expect(customArrayFunctions.map("fwq", 1)).toEqual(undefined);
    });
    it("Method 'reduce' takes first argument undefined", function() {
        expect(customArrayFunctions.reduce(undefined, 1, 1)).toEqual(undefined);
    });
    it("Method 'filter' takes first argument object", function() {
        expect(customArrayFunctions.filter({}, 1)).toEqual(undefined);
    });
    it("Method 'foreach' takes first argument null", function() {
        expect(customArrayFunctions.foreach(null, 1)).toEqual(undefined);
    });
    it("Method 'reduce' takes an array not only from numbers", function() {
        expect(customArrayFunctions.reduce(inputArrayTestWithChar, (index, element) => { return element; }, 1)).toEqual(undefined);
    });
    it("Method 'take' do not take arguments", function() {
        expect(customArrayFunctions.take()).toEqual(undefined);
    });
});