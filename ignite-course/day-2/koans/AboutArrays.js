describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create empty arrays", function() {
    // To create an array we use 'literal notation'
    var emptyArray = [];
    expect(typeof emptyArray).toEqual(FILL_ME_IN); // <--- Trick question!
  });

  it("should be able to determine the length of an array", function () {
    // All arrays have a '.length' property that returns the amount of elements it contains
    var emptyArray = [];
    expect(emptyArray.length).toEqual(FILL_ME_IN);

    // We can also populate arrays as we define them.
    var numsArray = [1,2,3];
    expect(numsArray.length).toEqual(FILL_ME_IN);
  });

  it("should be able to access individual elements of an array", function () {
    // We access elements of an array with 'square bracket notation'
    // The number inside the brakcets
    var fruits = ['apple', 'banana', 'pineapple', 'durian'];
    expect(fruits[0]).toEqual(FILL_ME_IN);
    expect(fruits[2]).toEqual(FILL_ME_IN);
    expect(fruits[3]).toEqual(FILL_ME_IN);// <---- DISGUSTING
  });

  it('should support arrays having elements of different types', function () {
    var multiTypeArray = ['I am a string', 42, true, [1,2,3]];
    expect(typeof(multiTypeArray[0])).toEqual(FILL_ME_IN);
    expect(typeof(multiTypeArray[1])).toEqual(FILL_ME_IN);
    expect(typeof(multiTypeArray[2])).toEqual(FILL_ME_IN);
    expect(typeof(multiTypeArray[3])).toEqual(FILL_ME_IN);
  });

  it('should be able to access elements of arrays inside arrays', function () {
    var rows = [ // ARRAY OF ARRAYS
      [1,2,3],
      ['a', 'b', 'c'],
      [true, true, false]
    ];

    // JS lets us store arrays inside arrays, we call this nesting.
    // We can access them as any other element.
    expect(rows[0]).toEqual(FILL_ME_IN);
    expect(rows[1]).toEqual(FILL_ME_IN);
    expect(rows[FILL_ME_IN]).toEqual([true, true, false]);

    // Now let's try accessing individual elements of the nested arrays.
    // We can store the first element of rows in a variable
    // firstRow is an array too, so we can access its elements with
    // square bracket notation.
    var firstRow = rows[0];
    expect(firstRow[0]).toEqual(FILL_ME_IN);
    expect(firstRow[FILL_ME_IN]).toEqual(2);

    // We can also skip defining a variable and access
    // elements of arrays inside arrays directly.
    // The first set of []s refers to the index of the parent array
    // The second set of []s refers to the index of the nested element
    expect(rows[0][0]).toEqual(FILL_ME_IN);
    expect(rows[0][1]).toEqual(FILL_ME_IN);
    expect(rows[0][2]).toEqual(FILL_ME_IN);
    expect(rows[FILL_ME_IN][FILL_ME_IN]).toEqual('b');
    expect(rows[FILL_ME_IN][FILL_ME_IN]).toEqual(false);
  });

  it('should find elements with the indexOf method', function () {
    // every array has a method called 'indexOf'
    // It is a function that accepts as its first argument a value to look for.
    // If the passed value exists in the array, it returns its index
    // If the passed value doesn't exist in the array, it returns -1

    var haystack = ['hay', 'more hay', 'so much hay', 'needle', 'even more hay', 'ALL THE HAY!'];

    expect(haystack.indexOf('needle')).toEqual(FILL_ME_IN);
    expect(haystack.indexOf('watch')).toEqual(FILL_ME_IN);
  });

  it('should add elements at the end of the array with the push method', function () {
    var nums = [1,2,3];
    // every array has a method called 'push'
    // It is a function that accepts as its first argument a value
    // The passed value gets added to the array at the end (last position)
    nums.push(4);
    expect(nums).toEqual(FILL_ME_IN);
    expect(nums.length).toEqual(FILL_ME_IN);
    // Note that we don't save what push returns, we just call it.
    // Push has the side effect of adding a value to the array, but it doesn't return the new array
    // What do you think it returns?
    var pushResult = nums.push(5);
    expect(nums.length).toEqual(FILL_ME_IN);
    expect(pushResult).toEqual(FILL_ME_IN);
    var pushResult = nums.push('hello');
    expect(nums.length).toEqual(FILL_ME_IN);
    expect(pushResult).toEqual(FILL_ME_IN);
  });

  it('should grab hold of the last element of an array with the pop method', function () {
    var nums = [1,2,3];
    // every array has a method called 'pop'
    // pop doesn't expect any arguments
    // pop returns the last element of the array and it has the side effect of
    // removing that last element from the array

    var lastElement = nums.pop();
    expect(nums.length).toEqual(FILL_ME_IN);
    expect(lastElement).toEqual(FILL_ME_IN);
  });

  it('should return slices of an array with the slice method', function () {
    var nums = ['a', 'b', 'c', 'd', 'e'];
    // every array has a method called 'slice'
    // Array.slice(startIndex [, endIndex])
    // slice expects 2 arguments: a startIndex and an endIndex
    // it will return a section of the array that starts from startIndex
    // and ends at endIndex (not inclusive!)
    expect(nums.slice(1, 4)).toEqual(FILL_ME_IN);
    expect(nums.slice(2, 3)).toEqual(FILL_ME_IN);
    expect(nums.slice(FILL_ME_IN, FILL_ME_IN)).toEqual(['d','e']);
  });
});
