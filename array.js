// .pop()e hjeket elementin e fundit
// .shift()e hjeket elementin e pare
// .push()e shtojne elemente ne fund
// .unshift()e shtojne elemente ne fillim
// splice(3 cilin element, 1 me hjek) e bene remove ne mes

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const findNumber = numbers.sort((a, b) => b - a)[0];
console.log(findNumber);

// Me kete metod e hjekim elementin e fundit 
const elements = ["bleor", "blend", "olsa"];
elements.pop("");
console.log(elements);

// Me kete metod gjejmë indexin e elementit
let fruit = ["apple", "banana", "orange"];
let index = fruit.indexOf("orange");
console.log(index);

// Metoda qe te gjejme ne cilin index gjendet numri 3 i fundit
let numb = [1, 2, 3, 4, 5, 3, 5, 7, 8, 9, 3, 4, 5, 6];
let lastindex = numb.lastIndexOf(3);
console.log(lastindex);

// Me kete metod gjejme nese elementi ekziston ne arrayin ton
let colors = ["red", "green", "blue", "yellow"];
let exists = colors.includes("black");
console.log(exists);

// metoda per gjetjen e elementit me te madh 
let users = [
    { name: "blend", age: 22 },
    { name: "bleor", age: 30 },
    { name: "olsa", age: 25 }
];

let user = users.find(user => user.age > 25)
console.log(user);

// Metoda per te gjetur cili element fillon me shkronjen a
let fruitss = ["orange", "apple", "banana", "avocado"];
let indexx = fruitss.findIndex(fruit => fruit.startsWith("a"));
console.log(indexx);

// Metoda per te shtuar elemente ne array
let animals = [];
animals.push("lion", "tiger", "elephant");

console.log(animals);

// Metoda per te shtuar elemente ne fillim te nje array
let names = ["Sophia", "Liam"];
names.unshift("Emma", "Oliver");

console.log(names);

// metoda per te hjekur elemtet si psh ketu largova elementin e 2 edhe 3
let colorss = ["red", "green", "blue", "yellow", "purple"];
colorss.splice(1, 2);

console.log(colorss);

// Me kete metod shtojm dy elemente
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 0, "grape", "mango");

console.log(fruits);

// Me kete metod ne i renditum numrat prej me te madhit
let numberss = [4, 1, 7, 3];
numberss.sort((a, b) => a - b);

console.log(numberss);

// Me kete metod i renditum elementet ne menyr alfabetike
let animalss = ["dog", "cat", "elephant", "ant"];
animalss.sort();

console.log(animalss);

// Me kete metod ne bejme revers duke i kthyer francen nga e para
let countries = ["USA", "Germany", "Japan", "France"];
countries.reverse();

console.log(countries);