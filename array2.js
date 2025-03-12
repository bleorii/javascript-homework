// Me kete metod kthejm arraysat me numer te ngritur ne katror
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);

// Me kete metod kthejm arraysat ne vetem shkronjat e para
let elements = ["apple", "banana", "cherry", "date"];
let firstLetters = elements.map(word => word[0]);

console.log(firstLetters); 

// Me kete metod bejme bashk emrin dhe mbiemrin e personave
let people = [
    { firstName: "ronaldo", lastName: "Doe" },
    { firstName: "sondra", lastName: "Smith" },
    { firstName: "Alice", lastName: "robin" }
];

let fullNames = people.map(person => person.firstName + " " + person.lastName);

console.log(fullNames);

// Me kete metod gjejm numrat qift me filter
let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numberss.filter(num => num % 2 === 0);

console.log(evenNumbers);


// Me kete metod i ndajme se kush e me i madh se 18 vjet
let users = [
    { name: "Alice", age: 17 },
    { name: "ronaldo", age: 20 },
    { name: "sondra", age: 16 },
    { name: "David", age: 25 }
];

let adults = users.filter(user => user.age >= 18);

console.log(adults);

// Me kete metod i ndajme se kush ka me shume se 5 shkronja
let words = ["apple", "banana", "cherry", "kiwi", "strawberry", "grape"];

let longWords = words.filter(word => word.length > 5);

console.log(longWords);

// Me kete metod mledhim shumen e numrave
let numb = [1, 2, 3, 4, 5];

let sum = numb.reduce((total, num) => total + num, 0);

console.log(sum);

// Gjejme numrin me te madh
let numbersss = [10, 25, 3, 78, 45, 99, 12];

let maxNumber = numbersss.sort((a, b) => b - a)[0];

console.log(maxNumber);

// Hjekim numrat negativ dhe ne fund gjejm mesataren e atyre qe na mbesin
let num = [10, -5, 20, -3, 30, 40, -15];

let filteredNumbers = num.filter(n => n >= 0); // Hiq numrat negativë

let average = filteredNumbers.reduce((sum, n) => sum + n, 0) / (filteredNumbers.length || 1);

console.log(average)

// I bejme double njehere dhe pastaj i mbledhum
let numberrs = [1, 2, 3, 4, 5];

let totalSum = numbers.map(n => n * 2).reduce((sum, n) => sum + n, 0);

console.log(totalSum);