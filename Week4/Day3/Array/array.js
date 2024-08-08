// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];
  
//   const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
//   console.log(reformattedArray); 
//   console.log(kvArray);


// console.log(["1", "2", "3"].map(parseInt));

// const numbers = [1,2,3,4,5]
// console.log(numbers.map(a=>a*2))

// const users = [
//     {name: 'Alice', age:25},
//     {name: 'Bob', age: 30}
// ]
// console.log(users.map(a=>a.toString()))

// const numbers=[1,2,3,4,5,6,7,8,9,10]

// result = numbers.filter(a=>a%2==0).map(i=>i*i)
// console.log(result)

// const products = [
//     {id: 1, name: 'Laptop'},
//     {id: 2, name: 'Phone'},
//     {id: 3, name: 'Tablet'}
// ];
// product_name = products.map(product=>product.name)
// console.log(product_name);

// const phrases = ["hello world", "javascript is fun", "map method practice"];
// capitalize = phrases.map(word=>word.charAt(0).toUpperCase()+word.slice(1))
// console.log(capitalize);

// const numbers=[1,2,3];
// numbers_object = numbers.map(a=>`{ number: ${a}, square: ${a*a}}`)
// console.log(numbers_object);

// const words = ["hello", "world", "javascript"];
// word_length = words.map(word=>word.length);
// word_length_string = word_length.map(number=>number.toString());
// console.log(word_length);
// console.log(word_length_string);

// const nestedArray = [[1,2],[3,4],[5,6]];
// singleArray = nestedArray.flatMap(array=>array)
// console.log(singleArray);

// const ids = [1,2,3];
// const names = ['Alice', 'Bob', 'Charlie'];

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 }
//   ];
  
//   const formattedUsers = users.map(user => `Name: ${user.name}, Age: ${user.age}`);
  
//   console.log(formattedUsers);

const ids = [1, 2, 3];
const names = ['Alice', 'Bob', 'Charlie'];

const combinedArray = ids.map((id, index) => ({
  id: id,
  name: names[index]
}));

console.log(combinedArray);



  



