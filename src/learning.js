// Variable
// Let var  const

// const name = "Felix Olawole";
// Data Type
// Primative Data Type And Reference Data Type

// Number
// let amount = 6; //Integer 0 -9 positive or negative
// let price = 4.99; //float decimal point

// String
// let single = "Wheres my bandit hat?";
// let double = "Wheres my bandit hat?";

// Boolen
// const isMarried = true; //True or False

// undefined
// let userName; //variable is declear but not value yet
// userName = "Olawole";

// null
// let info = null;
// info = "Go Home";
// console.log(info);

// Reference Data Type

// Object
const person = {
  name: "Felix",
  age: 23,
  isMarried: false,
  siblings: ["Kemi", "Bimpe"],
  address: {
    street: "Block 2 Dada Estate",
    city: "Osogbo",
    state: "Osun",
    country: null,
  },
  color: "Black",
};
const { name, age, siblings, isMarried } = person;
console.log(name, siblings, age, isMarried);

// Array
// const lists = [
//   "fish",
//   "tomatoes",
//   "Yam",
//   2000,
//   {
//     name: "James",
//     job: null,
//   },
// ];

// Add into Array
// lists.push("Rice");
// lists.unshift("gas");
// lists.pop();

// console.log(lists.length, lists);

// Function
// // Defining the function:
// function sum(num1, num2) {
//   return num1 + num2;
// }

// // Calling the function:
// sum(3, 6); // 9

// sum(20, 50); //70
// console.log(sum(3, 6), sum(20, 50));

// // Anonymous function
// const rocketToMars = function () {
//   return "BOOM!";
// };
// console.log(rocketToMars());

// Arrow Function

const User = (person) => {
  const { name, address, color, isMarried } = person;

  const { city, street, country } = address;
  return `My name is ${name} and my home address: ${street}, ${city} ${
    country ? country : ""
  }.  I am ${color} in complexion also i am ${
    isMarried ? "Married" : "Not Married"
  }`;
};

const person2 = {
  name: "James Mike",
  age: 40,
  isMarried: true,
  siblings: [],
  address: {
    street: "Suits 8 Abuja",
    city: "Abuja",
    state: "FCT",
    country: "Nigeria",
  },
  color: "White",
};
console.log(User(person));
console.log(User(person2));
// console.log(User("Felix"));
