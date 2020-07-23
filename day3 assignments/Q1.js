// console.log("hey");

// //question 1 
// let num = window.prompt("the number entered is : ")
// if (num % 2 == 0){
//     console.log(`the number entered is ${num} and its even`)
// }
// else{
//     console.log(`number entered is ${num} and its odd`)
// }

//question 2
function checkstring(){
    const osString =window.prompt ("enter os and its version ")
}
//split by space
const splitString = osString.split("");
console.log(`The os name is ${splitString[0]} and version is ${splitString[1]}`)

//question3
function withCon(){
    let marks=prompt("Enter the Marks to check");
    console.log(marks);
    if(marks>=85)
    console.log(`Marks are ${marks} and Grade is A`);
else if(marks<85 & marks>=75)
   console.log(`Marks are ${marks} and Grade is B`);
else if(marks<75 & marks>=65)
    console.log(`Marks are ${marks} and Grade is C`);
else if(marks<65 & marks>=55)
    console.log(`Marks are ${marks} and Grade is D`);
else if(marks<55 & marks>=45)
     console.log(`Marks are ${marks} and Grade is E`);
else if(marks<45 & marks<=45)
     console.log(`Marks are ${marks} and Grade is F`);
}

//2. with switch case 
function withSwitch(){

    console.log("Using Switch Case : ")
    let marks1= parseInt(prompt("Enter the Marks to check using switch case"));
    console.log(marks1);


    switch (true){
    case marks1<45:
    console.log(`Marks are ${marks1} and Grade is F`);
    break;

    case marks1<55:
    console.log(`Marks are ${marks1} and Grade is E`);
    break;

    case marks1<65:
    console.log(`Marks are ${marks1} and Grade is D`);
    break;

    case marks1<75:
    console.log(`Marks are ${marks1} and Grade is C`);
    break;
        case marks1<=85:
        console.log(`Marks are ${marks1} and Grade is B`);
        break;
        case marks1<=100:
        console.log(`Marks are ${marks1} and Grade is A`);
        break;


        default:
        console.log("Enter Valid Marks")
}
}

document.querySelector(".one").addEventListener("click",evenOdd);
document.querySelector(".two").addEventListener("click",checkString);
document.querySelector(".threeif").addEventListener("click",withCon);
document.querySelector(".threeswitch").addEventListener("click",withSwitch);
