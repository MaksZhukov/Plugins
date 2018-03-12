describe("Custom Array Functions", function() {
    var inputArrayTest,inputArrayTestWithChar;
    beforeEach(function() {
        inputArrayTest = [2, 6, 7, 1, 6];
        inputArrayTestWithChar = [2, 3, 6, 1, 'f'];
    });
    it("Method 'take' must return first element form array", function() {
        expect(customArrayFunctions.take(inputArrayTest, 1)).toEqual([2]);
    });
    it("Method 'take' return undefined when first argument boolean", function() {
        expect(customArrayFunctions.take(false, 1)).toBeUndefined();
    });
    it("Method 'skip' return undefined when first argument number", function() {
        expect(customArrayFunctions.skip(5, 1)).toBeUndefined();
    });
    it("Method 'map' return undefined when first argument string", function() {
        expect(customArrayFunctions.map("fwq", 1)).toBeUndefined();
    });
    it("Method 'reduce' return undefined when first argument undefined", function() {
        expect(customArrayFunctions.reduce(undefined, 1, 1)).toBeUndefined();
    });
    it("Method 'filter' return undefined when first argument object", function() {
        expect(customArrayFunctions.filter({}, 1)).toBeUndefined();
    });
    it("Method 'foreach' return undefined when first argument null", function() {
        expect(customArrayFunctions.foreach(null, 1)).toBeUndefined();
    });
    it("Method 'reduce' return undefined when first argument is an array not only from numbers", function() {
        expect(customArrayFunctions.reduce(inputArrayTestWithChar, (index, element) => { return element; }, 1)).toBeUndefined();
    });
    it("Method 'take' return undefined when do not take arguments", function() {
        expect(customArrayFunctions.take()).toBeUndefined();
    });
    it("Method 'skip' return last 2 element", function() {
        expect(customArrayFunctions.skip(inputArrayTest, 3)).toEqual([1,6]);
    });
    it("Method 'map' return all elements and add '_'", function() {
        expect(customArrayFunctions.map(inputArrayTestWithChar, (index,element) => {return element+"_";})).toEqual(["2_","3_","6_","1_","f_"]);
    });
    it("Method 'reduce' return all elements and reduce their on 3", function() {
        expect(customArrayFunctions.reduce(inputArrayTest, (index,element)=>{return element;}, 3)).toEqual([-1,3,4,-2,3]);
    });
    it("Method 'filter' return all elements < 4", function() {
        expect(customArrayFunctions.filter(inputArrayTest, (index,element)=>{return element < 4})).toEqual([2,1]);
    });
    it("Method 'foreach' change all elements on 2", function() {
        customArrayFunctions.foreach(inputArrayTest, (index,element)=>{return 2;});
        expect(inputArrayTest).toEqual([2,2,2,2,2]);
    });
});
describe("Custom Array Functions chain", function() {
    var inputArrayTest;
    beforeEach(function() {
        inputArrayTest = [-1,-2,-3,1, 2, 3, 4, 5,6,7,8,9,10];
    });
    it("Chain skip -> take return array", function() {
        expect(customArrayFunctions.chain(inputArrayTest).take(5).skip(3).value()).toEqual([1,2]);
    });
    it("Chain skip -> take -> filter return array", function() {
        expect(customArrayFunctions.chain(inputArrayTest).take(9).skip(1).filter((index,element)=>{return element > 2;}).value()).toEqual([3,4,5,6]);
    });
    it("Chain filter -> take -> reduce return array", function() {
        expect(customArrayFunctions.chain(inputArrayTest).filter((index,element)=>{return element > 3;}).take(4).reduce((index,element)=>{return element;},4).value()).toEqual([0,1,2,3]);
    });
    it("Chain map -> reduce -> take return array", function() {
        expect(customArrayFunctions.chain(inputArrayTest).map((index,element)=>{return element +10;}).reduce((index,element)=>{ return element;},3).take(4).value()).toEqual([6,5,4,8]);
    });
});