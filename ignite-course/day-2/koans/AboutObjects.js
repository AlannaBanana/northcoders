describe("About Objects", function () {

  it('should create objects with object literal notation', function () {
    var myObject = {};
    expect(typeof myObject).toEqual(FILL_ME_IN);
  });

  it('should add properties to the object with literal notation', function () {
    // in literal notation we define properties with a key name, followed by a ':'
    // followed by the value we want to assign
    // Properties must be comma separated (no need for a comma at the end)

    var father = {
      firstname: 'Michael',
      lastname: 'Bluth',
      age: 33
    };

    // we can access object properties with dot notation like:
    //                                          object.property

    expect(father.firstname).toEqual(FILL_ME_IN);
    expect(father.lastname).toEqual(FILL_ME_IN);

    // like all variable names in JS, object and property names are case sensitive
    expect(father.firstName).toEqual(FILL_ME_IN);

    // when we look for a property in an object that doesn't exist,
    // we get back the value undefined
    expect(father.car).toEqual(FILL_ME_IN);
  });

  it('should add properties with normal assignment', function () {
    // We can also add poperties by using dot notation and assigning the
    // a value just like any other variable

    var son = {};
    son.name = 'George Michael';
    son.lastname = 'Bluth';
    son.age = 16;
    son.jobs = ['Frozen Banana Salesman', 'CEO of Fakeblock'];

    expect(son.name).toEqual(FILL_ME_IN);
    expect(typeof son.jobs).toEqual(FILL_ME_IN);
    expect(son.jobs[1]).toEqual(FILL_ME_IN);
  });

  it('should add methods to objects', function () {
    // we can also store functions inside objects, we call them methods
    var uncle = {
      name: 'GOB',
      getCatchphrase: function () {
        return 'I\'ve made a huge mistake'
      }
    }

    // can call a method by accessing it with dot notation and calling it like
    // any other function with ()
    var catchphrase = uncle.getCatchphrase();

    expect(catchphrase).toEqual(FILL_ME_IN);
  });

  it('should access properties and methods with bracket notation', function () {
    // When we access properties and methods with dot notation we need to exactly
    // match the name.

    // Another way of accessing them is with bracket notation (just like arrays)
    // which accepts a value that should match a property name
    var starWars = {
      episode4: 'A New Hope',
      episode5: 'Empire Strikes Back',
      episode6: 'Return of the Jedi',
      episode7: 'The Force Awakens'
    };

    // This is great for generating property names programmatically
    // (i.e. as a result of a calculation)
    var worstOne = starWars['episode' + (10 - 4)];
    expect(worstOne).toEqual(FILL_ME_IN);
    expect(starWars[FILL_ME_IN]).toEqual('The Force Awakens');
  });

  it('should delete properties of an object', function () {
    var brotherInLaw = {
      name: "Tobias",
      lastname: 'Funke',
      job: 'therapist'
    };
    expect(brotherInLaw.job).toEqual(FILL_ME_IN);
    // we can overwrite object properties by reassigning them to a value:
    brotherInLaw.job = 'actor'
    expect(brotherInLaw.job).toEqual(FILL_ME_IN);
    // and we can delete properties with the special 'delete' operator
    delete brotherInLaw.job;
    expect(brotherInLaw.job).toEqual(FILL_ME_IN);
  });

  // object nesting
  it('should be able to nest objects and arrays inside objects', function () {
    // we can assign objects and arrays as properties of an object
    var bluthFamily = {
      father: {
        name: 'George'
      },
      mother: {
        name: 'Lucille'
      },
      sons: [{name: 'GOB'}, {name: 'Michael'}, {name: 'Buster'}],
      daughters: [{name: 'Lindsay'}]
    };

    // we can access them with both dot and bracket notation:
    expect(bluthFamily.father.name).toEqual(FILL_ME_IN);
    expect(bluthFamily.mother['name']).toEqual(FILL_ME_IN);
    expect(bluthFamily['sons'][2].name).toEqual(FILL_ME_IN);
    expect(bluthFamily.FILL_ME_IN[FILL_ME_IN].name).toEqual('Lindsay');
  });
});
