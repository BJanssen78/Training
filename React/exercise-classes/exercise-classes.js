class Animal {
  constructor(species, legs) {
    this.species = species;
    this.legs = legs;
  }

  identify() {
    console.log(`This animal is a ${this.species}, and has ${this.legs} legs.`);
  }
}

class Dog extends Animal {
  constructor() {
    super("dog", 4); // a dog has 4 legs
  }

  bark() {
    console.log("Woof!");
  }
}

const human = new Animal("human", 2);
human.identify();

const dog = new Dog();
dog.bark();
console.log(dog.legs);
dog.identify();
