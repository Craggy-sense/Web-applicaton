//functions

function findSum(){
    let number1 = 12;
    let number2 = 14;
    return number1 + number2;
}
let newSum = findSum();
console.log(findSum())
//functions with parameters
function getProduct(num1, num2){
    return num1*num2;
}
let myProduct;
myProduct = getProduct(5,2);
console.log("Product value is " + myProduct);

//conditional statements
let age = 18;
if (age<17){
    console.log('You are not allowed to vote');
}
else if(age>=60 && age<=90) {
    console.log(`you can still drive`);
    } else{
        console.log(`Sorry you cannot drive`)
        };
//looping
for (let i = 1; i < 6; i++){
    console.log("This is sentence", i);
}
// get html elemets
//using an element's id
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
console.log(number1);

//using a class
let ourNumbers = document.getElementsByClassName("numbers")

//using sa tag in html
let ourPars = document.getElementsByTagName('p');
