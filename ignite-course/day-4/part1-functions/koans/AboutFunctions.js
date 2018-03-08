describe("About Functions", function() {

  it("should add two numbers", function() {

    var add = function(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toEqual(FILL_ME_IN);
  });


  it("should specify arguments", function() {

    var add = function(FILL_ME_IN, FILL_ME_IN) {
      return a + b;
    }

    expect(add(1, 2)).toEqual(3);
  });


  it("should multiply two numbers", function() {

    var multiply = function(a, b) {
      return FILL_ME_IN;
    }

    expect(multiply(3, 2)).toEqual(6);
  });


  it("should concatenate two names to give a greeting", function() {

    var greet = function(firstName, lastName) {
      return 'Hello, ' + firstName + ' ' + lastName + '!';
    }

    expect(greet('John', 'Smith')).toEqual(FILL_ME_IN);
  });


  it("should add a tip on to a bill", function() {

    var addTip = function(bill, tipPercent) {
      var tip = (tipPercent / 100) * bill;
      console.log(tip, bill);
      return tip + bill;
    }

    expect(addTip(80, 15)).toEqual(FILL_ME_IN);
  });



  it("should modify an object", function() {
    var orderForTable6 = {
      food: 'Pizza',
      drink: 'Coke'
    };
    var updateFood = function(order, newFood) {
      order.food = newFood;
    }
    updateFood(orderForTable6, 'Chips');
    expect(orderForTable6.food).toBe(FILL_ME_IN);
    expect(orderForTable6.drink).toBe(FILL_ME_IN);
  });


  it("should add an item to a list", function() {
    var drinksList = ['Coke', 'Wine', 'Orange Juice'];

    var addDrink = function(list, newDrink) {
      list.push(newDrink);
    }
    addDrink(drinksList, 'Pineapple Juice');
    expect(drinksList[0]).toEqual(FILL_ME_IN);
    expect(drinksList[1]).toEqual(FILL_ME_IN);
    expect(drinksList[2]).toEqual(FILL_ME_IN);
    expect(drinksList[3]).toEqual(FILL_ME_IN);
  });



  it("should add properties to an object", function() {
    var person = {};
    var addProperty = function(object, key, value) {
      person[key] = value;
    }
    addProperty(person, 'name', 'Bill');
    expect(person.name).toBe(FILL_ME_IN);
    expect(person.age).toBe(undefined);
    addProperty(person, 'age', 30);
    expect(person.age).toBe(FILL_ME_IN);
  });


  it("should allow functions as properties on objects", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);

  });
});
