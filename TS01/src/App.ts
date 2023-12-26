// const button = document.getElementById('submit')!;
// const a = document.getElementById('input1')! as HTMLInputElement;
// const b = document.getElementById('input2')! as HTMLInputElement;
// const result = document.getElementById('result')!;

// function add(a:number, b:number) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     console.log('clicked')
//     result.innerText = `${add(+a.value, +b.value)}`;
// })

// let xyz: number = 5

// let aa;
// aa="5"
// aa=5
// aa=true
// let c: any =4
// c="dort"
// c=true


// // Array

// let arr :number[]= [1,2,3]
// // let arr1 :number[]= ["1"]  //hata
// arr.push(5)
// // arr.push("5")  //hata


// let str: Array<string>= ["a" , "b"]

// let arr2 =[] // empty array

// let arr3:number[]= [] // empty array correct way

// let arr4:readonly number[]= [1,2,3,4] // mudahale edemeyiz
// // arr4.push(8) // error

// arr = [10,20,30,40] // ama yeniden tanimlayabilir 



// // Tuples

// let myTuple:[number, string];

// myTuple= [2, "Hello"]

// myTuple.push(0,"admin")

// console.log(myTuple);



// let myArray:[number,string][]= [] //Tuples array

// myArray.push([0, "Admin"])
// myArray.push([1, "User"])



// // Enum

// enum Role{
//     User,
//     Admin
// }

// let currentUser:Role = Role.User
// console.log(currentUser);



// enum Tshirt {
//     'Small' = 'S',
//     'Medium' = 'M',
//     'Large' = 'L',
//     'XL' = 100,
//     'XXL'
// }

// console.log(Tshirt.XXL);
// console.log(Tshirt.Medium);



// enum StatusCodes {
//     NotFound = 404, 
//     Success = 200, 
//     Accepted = 202, 
//     BadRequest = 400
// }

// const request: StatusCodes = StatusCodes.Success;
// console.log(request) ;   //200



// // Unknown

// let notSure: unknown = 4
// notSure="Hello"
// notSure=100



// // Void

// function add1(n1:number, n2:number): void {
//     console.log(n1+n2);
//     // return undefined
// }

// // let result1:number = add1(2,5)
// // console.log(result1);





// // Never

// function error(message:string): never {
//     throw new Error(message)
// }

// error("New Error")


// // Union
// let uVar:string | number = 0
// uVar = "0"
// // uVar= true // error

// function checkNumber (n:(string | number)): any{
    
//     if (typeof n ==="number"){

//     }else{
        
//     }
// }

//! Type aliasses 
//*(hangi type degerleri alacağını belirtiyoruz)

//function add(n1: number | string, n2: number | string){}



//type Nums = number | string

//let xc: Nums = false; (error)
//let y: Nums="0"

// function add(n1:Nums, n2: Nums){
//     console.log(add(1,2));
// }

//! String Literals (bu veya bu)

// type car = "BMW" | "Audi"
// let car1 car = "BMW"
// let car2 car = "Audi"
// let car3 car = "Mercedes"

//! Intersection 
//*(iki durumu içeren yerler, hem bu hem bu olsun)

//?Objects
// const employee :{
//     eName: string;
//     id:number;
//     getID():void
// }={
//     eName:"Nico",
//     id:1,
//     getID(){
//         console.log(this.id);
//     }
// }

//* Example

// type Book ={
//     book_id: number;
//     book_name: string,
// };

// type Author ={
//     Author_Id: number;
//     Author_name: string;
// };

// type intersected_type = Book & Author; //book ve author dakileri içerir

// let obj1: intersected_type ={
//     book_id: 1234,
//     book_name: "Lord of the Rings",
//     Author_Id: 1892,
//     Author_name: "J. R. R. Tolkien",
// };

//! Type Asertions 

let score: unknown = "350";
//*console.log(score.length); obj is of type "unknown"

// console.log((<string>score).split(""));
// console.log((<string>score).length);        //? 1. yöntem
// console.log((score as string).split(""));  //? 2.  yöntem

//? Functions
//  opsiyonel (?) olan parametre sona yazılmalı
// function selamla (greet: string, name:string):string{
//     if(!name) name = "user"
//     return `${greet+""+name}`
// }

// selamla("Merhaba", "Hasret")
// selamla("Merhaba")
// selamla("Merhaba", "Hasret", "Yağmur")

//!