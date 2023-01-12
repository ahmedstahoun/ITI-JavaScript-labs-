//1) The Object.assign()  copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }



//2) The Object.create()  creates a new object, using an existing object as the prototype of the newly created object.
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

//3) The Object.defineProperties() defines new or modifies existing properties directly on an object, returning the object.
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object1.property1);
// Expected output: 42

// 4) Object.entries return arrays of key/values
const object2 = {
  a: "somestring",
  b: 42,
};
console.log(Object.entries(object2));

//5) Object.hasOwn  Returns true if it is the object's property (Not inherited)
const object3 = {
  prop: "exists",
};
console.log(Object.hasOwn(object3, "prop")); // True

//6) Object.is  Determines if two values are the same
console.log(Object.is(3, 3));

//7) Object.keys  returns array of property names
const object4 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.keys(object4));

//8) Object.values  returns array of object property values
const object5 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.values(object5));

//9) Object.freeze  makes existing properties non-writable and non-configurable
const obj = {
  prop: 42,
};
Object.freeze(obj);
obj.prop = 33;
console.log(obj.prop); // 42

//10) Object.isFrozen determines if an object is frozen.
const object6 = {
  property1: 42,
};
console.log(Object.isFrozen(object6)); // false
