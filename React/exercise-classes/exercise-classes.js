class Animal {
  constructor(species, legs, name) {
    this.species = species;
    this.legs = legs;
    this.name = name;
  }

  identify() {
    console.log(
      `This animal is a ${this.species}, and has ${this.legs} legs, and his/her name is ${this.name}`
    );
  }
}

class Dog extends Animal {
  constructor() {
    super("dog", 4, "poppie"); // a dog has 4 legs
  }

  bark() {
    console.log("Woof!");
  }
  fetch(item) {
    console.log(`Fetching ${item}`);
  }
}

class Cat extends Animal {
  constructor() {
    super("cat", 4, "skippy");
  }
  meow() {
    console.log("meow meow");
  }
  scratch(item) {
    console.log(`scratching ${item}`);
  }
  call() {
    console.log("cat's don't listen very well, try again.");
  }
}

const human = new Animal("human", 2, "mark");
// human.identify();

const dog = new Dog();
const cat = new Cat();
// dog.bark();
// console.log(dog.legs);
// dog.identify();
// dog.fetch("bal");
cat.identify();
cat.scratch("couch");
cat.meow();
cat.call();
