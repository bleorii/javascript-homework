const age = 12;
//  a i ka bo individi 16 vjet?

// nese i ka bo 16 vjet ekzekutoja qita
if (age >= 16) {
    // ekzekutohet
console.log("you can have the driver license");
} else {
    // le te ekzekutohet qikjo
    console.log("You are still a miner");

} 



let firstName = "Bleor";
let lastName = "Ivanja";
let fullName = `${firstName} ${lastName}`;
console.log("fullName:", fullName);



let albinsHeight = 100;
let albinsWeight = 80;
// var albinsBMI > 2.5;
// let albinsResults = 'Albins BMI is equal to: ";
console.log("albinsResults", albinsHeight + albinsWeight);

albinsBMI = 2;
if (albinsBMI > 2){
    console.log("Albin needs to lose wheight")
} else if (albinsBMI < 2) {
    console.log("Albin needs to gain wheight")
} else {
    console.log("Albin is healthy")
}



const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;

 console.log(`temperature is ${fahrenheit}`);





 // Ky kod tregon numrin a eshte qift ose tek
 function mynumber(d){
    return d %2 === 1 ? "This number is odd" : "This number is even"
 }
 console.log( mynumber(2));




//  / Ky kod tregon numrin a eshte pozitiv ose negativ
 function numrisakt(num){
     if (num > 0) return "This number is positive";
     else if (num < 0) return "This number is negative";
 }
 console.log(numrisakt(2));





 // Ky kod gjen numrin me te madh
function findMax(a,b,c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
console.log("Numri me i madh eshte" , findMax(1,5,7));




// Ky kod gjen vlersimin e studentit
function vlersimi(score){
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
let score = 75;
console.log(`Piket e marra: ${score}. Nota: ${vlersimi(score)}`);




