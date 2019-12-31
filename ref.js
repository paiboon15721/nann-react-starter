let result;

const obj1 = { name: "paiboon" };

const obj2 = obj1;
obj2.name = "nann";

if (obj1 === obj2) {
  result = true;
} else {
  result = false;
}

// if ({ name: "paiboon" } === { name: "paiboon" }) {
//   result = true;
// } else {
//   result = false;
// }

console.log(result);
