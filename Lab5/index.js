console.log("External Js file");
//js datatypes
var firstName = "Clara"; //string
let lastName = true; //boolean
const age = 12; //number
var unit = null;
var school; //undefined
let ourArray = [12, 13, 15, 11];
let ourObject = {
  firstname: "Clara",
  lastName: true,
  age: 12,
  studentDetails: function () {
    console.log(
      "This student is called " +
        this.firstname +
        " She is " +
        this.age +
        " years old"
    );
  },
};

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof age);
console.log("type of our array is", typeof ourArray);
console.log("Age of the third student is", ourArray[2]);

ourObject.studentDetails();
//arithmentic operators: + - */
let sum;
sum = age + age; //addition
console.log("The sum is ", sum);
sum = sum + 1; //sum += 1;
console.log("The sum is ", sum);
//comparison operators: > < == >= <= !=
console.log("This logical operator 12 > 13 is ", 12 > 13);
