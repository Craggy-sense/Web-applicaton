//getting html elements by ID
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");

console.log(number1);
console.log(number2);
//function to get product
function getProduct(){
    let ourProduct = number1.value * number2.value;
    //console.log(ourProduct);
    //alert ("Your Product is " + ourProduct);

    document.getElementById("result")
    let ourResult = document.getElementById("result");
    ourResult.innerHTML = "Product is " + ourProduct;
    return false;
}

//get html elements by their tag name
let ourParagraphs = document.getElementsByTagName('p');
console.log(ourParagraphs[1]);
// get html elements by class
let perClass=document.getElementsByClassName('perClass');

console.log(perClass[1]);
//change attribute of html element using js
function changeImage() {
    let img = document.getElementById("myImg");
    img.src ="cutecat.jpeg";


    return false;
}

//changing the style of an Element
let img = document.getElementById("myImg");
//img.style.width="400px";
img.style.borderWidth="2px";
img.style.borderStyle="Solid";
img.style.borderColor="red";