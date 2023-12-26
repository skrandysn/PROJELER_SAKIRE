const button = document.getElementById('submit');
const a = document.getElementById('input1');
const b = document.getElementById('input2');
const result = document.getElementById('result');
function add(a, b) {
    return a + b;
}
button.addEventListener('click', function () {
    console.log('clicked');
    result.innerText = `${add(+a.value, +b.value)}`;
});
let xyz = 5;
let aa;
aa = "5";
aa = 5;
aa = true;
let c = 4;
c = "dort";
c = true;
// Array
let arr = [1, 2, 3];
// let arr1 :number[]= ["1"]  //hata
arr.push(5);
// arr.push("5")  //hata
let str = ["a", "b"];
let arr2 = []; // empty array
let arr3 = []; // empty array correct way
let arr4 = [1, 2, 3, 4]; // mudahale edemeyiz
// arr4.push(8) // error
arr = [10, 20, 30, 40]; // ama yeniden tanimlayabilir 
// Tuples
let myTuple;
myTuple = [2, "Hello"];
myTuple.push(0, "admin");
console.log(myTuple);
let myArray = []; //Tuples array
myArray.push([0, "Admin"]);
myArray.push([1, "User"]);
// Enum
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
})(Role || (Role = {}));
let currentUser = Role.User;
console.log(currentUser);
var Tshirt;
(function (Tshirt) {
    Tshirt["Small"] = "S";
    Tshirt["Medium"] = "M";
    Tshirt["Large"] = "L";
    Tshirt[Tshirt["XL"] = 100] = "XL";
    Tshirt[Tshirt["XXL"] = 101] = "XXL";
})(Tshirt || (Tshirt = {}));
console.log(Tshirt.XXL);
console.log(Tshirt.Medium);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
const request = StatusCodes.Success;
console.log(request); //200
// Unknown
let notSure = 4;
notSure = "Hello";
notSure = 100;
// Void
function add1(n1, n2) {
    console.log(n1 + n2);
    // return undefined
}
// let result1:number = add1(2,5)
// console.log(result1);
// Never
function error(message) {
    throw new Error(message);
}
error("New Error");
// Union
let uVar = 0;
uVar = "0";
// uVar= true // error
function checkNumber(n) {
    if (typeof n === "number") {
    }
    else {
    }
}
