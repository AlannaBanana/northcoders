describe('About Operators', function() {

  it('should add values', function() {
    var num = 6;
    var expectedValue = num + FILL_ME_IN;
    expect(expectedValue).toEqual(24);
  });

  it('should subtract values', function() {
    var num = 20;
    var expectedValue = num - FILL_ME_IN;
    expect(expectedValue).toEqual(8);
  });

  it('should multiply values', function() {
    var num = 11;
    var expectedValue = num * FILL_ME_IN;
    expect(expectedValue).toEqual(66);
  });

  it('should divide values', function() {
    var num = 66;
    var expectedValue = num / FILL_ME_IN
    expect(expectedValue).toEqual(6);
  });

  it('should divide values and obtain floating point numbers', function() {
    var num = 10;
    var expectedValue = num / FILL_ME_IN
    expect(expectedValue).toEqual(2.5);
  });

  it('should return the remainder of a division', function() {
    var num = 3;
    var expectedValue = num % FILL_ME_IN;
    expect(expectedValue).toEqual(1);
  });

  it('should test equality', function() {
    var catchPhrase = 'hello world'
    var comparison = catchPhrase === FILL_ME_IN;
    expect(comparison).toBe(true);
  });

  it('should test inequality', function() {
    var catchPhrase = 'hello world'
    var comparison = catchPhrase !== 'hello world';
    expect(comparison).toBe(true);
  });

  it('should compare numbers with the \'greater than\' operator', function() {
    var hugeNumber = 9;
    var comparison = hugeNumber > 999;
    expect(comparison).toBe(true);
  });

  it('should compare numbers with the \'less than\' operator', function() {
    var tinyNumber = 1;
    var comparison = tinyNumber < 100;
    expect(comparison).toBe(false);
  });

  it('should compare numbers with the \'greater than or equal to\' operator', function() {
    var soClose = 99;
    var comparison = soClose >= 100;
    expect(comparison).toBe(true);
  });

  it('should compare numbers with the \'less than or equal to\' operator', function() {
    var soClose = 1;
    var comparison = soClose <= 2;
    expect(comparison).toBe(false);
  });

});
