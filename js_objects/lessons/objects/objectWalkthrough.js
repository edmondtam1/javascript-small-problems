var me = {
  firstName: 'Ed',
  lastName: 'The Monster',
};

var friend = {
  firstName: 'John',
  lastName: 'Smith',
};

var mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

var father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

// var people = [];

// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// function fullName(person) {
//   console.log(`${person.firstName} ${person.lastName}`);
// }

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

// rollCall(people);

var people = {
  collection: [me, friend, father, mother],
  fullName: function(person) {
    console.log(`${person.firstName} ${person.lastName}`);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) return;

    this.collection.push(person);
  },

  get: function(person) {
    if (this.isInvalidPerson) return;

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson) return;

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },

  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
        comparator.lastName === person.lastName) {
        index = i;
      }
    });
    return index;
  },

  remove: function(person) {
    var index;
    if (this.isInvalidPerson(person)) return;

    index = this.getIndex(person);
    if (index === -1) return;

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
}

people.rollCall();
console.log(people.getIndex(friend)); // => 1
people.remove(friend);
console.log(people.getIndex(friend)); // => -1