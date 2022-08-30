//Step 1
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//can't refer to the items in the code so create new varibles
let firstItem = ages[0];
//part b pushed in a new number
ages.push(7);

let lastItem = ages [ages.length -1];
//make a variable for the answer wanted (difference)
let difference= lastItem - firstItem 
//print out the answer to make sure my push on line 6 wvalid
console.log(difference);



var ages =[3, 9, 23, 64, 2, 8, 28, 93, 7];
var sum = 0;
for (var number of ages) {
    sum += number;
}
let average = sum / ages.length;
console.log(average);
console.log(average);

//step 2 create array
var avgName = 0
var names =["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
//for loop 
for(let i=0; i < names.length; i++){
     avgName += names[i].length;
}//for loop to concat names in the array
var concatNames = "";
for (let i = 0; i < names.length; i++){
    if(i>0){
        concatNames += " "; //adds space to names in array
    }
    concatNames += names[i];
}

console.log(concatNames); //prints the names in the array concatted

console.log(avgName / names.length); //2a. to find the average of letters per name

//question 3 how to access the last element of an array
let array = [1, 2, ,3, 4, 5];
let lastElement = array[array.length-1]; //when you don't know the last value use this method
let otherLast = array [4]; //when you do know the last value, use this method

//question how to access the first element of an array
array[0]// gives first element
array.length - 1 // getting last element of array
//question 5, create a new array
let nameLengths = [];
for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log("name lengths in question 5 is : ",nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sumOfNameLengths = 0;
for (let i = 0 ; i<nameLengths.length ; i++){
    sumOfNameLengths = sumOfNameLengths + nameLengths[i];
}
console.log("sum of name lengths in question 6 is : ", sumOfNameLengths);
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function cancate(word, n){
    var sumConcatentate = "";
    for(let i = 0; i<n; i++){
        sumConcatentate = sumConcatentate + word;
    }
    return sumConcatentate;
}

console.log(cancate("Hello", 3));

//8. 
let createFullName = (firstName, lastName) => {
    console.log(firstName + ' ' + lastName);
};
createFullName('Ellie', 'Tate');

//9.	Write a function that takes an array of numbers and returns 
//true if the sum of all the numbers in the array is greater than 100.
function numArray(array){
    let sumOfArray = 0
    for (let i = 0 ; i < array.length ; i++){
      sumOfArray = sumOfArray + array[i]
  }

    if(sumOfArray > 100){
        return true

    }
    else{
        return false;
    }
}
numArray([1, 4, 5, 6])
//1010.	Write a function that takes an array of numbers and 
//returns the average of all the elements in the array.

function findAvg(array){
    let array1 = [2, 4, 6, 8];
    var total = 0;
    for(var i = 0; i < array1.length; i++){
        total += array1[i];
    }
    var avg = total / array1.length; //total divided by the number of elements in the array (array1.length)
    console.log(avg);
}
console.log(findAvg([2, 4, 6, 8]));


//11.	Write a function that takes two arrays of numbers and returns true 
//if the average of the elements in the first array is greater than the average of the elements in the second array.
let array1 = [2, 4, 6, 8];
let array2 = [1, 3, 5 ,7];
function arrayGreater(array1, array2){
    let sum1 = 0;
    let sum2 = 0;
    for(let value1 of array1){
        sum1 += value1;;
    }
    for(let value2 of array2){
        sum2 += value2;
    }

let average1 = sum1 / array1.length;
let average2 = sum2 / array2.length;
return average1 > average2;
}
arrayGreater([array1], [array2]);
function arrayGreater2(array1, array2){
    if(findAvg(array1) > findAvg(array2)){
        console.log(findAvg(array1));
        console.log(findAvg(array2));
        return true;
    } else {
        console.log(findAvg(array1));
        console.log(findAvg(array2));
        return false;
    }
return average1 > average2;
};
console.log(arrayGreater([2, 4, 6, 8], [1, 3, 5, 7]));


//12 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
        return true;
    } 
    else{
        return false;
    }
}console.log(willBuyDrink(true, 11));

//13.13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// this functions says hello in 6 different languages. You type in the language you want to say hello in and it says hello to you. 
function sayingHi(language){
    if(language === "english"){
        alert("Hello!")
    }
    else if(language === "spanish"){
        alert("Ola!");
    }
    else if(language === "portuguese"){
        alert("Oie!");
    }
    else if(language === "french"){
        alert("Bonjur!");
    }
    else if(language === "chinese"){
        alert("你好!");
    }
     else{
        alert("Sorry, language not avaialable yet.");
     }
}

var value = prompt("What language do you want to say Hello in?")
sayingHi(value)